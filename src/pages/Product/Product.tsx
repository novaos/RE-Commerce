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
  const [sizeOptions, setSizeOptions] = React.useState<{ label: string; value: string }[]>([]);
  const [colorOptions, setColorOptions] = React.useState<{ label: string; value: string }[]>([]);
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useProductCart();
  const selectedProduct = state.products.find(item => item.id === id);

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

  const onAdd = () => {
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  }

  const addComparison = () => {
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
    </>
  );
};

export default Product;
