
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Package } from "lucide-react";

const RoutineKit = () => {
  return (
    <section id="routine-kit" className="section-padding bg-nutty-light/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">Nutty Routine Kit</h2>
          <p className="text-lg text-gray-700">
            Three routines carefully designed for your dog throughout the day,
            made with human-grade ingredients for optimal health and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Morning Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Morning Routine</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Start the day with energy and vitality. Our morning treats contain ingredients that support alertness and activity.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Rich in B vitamins for energy
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Contains natural proteins
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Perfect as a post-walk reward
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-amber-50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1534361960057-19889db9621e')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Afternoon Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-nutty-secondary/50 text-nutty-accent">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Afternoon Routine</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Maintain steady energy throughout the day. Afternoon treats provide balanced nutrition for sustained vitality and cognitive function.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                Contains omega-3 for cognitive health
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                Balanced carbohydrates for sustained energy
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-nutty-accent"></span>
                Ideal for training and mental stimulation
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-nutty-light/50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1546975490-e8b92a360b24')] bg-cover bg-center"></div>
            </div>
          </div>

          {/* Evening Routine */}
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold">Evening Routine</h3>
            </div>
            <p className="text-gray-700 mb-6">
              End the day peacefully. Our evening treats promote relaxation and restful sleep for your companion.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Contains calming chamomile and lavender
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                L-tryptophan promotes better sleep
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Supports gentle digestion throughout the night
              </li>
            </ul>
            <div className="aspect-video rounded-lg overflow-hidden bg-blue-50 mb-4">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1544212575-6e8f6c902d64')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>

        {/* 7-day Trial Kit CTA */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-nutty-muted/20 animate-fade-in">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Started With Our 7-Day Nutty Trial Kit</h3>
              <p className="text-gray-700 mb-6">
                Experience the difference a proper routine can make. The 7-day trial kit includes all three daily treats, allowing you and your dog to test the complete Nutty experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nutty-secondary text-nutty-accent mt-1 flex-shrink-0">
                    <Package size={18} />
                  </div>
                  <div>
                    <strong className="block text-lg">Complete 7-Day Supply</strong>
                    <span className="text-gray-600">21 treats - one for each part of the daily routine for a week</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-nutty-secondary text-nutty-accent mt-1 flex-shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <strong className="block text-lg">Easy Subscription</strong>
                    <span className="text-gray-600">Convert to a regular subscription at a special price after your trial</span>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-nutty-accent text-white hover:bg-nutty-accent/90 py-6 px-8 text-lg">
                  Get 7-Day Trial Kit
                </Button>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="line-through">$35.00</span>
                  <span className="text-nutty-accent font-bold text-lg ml-2">$24.50</span>
                  <span className="ml-2">trial price</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              All products are designed in consultation with veterinarians
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutineKit;
