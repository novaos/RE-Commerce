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

    if(state.productsInCart.find(item => {
      return item.id === product.id &&
              item.option.color === option.color &&
              item.option.size === option.size
    })) {
      newArr = state.productsInCart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            option: {
            ...item.option,
            count: ++item.option.count
          }
          }
        }
        return item;
      })
    } else {
      newArr = [...state.productsInCart, {...product, option: option}]
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
          option: {
            ...item.option,
            count: value
          }
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