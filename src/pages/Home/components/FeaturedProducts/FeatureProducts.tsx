import { Col, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { handleSort } from '../../../../utils/functions';
import { ProductType, SortTypes } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './featuredProducts.scss';

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
        <Row gutter={[20, 20]}>
          {newnessProducts.map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}