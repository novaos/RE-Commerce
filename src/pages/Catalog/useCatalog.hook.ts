import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { handleFilter, handleSort as globalSort } from '../../utils/functions';
import objectToQueryParam from '../../utils/parsers/objectToQueryParam';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { SortTypes, WearTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import { DataForFilterType } from '../../utils/providers/GlobalContext/globalContext.types';

const useCatalogData = () => {
 const { state, dispatch } = React.useContext(GlobalContext);
 const [sortBy, setSortBy] = useState(SortTypes.newness);
 const [currentPage, setCurrentPage] = useState(1);
 const { location } = useHistory();
 const [productsToShow, setProductsToShow] = useState(state.products);

 const { wearType } = useParams<{ wearType?: WearTypes }>();

 React.useEffect(() => {
  switch (sortBy) {
   case SortTypes.newness:
    setProductsToShow(globalSort(state.products, SortTypes.newness));
    break;
   case SortTypes.rating:
    setProductsToShow(globalSort(state.products, SortTypes.rating));
    break;
   case SortTypes.price:
    setProductsToShow(globalSort(state.products, SortTypes.price));
    break;
   default:
    break;
  }
  if (wearType) {
   handleFilter(productsToShow, WearTypes[wearType]);
  }
 }, [wearType, dispatch, location.pathname, sortBy, state.products]);

 useEffect(() => {
  setProductsToShow(state.products);
 }, [state.products]);

 const handleSort = (value: SortTypes) => {
  setSortBy(value);
 };

 const showFrom = currentPage * 12 - 12;
 const showTo =
  state?.products && currentPage * 12 > state?.products?.length ? state.products?.length : currentPage * 12;

 const history = useHistory();
 function handleSearch(values: DataForFilterType) {
  const url = objectToQueryParam(values);
  history.push(url);

  const filteredProducts = state?.products?.filter(product => {
   return (
    (values?.color?.[0]
     ? values?.color?.some(
        someProduct =>
         product.properties
          .filter(filterProduct => filterProduct.key === 'color')
          .map(mapProduct => mapProduct.value)
          .indexOf(someProduct) > -1
       )
     : true) &&
    // (values?.color?.[0] ? values?.color?.includes(product.color) : true) &&
    (values?.category?.[0] ? values?.category.includes(product.category) : true) &&
    // (values?.size?.[0] ? values?.size.includes(product.size) : true) &&
    (values?.size?.[0]
     ? values?.size?.some(
        someProduct =>
         product.properties
          .filter(filterProduct => filterProduct.key === 'size')
          .map(mapProduct => mapProduct.value)
          .indexOf(someProduct) > -1
       )
     : true) &&
    (values?.price?.[0] ? product?.price >= values?.price?.[0] && product?.price <= values?.price?.[1] : true)
   );
  });

  setProductsToShow(filteredProducts);
 }

 return {
  productsToShow,
  showFrom,
  showTo,
  handleSearch,
  setCurrentPage,
  currentPage,
  handleSort
 };
};

export { useCatalogData };
