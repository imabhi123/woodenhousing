import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallToAction from "@/components/homeSections/CallToAction";
import HomeTopSection from "@/components/homeSections/HomeTopSection";
import ServicesSection from "@/components/homeSections/ServiceSection";
import TechnologySection from "@/components/homeSections/TechnologySection";
import UniqueSection from "@/components/homeSections/UniqueSection";
import WhyChoose from "@/components/homeSections/WhyChoose";
import WoodenVillasShowcase from "@/components/homeSections/WoodenVillas";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-lexend-deca)] bg-white">
      <Header />
      <HomeTopSection />
      <WhyChoose />
      <TechnologySection />
      <UniqueSection />
      <ServicesSection />
      <WoodenVillasShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
}
