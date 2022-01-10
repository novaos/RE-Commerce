import { DeleteOutlined } from '@ant-design/icons';
import { Image, Rate, Row, Table, Col } from 'antd';
import * as React from 'react';
import { useContext } from 'react';
import IconFont from '../../../../components/IconFont';
import useLocalStorage from '../../../../utils/hooks/useLocalStorage';
import { ActionTypes, ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './difference.scss';

const Difference: React.FC<{ products: ProductType[] }> = ({ products }) => {
  const [titles, setTitles] = React.useState<{ title: string; dataIndex: string }[]>([]);
  const { dispatch } = useContext(GlobalContext);
  const { addToCart } = useLocalStorage();

  React.useLayoutEffect(() => {
    const unnecessaryTitles = ['createdAt', 'id', 'amount', 'wearType', 'description', 'about', 'reviews'];
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
            photo: <Image key={item.id} style={{ objectFit: 'cover' }} width={100} src={item.photo} />,
            rating: <Rate key={item.id} allowHalf disabled defaultValue={item.rating} />,
            delete: (
              <Row gutter={10}>
                <Col>
                  <DeleteOutlined key={item.id} onClick={() => handleRemoveComparisonProduct(item.id)} />
                </Col>
                <Col>
                  <IconFont onClick={() => handleAdd(item)} className="icon" type="icon-shoppingcart" />

                  {/* <DeleteOutlined key={item.id} onClick={() => handleRemoveComparisonProduct(item.id)} /> */}
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
