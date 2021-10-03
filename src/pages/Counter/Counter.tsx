import React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

const Counter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="title">{t(messages.counterTitle())}</h1>
    </>
  );
};

export default Counter;
