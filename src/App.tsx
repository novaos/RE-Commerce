import React, { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './app.routes';
import Loader from './components/Loader';
import GlobalContext from './utils/providers/GlobalContext';
import { queryClient } from './utils/react-query-client';
import Navigation from './components/Navigation/Navigation';
import Layout, { Content } from 'antd/lib/layout/layout';
import { HeaderTop } from './components/HeaderTop';
import { Footer } from './components/Footer';
import ScrollToTop from './utils/ScrollToTop';

const App: React.FC = () => (
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <GlobalContext>
          <Layout style={{ background: '#fff', overflow: 'hidden' }}>
            <HeaderTop />
            <Navigation />
            <Content className="app-content">
              <Switch>
                {routes.map((route, i) => (
                  <Route exact={route.exact || false} path={route.path} component={route.component} key={i} />
                ))}
              </Switch>
            </Content>
            <Footer />
          </Layout>
        </GlobalContext>
      </Suspense>
    </Router>
  </QueryClientProvider>
);

export default App;
