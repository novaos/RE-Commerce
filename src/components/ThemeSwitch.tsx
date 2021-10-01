import React from 'react';
import { ThemeEnum } from '../enums';

type Props = {
  theme: ThemeEnum;
  setTheme: React.Dispatch<React.SetStateAction<ThemeEnum>>;
};

const ThemeSwitch: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <div className="column is-flex is-justify-content-flex-end is-align-items-center">
      <div className="field">
        <input
          id="themeSwitch"
          type="checkbox"
          name="themeSwitch"
          className="switch is-rounded is-outlined"
          defaultChecked
          onChange={() => setTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT)}
        />
        <label htmlFor="themeSwitch" className="is-capitalized">
          {theme}
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
