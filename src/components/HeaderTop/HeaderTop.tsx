import { MailFilled, PhoneFilled } from '@ant-design/icons';
import * as React from 'react';
import './headerTop.scss';
import { Row, Typography, Col } from 'antd';
import { LanguageSwitch } from './components';

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <div className="container">
        <Row justify="space-between">
          <Col>
            <Row>
              <Col>
                <div className="link">
                  <a href="tel:+1123456789">
                    <PhoneFilled className="icon" />
                    <Typography.Paragraph className="text">+1 123 456 789</Typography.Paragraph>
                  </a>
                </div>
              </Col>
              <Col>
                <div className="link">
                  <a href="mailto:info@company.com">
                    <MailFilled className="icon" />
                    <Typography.Paragraph className="text">info@company.com</Typography.Paragraph>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col>
            <LanguageSwitch />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { HeaderTop };
