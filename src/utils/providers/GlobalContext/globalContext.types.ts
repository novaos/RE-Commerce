import { Languages } from '../../../locales/types';
import { ActionTypes, WearTypes } from './globalContext.enums';

export interface Context {
  language: Languages;
  products: ProductType[];
  dataForFilter?: DataForFilterType;
  productsInCart?: ProductType[];
  selectedProduct?: ProductType;
  countOfComparison?: number;
  comparisonProducts?: ProductType[];
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

export type ProductType = {
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
  quantity?: number;
  description: string;
  about: string;
  reviews: ReviewType[];
};

export type DataForFilterType = {
  category: string[];
  color: string[];
  price: string[] | number[];
  size: string[];
};

export type Action =
  | { type: ActionTypes.GET_PRODUCTS; payload: ProductType[] }
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
  | { type: ActionTypes.UPDATE_CART; payload: ProductType[] }
  | { type: ActionTypes.ADD_TO_CART; payload: ProductType }
  | { type: ActionTypes.REMOVE_FROM_CART; payload: string }
  | { type: ActionTypes.EDIT_QUANTITY; payload: { value: string; id: string } }
  | { type: ActionTypes.ADD_COMPARISON_PRODUCT; payload: ProductType }
  | { type: ActionTypes.REMOVE_COMPARISON_PRODUCT; payload: string }
  | { type: ActionTypes.LANGUAGE_CHANGE };
