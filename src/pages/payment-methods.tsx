import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

const PaymentMethodsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-secondary">Medios de Pago</h1>
      
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardBody className="p-6">
            <h2 className="text-xl font-semibold mb-6">Aceptamos los siguientes medios de pago</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Icon icon="lucide:credit-card" width={20} height={20} className="text-secondary" />
                    Tarjetas de Crédito
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:visa" width={40} height={24} />
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:mastercard" width={40} height={24} />
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:amex" width={40} height={24} />
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:naranja" width={40} height={24} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground-500">
                    Hasta 12 cuotas sin interés con tarjetas seleccionadas.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Icon icon="lucide:landmark" width={20} height={20} className="text-secondary" />
                    Transferencia Bancaria
                  </h3>
                  <p className="text-sm text-foreground-500">
                    Transferencia inmediata a nuestra cuenta bancaria con 10% de descuento.
                  </p>
                  <div className="mt-3 p-3 bg-white rounded border border-primary-100">
                    <p className="text-sm">
                      <strong>Banco:</strong> Banco Nación Argentina<br />
                      <strong>Titular:</strong> Aura Perfumes S.R.L.<br />
                      <strong>CUIT:</strong> 30-12345678-9<br />
                      <strong>CBU:</strong> 0110012345678901234567<br />
                      <strong>Alias:</strong> AURA.PERFUMES
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Icon icon="lucide:wallet" width={20} height={20} className="text-secondary" />
                    Billeteras Virtuales
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:mercado-pago" width={80} height={24} />
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm flex items-center justify-center">
                      <Icon icon="logos:uala" width={40} height={24} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground-500">
                    Pago inmediato con códigos QR y links de pago.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Icon icon="lucide:banknote" width={20} height={20} className="text-secondary" />
                    Efectivo
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:rapipago" width={60} height={24} />
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm">
                      <Icon icon="logos:pagofacil" width={60} height={24} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground-500">
                    Generamos un código para que puedas pagar en cualquier sucursal.
                  </p>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Icon icon="lucide:shopping-bag" width={20} height={20} className="text-secondary" />
                    En Tienda
                  </h3>
                  <p className="text-sm text-foreground-500">
                    Pago en efectivo, tarjeta o QR directamente en nuestra tienda física.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-secondary">Información importante</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-foreground-600">
                <li>Los precios publicados incluyen IVA.</li>
                <li>Las promociones bancarias pueden variar según la entidad emisora de la tarjeta.</li>
                <li>Para compras mayoristas consultar descuentos especiales.</li>
                <li>Aceptamos devoluciones dentro de los 10 días de realizada la compra.</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;