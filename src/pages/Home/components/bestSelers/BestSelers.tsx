import { Row, Col } from 'antd';
import FirstCard from './FirstCard';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import './bestSelers.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../../utils/providers/GlobalContext';

const BestSelers: React.FC = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <Row justify="space-between" gutter={[20, 20]}>
          <Col flex="300px">
            <FirstCard />
          </Col>
          {state.products?.map(item => (
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
