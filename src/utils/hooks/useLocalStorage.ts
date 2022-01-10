import { useContext, useEffect } from "react";
import { ActionTypes, ProductType } from "../providers/GlobalContext";
import { GlobalContext } from "../providers/GlobalContext/GlobalContext";

const useLocalStorage = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const actualList = (): ProductType[] => {
    const data = localStorage.getItem('productsInCart');

    return data !== null ? JSON.parse( data ) : [];
  }

  useEffect(() => {
    state.productsInCart ? localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart)) : JSON.stringify([])
  },[state.productsInCart])



  const addToCart = (product: ProductType) => {
    let newArr = [];

    if (actualList().find(item => item.id === product.id)) {
      newArr = actualList().map(item =>
        item.id === product.id
          ? {
              ...product,
              quantity: item.quantity ? ++item.quantity : 1
            }
          : item
      );
    } else {
      newArr = [...actualList(), { ...product, quantity: 1 }];
    }

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr });
  }

  const removeFromCart = (product: ProductType) => {
    const newArr = actualList().filter((item: ProductType) => item.id !== product.id);

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr })
  }

  const editQuantity = (product: ProductType, value: string) => {
    const newArr = actualList().map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: Number(value)
        };
      }
      return item;
    });

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr })
  };

  return { addToCart, removeFromCart, editQuantity };
}

export default useLocalStorage;