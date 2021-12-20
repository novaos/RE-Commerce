import React from 'react';
import BestSelers from './components/bestSelers/BestSelers';
import Delivery from './components/staticBlocks/StaticBlocks';
import FeatureProducts from './components/featuredProducts/FeatureProducts';
import { Footer } from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <BestSelers />
      <Delivery />
      <FeatureProducts />
      <Footer />
    </>
  );
};

export default Home;
