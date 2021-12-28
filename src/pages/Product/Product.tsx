import { HeartOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Carousel, Col, Divider, Image, InputNumber, Rate, Row, Select, Typography } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../../business-logic';
import IconFont from '../../components/IconFont';
import { GlobalContext, ProductType, ActionTypes } from '../../utils/providers/GlobalContext';
import { ProductTabs, RelatedProducts } from './components';
import './product.scss';
import Loader from '../../components/Loader';
const options = [
  {
    label: 'label',
    value: 'value'
  },
  {
    label: 'label',
    value: 'value'
  },
  {
    label: 'label',
    value: 'value'
  }
];

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return <div className="arrow arrow-next" onClick={onClick} />;
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return <div className="arrow arrow-prev" onClick={onClick} />;
};

const inputNumberToggler = (onClick: () => void, content: string) => {
  return (
    <div className="input-toggler" onClick={onClick}>
      {content}
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 3,
  dots: false
};

const Product: React.FC = () => {
  const [countOfProduct, setCountOfProduct] = useState(1);
  const { state, dispatch } = React.useContext(GlobalContext);

  const { id } = useParams<{ id: string }>();
  const { selectedProduct } = state;

  console.log(selectedProduct);

  React.useEffect(() => {
    const callback = (product: ProductType) => dispatch({ type: ActionTypes.GET_SELECTED_PRODUCT, payload: product });
    getSelectedProduct(id, callback);
  }, [dispatch, id]);
  return (
    <>
      {selectedProduct ? (
        <div className="inner-container product-wrapper">
          <Row>
            <Col span={10}>
              <Image width={'100%'} height={'auto'} src={selectedProduct.photo} />
            </Col>
            <Col offset={1} span={13}>
              <div className="info-wrapper">
                <Typography.Title level={3}>{selectedProduct.name}</Typography.Title>
                <Row gutter={30} align="middle">
                  <Col>
                    <Typography.Paragraph>${selectedProduct.price}</Typography.Paragraph>
                  </Col>
                  <Col>
                    <Rate allowHalf defaultValue={selectedProduct.rating} />
                  </Col>
                </Row>
                <Typography.Paragraph>{selectedProduct.description}</Typography.Paragraph>
                <Divider className="divider" orientation="center" />
              </div>
              <div className="inputs-wrapper">
                <Row gutter={40}>
                  <Col>
                    <Select defaultValue={options[0].value} style={{ width: 150, marginBottom: '30px' }}>
                      {options.map(({ value, label }) => (
                        <Select.Option value={value}>{label}</Select.Option>
                      ))}
                    </Select>
                  </Col>
                  <Col>
                    <Select defaultValue={options[0].value} style={{ width: 150, marginBottom: '30px' }}>
                      {options.map(({ value, label }) => (
                        <Select.Option value={value}>{label}</Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
                <InputNumber
                  min={0}
                  addonBefore={inputNumberToggler(() => setCountOfProduct(prev => prev - 1), '-')}
                  addonAfter={inputNumberToggler(() => setCountOfProduct(prev => prev + 1), '+')}
                  defaultValue={countOfProduct}
                  value={countOfProduct}
                  style={{ marginBottom: '30px' }}
                />
                <Row gutter={[10, 10]}>
                  <Col>
                    <Button icon={<IconFont className="icon" type="icon-shoppingcart" />} className="button">
                      Add to Card
                    </Button>
                  </Col>
                  <Col>
                    <Button icon={<HeartOutlined color="#000" />} />
                  </Col>
                  <Col>
                    <Button icon={<SyncOutlined />} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row justify="start">
            <Col span={10}>
              <Carousel
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                arrows={true}
                draggable={true}
                {...settings}>
                {[1, 2, 3, 4].map(item => (
                  <Image width={'auto'} height={100} key={item} src={selectedProduct.photo} />
                ))}
              </Carousel>
            </Col>
          </Row>
          <ProductTabs about={selectedProduct.about} />
          <RelatedProducts />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Product;
