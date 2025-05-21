
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import RoutineKit from "@/components/RoutineKit";
import Transparency from "@/components/Transparency";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Korean = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language="ko" />
      <main>
        <LanguageSwitcher currentLanguage="ko" />
        <HeroSection />
        <BrandStory />
        <RoutineKit />
        <Transparency />
        <Reviews />
        <FAQ />
      </main>
      <Footer language="ko" />
    </div>
  );
};

export default Korean;
