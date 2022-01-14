import { Form, Input, Button, Select } from 'antd';

export default function LeftForm() {
  return (
    <Form layout="vertical">
      <h2 className="form-title">use coupon code</h2>
      <Form.Item label="Enter Your Coupon Here">
        <Input.Group compact>
          <Input placeholder="Enter your coupon here" size="large" style={{ width: 'calc(100% - 130px)' }} />
          <Button className='cart-form-btn' size="large" type="primary">
            APPLY
          </Button>
        </Input.Group>
      </Form.Item>

      <h2 className="form-title">shipping availability</h2>
      <Form.Item label="Select Country">
        <Select defaultValue={'...'} size="large">
          <Select.Option value="Ukraine">Ukraine</Select.Option>
          <Select.Option value="Poland">Poland</Select.Option>
          <Select.Option value="Spain">Spain</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Select State">
        <Select defaultValue={'...'} size="large">
          <Select.Option value="test">test</Select.Option>
          <Select.Option value="test">test</Select.Option>
          <Select.Option value="test">test</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Pastcode / Zip">
        <Input placeholder="Pastcode / Zip" size="large" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">UPDATE TOTALS</Button>
      </Form.Item>
    </Form>
  );
}