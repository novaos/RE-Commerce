import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getSelectedProduct } from '../../business-logic';
import Loader from '../../components/Loader';
import { ActionTypes, GlobalContext, ProductType } from '../../utils/providers/GlobalContext';
import { ProductHeader, ProductTabs, RelatedProducts } from './components';
import './product.scss';
// const options: { value: string; label: string }[] = [
//   {
//     label: 'label',
//     value: 'value'
//   },
//   {
//     label: 'label',
//     value: 'value'
//   },
//   {
//     label: 'label',
//     value: 'value'
//   }
// ];

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

  if (!selectedProduct) return <Loader />;

  return (
    <>
      {selectedProduct ? (
        <div className="inner-container product-wrapper">
          <ProductHeader
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
