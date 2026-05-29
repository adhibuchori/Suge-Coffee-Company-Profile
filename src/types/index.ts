/** Menu category structure. */
export interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

/** Menu item data shape. */
export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string | number;
  priceHot?: string | number;
  priceIce?: string | number;
  isSignature?: boolean;
  photo?: string;
  isFeatured?: boolean;
  isGroupTitle?: boolean;
}

/** RSVP form field values. */
export interface RsvpFormValues {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}
