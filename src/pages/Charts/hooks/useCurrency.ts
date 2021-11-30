import { useState, useEffect } from 'react';
import { getCurrencyRate } from '../services/currencyService';
import { ICurrency, IAnnualRate } from '../interfaces';

const useCurrency = () => {
  const [annualCurrencyRate, setAnnualCurrencyRate] = useState<IAnnualRate[]>([]);
  const [worldCurrencyRate, setWorldCurrencyRate] = useState<ICurrency[]>([]);

  useEffect(() => {
    (async () => {
        const data = await getCurrencyRate();

        setAnnualCurrencyRate(data.annualCurrencyRate);
        setWorldCurrencyRate(data.worldCurrencyRate);
    })();
  }, [])

  return {annualCurrencyRate, worldCurrencyRate};
}

export default useCurrency;
