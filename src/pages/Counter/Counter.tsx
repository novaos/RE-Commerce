import React from 'react';
import { useTranslation } from 'react-i18next';

const Counter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="title">{t('Counter.title')}</h1>
    </>
  );
};

export default Counter;
