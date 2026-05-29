import type { MenuCategory } from '@/types';

export const panel4: MenuCategory[] = [
  {
    title: 'APPETIZERS',
    items: [
      { id: 'gyoza', name: 'GYOZA', description: 'Japanese dumplings', price: 35 },
      {
        id: 'fries',
        name: 'FRENCH FRIES',
        description: 'Potatoes. Thinly cut. Deeply fried. The OG.',
        price: 30,
      },
      {
        id: 'tori',
        name: 'TORI CRISPY',
        description: 'Bite-sized fried chicken fillets.',
        price: 36,
      },
      {
        id: 'salad',
        name: 'SUGE SALAD',
        description: 'Romaine lettuces and boiled egg. Served with mayo and mustard dressings.',
        price: 39,
      },
      { id: 'salad-chicken', name: '• W/CHICKEN BREAST', price: 46 },
    ],
  },
  {
    title: 'BREAKFAST/SANDWICH',
    items: [
      {
        id: 'all-day',
        name: 'ALL DAY BREAKFAST',
        description:
          'Scrambled egg, mayo, and mustard on top of toasted white bread. Served with salad.',
        price: 47,
        isSignature: true,
      },
      {
        id: 'tamago',
        name: 'TAMAGO SANDO',
        description:
          'White bread stuffed with egg, mayo, and mustard. Served with potato chips and salad.',
        price: 35,
      },
      {
        id: 'katsu',
        name: 'KATSU SANDO',
        description:
          'White bread stuffed with chicken katsu, and romaine. Served with french fries.',
        price: 45,
      },
    ],
  },
];
