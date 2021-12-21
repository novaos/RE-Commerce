import * as React from 'react';
import './catalog-header.scss';
import { Select } from 'antd';
const { Option } = Select;

type CatalogHeaderProps = {
  pages: number;
};

const options = [
  {
    value: 'newness',
    label: 'Sort by newness'
  },
  {
    value: 'oldest',
    label: 'Sort by oldest'
  },
  {
    value: 'rating',
    label: 'Sort by rating'
  },
  {
    value: 'price',
    label: 'Sort by price'
  }
];
const CatalogHeader: React.FC<CatalogHeaderProps> = ({ pages }) => {
  const handleChange = (value: any) => {
    console.log(value);
  };
  return (
    <div className="catalog-header">
      <p>Showing 1-12 of {pages} results</p>
      <Select bordered={false} defaultValue={options[0].value} style={{ width: 150 }} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </div>
  );
};

export { CatalogHeader };
