import React from 'react';
import { useTranslation } from 'react-i18next';

const Charts = () => {
    const { t } = useTranslation();
    return (
        <div>
            <>
      <div className="notification is-info">
        <button className="delete"></button>
        <h3>Prerequisites</h3>
        <code>npm install recharts</code>
      </div>

      <h1 className="title">{t('Charts.title')}</h1>

    </>
        </div>
    );
}

export default Charts;
