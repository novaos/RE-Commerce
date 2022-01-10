import { Badge, Col, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
// import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import IconFont from '../IconFont';
import { SearchInput } from './componets';
import './navigation.scss';
const navigation = [
  {
    title: 'home',
    to: '/',
    exact: true
  },
  {
    title: 'catalog',
    to: '/catalog'
  },
  {
    title: 'women',
    to: '/women'
  },
  {
    title: 'men',
    to: '/men'
  },
  {
    title: 'kids',
    to: '/kids'
  },
  {
    title: 'jewellery',
    to: '/jewellery'
  },
  {
    title: 'accessories',
    to: '/accessories'
  }
];

const Navigation: React.FC = () => {
  const { productsInCart } = useLocalStorage();
  console.log("nav", productsInCart)

  return (
    <Header className="navigation">
      <div className="container">
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
                  <NavLink className="link" exact={exact} activeClassName="linkActive" to={to}>
                    {title}
                  </NavLink>
                </Menu.Item>
              ))}
            </Row>
          </nav>
        </Menu>
        <Row justify="space-between">
          <Col className="link">
            {/* <Link to="/search">
              <SearchOutlined className="icon" />
            </Link> */}
            <SearchInput />
          </Col>
          <Col className="link">
            <Link to="/cart">
              <Badge count={productsInCart.length} size="small">
                <IconFont className="icon" type="icon-shoppingcart" />
              </Badge>
            </Link>
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default Navigation;
