import { Col, Row } from 'antd';
import { useContext, useMemo } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../../../utils/providers/GlobalContext';
import './bestSelers.scss';
import FirstCard from './FirstCard';

const BestSelers: React.FC = () => {
  const { state } = useContext(GlobalContext);

  const productsToShow = useMemo(() => state?.sortedProductsByRating?.slice(0, 4), [state?.sortedProductsByRating]);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <Row justify="space-between" gutter={[20, 20]}>
          <Col flex="300px">
            <FirstCard />
          </Col>
          {productsToShow?.map(item => (
            <Col flex="300px" key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BestSelers;
