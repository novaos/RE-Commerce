// @ts-ignore
import * as React from 'react';
import { GoGitCompare } from 'react-icons/go';
import { IoIosCart } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { ActionTypes, ProductType } from '../../utils/providers/GlobalContext';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { LocalStorageApi, LocalStorageKeys } from '../../utils/types';
import './productCard2.scss';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
 return (
  <ul className="flex">
   {[1, 2, 3, 4, 5].map(item =>
    item <= rating ? (
     <li>
      <svg
       aria-hidden="true"
       focusable="false"
       data-prefix="fas"
       data-icon="star"
       className="w-4 text-yellow-500 mr-1"
       role="img"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 576 512">
       <path
        fill="currentColor"
        d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
      </svg>
     </li>
    ) : (
     <li key={item}>
      <svg
       aria-hidden="true"
       focusable="false"
       data-prefix="far"
       data-icon="star"
       className="w-4 text-yellow-500 mr-1"
       role="img"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 576 512">
       <path
        fill="currentColor"
        d={
         'M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
        }></path>
      </svg>
     </li>
    )
   )}
  </ul>
 );
};

export default function ProductCard2({ product }: { product: ProductType }) {
 const { state, dispatch } = React.useContext(GlobalContext);

 const addComparison = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.stopPropagation();
  const storageData = LocalStorageApi.get(LocalStorageKeys.comparison);
  const hasProduct = storageData
   ? JSON.parse(storageData)?.some((item: ProductType) => {
      return item.id === product.id;
     })
   : false;

  if (!hasProduct) {
   dispatch({ type: ActionTypes.ADD_COMPARISON_PRODUCT, payload: product });
  }
 };

 const hasInComparison = state.comparisonProducts.some(item => item.id === product.id);
 const history = useHistory();
 return (
  <div
   onClick={() => history.push(`/product/${product.id}`)}
   className={
    'relative group w-60 h-72 overflow-hidden bg-slate-100 rounded-md hover:shadow-lg duration-150 hover:text-slate-900'
   }>
   <div className="card-icon">
    <IoIosCart className="text-xl text-white" />
   </div>
   <div onClick={addComparison} className={`card-icon top-14 ${hasInComparison ? 'bg:silver' : ''}`}>
    <GoGitCompare className="text-xl text-white" />
   </div>
   <div
    style={{
     backgroundImage: `url(${product.options[0].photosUrl[0]})`
    }}
    className="bg-cover bg-centers w-auto h-2/3"
   />
   <div className="product-info p-2">
    <p className="text-sm font-medium">{product.name}</p>
    <p className="text-md my-2 text-green-600">${product.price}</p>
    <Rating rating={product.rating} />
   </div>
  </div>
 );
}
