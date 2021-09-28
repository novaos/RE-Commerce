import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ThemeEnum } from '../../enums';
import classNames from 'classnames';

const Navigation: React.FC = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);

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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
