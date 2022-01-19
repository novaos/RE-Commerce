import { Languages } from '../../../locales/types';
import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { Context, ProductType } from './globalContext.types';

const storageCartProducts = localStorage.getItem('productsInCart');
const storageComparisonProducts = LocalStorageApi.get(LocalStorageKeys.comparison);

const initialContext: Context = {
  products: [],
  productsInCart: storageCartProducts ? (JSON.parse(storageCartProducts) as ProductType[]) : [],
  comparisonProducts: storageComparisonProducts ? (JSON.parse(storageComparisonProducts) as ProductType[]) : [],
  countOfComparison: storageComparisonProducts ? JSON.parse(storageComparisonProducts).length : 0,
  language: Languages.EN
};

export { initialContext };
