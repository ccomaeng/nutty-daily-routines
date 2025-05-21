
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Package } from "lucide-react";

const RoutineKit = () => {
  return (
    <section id="routine-kit" className="section-padding bg-nutty-light/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">너티 루틴 키트</h2>
          <p className="text-lg text-gray-700">
            하루 종일 강아지를 위해 세심하게 설계된 세 가지 루틴, 
            최적의 건강과 행복을 위한 사람이 먹을 수 있는 재료로 만들어졌습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Morning Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">아침 루틴</h3>
            </div>
            <p className="text-gray-700 mb-6">
              에너지와 활력으로 하루를 시작하세요. 우리의 아침 간식은 각성과 활동을 지원하는 성분을 포함합니다.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                에너지를 위한 B 비타민 풍부
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                천연 단백질 함유
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                산책 후 보상으로 완벽
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-amber-50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Afternoon Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nutty-secondary/50 text-nutty-accent">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">오후 루틴</h3>
            </div>
            <p className="text-gray-700 mb-6">
              하루 종일 안정적인 에너지를 유지하세요. 오후 간식은 지속적인 활력과 인지 기능을 위해 균형 잡힌 영양을 제공합니다.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                인지 건강을 위한 오메가-3 함유
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                지속적인 에너지를 위한 균형 잡힌 탄수화물
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                훈련과 정신 자극에 이상적
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-nutty-light/50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Evening Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">저녁 루틴</h3>
            </div>
            <p className="text-gray-700 mb-6">
              평화롭게 하루를 마무리하세요. 우리의 저녁 간식은 반려견의 휴식과 편안한 수면을 촉진합니다.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                진정 효과가 있는 카모마일과 라벤더 함유
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                L-트립토판이 더 나은 수면을 촉진
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                밤 동안 부드러운 소화 지원
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-blue-50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1596795915943-25ae172d203c')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>

        {/* 7-day Trial Kit CTA */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-nutty-muted/20 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">7일 너티 체험 키트로 시작하세요</h3>
              <p className="text-gray-700 mb-6">
                적절한 루틴이 만드는 차이를 경험해 보세요. 7일 체험 키트에는 세 가지 일일 간식이 모두 포함되어 있어 당신과 강아지가 완전한 너티 경험을 테스트할 수 있습니다.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nutty-secondary text-nutty-accent mt-1 flex-shrink-0">
                    <Package size={18} />
                  </div>
                  <div>
                    <strong className="block text-lg">7일 완전 공급</strong>
                    <span className="text-gray-600">21개 간식 - 일주일 동안 매일 일상 루틴의 각 부분에 하나씩</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nutty-secondary text-nutty-accent mt-1 flex-shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <strong className="block text-lg">간편한 구독</strong>
                    <span className="text-gray-600">체험 후 특별 가격으로 정기 구독으로 전환</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90 py-6 px-8 text-lg">
                  7일 체험 키트 받기
                </Button>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="line-through">₩35,000</span>
                  <span className="text-nutty-accent font-bold text-lg ml-2">₩24,500</span>
                  <span className="ml-2">체험 가격</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591946614720-90a587da4a36')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              모든 제품은 수의사와 상담하여 설계되었습니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineKit;
