import { Row, Col } from 'antd';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import ProductList from './components/ProductList';

import './cart.scss';


const Cart = () => {
  return (
    <div className='inner-container'>
      <ProductList />
      <Row gutter={[20, 20]} style={{marginBottom: '150px'}}>
        <Col flex='1 0 300px'><LeftForm/></Col>
        <Col flex='1 0 300px'><RightForm/></Col>
      </Row>
    </div>
  );
};

export default Cart;