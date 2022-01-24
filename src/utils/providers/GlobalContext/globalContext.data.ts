import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { Context } from './globalContext.types';

const globalContextData = () => {
  const getDataForFilter = (products: Context['products']) => {
    if (!products) return;
    const category = Array.from(new Set(products?.map(({ category }) => category)))?.sort((a, b) => {
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });
    const size = Array.from(new Set(products?.map(({ size }) => size)));
    const color = Array.from(new Set(products?.map(({ color }) => color)))?.sort((a, b) => {
      return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });
    const sortedByPrice = products?.map(({ price }) => price)?.sort((curr, next) => Number(curr) - Number(next));
    const price = [sortedByPrice?.[0], sortedByPrice?.[sortedByPrice.length - 1]];
    return {
      category,
      size,
      color,
      price
    };
  };

  const storageData = LocalStorageApi.get(LocalStorageKeys.comparison);

  return { getDataForFilter, storageData };
};

export { globalContextData };
