import { Form, Input, Button, Card, Row, Col } from 'antd';

const RightForm = () => {
  return (
    <Form layout="vertical">
      <h2 className="form-title">use gift voucher</h2>
      <Form.Item label="Enter Your Gift Voucher Code Here">
        <Input.Group compact>
          <Input placeholder="Enter your gift voucher code here" size="large" style={{ width: 'calc(100% - 130px)' }} />
          <Button className='cart-form-btn' size="large" type="primary">
            APPLY
          </Button>
        </Input.Group>
      </Form.Item>

      <h2 className="form-title">sopping cart calculation</h2>
      <Form.Item>
        <Card className='cart-coupon'>
          <Row justify='space-between'>
            <Col><p>Subtotal</p></Col>
            <Col><p>$450</p></Col>
          </Row>
          <Row justify='space-between'>
            <Col><p>Coupon</p></Col>
            <Col><p>-$50</p></Col>
          </Row>
          <Row justify='space-between'>
            <Col><p>Shipping</p></Col>
            <Col><p>Free Shipping</p></Col>
          </Row>
        </Card>
        <Card>
          <Row justify='space-between'>
            <Col><p>Total</p></Col>
            <Col><p>$400</p></Col>
          </Row>
        </Card>
      </Form.Item>
      <Form.Item>
        <Button className='cart-form-btn' size='large' type='primary' style={{width: 'fit-content', float: 'right'}} htmlType="submit">PROCEED TO CHECKOUT</Button>
      </Form.Item>
    </Form>
  );
};

export default RightForm;