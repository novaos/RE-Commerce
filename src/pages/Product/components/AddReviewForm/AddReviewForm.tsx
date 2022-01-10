import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { Formik } from 'formik';
import * as React from 'react';
import { useContext, useMemo } from 'react';
import { addReview } from '../../../../business-logic';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './addReviewForm.scss';
import { addReviewFormValidationSchema } from './addReviewForm.validation';

const AddReviewForm: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const initialValues = useMemo(
    () => ({
      id: Date.now(),
      date: new Date(),
      name: '',
      email: '',
      body: '',
      rating: 0
    }),
    []
  );
  return (
    <div className="add-review-form-wrapper">
      <Row>
        <Typography.Title level={3}>Add a review</Typography.Title>
      </Row>
      <Formik
        validationSchema={addReviewFormValidationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          if (state.selectedProduct?.id) {
            addReview(state.selectedProduct?.id, { reviews: [...state.selectedProduct?.reviews, { ...values }] });
          }
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }}>
        {({ errors, touched, handleSubmit, setFieldValue, values }) => (
          <Form onFinish={handleSubmit}>
            <Row style={{ marginBottom: '30px' }}>
              <Col span={8}>
                <Input
                  style={{ borderColor: `${errors.name && touched.name ? 'red' : ''}` }}
                  onChange={e => setFieldValue('name', e.target.value)}
                  name="name"
                  placeholder="Your name..."
                />
              </Col>
              <Col offset={2} span={8}>
                <Input
                  onChange={e => setFieldValue('email', e.target.value)}
                  name="email"
                  style={{ borderColor: `${errors.email && touched.email ? 'red' : ''}` }}
                  placeholder="Your email..."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography.Title level={4}>Your Review</Typography.Title>
              </Col>
              <Col offset={8}>
                <Typography.Title level={5}>Your Rating</Typography.Title>
              </Col>
              <Col offset={1} className="stars">
                {[1, 2, 3, 4, 5].map(item => {
                  const arrayOfStars = [];
                  for (let i = 0; i < item; i++) {
                    arrayOfStars.push(
                      values.rating === item ? (
                        <StarFilled style={{ color: 'orange' }} />
                      ) : (
                        <StarOutlined
                          style={{ color: `${errors.rating && touched.rating ? 'red' : 'orange'}` }}
                          onClick={() => setFieldValue('rating', item)}
                        />
                      )
                    );
                  }
                  return (
                    <React.Fragment key={item}>
                      {arrayOfStars.map(row => row)}
                      <Divider type="vertical" />
                    </React.Fragment>
                  );
                })}
              </Col>
            </Row>
            <Form.Item>
              <Input.TextArea
                onChange={e => setFieldValue('body', e.target.value)}
                style={{ height: '200px', borderColor: `${errors.body && touched.body ? 'red' : ''}` }}
              />
            </Form.Item>
            <Button htmlType="submit" disabled={Object.values(values).some(item => item === 0 || item === '')}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { AddReviewForm };
