import type { MenuCategory } from '@/types';
import { drinksPanels } from './menu-drinks';
import { foodPanels } from './menu-food';

export const menuData: { [key: string]: MenuCategory[] } = {
  ...drinksPanels,
  ...foodPanels,
};
