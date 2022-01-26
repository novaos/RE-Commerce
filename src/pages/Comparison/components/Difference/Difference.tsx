import { DeleteOutlined } from '@ant-design/icons';
import { Image, Rate, Row, Table, Col } from 'antd';
import * as React from 'react';
import { useContext } from 'react';
import IconFont from '../../../../components/IconFont';
import useProductCart from '../../../../utils/hooks/useProductCart';
import { ActionTypes, ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './difference.scss';

const Difference: React.FC<{ products: ProductType[] }> = ({ products }) => {
 const [titles, setTitles] = React.useState<{ title: string; dataIndex: string }[]>([]);
 const { dispatch } = useContext(GlobalContext);
 const { addToCart } = useProductCart();

 React.useLayoutEffect(() => {
  const unnecessaryTitles = [
   'createdAt',
   'id',
   'amount',
   'wearType',
   'description',
   'about',
   'reviews',
   'options',
   'properties'
  ];
  if (!products?.[0]) {
   return;
  }
  setTitles([
   ...Object.keys(products?.[0])
    ?.filter(title => !unnecessaryTitles.includes(title))
    ?.map(title => ({
     title,
     dataIndex: String(title)
    })),
   { title: 'sizes', dataIndex: 'sizes' },
   { title: 'colors', dataIndex: 'colors' },
   { title: 'delete', dataIndex: 'delete' }
  ]);
 }, [products]);

 const handleRemoveComparisonProduct = (id: string) => {
  dispatch({ type: ActionTypes.REMOVE_COMPARISON_PRODUCT, payload: id });
 };

 const handleAdd = (product: ProductType) => {
  addToCart(product);
 };

 return (
  <div className={'difference-wrapper'}>
   <Row gutter={10} justify="center">
    <Table
     dataSource={products?.map((item, index) => ({
      ...item,
      key: index,
      avatar: <Image key={item.id} style={{ objectFit: 'cover' }} width={100} src={item.options[0].photosUrl[0]} />,
      rating: <Rate key={item.id} allowHalf disabled defaultValue={item.rating} />,
      sizes: item.properties
       .filter(item => item.key === 'size')
       .map(item => item.value)
       .join(', '),
      colors: item.properties
       .filter(item => item.key === 'color')
       .map(item => (
        <div
         key={item.value}
         style={{
          display: 'inline-block',
          border: '0.1px solid silver',
          borderRadius: '50%',
          marginRight: '5px',
          background: item.value,
          width: '10px',
          height: '10px'
         }}
        />
       )),
      delete: (
       <Row gutter={10}>
        <Col>
         <DeleteOutlined key={item.id} onClick={() => handleRemoveComparisonProduct(item.id)} />
        </Col>
        <Col>
         <IconFont onClick={() => handleAdd(item)} className="icon" type="icon-shoppingcart" />
        </Col>
       </Row>
      )
     }))}
     columns={titles}
     bordered
     style={{ textTransform: 'capitalize' }}
     size="large"
     pagination={false}
    />
   </Row>
  </div>
 );
};

export { Difference };
