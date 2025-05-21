
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import RoutineKit from "@/components/RoutineKit";
import Transparency from "@/components/Transparency";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandStory />
        <RoutineKit />
        <Transparency />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
