import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from './Navigation.module.scss';

import { useStickyState } from '../../utils/hooks';
import { LanguageEnum, LocalStorageKeysEnum, ThemeEnum } from '../../enums';
import ThemeSwitch from '../ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import UserMenu from '../UserMenu';
import { GlobalContext } from '../../utils/providers/GlobalContext';

const Navigation: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [theme, setTheme] = useStickyState(ThemeEnum.LIGHT, LocalStorageKeysEnum.THEME);
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem(LocalStorageKeysEnum.LANGUAGE, JSON.stringify(i18n.language));
    dispatch({ type: 'SET_LANGUAGE', payload: i18n.language as LanguageEnum });
  };

  const handleThemeChange = (_: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT);
  };

  return (
    <nav
      role="navigation"
      aria-label="dropdown navigation"
      className={classNames(
        'navbar is-transparent',
        theme === ThemeEnum.LIGHT ? 'is-light' : 'is-dark',
        styles.navbar
      )}>
      <div className="container">
        <div className={`columns m-0 ${styles.fullWidth}`}>
          <div className="column is-flex is-two-thirds">
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
              to="/context"
              activeClassName={styles.selected}>
              Context
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
            <NavLink
              className={classNames('navbar-item', theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white')}
              to="/formik"
              activeClassName={styles.selected}>
              Formik
            </NavLink>
            <NavLink
              className={classNames('navbar-item', theme === ThemeEnum.LIGHT ? 'has-text-black' : 'has-text-white')}
              to="/hook-form"
              activeClassName={styles.selected}>
              HookForm
            </NavLink>
          </div>

          <LanguageSwitch language={state.language} handleLanguageChange={handleLanguageChange} />
          <ThemeSwitch theme={theme} handleThemeChange={handleThemeChange} />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
