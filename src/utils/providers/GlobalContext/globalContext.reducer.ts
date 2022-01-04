import { ActionTypes, SortTypes, WearTypes } from './globalContext.enums';
import { globalContextData } from './globalContext.data';
import { Action, Context } from './globalContext.types';

const { getDataForFilter, addToCartHandle, handleQuantity, handleFilter, handleSort } = globalContextData();
function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        dataForFilter: getDataForFilter(action.payload),
        sortedProductsByRating: handleSort(action.payload, SortTypes.rating),
        sortedProductsByNewness: handleSort(action.payload, SortTypes.newness)
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

    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        productsInCart: addToCartHandle(state.productsInCart, action.payload)
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        productsInCart: state.productsInCart?.filter(({ id }) => id !== action.payload)
      };

    case ActionTypes.EDIT_QUANTITY:
      return {
        ...state,
        productsInCart: handleQuantity(state.productsInCart, action.payload)
      };
    default:
      throw new Error('Unhandled action type.');
  }
}

export { reducer };
