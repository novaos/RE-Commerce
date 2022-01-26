import { DeleteFilled } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProductCart from '../../../utils/hooks/useProductCart';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';
import { ProductType } from '../../../utils/providers/GlobalContext/globalContext.types';

interface IProductInCart extends ProductType {
  quantity: number
}

const QuantityInput = ({ quantity, id, productToShow, setProductToShow }: { quantity: number, id: string, productToShow: IProductInCart[], setProductToShow: any}) => {
  const [quan, setQuan] = useState(quantity)

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuan(+e.target.value);
    const arrToShow = productToShow.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: +e.target.value
        }
      }
      return item;
    })
    setProductToShow(arrToShow)
  };

  return <Input value={quan} onChange={inputHandler} style={{ width: '50px' }} />;
};

export default function ProductList() {
  const { removeFromCart } = useProductCart();
  const { state } = useContext(GlobalContext);
  const [productToShow, setProductToShow] = useState(getProd());

  function getProd() {
    const newArr: IProductInCart[] = [];

    state.productsInCart.forEach(product => {
      if(newArr.find(item => item.id === product.id)) {

        newArr.map(item => {
          if(item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity++
            }
          }
          return item
        })
      } else {
        newArr.push({...product, quantity: 1})
      }
    });

    return newArr;
  }

  const columns: any = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (product: string) => (
        <div className="product-cell">
          <img alt="example" width={80} height={100} src={'http://placeimg.com/640/480'} />
          <p>{product}</p>
        </div>
      )
    },
    {
      title: 'Color & Size',
      key: 'color',
      align: 'center',
      colSpan: 2,
      render: (product: any) => (
        <>
          <span>{product.options[0].color}</span>, <span>{product.options[0].sizes[0]}</span>
        </>
      )
    },
    {
      title: 'Color & Size',
      dataIndex: 'size',
      key: 'size',
      align: 'center',
      colSpan: 0
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      render: ( quantity: number, product: IProductInCart) => (
        <QuantityInput 
          quantity={quantity} 
          id={product.id} 
          productToShow={productToShow} 
          setProductToShow={setProductToShow} 
        />
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (price: number) => <span>${price}</span>
    },
    {
      title: 'Total',
      align: 'center',
      key: 'total',
      render: (product: IProductInCart) => (
        <div className="total-cell">
          <span>${(product.price * product.quantity).toFixed(2)}</span>
          <DeleteFilled onClick={() => removeFromCart(product)} />
        </div>
      )
    }
  ];
  return (
    <Table
      bordered
      dataSource={productToShow}
      columns={columns}
      footer={() => (
        <div className="cart-buttons">
          <Button className="cart-buttons-update">update cart</Button>
          <NavLink to="/catalog">
            <Button type="primary" className="cart-buttons-continue">
              continue shopping
            </Button>
          </NavLink>
        </div>
      )}
    />
  );
}
