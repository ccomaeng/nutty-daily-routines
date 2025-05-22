
import { CheckCircle } from "lucide-react";

const Transparency = () => {
  return (
    <section id="transparency" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">
            성분 투명성
          </h2>
          <p className="text-lg text-gray-700">
            저희는 완전한 투명성을 믿습니다. 우리가 먹을 수 없는 것은 강아지에게도 주지 않습니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-nutty-light relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/78b00355-6b14-417f-9711-75ba56f1609b.png')] bg-cover bg-center"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-nutty-light/30 rounded-lg p-6 border-l-4 border-nutty-accent">
              <h3 className="text-xl font-bold mb-4">사람이 먹을 수 있는 재료</h3>
              <p className="text-gray-700 mb-4">
                제품의 모든 성분은 인간 소비 기준을 충족합니다. 우리가 직접 먹을 수 있는 프리미엄 재료만을 사용합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>인공 방부제나 색소 무첨가</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>필러나 부산물 무첨가</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>과도한 가공이나 열 손상 없음</span>
                </li>
              </ul>
            </div>

            <div className="bg-nutty-light/30 rounded-lg p-6 border-l-4 border-nutty-accent">
              <h3 className="text-xl font-bold mb-4">클린 라벨 약속</h3>
              <p className="text-gray-700 mb-4">
                우리의 클린 라벨 약속은 여러분이 인식하고 신뢰할 수 있는 성분을 의미합니다. 제품에 들어가는 모든 것에 대해 투명하게 공개합니다.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-bold text-center">QR<br/>코드</span>
                </div>
                <div>
                  <h4 className="font-bold">완전한 투명성을 위한 스캔</h4>
                  <p className="text-sm text-gray-600">제품 QR 코드를 스캔하여 자세한 영양 정보와 원산지 세부 정보를 확인하세요</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in">
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h4 className="font-bold mb-2">수의사 승인</h4>
            <p className="text-sm text-gray-600">인증된 수의학 영양사와 함께 개발하고 승인받았습니다</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">품질 테스트 완료</h4>
            <p className="text-sm text-gray-600">모든 배치는 유통 전 품질과 안전성 테스트를 거칩니다</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-amber-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                <path d="M20 16s-3.5-2-8-2-8 2-8 2"></path>
                <line x1="12" y1="14" x2="12" y2="4"></line>
                <polyline points="9 10.5 12 7.5 15 10.5"></polyline>
                <path d="M4 22c1.2-1.6 3-3 6-3 1.4 0 2.7.4 3.9 1 .6-1.3 1.5-2.4 2.5-3.2" />
              </svg>
            </div>
            <h4 className="font-bold mb-2">지속 가능한 원료</h4>
            <p className="text-sm text-gray-600">윤리적이고 지속 가능한 공급업체에서 재료를 조달합니다</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 className="font-bold mb-2">투명한 프로세스</h4>
            <p className="text-sm text-gray-600">제조 및 품질 관리 과정에 대한 완전한 가시성 제공</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
