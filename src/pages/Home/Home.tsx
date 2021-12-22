import React, { useContext, useEffect } from 'react';
import { ActionTypes, GlobalContext } from '../../utils/providers/GlobalContext';
import BestSelers from './components/BestSelers/BestSelers';
import FeatureProducts from './components/FeaturedProducts/FeatureProducts';
import Delivery from './components/SaticBlocks/StaticBlocks';
const Home: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({ type: ActionTypes.SORT_BY_RATING });
    dispatch({ type: ActionTypes.SORT_BY_NEWNESS });
  }, [dispatch, state.products]);
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
