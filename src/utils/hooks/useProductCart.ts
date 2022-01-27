import { useContext, useEffect } from "react";
import { ActionTypes, IProductInCart, ProductType } from "../providers/GlobalContext";
import { GlobalContext } from "../providers/GlobalContext/GlobalContext";
import { message } from "antd";

export default function useProductCart() {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
  },[state.productsInCart])

  const addToCart = (product: ProductType, option: {size: string, color: string, count: number}) => {
    let newArr: IProductInCart[] = [];

    if(state.productsInCart.find(item => item.id === product.id && JSON.stringify(item.option) === JSON.stringify(option))) {
      console.log('here')
      newArr = state.productsInCart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            quantity: ++item.quantity
          }
        }
        return item;
      })
    } else {
      newArr = [...state.productsInCart, {...product, quantity: 1,  option: option}]
    }

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr });
    message.success({
      content: 'Item has added!',
      duration: 2
    })
  }


  const editQuantity = (value: number, product: IProductInCart) => {
    const newArr = state.productsInCart.map(item => {
      if(JSON.stringify(item) === JSON.stringify(product)) {
        return {
          ...item,
          quantity: value
        }
      }
      return item;
    })

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr });
  }

  const removeFromCart = (product: IProductInCart) => {
    const newArr = state.productsInCart.filter((item: IProductInCart) => JSON.stringify(item) !== JSON.stringify(product));

    dispatch({ type: ActionTypes.UPDATE_CART, payload: newArr })
  }

  return { addToCart, editQuantity, removeFromCart };
}