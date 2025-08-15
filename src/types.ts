export interface RootProducts {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
