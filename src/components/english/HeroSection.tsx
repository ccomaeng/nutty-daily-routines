
import { Button } from "@/components/ui/button";
import { Dog } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-nutty-light to-white overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nutty-foreground mb-6">
            A healthy day for your dog with <span className="text-nutty-accent">three daily routines</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
            Not just treats, but a complete routine. Your dog deserves the same care and quality that you would give yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90 text-lg py-6 px-8">
              Get 7-Day Trial Kit
            </Button>
            <Button variant="outline" className="border-nutty-accent text-nutty-accent hover:bg-nutty-light py-6 px-8 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-64 md:h-80 lg:h-[500px] animate-fade-in">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/354dbd0e-a0a5-4888-9ee7-ee66b04be079.png')] bg-cover bg-center rounded-2xl shadow-lg transform lg:translate-x-12"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-nutty-secondary rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-nutty-light rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
