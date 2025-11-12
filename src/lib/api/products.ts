import { Product } from '@/types';

// Mock product data
export const mockProducts: Product[] = [
  {
    id: '1',
    slug: 'sutia-com-bojo-renda',
    name: 'Sutiã com Bojo - Renda Francesa',
    description: 'Sutiã com bojo anatômico e detalhes em renda importada. Conforto e sofisticação para o dia a dia.',
    price: 89.90,
    compareAtPrice: 129.90,
    images: [
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8l6vr2mlqlt59',
      'https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8l6vr2mlqlt59'
    ],
    category: 'sutias',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Rosa', hex: '#EFC5CE' },
      { name: 'Preto', hex: '#000000' },
      { name: 'Nude', hex: '#D4A57A' }
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: '2',
    slug: 'calcinha-cintura-alta',
    name: 'Calcinha Cintura Alta - Microfibra',
    description: 'Calcinha modeladora em microfibra com toque macio e acabamento invisível.',
    price: 49.90,
    compareAtPrice: 69.90,
    images: [
      'https://images.tcdn.com.br/img/img_prod/913008/kit_3_calcinha_cintura_alta_dupla_sem_costura_microfibra_1062_235_1_83ccec10c7e428a1bce68837357aa0bd.jpg',
      'https://images.tcdn.com.br/img/img_prod/913008/kit_3_calcinha_cintura_alta_dupla_sem_costura_microfibra_1062_235_1_83ccec10c7e428a1bce68837357aa0bd.jpg'
    ],
    category: 'calcinhas',
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: [
      { name: 'Rosa', hex: '#EFC5CE' },
      { name: 'Preto', hex: '#000000' },
      { name: 'Branco', hex: '#FFFFFF' }
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: '3',
    slug: 'conjunto-renda-premium',
    name: 'Conjunto Renda Premium',
    description: 'Conjunto sofisticado com sutiã e calcinha em renda guipir. Perfeito para ocasiões especiais.',
    price: 159.90,
    compareAtPrice: 219.90,
    images: [
      'https://m.media-amazon.com/images/I/41OEaokgIcL._AC_.jpg',
      'https://m.media-amazon.com/images/I/41OEaokgIcL._AC_.jpg'
    ],
    category: 'sutias',
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Vinho', hex: '#722F37' },
      { name: 'Verde Esmeralda', hex: '#50C878' }
    ],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 89
  },
  {
    id: '4',
    slug: 'top-esportivo-elastico',
    name: 'Top Esportivo - Tecido Elástico',
    description: 'Top esportivo com compressão leve e tecido respirável. Ideal para treinos e yoga.',
    price: 79.90,
    images: [
      'https://img.lojasrenner.com.br/item/929914901/original/4.jpg'
    ],
    category: 'sport',
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Rosa', hex: '#EFC5CE' },
      { name: 'Cinza', hex: '#808080' }
    ],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 56
  }
];

// Mock API functions
export const getProducts = async (filters?: Partial<any>): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...mockProducts];
      
      if (filters?.category) {
        filtered = filtered.filter(p => p.category === filters.category);
      }
      
      if (filters?.sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (filters?.sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
      }
      
      resolve(filtered);
    }, 500);
  });
};

export const getProductBySlug = async (slug: string): Promise<Product | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.slug === slug);
      resolve(product || null);
    }, 300);
  });
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.filter(p => p.featured));
    }, 400);
  });
};
