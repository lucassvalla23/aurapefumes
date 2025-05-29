import React from "react";
import { Card, CardBody, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-secondary">Contacto</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardBody className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Icon icon="lucide:map-pin" width={20} height={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-foreground-500">Av. Corrientes 1234, CABA</p>
                      <p className="text-foreground-500">Buenos Aires, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Icon icon="lucide:phone" width={20} height={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-foreground-500">
                        <Link href="tel:+5491123456789" color="foreground">
                          +54 9 11 2345-6789
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Icon icon="lucide:mail" width={20} height={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-foreground-500">
                        <Link href="mailto:contacto@auraperfumes.com" color="foreground">
                          contacto@auraperfumes.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Icon icon="lucide:clock" width={20} height={20} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Horario de Atención</h3>
                      <p className="text-foreground-500">Lunes a Viernes: 9:00 - 20:00</p>
                      <p className="text-foreground-500">Sábados: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
                
                <div className="space-y-4">
                  <Button
                    as={Link}
                    href="https://instagram.com/auraperfumes"
                    target="_blank"
                    rel="noopener noreferrer"
                    startContent={<Icon icon="logos:instagram-icon" width={24} height={24} />}
                    className="w-full justify-start"
                    color="secondary"
                    variant="flat"
                  >
                    @auraperfumes
                  </Button>
                  
                  <Button
                    as={Link}
                    href="https://wa.me/5491123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    startContent={<Icon icon="logos:whatsapp-icon" width={24} height={24} />}
                    className="w-full justify-start"
                    color="success"
                    variant="flat"
                  >
                    WhatsApp: +54 9 11 2345-6789
                  </Button>
                  
                  <Button
                    as={Link}
                    href="https://facebook.com/auraperfumes"
                    target="_blank"
                    rel="noopener noreferrer"
                    startContent={<Icon icon="logos:facebook" width={24} height={24} />}
                    className="w-full justify-start"
                    color="primary"
                    variant="flat"
                  >
                    Facebook: Aura Perfumes
                  </Button>
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
                  <div className="aspect-video bg-primary-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9908103769766!2d-58.38383492425536!3d-34.60373887295426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses-419!2sar!4v1689290145729!5m2!1ses-419!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Aura Perfumes"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;