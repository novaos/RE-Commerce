import { Carousel, Col, Row, Typography } from 'antd';
import * as React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../../../utils/providers/GlobalContext';
import './relatedProducts.scss';
import Loader from '../../../../components/Loader';

const RelatedProducts: React.FC = () => {
  const { state } = React.useContext(GlobalContext);

  const SampleNextArrow = (props: any) => {
    const { onClick } = props;
    return <div className="arrows arrows-next" onClick={onClick} />;
  };

  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return <div className="arrows arrows-prev" onClick={onClick} />;
  };
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false
  };
  return (
    <>
      {state?.products ? (
        <div className="related-products-wrapper">
          <Row justify="space-between">
            <Col>
              <Typography.Title level={4}>RelatedProducts</Typography.Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                arrows={true}
                draggable={true}
                {...settings}>
                {state?.products?.slice(0, 15).map(product => (
                  <>
                    <ProductCard key={product.id} product={product} />
                  </>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export { RelatedProducts };
