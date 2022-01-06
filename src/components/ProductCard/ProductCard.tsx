import { createFromIconfontCN, HeartFilled, SyncOutlined } from '@ant-design/icons';
import { Button, Card, Rate } from 'antd';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import { ProductType } from '../../utils/providers/GlobalContext/globalContext.types';
import './productCard.scss';
import { LocalStorageKeys } from '../../utils/types';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js' // icon-shoppingcart, icon-python
  ]
});

const ProductCard: React.FC<{ product: ProductType; styles?: { [key: string]: string | number } }> = ({
  product,
  styles
}) => {
  const { dispatch } = useContext(GlobalContext);

  const cartHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
  };

  const addComparison = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    const storageData = localStorage.getItem(LocalStorageKeys.comparison);
    const hasProduct = storageData
      ? JSON.parse(storageData)?.some((item: ProductType) => {
          return item.id === product.id;
        })
      : false;

    if (!hasProduct) {
      dispatch({ type: ActionTypes.ADD_COMPARISON_PRODUCT, payload: product });
      // localStorage.setItem(
      //   LocalStorageKeys.comparison,
      //   JSON.stringify(storageData ? JSON.parse(storageData).concat(product) : [product])
      // );
    }
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
      <Button
        onClick={addComparison}
        className="button-group-btn"
        type="primary"
        block
        icon={<SyncOutlined color="#fff" />}
      />
    </div>
  );
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/product/${product.id}`)}>
      <Card
        className="item-card"
        hoverable
        style={{ width: 300, margin: '0 auto', height: 570, ...styles }}
        bordered={false}
        bodyStyle={{ padding: '5px 2px' }}
        cover={<img style={{ objectFit: 'contain' }} alt="example" height={450} src={product.photo} />}>
        {btns}
        <p className="card-title">{product.name}</p>
        <p className="card-description">${product.price}</p>
        <Rate disabled allowHalf defaultValue={product.rating} />
      </Card>
    </div>
  );
};

export default ProductCard;
