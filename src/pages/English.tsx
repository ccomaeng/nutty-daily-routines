
import Header from "@/components/Header";
import HeroSection from "@/components/english/HeroSection";
import BrandStory from "@/components/english/BrandStory";
import RoutineKit from "@/components/english/RoutineKit";
import Transparency from "@/components/english/Transparency";
import Reviews from "@/components/english/Reviews";
import FAQ from "@/components/english/FAQ";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const English = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header language="en" />
      <main>
        <LanguageSwitcher currentLanguage="en" />
        <HeroSection />
        <BrandStory />
        <RoutineKit />
        <Transparency />
        <Reviews />
        <FAQ />
      </main>
      <Footer language="en" />
    </div>
  );
};

export default English;
