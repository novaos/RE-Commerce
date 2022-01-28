import * as React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import useProductCart from '../../utils/hooks/useProductCart';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import { ProductType } from '../../utils/providers/GlobalContext/globalContext.types';
import { LocalStorageApi, LocalStorageKeys } from '../../utils/types';
import { ProductHeader, ProductTabs, RelatedProducts } from './components';
import './product.scss';

const Product: React.FC = () => {
 const { state, dispatch } = React.useContext(GlobalContext);
 const { id } = useParams<{ id: string }>();
 const { addToCart } = useProductCart();
 const selectedProduct = state.products.find(item => item.id === id) as ProductType;

 const handleAddProductToCart = (option: { size: string; color: string; count: number }) => {
  if (selectedProduct) {
   addToCart(selectedProduct, option);
  }
 };

 const handleAddComparison = () => {
  const storageData = LocalStorageApi.get(LocalStorageKeys.comparison);
  const hasProduct = storageData
   ? JSON.parse(storageData)?.some((item: ProductType) => {
      return item.id === id;
     })
   : false;

  if (!hasProduct && selectedProduct) {
   dispatch({ type: ActionTypes.ADD_COMPARISON_PRODUCT, payload: selectedProduct });
  }
 };

 if (!selectedProduct) return <Loader />;

 return (
  <>
   <div className="inner-container product-wrapper">
    <ProductHeader
     id={selectedProduct.id}
     handleAddComparison={handleAddComparison}
     handleAddProductToCart={handleAddProductToCart}
     properties={selectedProduct.properties}
     productOptions={selectedProduct.options}
     name={selectedProduct.name}
     price={selectedProduct.price}
     rating={selectedProduct.rating}
     description={selectedProduct.description}
    />
    <ProductTabs about={selectedProduct.about} reviews={selectedProduct.reviews} />
    <RelatedProducts />
   </div>
  </>
 );
};

export default Product;
