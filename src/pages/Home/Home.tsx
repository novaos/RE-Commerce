import React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="title">{t(messages.homeTitle())}</h1>
    </>
  );
};

export default Home;
