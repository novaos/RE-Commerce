import loadable from '@loadable/component';

const LazyHome = loadable(() => import('./pages/Home'));
const LazyCounter = loadable(() => import('./pages/Counter'));
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
    path: '*',
    component: LazyNotFound
  }
];
