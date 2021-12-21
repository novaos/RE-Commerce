import { Button, Input, Table } from 'antd';

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    
    render: product => (
      <div className='product-cell'>
        <img alt="example" width={80} height={100} src='https://cercana.us/wp-content/uploads/2021/03/placeholder-300x450.jpg' />
        <p>{product}</p>
      </div>
    )
  },
  {
    title: 'Color & Size',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    render: quantity => <Input value={quantity} style={{width: '40px'}} />
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: price => <span>${price}</span>
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: total => <span>{total}</span>
  }
];

const data = [
  {
    key: '1',
    product: 'Casual men wearing cool shoe',
    color: 32,
    price: 120,
    quantity: 3,
    total: 0,
  },
  {
    key: '2',
    product: 'Womens backpack',
    color: 32,
    price: 120,
    quantity: 5,
    total: 0,
  },
  {
    key: '3',
    product: 'Casual men jaket',
    color: 32,
    price: 120,
    quantity: 8,
    total: 0,
  },

];

const ProductList = () => {
  return (
    <Table 
      bordered 
      dataSource={data} 
      columns={columns}
      footer={() => (
        <>
          <Button>update cart</Button>
          <Button type='primary' >continue shopping</Button>
        </>
        
      )}  
    />
  )
}

export default ProductList;