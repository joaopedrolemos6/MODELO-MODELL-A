import { Store } from '@/types';

export const mockStores: Store[] = [
  {
    id: '1',
    name: 'Modellá - Shopping Iguatemi',
    address: 'Av. Brigadeiro Faria Lima, 2232',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01451-000',
    phone: '(11) 3031-4000',
    hours: 'Seg-Sáb: 10h-22h | Dom: 14h-20h',
    lat: -23.5733,
    lng: -46.6894
  },
  {
    id: '2',
    name: 'Modellá - Shopping JK',
    address: 'Av. Juscelino Kubitschek, 2041',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '04543-011',
    phone: '(11) 3152-6400',
    hours: 'Seg-Sáb: 10h-22h | Dom: 14h-20h',
    lat: -23.5923,
    lng: -46.6813
  }
];

export const getStores = async (): Promise<Store[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockStores), 300);
  });
};
