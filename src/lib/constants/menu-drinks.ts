import type { MenuCategory } from '@/types';

export const drinksPanels: { [key: string]: MenuCategory[] } = {
  panel1: [
    {
      title: 'BLACK /',
      subtitle: 'Without milk',
      items: [
        { id: 'espresso', name: 'ESPRESSO', priceHot: 23, priceIce: '-' },
        { id: 'espresso-double', name: '•DOUBLE', priceHot: 26, priceIce: '-' },
        { id: 'americano', name: 'AMERICANO', priceHot: 28, priceIce: 30 },
      ],
    },
    {
      title: 'WHITE /',
      subtitle: 'With milk',
      items: [
        { id: 'affogato', name: 'AFFOGATO', priceHot: 38, priceIce: '-' },
        { id: 'piccolo', name: 'PICCOLO', priceHot: 30, priceIce: '-' },
        { id: 'cappuccino', name: 'CAPPUCCINO', priceHot: 32, priceIce: 35 },
        { id: 'latte', name: 'LATTE', priceHot: 32, priceIce: 35 },
        { id: 'caramel-latte', name: '•CARAMEL', priceHot: 37, priceIce: 40 },
        { id: 'vanilla-latte', name: '•VANILLA', priceHot: 37, priceIce: 40 },
        { id: 'magic-latte', name: 'MAGIC LATTE', priceHot: 34, priceIce: '-' },
        { id: 'vietnam-drip', name: 'VIETNAM DRIP', priceHot: 28, priceIce: 30 },
      ],
    },
  ],
  panel2: [
    {
      title: 'NON-COFFEE',
      subtitle: '',
      items: [
        { id: 'frappe-title', name: 'FRAPPE', isGroupTitle: true },
        { id: 'frappe-choc', name: '•CHOCOLATE/GREEN-TEA/RED VELVET', priceHot: '-', priceIce: 40 },
        { id: 'macchiato-title', name: 'MACCHIATO', isGroupTitle: true },
        {
          id: 'macchiato-choc',
          name: '•CHOCOLATE/GREEN-TEA/RED VELVET',
          priceHot: '-',
          priceIce: 37,
        },
        { id: 'latte-title', name: 'LATTE', isGroupTitle: true },
        { id: 'latte-choc', name: '•CHOCOLATE', priceHot: 31, priceIce: 33 },
        { id: 'latte-green', name: '•GREEN TEA', priceHot: 31, priceIce: 33 },
        { id: 'latte-red', name: '•RED VELVET', priceHot: 31, priceIce: 33 },
        { id: 'latte-thai', name: '•THAI TEA', priceHot: '-', priceIce: 31 },
        { id: 'tea-title', name: 'TEA', isGroupTitle: true },
        { id: 'tea-chamomile', name: '•CHAMOMILE', priceHot: 25, priceIce: '-' },
        { id: 'tea-english', name: '•ENGLISH BREAKFAST', priceHot: 25, priceIce: '-' },
        { id: 'tea-jasmine', name: '•JASMINE', priceHot: 25, priceIce: '-' },
        { id: 'tea-lemon', name: '•LEMON', priceHot: 25, priceIce: 29 },
        { id: 'tea-lychee', name: '•LYCHEE', priceHot: '-', priceIce: 29 },
      ],
    },
  ],
  panel3: [
    {
      title: 'À LA SUGE',
      subtitle: 'served cold',
      items: [
        { id: 'suge-aren', name: 'SUGE AREN', price: 30 },
        { id: 'suge-latte', name: 'SUGE LATTE', price: 30 },
        { id: 'cinnamon-latte', name: 'CINNAMON LATTE', price: 33 },
        { id: 'butterscotch-latte', name: 'BUTTERSCOTCH LATTE', price: 33, isSignature: true },
        { id: 'hazelnut-latte', name: 'HAZELNUT LATTE', price: 33, isSignature: true },
        { id: 'tiramisu-latte', name: 'TIRAMISU LATTE', price: 33, isSignature: true },
        { id: 'suge-tama', name: 'SUGE TAMA(GO)', price: 38 },
      ],
    },
    {
      title: 'MOCKTAIL',
      items: [
        { id: 'midnight-tokyo', name: 'MIDNIGHT TOKYO', price: 37 },
        { id: 'okinawa-fever', name: 'OKINAWA FEVER', price: 36 },
        { id: 'virgin-momiji', name: 'VIRGIN MOMIJI', price: 36 },
        { id: 'suge-tea', name: 'SUGE TEA', price: 32 },
      ],
    },
    {
      title: 'ADD-ON(S)',
      items: [
        { id: 'add-espresso', name: '•EXTRA ESPRESSO', price: 8 },
        { id: 'add-icecream', name: '•VANILLA ICE CREAM', price: 12 },
      ],
    },
  ],
};
