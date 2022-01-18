import BestSelers from './components/BestSelers/BestSelers';
import FeatureProducts from './components/FeaturedProducts/FeatureProducts';
import Delivery from './components/SaticBlocks/StaticBlocks';

const Home: React.FC = () => {
  return (
    <>
      {/* <div>{JSON.stringify(data2)}</div> */}
      <BestSelers />
      <Delivery />
      <FeatureProducts />
      <div className="inner-container"></div>
    </>
  );
};

export default Home;
