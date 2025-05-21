
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dog } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  language: "en" | "ko";
}

const Header = ({ language }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const translations = {
    en: {
      brandStory: "Brand Story",
      routineKit: "Routine Kit",
      ingredients: "Ingredients",
      reviews: "Reviews",
      faq: "FAQ",
      trialKit: "7-day Trial Kit"
    },
    ko: {
      brandStory: "브랜드 스토리",
      routineKit: "루틴 키트",
      ingredients: "성분",
      reviews: "리뷰",
      faq: "FAQ",
      trialKit: "7일 체험 키트"
    }
  };

  const t = translations[language];
  const brandName = language === "en" ? "Nutty" : "너티";
  const homePath = language === "en" ? "/en" : "/";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-nutty-muted/20">
      <div className="container-custom flex justify-between items-center h-16">
        {/* Logo */}
        <Link to={homePath} className="flex items-center gap-2">
          <Dog className="text-nutty-accent" size={24} />
          <span className="text-2xl font-bold text-nutty-accent font-playfair">{brandName}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#brand-story" className="text-sm font-medium hover:text-nutty-accent transition-colors">{t.brandStory}</a>
          <a href="#routine-kit" className="text-sm font-medium hover:text-nutty-accent transition-colors">{t.routineKit}</a>
          <a href="#transparency" className="text-sm font-medium hover:text-nutty-accent transition-colors">{t.ingredients}</a>
          <a href="#reviews" className="text-sm font-medium hover:text-nutty-accent transition-colors">{t.reviews}</a>
          <a href="#faq" className="text-sm font-medium hover:text-nutty-accent transition-colors">{t.faq}</a>
          <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90">
            {t.trialKit}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-nutty-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-50 border-b border-nutty-muted/20 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#brand-story" className="text-sm font-medium hover:text-nutty-accent transition-colors" onClick={toggleMenu}>{t.brandStory}</a>
            <a href="#routine-kit" className="text-sm font-medium hover:text-nutty-accent transition-colors" onClick={toggleMenu}>{t.routineKit}</a>
            <a href="#transparency" className="text-sm font-medium hover:text-nutty-accent transition-colors" onClick={toggleMenu}>{t.ingredients}</a>
            <a href="#reviews" className="text-sm font-medium hover:text-nutty-accent transition-colors" onClick={toggleMenu}>{t.reviews}</a>
            <a href="#faq" className="text-sm font-medium hover:text-nutty-accent transition-colors" onClick={toggleMenu}>{t.faq}</a>
            <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90 w-full">
              {t.trialKit}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
