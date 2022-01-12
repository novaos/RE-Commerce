import * as React from 'react';
import './languageSwitch.scss';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { Languages } from '../../../../locales/types';
import { useContext, useMemo } from 'react';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../../../utils/providers/GlobalContext';

const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const { state, dispatch } = useContext(GlobalContext);
  const isChecked = useMemo(() => (state.language === Languages.EN ? true : false), [state.language]);
  const handleLanguageSwitch = (value: boolean) => {
    if (!value) {
      i18n.changeLanguage(Languages.GE);
    } else {
      i18n.changeLanguage(Languages.EN);
    }
    dispatch({ type: ActionTypes.LANGUAGE_CHANGE });
  };

  return (
    <div className={'language-switch-wrapper'}>
      <Switch
        checked={isChecked}
        onChange={handleLanguageSwitch}
        checkedChildren="EN"
        unCheckedChildren="GE"
        defaultChecked
      />
    </div>
  );
};

export { LanguageSwitch };
