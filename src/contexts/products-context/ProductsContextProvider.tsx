import { IProduct } from "models";
import { createContext, useContext, useState, FC } from "react";

export interface IProductsContext {
  isFetching: boolean;
  setIsFetching(state: boolean): void;
  products: IProduct[];
  setproducts(products: IProduct[]): void;
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined);
const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};

const ProductsProvider: FC = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [products, setproducts] = useState<IProduct[]>([]);

  const ProductContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setproducts,
  };

  return <ProductsContext.Provider value={ProductContextValue} {...props} />;
};
