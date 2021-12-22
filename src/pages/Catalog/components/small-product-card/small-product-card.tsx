import { Image } from 'antd';
import * as React from 'react';
import './small-product-card.scss';
import { SmallProductCardProps } from './small-product-card.types';

const SmallProductCard: React.FC<SmallProductCardProps> = ({ product }) => {
  return (
    <div className="item-small-card">
      <Image style={{ objectFit: 'contain' }} width={80} src={product.photo} />
      <div className="content">
        <p className="card-title">{product.name}</p>
        <p className="card-description">${product.price}</p>
      </div>
    </div>
  );
};

export { SmallProductCard };
