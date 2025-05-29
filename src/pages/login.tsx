import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/auth-context";

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const history = useHistory();
  
  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/admin");
    }
  }, [isAuthenticated, history]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!username || !password) {
      setError("Por favor, complete todos los campos");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      
      if (success) {
        history.push("/admin");
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card className="border border-primary-100">
          <CardBody className="p-6">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-3 rounded-full">
                <Icon icon="lucide:lock" width={32} height={32} className="text-secondary" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-6">Panel de Administración</h1>
            
            {error && (
              <div className="bg-danger-100 text-danger p-3 rounded-md mb-4 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Usuario"
                placeholder="Ingrese su nombre de usuario"
                value={username}
                onValueChange={setUsername}
                startContent={<Icon icon="lucide:user" className="text-default-400" />}
                isRequired
              />
              
              <Input
                label="Contraseña"
                placeholder="Ingrese su contraseña"
                type="password"
                value={password}
                onValueChange={setPassword}
                startContent={<Icon icon="lucide:key" className="text-default-400" />}
                isRequired
              />
              
              <Button
                type="submit"
                color="secondary"
                className="w-full"
                isLoading={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
            
            <p className="mt-6 text-center text-sm text-foreground-500">
              Acceso exclusivo para administradores de Aura Perfumes
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;