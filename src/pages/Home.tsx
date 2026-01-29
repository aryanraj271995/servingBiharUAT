import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";
import AdsGrid from "../components/AdsGrid/AdsGrid";
/*import CitySelector from "../components/CitySelector/CitySelector";*/

const Home: React.FC = () => {
  return (
    <>
      <Services />
      <Hero />
      <FeatureGrid />
      <AdsGrid />
    </>
  );
};

export default Home;
