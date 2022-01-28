import { Image } from 'antd';
import * as React from 'react';
import './smallProductCard.scss';
import { SmallProductCardProps } from './smallProductCard.types';

const SmallProductCard: React.FC<SmallProductCardProps> = ({ product }) => {
  return (
    <div className="item-small-card">
      <Image style={{ objectFit: 'contain' }} width={80} src={'http://placeimg.com/640/480'} />
      <div className="content">
        <p className="card-title">{product.name}</p>
        <p className="card-description">${product.price}</p>
      </div>
    </div>
  );
};

export { SmallProductCard };
