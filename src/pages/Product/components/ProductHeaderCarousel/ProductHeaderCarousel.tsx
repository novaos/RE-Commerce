import { Carousel, Col, Row, Image } from 'antd';
import * as React from 'react';

const SampleNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="arrow arrow-next" onClick={onClick} />
);

const SamplePrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="arrow arrow-prev" onClick={onClick} />
);
const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 3,
  dots: false
};

const ProductHeaderCarousel: React.FC<{ photo: string }> = ({ photo }) => {
  return (
    <div className="product-header-carousel-wrapper">
      <Row justify="start">
        <Col span={10}>
          <Carousel
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
            arrows={true}
            draggable={true}
            {...settings}>
            {[1, 2, 3, 4].map(item => (
              <Image width={'auto'} height={100} key={String(item)} src={photo} />
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export { ProductHeaderCarousel };
