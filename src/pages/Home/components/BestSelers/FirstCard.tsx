import { Card } from 'antd';
import { useTranslation } from 'react-i18next';

const FirstCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card
      className="description-card"
      style={{ width: 300, height: 350, margin: '0 auto' }}
      bodyStyle={{ padding: '5px 0' }}
      bordered={false}>
      <h1 className="description-card-title">{t('Home.title')}</h1>
      <p className="description-card-subtitle">{t('Home.caption')}</p>
      <p className="description-card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed d
      </p>
    </Card>
  );
};

export default FirstCard;
