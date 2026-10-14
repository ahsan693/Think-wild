import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import Image from 'next/image';
import ShowcaseCarousel from '@/app/components/home/showcase-carousel';
import ProcessStory from '@/app/components/home/process-story';
import CtaOrbitSection from '@/app/components/home/cta-orbit-section';
import SocialTicker from '@/app/components/social-ticker';
import { 
  Heart, MessageCircle, ArrowUpRight,
  Check,
  Search, Zap, PieChart, CheckCircle2, Rocket, RefreshCw,
  Plus, Minus
} from 'lucide-react';
import { CTA_ORBIT_DATA } from '@/lib/data/ctaorbitdata';
import { HEADER_LOGO } from '@/lib/data/header';
import {
  HOME_CAPABILITIES,
  HOME_FAQ,
  HOME_FEATURED_WORK,
  HOME_HERO,
  HOME_INTRODUCTION,
  HOME_MISSION,
  HOME_PROCESS,
  HOME_SERVICES,
  HOME_SHOWCASE,
  HOME_WHY_US,
} from '@/lib/data/homedata';
// import { Bricolage_Grotesque } from 'next/font/google';

const HOME_ARROW_ICON_SRC =
  '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/icon-hero-creator-marketing-01--1404-14978.svg';

function HomeArrowIcon({ color = 'white' }: { color?: 'white' | 'black' }) {
  return (
    <Image
      src={HOME_ARROW_ICON_SRC}
      alt=""
      aria-hidden="true"
      width={18}
      height={13}
      className={color === 'black' ? 'invert' : undefined}
    />
  );
}

