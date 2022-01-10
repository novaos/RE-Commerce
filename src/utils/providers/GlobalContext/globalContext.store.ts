import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { Context, ProductType } from './globalContext.types';

const storageComparisonProducts = LocalStorageApi.get(LocalStorageKeys.comparison);
const initialContext: Context = {
  comparisonProducts: storageComparisonProducts ? (JSON.parse(storageComparisonProducts) as ProductType[]) : [],
  countOfComparison: storageComparisonProducts ? JSON.parse(storageComparisonProducts).length : 0
};

export { initialContext };
