import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigaion.module.scss';

const Navigation: React.FC = () => {
  return (
    <nav className={`navbar is-white ${styles.navbar}`}>
      <div className="container">
        <NavLink className={`navbar-item ${styles.navbarBrandText}`} exact to="/" activeClassName={styles.selected}>
          Home
        </NavLink>
        <NavLink className="navbar-item" to="/counter" activeClassName={styles.selected}>
          Counter
        </NavLink>

        <NavLink className="navbar-item" to="/context" activeClassName={styles.selected}>
          Context
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
