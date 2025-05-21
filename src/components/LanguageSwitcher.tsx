
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLanguage: "en" | "ko";
}

const LanguageSwitcher = ({ currentLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="fixed top-20 right-4 z-50">
      <Button 
        variant="outline" 
        size="sm" 
        className="bg-white/80 backdrop-blur-sm border border-nutty-muted/20"
        asChild
      >
        <Link to={currentLanguage === "en" ? "/" : "/en"}>
          {currentLanguage === "en" ? "한국어" : "English"}
        </Link>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
