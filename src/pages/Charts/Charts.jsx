import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, ResponsiveContainer, 
  Legend, CartesianGrid, Cell, Sector, AreaChart, Area } from 'recharts';


const Charts = () => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { t } = useTranslation();
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8476a7', '#cd6771', '#244ee7', '#32d51e', '#f1df09', '#f10909']; // #132737

  useEffect(() => {
    getCurrencyRate();
    //eslint-disable-next-line
  }, [])
 

  async function getCurrencyRate() {
    let arr = [];
    for(let i = 10; i < 22; i++) {
      const result = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&date=20${i}1120`)
      .then(res => res.json());

      arr.push(...result)
    }
    setAllData(arr.slice(-60, -40).filter(item => item.rate > 1.5))
    setData(transformData(arr));
  }

  function transformData(arr) {
    const usd = arr.filter(item => item.cc === 'USD').map(item => {
      return {
        ...item,
        exchangedate: item.exchangedate.slice(6)
      }
    });

    const eur = arr.filter(item => item.cc === 'EUR').map(item => {
      return {
        ...item,
        exchangedate: item.exchangedate.slice(6)
      }
    });

    const transformedData = [];

    for(let i = 0; i < usd.length; i++) {
      transformedData[i] = {
        exchangedate: usd[i].exchangedate,
        rate: 'rate',
        usd: usd[i].rate,
        eur: eur[i].rate
      }
    }

    return transformedData;
  }

  function renderShape(props) {
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
  
  function onMouseHadler(_, i) {
    setActiveIndex(i)
  }


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
        <div className="tile is-child box has-background-dark">
          <ResponsiveContainer minHeight={300}>
            <BarChart width="100%"  data={data} barCategoryGap='15%' >
              <CartesianGrid strokeDasharray="9 9" vertical='' />
              <XAxis  dataKey="exchangedate" />
              <YAxis tickCount={6} axisLine={{stroke: '#fff'}}  />
              <Tooltip />
              <Legend />
              <Bar dataKey="usd" fill="#00C49F" legendType='triangle' unit=' UAH' />
              <Bar dataKey="eur" fill="#FF8042" legendType='triangle' unit=' UAH' />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="tile is-child box has-background-dark">
          <ResponsiveContainer minHeight={300}>
            <AreaChart width='100%' data={data}
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
        </div>
      </div>

      <div className="tile is-parent is-6">
        <div className='tile is-child box p-0 has-background-dark'>
          <ResponsiveContainer width='100%' >
            <PieChart>
              <Pie 
              data={allData} 
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
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend iconType='triangle' />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>

    
  </>
  );
}

export default Charts;
