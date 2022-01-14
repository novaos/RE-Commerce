import { Languages } from '../../../locales/types';
import { ActionTypes, WearTypes } from './globalContext.enums';

interface Context {
  language: Languages;
  products: ProductType[];
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
  productsInCart: ProductType[];
  selectedProduct?: ProductType;
  countOfComparison?: number;
  comparisonProducts: ProductType[];
}

type Props = {
  children: React.ReactNode;
};

type ReviewType = {
  id: string;
  body: string;
  date: Date;
  name: string;
  rating: number;
  avatar: string;
};

type ProductType = {
  createdAt: Date;
  name: string;
  photo: string;
  price: number;
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

type Products = ProductType[];

type DataForFilterType = {
  category: string[];
  color: string[];
  price: string[] | number[];
  size: string[];
};

type Action =
  | { type: ActionTypes.GET_PRODUCTS; payload: ProductType[] }
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
  | { type: ActionTypes.ADD_COMPARISON_PRODUCT; payload: ProductType }
  | { type: ActionTypes.REMOVE_COMPARISON_PRODUCT; payload: string }
  | { type: ActionTypes.LANGUAGE_CHANGE };

export type { ProductType, ReviewType, DataForFilterType, Props, Context, Action };
