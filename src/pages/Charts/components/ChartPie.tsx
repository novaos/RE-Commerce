import { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend, Cell, Sector } from 'recharts';
import { ICurrency } from '../interfaces';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8476a7', '#cd6771', '#244ee7', '#32d51e', '#f1df09', '#f10909'];

type FCProps = {
  worldCurrencyRate: ICurrency[]
}

type RSProps = {
  cx: number,
  cy: number,
  midAngle: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number,
  fill: string,
  percent: number,
  value: string,
  name: string
}

const ChartPie = ({worldCurrencyRate}: FCProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderShape = (props: RSProps) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, percent, value, name } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 5}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#fff">{`${name} ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  }
  
  const onMouseHadler = (_: MouseEvent, i: number) => {
    setActiveIndex(i)
  }

  return (
    <ResponsiveContainer width='100%' >
      <PieChart>
        <Pie 
        data={worldCurrencyRate} 
        dataKey="rate" 
        nameKey="txt" 
        cx="0%" 
        cy="50%" 
        innerRadius={100} 
        outerRadius={250}
        startAngle={90}
        endAngle={-90} 
        fill="#8884d8" 
        activeIndex={activeIndex} 
        activeShape={renderShape} 
        onMouseEnter={onMouseHadler}>
          {worldCurrencyRate.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconType='triangle' />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartPie;