import loadable from '@loadable/component';

const LazyHome = loadable(() => import('./pages/Home'));
const LazyCounter = loadable(() => import('./pages/Counter'));
const LazyUsers = loadable(() => import('./pages/Users/Users'));
const LazyNotFound = loadable(() => import('./components/NotFound'));

export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  {
    path: '/counter',
    component: LazyCounter
  },
  {
    path: '/users',
    component: LazyUsers
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
