import * as React from 'react';
import './catalog-header.scss';
import { Select } from 'antd';
import { SortTypes } from '../../../../utils/providers/GlobalContext';
const { Option } = Select;

type CatalogHeaderProps = {
  pages: number;
  handleChange: (value: any) => void;
};

const options = [
  {
    value: SortTypes.newness,
    label: 'Sort by newness'
  },
  {
    value: SortTypes.oldest,
    label: 'Sort by oldest'
  },
  {
    value: SortTypes.rating,
    label: 'Sort by rating'
  },
  {
    value: SortTypes.price,
    label: 'Sort by price'
  }
];
const CatalogHeader: React.FC<CatalogHeaderProps> = ({ pages, handleChange }) => {
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
