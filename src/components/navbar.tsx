import React from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/auth-context";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <HeroNavbar
      isBordered
      isBlurred={false}
      className="bg-primary/80 backdrop-blur-md border-b border-primary-200"
    >
      <NavbarBrand>
        <RouteLink to="/" className="flex items-center gap-2">
          <Icon icon="lucide:spray-can" width={28} height={28} className="text-secondary" />
          <p className="font-semibold text-xl text-secondary">AURA</p>
        </RouteLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                variant="light"
                className="text-secondary"
                endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
              >
                Categorías
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Categorías de perfumes">
            <DropdownItem key="hombres" as={RouteLink} to="/?categoria=hombres">
              Hombres
            </DropdownItem>
            <DropdownItem key="mujeres" as={RouteLink} to="/?categoria=mujeres">
              Mujeres
            </DropdownItem>
            <DropdownItem key="arabes" as={RouteLink} to="/?categoria=arabes">
              Perfumes Árabes
            </DropdownItem>
            <DropdownItem key="otros" as={RouteLink} to="/?categoria=otros">
              Otros Perfumes
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem isActive={location.pathname === "/contacto"}>
          <Link as={RouteLink} to="/contacto" color="foreground">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem isActive={location.pathname === "/medios-de-pago"}>
          <Link as={RouteLink} to="/medios-de-pago" color="foreground">
            Medios de Pago
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {isAuthenticated ? (
          <Dropdown>
            <DropdownTrigger>
              <Button 
                variant="light"
                className="text-secondary"
                endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
              >
                Admin
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Acciones de administrador">
              <DropdownItem key="admin" as={RouteLink} to="/admin">
                Panel de Control
              </DropdownItem>
              <DropdownItem key="logout" onPress={logout}>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem className="hidden sm:flex">
            <Link as={RouteLink} to="/login" color="secondary" variant="flat">
              <Icon icon="lucide:log-in" className="mr-1" />
              Admin
            </Link>
          </NavbarItem>
        )}
        <NavbarItem className="sm:hidden">
          <Button
            isIconOnly
            variant="light"
            onPress={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <Icon icon="lucide:menu" width={24} height={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md p-4 flex flex-col gap-2 sm:hidden z-50">
          <Link as={RouteLink} to="/?categoria=hombres" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Hombres
          </Link>
          <Link as={RouteLink} to="/?categoria=mujeres" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Mujeres
          </Link>
          <Link as={RouteLink} to="/?categoria=arabes" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Perfumes Árabes
          </Link>
          <Link as={RouteLink} to="/?categoria=otros" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Otros Perfumes
          </Link>
          <Link as={RouteLink} to="/contacto" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Contacto
          </Link>
          <Link as={RouteLink} to="/medios-de-pago" className="p-2 bg-white/20 hover:bg-white/30 rounded-md text-secondary font-medium">
            Medios de Pago
          </Link>
          {!isAuthenticated && (
            <Link as={RouteLink} to="/login" className="p-2 bg-secondary text-white hover:bg-secondary/80 rounded-md font-medium">
              Admin
            </Link>
          )}
        </div>
      )}
    </HeroNavbar>
  );
};