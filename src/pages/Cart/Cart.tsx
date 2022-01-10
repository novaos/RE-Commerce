import { Col, Row } from 'antd';
import './cart.scss';
import LeftForm from './components/LeftForm';
import ProductList from './components/ProductList';
import RightForm from './components/RightForm';

const Cart = () => {
  return (
    <div className='inner-container'>
      <ProductList />
      <Row gutter={[20, 20]} style={{marginBottom: '150px'}}>
        <Col xs={24} lg={12}><LeftForm/></Col>
        <Col xs={24} lg={12}><RightForm/></Col>
      </Row>
    </div>
  );
};

export default Cart;