import { IAnnualRate } from '../interfaces';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, LineChart, Line } from 'recharts';

type FCProps = {
  annualCurrencyRate: IAnnualRate[]
}

const ChartLine = ({annualCurrencyRate}: FCProps) => {
  return (
    <ResponsiveContainer minHeight={300}>
      <LineChart data={annualCurrencyRate} >
        {/* <CartesianGrid strokeDasharray="0 0" opacity='.8' /> */}
        <XAxis dataKey="exchangedate" />
        <YAxis />
        <Tooltip  />
        <Legend iconType='circle' />
        <Line type='monotone' dataKey="usd" stroke="#f10909" dot={false} strokeWidth={4} unit=' UAH' />
        <Line type="monotone" dataKey="nok" stroke="#82ca9d" dot={false} strokeWidth={2} unit=' UAH' />
        <Line type="monotone" dataKey="eur" stroke="#ffc658" dot={false} strokeWidth={6} unit=' UAH' />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default ChartLine;