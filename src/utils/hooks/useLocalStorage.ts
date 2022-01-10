import { useEffect, useState } from "react";
import { ProductType } from "../providers/GlobalContext";

const useLocalStorage = () => {
  const actualList = (): ProductType[] => {
    const data = localStorage.getItem('productsInCart');

    return data !== null ? JSON.parse( data ) : [];
  }

  const [productsInCart, setProductsArr] = useState<ProductType[]>(actualList());
  console.log('productsInCart', productsInCart)

  useEffect(() => {
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
  },[productsInCart])



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

    setProductsArr(newArr)
  }

  const removeFromCart = (product: ProductType) => {
    const newArr = actualList().filter((item: ProductType) => item.id !== product.id);

    setProductsArr(newArr)
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

    setProductsArr(newArr)
  };

  return { productsInCart, actualList, addToCart, removeFromCart, editQuantity };
}

export default useLocalStorage;