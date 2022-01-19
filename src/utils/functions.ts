import { SortTypes, Context, WearTypes, ProductType } from './providers/GlobalContext';

export const handleSort = (products: Context['products'], sortBy: SortTypes): ProductType[] => {
  if (!products) return [];
  const sortedProductsBy = {
    [SortTypes.rating]: [...products]?.sort((currProduct, nextProduct) => {
      return nextProduct.rating - currProduct.rating;
    }),
    [SortTypes.newness]: [...products]?.sort(
      (currProduct, nextProduct) =>
        new Date(nextProduct.createdAt).getTime() - new Date(currProduct.createdAt).getTime()
    ),
    [SortTypes.oldest]: [...products]?.sort(
      (currProduct, nextProduct) =>
        new Date(currProduct.createdAt).getTime() - new Date(nextProduct.createdAt).getTime()
    ),
    [SortTypes.price]: [...products]?.sort((curr, next) => {
      return Number(curr.price) - Number(next.price);
    })
  }[sortBy];
  return sortedProductsBy;
};
export const handleFilter = (products: Context['products'], typeOfCategory: WearTypes) => {
  const filteredProducts = {
    [WearTypes.women]: products?.filter(({ wearType }) => wearType === WearTypes.women),
    [WearTypes.men]: products?.filter(({ wearType }) => wearType === WearTypes.men),
    [WearTypes.kids]: products?.filter(({ wearType }) => wearType === WearTypes.kids),
    [WearTypes.jewellery]: products?.filter(({ wearType }) => wearType === WearTypes.jewellery),
    [WearTypes.accessories]: products?.filter(({ wearType }) => wearType === WearTypes.accessories)
  }[typeOfCategory];

  return filteredProducts;
};
