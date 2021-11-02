import React from 'react';
import { useTranslation } from 'react-i18next';

import BasicForm from './components/BasicForm';

const Formik: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="title">{t('Formik.title')}</h1>

      <h4 className="title is-4">Basic form</h4>
      <BasicForm />
    </>
  );
};

export default Formik;
