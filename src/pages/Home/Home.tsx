import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../utils/providers/GlobalContext/GlobalContext';
import { ActionTypes } from '../../utils/providers/GlobalContext/globalContext.enums';
import BestSelers from './components/BestSelers/BestSelers';
import FeatureProducts from './components/FeaturedProducts/FeatureProducts';
import Delivery from './components/SaticBlocks/StaticBlocks';

const Home: React.FC = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.SORT_BY_RATING });
    // dispatch({ type: ActionTypes.SORT_BY_NEWNESS });
    //eslint-disable-next-line
  }, []);

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
