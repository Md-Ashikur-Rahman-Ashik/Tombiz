import ChooseUs from "../components/ChooseUs";
import HeroSection from "../components/HeroSection";
import ProvenResults from "../components/ProvenResults";
import ServicesSection from "../components/ServicesSection";
import TrustedSection from "../components/TrustedSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <ChooseUs />
      <ProvenResults />
    </div>
  );
};

export default HomePage;