export default function Home() {
  const creatorEdgeCard = HOME_HERO.creators[4];
  const creatorCards = [
    creatorEdgeCard,
    ...HOME_HERO.creators.filter((item) => item.id !== creatorEdgeCard.id),
    creatorEdgeCard,
  ];
  const capabilityIcons = {
    check: CheckCircle2,
    chart: PieChart,
    refresh: RefreshCw,
    rocket: Rocket,
    search: Search,
    zap: Zap,
  };
  const highlightClasses = {
    blue: 'bg-[#3B82F6] text-white',
    green: 'bg-[#22C55E] text-white',
    lime: 'bg-[#8CFE79] text-[#1D1D1D]',
    orange: 'bg-[#FF5C35] text-white',
    pink: 'bg-[#EC4899] text-white',
    red: 'bg-[#EF4444] text-white',
  };

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip font-[family-name:var(--font-saans)]">
      <Header arrowIconSrc={HOME_ARROW_ICON_SRC} />

      <section className="mx-auto flex w-full max-w-[1381px] flex-col items-center pb-[64px] pt-[24px] md:pb-[100px] md:pt-[155px]">
        
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <div className="flex w-full max-w-[860px] flex-col items-center gap-[24px] px-[20px] md:gap-[30px] md:px-0">
          <div className="flex h-[35px] items-center justify-center rounded-full border border-[#999999]/40 bg-[#1D1D1D] px-[20px] py-[6px]">
            <span className="text-[14px] font-medium text-white">
              {HOME_HERO.copy.eyebrow}
            </span>
          </div>

          <div className="flex w-full max-w-[1214px] flex-col items-center justify-center px-[8px] md:px-0">
            <h1 
              className="home-hero-title type-002 flex w-full flex-col items-center text-center font-semibold tracking-[-0.06em] uppercase md:w-auto md:whitespace-nowrap"
            >
              <span className="block whitespace-nowrap">{HOME_HERO.copy.firstLine}</span>
              <span className="mt-[4px] flex flex-col items-center justify-center gap-[8px] md:mt-[16px] md:flex-row md:gap-[24px]">
                <span>{HOME_HERO.copy.secondLine}</span>
                <span className="flex h-[64px] min-w-0 items-center justify-center rounded-full bg-[#8CFE79] px-[32px] pb-[4px] text-[#1D1D1D] md:h-[129px] md:min-w-[418px] md:rounded-[66px] md:px-[40px] md:pb-[8px]">
                  {HOME_HERO.copy.highlight}
                </span>
              </span>
            </h1>
          </div>

          <p className="mt-0 w-full max-w-[860px] px-[2px] text-center text-[14px] font-medium leading-[18px] text-[#9F9F9F] md:mt-[10px] md:px-0 md:text-[17.7px] md:leading-[20.8px]">
            {HOME_HERO.copy.description}
          </p>

          <button className="mt-0 flex h-[50px] w-[194px] items-center justify-between gap-[12px] rounded-full bg-white py-[5px] pl-[6px] pr-[16px] transition-colors hover:bg-gray-200 md:mt-[12px] md:h-[55px] md:w-auto md:justify-start md:py-[6px] md:pr-[20px]">
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#1D1D1D] text-white">
              <HomeArrowIcon />
            </div>
            <span className="text-[14px] font-medium text-[#1D1D1D] md:text-[16px]">
              {HOME_HERO.copy.action}
            </span>
          </button>
        </div>

        {/* =========================================
            VIDEO CAROUSEL SECTION
        ========================================= */}
        <div className="relative mx-auto mt-[80px] h-[441px] w-full max-w-[1381px] overflow-hidden">
          <div className="ml-[-22px] flex h-full w-max items-start gap-[12px] md:ml-0 md:w-full md:justify-between md:gap-0">
            {creatorCards.map((item, index) => {
              const isLeftEdge = index === 0;
              const isRightEdge = index === creatorCards.length - 1;
              const isEdgeCard = isLeftEdge || isRightEdge;
              const isDown = index % 2 === 1;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className={`relative h-[407px] w-[186px] shrink-0 ${isEdgeCard ? 'md:w-[100px] md:overflow-hidden' : 'md:w-[200px]'} ${isDown ? 'mt-[20px]' : 'mt-0'}`}
                >
                  <div
                    className={`absolute left-0 top-[7px] h-[393px] w-[186px] overflow-hidden rounded-[25.6px] border border-[#262626] bg-black ${isLeftEdge ? 'md:left-[-93px]' : isRightEdge ? 'md:left-0' : 'md:left-[7px]'}`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.username}
                      className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[60px] bg-gradient-to-b from-black/60 to-transparent" />
                    <div className="absolute left-1/2 top-3 h-[16px] w-[50px] -translate-x-1/2 rounded-full bg-black" />
                    <span className="absolute left-1/2 top-8 -translate-x-1/2 text-[10px] font-medium text-white/80">
                      {HOME_HERO.carousel.platformLabel}
                    </span>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-[16px] left-[12px] flex h-[35px] w-[134px] flex-col justify-end">
                      <div className="flex items-center gap-[4px]">
                        <span className="text-[13px] font-semibold tracking-tight text-white">{item.username}</span>
                        <Image
                          src="/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/verifiedbadge--1404-15100.svg"
                          alt=""
                          aria-hidden="true"
                          width={14}
                          height={14}
                        />
                      </div>
                      <span className="truncate text-[10px] text-white/80">
                        {item.likes} · {HOME_HERO.carousel.originalAudioLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-[24px] right-[12px] flex h-[78px] w-[18px] flex-col items-center justify-between gap-[12px]">
                      <Heart className="h-[18px] w-[18px] fill-red-500 text-white stroke-none" />
                      <MessageCircle className="h-[18px] w-[18px] fill-white text-white" />
                      <ArrowUpRight className="h-[18px] w-[18px] text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            SOCIAL TICKER SECTION
        ========================================= */}
        <SocialTicker className="mt-[28px] w-full px-[20px] pt-[16px] md:mt-[40px] md:px-0 md:pt-[29px]" />

        {/* =========================================
            CONTENT PARAGRAPH SECTION
        ========================================= */}
        <div className="mt-[80px] flex w-full max-w-[860px] flex-col items-start px-0 md:mt-[140px]">
          <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-[#1A1A1A] border border-[#333] mb-[32px]">
            <span className="text-[14px] font-medium text-white/70">{HOME_INTRODUCTION.eyebrow}</span>
          </div>
          <div className="home-introduction-copy type-026 space-y-[40px] text-white">
            {HOME_INTRODUCTION.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.map((part, partIndex) => {
                  if (!('highlight' in part)) return part.text;

                  return (
                    <span
                      key={partIndex}
                      className={`mx-[2px] inline-block rounded-[9px] px-[8px] py-[1px] leading-tight md:mx-1 md:rounded-[12px] md:px-[12px] md:py-[2px] ${highlightClasses[part.highlight]}`}
                    >
                      {part.text}
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>

        {/* =========================================
            MISSION SECTION
        ========================================= */}
        <div className="mt-[80px] flex w-full max-w-[1280px] flex-col items-center gap-[40px] px-[20px] md:mt-[160px] md:flex-row md:gap-[60px] md:px-0">
          <div className="flex h-auto w-full max-w-[610px] items-start gap-[12px] md:h-[463.45px] md:w-[610px] md:shrink-0 md:gap-[16px]">
            {/* Left Video */}
            <div className="relative h-[280px] min-w-0 flex-1 md:h-[390px] md:w-[297px] md:flex-none">
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 border border-[#333]">
                <img
                  src={HOME_MISSION.images.creator.src}
                  alt={HOME_MISSION.copy.imageAlt}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-[12px] -left-[16px] w-[74px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] rotate-[20deg] shadow-xl z-10">
                <Heart className="w-[14px] h-[14px] text-red-500 fill-red-500" />
                <span className="text-black font-bold text-[13px]">{HOME_MISSION.copy.imageMetrics[0]}</span>
              </div>
              <div className="absolute bottom-[20px] -right-[16px] w-[74px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] rotate-[20deg] shadow-xl z-10">
                <MessageCircle className="w-[14px] h-[14px] text-blue-500 fill-blue-500" />
                <span className="text-black font-bold text-[13px]">{HOME_MISSION.copy.imageMetrics[1]}</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-[28px] h-[300px] min-w-0 flex-1 md:mt-[50px] md:h-[413.45px] md:w-[297px] md:flex-none">
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 border border-[#333]">
                <img 
                  src={HOME_MISSION.images.fashion.src}
                  alt={HOME_MISSION.images.fashion.alt}
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-[12px] -right-[16px] w-[87px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] -rotate-[19deg] shadow-xl z-10">
                <div className="w-[14px] h-[14px] rounded-full bg-orange-500 flex items-center justify-center">
                  <div className="w-[6px] h-[6px] bg-white rounded-full" />
                </div>
                <span className="text-black font-bold text-[13px]">{HOME_MISSION.copy.imageMetrics[2]}</span>
              </div>
            </div>
          </div>

          <div className="flex w-full max-w-[610px] flex-col items-start gap-[24px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-[#1A1A1A] border border-[#333]">
              <span className="text-[14px] font-medium text-white/70">{HOME_MISSION.copy.eyebrow}</span>
            </div>
            <h2 className="home-mission-heading type-015 w-full text-white">
              {HOME_MISSION.copy.heading}
            </h2>
            <p className="w-full pr-0 text-[15px] font-medium leading-[22px] text-[#9F9F9F] md:pr-[20px] md:text-[17.7px] md:leading-[24px]">
              {HOME_MISSION.copy.description}
            </p>
            <button className="flex items-center h-[55px] bg-white rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors mt-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <HomeArrowIcon />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                {HOME_MISSION.copy.action}
              </span>
            </button>
          </div>
        </div>

        {/* =========================================
            SERVICES / "HOW WE HELP" SECTION
        ========================================= */}
        <div className="relative mt-[clamp(8rem,18vw,12.5rem)] flex w-full flex-col items-center">
          <h2 
            className="home-services-heading type-010 mb-[clamp(3rem,8vw,6.25rem)] w-full max-w-[1280px] px-4 text-center"
          >
            {HOME_SERVICES.copy.heading}
          </h2>

          <div className="flex w-full max-w-[1270px] flex-col items-center gap-[clamp(7rem,18vh,12rem)] px-4 pb-[20vh]">
            {HOME_SERVICES.items.map((service, index) => {
              const topOffset = 96 + (index * 24);
              return (
                <article
                  key={service.id}
                  className="service-stack-card sticky w-full shrink-0"
                  style={{ top: `${topOffset}px`, zIndex: index + 1 }}
                >
                  <div className={`relative mx-auto flex min-h-[740px] w-full max-w-[1060px] flex-col overflow-visible rounded-[32px] shadow-2xl md:h-[638px] md:min-h-0 md:flex-row ${service.bgColor}`}>
                    
                    {/* Folder Tab */}
                    <div className={`absolute -top-[32px] ${index % 2 === 0 ? 'left-6 md:left-[40px]' : 'right-6 md:right-[40px]'} flex h-[32px] items-center justify-center rounded-t-[12px] px-5 md:px-[24px] ${service.bgColor}`}>
                      <span className={`text-[10px] font-bold uppercase tracking-widest md:text-[12px] ${service.textColor}`}>
                        {HOME_SERVICES.copy.tabLabel} / {service.id}
                      </span>
                    </div>

                    {/* Left Text */}
                    <div className="flex w-full flex-1 flex-col justify-between p-7 md:h-full md:w-1/2 md:flex-none md:p-[60px]">
                      <div className="flex flex-col gap-[24px]">
                        <h3 
                          className={`home-service-card-heading type-012 whitespace-pre-line ${service.textColor}`}
                        >
                          {service.title}
                        </h3>
                        <p className={`max-w-[400px] text-[14px] font-medium leading-[21px] md:text-[16px] md:leading-[24px] ${service.textColor}`}>
                          {service.description}
                        </p>
                        <p className={`mt-2 text-[12px] font-bold tracking-tight md:mt-[16px] md:text-[14px] ${service.textColor}`}>
                          {service.tags}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className={`type-012 text-[60px] leading-none tracking-[-0.04em] md:text-[80px] ${service.textColor}`}>
                          {service.stat}
                        </span>
                        <span className={`text-[16px] font-bold ${service.textColor}`}>
                          {service.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex h-[240px] w-full items-center justify-end p-4 pt-0 md:h-full md:w-1/2 md:p-[24px] md:pl-0">
                      <div className="w-full h-full rounded-[24px] overflow-hidden bg-black/10">
                        <img 
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </section>

      {/* =========================================
          CREATOR CONTENT SHOWCASE SECTION
      ========================================= */}
      <section className="flex min-h-[940px] w-full flex-col items-center overflow-x-clip bg-black pb-[64px] pt-[64px] md:min-h-0 md:pb-[120px] md:pt-[100px]">
        
        {/* Header Pill */}
        <div className="mb-[32px] flex items-center justify-center rounded-full border border-white/20 px-[16px] py-[6px] md:mb-[32px]">
          <span className="text-[12px] font-bold uppercase tracking-widest text-white">
            {HOME_SHOWCASE.copy.eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="home-showcase-heading mb-[16px] w-full max-w-[300px] px-[20px] text-center font-bricolage text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white md:mb-[24px] md:max-w-[701px] md:px-0 md:text-[70px] md:leading-[63px]">
          {HOME_SHOWCASE.copy.heading}
        </h2>

        {/* Subtext */}
        <p className="mb-[40px] max-w-[330px] px-[20px] text-center text-[14px] font-medium text-[#9F9F9F] md:mb-[80px] md:max-w-[500px] md:px-0 md:text-[16px]">
          {HOME_SHOWCASE.copy.description}
        </p>

        <ShowcaseCarousel items={HOME_SHOWCASE.items} />

      </section>

      {/* =========================================
          FEATURED WORK SECTION
      ========================================= */}
      <section className="flex min-h-[942px] w-full flex-col items-center bg-black pb-[32px] pt-[64px] text-white md:min-h-0 md:pb-[100px] md:pt-[120px]">
        <div className="flex w-full max-w-[860px] flex-col items-center px-[20px] md:px-0">
          
          <div className="mb-[24px] flex w-full max-w-[750px] flex-col items-center gap-[16px] md:mb-[50px] md:gap-[24px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20">
              <span className="text-[12px] font-bold uppercase tracking-widest text-white">
                {HOME_FEATURED_WORK.copy.eyebrow}
              </span>
            </div>
            <h2 className="max-w-[240px] text-center font-bricolage text-[42px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] md:max-w-none md:text-[70px]">
              {HOME_FEATURED_WORK.copy.heading}
            </h2>
          </div>

          <div className="flex w-full max-w-[804px] flex-col overflow-hidden rounded-[32px] bg-white text-black md:h-[387px] md:flex-row">
            
            <div className="h-[200px] w-full shrink-0 overflow-hidden bg-zinc-100 md:h-full md:w-[49.25%]">
              <img 
                src={HOME_FEATURED_WORK.image.src}
                alt={HOME_FEATURED_WORK.copy.projectName}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex min-h-[306px] flex-1 flex-col justify-between px-[26px] py-[26px] md:min-h-0">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[4px]">
                  <h3 className="text-black font-semibold text-[27.3px] leading-[39.2px]">
                    {HOME_FEATURED_WORK.copy.projectName}
                  </h3>
                  <p className="text-zinc-800 text-[14px]">
                    {HOME_FEATURED_WORK.copy.category}
                  </p>
                </div>
                
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col">
                    <span className="text-black text-[14px] font-bold">{HOME_FEATURED_WORK.copy.createdLabel}</span>
                    <span className="text-zinc-600 text-[14px] mt-[2px]">{HOME_FEATURED_WORK.copy.created}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black text-[14px] font-bold">{HOME_FEATURED_WORK.copy.platformsLabel}</span>
                    <span className="text-zinc-600 text-[14px] mt-[2px]">{HOME_FEATURED_WORK.copy.platforms}</span>
                  </div>
                </div>
              </div>

              <button className="flex h-[52px] w-[174px] items-center gap-[10px] rounded-full bg-black py-[6px] pl-[6px] pr-[24px] transition-colors hover:bg-zinc-800">
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                  <HomeArrowIcon color="black" />
                </div>
                <span className="text-[16px] font-medium text-white">
                  {HOME_FEATURED_WORK.copy.action}
                </span>
              </button>

            </div>
          </div>

          <div className="mt-[16px] hidden items-center gap-[12px] md:flex">
            <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-white/30"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-white/30"></div>
          </div>

          <div className="mt-[12px] flex flex-col items-center gap-[16px] md:mt-[20px] md:gap-[24px]">
            <p className="text-center text-[16px] font-medium text-[#9F9F9F] max-w-[460px]">
              {HOME_FEATURED_WORK.copy.summary}
            </p>
            <button className="flex items-center h-[55px] bg-transparent border border-white/30 rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                <HomeArrowIcon color="black" />
              </div>
              <span className="text-[16px] font-medium text-white">
                {HOME_FEATURED_WORK.copy.moreAction}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          WHY THINK WILD SECTION
      ========================================= */}
      <section className="flex min-h-[1568px] w-full flex-col items-center bg-black px-5 pb-[64px] pt-[64px] md:min-h-0 md:px-4 md:pb-[100px] md:pt-[150px]">
        <div className="flex w-full max-w-[1280px] flex-col items-center rounded-[32px] bg-[#F5F5F5] px-[20px] py-[48px] md:rounded-[48px] md:px-[80px] md:py-[80px]">

          <div className="mb-[48px] flex w-full max-w-[858px] flex-col items-center gap-[24px] md:mb-[80px] md:gap-[32px]">
            <div className="flex items-center justify-center w-[202px] h-[35px] border border-black/20 rounded-full bg-transparent">
              <span className="text-[14px] font-medium text-black">{HOME_WHY_US.copy.eyebrow}</span>
            </div>
            <h2 className="max-w-[210px] text-center font-bricolage text-[38px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-black md:max-w-none md:text-[70px]">
              {HOME_WHY_US.copy.heading}
            </h2>
          </div>

          <div className="flex w-full flex-col items-stretch gap-[36px] md:flex-row md:items-start md:justify-between md:gap-0">

            <div className="flex w-full flex-col pt-0 md:w-[334px] md:pt-[40px]">
              <h4 className="mb-[24px] text-[18px] font-bold text-black md:mb-[32px] md:text-[20px]">{HOME_WHY_US.copy.listHeading}</h4>
              <div className="flex flex-col">
                {HOME_WHY_US.copy.services.map((item) => (
                  <div key={item} className="border-t border-black/10 py-[20px] text-[14px] font-medium text-black md:py-[16px] md:text-[16px]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-auto w-full flex-col items-start justify-center rounded-[24px] bg-[#155149] p-[24px] shadow-xl md:h-[539px] md:w-[538px] md:rounded-[32px] md:p-[48px]">
              <div className="mb-[24px] flex items-center md:mb-[48px]">
                <Image
                  src={HEADER_LOGO.src}
                  alt={HEADER_LOGO.alt}
                  width={180}
                  height={51}
                />
              </div>

              <div className="flex w-full flex-col gap-[20px] md:gap-[24px]">
                {HOME_WHY_US.copy.benefits.map((text) => (
                  <div key={text} className="flex items-start gap-[12px] border-b border-white/20 pb-[20px] last:border-0 last:pb-0 md:pb-[20px]">
                    <Check className="w-[18px] h-[18px] text-[#8CFE79] shrink-0 mt-[2px]" strokeWidth={3} />
                    <span className="text-[14px] font-medium leading-tight text-white md:text-[15px]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-[40px] flex w-full justify-center md:mt-[60px]">
            <button className="flex items-center w-[202px] h-[52px] bg-black rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-zinc-800 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                <HomeArrowIcon color="black" />
              </div>
              <span className="text-[16px] font-medium text-white mx-auto">
                {HOME_WHY_US.copy.action}
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          OUR PROCESS / 4 STEPS SECTION
      ========================================= */}
      <ProcessStory>
        <div className="process-story-stage">
          <div data-process-intro className="process-story-intro">
        
        {/* Top Header Pill */}
        <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20 mb-[32px]">
          <span className="text-[12px] font-bold uppercase tracking-widest text-white">
            {HOME_PROCESS.copy.eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="home-process-heading flex w-full flex-col items-center text-center font-bricolage text-[38px] font-semibold uppercase leading-[0.88] tracking-[-0.04em] text-white md:w-auto md:text-[clamp(3rem,8vw,114px)]">
          {HOME_PROCESS.copy.headingLines.map((line) => <span key={line}>{line}</span>)}
          
          <span className="mt-[4px] flex items-center justify-center gap-[8px] md:mt-[8px] md:gap-[20px]">
            <span>{HOME_PROCESS.copy.headingConnector}</span>
            <span className="flex h-[52px] w-[210px] items-center justify-center rounded-[100px] bg-[#8763FF] px-[12px] text-white md:h-[clamp(58px,8vw,114px)] md:w-[clamp(250px,31vw,442px)] md:px-[20px]">
              {HOME_PROCESS.copy.headingHighlight}
            </span>
          </span>
        </h2>
        <p className="mt-[24px] text-center text-[18px] font-medium text-white/60">
          {HOME_PROCESS.copy.description}
        </p>
          </div>

        {/* 4 Cards Container */}
        <div className="process-story-cards">
          
          {/* CARD 1: Discovery & Strategy */}
          <div data-process-card className="process-story-card bg-[#F1E55C] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">{HOME_PROCESS.steps[0].number}</span>
            
            <div className="flex-1 flex flex-col gap-[10px] justify-center w-full">
              {HOME_PROCESS.steps[0].visual.rows.map((row) => (
                <div key={row.label} className="w-full bg-[#1A1A1A] rounded-[16px] p-[12px] flex items-center gap-[12px]">
                  <div className={`w-[24px] h-[24px] rounded-full ${row.accent} flex items-center justify-center text-white`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-white">{row.label}</span>
                    <span className="text-[12px] text-[#9F9F9F]">{row.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="text-[24px] font-bold text-black leading-tight tracking-tight">{HOME_PROCESS.steps[0].title}</h3>
              <p className="text-[14px] font-medium text-black/80 leading-snug px-2">{HOME_PROCESS.steps[0].description}</p>
            </div>
          </div>

          {/* CARD 2: Creator Matching */}
          <div data-process-card className="process-story-card bg-[#F56633] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">{HOME_PROCESS.steps[1].number}</span>
            
            <div className="flex-1 flex items-center justify-center w-full relative">
              <img
                src={HOME_PROCESS.images.matching.src}
                alt={HOME_PROCESS.images.matching.alt}
                className="h-full max-h-[235px] w-full max-w-[242px] object-contain"
              />
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="text-[24px] font-bold text-white leading-tight tracking-tight">
                {HOME_PROCESS.steps[1].titleLines.map((line) => <span key={line} className="block">{line}</span>)}
              </h3>
              <p className="text-[14px] font-medium text-white/90 leading-snug px-2">{HOME_PROCESS.steps[1].description}</p>
            </div>
          </div>

          {/* CARD 3: Content Production */}
          <div data-process-card className="process-story-card bg-[#8CFE79] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">{HOME_PROCESS.steps[2].number}</span>
            
            <div className="flex-1 w-full bg-black/10 rounded-[20px] overflow-hidden">
              <img 
                src={HOME_PROCESS.images.production.src}
                alt={HOME_PROCESS.images.production.alt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="text-[24px] font-bold text-black leading-tight tracking-tight">{HOME_PROCESS.steps[2].title}</h3>
              <p className="text-[14px] font-medium text-black/80 leading-snug px-2">{HOME_PROCESS.steps[2].description}</p>
            </div>
          </div>

          {/* CARD 4: Launch, Learn, Grow */}
          <div data-process-card className="process-story-card bg-[#FF4A5A] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">{HOME_PROCESS.steps[3].number}</span>
            
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={HOME_PROCESS.images.performance.src}
                alt={HOME_PROCESS.images.performance.alt}
                className="h-full max-h-[160px] w-full max-w-[230px] object-contain"
              />
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="text-[24px] font-bold text-white leading-tight tracking-tight">{HOME_PROCESS.steps[3].title}</h3>
              <p className="text-[14px] font-medium text-white/90 leading-snug px-2">{HOME_PROCESS.steps[3].description}</p>
            </div>
          </div>

        </div>

        {/* Global CTA Button */}
        <button data-process-cta className="process-story-cta flex items-center h-[55px] bg-white rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
            <HomeArrowIcon />
          </div>
          <span className="text-[16px] font-medium text-[#1D1D1D]">
            {HOME_PROCESS.copy.action}
          </span>
        </button>

        </div>
      </ProcessStory>

      {/* =========================================
          CAPABILITIES SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[50px] gap-[40px] bg-black px-4 overflow-x-clip">
        
        <div className="flex w-full max-w-[1280px] gap-[30px] h-auto lg:h-[640px] flex-col lg:flex-row">
          
          <div className="relative w-full lg:w-[575px] h-[400px] lg:h-full rounded-[30px] overflow-hidden shrink-0">
            <img 
              src={HOME_CAPABILITIES.image.src}
              alt={HOME_CAPABILITIES.image.alt}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-0 inset-x-0 h-[250px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <h3 
              className="font-bricolage absolute bottom-[40px] left-[40px] right-[40px] w-auto max-w-none text-[clamp(32px,4.3vw,62px)] font-semibold leading-[1] tracking-[-0.03em] uppercase text-white lg:leading-[57px]"
            >
              {HOME_CAPABILITIES.copy.imageHeading.map((line) => <span key={line} className="block whitespace-nowrap">{line}</span>)}
            </h3>
          </div>

          <div className="relative flex h-full w-full shrink-0 flex-col gap-[40px] rounded-[30px] bg-[#8CFE79] p-[30px] text-black lg:h-[640px] lg:w-[675px] lg:flex-none lg:gap-[60px] lg:p-[50px]">
            <div className="flex w-full flex-col items-center gap-[20px] lg:h-[188.8px] lg:justify-between lg:gap-0">
              <div className="flex h-[35px] w-[146px] items-center justify-center rounded-full bg-black">
                <span className="text-[12px] font-medium text-white">
                  {HOME_CAPABILITIES.copy.eyebrow}
                </span>
              </div>

              <div className="flex h-[93px] w-full items-center justify-center">
                <span className="text-[80px] font-semibold leading-[93px] tracking-[-0.04em]">
                  {HOME_CAPABILITIES.copy.metric}
                </span>
              </div>

              <span className="w-full text-center text-[14px] font-medium leading-[21.8px]">
                {HOME_CAPABILITIES.copy.metricLabel}
              </span>
            </div>

            <div className="flex w-full flex-col gap-[20px] lg:h-[291px] lg:flex-none">
              {HOME_CAPABILITIES.copy.items.map((item) => (
                <div
                  key={item.heading}
                  className="grid w-full grid-cols-[1.4fr_1fr] items-start gap-[20px] border-b border-black/10 pb-[12px] last:border-b-0 last:pb-0 lg:flex-1"
                >
                  <h3 className="text-[20px] font-bold uppercase leading-[1] lg:text-[24px]">
                    {item.heading}
                  </h3>
                  <p className="text-[14px] font-medium leading-[18px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div
          aria-label="Capabilities"
          className="relative mx-auto mb-[40px] h-[38px] w-full max-w-[1280px] overflow-hidden"
        >
          <div className="flex h-full w-max animate-marquee motion-reduce:animate-none">
            {[0, 1].map((copy) => (
              <div
                key={`capability-set-${copy}`}
                aria-hidden={copy === 1}
                className="flex h-full shrink-0 items-center gap-[6px] pr-[6px]"
              >
                {HOME_CAPABILITIES.ticker.map((item) => {
                  const Icon = capabilityIcons[item.icon];
                  const iconClassName =
                    item.icon === 'check' ? 'fill-white text-[#1A1A1A]' : 'text-white';

                  return (
                    <div
                      key={`${copy}-${item.text}`}
                      className="flex h-[38px] shrink-0 items-center gap-[6px] rounded-full bg-[#373737]/[0.49] py-[4px] pl-[4px] pr-[16px]"
                    >
                      <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center">
                        <Icon
                          size={14}
                          strokeWidth={2}
                          className={iconClassName}
                          fill={item.icon === 'zap' || item.icon === 'chart' ? 'currentColor' : undefined}
                        />
                      </span>
                      <span className="text-[12px] font-medium leading-[18px] text-white">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section className="flex min-h-[873.5px] w-full flex-col items-center overflow-x-clip bg-black px-5 pb-[48px] pt-[48px] md:min-h-0 md:px-4 md:pb-[150px] md:pt-[150px]">
        <div className="flex w-full max-w-[1440px] flex-col items-center">

          <h2
            className="mb-[56px] w-full px-[8px] text-center font-bricolage text-[40px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white md:mb-[80px] md:px-0 md:text-[70px]"
          >
            {HOME_FAQ.heading.map((line) => <span key={line} className="block">{line}</span>)}
          </h2>

          <div className="flex w-full max-w-[916.84px] flex-col gap-[20px] md:gap-0">
            {HOME_FAQ.items.map((faq, index) => (
              <div
                key={index}
                className={`flex w-full flex-col transition-colors duration-300 ${faq.isOpen ? 'rounded-[20px] bg-[#1A1A1A] p-[20px] md:mb-[16px] md:rounded-[24px] md:p-[32px]' : 'border-b border-white/10 py-[32px] md:py-[32px]'}`}
              >
                <div className="flex items-center justify-between gap-[20px] cursor-pointer">
                  <h3 className="text-[18px] font-bold leading-tight tracking-tight text-white md:text-[24px]">
                    {faq.question}
                  </h3>
                  
                  <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 shrink-0 text-white transition-transform">
                    {faq.isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                {faq.isOpen && (
                  <p className="mt-[12px] max-w-[800px] text-[14px] font-medium text-[#9F9F9F] md:mt-[16px] md:text-[16px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          FINAL CTA SECTION
      ========================================= */}
      <CtaOrbitSection
        data={CTA_ORBIT_DATA.home}
        arrowIconSrc={HOME_ARROW_ICON_SRC}
      />

      <Footer />

    </main>
  );
}