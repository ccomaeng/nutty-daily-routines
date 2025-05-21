
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock review data
const reviews = [
  {
    id: 1,
    name: "Park Minji",
    avatar: "PM",
    rating: 5,
    text: "My dog loves the routine treats! I've noticed he's much calmer in the evenings after the evening treat. The subscription is super convenient for my busy schedule.",
    dogName: "Coco",
    dogBreed: "Poodle",
    date: "2023-04-15",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    id: 2,
    name: "Kim Junho",
    avatar: "KJ",
    rating: 4,
    text: "The quality of the ingredients is amazing. My senior dog has been more energetic since starting the morning routine treats. Subscription delivery is always on time.",
    dogName: "Bori",
    dogBreed: "Shiba Inu",
    date: "2023-05-22",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: 3,
    name: "Lee Jieun",
    avatar: "LJ",
    rating: 5,
    text: "As a working mom, the routine concept has been a lifesaver. My dog knows exactly when it's treat time, and it helps structure our day. The human-grade ingredients give me peace of mind.",
    dogName: "Mango",
    dogBreed: "Corgi",
    date: "2023-06-10",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871214838",
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
            Customer Stories
          </h2>
          <p className="text-lg text-gray-700">
            See what other dog parents are saying about their Nutty routine experience.
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
                    <span className="sr-only">Previous</span>
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
                    <span className="sr-only">Next</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Follow Us on Instagram</h3>
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
              See More on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
