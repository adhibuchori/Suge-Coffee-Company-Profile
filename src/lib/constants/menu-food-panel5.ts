import type { MenuCategory } from '@/types';

export const panel5: MenuCategory[] = [
  {
    title: 'MAIN COURSE',
    items: [
      {
        id: 'curry-orig',
        name: 'JAPANESE CURRY (ORIGINAL)',
        description: 'Japanese curry, with potatoes and carrots. Served with white rice.',
        price: 41,
      },
      {
        id: 'curry-katsu',
        name: '•CHICKEN-KATSU CURRY',
        description: 'Original curry + chicken katsu',
        price: 56,
        isSignature: true,
      },
      {
        id: 'curry-gyu',
        name: '•GYU CURRY',
        description: 'Original curry + sliced beef',
        price: 62,
      },
      {
        id: 'curry-sausage',
        name: '•SAUSAGE CURRY',
        description: 'Original curry + beef sausages',
        price: 60,
      },
      {
        id: 'oyakodon',
        name: 'OYAKODON',
        description:
          'bite-sized chicken and eggs, simmered in savory sauce. Served on top of white rice',
        price: 50,
      },
      {
        id: 'oyakodon-katsu',
        name: '•CHICKEN-KATSUDON',
        description: 'Oyakodon + chicken katsu',
        price: 55,
        isSignature: true,
      },
      {
        id: 'nanban',
        name: 'CHICKEN-KATSU NANBAN',
        description: 'Chicken katsu served with special tartare sauce on top of white rice',
        price: 52,
      },
      {
        id: 'mentaiko',
        name: 'CHICKEN-KATSU MENTAIKO',
        description: 'Chicken katsu served with egg and mentaiko sauce on top of white rice',
        price: 56,
        isSignature: true,
      },
    ],
  },
];
