
import { Heart, Star, Package } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="brand-story" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">브랜드 이야기</h2>
          <p className="text-lg text-gray-700">
            우리는 우리 가족에게 주지 않을 것은 만들지 않습니다.
            너티는 간단한 믿음에서 탄생했습니다: 강아지는 사람과 같은 품질의 음식을 누릴 자격이 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">단순한 간식 이상</h3>
            <p className="text-gray-700">
              하루 세 번 강아지를 위한 루틴을 설계하여 정서적 만족감과 안정감을 제공합니다.
            </p>
          </div>

          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">사람이 먹을 수 있는 품질</h3>
            <p className="text-gray-700">
              "내가 먹을 수 없다면, 내 강아지에게 줄 수 없습니다." 모든 재료는 사람이 섭취해도 안전합니다.
            </p>
          </div>

          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Package size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">편리한 케어</h3>
            <p className="text-gray-700">
              바쁜 일상을 위한 자동 루틴 간식: 구독 모델로 하루 세 번 급여를 관리해 드립니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="aspect-video rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/354dbd0e-a0a5-4888-9ee7-ee66b04be079.png')] bg-cover bg-center"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">강아지를 위한 루틴 설계</h3>
            <p className="text-gray-700 mb-6">
              너티에서는 강아지도 루틴이 필요하다고 믿습니다. 사람과 마찬가지로 강아지도 예측 가능한 일상 리듬이 있을 때 안정감을 느끼고 만족합니다. 그래서 우리는 아침, 오후, 저녁 루틴을 위해 특별히 설계된 간식을 만들었습니다.
            </p>
            <p className="text-gray-700">
              우리의 창립자는 자신의 강아지의 행동과 건강에 규칙적인 식사 시간이 미치는 긍정적인 영향을 발견한 후, 수의사들과 협력하여 강아지의 하루 중 다양한 측면을 지원하는 간식을 디자인했습니다 - 활기찬 아침부터 차분한 저녁까지.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
