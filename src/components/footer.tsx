import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Icon icon="lucide:spray-can" width={32} height={32} className="text-primary-200" />
              <span className="text-2xl font-semibold">AURA</span>
            </div>
            <p className="text-sm mt-2 text-primary-100">Perfumes de alta calidad</p>
            
            <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <Link href="https://instagram.com/auraperfumes" isExternal className="hover:opacity-80 transition-opacity">
                <Icon icon="logos:instagram-icon" width={24} height={24} />
              </Link>
              <Link href="https://facebook.com/auraperfumes" isExternal className="hover:opacity-80 transition-opacity">
                <Icon icon="logos:facebook" width={24} height={24} />
              </Link>
              <Link href="https://wa.me/5491123456789" isExternal className="hover:opacity-80 transition-opacity">
                <Icon icon="logos:whatsapp-icon" width={24} height={24} />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full md:w-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold mb-3 text-primary-200 uppercase tracking-wider">Enlaces</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link as={RouteLink} to="/" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to="/contacto" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to="/medios-de-pago" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Medios de Pago
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold mb-3 text-primary-200 uppercase tracking-wider">Categorías</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link as={RouteLink} to="/?categoria=hombres" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Hombres
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to="/?categoria=mujeres" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Mujeres
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to="/?categoria=arabes" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Perfumes Árabes
                  </Link>
                </li>
                <li>
                  <Link as={RouteLink} to="/?categoria=otros" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    Otros Perfumes
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold mb-3 text-primary-200 uppercase tracking-wider">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Icon icon="lucide:phone" className="text-primary-200" width={16} height={16} />
                  <Link href="tel:+5491123456789" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    +54 9 11 2345-6789
                  </Link>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Icon icon="lucide:mail" className="text-primary-200" width={16} height={16} />
                  <Link href="mailto:contacto@auraperfumes.com" color="foreground" className="opacity-90 hover:opacity-100 hover:underline font-medium">
                    contacto@auraperfumes.com
                  </Link>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Icon icon="lucide:map-pin" className="text-primary-200" width={16} height={16} />
                  <span className="opacity-90 font-medium">Av. Corrientes 1234, CABA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary-300/30 text-center text-xs">
          <p>© {new Date().getFullYear()} Aura Perfumes. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};