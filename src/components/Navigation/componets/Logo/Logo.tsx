import * as React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo: React.FC = () => {
 return (
  <Link to="/" className={'logo-wrapper flex items-center'}>
   <h2 className="lg:text-3xl lg:font-medium">
    <span className="text-green-500">RENOSHOP</span>
    <span>BEE</span>
   </h2>
  </Link>
 );
};

export { Logo };
