import React from 'react';
import { ThemeEnum } from '../enums';

type Props = {
  theme: ThemeEnum;
  handleThemeChange: React.ChangeEventHandler<HTMLInputElement>;
};

const ThemeSwitch: React.FC<Props> = ({ theme, handleThemeChange }) => {
  return (
    <div className="column is-flex is-justify-content-flex-end is-align-items-center">
      <div className="field">
        <input
          id="themeSwitch"
          type="checkbox"
          name="themeSwitch"
          className="switch is-rounded is-outlined"
          checked={theme === ThemeEnum.LIGHT}
          onChange={handleThemeChange}
        />
        <label htmlFor="themeSwitch" className="is-capitalized">
          {theme}
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
