// import { DeleteOutlined } from '@ant-design/icons';
// import IconFont from '../../../../components/IconFont';
import { Image, Rate } from 'antd';
import * as React from 'react';
import { useContext } from 'react';
import { RiDeleteBin7Line, RiShoppingCartLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { ActionTypes, ProductType } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './difference.scss';

const Difference: React.FC<{ products: ProductType[] }> = ({ products }) => {
  const [titles, setTitles] = React.useState<{ title: string; dataIndex: string }[]>([]);
  const { dispatch } = useContext(GlobalContext);
  const history = useHistory();

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
    history.push(`/product/${product.id}`);
  };

  return (
    <>
      {/* \/\/\/ ANTD \/\/\/ */}
      {/* <div className={'difference-wrapper'}>
        <Row gutter={10} justify="center">
          <Table
            dataSource={products?.map((item, index) => ({
              ...item,
              key: index,
              avatar: (
                <Image key={item.id} style={{ objectFit: 'cover' }} width={100} src={item.options[0].photosUrl[0]} />
              ),
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
      </div> */}
      {/* ^^^ ANTD ^^^ */}

      <div className="table-auto container">
        <table className="table-auto border-collapse mx-auto rounded-tr-xl">
          <thead className="p-1 rounded-tr-xl">
            {titles.map(title => (
              <td className="p-4 first:rounded-tl-xl last:rounded-tr-xl border border-slate-300 capitalize bg-slate-400">
                {title.title}
              </td>
            ))}
          </thead>
          <tbody>
            {products.map(item => (
              <tr>
                <td className="p-4 border border-slate-300">{item.name}</td>
                <td className="p-4 border border-slate-300">
                  <Image key={item.id} style={{ objectFit: 'cover' }} width={100} src={item.options[0].photosUrl[0]} />
                </td>
                <td className="p-4 border border-slate-300">{item.category}</td>

                <td className="p-4 border border-slate-300">
                  <Rate key={item.id} allowHalf disabled defaultValue={item.rating} />
                </td>
                <td className="p-4 border border-slate-300">{item.price}</td>

                <td className="p-4 border border-slate-300">
                  {item.properties
                    .filter(item => item.key === 'size')
                    .map(item => item.value)
                    .join(', ')}
                </td>
                <td className="p-4 border border-slate-300">
                  {item.properties
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
                    ))}
                </td>
                <td className="border border-slate-300 h-full">
                  <div className=" flex items-center justify-around">
                    <RiDeleteBin7Line
                      className="shrink cursor-pointer"
                      onClick={() => handleRemoveComparisonProduct(item.id)}
                    />
                    <RiShoppingCartLine className="shrink cursor-pointer" onClick={() => handleAdd(item)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Difference };
