import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { routes } from './app.routes';

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Navigation />

        <div className="container">
          <Switch>
            {routes.map((route: any, i) => (
              <Route exact={route.exact || false} path={route.path} component={route.component} key={i} />
            ))}
          </Switch>
        </div>
      </div>
    </Suspense>
  </Router>
);

export default App;
