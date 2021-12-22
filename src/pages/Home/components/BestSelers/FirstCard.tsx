import { Card } from 'antd';

const FirstCard: React.FC = () => {
  return (
    <Card
      className='description-card'
      style={{width: 300, height: 570, margin: '0 auto'}}
      bodyStyle={{padding: '5px 0'}}
      bordered={false}
    >
      <h1 className='description-card-title'>BEST SELERS</h1>
      <p className='description-card-subtitle'>The best productions from us</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed d
      </p>
    </Card>
  );
};

export default FirstCard;