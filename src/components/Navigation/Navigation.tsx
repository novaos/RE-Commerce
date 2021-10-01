import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ThemeEnum } from '../../enums';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';

const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);
  const { i18n } = useTranslation();

  const handleLanguageChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      i18n.changeLanguage(event.target.value);
    },
    [i18n]
  );

  return (
    <nav className={classNames('navbar', theme === ThemeEnum.LIGHT ? 'is-light' : 'is-dark', styles.navbar)}>
      <div className="container">
        <div className={`columns ${styles.fullWidth}`}>
          <div className="column is-flex is-four-fifths">
            <NavLink
              className={classNames(
                'navbar-item',
                theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white',
                styles.navbarBrandText
              )}
              exact
              to="/"
              activeClassName={styles.selected}>
              Home
            </NavLink>
            <NavLink
              className={classNames('navbar-item', theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white')}
              to="/counter"
              activeClassName={styles.selected}>
              Counter
            </NavLink>
            <NavLink
              className={classNames('navbar-item', theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white')}
              to="/users"
              activeClassName={styles.selected}>
              Users
            </NavLink>
            <NavLink
              className={classNames('navbar-item', theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white')}
              to="/query"
              activeClassName={styles.selected}>
              Query
            </NavLink>
          </div>

          <LanguageSwitch i18n={i18n} handleLanguageChange={handleLanguageChange} />
          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
