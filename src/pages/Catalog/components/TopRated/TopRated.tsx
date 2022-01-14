import { Row } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { handleSort } from '../../../../utils/functions';
import { ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { SortTypes } from '../../../../utils/providers/GlobalContext/globalContext.enums';
import { SmallProductCard } from '../SmallProductCard';
import './topRated.scss';

const TopRated: React.FC = () => {
  const { state } = React.useContext(GlobalContext);
  const [topRatedProducts, setTopRatedProducts] = useState<ProductType[]>([]);

  const { t } = useTranslation();

  React.useEffect(() => {
    setTopRatedProducts(handleSort(state.products, SortTypes.rating));
  }, [state.products]);

  const productsToShow = React.useMemo(() => topRatedProducts?.slice(0, 3), []);

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
