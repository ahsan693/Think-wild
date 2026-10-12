import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import CtaOrbitSection from '@/app/components/home/cta-orbit-section';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import {
  ABOUT_HERO_DATA,
  ABOUT_STORY_DATA,
  ABOUT_VALUES_DATA,
  CREATIVE_PARTNERSHIP_DATA,
} from '@/lib/data/aboutdata';
import { CTA_ORBIT_DATA } from '@/lib/data/ctaorbitdata';

export default function AboutPage() {
  const valuesTickerItems = [...ABOUT_VALUES_DATA.ticker, ...ABOUT_VALUES_DATA.ticker, ...ABOUT_VALUES_DATA.ticker];

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip font-[family-name:var(--font-saans)]">
      <Header />

      {/* =========================================
          ABOUT HERO SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[180px] pb-[100px] px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1280px] gap-[80px]">
          
          <div className="flex flex-col items-start w-full lg:w-[600px] shrink-0">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[40px]">
              <span className="text-[14px] font-medium text-white">
                {ABOUT_HERO_DATA.eyebrow}
              </span>
            </div>

            <h1 
              className="font-bricolage text-[120px] font-semibold leading-[90px] tracking-[-0.06em] uppercase text-white whitespace-pre-line mb-[12px]"
            >
              {ABOUT_HERO_DATA.heading}
            </h1>

            <div className={`flex items-center justify-center ${ABOUT_HERO_DATA.highlightBackground} w-[460px] h-[120px] rounded-[100px] mb-[30px]`}>
              <span 
                className="font-bricolage text-[120px] font-semibold leading-[120px] tracking-[-0.06em] uppercase text-white translate-y-[4px]"
              >
                {ABOUT_HERO_DATA.highlight}
              </span>
            </div>

            <p className="text-[#9F9F9F] text-[17.7px] font-medium leading-[20.8px] max-w-[612px] mb-[40px]">
              {ABOUT_HERO_DATA.description}
            </p>

            <button className="flex items-center h-[52px] w-[186px] bg-white rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                {ABOUT_HERO_DATA.action}
              </span>
            </button>
          </div>

          <div className="relative w-full lg:w-[600px] h-[560px] shrink-0 flex items-center justify-center">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[294px] h-[320px] rounded-[24px] overflow-hidden opacity-60">
              <img src={ABOUT_HERO_DATA.images.bgLeft} alt={ABOUT_HERO_DATA.images.backgroundLeftAlt} className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[294px] h-[320px] rounded-[24px] overflow-hidden opacity-60">
              <img src={ABOUT_HERO_DATA.images.bgRight} alt={ABOUT_HERO_DATA.images.backgroundRightAlt} className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 w-[232px] h-[484px] bg-black rounded-[41.44px] overflow-hidden border-[6px] border-[#1D1D1D] shadow-2xl shadow-black/50 flex flex-col">
              <img 
                src={ABOUT_HERO_DATA.images.phoneVideo} 
                alt={ABOUT_HERO_DATA.images.phoneAlt}
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between">
                <div className="w-full h-[40px] bg-gradient-to-b from-black/60 to-transparent flex justify-center">
                  <div className="w-[80px] h-[20px] bg-black rounded-b-[14px]"></div>
                </div>

                <div className="absolute right-[8px] bottom-[140px] flex flex-col items-center gap-[12px]">
                  {ABOUT_HERO_DATA.engagement.map((metric) => {
                    const EngagementIcon = metric.icon;

                    return (
                      <div key={metric.value} className="flex flex-col items-center">
                        <div className={`${metric.containerClassName} mb-1`}>
                          <EngagementIcon
                            className={`w-[20px] h-[20px] ${metric.iconClassName}`}
                            strokeWidth={metric.strokeWidth}
                          />
                        </div>
                        <span className="text-[9px] font-medium text-white">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="w-full h-[180px] bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-[14px] pb-[20px]">
                  <div className="flex items-center gap-[6px] mb-[6px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-red-500 overflow-hidden shrink-0 border border-white">
                       <img src={ABOUT_HERO_DATA.images.phoneVideo} alt={ABOUT_HERO_DATA.images.avatarAlt} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-semibold text-white">{ABOUT_HERO_DATA.images.author}</span>
                    <BadgeCheck className="w-[12px] h-[12px] text-blue-500 fill-white" />
                  </div>
                  <p className="text-[10px] text-white/90 leading-[13px]">
                    {ABOUT_HERO_DATA.images.caption}
                  </p>
                  
                  <div className="flex justify-center gap-1 mt-[16px]">
                    {ABOUT_HERO_DATA.carouselDots.map((dot) => (
                      <div
                        key={dot.label}
                        aria-label={dot.label}
                        className={`w-1.5 h-1.5 rounded-full ${dot.active ? 'bg-white' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          OUR STORY SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[50px] pb-[100px] px-4 overflow-hidden">
        <div className="relative flex flex-col items-center justify-center w-full max-w-[1340px] h-[430.02px] px-[30px]">
          
          <div className={`absolute left-0 top-[20%] w-[180px] h-[180px] rounded-[30px] p-[30px] flex flex-col items-center justify-center gap-[29px] rotate-[16deg] shadow-2xl ${ABOUT_STORY_DATA.cards.left.bgColor} ${ABOUT_STORY_DATA.cards.left.textColor} pointer-events-none`}>
            <span className="font-bricolage text-[70px] font-bold leading-none tracking-[-0.04em]">
              {ABOUT_STORY_DATA.cards.left.stat}
            </span>
            <span className="text-[16px] font-medium text-center leading-snug whitespace-pre-line">
              {ABOUT_STORY_DATA.cards.left.label}
            </span>
          </div>

          <div className={`absolute right-0 top-[30%] w-[180px] h-[180px] rounded-[30px] p-[30px] flex flex-col items-center justify-center gap-[29px] -rotate-[16deg] shadow-2xl ${ABOUT_STORY_DATA.cards.right.bgColor} ${ABOUT_STORY_DATA.cards.right.textColor} pointer-events-none`}>
            <div className="flex items-center gap-[8px]">
              <span className="font-bricolage text-[70px] font-bold leading-none tracking-[-0.04em]">
                {ABOUT_STORY_DATA.cards.right.stat}
              </span>
              <ABOUT_STORY_DATA.cards.right.icon className={`w-[32px] h-[32px] ${ABOUT_STORY_DATA.cards.right.iconClassName}`} />
            </div>
            <span className="text-[16px] font-medium text-center leading-snug whitespace-pre-line mt-[-10px]">
              {ABOUT_STORY_DATA.cards.right.label}
            </span>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-[752px] gap-[30px] z-10">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20">
              <span className="text-[14px] font-medium text-white">
                {ABOUT_STORY_DATA.eyebrow}
              </span>
            </div>

            <h2
              className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white whitespace-pre-line"
            >
              {ABOUT_STORY_DATA.heading}
            </h2>

            <div className="flex flex-col gap-[16px]">
              {ABOUT_STORY_DATA.paragraphs.map((text, idx) => (
                <p key={idx} className="text-[#9F9F9F] text-[17.6px] font-medium leading-[20.8px]">
                  {text}
                </p>
              ))}
            </div>

            <button className="flex items-center justify-between h-[52px] w-[263px] bg-white rounded-full pl-[6px] pr-[32px] py-[6px] hover:bg-gray-200 transition-colors mt-[10px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                {ABOUT_STORY_DATA.action}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          VALUES SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[100px] pb-[100px] px-4">
        <div className="w-full max-w-[1280px] px-0 lg:px-[210px] flex flex-col items-center gap-[60px]">

          <div className="flex flex-col items-center w-full max-w-[900px]">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[40px]">
              <span className="text-[14px] font-medium text-white">
                {ABOUT_VALUES_DATA.eyebrow}
              </span>
            </div>

            <h2
              className="flex flex-col items-center text-center text-[70px] leading-[63px] font-semibold uppercase tracking-[-0.03em] text-white mb-[30px]"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {ABOUT_VALUES_DATA.headingRows.map((row, rowIndex) => (
                <span
                  key={rowIndex}
                  className={`flex items-center justify-center gap-[16px] ${rowIndex > 0 ? 'mt-[12px]' : ''}`}
                >
                  {row.map((part) => (
                    <span
                      key={part.text}
                      className={part.className
                        ? `inline-flex items-center justify-center h-[70px] rounded-[100px] px-[24px] pb-[4px] ${part.className}`
                        : ''}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <div className="flex items-center justify-center gap-[12px] flex-wrap">
              {valuesTickerItems.map((platform, idx) => (
                <div key={idx} className="flex items-center h-[32px] bg-[#1A1A1A] border border-white/10 rounded-full pl-[8px] pr-[14px] py-[4px] gap-[6px] shrink-0">
                  <div className={`flex items-center justify-center w-[20px] h-[20px] rounded-full ${platform.bgColor}`}>
                    <platform.icon className={`w-3 h-3 ${platform.iconClassName}`} />
                  </div>
                  <span className="text-white font-medium text-[12px]">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[15px] gap-y-[17px] w-full max-w-[860px]">
            {ABOUT_VALUES_DATA.cards.map((card, idx) => {
              const heightClass = idx < 2 ? 'md:h-[317.12px]' : 'md:h-[283.98px]';

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center justify-center w-full md:w-[422.5px] ${heightClass} py-[47px] px-[40px] rounded-[30px] ${card.bgColor}`}
                >
                  <div className="w-[48px] h-[48px] bg-[#1D1D1D] rounded-[12px] flex items-center justify-center text-white mb-[24px] shrink-0">
                    <card.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bricolage text-[28px] font-bold text-black mb-[12px] leading-[1]">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-medium text-black/80 leading-[22px] max-w-[280px]">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          CREATIVE PARTNERSHIP SECTION
      ========================================= */}
      <section className="w-full flex justify-center px-4 pt-[50px] pb-[100px]">
        {/* Main Wrapper: 1200px wide, borders top & bottom, 110px vertical padding[cite: 117] */}
        <div className="w-full max-w-[1200px] border-y border-[#2C2C29] py-[110px] flex flex-col md:flex-row items-start justify-between gap-[77px]">

          {/* Left Block: 481px wide[cite: 119] */}
          <div className="flex flex-col w-full md:w-[481px] shrink-0">
            {/* Heading: 70px font, 63px line-height, -3% tracking[cite: 119] */}
            <h2
              className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white whitespace-pre-line mb-[24px]"
            >
              {CREATIVE_PARTNERSHIP_DATA.heading}
            </h2>

            {/* Description: 17.6px font, 20.8px line-height[cite: 120] */}
            <p className="text-[#9F9F9F] text-[17.6px] font-medium leading-[20.8px] mb-[40px]">
              {CREATIVE_PARTNERSHIP_DATA.description}
            </p>

            {/* Action Button */}
            <button className="flex items-center h-[52px] bg-white rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors w-max">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                {CREATIVE_PARTNERSHIP_DATA.action}
              </span>
            </button>
          </div>

          {/* Right Block (List): 561.5px wide[cite: 120] */}
          <div className="flex flex-col w-full md:w-[561.5px] shrink-0">
            {CREATIVE_PARTNERSHIP_DATA.list.map((item, idx) => (
              <div
                key={idx}
                // Bottom border, 35px bottom padding, 50px left padding for the number[cite: 122]
                className="relative flex flex-col pb-[35px] mb-[35px] border-b border-[#2C2C29] last:border-0 last:mb-0 last:pb-0 pl-[50px]"
              >
                {/* Number positioned absolutely on the left */}
                <span className="absolute left-0 top-1 text-[#8CFE79] text-[14px] font-bold">
                  {item.num}
                </span>

                {/* Title & Desc */}
                <h3 className="font-bricolage text-[32px] font-bold uppercase text-white leading-tight mb-[12px]">
                  {item.title}
                </h3>
                <p className="text-[#9F9F9F] text-[16px] font-medium leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaOrbitSection data={CTA_ORBIT_DATA.about} />

      {/* Adding Footer at the bottom */}
      <Footer />
    </main>
  );
}