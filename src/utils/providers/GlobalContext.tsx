import React, { createContext, useEffect, useReducer } from 'react';
import { getProducts } from '../../business-logic';
type Props = {
  children: React.ReactNode;
};

enum ActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  SORT_BY_RATING = 'SORT_BY_RATING',
  SORT_BY_NEWNESS = 'SORT_BY_NEWNESS',
  SORT_BY_OLDEST = 'SORT_BY_OLDEST',
  SORT_BY_PRICE = 'SORT_BY_PRICE',
  SHOW_ONLY_WOMEN = 'FILTER_WOMAN',
  SHOW_ONLY_MEN = 'FILTER_MEN',
  SHOW_ONLY_KIDS = 'FILTER_KIDS',
  SHOW_ONLY_JEWELLERY = 'FILTER_JEWELLERY',
  SHOW_ONLY_ACCESSORIES = 'FILTER_ACCESSORIES',
  FILTER_BY_PRICE = 'FILTER_BY_PRICE',
  GET_SELECTED_PRODUCT = 'GET_SELECTED_PRODUCT'
}

export type { ProductType };
export { WearTypes, SortTypes, ActionTypes };
export type { DataForFilterType };

type ProductType = {
  createdAt: Date;
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
  wearType: WearTypes;
  description: string;
  about: string;
};

type Products = ProductType[];
interface Context {
  products?: Products;
  sortedProductsByRating?: Products;
  sortedProductsByNewness?: Products;
  sortedProductsByOldest?: Products;
  sortedProductsByPrice?: Products;
  women?: Products;
  men?: Products;
  kids?: Products;
  jewellery?: Products;
  accessories?: Products;
  dataForFilter?: DataForFilterType;
  selectedProduct?: ProductType;
}

type DataForFilterType = {
  category: string[];
  color: string[];
  price: string[] | number[];
  size: string[];
};

type Action =
  | { type: ActionTypes.GET_PRODUCTS; payload: Products }
  | { type: ActionTypes.GET_SELECTED_PRODUCT; payload: ProductType }
  | { type: ActionTypes.SORT_BY_RATING }
  | { type: ActionTypes.SORT_BY_PRICE }
  | { type: ActionTypes.SORT_BY_NEWNESS }
  | { type: ActionTypes.SORT_BY_OLDEST }
  | { type: ActionTypes.SHOW_ONLY_WOMEN }
  | { type: ActionTypes.SHOW_ONLY_MEN }
  | { type: ActionTypes.SHOW_ONLY_KIDS }
  | { type: ActionTypes.SHOW_ONLY_ACCESSORIES }
  | { type: ActionTypes.SHOW_ONLY_JEWELLERY };

const initialContext: Context = {};

enum SortTypes {
  rating = 'rating',
  newness = 'newness',
  oldest = 'oldest',
  price = 'price'
}

enum WearTypes {
  women = 'women',
  men = 'men',
  kids = 'kids',
  jewellery = 'jewellery',
  accessories = 'accessories'
}

const handleSort = (products: Context['products'], sortBy: SortTypes) => {
  if (!products) return;
  const sortedProductsBy = {
    [SortTypes.rating]: [...products]?.sort((currProduct, nextProduct) => {
      return nextProduct.rating - currProduct.rating;
    }),
    [SortTypes.newness]: [...products]?.sort(
      (currProduct, nextProduct) =>
        new Date(nextProduct.createdAt).getTime() - new Date(currProduct.createdAt).getTime()
    ),
    [SortTypes.oldest]: [...products]?.sort(
      (currProduct, nextProduct) =>
        new Date(currProduct.createdAt).getTime() - new Date(nextProduct.createdAt).getTime()
    ),
    [SortTypes.price]: [...products]?.sort((curr, next) => {
      return Number(curr.price) - Number(next.price);
    })
  }[sortBy];
  return sortedProductsBy;
};

const handleFilter = (products: Context['products'], typeOfCategory: WearTypes) => {
  const filteredProducts = {
    [WearTypes.women]: products?.filter(({ wearType }) => wearType === WearTypes.women),
    [WearTypes.men]: products?.filter(({ wearType }) => wearType === WearTypes.men),
    [WearTypes.kids]: products?.filter(({ wearType }) => wearType === WearTypes.kids),
    [WearTypes.jewellery]: products?.filter(({ wearType }) => wearType === WearTypes.jewellery),
    [WearTypes.accessories]: products?.filter(({ wearType }) => wearType === WearTypes.accessories)
  }[typeOfCategory];

  return filteredProducts;
};

const getDataForFilter = (products: Context['products']) => {
  if (!products) return;
  const category = Array.from(new Set(products?.map(({ category }) => category)))?.sort((a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });
  const size = Array.from(new Set(products?.map(({ size }) => size)));
  const color = Array.from(new Set(products?.map(({ color }) => color)))?.sort((a, b) => {
    return a.localeCompare(b, 'en', { sensitivity: 'base' });
  });
  const sortedByPrice = products?.map(({ price }) => price)?.sort((curr, next) => Number(curr) - Number(next));
  const price = [sortedByPrice?.[0], sortedByPrice?.[sortedByPrice.length - 1]];
  return {
    category,
    size,
    color,
    price
  };
};

function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        dataForFilter: getDataForFilter(action.payload),
        sortedProductsByRating: handleSort(action.payload, SortTypes.rating)
      };
    case ActionTypes.GET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      };
    case ActionTypes.SORT_BY_NEWNESS:
      return {
        ...state,
        sortedProductsByNewness: handleSort(state.products, SortTypes.newness),
        products: handleSort(state.products, SortTypes.newness)
      };

    case ActionTypes.SORT_BY_RATING:
      return {
        ...state,
        sortedProductsByRating: handleSort(state.products, SortTypes.rating),
        products: handleSort(state.products, SortTypes.rating)
      };
    case ActionTypes.SORT_BY_OLDEST:
      return {
        ...state,
        sortedProductsByOldest: handleSort(state.products, SortTypes.oldest),
        products: handleSort(state.products, SortTypes.oldest)
      };
    case ActionTypes.SORT_BY_PRICE:
      return {
        ...state,
        sortedProductsByPrice: handleSort(state.products, SortTypes.price),
        products: handleSort(state.products, SortTypes.price)
      };
    case ActionTypes.SHOW_ONLY_WOMEN:
      return {
        ...state,
        women: handleFilter(state.products, WearTypes.women)
      };

    case ActionTypes.SHOW_ONLY_MEN:
      return {
        ...state,
        men: handleFilter(state.products, WearTypes.men)
      };

    case ActionTypes.SHOW_ONLY_KIDS:
      return {
        ...state,
        kids: handleFilter(state.products, WearTypes.kids)
      };

    case ActionTypes.SHOW_ONLY_JEWELLERY:
      return {
        ...state,
        jewellery: handleFilter(state.products, WearTypes.jewellery)
      };

    case ActionTypes.SHOW_ONLY_ACCESSORIES:
      return {
        ...state,
        accessories: handleFilter(state.products, WearTypes.accessories)
      };
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
    const fetchProducts = (products: any) => dispatch({ type: ActionTypes.GET_PRODUCTS, payload: products });
    getProducts(fetchProducts);
  }, []);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
