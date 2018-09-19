export interface ItemStore {
  date_layout: string;
  lastupdate: number;
  date: string;
  rows: number;
  vbucks: string;
  items: SaleItem[];
}

export interface SaleItem {
  itemid: string;
  name: string;
  cost: string;
  featured: number;
  refundable: number;
  item: BrItem;
}

export interface BrItem {
  image: string;
  images: {
    transparent: string;
    background: string;
    featured: {
      transparent: null;
      background: null;
    };
  };
  captial: string;
  type: string;
  rarity: string;
  obtained_type: string;
}

export interface BrImage{
    transparent: string;
    background: string;
    featured: {transparent: string; background: string}
}