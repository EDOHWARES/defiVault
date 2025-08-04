import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import GovernanceSection from "@/components/GovernanceSection";
import RoadmapSection from "@/components/RoadmapSection";
import DocsSection from "@/components/DocsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <GovernanceSection />
      <RoadmapSection />
      <DocsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
