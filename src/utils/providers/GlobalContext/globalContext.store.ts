import { LocalStorageKeys } from '../../types';
import { Context, ProductType } from './globalContext.types';

const storageComparisonProducts = localStorage.getItem(LocalStorageKeys.comparison);
const storageCartProducts = localStorage.getItem('productsInCart');
const initialContext: Context = {
  productsInCart: storageCartProducts ? JSON.parse(storageCartProducts) as ProductType[] : [],
  comparisonProducts: storageComparisonProducts ? (JSON.parse(storageComparisonProducts) as ProductType[]) : [],
  countOfComparison: storageComparisonProducts ? JSON.parse(storageComparisonProducts).length : 0
};

export { initialContext };
