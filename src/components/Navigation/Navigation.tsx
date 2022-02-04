// import { MenuOutlined, SyncOutlined } from '@ant-design/icons';
// import { Badge, Col, Menu, Row, Typography } from 'antd';
// import { Header } from 'antd/lib/layout/layout';
// import SubMenu from 'antd/lib/menu/SubMenu';
import { useContext, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import IconFont from '../IconFont';
// import { SearchInput } from './componets';
import { BiSearchAlt2 } from 'react-icons/bi';
import { GoGitCompare } from 'react-icons/go';
import { IoIosCart } from 'react-icons/io';
import { /* Link,  */ Link, NavLink } from 'react-router-dom';
import { useClickAway } from '../../utils/hooks';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import './navigation.scss';

const Navigation: React.FC = () => {
 const { state } = useContext(GlobalContext);
 const [isVisibleAdditionalMenu, setIsVisibleAdditionalMenu] = useState(false);
 const additionalMenuRef = useRef(null);
 const searchRef = useRef(null);
 const isTabletWidth = window.innerWidth < 800;
 const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

 console.log(state, isTabletWidth, setIsOpenBurgerMenu);

 const [isOpenSearch, setIsOpenSearch] = useState(false);
 const [isOpenSearchSelect, setIsOpenSearchSelect] = useState(false);
 const [query, setQuery] = useState('');

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

 useClickAway(
  searchRef,
  () => {
   setIsOpenSearch(false);
  },
  isOpenSearch
 );

 return (
  <>
   <div className="container border-b-2 border-b-silver">
    <div className="flex justify-between bg-white  lg:py-3 lg:mx-auto">
     <div className="logo">
      <h2 className="lg:text-3xl lg:font-medium">
       <span className="text-green-500">RENOSHOP</span>
       <span>BEE</span>
      </h2>
     </div>
     <div onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)} className="lg:hidden sm:block cursor-pointer z-20">
      <div className="mb-1 w-6 h-0.5 bg-green-900 relative"></div>
      <div className="mb-1 w-6 h-0.5 bg-green-900 relative"></div>
      <div className="mb-1 w-6 h-0.5 bg-green-900 relative"></div>
     </div>
     <nav
      className={`lg:flex lg:items-center ${
       isOpenBurgerMenu ? 'sm:flex fixed h-screen bg-green-200 z-10 w-screen top-0 left-0 p-5 flex-col' : 'sm:hidden'
      }`}>
      {navigation.map(({ title, exact, to }) => (
       <NavLink
        to={to}
        exact={exact}
        className="lg:px-3 sm:p-3 lg:text-base sm:text-lg font-thin uppercase items-center hover:text-green-600 ease-in-out">
        {title}
       </NavLink>
      ))}
     </nav>
     <div className="icons lg:flex lg:justify-evenly lg:items-center sm:hidden">
      <div className="icon relative">
       <BiSearchAlt2 onClick={() => setIsOpenSearch(true)} className="mr-3 text-xl" />
      </div>
      <Link to="/cart">
       <div className="icon relative">
        <div className="flex justify-center items-center absolute -top-[8px] right-[2px] border border-white  bg-red-600 rounded-full w-4 h-4">
         <span className="text-xs text-center text-white">{state.productsInCart.length}</span>
        </div>
        <IoIosCart className="mr-3 text-xl" />
       </div>
      </Link>
      <Link to="/comparison">
       <div className="icon relative">
        <div className="flex justify-center items-center absolute -top-[8px] right-[2px] border border-white  bg-red-600 rounded-full w-4 h-4">
         <span className="text-xs text-center text-white">{state.comparisonProducts.length}</span>
        </div>
        <GoGitCompare className="mr-3 text-xl" />
       </div>
      </Link>
     </div>
    </div>
    {isOpenSearch && (
     <div
      ref={searchRef}
      className="flex justify-center items-center -translate-y-1/2 -translate-x-1/2 left-2/4 top-48 z-10 fixed w-10/12 h-36 border-2 border-silver-400 rounded-md shadow-[#50d71e] bg-white animate-[wiggle_1s_ease-in-out_1] origin-[top_left]">
      <input
       className="h-10 w-1/2 px-2 focus:border-silver bg-red-700 backdrop-opacity-10 backdrop-invert bg-white/70"
       type="text"
       onFocus={() => setIsOpenSearchSelect(true)}
       onChange={event => setQuery(event.target.value)}
      />
      {isOpenSearchSelect && (
       <div className="popup max-h-[300px] overflow-auto absolute w-2/4 left-[50%] -translate-x-1/2 border-silver border-2 rounded-md bg-white top-[80%]">
        {state.products
         ?.filter(({ name }) => name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))
         ?.map(({ id, name }) => (
          <Link
           className=" block px-2 py-1 hover:bg-green-200 hover:text-green-800 text-xl"
           key={id}
           onClick={() => {
            setIsOpenSearch(false);
            setQuery('');
           }}
           to={`/product/${id}`}>
           <p key={id} className="item">
            {name}
           </p>
          </Link>
         ))}
       </div>
      )}{' '}
     </div>
    )}
   </div>
   {/* <Header className="navigation">
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
           <Badge count={state.productsInCart.length} size="small">
            <IconFont className="icon" type="icon-shoppingcart" />
           </Badge>
           <Typography.Link style={{ color: 'black', marginLeft: '10px' }}>Cart</Typography.Link>
          </Link>
         </Menu.Item>
         <Menu.Item>
          <Link className="link-wrapper" to="/comparison">
           <Badge count={state.comparisonProducts.length} size="small">
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
          <Badge count={state.productsInCart.length} size="small">
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
   </Header> */}
  </>
 );
};

export default Navigation;
