import loadable from '@loadable/component';
import Loader from './components/Loader';

type Props = {
  page: 'Home' | 'Cart' | 'Catalog' | 'Checkout' | 'Comparison' | 'Product';
};

const LazyPage = loadable((props: Props) => import(`./pages/${props.page}/${props.page}`), {
  fallback: <Loader />,
  cacheKey: props => props.page
});

const LazyNotFound = loadable(() => import('./components/NotFound'), { fallback: <Loader /> });

export const routes = [
  {
    path: '/',
    exact: true,
    component: () => <LazyPage page="Home" />
  },
  {
    path: '/cart',
    component: () => <LazyPage page="Cart" />
  },
  {
    path: '/catalog/:wearType?',
    component: () => <LazyPage page="Catalog" />
  },
  {
    path: '/checkout',
    component: () => <LazyPage page="Checkout" />
  },
  {
    path: '/product/:id',
    component: () => <LazyPage page="Product" />
  },
  {
    path: '/comparison',
    component: () => <LazyPage page="Comparison" />
  },
  {
    path: '*',
    component: LazyNotFound
  }
];
