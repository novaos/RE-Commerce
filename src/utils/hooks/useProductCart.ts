import { useContext, useEffect } from "react";
import { ActionTypes, ProductType } from "../providers/GlobalContext";
import { GlobalContext } from "../providers/GlobalContext/GlobalContext";

export default function useProductCart() {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
  },[state.productsInCart])

  const addToCart = (product: ProductType) => {
    const newArr = [...state.productsInCart, product];
    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr });
  }

  const removeFromCart = (product: ProductType) => {
    const newArr = state.productsInCart.filter((item: ProductType) => item.id !== product.id);

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr })
  }

  // const editQuantity = (product: ProductType, value: string) => {
  //   const newArr = state.productsInCart.map(item => {
  //     if (item.id === product.id) {
  //       return {
  //         ...item,
  //         quantity: Number(value)
  //       };
  //     }
  //     return item;
  //   });

  //   dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr })
  // };

  return { addToCart, removeFromCart };
}