// import { Col, Row } from 'antd';
// import ProductCard from '../../../../components/ProductCard/ProductCard';
import { useContext, useEffect, useState } from 'react';
import ProductCard2 from '../../../../components/ProductCard2/ProductCard2';
import { handleSort } from '../../../../utils/functions';
import { ProductType, SortTypes } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './bestSelers.scss';
import FirstCard from './FirstCard';

export default function BestSelers() {
  const { state } = useContext(GlobalContext);
  const [topRatedProducts, setTopRatedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setTopRatedProducts(handleSort(state.products, SortTypes.rating).slice(0, 4));
  }, [state.products]);

  return (
    <div className="best-selers-wrap">
      {/* !!! ANT DESIGN !!! */}
      {/* <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={6}>
            <FirstCard />
          </Col>
          {topRatedProducts?.slice(0, 3).map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div> */}
      {/* !!! ANT DESIGN !!! */}

      <div className="container flex flex-wrap flex-col lg:flex-row md:justify-center lg:justify-between">
        <div className="shrink lg:mr-4">
          <FirstCard />
        </div>
        <div className="grow grid lg:grid-flow-col justify-center lg:justify-between gap-2 md:grid-flow-row">
          {topRatedProducts?.slice(0, 3).map(product => (
            <ProductCard2 large product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
