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

const ProductHeaderCarousel: React.FC<{ photos: string[] }> = ({ photos }) => {
 return (
  <div className="product-header-carousel-wrapper">
   <Row justify="start">
    <Col span={10}>
     <Carousel
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
      arrows={true}
      draggable={true}
      {...settings}>
      {photos.map((photo, id) => (
       <Image width={'auto'} height={100} key={`${photo}-${id}`} src={photo} />
      ))}
     </Carousel>
    </Col>
   </Row>
  </div>
 );
};

export { ProductHeaderCarousel };
