import { Col, Row } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import './checkout.scss';
import LeftForm from './components/LeftForm';
import RightBill from './components/RightBill';

const Checkout = () => {
  const { state: {productsInCart} } = useContext(GlobalContext);
  const history = useHistory();

  if(!productsInCart?.length) {
    history.push('/catalog')
    return null;
  }
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
