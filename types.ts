export type Category = 'ALL' | 'CAFE' | 'SOUVENIR' | 'EXPERIENCE' | 'STAY' | 'FOOD';

export interface Item {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface Review {
  rating: number;
  count: number;
}

export interface Location {
  address: string;
  city: string;
  lat: number;
  lng: number;
  distance: string; // e.g., "120m" or "1.2 km"
}

export interface Shop {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  images: string[];
  category: Category;
  tags: string[];
  status: 'OPEN' | 'CLOSED' | 'HOLIDAY';
  location: Location;
  rating?: Review;
  priceRange?: string;
  phone?: string;
  website?: string;
  hours?: string;
  closedDays?: string;
  items?: Item[];
  isFavorite: boolean;
}
