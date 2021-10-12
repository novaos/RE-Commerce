import React from 'react';
import { LanguageEnum } from '../enums';

type Props = {
  language: LanguageEnum;
  handleLanguageChange: React.ChangeEventHandler<HTMLInputElement>;
};

const LanguageSwitch: React.FC<Props> = ({ language, handleLanguageChange }) => {
  return (
    <div className="column is-flex is-align-items-center">
      <label className="radio">
        <input
          type="radio"
          value="en"
          name="language"
          onChange={handleLanguageChange}
          checked={language === LanguageEnum.EN}
        />
        En
      </label>
      <label className="radio">
        <input
          type="radio"
          value="de"
          name="language"
          onChange={handleLanguageChange}
          checked={language === LanguageEnum.DE}
        />
        De
      </label>
    </div>
  );
};

export default LanguageSwitch;
