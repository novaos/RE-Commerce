import { Languages } from '../../../locales/types';
import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { globalContextData } from './globalContext.data';
import { ActionTypes } from './globalContext.enums';
import { Action, Context } from './globalContext.types';

const { getDataForFilter } = globalContextData();
function reducer(state: Context, action: Action): Context {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        dataForFilter: getDataForFilter(action.payload)
      };
    case ActionTypes.GET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload
      };
    case ActionTypes.UPDATE_CART:
      return {
        ...state,
        productsInCart: action.payload
      };

    case ActionTypes.ADD_COMPARISON_PRODUCT:
      LocalStorageApi.set(LocalStorageKeys.comparison, state.comparisonProducts.concat(action.payload));
      return {
        ...state,
        comparisonProducts: [...state.comparisonProducts, action.payload]
      };
    case ActionTypes.REMOVE_COMPARISON_PRODUCT:
      LocalStorageApi.set(
        LocalStorageKeys.comparison,
        state.comparisonProducts.filter(({ id }) => id !== action.payload)
      );
      return {
        ...state,
        comparisonProducts: state.comparisonProducts.filter(({ id }) => id !== action.payload)
      };
    case ActionTypes.LANGUAGE_CHANGE:
      return {
        ...state,
        language: state.language === Languages.EN ? Languages.GE : Languages.EN
      };
    default:
      throw new Error('Unhandled action type.');
  }
}

export { reducer };
