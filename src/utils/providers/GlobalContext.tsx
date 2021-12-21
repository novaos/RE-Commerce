import React, { createContext, useEffect, useReducer } from 'react';
import { getProducts } from '../../business-logic';
type Props = {
  children: React.ReactNode;
};

type Product = {
  createdAt: string;
  name: string;
  photo: string;
  price: string;
  rating: number;
  amount: string;
  category: string;
  size: string;
  color: string;
  id: string;
  colors: string;
};

export type { Product };
type Products = Array<Product>;
interface Context {
  products?: Products;
}
type Action = { type: 'GET_PRODUCTS'; payload: any };

const initialContext: Context = {};

// @ts-ignore
function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      throw new Error('Unhandled action type.');
  }
}

export const GlobalContext = createContext<{
  state: typeof initialContext;
  dispatch: (action: Action) => void;
}>({ state: initialContext, dispatch: () => {} });

const GlobalContextProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  useEffect(() => {
    const fetchProducts = (products: any) => dispatch({ type: 'GET_PRODUCTS', payload: products });
    getProducts(fetchProducts);
  }, []);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
