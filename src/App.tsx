import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './app.routes';
import Loader from './components/Loader';
import GlobalContext from './utils/providers/GlobalContext';
import { queryClient } from './utils/react-query-client';
import Navigation from './components/Navigation/Navigation';

const App: React.FC = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <Suspense fallback={<Loader />}>
        <GlobalContext>
          <Navigation />
          <div className="App">
            <div className="container">
              <Switch>
                {routes.map((route, i) => (
                  <Route exact={route.exact || false} path={route.path} component={route.component} key={i} />
                ))}
              </Switch>
            </div>
          </div>
        </GlobalContext>
      </Suspense>
    </Router>
  </QueryClientProvider>
);

export default App;
