import { SyncOutlined } from '@ant-design/icons';
import { Badge, Col, Menu, Row } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React, { useContext, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useClickAway } from '../../utils/hooks';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
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
  const { state } = useContext(GlobalContext);
  const [isVisibleAdditionalMenu, setIsVisibleAdditionalMenu] = React.useState(false);
  const additionalMenuRef = useRef(null);

  useClickAway(
    additionalMenuRef,
    () => {
      setIsVisibleAdditionalMenu(false);
    },
    isVisibleAdditionalMenu
  );

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
            <SearchInput />
          </Col>
          <Col className="link">
            <Link to="/cart">
              <Badge count={state.productsInCart?.length} size="small">
                <IconFont className="icon" type="icon-shoppingcart" />
              </Badge>
            </Link>
          </Col>
          <Col className="link">
            <Link style={{ color: 'black', marginLeft: '15px' }} to="/comparison">
              <Badge count={state.comparisonProducts?.length} size="small">
                <SyncOutlined />
              </Badge>
            </Link>
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default Navigation;
