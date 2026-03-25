import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OwnerSection from "@/components/OwnerSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <OwnerSection />
    <Footer />
  </div>
);

export default Index;
