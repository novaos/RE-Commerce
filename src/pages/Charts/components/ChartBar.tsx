import { IAnnualRate } from '../interfaces';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Legend, CartesianGrid } from 'recharts';

type FCProps = {
  annualCurrencyRate: IAnnualRate[]
}


const CustomTooltip = (props: any) => {
  console.log(props)
  if (props.active && props.payload && props.payload.length) {
    return (
      <div className="box">
        <h3 className='label'>{props.label}</h3>
        <p className="label">{`${props.payload[0].name} : ${props.payload[0].value} UAH`}</p>
        <p className="label">{`${props.payload[1].name} : ${props.payload[1].value} UAH`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};



const ChartBar = ({annualCurrencyRate}: FCProps) => {
  return (
    <ResponsiveContainer minHeight={300}>
      <BarChart  data={annualCurrencyRate.slice(6)} barCategoryGap='20%' >
        <CartesianGrid strokeDasharray="9 9" vertical={false} />
        <XAxis  dataKey="exchangedate" />
        <YAxis tickCount={6} axisLine={{stroke: '#fff'}}  />
        <Tooltip content={<CustomTooltip />} animationDuration={250} />
        <Legend />
        <Bar dataKey="usd" fill="#00C49F" legendType='triangle' unit=' UAH' label={{fill:'white',
  position: 'top',
  angle: -90,
  fontSize: '12',
  dy: -25
}} />
        <Bar dataKey="eur" label={{fill:'white',
  position: 'top',
  angle: -90,
  fontSize: '10',
  dy: -20,
  dx: 3
}} fill="#FF8042" legendType='triangle' unit=' UAH' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ChartBar;
