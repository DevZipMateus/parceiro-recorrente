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
      <div className="border-t border-border"></div>
      <TargetAudienceSection />
      <div className="border-t border-border"></div>
      <BusinessModelSection />
      <div className="border-t border-border"></div>
      <AboutSection />
      <div className="border-t border-border"></div>
      <ComparisonTable />
      <div className="border-t border-border"></div>
      <DifferentialsSection />
      <div className="border-t border-border"></div>
      <FAQSection />
      <div className="border-t border-border"></div>
      <CTASection />
    </div>
  );
};

export default Index;