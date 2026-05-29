import type { MenuCategory } from '@/types';

export const panel6: MenuCategory[] = [
  {
    title: 'HOUSE SPECIALTY',
    items: [
      {
        id: 'spicy-mayo',
        name: 'CHICKEN SPICY MAYO ONIGIRI',
        description: 'Japanese rice ball with shredded-chicken and spicy mayonnaise fillings',
        price: 39,
      },
      {
        id: 'tuna-mayo',
        name: 'TUNA MAYO ONIGIRI',
        description: 'Japanese rice ball with tuna and mayonnaise fillings',
        price: 39,
      },
      {
        id: 'nikujaga',
        name: 'NIKUJAGA',
        description: 'Japanese beef stew with carrots and potatoes. Served with white rice.',
        price: 40,
      },
      {
        id: 'hambagu',
        name: 'JAPANESE HAMBAGU STEAK',
        description:
          'House-made grilled beef patty. Served with mixed vegetables and french fries.',
        price: 55,
        isSignature: true,
      },
    ],
  },
  {
    title: 'ADD-ON(S)',
    items: [
      { id: 'add-katsu', name: '•CHICKEN KATSU', price: 17 },
      { id: 'add-egg', name: '•EGG (SUNNY-SIDE/SCRAMBLED)', price: 11 },
      { id: 'add-rice', name: '•WHITE RICE', price: 8 },
      { id: 'add-sausage', name: '•SAUSAGE', price: 14 },
    ],
  },
];
