import { Col, Row } from 'antd';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ActionTypes, WearTypes, GlobalContext, SortTypes } from '../../utils/providers/GlobalContext';
import './catalog.scss';
import { CatalogHeader, Filter, TopRated } from './components';

const Catalog: React.FC<{
  filter?:
    | ActionTypes.SHOW_ONLY_WOMEN
    | ActionTypes.SHOW_ONLY_MEN
    | ActionTypes.SHOW_ONLY_KIDS
    | ActionTypes.SHOW_ONLY_JEWELLERY
    | ActionTypes.SHOW_ONLY_ACCESSORIES;
  products?: WearTypes;
}> = ({ filter, products }) => {
  const { state, dispatch } = React.useContext(GlobalContext);
  const [sortBy, setSortBy] = useState(SortTypes.newness);
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

  const productsToShow = useMemo(() => {
    return products ? state[products] : state.products;
  }, [products, state.products, sortBy]);

  const handleSort = (value: SortTypes) => {
    setSortBy(value);
  };

  return (
    <div className="inner-container">
      <div className="catalog-wrapper">
        <div className="left-side-bar">
          <Filter />
          <TopRated />
        </div>
        <main className="main">
          <CatalogHeader handleChange={handleSort} pages={22} />
          <div className="products-wrapper">
            <Row justify="space-between" gutter={[20, 20]} wrap={true}>
              {productsToShow?.map(item => (
                <Col flex="250px" key={item.id}>
                  <ProductCard product={item} />
                </Col>
              ))}
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalog;
