import { useContext } from 'react';
import { Button, Card, Row, Col, Checkbox } from 'antd';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';

export default function Rightbill() {
  const {state: { productsInCart }} = useContext(GlobalContext);
  const total = productsInCart.map(item => item.price * item.option.count).reduce((a, b) => a + b, 0);

  return (
    <>
      <Card className="checkout-card">
        <h2 className="checkout-form-title">your order</h2>
        <Row justify="space-between" className="checkout-row">
          <Col>
            <p>Product</p>
          </Col>
          <Col>
            <p>Total</p>
          </Col>
        </Row>
        <hr />
        {productsInCart.map(item => (
          <Row key={item.id} justify="space-between" className="checkout-row">
            <Col>
              <p>
                {item.name} x {item.option.count}
              </p>
            </Col>
            <Col>
              <p>${item.price * item.option.count}</p>
            </Col>
          </Row>
        ))}
        <hr />
        <Row justify="space-between" className="checkout-row">
          <Col>
            <p>Subtotal</p>
          </Col>
          <Col>
            <p>${total}</p>
          </Col>
        </Row>
        <Row justify="space-between" className="checkout-row">
          <Col>
            <p>Shipping</p>
          </Col>
          <Col>
            <p>Free Shipping</p>
          </Col>
        </Row>
        <hr />
        <Row justify="space-between" className="checkout-row checkout-total">
          <Col>
            <p>Total</p>
          </Col>
          <Col>
            <p>${total}</p>
          </Col>
        </Row>
      </Card>
      <Card className="checkout-card">
        <div className="checkout-payment-block">
          <Checkbox>Direct Bank Transfer</Checkbox>
          <div className="checkout-payment">
            <p>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your
              order won’t be shipped until the funds have cleared in our account.
            </p>
          </div>
          <Checkbox>Cheque Payment</Checkbox>
          <div>
            <Checkbox>PayPal</Checkbox>
          </div>
        </div>
      </Card>
      <Button className="checkout-bill-btn" size="large" type="primary" htmlType="submit" form="checkout-form">
        place order
      </Button>
    </>
  );
}
