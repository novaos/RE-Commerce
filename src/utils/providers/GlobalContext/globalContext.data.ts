import { LocalStorageApi, LocalStorageKeys } from '../../types';
import { WearTypes, SortTypes } from './globalContext.enums';
import { Context } from './globalContext.types';

const globalContextData = () => {
  const handleFilter = (products: Context['products'], typeOfCategory: WearTypes) => {
    const filteredProducts = {
      [WearTypes.women]: products?.filter(({ wearType }) => wearType === WearTypes.women),
      [WearTypes.men]: products?.filter(({ wearType }) => wearType === WearTypes.men),
      [WearTypes.kids]: products?.filter(({ wearType }) => wearType === WearTypes.kids),
      [WearTypes.jewellery]: products?.filter(({ wearType }) => wearType === WearTypes.jewellery),
      [WearTypes.accessories]: products?.filter(({ wearType }) => wearType === WearTypes.accessories)
    }[typeOfCategory];

    return filteredProducts;
  };

  const handleSort = (products: Context['products'], sortBy: SortTypes) => {
    // if (!products) return;
    const sortedProductsBy = {
      [SortTypes.rating]: [...products].sort((currProduct, nextProduct) => {
        return nextProduct.rating - currProduct.rating;
      }),
      [SortTypes.newness]: [...products].sort(
        (currProduct, nextProduct) =>
          new Date(nextProduct.createdAt).getTime() - new Date(currProduct.createdAt).getTime()
      ),
      [SortTypes.oldest]: [...products].sort(
        (currProduct, nextProduct) =>
          new Date(currProduct.createdAt).getTime() - new Date(nextProduct.createdAt).getTime()
      ),
      [SortTypes.price]: [...products].sort((curr, next) => {
        return Number(curr.price) - Number(next.price);
      })
    }[sortBy];
    return sortedProductsBy;
  };

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

  return { getDataForFilter, handleFilter, handleSort, storageData };
};

export { globalContextData };
