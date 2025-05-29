import React from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ProductCard } from "../components/product-card";
import { products } from "../data/products";
import { ProductType } from "../types/product";

const HomePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("categoria");
  
  const [selectedCategory, setSelectedCategory] = React.useState<string>(categoryParam || "todos");
  
  const filteredProducts = React.useMemo(() => {
    if (selectedCategory === "todos") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  React.useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategoryChange = (key: React.Key) => {
    setSelectedCategory(key.toString());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full relative overflow-hidden">
              <img
                src="https://img.heroui.chat/image/fashion?w=600&h=600&u=male-model-perfume"
                alt="Perfumes para hombre"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <span className="text-white font-medium text-sm md:text-base">Para Él</span>
              </div>
            </div>
            <div className="w-1/2 h-full relative overflow-hidden">
              <img
                src="https://img.heroui.chat/image/fashion?w=600&h=600&u=female-model-perfume"
                alt="Perfumes para mujer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-right">
                <span className="text-white font-medium text-sm md:text-base">Para Ella</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center drop-shadow-lg">AURA PERFUMES</h1>
            <p className="text-lg md:text-xl max-w-md text-center drop-shadow-md">
              Descubre fragancias que cuentan historias y despiertan emociones
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-secondary">Nuestros Perfumes</h2>
          <Chip color="primary" variant="flat">
            {filteredProducts.length} productos
          </Chip>
        </div>

        <Tabs 
          aria-label="Categorías de perfumes"
          selectedKey={selectedCategory}
          onSelectionChange={handleCategoryChange}
          color="secondary"
          variant="light"
          classNames={{
            tabList: "bg-primary-50 p-1 rounded-lg",
            cursor: "bg-white shadow-md",
            tab: "px-4 py-2 text-sm"
          }}
        >
          <Tab 
            key="todos" 
            title={
              <div className="flex items-center gap-1">
                <Icon icon="lucide:grid" width={16} height={16} />
                <span>Todos</span>
              </div>
            }
          />
          <Tab 
            key="hombres" 
            title={
              <div className="flex items-center gap-1">
                <Icon icon="lucide:user" width={16} height={16} />
                <span>Hombres</span>
              </div>
            }
          />
          <Tab 
            key="mujeres" 
            title={
              <div className="flex items-center gap-1">
                <Icon icon="lucide:smile" width={16} height={16} />
                <span>Mujeres</span>
              </div>
            }
          />
          <Tab 
            key="arabes" 
            title={
              <div className="flex items-center gap-1">
                <Icon icon="lucide:moon" width={16} height={16} />
                <span>Árabes</span>
              </div>
            }
          />
          <Tab 
            key="otros" 
            title={
              <div className="flex items-center gap-1">
                <Icon icon="lucide:sparkles" width={16} height={16} />
                <span>Otros</span>
              </div>
            }
          />
        </Tabs>

        <div className="mt-6">
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon icon="lucide:search-x" width={48} height={48} className="mx-auto text-primary-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">No se encontraron productos</h3>
              <p className="text-foreground-500">
                No hay productos disponibles en esta categoría actualmente.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;