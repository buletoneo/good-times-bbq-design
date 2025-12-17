import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustedSection from "@/components/TrustedSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import GrowVisionSection from "@/components/GrowVisionSection";
import FreshSection from "@/components/FreshSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TrustedSection />
      <WhatsIncludedSection />
      <GrowVisionSection />
      <FreshSection />
    </Layout>
  );
};

export default Index;
