import { Form, Input, Select, Row, Col, Checkbox, message } from 'antd';
import { ErrorMessage, Formik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';
import { ActionTypes } from '../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';



// const TestInput = ({label, ...props}: {label: string}) => {
//   const [fields] = useField(props);
//   return (
//     <Form.Item label={label} >
//       <Input
//         size="large"
//         {...props} 
//         {...fields}
//       />
//       {meta.touched && meta.error ? (<div className='ant-form-item-explain-error'>{meta.error}</div>) : null}
//     </Form.Item>
//   )
// }

const Leftform: React.FC = () => {
  const { dispatch } = useContext(GlobalContext)

  const initialValues = {
    firstName: '',
    lastName: '',
    country: '',
    companyName: '',
    address: '',
    postcode: null,
    town: '',
    email: '',
    phone: ''
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    country: Yup.string(),
    companyName: Yup.string(),
    address: Yup.string().required(),
    postcode: Yup.number(),
    town: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required()
  });

  const onSubmit = () => {
    message.success({
      content: 'We will contact you soon!',
      duration: 2,
      onClose: () => dispatch({ type: ActionTypes.UPDATE_CART, payload: []} )
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, getFieldProps }) => {
        return (
          <Form 
            id='checkout-form'
            layout="vertical" 
            onFinish={handleSubmit}
            scrollToFirstError
          >
            <h2 className="checkout-form-title">Billing details</h2>
            <Row gutter={[20, 20]}>
              <Col span={12}>
                <Form.Item label="First Name" >
                  <Input
                    size="large" 
                    {...getFieldProps('firstName')}
                  />
                  <ErrorMessage className='ant-form-item-explain-error' name='firstName' component='div' />
                </Form.Item>
                {/* <TestInput label='firstName' /> */}
              </Col>
              <Col span={12}>
                <Form.Item label="Last Name" >
                  <Input
                    size="large"
                    {...getFieldProps('lastName')}
                  />
                  <ErrorMessage className='ant-form-item-explain-error' name='lastName' component='div' />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Country" >
              <Select
                placeholder='Select a country'
                size="large"
                {...getFieldProps('country')}
              >
                <Select.Option value="Ukraine">Ukraine</Select.Option>
                <Select.Option value="Poland">Poland</Select.Option>
                <Select.Option value="Spain">Spain</Select.Option>
              </Select>
              <ErrorMessage className='ant-form-item-explain-error' name='country' component='div' />
            </Form.Item>
            <Form.Item label="Company Name">
              <Input 
                placeholder="Company name" 
                size="large" 
                {...getFieldProps('companyName')} 
              />
            </Form.Item>
            <Form.Item label="Address" >
              <Input
                placeholder="Street address"
                size="large"
                {...getFieldProps('address')}
              />
              <ErrorMessage className='ant-form-item-explain-error' name='address' component='div' />
            </Form.Item>
            <Form.Item label="Postcode / Zip" >
              <Input 
                placeholder="Postcode / Zip" 
                size="large"
                type='number'
                {...getFieldProps('postcode')}
              />
            </Form.Item>
            <Form.Item label="Town / City" >
              <Input
                placeholder="Town / City"
                size="large"
                {...getFieldProps('town')}
              />
              <ErrorMessage className='ant-form-item-explain-error' name='town' component='div' />
            </Form.Item>
            <Row gutter={[20, 20]}>
              <Col span={12}>
                <Form.Item label="Email Address" htmlFor='email' >
                  <Input
                    size="large"
                    {...getFieldProps('email')}
                  />
                  <ErrorMessage className='ant-form-item-explain-error' name='email' component='div' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phone" htmlFor='tel' >
                  <Input
                    size="large"
                    {...getFieldProps('phone')}
                  />
                  <ErrorMessage className='ant-form-item-explain-error' name='phone' component='div' />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Checkbox className='checkout-ckeckbox'>Create an account?</Checkbox>
            </Form.Item>
          </Form>
        );
      }}
    </Formik>
  )
  
};

export default Leftform;
