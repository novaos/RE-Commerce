import { Row, Col } from 'antd';
import FirstCard from './FirstCard';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import './bestSelers.scss';

const BestSelers: React.FC = () => {
  return (
    <div className="best-selers-wrap">
      <Row justify='center' gutter={[20, 20]} >
        <Col flex='0 1 300px'><FirstCard/></Col>
        <Col flex='0 1 300px' ><ProductCard/></Col>
        <Col flex='0 1 300px' ><ProductCard/></Col>
        <Col flex='0 1 300px' ><ProductCard/></Col>
        <Col flex='0 1 300px' ><ProductCard/></Col>
      </Row>
    </div>
    
  )
};

export default BestSelers;