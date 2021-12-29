import * as React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './searchInput.scss';

const SearchInput: React.FC = () => {
  return (
    <div className={'search-input-wrapper'}>
      <SearchOutlined className="icon" />
    </div>
  );
};

export { SearchInput };
