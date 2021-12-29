import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Typography } from 'antd';
import { Formik } from 'formik';
import * as React from 'react';
import { useMemo } from 'react';
import './addReviewForm.scss';

const AddReviewForm: React.FC = () => {
  const initialValues = useMemo(
    () => ({
      name: '',
      email: '',
      review: '',
      rating: 0
    }),
    []
  );
  return (
    <div className="add-review-form-wrapper">
      <Row>
        <Typography.Title level={3}>Add a review</Typography.Title>
      </Row>
      <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ handleSubmit, setFieldValue, values }) => (
          <Form onFinish={handleSubmit}>
            <Row style={{ marginBottom: '30px' }}>
              <Col span={8}>
                <Input onChange={e => setFieldValue('name', e.target.value)} name="name" placeholder="Your name..." />
              </Col>
              <Col offset={2} span={8}>
                <Input
                  onChange={e => setFieldValue('email', e.target.value)}
                  name="email"
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
                        <StarOutlined style={{ color: 'orange' }} onClick={() => setFieldValue('rating', item)} />
                      )
                    );
                  }
                  return (
                    <>
                      {arrayOfStars.map(row => row)}
                      <Divider type="vertical" />
                    </>
                  );
                })}
              </Col>
            </Row>
            <Form.Item>
              <Input.TextArea onChange={e => setFieldValue('review', e.target.value)} style={{ height: '200px' }} />
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
