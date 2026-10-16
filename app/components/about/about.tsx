import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import SocialTicker from '@/app/components/social-ticker';
import CtaOrbitSection from '@/app/components/home/cta-orbit-section';
import ScrollAnimations from '@/app/components/scroll-animations';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import {
  ABOUT_HERO_DATA,
  ABOUT_TEAM_EXPERIENCE_DATA,
  ABOUT_STORY_DATA,
  ABOUT_VALUES_DATA,
  CREATIVE_PARTNERSHIP_DATA,
} from '@/lib/data/aboutdata';
import { CTA_ORBIT_DATA } from '@/lib/data/ctaorbitdata';

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip font-[family-name:var(--font-saans)]">
      <ScrollAnimations variant="sequence" />
      <Header />

      {/* =========================================
          ABOUT HERO SECTION
      ========================================= */}
      <section className="min-h-[455px] w-full flex flex-col items-center pt-[30px] pb-[24px] px-[15px] md:min-h-0 md:pt-[180px] md:pb-[100px] md:px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1280px] gap-0 md:gap-[80px]">
          
          <div className="flex flex-col items-start w-full lg:w-[600px] shrink-0">
            <div data-hero-support className="flex items-center justify-center px-[12px] py-[4px] rounded-full border border-white/20 mb-[8px] md:px-[20px] md:py-[6px] md:mb-[40px]">
              <span className="type-113 text-white">
                {ABOUT_HERO_DATA.eyebrow}
              </span>
            </div>

            <h1 
              className="about-hero-title type-004 mb-[4px] whitespace-pre-line text-white md:mb-[12px]"
            >
              <span className="scroll-text-mask hidden md:block">
                <span data-hero-line className="block">{ABOUT_HERO_DATA.heading}</span>
              </span>
              <span className="scroll-text-mask block whitespace-pre-line md:hidden">
                <span data-hero-line className="block">
                  {ABOUT_HERO_DATA.heading.replace('BRANDS WORTH', 'BRANDS\nWORTH')}
                </span>
              </span>
            </h1>

            <div data-hero-highlight className={`about-hero-highlight-wrap flex items-center justify-center ${ABOUT_HERO_DATA.highlightBackground} w-max max-w-full h-[56px] rounded-[100px] px-[12px] mb-[8px] md:w-[460px] md:h-[120px] md:px-0 md:mb-[30px]`}>
              <span 
                className="about-hero-highlight type-005 translate-y-[1px] text-white md:translate-y-[4px]"
              >
                {ABOUT_HERO_DATA.highlight}
              </span>
            </div>

            <p data-hero-support className="about-hero-description type-060 mb-[8px] max-w-[360px] text-[#9F9F9F] md:mb-[40px] md:max-w-[612px]">
              {ABOUT_HERO_DATA.description}
            </p>

            <button data-hero-support className="flex items-center h-[52px] w-[186px] bg-white rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="type-087 text-[#1D1D1D]">
                {ABOUT_HERO_DATA.action}
              </span>
            </button>
          </div>

          <div data-sequence-hero-image className="relative flex max-md:hidden w-full lg:w-[600px] h-[560px] shrink-0 items-center justify-center">
            <div data-sequence-image className="absolute left-0 top-1/2 -translate-y-1/2 w-[294px] h-[320px] rounded-[24px] overflow-hidden opacity-60">
              <img src={ABOUT_HERO_DATA.images.bgLeft} alt={ABOUT_HERO_DATA.images.backgroundLeftAlt} className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>

            <div data-sequence-image className="absolute right-0 top-1/2 -translate-y-1/2 w-[294px] h-[320px] rounded-[24px] overflow-hidden opacity-60">
              <img src={ABOUT_HERO_DATA.images.bgRight} alt={ABOUT_HERO_DATA.images.backgroundRightAlt} className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
            </div>

            <div data-sequence-image className="relative z-10 w-[232px] h-[484px] bg-black rounded-[41.44px] overflow-hidden border-[6px] border-[#1D1D1D] shadow-2xl shadow-black/50 flex flex-col">
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

      <section
        data-sequence-section
        aria-labelledby="about-team-experience-heading"
        className="flex min-h-[960px] w-full justify-center px-4 pt-[50px] pb-[50px] md:min-h-0 md:pt-0"
      >
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-[40px] md:gap-[80px]">
          <div data-sequence-item className="flex flex-col items-center gap-[20px] text-center">
            <span className="about-team-eyebrow type-087 rounded-full border border-white/40 px-[14px] py-[4px] text-white md:px-[20px] md:py-[6px]">
              {ABOUT_TEAM_EXPERIENCE_DATA.eyebrow}
            </span>
            <h2
              id="about-team-experience-heading"
              className="about-team-heading type-015 whitespace-pre-line text-white"
            >
              {ABOUT_TEAM_EXPERIENCE_DATA.heading}
            </h2>
          </div>

          <div data-sequence-item className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4 md:gap-[30px]">
            {ABOUT_TEAM_EXPERIENCE_DATA.cards.map((card) => (
              <div
                key={card.value}
                className={`about-team-card flex h-[160px] flex-col justify-between rounded-[20px] p-[24px] md:h-[225.59px] md:p-[30px] ${card.backgroundColor} ${card.textColor}`}
              >
                <p data-sequence-text className="about-team-card-label type-136">{card.label}</p>
                <p data-sequence-text className="about-team-card-value type-014 self-end text-right">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          OUR STORY SECTION
      ========================================= */}
      <section data-sequence-section className="w-full flex flex-col items-center overflow-hidden px-0 pt-0 pb-0 md:px-4 md:pt-[50px] md:pb-[100px]">
        <div className="relative flex min-h-[687px] flex-col items-center justify-center w-full max-w-[1340px] px-[20px] pt-[205px] md:h-[430.02px] md:min-h-0 md:px-[30px] md:pt-0">
          
          <div data-sequence-item className={`absolute left-[-10px] top-[42px] w-[170px] h-[112px] rounded-[18px] p-[12px] flex flex-col items-center justify-center gap-[6px] rotate-[16deg] shadow-2xl md:left-0 md:top-[20%] md:w-[180px] md:h-[180px] md:rounded-[30px] md:p-[30px] md:gap-[29px] ${ABOUT_STORY_DATA.cards.left.bgColor} ${ABOUT_STORY_DATA.cards.left.textColor} pointer-events-none`}>
            <span data-sequence-text className="about-story-stat type-014">
              {ABOUT_STORY_DATA.cards.left.stat}
            </span>
            <span data-sequence-text className="about-story-stat-label type-087 whitespace-pre-line text-center">
              {ABOUT_STORY_DATA.cards.left.label}
            </span>
          </div>

          <div data-sequence-item className={`absolute right-[-10px] top-[55px] w-[170px] h-[112px] rounded-[18px] p-[12px] flex flex-col items-center justify-center gap-[6px] -rotate-[16deg] shadow-2xl md:right-0 md:top-[30%] md:w-[180px] md:h-[180px] md:rounded-[30px] md:p-[30px] md:gap-[29px] ${ABOUT_STORY_DATA.cards.right.bgColor} ${ABOUT_STORY_DATA.cards.right.textColor} pointer-events-none`}>
            <div className="flex items-center gap-[8px]">
              <span data-sequence-text className="about-story-stat type-014">
                {ABOUT_STORY_DATA.cards.right.stat}
              </span>
              <ABOUT_STORY_DATA.cards.right.icon className={`w-[22px] h-[22px] md:w-[32px] md:h-[32px] ${ABOUT_STORY_DATA.cards.right.iconClassName}`} />
            </div>
            <span data-sequence-text className="about-story-stat-label type-087 mt-[-4px] whitespace-pre-line text-center md:mt-[-10px]">
              {ABOUT_STORY_DATA.cards.right.label}
            </span>
          </div>

          <div data-sequence-item className="flex flex-col items-center text-center w-full max-w-[752px] gap-[18px] z-10 md:gap-[30px]">
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20">
              <span data-sequence-text className="type-113 text-white">
                {ABOUT_STORY_DATA.eyebrow}
              </span>
            </div>

            <h2 data-sequence-text className="about-story-heading type-015 text-white">
              <span className="hidden whitespace-pre-line md:block">
                {ABOUT_STORY_DATA.heading}
              </span>
              <span className="md:hidden">
                {ABOUT_STORY_DATA.mobileHeading.map((line) => (
                  <span key={line} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            </h2>

            <div className="flex flex-col gap-[16px]">
              {ABOUT_STORY_DATA.paragraphs.map((text, idx) => (
                <p key={idx} data-sequence-text className="about-story-copy type-066 text-[#9F9F9F]">
                  {text}
                </p>
              ))}
            </div>

            <button data-sequence-text className="flex items-center justify-between h-[52px] w-[263px] bg-white rounded-full pl-[6px] pr-[32px] py-[6px] hover:bg-gray-200 transition-colors mt-[10px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="type-087 text-[#1D1D1D]">
                {ABOUT_STORY_DATA.action}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          VALUES SECTION
      ========================================= */}
      <section data-sequence-section className="min-h-[1026px] w-full flex flex-col items-center pt-0 pb-0 px-4 md:min-h-0 md:pt-[100px] md:pb-[100px]">
        <div className="w-full max-w-[1280px] px-0 lg:px-[210px] flex flex-col items-center gap-[24px] md:gap-[60px]">

          <div data-sequence-item className="flex flex-col items-center w-full max-w-[900px]">
            <div className="flex items-center justify-center px-[14px] py-[4px] rounded-full border border-white/20 mb-[20px] md:px-[20px] md:py-[6px] md:mb-[40px]">
              <span data-sequence-text className="type-113 text-white">
                {ABOUT_VALUES_DATA.eyebrow}
              </span>
            </div>

            <h2
              data-sequence-text
              className="about-values-heading type-015 mb-[16px] flex flex-col items-center text-center text-white md:mb-[30px]"
            >
              {ABOUT_VALUES_DATA.headingRows.map((row, rowIndex) => (
                <span
                  key={rowIndex}
                  className={`flex items-center justify-center gap-[5px] md:gap-[16px] ${rowIndex > 0 ? 'mt-[4px] md:mt-[12px]' : ''}`}
                >
                  {row.map((part) => (
                    <span
                      key={part.text}
                      className={part.className
                        ? `inline-flex items-center justify-center h-[32px] rounded-[100px] px-[9px] pb-[1px] md:h-[70px] md:px-[24px] md:pb-[4px] ${part.className}`
                        : ''}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <SocialTicker />
          </div>

          <div data-sequence-item className="grid grid-cols-1 md:grid-cols-2 gap-x-[15px] gap-y-[12px] md:gap-y-[17px] w-full max-w-[860px]">
            {ABOUT_VALUES_DATA.cards.map((card, idx) => {
              const heightClass = idx < 2 ? 'md:h-[317.12px]' : 'md:h-[283.98px]';

              return (
                <div
                  key={idx}
                  className={`about-values-card flex h-[190px] flex-col items-center text-center justify-center w-full md:w-[422.5px] ${heightClass} py-[20px] px-[20px] rounded-[20px] md:py-[47px] md:px-[40px] md:rounded-[30px] ${card.bgColor}`}
                >
                  <div className="w-[40px] h-[40px] bg-[#1D1D1D] rounded-[10px] flex items-center justify-center text-white mb-[16px] shrink-0 md:w-[48px] md:h-[48px] md:rounded-[12px] md:mb-[24px]">
                    <card.icon size={20} strokeWidth={2.5} />
                  </div>
                  <h3 data-sequence-text className="about-values-card-title font-heading mb-[8px] text-[20px] font-bold leading-[1] text-black md:mb-[12px] md:text-[28px]">
                    {card.title}
                  </h3>
                  <p data-sequence-text className="about-values-card-description type-101 max-w-[280px] text-black/80">
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
      <section data-sequence-section className="w-full flex justify-center px-0 pt-0 pb-0 md:px-4 md:pt-[50px] md:pb-[100px]">
        {/* Main Wrapper: 1200px wide, borders top & bottom, 110px vertical padding[cite: 117] */}
        <div className="about-partnership min-h-[885px] w-full max-w-[1200px] border-y border-[#2C2C29] px-[20px] py-[48px] flex flex-col md:min-h-0 md:flex-row items-start justify-between gap-[36px] md:px-0 md:py-[110px] md:gap-[77px]">

          {/* Left Block: 481px wide[cite: 119] */}
          <div data-sequence-item className="flex flex-col w-full md:w-[481px] shrink-0">
            {/* Heading: 70px font, 63px line-height, -3% tracking[cite: 119] */}
            <h2
              data-sequence-text
              className="about-partnership-heading type-015 mb-[16px] whitespace-pre-line text-white md:mb-[24px]"
            >
              {CREATIVE_PARTNERSHIP_DATA.heading}
            </h2>

            {/* Description: 17.6px font, 20.8px line-height[cite: 120] */}
            <p data-sequence-text className="about-partnership-description type-066 mb-[24px] text-[#9F9F9F] md:mb-[40px]">
              {CREATIVE_PARTNERSHIP_DATA.description}
            </p>

            {/* Action Button */}
            <button data-sequence-text className="flex items-center h-[52px] bg-white rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors w-max">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="type-087 text-[#1D1D1D]">
                {CREATIVE_PARTNERSHIP_DATA.action}
              </span>
            </button>
          </div>

          {/* Right Block (List): 561.5px wide[cite: 120] */}
          <div data-sequence-item className="flex flex-col w-full md:w-[561.5px] shrink-0">
            {CREATIVE_PARTNERSHIP_DATA.list.map((item, idx) => (
              <div
                key={idx}
                data-sequence-text
                // Bottom border, 35px bottom padding, 50px left padding for the number[cite: 122]
                className="relative flex flex-col pb-[26px] mb-[26px] border-b border-[#2C2C29] last:border-0 last:mb-0 last:pb-0 pl-[22px] md:pb-[35px] md:mb-[35px] md:pl-[50px]"
              >
                {/* Number positioned absolutely on the left */}
                <span className="absolute left-0 top-1 text-[#8CFE79] text-[12px] font-bold md:text-[14px]">
                  {item.num}
                </span>

                {/* Title & Desc */}
                <h3 className="about-partnership-list-title type-027 mb-[8px] text-white md:mb-[12px]">
                  {item.title}
                </h3>
                <p className="about-partnership-list-description type-087 text-[#9F9F9F]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaOrbitSection data={CTA_ORBIT_DATA.about} animateSequence />

      {/* Adding Footer at the bottom */}
      <Footer animateSequence />
    </main>
  );
}