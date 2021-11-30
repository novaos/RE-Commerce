import { IAnnualRate } from '../interfaces';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, CartesianGrid, AreaChart, Area } from 'recharts';

type FCProps = {
  annualCurrencyRate: IAnnualRate[]
}

const ChartLine = ({annualCurrencyRate}: FCProps) => {
  return (
    <ResponsiveContainer minHeight={300}>
      <AreaChart data={annualCurrencyRate}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="9 9" />
        <XAxis dataKey="exchangedate" />
        <YAxis />
        <Tooltip />
        <Legend iconType='circle' />
        <Area type='monotone' dataKey="usd"  stroke="#82ca9d" fill='#32d51e' dot unit=' UAH' />
        <Area type="monotone" dataKey="eur"  stroke="#ffc658" fill='#ffc658' dot unit=' UAH' />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default ChartLine;