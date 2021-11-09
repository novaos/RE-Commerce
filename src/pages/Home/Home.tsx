import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="title">{t('Home.title')}</h1>

      <h5 className="title is-5">Adding SVGs</h5>
      <Logo />
    </>
  );
};

export default Home;
