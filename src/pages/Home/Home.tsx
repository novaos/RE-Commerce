import React from 'react';
import BestSelers from './components/bestSelers/BestSelers';
import Delivery from './components/staticBlocks/StaticBlocks';
import FeatureProducts from './components/featuredProducts/FeatureProducts';
const Home: React.FC = () => {
  return (
    <>
      <BestSelers />
      <Delivery />
      <FeatureProducts />
      <div className="inner-container"></div>
    </>
  );
};

export default Home;
