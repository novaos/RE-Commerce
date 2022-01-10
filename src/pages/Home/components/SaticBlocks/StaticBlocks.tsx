import { Row, Col } from 'antd';
import './staticBlocks.scss';
import { RocketFilled, FireFilled, SyncOutlined, LikeFilled } from '@ant-design/icons';

const data = [
  {
    icon: <FireFilled style={{fontSize: '50px'}} />,
    title: 'SPECIAL OFFERS',
    subtitle: 'Shop Big Save Big'
  },
  {
    icon: <LikeFilled style={{fontSize: '50px'}} />,
    title: 'FREE DELIVERY',
    subtitle: 'On Orders Above $99'
  },
  {
    icon: <SyncOutlined style={{fontSize: '50px'}} />,
    title: '30 DAYS RETURN',
    subtitle: 'Policy We Offers'
  },
  {
    icon: <RocketFilled style={{fontSize: '50px'}} />,
    title: 'FASTEST SHIPPING',
    subtitle: '2 Days Express'
  },
];

const StaticBlocks: React.FC = () => {
  return (
    <Row gutter={[5, 5]}>
      {
        data.map((item, index) => (
          <Col xs={24} sm={24} md={12}  lg={6} key={index} >
            <div className='delivery-item'>
              <div className="delivery-item-icon">
                {item.icon}
              </div>
              <h2 className='delivery-item-title' >{item.title}</h2>
              <span className='delivery-item-subtitle' >{item.subtitle}</span>
            </div>
          </Col>
        ))
      }
    </Row>
  )
}

export default StaticBlocks;