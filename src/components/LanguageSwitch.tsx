import { i18n } from 'i18next';
import React from 'react';

type Props = {
  i18n: i18n;
  handleLanguageChange: React.ChangeEventHandler<HTMLInputElement>;
};

const LanguageSwitch: React.FC<Props> = ({ i18n, handleLanguageChange }) => {
  return (
    <div className="column is-flex is-align-items-center">
      <label className="radio">
        <input
          type="radio"
          value="en"
          name="language"
          onChange={handleLanguageChange}
          checked={i18n.language === 'en'}
        />
        En
      </label>
      <label className="radio">
        <input
          type="radio"
          value="de"
          name="language"
          onChange={handleLanguageChange}
          checked={i18n.language === 'de'}
        />
        De
      </label>
    </div>
  );
};

export default LanguageSwitch;
