
import { CheckCircle } from "lucide-react";

const Transparency = () => {
  return (
    <section id="transparency" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">
            Ingredient Transparency
          </h2>
          <p className="text-lg text-gray-700">
            We believe in complete transparency. If we can't eat it, we don't give it to our dogs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-nutty-light relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560743641-3914f2c45636')] bg-cover bg-center"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-nutty-light/30 rounded-lg p-6 border-l-4 border-nutty-accent">
              <h3 className="text-xl font-bold mb-4">Human-Grade Ingredients</h3>
              <p className="text-gray-700 mb-4">
                Every ingredient in our products meets human consumption standards. We only use premium ingredients that we would eat ourselves.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>No artificial preservatives or colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>No fillers or by-products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-nutty-accent flex-shrink-0 mt-1" size={20} />
                  <span>No excessive processing or heat damage</span>
                </li>
              </ul>
            </div>

            <div className="bg-nutty-light/30 rounded-lg p-6 border-l-4 border-nutty-accent">
              <h3 className="text-xl font-bold mb-4">Clean Label Promise</h3>
              <p className="text-gray-700 mb-4">
                Our clean label promise means ingredients you recognize and can trust. We're transparent about everything that goes into our products.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <span className="text-xs font-bold text-center">QR<br/>Code</span>
                </div>
                <div>
                  <h4 className="font-bold">Scan for Complete Transparency</h4>
                  <p className="text-sm text-gray-600">Scan the QR code on our products to see detailed nutritional information and origin details</p>
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
            <h4 className="font-bold mb-2">Veterinarian Approved</h4>
            <p className="text-sm text-gray-600">Developed and approved with certified veterinary nutritionists</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h4 className="font-bold mb-2">Quality Tested</h4>
            <p className="text-sm text-gray-600">Every batch undergoes quality and safety testing before distribution</p>
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
            <h4 className="font-bold mb-2">Sustainable Sourcing</h4>
            <p className="text-sm text-gray-600">Ingredients sourced from ethical and sustainable suppliers</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h4 className="font-bold mb-2">Transparent Process</h4>
            <p className="text-sm text-gray-600">Complete visibility into our manufacturing and quality control process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
