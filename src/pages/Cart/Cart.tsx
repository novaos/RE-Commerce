import { Row, Col, Form, Input, Select, Button } from 'antd';
import './cart.scss';

const LeftSide = () => {
  return (
    <Form
      layout='vertical'>

        <h2 className='form-title'>use coupon code</h2>
        <Form.Item label='Enter Your Coupon Here'>
          <Input.Group compact>
            <Input placeholder='Enter Your Coupon Here' style={{width: 'calc(100% - 130px)'}} />
            <Button style={{width: '130px'}} type='primary'>APPLY</Button>
          </Input.Group>  
        </Form.Item>

        <h2 className='form-title'>shipping availability</h2>
        <Form.Item label='Select Country'>
          <Select defaultValue={'...'}>
            <Select.Option value='Ukraine'>Ukraine</Select.Option>
            <Select.Option value='Poland'>Poland</Select.Option>
            <Select.Option value='Spain'>Spain</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Select State'>
          <Select defaultValue={'...'}>
            <Select.Option value='test'>test</Select.Option>
            <Select.Option value='test'>test</Select.Option>
            <Select.Option value='test'>test</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='Pastcode / Zip'>
          <Input placeholder='Pastcode / Zip' />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>UPDATE TOTALS</Button>
        </Form.Item>
    </Form>
  )
}

const Cart = () => {
  return (
    <div className='inner-container'>
      <Row gutter={[20, 20]}>
        <Col flex='1 0 300px'><LeftSide/></Col>
        <Col flex='1 0 300px'><LeftSide/></Col>
      </Row>
    </div>
  );
};

export default Cart;