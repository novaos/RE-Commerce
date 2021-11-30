import { IAnnualRate } from '../interfaces';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, CartesianGrid } from 'recharts';

type FCProps = {
  annualCurrencyRate: IAnnualRate[]
}

const ChartBar = ({annualCurrencyRate}: FCProps) => {
  return (
    <ResponsiveContainer minHeight={300}>
      <BarChart  data={annualCurrencyRate} barCategoryGap='15%' >
        <CartesianGrid strokeDasharray="9 9" vertical={false} />
        <XAxis  dataKey="exchangedate" />
        <YAxis tickCount={6} axisLine={{stroke: '#fff'}}  />
        <Tooltip />
        <Legend />
        <Bar dataKey="usd" fill="#00C49F" legendType='triangle' unit=' UAH' />
        <Bar dataKey="eur" fill="#FF8042" legendType='triangle' unit=' UAH' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ChartBar;
