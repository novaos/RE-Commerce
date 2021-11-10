import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { hookFormRoutes } from './hookForm.routes';

const HookForm = (props) => {
  const { t } = useTranslation();
  let { url, path } = useRouteMatch();

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'is-active' : '';
  };

  return (
    <>
      <div className="notification is-info">
        <button className="delete"></button>
        <h3>Prerequisites</h3>
        <code>npm install react-hook-form yup @hookform/resolvers</code>
      </div>

      <h1 className="title">{t('HookForm.title')}</h1>

      <div className="tile is-vertical is-12">
        <div className="tabs">
          <ul className="column is-full">
            <li className={getNavLinkClass(`${url}/basic`)}>
              <NavLink to={`${url}/basic`} activeClassName="is-active">
                Basic Form
              </NavLink>
            </li>
            {/* <li className={getNavLinkClass(`${url}/custom-validation`)}>
              <NavLink to={`${url}/custom-validation`}>Custom Validation Form</NavLink>
            </li> */}
            {/* <li className={getNavLinkClass(`${url}/dynamic`)}>
              <NavLink to={`${url}/dynamic`}>Dynamic Form</NavLink>
            </li> */}
            <li className={getNavLinkClass(`${url}/reusable`)}>
              <NavLink to={`${url}/reusable`}>Reusable Form</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <section className="tile is-child notification is-white">
        <Switch>
          {hookFormRoutes.map((route, i) => (
              <Route exact={route.exact || false} path={path + route.path} component={route.component} key={i} />
          ))}
        </Switch>
      </section>
    </>
  );
};

export default HookForm;
