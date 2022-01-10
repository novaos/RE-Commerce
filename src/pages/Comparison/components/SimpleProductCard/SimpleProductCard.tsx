import { DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Image, Rate, Row, Typography } from 'antd';
import * as React from 'react';
import { useCallback } from 'react';
import IconFont from '../../../../components/IconFont';
import { ActionTypes, ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './simpleProductCard.scss';
type SimpleProductCardProps = {
  product?: ProductType;
};
const SimpleProductCard: React.FC<SimpleProductCardProps> = ({ product }) => {
  const { dispatch } = React.useContext(GlobalContext);

  const onAdd = useCallback(() => {
    if (product) {
      dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
    }
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
