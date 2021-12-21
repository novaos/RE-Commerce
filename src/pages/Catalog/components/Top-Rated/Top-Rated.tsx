import { Row } from 'antd';
import * as React from 'react';
import { SmallProductCard } from '../small-product-card';
import './Top-Rated.scss';

const data = [
  {
    title: 'Cruise Dual Analog',
    id: Math.random(),
    price: 250,
    rate: 2.5,
    img: 'https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg'
  },
  {
    title: 'Crown Summit Backpack',
    id: Math.random(),
    price: 170,
    rate: 3,
    img: 'https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg'
  },
  {
    title: 'Joust Duffle Bag',
    id: Math.random(),
    price: 195,
    rate: 4,
    img: 'https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg'
  },
  {
    title: 'Voyage Yoga Bag',
    id: Math.random(),
    price: 115,
    rate: 4.5,
    img: 'https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg'
  },
  {
    title: 'Impulse Duffle',
    id: Math.random(),
    price: 240,
    rate: 4.5,
    img: 'https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg'
  }
];

const TopRated: React.FC = () => {
  return (
    <div className="top-rated-wrapper">
      <h4 className="title">Top Rated</h4>
      <Row justify="space-between">
        {[...data].slice(0, 3).map(item => (
          <SmallProductCard key={item.id} product={item} />
        ))}
      </Row>
    </div>
  );
};

export { TopRated };
