import { MailFilled, PhoneFilled } from '@ant-design/icons';
import * as React from 'react';
import './headerTop.scss';

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <div className="link">
        <a href="tel:+1123456789">
          <PhoneFilled className="icon" />
          +1 123 456 789
        </a>
      </div>
      <div className="link">
        <a href="mailto:info@company.com">
          <MailFilled className="icon" />
          info@company.com
        </a>
      </div>
    </div>
  );
};

export { HeaderTop };
