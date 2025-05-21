
import { Button } from "@/components/ui/button";
import { Dog } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-nutty-light to-white overflow-hidden">
      <div className="container-custom py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nutty-foreground mb-6">
            강아지를 위한 건강한 하루, <span className="text-nutty-accent">세 번의 일상 루틴</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
            단순한 간식이 아닌 완전한 루틴. 당신의 강아지는 당신이 스스로에게 줄 수 있는 것과 동일한 관리와 품질을 누릴 자격이 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90 text-lg py-6 px-8">
              7일 체험 키트 받기
            </Button>
            <Button variant="outline" className="border-nutty-accent text-nutty-accent hover:bg-nutty-light py-6 px-8 text-lg">
              더 알아보기
            </Button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative h-64 md:h-80 lg:h-[500px] animate-fade-in">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601758124510-52d32ebfdc47')] bg-cover bg-center rounded-2xl shadow-lg transform lg:translate-x-12"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-nutty-secondary rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-nutty-light rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
