
import { Heart, Star, Package } from "lucide-react";

const BrandStory = () => {
  return (
    <section id="brand-story" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">Our Brand Story</h2>
          <p className="text-lg text-gray-700">
            We don't make anything we wouldn't give to our own family.
            Nutty was born from a simple belief: dogs deserve the same quality of food as humans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Heart size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">More Than Treats</h3>
            <p className="text-gray-700">
              We believe in designing a routine for dogs three times a day, creating emotional satisfaction and stability.
            </p>
          </div>

          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Human-Grade Quality</h3>
            <p className="text-gray-700">
              "If I can't eat it myself, I can't give it to my dog." All our ingredients are safe for human consumption.
            </p>
          </div>

          <div className="bg-nutty-light/50 rounded-xl p-8 text-center hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nutty-secondary text-nutty-accent mb-6">
              <Package size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4">Convenient Care</h3>
            <p className="text-gray-700">
              Automatic routine treats for your busy life: we handle three feedings a day for you with our subscription model.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 animate-fade-in">
            <div className="aspect-video rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901')] bg-cover bg-center"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Designing a Routine for Your Dog</h3>
            <p className="text-gray-700 mb-6">
              At Nutty, we believe that dogs thrive on routine. Just like humans, dogs feel secure and content when they have a predictable daily rhythm. That's why we've created a range of treats specifically designed for morning, afternoon, and evening routines.
            </p>
            <p className="text-gray-700">
              Our founder, after noticing the positive impact of regular feeding schedules on his own dog's behavior and health, worked with veterinarians to design treats that support different aspects of a dog's day - from energizing mornings to calming evenings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
