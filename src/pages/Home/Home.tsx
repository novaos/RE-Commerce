import React from 'react';
import BestSelers from './components/bestSelers/BestSelers';
import Delivery from './components/staticBlocks/StaticBlocks';
import FeatureProducts from './components/featuredProducts/FeatureProducts';

const Home: React.FC = () => {
  return (
    <>
      <p>project</p>
      <BestSelers />
      <Delivery />
      <FeatureProducts />
    </>
  );
};

export default Home;
