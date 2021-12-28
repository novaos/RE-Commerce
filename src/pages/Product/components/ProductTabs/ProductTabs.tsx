import { Tabs } from 'antd';
import * as React from 'react';
import './productTabs.scss';

const ProductTabs: React.FC<{ about: string }> = ({ about }) => {
  return (
    <div className="product-tab-wrapper">
      <Tabs onChange={() => {}} type="card">
        <Tabs.TabPane className="tab" tab="Description" key="1">
          {about}
        </Tabs.TabPane>
        <Tabs.TabPane className="tab" tab="Reviews" key="2">
          2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta autem omnis voluptatibus facere praesentium!
          Nostrum iure ipsum labore tenetur. Quae veritatis aspernatur sunt vitae, similique officia itaque explicabo
          veniam totam. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum error
          consequuntur. Velit cupiditate, qui perspiciatis necessitatibus placeat nulla aliquam, porro, deleniti quasi
          eius quibusdam possimus? Incidunt id minus debitis!
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in veniam quasi consequuntur similique.
          Nam, dolorem ipsam impedit, natus suscipit provident asperiores inventore nostrum nulla corrupti sapiente?
          Sunt, dignissimos nulla.{' '}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export { ProductTabs };
