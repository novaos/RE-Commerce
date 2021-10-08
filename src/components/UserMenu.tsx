import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu: React.FC = () => {
  return (
    <div className="navbar-end">
      <div className={classNames('navbar-item has-dropdown is-hoverable')}>
        <NavLink className="navbar-link" to="/profile">
          User Name
        </NavLink>

        <div className="navbar-dropdown is-right">
          <NavLink className="navbar-item" to="/profile">
            Profile
          </NavLink>
          <NavLink className="navbar-item" to="/settings">
            Settings
          </NavLink>
          <NavLink className="navbar-item" to="/notifications">
            Notifications
          </NavLink>
          <hr className="navbar-divider" />
          <button className="button is-ghost" onClick={() => console.log('Log Out')}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
