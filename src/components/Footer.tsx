
interface FooterProps {
  language: "en" | "ko";
}

const Footer = ({ language }: FooterProps) => {
  const translations = {
    en: {
      companyInfo: "Designing a routine for your dog three times a day with human-grade ingredients.",
      quickLinks: "Quick Links",
      brandStory: "Brand Story",
      routineKit: "Routine Kit",
      ingredients: "Ingredients",
      reviews: "Reviews",
      faq: "FAQ",
      support: "Customer Support",
      contact: "Contact Us",
      shipping: "Shipping Policy",
      returns: "Returns & Refunds",
      subscriptionFaq: "Subscription FAQ",
      stayUpdated: "Stay Updated",
      subscribeText: "Subscribe to our newsletter for new products, events, and special offers.",
      emailPlaceholder: "Your email",
      join: "Join",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies Policy"
    },
    ko: {
      companyInfo: "사람이 먹을 수 있는 재료로 하루 세 번 강아지를 위한 루틴을 디자인합니다.",
      quickLinks: "빠른 링크",
      brandStory: "브랜드 스토리",
      routineKit: "루틴 키트",
      ingredients: "성분",
      reviews: "리뷰",
      faq: "FAQ",
      support: "고객 지원",
      contact: "문의하기",
      shipping: "배송 정책",
      returns: "반품 및 환불",
      subscriptionFaq: "구독 FAQ",
      stayUpdated: "소식 받기",
      subscribeText: "새로운 제품, 이벤트 및 특별 혜택에 대한 뉴스레터를 구독하세요.",
      emailPlaceholder: "이메일 주소",
      join: "구독",
      rights: "모든 권리 보유.",
      privacy: "개인정보 처리방침",
      terms: "이용약관",
      cookies: "쿠키 정책"
    }
  };

  const t = translations[language];
  const brandName = language === "en" ? "Nutty" : "너티";

  return (
    <footer className="bg-nutty-foreground text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{brandName}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.companyInfo}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#brand-story" className="text-gray-300 hover:text-white transition-colors">{t.brandStory}</a></li>
              <li><a href="#routine-kit" className="text-gray-300 hover:text-white transition-colors">{t.routineKit}</a></li>
              <li><a href="#transparency" className="text-gray-300 hover:text-white transition-colors">{t.ingredients}</a></li>
              <li><a href="#reviews" className="text-gray-300 hover:text-white transition-colors">{t.reviews}</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">{t.faq}</a></li>
            </ul>
          </div>
          
          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t.support}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.contact}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.shipping}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.returns}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t.subscriptionFaq}</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-4">{t.stayUpdated}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.subscribeText}
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-nutty-accent text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90"
              >
                {t.join}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {brandName}. {t.rights}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.cookies}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
