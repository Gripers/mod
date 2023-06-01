interface Size {
  id: number;
  rus: number;
  eur: number;
}

interface Color {
  id: number;
  color: string;
}

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  sizes: Size[];
  colors: Color[];
}
