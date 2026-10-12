"use client";

import { useState } from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import CtaOrbitSection from '@/app/components/home/cta-orbit-section';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { CTA_ORBIT_DATA } from '@/lib/data/ctaorbitdata';

// Import all separated data
import { 
  SERVICES_HERO_DATA, 
  SERVICE_CARDS_DATA, 
  SERVICES_TEAM_DATA, 
  OUR_APPROACH_DATA, 
  SERVICES_FAQ_DATA 
} from '@/lib/data/servicedata';

export default function ServicesPage() {
  // State for handling the interactive FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First item open by default

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip font-[family-name:var(--font-saans)]">
      <Header />

      {/* =========================================
          SERVICES HERO SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[180px] pb-[100px] px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-[1280px] min-h-[425px]">
          <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[40px]">
            <span className="type-113 text-white">
              {SERVICES_HERO_DATA.eyebrow}
            </span>
          </div>

          <h1 className="type-004 mb-[32px] flex flex-col items-center text-center text-white">
            <span>{SERVICES_HERO_DATA.headingLine1}</span>
            <span className="flex items-center justify-center gap-[20px] mt-[8px]">
              <span>{SERVICES_HERO_DATA.headingLine2Start}</span>
              <span className="inline-flex items-center justify-center bg-[#1A71FF] text-white rounded-[100px] px-[32px] pb-[8px] h-[109px]">
                {SERVICES_HERO_DATA.headingHighlight}
              </span>
            </span>
          </h1>

          <p className="type-059 mb-[40px] max-w-[795px] text-center text-white">
            {SERVICES_HERO_DATA.description}
          </p>

          <button className="flex items-center h-[52px] w-[194px] bg-white rounded-full pl-[6px] pr-[32px] py-[6px] gap-[10px] hover:bg-gray-200 transition-colors">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="text-[#1D1D1D] font-medium text-[16px]">
              {SERVICES_HERO_DATA.action}
            </span>
          </button>
        </div>
      </section>

      {/* =========================================
          SERVICE CARDS SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pb-[100px] px-4">
        <div className="flex flex-col w-full max-w-[1200px] gap-[60px]">
          {SERVICE_CARDS_DATA.map((card) => (
            <div 
              key={card.id} 
              className={`flex flex-col lg:flex-row w-full rounded-[24px] p-[30px] lg:p-[60px] gap-[40px] lg:gap-[60px] ${card.bgColor} text-black`}
            >
              <div className={`flex flex-col w-full lg:max-w-[482px] ${!card.imageRight ? 'lg:order-2' : ''}`}>
                <span className="text-[14px] font-medium mb-[12px]">{card.eyebrow}</span>
                <h2 className="type-017 mb-[24px] whitespace-pre-line">
                  {card.title}
                </h2>
                <p className="type-088 mb-[40px] max-w-[402px]">
                  {card.description}
                </p>

                <div className="flex flex-col w-full lg:max-w-[410px]">
                  <h3 className="text-[18px] font-bold mb-[16px]">{card.listHeading}</h3>
                  <div className="flex flex-col">
                    {card.listItems.map((item, i) => (
                      <div key={i} className="type-099 border-b border-black/10 py-[16px] last:border-0">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="flex items-center h-[52px] w-[194px] bg-black rounded-full pl-[6px] pr-[32px] py-[6px] gap-[10px] hover:bg-zinc-800 transition-colors mt-[40px]">
                  <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-white font-medium text-[16px]">
                    {card.action}
                  </span>
                </button>
              </div>

              <div className={`flex-1 flex items-center justify-center w-full min-h-[400px] lg:min-h-[531px] ${!card.imageRight ? 'lg:order-1' : ''}`}>
                <div className="w-full max-w-[516px] h-full rounded-[20px] overflow-hidden bg-black/5">
                  <img 
                    src={card.imageSrc} 
                    alt={card.eyebrow} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          CONTENT APPROACH / TEAM EXPERIENCE
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[70px] pb-[110px] px-4 xl:px-[120px]">
        <div className="flex flex-col items-center w-full max-w-[1200px] gap-[60px]">
          <div className="flex flex-col items-center gap-[24px]">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-[100px] border border-white/20">
              <span className="type-113 text-white">{SERVICES_TEAM_DATA.eyebrow}</span>
            </div>
            <h2 className="type-015 max-w-[664px] whitespace-pre-line text-center text-white">
              {SERVICES_TEAM_DATA.heading}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between gap-[30px]">
            {SERVICES_TEAM_DATA.cards.map((card, idx) => (
              <div 
                key={idx}
                className={`flex flex-col justify-between w-full lg:w-[277.5px] h-[206.69px] rounded-[30px] p-[20px] ${card.bgColor} ${card.textColor} shrink-0`}
              >
                <span className="type-113 whitespace-pre-line">
                  {card.title}
                </span>
                <span className="type-011 mt-auto self-end text-right">
                  {card.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          OUR APPROACH SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[100px] pb-[150px] px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-[1290px] gap-[60px]">
          
          <div className="flex flex-col items-center gap-[32px] w-full">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-[100px] border border-white/20">
              <span className="type-113 text-white">{OUR_APPROACH_DATA.eyebrow}</span>
            </div>
            
            <h2 className="type-015 whitespace-pre-line text-center text-white">
              {OUR_APPROACH_DATA.heading}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between gap-[40px] lg:gap-[60px]">
            {OUR_APPROACH_DATA.items.map((item, idx) => (
              <div key={idx} className="flex flex-col w-full lg:w-[390px] shrink-0 gap-[24px]">
                <div className="w-full h-[452px] rounded-[24px] overflow-hidden bg-white/5">
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col max-w-[365px] gap-[12px]">
                  <h3 className="text-[24px] font-bold text-white leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#9F9F9F] text-[15px] font-medium leading-[22px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[50px] pb-[150px] px-4 bg-black overflow-x-clip">
        <div className="w-full max-w-[1418px] flex flex-col items-center">

          <div className="flex flex-col w-full max-w-[945px] items-center">
            
            <div className="w-full max-w-[916.84px] px-0 lg:px-[73px] mb-[80px]">
              <h2
                className="type-015 text-center text-white"
              >
                {SERVICES_FAQ_DATA.heading.split('\n').map((line) => <span key={line} className="block">{line}</span>)}
              </h2>
            </div>

            <div className="flex flex-col w-full">
              {SERVICES_FAQ_DATA.items.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                
                return (
                  <div
                    key={index}
                    className="flex flex-col w-full border-b border-white/10 py-[32px] transition-colors duration-300"
                  >
                    <div 
                      className="flex items-center justify-between gap-[20px] cursor-pointer"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <h3 className="type-038 text-white">
                        {faq.question}
                      </h3>
                      
                      <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 shrink-0 text-white transition-transform">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </div>
                    
                    {isOpen && (
                      <div className="w-full max-w-[836.84px] mt-[16px]">
                        <p className="type-088 text-[#9F9F9F]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </section>

      <CtaOrbitSection data={CTA_ORBIT_DATA.services} />

      <Footer />
    </main>
  );
}