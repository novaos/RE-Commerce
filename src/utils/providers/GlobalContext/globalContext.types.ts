import { ActionTypes, WearTypes } from './globalContext.enums';

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
  productsInCart?: Products;
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
  | { type: ActionTypes.SHOW_ONLY_JEWELLERY }
  | { type: ActionTypes.ADD_TO_CART; payload: ProductType }
  | { type: ActionTypes.REMOVE_FROM_CART; payload: string }
  | { type: ActionTypes.EDIT_QUANTITY; payload: { value: string; id: string } };

export type { ProductType, ReviewType, DataForFilterType, Props, Context, Action };
