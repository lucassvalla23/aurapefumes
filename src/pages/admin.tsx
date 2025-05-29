import React from "react";
import { Tabs, Tab, Card, CardBody, Input, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../context/auth-context";
import { products as initialProducts } from "../data/products";
import { ProductType } from "../types/product";

const AdminPage: React.FC = () => {
  const { logout } = useAuth();
  const [products, setProducts] = React.useState<ProductType[]>(() => {
    const savedProducts = localStorage.getItem("aura_products");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  
  const [newProduct, setNewProduct] = React.useState<Omit<ProductType, "id" | "images"> & { imageFiles: File[] }>({
    name: "",
    description: "",
    price: 0,
    category: "hombres",
    imageFiles: [],
  });
  
  const [previewImages, setPreviewImages] = React.useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newFiles = Array.from(files);
    setNewProduct(prev => ({
      ...prev,
      imageFiles: [...prev.imageFiles, ...newFiles]
    }));
    
    // Generate preview URLs
    const newPreviews = newFiles.map(file => URL.createObjectURL(file));
    setPreviewImages(prev => [...prev, ...newPreviews]);
  };
  
  const removeImage = (index: number) => {
    setNewProduct(prev => ({
      ...prev,
      imageFiles: prev.imageFiles.filter((_, i) => i !== index)
    }));
    
    // Revoke the URL to avoid memory leaks
    URL.revokeObjectURL(previewImages[index]);
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    
    // Simulate image upload and processing
    setTimeout(() => {
      const newProductWithImages: ProductType = {
        id: Date.now().toString(),
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        category: newProduct.category,
        // In a real app, these would be URLs from your image upload service
        images: previewImages.length > 0 
          ? previewImages 
          : [`https://img.heroui.chat/image/fashion?w=500&h=500&u=perfume${Date.now()}`]
      };
      
      const updatedProducts = [...products, newProductWithImages];
      setProducts(updatedProducts);
      
      // Save to local storage
      localStorage.setItem("aura_products", JSON.stringify(updatedProducts));
      
      // Reset form
      setNewProduct({
        name: "",
        description: "",
        price: 0,
        category: "hombres",
        imageFiles: [],
      });
      setPreviewImages([]);
      setIsSubmitting(false);
      setSuccessMessage("¡Producto agregado exitosamente!");
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 1500);
  };
  
  const deleteProduct = (id: string) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("aura_products", JSON.stringify(updatedProducts));
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-secondary">Panel de Administración</h1>
        <Button 
          color="danger" 
          variant="light" 
          onPress={logout}
          startContent={<Icon icon="lucide:log-out" />}
        >
          Cerrar Sesión
        </Button>
      </div>
      
      <Tabs 
        aria-label="Opciones de administración"
        color="secondary"
        variant="underlined"
        classNames={{
          tabList: "gap-6",
          cursor: "bg-secondary",
          tab: "max-w-fit px-0 h-12"
        }}
      >
        <Tab
          key="productos"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:shopping-bag" />
              <span>Productos</span>
            </div>
          }
        >
          <Card className="mt-6">
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Lista de Productos</h2>
              <Table 
                aria-label="Lista de productos"
                removeWrapper
                classNames={{
                  th: "bg-primary-50 text-secondary font-medium",
                  td: "py-3"
                }}
              >
                <TableHeader>
                  <TableColumn>IMAGEN</TableColumn>
                  <TableColumn>NOMBRE</TableColumn>
                  <TableColumn>CATEGORÍA</TableColumn>
                  <TableColumn>PRECIO</TableColumn>
                  <TableColumn>ACCIONES</TableColumn>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        <span className="capitalize">{product.category}</span>
                      </TableCell>
                      <TableCell>${product.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          variant="light"
                          onPress={() => deleteProduct(product.id)}
                        >
                          <Icon icon="lucide:trash-2" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Producto</h2>
              
              {successMessage && (
                <div className="bg-success-100 text-success p-3 rounded-md mb-4">
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Nombre del Perfume"
                  placeholder="Ej: Elegance Noir"
                  value={newProduct.name}
                  onValueChange={(value) => setNewProduct({...newProduct, name: value})}
                  isRequired
                />
                
                <Input
                  label="Descripción"
                  placeholder="Breve descripción del perfume"
                  value={newProduct.description}
                  onValueChange={(value) => setNewProduct({...newProduct, description: value})}
                  isRequired
                />
                
                <Input
                  type="number"
                  label="Precio"
                  placeholder="Ej: 12500"
                  value={newProduct.price.toString()}
                  onValueChange={(value) => setNewProduct({...newProduct, price: Number(value)})}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  isRequired
                />
                
                <div>
                  <label className="block text-sm mb-1">Categoría</label>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="flat" 
                        className="w-full justify-between"
                        endContent={<Icon icon="lucide:chevron-down" />}
                      >
                        {newProduct.category === "hombres" && "Hombres"}
                        {newProduct.category === "mujeres" && "Mujeres"}
                        {newProduct.category === "arabes" && "Perfumes Árabes"}
                        {newProduct.category === "otros" && "Otros Perfumes"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      aria-label="Categorías de perfumes"
                      onAction={(key) => setNewProduct({...newProduct, category: key as ProductType["category"]})}
                    >
                      <DropdownItem key="hombres">Hombres</DropdownItem>
                      <DropdownItem key="mujeres">Mujeres</DropdownItem>
                      <DropdownItem key="arabes">Perfumes Árabes</DropdownItem>
                      <DropdownItem key="otros">Otros Perfumes</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Imágenes</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {previewImages.map((preview, index) => (
                      <div key={index} className="relative w-20 h-20">
                        <img 
                          src={preview} 
                          alt={`Vista previa ${index + 1}`} 
                          className="w-full h-full object-cover rounded"
                        />
                        <Button
                          isIconOnly
                          size="sm"
                          color="danger"
                          variant="solid"
                          className="absolute -top-2 -right-2 w-5 h-5 min-w-0 p-0 rounded-full"
                          onPress={() => removeImage(index)}
                        >
                          <Icon icon="lucide:x" width={12} height={12} />
                        </Button>
                      </div>
                    ))}
                    
                    <Button
                      variant="flat"
                      color="primary"
                      className="w-20 h-20 flex-col"
                      onPress={() => fileInputRef.current?.click()}
                    >
                      <Icon icon="lucide:plus" width={24} height={24} />
                      <span className="text-xs">Agregar</span>
                    </Button>
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <p className="text-xs text-foreground-500">
                    Puedes subir múltiples imágenes. Formatos: JPG, PNG, WebP.
                  </p>
                </div>
                
                <Button
                  type="submit"
                  color="secondary"
                  className="w-full"
                  isLoading={isSubmitting}
                  startContent={!isSubmitting && <Icon icon="lucide:plus" />}
                >
                  {isSubmitting ? "Agregando..." : "Agregar Producto"}
                </Button>
              </form>
            </CardBody>
          </Card>
        </Tab>
        
        <Tab
          key="estadisticas"
          title={
            <div className="flex items-center gap-2">
              <Icon icon="lucide:bar-chart-2" />
              <span>Estadísticas</span>
            </div>
          }
        >
          <Card className="mt-6">
            <CardBody>
              <h2 className="text-xl font-semibold mb-4">Resumen de Productos</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-primary-50">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground-500">Total Productos</p>
                        <p className="text-2xl font-semibold">{products.length}</p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Icon icon="lucide:package" width={24} height={24} className="text-secondary" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="bg-primary-50">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground-500">Hombres</p>
                        <p className="text-2xl font-semibold">
                          {products.filter(p => p.category === "hombres").length}
                        </p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Icon icon="lucide:user" width={24} height={24} className="text-secondary" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="bg-primary-50">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground-500">Mujeres</p>
                        <p className="text-2xl font-semibold">
                          {products.filter(p => p.category === "mujeres").length}
                        </p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Icon icon="lucide:smile" width={24} height={24} className="text-secondary" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card className="bg-primary-50">
                  <CardBody className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-foreground-500">Árabes</p>
                        <p className="text-2xl font-semibold">
                          {products.filter(p => p.category === "arabes").length}
                        </p>
                      </div>
                      <div className="bg-primary/20 p-2 rounded-full">
                        <Icon icon="lucide:moon" width={24} height={24} className="text-secondary" />
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <div className="text-center py-8">
                <Icon icon="lucide:bar-chart" width={64} height={64} className="mx-auto text-primary-300 mb-4" />
                <h3 className="text-xl font-medium mb-2">Estadísticas en desarrollo</h3>
                <p className="text-foreground-500 max-w-md mx-auto">
                  Esta sección mostrará gráficos y análisis detallados de ventas, inventario y tendencias en una futura actualización.
                </p>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default AdminPage;