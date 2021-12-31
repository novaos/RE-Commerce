import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { SortTypes, ActionTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import { DataForFilterType } from '../../utils/providers/GlobalContext/globalContext.types';
import { CatalogProps } from './catalog.types';

const useCatalogData = ({ filter, products }: CatalogProps) => {
  const { state, dispatch } = React.useContext(GlobalContext);
  const [sortBy, setSortBy] = useState(SortTypes.newness);
  const [currentPage, setCurrentPage] = useState(1);
  const { location } = useHistory();
  React.useEffect(() => {
    if (!state.sortedProductsByRating) {
      dispatch({ type: ActionTypes.SORT_BY_RATING });
    }
  }, [dispatch, state.sortedProductsByRating]);

  React.useEffect(() => {
    switch (sortBy) {
      case SortTypes.newness:
        dispatch({ type: ActionTypes.SORT_BY_NEWNESS });
        break;
      case SortTypes.rating:
        dispatch({ type: ActionTypes.SORT_BY_RATING });
        break;
      case SortTypes.price:
        dispatch({ type: ActionTypes.SORT_BY_PRICE });
        break;
      default:
        break;
    }
    if (filter) {
      dispatch({ type: filter });
    }
  }, [filter, dispatch, location.pathname, sortBy]);
  const [productsToShow, setProductsToShow] = useState(products ? state[products] : state.products);

  useEffect(() => {
    setProductsToShow(products ? state[products] : state.products);
  }, [products, state]);

  const handleSort = (value: SortTypes) => {
    setSortBy(value);
  };

  const showFrom = currentPage * 12 - 12;
  const showTo =
    state?.products && currentPage * 12 > state?.products?.length ? state.products?.length : currentPage * 12;

  function handleSearch(values: DataForFilterType) {
    const filteredProducts = state?.products?.filter(product => {
      return (
        (values?.color?.[0] ? values?.color?.includes(product.color) : true) &&
        (values?.category?.[0] ? values?.category.includes(product.category) : true) &&
        (values?.size?.[0] ? values?.size.includes(product.size) : true) &&
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
