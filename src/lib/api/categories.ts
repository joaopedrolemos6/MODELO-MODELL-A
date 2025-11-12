import { Category } from '@/types';

export const mockCategories: Category[] = [
  { id: '1', name: 'Sutiãs', slug: 'sutias' },
  { id: '2', name: 'Calcinhas', slug: 'calcinhas' },
  { id: '3', name: 'Modeladores', slug: 'modeladores' },
  { id: '4', name: 'Pijamas', slug: 'pijamas' },
  { id: '5', name: 'Sport', slug: 'sport' },
  { id: '6', name: 'Infantil', slug: 'infantil' },
  { id: '7', name: 'Praia', slug: 'praia' },
  { id: '8', name: 'Maternidade', slug: 'maternidade' }
];

export const getCategories = async (): Promise<Category[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCategories), 200);
  });
};
