import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Loader from './components/Loader';
import { routes } from './app.routes';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="App">
          <Navigation />

          <div className="container">
            <Switch>
              {routes.map((route, i) => (
                <Route exact={route.exact || false} path={route.path} component={route.component} key={i} />
              ))}
            </Switch>
          </div>
        </div>
      </Suspense>
    </Router>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
