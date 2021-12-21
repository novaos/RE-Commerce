import loadable from '@loadable/component';
import Loader from './components/Loader';

const LazyHome = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
const LazyCart = loadable(() => import('./pages/Cart/Cart'), { fallback: <Loader /> });
const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });
const LazyCatalog = loadable(() => import('./pages/Catalog/Catalog'), { fallback: <Loader /> });
export const routes = [
  {
    path: '/',
    exact: true,
    component: LazyHome
  },
  {
    path: '/cart',
    component: LazyCart
  },
  {
    path: '/catalog',
    component: LazyCatalog
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
