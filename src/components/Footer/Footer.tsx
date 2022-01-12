import { GlobalOutlined, MailOutlined, PayCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Layout, Row } from 'antd';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t('Footer.information.title'),
      links: [
        {
          name: t('Footer.information.captions.1'),
          to: '/delivery-information'
        },
        {
          name: t('Footer.information.captions.2'),
          to: '/discount'
        },
        {
          name: t('Footer.information.captions.3'),
          to: '/sitemap'
        },
        {
          name: t('Footer.information.captions.4'),
          to: '/privacy-policy'
        },
        {
          name: t('Footer.information.captions.5'),
          to: '/my-account'
        }
      ]
    },
    {
      title: t('Footer.my account.title'),
      links: [
        {
          name: t('Footer.my account.captions.1'),
          to: '/sign-in'
        },
        {
          name: t('Footer.my account.captions.2'),
          to: '/view-cart'
        },
        {
          name: t('Footer.my account.captions.3'),
          to: '/my-wishlist'
        },
        {
          name: t('Footer.my account.captions.4'),
          to: '/check-out'
        },
        {
          name: t('Footer.my account.captions.5'),
          to: '/track-my-order'
        }
      ]
    },
    {
      title: t('Footer.help.title'),
      links: [
        {
          name: t('Footer.help.captions.1'),
          to: '/faq'
        },
        {
          name: t('Footer.help.captions.2'),
          to: '/shipping'
        },
        {
          name: t('Footer.help.captions.3'),
          to: '/contact-us'
        },
        {
          name: t('Footer.help.captions.4'),
          to: '/privacy-policy'
        }
      ]
    }
  ];

  const dataRight = [
    {
      title: t('Footer.contact info.title'),
      links: [
        {
          icon: <GlobalOutlined />,
          name: t('Footer.contact info.captions.1'),
          href: 'https://goo.gl/maps/ZYwZGwL3S8UNxKqS8'
        },
        {
          icon: <PhoneOutlined />,
          name: t('Footer.contact info.captions.2'),
          href: 'tel:+1123456789'
        },
        {
          icon: <MailOutlined />,
          name: t('Footer.contact info.captions.3'),
          href: 'mailto:info@company.com'
        }
      ]
    }
  ];

  return (
    <>
      <div className="inner-container">
        <Row justify="space-between" className="footer" gutter={[20, 20]}>
          {data.map((section, index) => (
            <Col key={String(index)} xs={24} sm={12} lg={6}>
              <div className="footer-column">
                <h4 className="title">{section.title}</h4>
                {section.links.map(({ name }) => (
                  <p key={name} className="link">
                    {name}
                  </p>
                ))}
              </div>
            </Col>
          ))}

          {dataRight.map((section, index) => (
            <Col key={String(index)} className="footer-right-content" xs={24} sm={12} lg={6}>
              <div className="footer-column">
                <h4 className="title">{section.title}</h4>
                {section.links.map(({ name, icon, href }, index) => (
                  <div key={String(index)} className="link-wrapper">
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
          <p className="additional-info">{t('Footer.title')}</p>
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
