import { request } from '../../../utils/request';
import { ICurrency } from '../interfaces';

export const getCurrencyRate = async () => {
    let currencies = [];
    for(let i = 10; i < 22; i++) {
      const result = await request(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json&date=20${i}1120`) as ICurrency[];

      currencies.push(...result)
    }
    return {
        annualCurrencyRate: transformData(currencies),
        worldCurrencyRate: currencies.slice(-60, -40).filter(item => item.rate > 1.5)
    };
  }

  const transformData = (arr: ICurrency[]) => {
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