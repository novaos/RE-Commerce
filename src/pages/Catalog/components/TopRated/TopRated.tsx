import { Row } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../../../utils/providers/GlobalContext/globalContext.enums';
import { SmallProductCard } from '../SmallProductCard';
import './topRated.scss';

const TopRated: React.FC = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  const { t } = useTranslation();
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
      <h4 className="title">{t('Top Rated.title')}</h4>
      <Row justify="space-between">
        {productsToShow?.map(item => (
          <SmallProductCard key={item.id} product={item} />
        ))}
      </Row>
    </div>
  );
};

export { TopRated };
