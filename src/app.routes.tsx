import loadable from '@loadable/component';
import Loader from './components/Loader';
import { ActionTypes, WearTypes } from './utils/providers/GlobalContext';

const LazyHome = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
const LazyCart = loadable(() => import('./pages/Cart/Cart'), { fallback: <Loader /> });
const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });
const LazyCatalog = loadable(() => import('./pages/Catalog/Catalog'), { fallback: <Loader /> });
const LazyCheckout = loadable(() => import('./pages/Checkout/Checkout'), { fallback: <Loader /> });
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
    component: () => <LazyCatalog />
  },
  {
    path: '/checkout',
    component: () => <LazyCheckout />
  },
  {
    path: '/women',
    component: () => <LazyCatalog filter={ActionTypes.SHOW_ONLY_WOMEN} products={WearTypes.women} />
  },
  {
    path: '/men',
    component: () => <LazyCatalog filter={ActionTypes.SHOW_ONLY_MEN} products={WearTypes.men} />
  },
  {
    path: '/kids',
    component: () => <LazyCatalog filter={ActionTypes.SHOW_ONLY_KIDS} products={WearTypes.kids} />
  },
  {
    path: '/jewellery',
    component: () => <LazyCatalog filter={ActionTypes.SHOW_ONLY_JEWELLERY} products={WearTypes.jewellery} />
  },
  {
    path: '/accessories',
    component: () => <LazyCatalog filter={ActionTypes.SHOW_ONLY_ACCESSORIES} products={WearTypes.accessories} />
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
