import { Form, Input, Select, Row, Col, Checkbox, message } from 'antd';


const Leftform: React.FC = () => {
  const [form] = Form.useForm();

  const rules = [{
    required: true,
    message: 'This field is required!',
  }];

  const onSubmit = () => {
    message.success({
      content: 'We will contact you soon!',
      duration: 3,
      onClose: () => form.resetFields()
    })
  }
  
  return (
      <Form 
        form={form}
        id='checkout-form'
        layout="vertical" 
        onFinish={ onSubmit }
        scrollToFirstError
      >
        <h2 className="checkout-form-title">Billing details</h2>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Form.Item label="First Name" name='firstName' rules={rules}>
              <Input size="large"/>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last Name" name='lastName' rules={rules} >
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Country" name='country' rules={rules} >
          <Select defaultValue={'...'} size="large">
            <Select.Option value="Ukraine">Ukraine</Select.Option>
            <Select.Option value="Poland">Poland</Select.Option>
            <Select.Option value="Spain">Spain</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Company Name" name='companyName'>
          <Input placeholder="Pastcode / Zip" size="large" />
        </Form.Item>
        <Form.Item label="Address" name='address'  rules={rules}>
          <Input placeholder="Street address" size="large" />
        </Form.Item>
        <Form.Item label="Postcode / Zip" name='postcode'>
          <Input placeholder="Postcode / Zip" size="large" />
        </Form.Item>
        <Form.Item label="Town / City" name='town'  rules={rules}>
          <Input placeholder="Town / City" size="large" />
        </Form.Item>
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Form.Item label="Email Address" name='email' htmlFor='email'  rules={rules}>
              <Input size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phone" name='phone' htmlFor='tel'   rules={rules}>
              <Input size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Checkbox className='checkout-ckeckbox'>Create an account?</Checkbox>
        </Form.Item>
      </Form>
  );
};

export default Leftform;
