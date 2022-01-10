import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { globalContextData } from './globalContext.data';
import { ActionTypes, SortTypes, WearTypes } from './globalContext.enums';
import { Action, Context } from './globalContext.types';

const { getDataForFilter, handleFilter, handleSort } = globalContextData();
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

    case ActionTypes.UPDATE_CART:
      return {
        ...state,
        productsInCart: action.payload
      }

    case ActionTypes.ADD_COMPARISON_PRODUCT:
      LocalStorageApi.set(
        LocalStorageKeys.comparison,
        state.comparisonProducts ? state.comparisonProducts.concat(action.payload) : [action.payload]
      );
      return {
        ...state,
        comparisonProducts: state.comparisonProducts ? [...state.comparisonProducts, action.payload] : [action.payload]
      };
    case ActionTypes.REMOVE_COMPARISON_PRODUCT:
      LocalStorageApi.set(
        LocalStorageKeys.comparison,
        state.comparisonProducts?.filter(({ id }) => id !== action.payload)
      );
      return {
        ...state,
        comparisonProducts: state.comparisonProducts?.filter(({ id }) => id !== action.payload)
      };
    default:
      throw new Error('Unhandled action type.');
  }
}

export { reducer };
