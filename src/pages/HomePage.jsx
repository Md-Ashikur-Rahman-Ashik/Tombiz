import BlogSection from "../components/BlogSection";
import ChooseUs from "../components/ChooseUs";
import ConsultationSection from "../components/ConsultationSection";
import HeroSection from "../components/HeroSection";
import ProvenResults from "../components/ProvenResults";
import ReviewSection from "../components/ReviewSection";
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
      <ReviewSection />
      <BlogSection />
      <ConsultationSection />
    </div>
  );
};

export default HomePage;
