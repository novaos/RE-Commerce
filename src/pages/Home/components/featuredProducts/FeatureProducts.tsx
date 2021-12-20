import { Row, Col } from 'antd';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import './featuredProducts.scss';

const data = [
  {
    title: 'Cruise Dual Analog',
    price: 250,
    rate: 2.5,
    img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
  },
  {
    title: 'Crown Summit Backpack',
    price: 170,
    rate: 3,
    img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
  },
  {
    title: 'Joust Duffle Bag',
    price: 195,
    rate: 4,
    img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
  },
  {
    title: 'Voyage Yoga Bag',
    price: 115,
    rate: 4.5,
    img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
  },
  {
    title: 'Impulse Duffle',
    price: 240,
    rate: 4.5,
    img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
  }
]

const FeatureProducts = () => {
  return (
    <div className="best-selers-wrap">
      <div className="fu-products-header">
        <h1 className='description-card-title'>FEATURED PRODUCTS</h1>
        <p className='description-card-subtitle'>Newest trends from top brands</p>
      </div>
      <Row justify="space-between" gutter={[20, 20]} wrap={true} >
        {[...data, ...data].map(item => (
          <Col flex="300px">
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FeatureProducts;
