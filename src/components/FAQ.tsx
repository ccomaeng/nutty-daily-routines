
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-nutty-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Find answers to common questions about our products and routines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                How much should I feed my dog for the first time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                For first-time users, we recommend following the feeding guide included in your package, which is based on your dog's weight. Start with the recommended amount and adjust as needed based on your dog's activity level and response. Our treats are designed to complement your dog's regular meals, not replace them.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Are the treats suitable for dogs with allergies?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Our treats are made without common allergens like wheat, corn, and soy. However, each formula contains different ingredients, so please check the specific ingredient list for each routine treat. We clearly label all ingredients and offer options for dogs with specific dietary needs. If your dog has severe allergies, please consult with your veterinarian first.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                How does the subscription work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                After your 7-day trial, you can easily convert to a regular subscription. You'll receive a monthly supply of treats (90 treats - 3 per day for 30 days). Subscriptions are automatically renewed but can be paused, modified, or canceled at any time through your account. We send a reminder 3 days before each renewal and offer flexible delivery schedules to suit your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                What makes Nutty different from other dog treats?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Nutty is unique in our focus on creating daily routines rather than just providing treats. Each of our treats is specifically formulated for different times of day, supporting your dog's natural rhythm. We use only human-grade ingredients with full transparency, and our products are developed with veterinary nutritionists to ensure they deliver functional benefits beyond just being tasty.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Can I attend a Nutty Routine Class?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes! We regularly host Nutty Routine Classes both online and offline. These workshops help you establish healthy routines with your dog and understand the benefits of our products. Check our events page for upcoming classes, or follow us on social media for announcements. Subscribers get priority access to these limited-capacity events.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="bg-nutty-light/50 rounded-lg p-6 mt-12 text-center">
            <h3 className="font-bold text-lg mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              Our dedicated support team is here to help with any questions about our products or your subscription.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-yellow-800 px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                KakaoTalk Chat
              </a>
              <a 
                href="mailto:support@nutty.com" 
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
