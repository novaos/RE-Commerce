import React from 'react';
import { Card, Rate, Divider, Button, } from 'antd';
import { ShoppingCartOutlined, HeartFilled, SyncOutlined } from '@ant-design/icons';
import './ProductCard.scss';

const ProductCard: React.FC = () => {
  const btns = (
    <div className='button-group'>
      <Button className='button-group-btn' type='primary' block icon={<ShoppingCartOutlined color='#fff' />} />
      <Button className='button-group-btn' type='primary' block icon={<HeartFilled color='#fff' />} />
      <Button className='button-group-btn' type='primary' block icon={<SyncOutlined color='#fff' />} />
    </div>
  )

  return (
    <>
      <Divider orientation='left'>Best selers</Divider>
      {/* <Dropdown overlay={btns}> */}
        <Card
          className='item-card'
          hoverable
          style={{ width: 300, margin: '0 auto', height: 570 }}
          bordered={false}
          bodyStyle={{padding: '5px 0'}}
          cover={<img alt="example" height={450} src="https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg" />}
        >
          {btns}
          <p className='card-title'>Cruise Dual Analog</p>
          <p className='card-description'>$250.00</p>
          <Rate allowHalf defaultValue={3.5}/>
        </Card>
      {/* </Dropdown> */}
    </>
  );
};

export default ProductCard;
