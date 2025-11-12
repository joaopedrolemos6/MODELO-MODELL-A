export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: Color[];
  inStock: boolean;
  featured: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface Color {
  name: string;
  hex: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

export interface FilterOptions {
  categories: string[];
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  sortBy: 'relevance' | 'price-asc' | 'price-desc' | 'newest';
}
