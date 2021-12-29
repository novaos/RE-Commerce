import { Row, Col } from 'antd';
import LeftForm from './components/LeftForm';
import RightBill from './components/RightBill';
import './checkout.scss';

const Checkout = () => {
  return (
    <div className='inner-container'>
      <Row gutter={[20, 20]} style={{marginBottom: '150px'}}>
        <Col flex='1 0 300px'><LeftForm/></Col>
        <Col flex='1 0 300px'><RightBill/></Col>
      </Row>
    </div>
  );
};

export default Checkout;
