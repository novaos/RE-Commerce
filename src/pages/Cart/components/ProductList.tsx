import { DeleteFilled } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../../utils/providers/GlobalContext/globalContext.enums';
import { ProductType } from '../../../utils/providers/GlobalContext/globalContext.types';

const QuantityInput = ({ product }: { product: ProductType }) => {
  const { dispatch } = useContext(GlobalContext);
  const [quan, setQuan] = useState<number | undefined>(product.quantity);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuan(+e.target.value);
    dispatch({ type: ActionTypes.EDIT_QUANTITY, payload: { value: e.target.value, id: product.id } });
  };

  return <Input value={quan} onChange={inputHandler} style={{ width: '50px' }} />;
};

const ProductList = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const columns: any = [
    {
      title: 'Product',
      dataIndex: 'name',
      render: (product: string, prodInfo: ProductType) => (
        <div className="product-cell">
          <img alt="example" width={80} height={100} src={prodInfo.photo} />
          <p>{product}</p>
        </div>
      )
    },
    {
      title: 'Color & Size',
      dataIndex: 'color',
      align: 'center',
      colSpan: 2
    },
    {
      title: 'Color & Size',
      dataIndex: 'size',
      align: 'center',
      colSpan: 0
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      align: 'center',
      render: (_: string, product: ProductType) => <QuantityInput product={product} />
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
      render: (price: number) => <span>${price}</span>
    },
    {
      title: 'Total',
      align: 'center',
      render: (product: ProductType) => (
        <div className="total-cell">
          <span>${(product.quantity ? +product.price * +product.quantity : +product.price).toFixed(2)}</span>
          <DeleteFilled onClick={() => dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: product.id })} />
        </div>
      )
    }
  ];
  return (
    <Table
      bordered
      dataSource={state.productsInCart}
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
};

export default ProductList;
