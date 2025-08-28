import HeroSection from "@/components/HeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import AboutSection from "@/components/AboutSection";
import ComparisonTable from "@/components/ComparisonTable";
import DifferentialsSection from "@/components/DifferentialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TargetAudienceSection />
      <BusinessModelSection />
      <AboutSection />
      <ComparisonTable />
      <DifferentialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;