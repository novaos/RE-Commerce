import { Row, Col } from 'antd';
import './staticBlocks.scss';
import { RocketFilled, FireFilled, SyncOutlined, LikeFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const StaticBlocks: React.FC = () => {
  const { t } = useTranslation();
  const data = [
    {
      icon: <FireFilled style={{ fontSize: '50px' }} />,
      title: t('Home.offers.1.title'),
      subtitle: t('Home.offers.1.description')
    },
    {
      icon: <LikeFilled style={{ fontSize: '50px' }} />,
      title: t('Home.offers.2.title'),
      subtitle: t('Home.offers.2.description')
    },
    {
      icon: <SyncOutlined style={{ fontSize: '50px' }} />,
      title: t('Home.offers.3.title'),
      subtitle: t('Home.offers.3.description')
    },
    {
      icon: <RocketFilled style={{ fontSize: '50px' }} />,
      title: t('Home.offers.4.title'),
      subtitle: t('Home.offers.4.description')
    }
  ];
  return (
    <Row gutter={[5, 5]}>
      {data.map((item, index) => (
        <Col xs={24} sm={24} md={12} lg={6} key={String(index)}>
          <div className="delivery-item">
            <div className="delivery-item-icon">{item.icon}</div>
            <h2 className="delivery-item-title">{item.title}</h2>
            <span className="delivery-item-subtitle">{item.subtitle}</span>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default StaticBlocks;
