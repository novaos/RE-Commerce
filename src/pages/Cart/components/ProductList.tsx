import { DeleteFilled } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProductCart from '../../../utils/hooks/useProductCart';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';
import { IProductInCart } from '../../../utils/providers/GlobalContext/globalContext.types';

const QuantityInput = ({ quantity, product }: { quantity: number, product: IProductInCart}) => {
  const [quan, setQuan] = useState(quantity);
  const { editQuantity } = useProductCart();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuan(+e.target.value);
    editQuantity(+e.target.value, product)
  };

  return <Input value={quan} onChange={inputHandler} style={{ width: '50px' }} />;
};

export default function ProductList() {
  const { removeFromCart } = useProductCart();
  const { state } = useContext(GlobalContext);

  const columns: any = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => (
        <div className="product-cell">
          <img alt="example" width={80} height={100} src={'http://placeimg.com/640/480'} />
          <p>{name}</p>
        </div>
      )
    },
    {
      title: 'Color & Size',
      dataIndex: ['option', 'color'],
      key: 'color',
      align: 'center',
      colSpan: 2,
      render: (color: string) => <span>{color}</span>
    },
    {
      title: 'Color & Size',
      dataIndex: ['option', 'size'],
      key: 'size',
      align: 'center',
      colSpan: 0,
      render: (size: string) => <span>{size}</span>
    },
    {
      title: 'Quantity',
      dataIndex: ['option', 'count'],
      key: 'quantity',
      align: 'center',
      render: ( quantity: number, product: IProductInCart) => <QuantityInput quantity={quantity} product={product}/>
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
          <span>${(product.price * product.option.count).toFixed(2)}</span>
          <DeleteFilled onClick={() => removeFromCart(product)} />
        </div>
      )
    }
  ];
  return (
    <Table
      bordered
      dataSource={state.productsInCart}
      columns={columns}
      pagination={false}
      rowKey={product => JSON.stringify({...product, option: {...product.option, count:0}})}
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
