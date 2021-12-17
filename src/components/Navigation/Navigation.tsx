import { SearchOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import IconFont from '../IconFont';
import './navigation.scss';
const navigation = [
  {
    title: 'home',
    to: '/',
    exact: true
  },
  {
    title: 'women',
    to: '/a'
  },
  {
    title: 'men',
    to: '/b'
  },
  {
    title: 'kids',
    to: '/c'
  },
  {
    title: 'jewellery',
    to: '/d'
  },
  {
    title: 'accessories',
    to: '/e'
  }
];

const Navigation: React.FC = () => {
  return (
    <Header className="navigation">
      <Link className="link" to="/">
        <h4 className="logo">
          Renoshop<span>bee</span>
        </h4>
      </Link>
      <Menu className="menu" selectedKeys={['home']} mode="horizontal">
        <nav className="nav">
          <Row justify="space-between">
            {navigation.map(({ title, to, exact }) => (
              <Menu.Item className="link" key={title}>
                <NavLink exact={exact} activeClassName="linkActive" to={to}>
                  {title}
                </NavLink>
              </Menu.Item>
            ))}
          </Row>
        </nav>
      </Menu>
      <Row justify="space-between">
        <Col span={8} className="link">
          <IconFont className="icon" type="icon-shoppingcart" />
        </Col>
        <Col span={8} className="link">
          <SearchOutlined className="icon" />
        </Col>
      </Row>
    </Header>
  );
};

export default Navigation;
