import { Row, Col } from 'antd';
import { useContext } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../../../utils/providers/GlobalContext';
import './featuredProducts.scss';

// const data = [
//   {
//     title: 'Cruise Dual Analog',
//     id: Math.random(),
//     price: 250,
//     rate: 2.5,
//     img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
//   },
//   {
//     title: 'Crown Summit Backpack',
//     id: Math.random(),
//     price: 170,
//     rate: 3,
//     img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
//   },
//   {
//     title: 'Joust Duffle Bag',
//     id: Math.random(),
//     price: 195,
//     rate: 4,
//     img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
//   },
//   {
//     title: 'Voyage Yoga Bag',
//     id: Math.random(),
//     price: 115,
//     rate: 4.5,
//     img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
//   },
//   {
//     title: 'Impulse Duffle',
//     id: Math.random(),
//     price: 240,
//     rate: 4.5,
//     img: "https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg"
//   }
// ]

const FeatureProducts = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <div className="fu-products-header">
          <h1 className="description-card-title">FEATURED PRODUCTS</h1>
          <p className="description-card-subtitle">Newest trends from top brands</p>
        </div>
        <Row justify="space-between" gutter={[20, 20]} wrap={true}>
          {/*  @ts-ignore */}
          {state?.products?.map(item => (
            <Col flex="300px" key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FeatureProducts;
