import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row } from 'antd';
import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../../utils/providers/GlobalContext/GlobalContext';
import './searchInput.scss';

const SearchInput: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = React.useContext(GlobalContext);
  const [query, setQuery] = useState('');

  return (
    <div className={'search-input-wrapper'}>
      <Row>
        <Col className="input-wrapper">
          <Input
            onChange={e => setQuery(e.target.value)}
            value={query}
            onFocus={() => {
              setTimeout(() => {
                setIsOpen(true);
              }, 500);
            }}
            onBlur={() => {
              setTimeout(() => {
                setIsOpen(false);
              }, 200);
            }}
            style={{ width: 'min-content', cursor: 'pointer' }}
            className="input"
            suffix={<SearchOutlined className="icon" />}
          />
          {isOpen && (
            <div className="popup">
              {state.products
                ?.filter(({ name }) => name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))
                ?.map(({ id, name }) => (
                  <Link to={`/product/${id}`}>
                    <p key={id} className="item">
                      {name}
                    </p>
                  </Link>
                ))}
            </div>
          )}
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export { SearchInput };
