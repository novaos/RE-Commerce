
import { Card, Rate, Button, } from 'antd';
import { HeartFilled, SyncOutlined, createFromIconfontCN } from '@ant-design/icons';
import './ProductCard.scss';

interface IProduct {
  title: string
  price: number
  rate: number
  img: string
}

interface IProps {
  product: IProduct
}

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

const ProductCard = ({ product }: IProps) => {
  const btns = (
    <div className='button-group'>
      <Button className='button-group-btn' type='primary' block icon={<IconFont type='icon-shoppingcart' />} />
      <Button className='button-group-btn' type='primary' block icon={<HeartFilled color='#fff' />} />
      <Button className='button-group-btn' type='primary' block icon={<SyncOutlined color='#fff' />} />
    </div>
  )

  return (
    <Card
      className='item-card'
      hoverable
      style={{ width: 300, margin: '0 auto', height: 570 }}
      bordered={false}
      bodyStyle={{padding: '5px 2px'}}
      cover={<img alt="example" height={450} src={product.img} />}
    >
      {btns}
      <p className='card-title'>{product.title}</p>
      <p className='card-description'>${product.price}</p>
      <Rate allowHalf defaultValue={product.rate} />
    </Card>
  );
};

export default ProductCard;
