import ChooseUs from "../components/ChooseUs";
import HeroSection from "../components/HeroSection";
import ProvenResults from "../components/ProvenResults";
import ServicesSection from "../components/ServicesSection";
import SuccessSection from "../components/SuccessSection";
import TrustedSection from "../components/TrustedSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <ChooseUs />
      <ProvenResults />
      <SuccessSection />
    </div>
  );
};

export default HomePage;
