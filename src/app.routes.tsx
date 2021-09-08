import loadable from '@loadable/component';

const LazyHome = loadable(() => import('./components/NotFound'));
// const LazyCounter = loadable(() => import('./containers/counter/counter'));
// const LazyContext = loadable(() => import('./containers/context/context'));
const LazyNotFound = loadable(() => import('./components/NotFound'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  // {
  //   path: '/counter',
  //   component: LazyCounter
  // },
  // {
  //   path: '/context',
  //   component: LazyContext
  // },
  {
    path: '*',
    component: LazyNotFound
  }
];
