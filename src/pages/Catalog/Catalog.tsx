import { Col, Pagination, Row } from 'antd';
import * as React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductType } from '../../utils/providers/GlobalContext/globalContext.types';
import './catalog.scss';
import { CatalogProps } from './catalog.types';
import { CatalogHeader, Filter, TopRated } from './components';
import { useCatalogData } from './useCatalog.hook';

const Catalog: React.FC<CatalogProps> = () => {
  const { productsToShow, showFrom, showTo, handleSearch, setCurrentPage, currentPage, handleSort } = useCatalogData();
  return (
    <div className="inner-container">
      <div className="catalog-wrapper">
        <div className="left-side-bar">
          <Filter handleSearch={handleSearch} />
          <TopRated />
        </div>
        <main className="main">
          <CatalogHeader handleChange={handleSort} from={showFrom} to={showTo} pages={productsToShow?.length ?? 0} />
          <div className="products-wrapper">
            <Row justify="space-between" gutter={[20, 20]} wrap={true}>
              {productsToShow?.slice(showFrom, showTo)?.map((item: ProductType) => (
                <Col flex="250px" className="product-column" key={item.id}>
                  <ProductCard product={item} />
                </Col>
              ))}
            </Row>
          </div>
          <Pagination
            style={{ margin: '0 auto 50px', display: 'flex', justifyContent: 'center' }}
            current={currentPage}
            onChange={values => {
              setCurrentPage(values);
            }}
            pageSize={12}
            showSizeChanger={false}
            total={productsToShow?.length}
          />
        </main>
      </div>
    </div>
  );
};

export default Catalog;
