import BestSelers from './components/BestSelers/BestSelers';
import FeatureProducts from './components/FeaturedProducts/FeatureProducts';
import Delivery from './components/SaticBlocks/StaticBlocks';

export default function Home() {
  return (
    <>
      <BestSelers />
      <Delivery />
      <FeatureProducts />
      <div className="inner-container"></div>
    </>
  );
}
