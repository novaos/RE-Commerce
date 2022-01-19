import { Col, Row } from 'antd';
import { useContext, useEffect, useState } from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';
import { handleSort } from '../../../../utils/functions';
import { ProductType, SortTypes } from '../../../../utils/providers/GlobalContext';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './bestSelers.scss';
import FirstCard from './FirstCard';

export default function BestSelers() {
  const { state } = useContext(GlobalContext);
  const [topRatedProducts, setTopRatedProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setTopRatedProducts(handleSort(state.products, SortTypes.rating));
  }, [state.products]);

  return (
    <div className="best-selers-wrap">
      <div className="container">
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={24} lg={8} xl={6}>
            <FirstCard />
          </Col>
          {topRatedProducts?.map(item => (
            <Col xs={24} sm={24} md={12} lg={8} xl={6} key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
