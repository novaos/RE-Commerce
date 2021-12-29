import React from 'react';
import { Form, Input, Select, Row, Col, Checkbox } from 'antd';


const Leftform = () => {
  return (
    <Form layout="vertical">
      <h2 className="checkout-form-title">Billing details</h2>

      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Form.Item label="First Name" htmlType='name' required>
            <Input placeholder="Pastcode / Zip" size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Last Name" required>
            <Input placeholder="Pastcode / Zip" size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Company Name">
        <Input placeholder="Pastcode / Zip" size="large" />
      </Form.Item>
      <Form.Item label="Country" required>
        <Select defaultValue={'...'} size="large">
          <Select.Option value="Ukraine">Ukraine</Select.Option>
          <Select.Option value="Poland">Poland</Select.Option>
          <Select.Option value="Spain">Spain</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Company Name">
        <Input placeholder="Pastcode / Zip" size="large" />
      </Form.Item>
      <Form.Item label="Address" required>
        <Input placeholder="Street address" size="large" />
      </Form.Item>
      <Form.Item label="Pastcode / Zip">
        <Input placeholder="Pastcode / Zip" size="large" />
      </Form.Item>
      <Form.Item label="Town / City" required>
        <Input placeholder="Town / City" size="large" />
      </Form.Item>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Form.Item label="Email Address" htmlType='email' required>
            <Input size="large" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Phone" htmlType='tel'  required>
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Checkbox className='checkout-ckeckbox' size='small'>Create an account?</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default Leftform;
