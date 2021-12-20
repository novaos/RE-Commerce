import * as React from 'react';
import './footer.scss';

const data = [
  {
    title: 'Information',
    links: [
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      }
    ]
  },
  {
    title: 'My account',
    links: [
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      }
    ]
  },
  {
    title: 'Help',
    links: [
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      },
      {
        name: 'Delivery Information',
        to: '/'
      }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <div className="inner-container">
      <div className="footer">
        {data.map(section => (
          <div className="footer-content">
            <h4>{section.title}</h4>
            {section.links.map(({ name }) => (
              <p>{name}</p>
            ))}
          </div>
        ))}
      </div>`
    </div>
  );
};

export { Footer };
