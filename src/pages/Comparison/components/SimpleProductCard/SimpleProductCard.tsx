import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Image, Rate, Row, Typography } from 'antd';
import * as React from 'react';
import { useCallback } from 'react';
import IconFont from '../../../../components/IconFont';
import useProductCart from '../../../../utils/hooks/useProductCart';
import { ProductType } from '../../../../utils/providers/GlobalContext';
import './simpleProductCard.scss';
type SimpleProductCardProps = {
  product?: ProductType;
};
const SimpleProductCard: React.FC<SimpleProductCardProps> = ({ product }) => {
  const { addToCart } = useProductCart();

  const onAdd = useCallback(() => {
    if (product) {
      addToCart(product);
    }
    // eslint-disable-next-line
  }, [product]);

  return (
    <div className={'simple-product-card-wrapper'}>
      <div className="image-wrapper">
        <Image
          style={{ objectFit: 'cover' }}
          width={200}
          src="https://www.fotor.com/blog/wp-content/uploads/2019/10/12.blur-photo.png"
        />
      </div>
      <Typography.Title level={5}>Name of the product</Typography.Title>
      <Rate disabled allowHalf defaultValue={4} />
      <Typography.Title level={4}>$123.12</Typography.Title>
      <Row justify="space-between">
        <Col>
          <Button
            onClick={onAdd}
            icon={<IconFont className="icon" type="icon-shoppingcart" />}
            className="button"></Button>
        </Col>
        <Col>
          <Button className="button" icon={<DeleteOutlined className="icon" />}></Button>
        </Col>
      </Row>
    </div>
  );
};

export { SimpleProductCard };
