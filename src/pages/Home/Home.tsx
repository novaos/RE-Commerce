import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import randomNumber from '../../utils/randomNumber';
import randomString from '../../utils/randomString';
import { GlobalContext } from '../../utils/providers/GlobalContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <h1 className="title">{t('Home.title')}</h1>
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-primary">
              <p className="title">Global Context First Property change</p>
              <button
                className="button is-link"
                onClick={() => dispatch({ type: 'UPDATE_PROPERTY_FIRST', payload: randomNumber(0, 30) })}>
                dispatch Change
              </button>
            </article>
            <article className="tile is-child notification is-warning">
              <p className="title">Global Context Second Property change</p>
              <button
                className="button is-link"
                onClick={() => dispatch({ type: 'UPDATE_PROPERTY_SECOND', payload: randomString(10) })}>
                dispatch Change
              </button>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <p className="title">Global Context Properties</p>

              <p className="subtitle">First Global Context Property</p>
              <progress className="progress is-danger" value={state.property_first} max="30">
                {state.property_first}%
              </progress>

              <p className="subtitle">Second Global Context Property</p>
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-danger">{state.property_second}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
