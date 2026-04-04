import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TriggersSection from "@/components/landing/TriggersSection";
import PersonasSection from "@/components/landing/PersonasSection";
import PricingSection from "@/components/landing/PricingSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import RoadmapSection from "@/components/landing/RoadmapSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TriggersSection />
      <PersonasSection />
      <PricingSection />
      <ArchitectureSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
