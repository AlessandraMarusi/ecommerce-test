export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
