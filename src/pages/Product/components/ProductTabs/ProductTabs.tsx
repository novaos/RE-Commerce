import { Tabs } from 'antd';
import * as React from 'react';
import './productTabs.scss';
import { ReviewsTab } from '../ReviewsTab';
import { ReviewType } from '../../../../utils/providers/GlobalContext/globalContext.types';

const ProductTabs: React.FC<{ about: string; reviews: ReviewType[] }> = ({ about, reviews }) => {
  return (
    <div className="product-tab-wrapper">
      <Tabs onChange={() => {}} type="card">
        <Tabs.TabPane className="tab" tab="Description" key="1">
          {about}
        </Tabs.TabPane>
        <Tabs.TabPane className="tab" tab={`Reviews (${reviews.length})`} key="2">
          <ReviewsTab reviews={reviews} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export { ProductTabs };
