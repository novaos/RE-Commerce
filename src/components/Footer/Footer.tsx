import { GlobalOutlined, MailOutlined, PayCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import './footer.scss';

const data = [
  {
    title: 'Information',
    links: [
      {
        name: 'Delivery Information',
        to: '/delivery-information'
      },
      {
        name: 'Discount',
        to: '/discount'
      },
      {
        name: 'Sitemap',
        to: '/sitemap'
      },
      {
        name: 'Privacy Policy',
        to: '/privacy-policy'
      },
      {
        name: 'My Account',
        to: '/my-account'
      }
    ]
  },
  {
    title: 'My account',
    links: [
      {
        name: 'Sign In',
        to: '/sign-in'
      },
      {
        name: 'View Cart',
        to: '/view-cart'
      },
      {
        name: 'My Wishlist',
        to: '/my-wishlist'
      },
      {
        name: 'Check out',
        to: '/check-out'
      },
      {
        name: 'Track My Order',
        to: '/track-my-order'
      }
    ]
  },
  {
    title: 'Help',
    links: [
      {
        name: 'F.A.Q.',
        to: '/faq'
      },
      {
        name: 'Shipping',
        to: '/shipping'
      },
      {
        name: 'Contact Us',
        to: '/contact-us'
      },
      {
        name: 'Privacy Policy',
        to: '/privacy-policy'
      }
    ]
  }
];

const dataRight = [
  {
    title: 'Contact info',
    links: [
      {
        icon: <GlobalOutlined />,
        name: '1234 Your address, Country',
        href: 'https://goo.gl/maps/ZYwZGwL3S8UNxKqS8'
      },
      {
        icon: <PhoneOutlined />,
        name: '+1 234 567 89',
        href: 'tel:+1123456789'
      },
      {
        icon: <MailOutlined />,
        name: 'mail@domain.com',
        href: 'mailto:info@company.com'
      }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="inner-container">
        <Row justify='space-between' className='footer' gutter={[20, 20]}>
          {data.map(section => (
            <Col xs={24} sm={12} lg={6}>
              <div className="footer-content">
                <h4 className="title">{section.title}</h4>
                {section.links.map(({ name }) => (
                  <p className="link">{name}</p>
                ))}
              </div>
            </Col>
          ))}

          {dataRight.map(section => (
            <Col className="footer-right-content" xs={24} sm={12} lg={6}>
              <div className="footer-content">
                <h4 className="title">{section.title}</h4>
                {section.links.map(({ name, icon, href }) => (
                  <div className="link-wrapper">
                    <div className="icon">{icon}</div>
                    <a rel="noreferrer" target="_blank" href={href} className="link">
                      {name}
                    </a>
                  </div>
                ))}
              </div>
            </Col>
          ))}

        </Row>
      </div>
      <Layout.Footer className="footer-line">
        <div className="footer-content">
          <p className="additional-info">Copyright 2021 RenoshopBee all right reserved - Design by BeeStudios</p>
          <div className="pays">
            <PayCircleOutlined />
            <PayCircleOutlined />
            <PayCircleOutlined />
          </div>
        </div>
      </Layout.Footer>
    </>
  );
};

export { Footer };
