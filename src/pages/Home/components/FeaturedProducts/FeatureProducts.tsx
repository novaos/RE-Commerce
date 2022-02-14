// import { Col, Row } from 'antd';
// import ProductCard from '../../../../components/ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { handleSort } from '../../../../utils/functions';
import { ProductType, SortTypes } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './featuredProducts.scss';
import ProductCard2 from '../../../../components/ProductCard2/ProductCard2';

export default function FeatureProducts() {
  const { state } = useContext(GlobalContext);
  const { t } = useTranslation();
  const [newnessProducts, setNewnessProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setNewnessProducts(handleSort(state.products, SortTypes.newness).slice(0, 10));
  }, [state.products]);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <div className="fu-products-header">
          <h1 className="description-card-title">{t('Home.featured products.title')}</h1>
          <p className="description-card-subtitle">{t('Home.featured products.description')}</p>
        </div>
        {/* <Row gutter={[20, 20]}>
          {newnessProducts?.slice(0, 8).map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row> */}
        <div className="grid lg:grid-rows-3 md:grid-rows-4 xl:grid-rows-2 md:grid-flow-col gap-4 md:auto-cols-auto grid-flow-row justify-center">
          {newnessProducts?.slice(0, 8).map(product => (
            <ProductCard2 large product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
