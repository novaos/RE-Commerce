import { Col, Row } from 'antd';
import { useContext, useMemo } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './bestSelers.scss';
import FirstCard from './FirstCard';

export default function BestSelers() {
  const { state } = useContext(GlobalContext);
  const productsToShow = useMemo(() => state?.sortedProductsByRating?.slice(0, 4), [state?.sortedProductsByRating]);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={6}>
            <FirstCard />
          </Col>
          {productsToShow?.map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
