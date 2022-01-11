import loadable from '@loadable/component';
import Loader from './components/Loader';
import { ActionTypes, WearTypes } from './utils/providers/GlobalContext/globalContext.enums';

// const LazyHome = loadable(() => import('./pages/Home/Home'), { fallback: <Loader /> });
// const LazyCart = loadable(() => import('./pages/Cart/Cart'), { fallback: <Loader /> });
// const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });
// const LazyCatalog = loadable(() => import('./pages/Catalog/Catalog'), { fallback: <Loader /> });
// const LazyCheckout = loadable(() => import('./pages/Checkout/Checkout'), { fallback: <Loader /> });
// const LazyProduct = loadable(() => import('./pages/Product/Product'), { fallback: <Loader /> });
// const LazyComparison = loadable(() => import('./pages/Comparison/Comparison'), { fallback: <Loader /> });

type Props = {
  page: string,
  filter?: ActionTypes,
  products?: WearTypes
}

const LazyPage = loadable(
  (props: Props) =>  import(`./pages/${props.page}/${props.page}`),
  { fallback: <Loader />, cacheKey: props => props.page }
);
const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <LazyPage page='Home' />
  },
  {
    path: '/cart',
    component: () => <LazyPage page='Cart' />
  },
  {
    path: '/catalog',
    component: () => <LazyPage page='Catalog' />
  },
  {
    path: '/checkout',
    component: () => <LazyPage page='Checkout' />
  },
  {
    path: '/women',
    component: () => <LazyPage page='Catalog' filter={ActionTypes.SHOW_ONLY_WOMEN} products={WearTypes.women} />
  },
  {
    path: '/men',
    component: () => <LazyPage page='Catalog' filter={ActionTypes.SHOW_ONLY_MEN} products={WearTypes.men} />
  },
  {
    path: '/kids',
    component: () => <LazyPage page='Catalog' filter={ActionTypes.SHOW_ONLY_KIDS} products={WearTypes.kids} />
  },
  {
    path: '/jewellery',
    component: () => <LazyPage page='Catalog' filter={ActionTypes.SHOW_ONLY_JEWELLERY} products={WearTypes.jewellery} />
  },
  {
    path: '/accessories',
    component: () => <LazyPage page='Catalog' filter={ActionTypes.SHOW_ONLY_ACCESSORIES} products={WearTypes.accessories} />
  },

  {
    path: '/product/:id',
    component: () => <LazyPage page='Product' />
  },
  {
    path: '/comparison',
    component: () => <LazyPage page='Comparison' />
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
