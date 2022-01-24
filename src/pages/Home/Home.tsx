import BestSelers from './components/BestSelers/BestSelers';
import FeatureProducts from './components/FeaturedProducts/FeatureProducts';
import Delivery from './components/SaticBlocks/StaticBlocks';

export default function Home() {
  return (
    <>
      {/* <div>{JSON.stringify(data2)}</div> */}
      <BestSelers />
      <Delivery />
      <FeatureProducts />
    </>
  );
}
