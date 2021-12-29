import { createFromIconfontCN, HeartFilled, SyncOutlined } from '@ant-design/icons';
import { Button, Card, Rate } from 'antd';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ActionTypes, GlobalContext, ProductType } from '../../utils/providers/GlobalContext';
import './productCard.scss';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js' // icon-shoppingcart, icon-python
  ]
});

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  const { dispatch } = useContext(GlobalContext);

  const cartHandler = () => {
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
  };

  const btns = (
    <div className="button-group">
      <Button
        className="button-group-btn"
        type="primary"
        block
        onClick={cartHandler}
        icon={<IconFont type="icon-shoppingcart" />}
      />
      <Button className="button-group-btn" type="primary" block icon={<HeartFilled color="#fff" />} />
      <Button className="button-group-btn" type="primary" block icon={<SyncOutlined color="#fff" />} />
    </div>
  );

  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className="item-card"
        hoverable
        style={{ width: 300, margin: '0 auto', height: 570 }}
        bordered={false}
        bodyStyle={{ padding: '5px 2px' }}
        cover={<img style={{ objectFit: 'contain' }} alt="example" height={450} src={product.photo} />}>
        {btns}
        <p className="card-title">{product.name}</p>
        <p className="card-description">${product.price}</p>
        <Rate disabled allowHalf defaultValue={product.rating} />
      </Card>
    </Link>
  );
};

export default ProductCard;
