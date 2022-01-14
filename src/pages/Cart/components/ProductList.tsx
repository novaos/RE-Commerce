import { DeleteFilled } from '@ant-design/icons';
import { Button, Input, Table } from 'antd';
import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import useProductCart from '../../../utils/hooks/useProductCart';
import { GlobalContext } from '../../../utils/providers/GlobalContext/GlobalContext';
import { ProductType } from '../../../utils/providers/GlobalContext/globalContext.types';

const QuantityInput = ({ product }: { product: ProductType }) => {
  const [quan, setQuan] = useState<number | undefined>(product.quantity);
  const { editQuantity } = useProductCart();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuan(+e.target.value);
    editQuantity(product, e.target.value);
  };

  return <Input value={quan} onChange={inputHandler} style={{ width: '50px' }} />;
};

const ProductList = () => {
  const { removeFromCart } = useProductCart();
  const { state } = useContext(GlobalContext);

  const columns: any = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
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
      key: 'color',
      align: 'center',
      colSpan: 2
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
      render: (_: string, product: ProductType) => <QuantityInput product={product} />
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
      render: (product: ProductType) => (
        <div className="total-cell">
          <span>${(product.quantity ? product.price * +product.quantity : product.price).toFixed(2)}</span>
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
