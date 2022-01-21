import Layout, { Content } from 'antd/lib/layout/layout';
import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './app.routes';
import { Footer } from './components/Footer';
import { HeaderTop } from './components/HeaderTop';
import Spinner from './components/Spinner';
import Navigation from './components/Navigation/Navigation';
import GlobalContextProvider from './utils/providers/GlobalContext/GlobalContext';
import { queryClient } from './utils/react-query-client';
import ScrollToTop from './utils/ScrollToTop';

const App: React.FC = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <GlobalContextProvider>
          <Layout style={{ background: '#fff', overflow: 'hidden' }}>
            <HeaderTop />
            <Navigation />
            <Content className="app-content">
              <Switch>
                {routes.map((route, i) => (
                  <Route exact={route.exact || false} path={route.path} component={route.component} key={String(i)} />
                ))}
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </GlobalContextProvider>
      </Suspense>
    </Router>
  </QueryClientProvider>
);

export default App;
