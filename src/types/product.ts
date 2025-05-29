export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hombres' | 'mujeres' | 'arabes' | 'otros';
  images: string[];
}
