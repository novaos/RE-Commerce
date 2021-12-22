import { Row } from 'antd';
import * as React from 'react';
import { ActionTypes, GlobalContext } from '../../../../utils/providers/GlobalContext';
import { SmallProductCard } from '../small-product-card';
import './Top-Rated.scss';

const TopRated: React.FC = () => {
  const { state, dispatch } = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (!state.sortedProductsByRating) {
      dispatch({ type: ActionTypes.SORT_BY_RATING });
    }
  }, [dispatch, state.sortedProductsByRating]);

  const productsToShow = React.useMemo(
    () => state?.sortedProductsByRating?.slice(0, 3),
    [state?.sortedProductsByRating]
  );

  return (
    <div className="top-rated-wrapper">
      <h4 className="title">Top Rated</h4>
      <Row justify="space-between">
        {productsToShow?.map(item => (
          <SmallProductCard key={item.id} product={item} />
        ))}
      </Row>
    </div>
  );
};

export { TopRated };
