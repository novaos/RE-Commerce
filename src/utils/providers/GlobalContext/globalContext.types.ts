import { Languages } from '../../../locales/types';
import { ActionTypes, WearTypes } from './globalContext.enums';

export interface Context {
  language: Languages;
  products: ProductType[];
  dataForFilter?: DataForFilterType;
  productsInCart: IProductInCart[];
  selectedProduct?: ProductType;
  countOfComparison?: number;
  comparisonProducts: ProductType[];
}

export type ProductType = {
  createdAt: string;
  name: string;
  avatar: string;
  price: number;
  category: string;
  description: string;
  about: string;
  properties: {
    key: string;
    value: string;
  }[];
  reviews: {
    id: string;
    body: string;
    date: Date;
    name: string;
    rating: number;
    avatar: string;
  }[];
  options: {
    id: string;
    amount: number;
    photosUrl: string[];
    colorName: string;
    color: string;
    sizes: string[];
    price?: string | null;
  }[];
  id: string;
  rating: number;
  wearType: WearTypes;
};

export interface IProductInCart extends ProductType {
  option: {size: string, color: string, count: number}
}

export type Props = {
  children: React.ReactNode;
};

export type ReviewType = {
  id: string;
  body: string;
  date: Date;
  name: string;
  rating: number;
  avatar: string;
};

export type DataForFilterType = {
  category: string[];
  color: string[];
  price: string[] | number[];
  size: string[];
};

export type Action =
  | { type: ActionTypes.GET_PRODUCTS; payload: any}// ProductType[]
  | { type: ActionTypes.GET_SELECTED_PRODUCT; payload: ProductType }
  | { type: ActionTypes.SORT_BY_RATING }
  | { type: ActionTypes.SORT_BY_PRICE }
  | { type: ActionTypes.SORT_BY_NEWNESS }
  | { type: ActionTypes.SORT_BY_OLDEST }
  | { type: ActionTypes.SHOW_ONLY_WOMEN }
  | { type: ActionTypes.SHOW_ONLY_MEN }
  | { type: ActionTypes.SHOW_ONLY_KIDS }
  | { type: ActionTypes.SHOW_ONLY_ACCESSORIES }
  | { type: ActionTypes.SHOW_ONLY_JEWELLERY }
  | { type: ActionTypes.UPDATE_CART; payload: IProductInCart[] }
  | { type: ActionTypes.ADD_COMPARISON_PRODUCT; payload: ProductType }
  | { type: ActionTypes.REMOVE_COMPARISON_PRODUCT; payload: string }
  | { type: ActionTypes.LANGUAGE_CHANGE };
