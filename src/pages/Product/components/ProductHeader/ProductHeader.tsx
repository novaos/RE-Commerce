import { SyncOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Image, InputNumber, Rate, Row, Select, Typography } from 'antd';
import { Formik } from 'formik';
import * as React from 'react';
import { useCallback, useContext, useMemo, useState } from 'react';
import IconFont from '../../../../components/IconFont';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { ProductHeaderCarousel } from '../ProductHeaderCarousel';
import './productHeader.scss';
import { productHeaderValidationSchema } from './productHeader.validation';

type ProductHeaderProps = {
  photo: string;
  name: string;
  price: string;
  rating: number;
  id: string;
  description: string;
  sizeOptions?: { value: string; label: string }[];
  colorOptions?: { value: string; label: string }[];
  onAdd: () => void;
  addComparison: () => void;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({
  photo,
  name,
  price,
  rating,
  description,
  sizeOptions,
  colorOptions,
  id,
  addComparison,
  onAdd
}) => {
  const [countOfProduct, setCountOfProduct] = useState(1);
  const { state } = useContext(GlobalContext);
  const inputNumberToggler = useCallback((onClick: () => void, content: string) => {
    return (
      <div className="input-toggler" onClick={onClick}>
        {content}
      </div>
    );
  }, []);

  const hasInCart = useMemo(() => {
    return state.productsInCart?.some(product => product.id === id);
  }, [state.productsInCart, id]);

  const hasInComparison = useMemo(() => {
    return state.comparisonProducts?.some(product => product.id === id);
  }, [state.comparisonProducts, id]);

  return (
    <div className="product-header-wrapper">
      <Row>
        <Col span={10}>
          <Image width={'100%'} height={'auto'} src={photo} />
        </Col>
        <Col offset={1} span={13}>
          <div className="info-wrapper">
            <Typography.Title level={3}>{name}</Typography.Title>
            <Row gutter={30} align="middle">
              <Col>
                <Typography.Paragraph>${price}</Typography.Paragraph>
              </Col>
              <Col>
                <Rate disabled allowHalf defaultValue={rating} />
              </Col>
            </Row>
            <Typography.Paragraph>{description}</Typography.Paragraph>
            <Divider className="divider" orientation="center" />
          </div>
          <div className="inputs-wrapper">
            <Formik
              validationSchema={productHeaderValidationSchema}
              enableReinitialize
              initialValues={{ size: sizeOptions?.[0]?.value, color: colorOptions?.[0]?.value, count: 1 }}
              onSubmit={() => {}}>
              {({ errors, touched, values, setFieldValue }) => (
                <Form>
                  <Row gutter={40}>
                    <Col>
                      <Select
                        onChange={value => setFieldValue('size', value)}
                        value={values?.size}
                        style={{ width: 150, marginBottom: '30px', textTransform: 'uppercase' }}>
                        {sizeOptions?.map(({ value, label }) => (
                          <Select.Option key={value} value={value}>
                            {label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Col>
                    <Col>
                      <Select
                        onChange={value => setFieldValue('color', value)}
                        value={values?.color}
                        style={{ width: 150, marginBottom: '30px', textTransform: 'uppercase' }}>
                        {colorOptions?.map(({ value, label }) => (
                          <Select.Option key={value} value={value}>
                            {label}
                          </Select.Option>
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
                    style={{ marginBottom: '30px', borderColor: `${touched.count && errors.count ? 'red' : ''}` }}
                    onChange={value => setFieldValue('count', value)}
                  />
                  <Row gutter={[10, 10]}>
                    <Col>
                      <Button
                        htmlType="submit"
                        onClick={onAdd}
                        disabled={hasInCart}
                        style={{ backgroundColor: `${hasInCart ? 'rgba(87, 39, 39, 0.329)' : 'green'}` }}
                        icon={<IconFont className="icon" type="icon-shoppingcart" />}
                        className="button">
                        Add to Card
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => addComparison()}
                        disabled={hasInComparison}
                        style={{ backgroundColor: `${hasInComparison ? 'rgba(87, 39, 39, 0.329)' : ''}` }}
                        icon={<SyncOutlined />}
                      />
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>

      <ProductHeaderCarousel photo={photo} />
    </div>
  );
};

export { ProductHeader };
