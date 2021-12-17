import { Menu } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
const navigation = [
  {
    title: 'home',
    to: '/'
  },
  {
    title: 'women',
    to: '/'
  },
  {
    title: 'men',
    to: '/'
  },
  {
    title: 'kids',
    to: '/'
  },
  {
    title: 'jewellery',
    to: '/'
  },
  {
    title: 'accessories',
    to: '/'
  }
];
const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <Menu selectedKeys={['kids']} mode="horizontal">
        <Menu.Item>
          <h3 className="title">
            Renoshop<span>bee</span>
          </h3>
        </Menu.Item>
        {navigation.map(({ title, to }, i) => (
          <NavLink key={i} to={to}>
            <Menu.Item key={title}>{title}</Menu.Item>
          </NavLink>
        ))}
      </Menu>
    </div>
  );
};

export default Navigation;
