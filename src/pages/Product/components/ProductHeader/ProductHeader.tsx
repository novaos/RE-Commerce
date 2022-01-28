import { SyncOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Image, InputNumber, Rate, Row, Select, Typography } from 'antd';
import { Formik } from 'formik';
import * as React from 'react';
import { useCallback, useContext, useMemo, useState } from 'react';
import IconFont from '../../../../components/IconFont';
import { ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { ProductHeaderCarousel } from '../ProductHeaderCarousel';
import './productHeader.scss';
import { productHeaderValidationSchema } from './productHeader.validation';
import { useEffect } from 'react';

type ProductHeaderProps = {
 name: string;
 price: number;
 rating: number;
 id: string;
 description: string;
 handleAddProductToCart: (options: { size: string; color: string; count: number }) => void;
 handleAddComparison: () => void;
 productOptions: ProductType['options'];
 properties: ProductType['properties'];
};

const ProductHeader: React.FC<ProductHeaderProps> = ({
 name,
 price,
 rating,
 description,
 id,
 handleAddComparison,
 handleAddProductToCart,
 productOptions,
 properties
}) => {
 const [countOfProduct, setCountOfProduct] = useState(1);

 const [selectedProductOption, setSelectedProductOption] = useState(productOptions[0]);
 const { state } = useContext(GlobalContext);

 useEffect(() => {
  setSelectedProductOption(productOptions[0]);
 }, [productOptions]);

 const inputNumberToggler = useCallback((onClick: () => void, content: string) => {
  return (
   <div className="input-toggler" onClick={onClick}>
    {content}
   </div>
  );
 }, []);

 const hasInComparison = useMemo(() => {
  return state.comparisonProducts?.some(product => product.id === id);
 }, [state.comparisonProducts, id]);

 const filteredProperties = (keyName: string) => {
  return properties.filter(property => property.key === keyName);
 };

 const handleSelectProductOption = (color: string) => {
  const selectedProduct = productOptions.find(option => option.color === color) as typeof selectedProductOption;
  setSelectedProductOption(selectedProduct);
 };

 return (
  <div className="product-header-wrapper">
   <Row>
    <Col span={10}>
     <Image width={'100%'} height={'auto'} src={selectedProductOption.photosUrl[0]} />
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
       initialValues={{
        size: filteredProperties('size')[0].value as string,
        color: filteredProperties('color')[0].value as string,
        count: 1
       }}
       onSubmit={() => {}}>
       {({ errors, touched, values, setFieldValue }) => (
        <Form>
         <Row gutter={40}>
          <Col>
           <Select
            onChange={value => setFieldValue('size', value)}
            value={values?.size}
            style={{ width: 150, marginBottom: '30px', textTransform: 'uppercase' }}>
            {filteredProperties('size').map(({ value }) => (
             <Select.Option key={value} value={value}>
              {value}
             </Select.Option>
            ))}
           </Select>
          </Col>
          <Col>
           <Select
            onChange={(value: string) => {
             setFieldValue('color', value);
             handleSelectProductOption(value);
            }}
            value={String(values.color)}
            style={{ width: 150, marginBottom: '30px', textTransform: 'uppercase' }}>
            {filteredProperties('color').map(({ value }) => (
             <Select.Option key={value} value={value}>
              {value}
             </Select.Option>
            ))}
           </Select>
          </Col>
         </Row>
         <InputNumber
          min={0}
          addonBefore={inputNumberToggler(() => {
           if (countOfProduct === 1) {
            return;
           }
           setCountOfProduct(prev => prev - 1);
           setFieldValue('count', values.count - 1);
          }, '-')}
          addonAfter={inputNumberToggler(() => {
           setCountOfProduct(prev => prev + 1);
           setFieldValue('count', values.count + 1);
          }, '+')}
          defaultValue={countOfProduct}
          value={countOfProduct}
          style={{ marginBottom: '30px', borderColor: `${touched.count && errors.count ? 'red' : ''}` }}
          onChange={value => setFieldValue('count', value)}
         />
         <Row gutter={[10, 10]}>
          <Col>
           <Button
            htmlType="submit"
            onClick={() => handleAddProductToCart(values)}
            icon={<IconFont className="icon" type="icon-shoppingcart" />}
            className="button">
            Add to Card
           </Button>
          </Col>
          <Col>
           <Button
            onClick={() => handleAddComparison()}
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

   <ProductHeaderCarousel photos={selectedProductOption.photosUrl} />
  </div>
 );
};

export { ProductHeader };
