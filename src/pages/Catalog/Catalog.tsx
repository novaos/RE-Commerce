import { Col, Row } from 'antd';
import * as React from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { GlobalContext } from '../../utils/providers/GlobalContext';
import './catalog.scss';
import { CatalogHeader, Filter, TopRated } from './components';

const Catalog: React.FC = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="inner-container">
      <div className="catalog-wrapper">
        <div className="left-side-bar">
          <Filter />
          <TopRated />
        </div>
        <main className="main">
          <CatalogHeader pages={22} />
          <div className="products-wrapper">
            <Row justify="space-between" gutter={[20, 20]} wrap={true}>
              {state?.products?.map(item => (
                <Col flex="250px" key={item.id}>
                  <ProductCard product={item} />
                </Col>
              ))}
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalog;
