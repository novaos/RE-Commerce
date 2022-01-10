import { Col, Row } from 'antd';
import { useContext, useMemo } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './featuredProducts.scss';

const FeatureProducts = () => {
  const { state } = useContext(GlobalContext);

  const productsToShow = useMemo(() => state?.sortedProductsByNewness?.slice(0, 10), [state?.sortedProductsByNewness]);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <div className="fu-products-header">
          <h1 className="description-card-title">FEATURED PRODUCTS</h1>
          <p className="description-card-subtitle">Newest trends from top brands</p>
        </div>
        <Row gutter={[20, 20]}>
          {productsToShow?.map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeatureProducts;
