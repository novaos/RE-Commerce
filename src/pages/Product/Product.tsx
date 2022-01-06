import * as React from 'react';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../../business-logic';
import Loader from '../../components/Loader';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import { ProductType } from '../../utils/providers/GlobalContext/globalContext.types';
import { LocalStorageKeys } from '../../utils/types';
import { ProductHeader, ProductTabs, RelatedProducts } from './components';
import './product.scss';
const Product: React.FC = () => {
  const { state, dispatch } = React.useContext(GlobalContext);
  const [sizeOptions, setSizeOptions] = React.useState<{ label: string; value: string }[]>([]);
  const [colorOptions, setColorOptions] = React.useState<{ label: string; value: string }[]>([]);
  const { id } = useParams<{ id: string }>();
  const { selectedProduct } = state;

  React.useEffect(() => {
    const callback = (product: ProductType) => dispatch({ type: ActionTypes.GET_SELECTED_PRODUCT, payload: product });
    getSelectedProduct(id, callback);
  }, [dispatch, id]);

  React.useEffect(() => {
    setSizeOptions([
      {
        label: selectedProduct?.size ?? '',
        value: selectedProduct?.size ?? ''
      }
    ]);
    setColorOptions([
      {
        label: selectedProduct?.color ?? '',
        value: selectedProduct?.color ?? ''
      }
    ]);
  }, [id, selectedProduct?.size, selectedProduct?.color]);

  const onAdd = useCallback(() => {
    if (selectedProduct) {
      dispatch({ type: ActionTypes.ADD_TO_CART, payload: selectedProduct });
    }
  }, [selectedProduct]);

  const addComparison = () => {
    const storageData = localStorage.getItem(LocalStorageKeys.comparison);
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
      {selectedProduct ? (
        <div className="inner-container product-wrapper">
          <ProductHeader
            id={selectedProduct.id}
            addComparison={addComparison}
            onAdd={onAdd}
            photo={selectedProduct.photo}
            name={selectedProduct.name}
            price={selectedProduct.price}
            rating={selectedProduct.rating}
            description={selectedProduct.description}
            sizeOptions={sizeOptions}
            colorOptions={colorOptions}
          />

          <ProductTabs about={selectedProduct.about} reviews={selectedProduct.reviews} />
          <RelatedProducts />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Product;
