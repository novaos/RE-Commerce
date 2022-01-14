import { MenuOutlined, SyncOutlined } from '@ant-design/icons';
import { Badge, Col, Menu, Row, Typography } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import SubMenu from 'antd/lib/menu/SubMenu';
import { default as React, useContext, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { useClickAway } from '../../utils/hooks';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import IconFont from '../IconFont';
import { SearchInput } from './componets';
import './navigation.scss';

const Navigation: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const [isVisibleAdditionalMenu, setIsVisibleAdditionalMenu] = React.useState(false);
  const additionalMenuRef = useRef(null);
  const isTabletWidth = window.innerWidth < 800;

  const { t } = useTranslation();
  const navigation = [
    {
      title: t('Navigation.HomeTitle'),
      to: '/',
      exact: true
    },
    {
      title: t('Navigation.CatalogTitle'),
      to: '/catalog'
    },
    {
      title: t('Navigation.WomenTitle'),
      to: '/catalog/women'
    },
    {
      title: t('Navigation.MenTitle'),
      to: '/catalog/men'
    },
    {
      title: t('Navigation.KidsTitle'),
      to: '/catalog/kids'
    },
    {
      title: t('Navigation.JewelleryTitle'),
      to: '/catalog/jewellery'
    },
    {
      title: t('Navigation.AccessoriesTitle'),
      to: '/catalog/accessories'
    }
  ];

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
        {isTabletWidth ? (
          <>
            <Link className="link" to="/">
              <h4 className="logo">
                R<span>b</span>
              </h4>
            </Link>
            <Menu triggerSubMenuAction="click" expandIcon={false}>
              <SubMenu key="sub1" icon={<MenuOutlined />}>
                {navigation.map(({ title, to, exact }) => (
                  <Menu.Item key={title}>
                    <NavLink key={title} className="link" exact={exact} activeClassName="linkActive" to={to}>
                      {title}
                    </NavLink>
                  </Menu.Item>
                ))}

                <Menu.Item>
                  <Link className="link-wrapper" to="/cart">
                    <Badge count={state.productsInCart?.length} size="small">
                      <IconFont className="icon" type="icon-shoppingcart" />
                    </Badge>
                    <Typography.Link style={{ color: 'black', marginLeft: '10px' }}>Cart</Typography.Link>
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="link-wrapper" to="/comparison">
                    <Badge count={state.comparisonProducts?.length} size="small">
                      <SyncOutlined />
                    </Badge>
                    <Typography.Link style={{ color: 'black', marginLeft: '10px' }}>Comparison</Typography.Link>
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </>
        ) : (
          <>
            <Link className="link" to="/">
              <h4 className="logo">
                Renoshop<span>bee</span>
              </h4>
            </Link>
            <Menu className="menu" mode="horizontal">
              {navigation.map(({ title, to, exact }) => (
                <Menu.Item className="link" key={title}>
                  <NavLink key={title} className="link" exact={exact} activeClassName="linkActive" to={to}>
                    {title}
                  </NavLink>
                </Menu.Item>
              ))}
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
          </>
        )}
      </div>
    </Header>
  );
};

export default Navigation;
