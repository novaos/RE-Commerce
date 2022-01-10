import { Col, Divider, Image, Rate, Row, Typography } from 'antd';
import * as React from 'react';
import './reviewsTab.scss';
import { AddReviewForm } from '../AddReviewForm';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { ReviewType } from '../../../../utils/providers/GlobalContext/globalContext.types';

const ReviewsTab: React.FC<{ reviews: ReviewType[] }> = ({ reviews }) => {
  const { state } = useContext(GlobalContext);
  return (
    <div className="reviews-tab-wrapper">
      <Typography.Title style={{ marginBottom: '40px' }} level={5}>
        {reviews.length} reviews for {state.selectedProduct?.name}
      </Typography.Title>
      {reviews.map(({ avatar, rating, body, date, name, id }) => (
        <Row key={id}>
          <Col span={3}>
            <Image
              width={'150px'}
              height={'auto'}
              src={avatar || 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'}
            />
          </Col>
          <Col offset={1} span={20}>
            <div className="reviews-tab-wrapper-info">
              <Row gutter={30} align="middle">
                <Col>
                  <Rate disabled allowHalf defaultValue={rating} />
                </Col>
                <Divider type="vertical" />
                <Col>
                  <Typography.Paragraph>{dayjs(date).format('MMM DD, YYYY')}</Typography.Paragraph>
                </Col>
              </Row>
              <Typography.Title level={3}>{name}</Typography.Title>
              <Typography.Paragraph>{body}</Typography.Paragraph>
            </div>
          </Col>
        </Row>
      ))}
      <AddReviewForm />
    </div>
  );
};

export { ReviewsTab };
