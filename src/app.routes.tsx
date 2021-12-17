import loadable from '@loadable/component';
import Loader from './components/Loader';

const LazyHome = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });

export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
