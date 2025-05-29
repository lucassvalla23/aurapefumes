import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductType } from "../types/product";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Card className="overflow-hidden border border-primary-100 hover:border-primary-300 transition-all duration-300">
      <CardBody className="p-0 flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {product.images.length > 1 && (
            <>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white"
                onPress={prevImage}
              >
                <Icon icon="lucide:chevron-left" width={16} height={16} />
              </Button>
              <Button
                isIconOnly
                size="sm"
                variant="flat"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white"
                onPress={nextImage}
              >
                <Icon icon="lucide:chevron-right" width={16} height={16} />
              </Button>
              
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {product.images.map((_, index) => (
                  <span
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? "bg-secondary" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          <div className="absolute top-2 right-2">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary text-secondary rounded">
              {product.category}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-sm text-foreground-500 mb-2 line-clamp-2">{product.description}</p>
          <div className="mt-auto">
            <p className="text-xl font-semibold text-secondary">${product.price.toLocaleString()}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};