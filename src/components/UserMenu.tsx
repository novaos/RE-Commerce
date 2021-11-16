import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  handleLogOut: React.MouseEventHandler;
  user: {name: {firstname: string, lastname: string}} | null
};

const UserMenu: React.FC<Props> = ({handleLogOut, user}) => {
  return (
    <div className="navbar-end">
      <div className={classNames('navbar-item has-dropdown is-hoverable')}>
        <NavLink className="navbar-link" to="/profile">
          {user ? `${user.name.firstname.toUpperCase()} ${user.name.lastname.toUpperCase()}` : 'User Name'}
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
          <button className="button is-ghost" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
