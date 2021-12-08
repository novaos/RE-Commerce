import useCurrency from './hooks/useCurrency';
import { useTranslation } from 'react-i18next';
import ChartBar from './components/ChartBar';
import ChartLine from './components/ChartLine';
import ChartPie from './components/ChartPie';

const Charts = () => {
  const {annualCurrencyRate, worldCurrencyRate} = useCurrency();
  const { t } = useTranslation();

  return (
    <>
      <div className="notification is-info">
        <button className="delete"></button>
        <h3>Prerequisites</h3>
        <code>npm install recharts</code>
      </div>

      <h1 className="title">{t('Charts.title')}</h1>
      
      <div className="tile in-ancestor block">
        <div className="tile is-parent is-vertical is-6">
          <div className="tile is-child box has-background-dark ">
            <ChartBar annualCurrencyRate={annualCurrencyRate} />
          </div>
          <div className="tile is-child box has-background-dark">
            <ChartLine annualCurrencyRate={annualCurrencyRate} />
          </div>
        </div>

        <div className="tile is-parent is-6">
          <div className='tile is-child box p-0 has-background-dark'>
            <ChartPie worldCurrencyRate={worldCurrencyRate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;