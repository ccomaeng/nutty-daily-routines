
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock review data
const reviews = [
  {
    id: 1,
    name: "박민지",
    avatar: "박",
    rating: 5,
    text: "우리 강아지가 루틴 간식을 너무 좋아해요! 저녁 간식 후에 훨씬 더 차분해진 걸 알 수 있어요. 바쁜 일정에 구독은 정말 편리해요.",
    dogName: "코코",
    dogBreed: "푸들",
    date: "2023-04-15",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee",
  },
  {
    id: 2,
    name: "김준호",
    avatar: "김",
    rating: 4,
    text: "성분의 품질이 정말 놀라워요. 제 노견이 아침 루틴 간식을 먹기 시작한 이후로 더 활발해졌어요. 구독 배송은 항상 정시에 도착합니다.",
    dogName: "보리",
    dogBreed: "시바견",
    date: "2023-05-22",
    image: "https://images.unsplash.com/photo-1546975490-e8b92a360b24",
  },
  {
    id: 3,
    name: "이지은",
    avatar: "이",
    rating: 5,
    text: "직장맘으로서 루틴 컨셉이 정말 구세주예요. 우리 강아지는 간식 시간이 언제인지 정확히 알고, 이게 우리 하루를 구조화하는 데 도움이 됩니다. 사람이 먹을 수 있는 재료는 안심이 돼요.",
    dogName: "망고",
    dogBreed: "웰시코기",
    date: "2023-06-10",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e",
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-nutty-light/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">
            고객 이야기
          </h2>
          <p className="text-lg text-gray-700">
            다른 강아지 보호자들이 너티 루틴 경험에 대해 이야기하는 것을 들어보세요.
          </p>
        </div>

        <div className="relative mb-16">
          {/* Review carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${reviews[currentIndex].image})` }}></div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < reviews[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 italic">
                "{reviews[currentIndex].text}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-nutty-secondary flex items-center justify-center text-nutty-accent font-bold">
                  {reviews[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-bold">{reviews[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">
                    {reviews[currentIndex].dogName} ({reviews[currentIndex].dogBreed})
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500">{reviews[currentIndex].date}</p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full"
                    onClick={prevReview}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <span className="sr-only">이전</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-8 w-8 rounded-full"
                    onClick={nextReview}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span className="sr-only">다음</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">인스타그램에서 팔로우하세요</h3>
            <p className="text-gray-700">#하루하루너티</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center hover:scale-110 transition-transform duration-300" 
                  style={{ backgroundImage: `url(${reviews[i % reviews.length].image})` }}
                ></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-nutty-accent text-nutty-accent hover:bg-nutty-light">
              인스타그램에서 더 보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
