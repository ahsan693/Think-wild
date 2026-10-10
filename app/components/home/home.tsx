import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import ShowcaseCarousel from '@/app/components/home/showcase-carousel';
import ProcessStory from '@/app/components/home/process-story';
import CtaOrbit from '@/app/components/home/cta-orbit';
import { 
  ArrowRight, Heart, MessageCircle, ArrowUpRight, 
  BadgeCheck, Play, Camera, Ghost, Music, 
  Check,
  Search, Zap, PieChart, CheckCircle2, Rocket, RefreshCw,
  Plus, Minus, Calendar
} from 'lucide-react';
// import { Bricolage_Grotesque } from 'next/font/google';

// =========================================
// MOCK DATA
// =========================================
const MOCK_VIDEOS = [
  { id: 1, username: '@mila.creates', likes: '2.4M likes', videoUrl: 'https://videos.pexels.com/video-files/4259169/4259169-hd_1080_1920_30fps.mp4' },
  { id: 2, username: '@nikoflips', likes: '890K likes', videoUrl: 'https://videos.pexels.com/video-files/5896379/5896379-hd_1080_1920_24fps.mp4' },
  { id: 3, username: '@thewildjune', likes: '5.1M likes', videoUrl: 'https://videos.pexels.com/video-files/8055998/8055998-hd_1080_1920_25fps.mp4' },
  { id: 4, username: '@dro.visuals', likes: '420K likes', videoUrl: 'https://videos.pexels.com/video-files/7568580/7568580-hd_1080_1920_25fps.mp4' },
  { id: 5, username: '@saskia.reels', likes: '1.2M likes', videoUrl: 'https://videos.pexels.com/video-files/4434242/4434242-hd_1080_1920_24fps.mp4' }
];

const SOCIAL_PLATFORMS = [
  { name: 'Tiktok', icon: <Music className="w-4 h-4 text-white" />, bgColor: 'bg-black' },
  { name: 'Instagram', icon: <Camera className="w-4 h-4 text-white" />, bgColor: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500' },
  { name: 'Youtube', icon: <Play className="w-4 h-4 text-white fill-white" />, bgColor: 'bg-red-600' },
  { name: 'Snapchat', icon: <Ghost className="w-4 h-4 text-black" />, bgColor: 'bg-[#FFFC00]' },
];

const SERVICES_DATA = [
  {
    id: '01',
    title: 'CREATOR &\nINFLUENCER\nCAMPAIGNS',
    desc: 'We find creators who fit your audience and manage influencer campaigns from outreach and briefs to content delivery and reporting.',
    tags: 'Creator sourcing · UGC · Influencer partnerships',
    stat: '21+',
    statLabel: 'Creators activated',
    bgColor: 'bg-[#FFD6E8]', // Pink
    textColor: 'text-[#FF4A5A]',
    imgUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '02',
    title: 'CONTENT\nPRODUCTION',
    desc: 'We produce social-first video, UGC, photography, edits, motion graphics and selected CGI creative for brands that want to stand out.',
    tags: 'Short-form video · UGC · CGI/VFX · Social content',
    stat: '450+',
    statLabel: 'Content assets produced',
    bgColor: 'bg-[#CBEBFF]', // Light Blue
    textColor: 'text-[#4A00E0]',
    imgUrl: 'https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '03',
    title: 'SOCIAL MEDIA\nMANAGEMENT',
    desc: 'We plan, publish and optimise your social content, helping your brand stay consistent, relevant and part of the conversation.',
    tags: 'Strategy · Content planning · Publishing · Reporting',
    stat: '8.4M',
    statLabel: 'Organic views generated',
    bgColor: 'bg-[#FDF05B]', // Yellow
    textColor: 'text-[#1A1A1A]',
    imgUrl: 'https://images.pexels.com/photos/5053846/pexels-photo-5053846.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '04',
    title: 'SOCIAL CREATIVE\nSTRATEGY',
    desc: 'We build campaign concepts, creator briefs, hooks and content formats around your audience, brand goals and the platforms that matter.',
    tags: 'Campaign concepts · Creative direction · Content strategy',
    stat: '42%',
    statLabel: 'Increase in Engagement',
    bgColor: 'bg-[#76F773]', // Green
    textColor: 'text-[#065F46]',
    imgUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const SHOWCASE_DATA = [
  { id: 1, username: '@fitcorelab', views: '1.6M views', sales: '$14k sales', imgUrl: 'https://images.pexels.com/photos/5348252/pexels-photo-5348252.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 2, username: '@wearnova', views: '3.7M views', sales: '$49k sales', imgUrl: 'https://images.pexels.com/photos/4427906/pexels-photo-4427906.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 3, username: '@wearnova', views: '1.9M views', sales: '$27k sales', imgUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 4, username: '@brandnatalya', views: '2.1M views', sales: '$39k sales', imgUrl: 'https://images.pexels.com/photos/8863636/pexels-photo-8863636.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { id: 5, username: '@motionworks', views: '2.1M views', sales: '$27k sales', imgUrl: 'https://images.pexels.com/photos/10368551/pexels-photo-10368551.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

const CAPABILITIES_TICKER = [
  { text: 'Creator sourcing', icon: <Search size={14} /> },
  { text: 'UGC & short-form content', icon: <Zap size={14} /> },
  { text: 'Social-first strategy', icon: <PieChart size={14} /> },
  { text: 'Content approvals', icon: <CheckCircle2 size={14} /> },
  { text: 'Campaign reporting', icon: <Rocket size={14} /> },
  { text: 'Creative revisions', icon: <RefreshCw size={14} /> },
];

const FAQ_DATA = [
  {
    question: "What does Think Wild Media do?",
    answer: "Think Wild Media is a Dublin creator and influencer marketing agency offering UGC, content production, social media management and creative strategy.",
    isOpen: true
  },
  {
    question: "How do you choose the right creators?",
    answer: "We carefully vet creators based on audience demographics, engagement rates, brand affinity, and content quality to ensure the perfect match for your campaign.",
    isOpen: false
  },
  {
    question: "Can you manage an influencer campaign from start to finish?",
    answer: "Yes, we handle everything from creator sourcing and contracting to brief creation, content review, and final performance reporting.",
    isOpen: false
  },
  {
    question: "Do you create UGC and short-form content?",
    answer: "Absolutely. We specialize in producing native, engaging short-form video content tailored for TikTok, Instagram Reels, and YouTube Shorts.",
    isOpen: false
  },
  {
    question: "Do you manage social media accounts?",
    answer: "Yes, we offer comprehensive social media management services including content planning, posting, community engagement, and growth strategy.",
    isOpen: false
  }
];

// Mock data for floating images in the CTA section
const CTA_FLOATING_IMAGES = [
  'https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/28997086/pexels-photo-28997086.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5348252/pexels-photo-5348252.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4427906/pexels-photo-4427906.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/10368551/pexels-photo-10368551.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export default function Home() {
  const carouselItems = [...MOCK_VIDEOS, ...MOCK_VIDEOS, ...MOCK_VIDEOS];
  const tickerItems = [...SOCIAL_PLATFORMS, ...SOCIAL_PLATFORMS, ...SOCIAL_PLATFORMS, ...SOCIAL_PLATFORMS, ...SOCIAL_PLATFORMS];
  const capabilitiesTicker = [...CAPABILITIES_TICKER, ...CAPABILITIES_TICKER, ...CAPABILITIES_TICKER, ...CAPABILITIES_TICKER];

  return (
    <main className="home-page min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip">
      <Header />

      <section className="w-full max-w-[1380px] mx-auto pt-[155px] flex flex-col items-center pb-[100px]">
        
        {/* =========================================
            HERO SECTION
        ========================================= */}
        <div className="flex flex-col items-center w-full max-w-[860px] gap-[30px]">
          <div className="flex items-center justify-center h-[35px] rounded-full border border-[#999999]/40 bg-[#1D1D1D] px-[20px] py-[6px]">
            <span className="type-small-label text-white">
              Creators · Content · Social
            </span>
          </div>

          <div className="flex flex-col items-center justify-center w-full max-w-[1214px]">
            <h1 
              className="type-page-title flex flex-col items-center uppercase whitespace-nowrap"
            >
              <span className="block">CONTENT THAT</span>
              <span className="flex items-center justify-center gap-[24px] mt-[16px]">
                <span>STOPS THE</span>
                <span className="flex items-center justify-center min-w-[418px] px-[40px] h-[129px] bg-[#8CFE79] text-[#1D1D1D] rounded-[66px] pb-[8px]">
                  SCROLL
                </span>
              </span>
            </h1>
          </div>

          <p className="type-lead w-full max-w-[860px] text-center text-[#9F9F9F] mt-[10px]">
            We're a Dublin creator marketing agency connecting brands with influencers and making social-first content people want to watch, share and talk about.
          </p>

          <button className="flex items-center h-[55px] bg-white rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors mt-[12px]">
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
              <ArrowRight className="w-5 h-5 -rotate-45" strokeWidth={2} />
            </div>
            <span className="type-button-label text-[#1D1D1D]">
              Start a Project
            </span>
          </button>
        </div>

        {/* =========================================
            VIDEO CAROUSEL SECTION
        ========================================= */}
        <div className="w-full max-w-[1381px] h-[441px] mx-auto overflow-hidden relative mt-[80px]">
          <div className="flex w-max animate-marquee items-start gap-[16px]">
            {carouselItems.map((item, index) => {
              const isDown = index % 2 === 0;
              return (
                <div 
                  key={`${item.id}-${index}`}
                  className={`relative w-[186px] h-[393px] rounded-[25.6px] border border-[#262626] bg-black overflow-hidden shrink-0 transition-transform ${isDown ? 'mt-[48px]' : 'mt-0'}`}
                >
                  <video 
                    src={item.videoUrl} autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute top-0 inset-x-0 h-[60px] bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[50px] h-[16px] bg-black rounded-full" />
                  <span className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-medium text-white/80">Reels</span>
                  <div className="absolute bottom-0 inset-x-0 h-[120px] bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-[16px] left-[12px] w-[134px] h-[35px] flex flex-col justify-end">
                    <div className="flex items-center gap-[4px]">
                      <span className="text-white text-[13px] font-semibold tracking-tight">{item.username}</span>
                      <BadgeCheck className="w-[14px] h-[14px] text-blue-500 fill-white" />
                    </div>
                    <span className="text-white/80 text-[10px] truncate">{item.likes} · Original audio</span>
                  </div>

                  <div className="absolute bottom-[24px] right-[12px] w-[18px] h-[78px] flex flex-col items-center justify-between gap-[12px]">
                    <Heart className="w-[18px] h-[18px] text-white fill-red-500 stroke-none" />
                    <MessageCircle className="w-[18px] h-[18px] text-white fill-white" />
                    <ArrowUpRight className="w-[18px] h-[18px] text-white" strokeWidth={3} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            SOCIAL TICKER SECTION
        ========================================= */}
        <div className="w-full flex flex-col items-center mt-[40px] pt-[29px]">
          <p className="type-body text-white mb-[20px]">
            Your audience is everywhere. So are we.
          </p>
          <div className="relative w-full max-w-[620px] h-[38px] flex items-center overflow-hidden">
            <div className="absolute left-0 top-0 z-10 w-[84px] h-[40px] bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="flex w-max social-platform-marquee items-center gap-[12px]">
              {tickerItems.map((platform, idx) => (
                <div key={idx} className="social-platform-capsule flex items-center h-[38px] bg-white rounded-full pl-[6px] pr-[16px] py-[6px] gap-[8px] shrink-0">
                  <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ${platform.bgColor}`}>
                    {platform.icon}
                  </div>
                  <span className="type-small-label text-[#1D1D1D]">{platform.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 z-10 w-[76px] h-[38px] bg-gradient-to-l from-black to-transparent pointer-events-none" />
          </div>
        </div>

        {/* =========================================
            CONTENT PARAGRAPH SECTION
        ========================================= */}
        <div className="w-full max-w-[860px] flex flex-col items-start mt-[140px]">
          <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-[#1A1A1A] border border-[#333] mb-[32px]">
            <span className="type-small-label text-white/70">Sound familiar?</span>
          </div>
          <div className="type-lead text-white space-y-[40px]">
            <p>
              Your content is <span className="inline-block bg-[#FF5C35] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">showing up. 📈</span> But is anyone actually stopping for it? 👀
            </p>
            <p>
              Brands don't need more posts 📱 for the sake of posting. They need <span className="inline-block bg-[#3B82F6] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">ideas 💡</span> people want to watch, <span className="inline-block bg-[#EF4444] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">creators 👥</span> people trust, 🤝 and content that feels native 🌱 to the platform.
            </p>
            <p>
              If your feed looks polished ✨ but still feels forgettable, 😔 the problem usually isn't <span className="inline-block bg-[#FF5C35] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">consistency. 🚫</span> It's the concept, 🎯 the <span className="inline-block bg-[#EC4899] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">creator fit, 👤</span> or the <span className="inline-block bg-[#22C55E] text-white px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">strategy ♟️</span> behind it.
            </p>
            <p>
              That's where <span className="inline-block bg-[#8CFE79] text-[#1D1D1D] px-[12px] py-[2px] rounded-[12px] leading-tight mx-1">Think Wild Media</span> comes in – turning creators, 🎬 content 📝, and social strategy 📊 into work people actually want to watch. 🚀
            </p>
          </div>
        </div>

        {/* =========================================
            MISSION SECTION
        ========================================= */}
        <div className="flex w-full max-w-[1280px] gap-[60px] items-center mt-[160px]">
          <div className="flex items-start gap-[16px] w-[610px] h-[463.45px]">
            {/* Left Video */}
            <div className="relative w-[297px] h-[390px] shrink-0">
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 border border-[#333]">
                <video
                  src={MOCK_VIDEOS[0].videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label="Creator video"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-[12px] -left-[16px] w-[74px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] rotate-[20deg] shadow-xl z-10">
                <Heart className="w-[14px] h-[14px] text-red-500 fill-red-500" />
                <span className="text-black font-bold text-[13px]">12M</span>
              </div>
              <div className="absolute bottom-[20px] -right-[16px] w-[74px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] rotate-[20deg] shadow-xl z-10">
                <MessageCircle className="w-[14px] h-[14px] text-blue-500 fill-blue-500" />
                <span className="text-black font-bold text-[13px]">82+</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-[297px] h-[413.45px] mt-[50px] shrink-0">
              <div className="w-full h-full rounded-[30px] overflow-hidden bg-zinc-900 border border-[#333]">
                <img 
                  src="https://images.pexels.com/photos/28997086/pexels-photo-28997086.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fashion" className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-[12px] -right-[16px] w-[87px] h-[33px] bg-white rounded-full flex items-center justify-center gap-[4px] -rotate-[19deg] shadow-xl z-10">
                <div className="w-[14px] h-[14px] rounded-full bg-orange-500 flex items-center justify-center">
                  <div className="w-[6px] h-[6px] bg-white rounded-full" />
                </div>
                <span className="text-black font-bold text-[13px]">18.8M</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start w-[610px] gap-[24px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-[#1A1A1A] border border-[#333]">
              <span className="type-small-label text-white/70">Our mission</span>
            </div>
            <h2 
              className="type-section-title w-full uppercase text-white"
            >
              WE TURN CREATORS INTO YOUR BRAND'S STRONGEST STORYTELLERS.
            </h2>
            <p className="type-lead w-full text-[#9F9F9F] pr-[20px]">
              Think Wild Media is a Dublin influencer marketing and content agency creating UGC, creator campaigns and social content built for the platform.
            </p>
            <button className="flex items-center h-[55px] bg-white rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors mt-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                See our process
              </span>
            </button>
          </div>
        </div>

        {/* =========================================
            SERVICES / "HOW WE HELP" SECTION
        ========================================= */}
        <div className="relative mt-[clamp(8rem,18vw,12.5rem)] flex w-full flex-col items-center">
          <h2 
            className="type-section-title mb-[clamp(3rem,8vw,6.25rem)] w-full max-w-[1280px] px-4 text-center uppercase"
          >
            HOW WE HELP BRANDS GROW
          </h2>

          <div className="flex w-full max-w-[1270px] flex-col items-center gap-[clamp(7rem,18vh,12rem)] px-4 pb-[20vh]">
            {SERVICES_DATA.map((service, index) => {
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
                      <span className={`type-small-label uppercase ${service.textColor}`}>
                        SERVICE / {service.id}
                      </span>
                    </div>

                    {/* Left Text */}
                    <div className="flex w-full flex-1 flex-col justify-between p-7 md:h-full md:w-1/2 md:flex-none md:p-[60px]">
                      <div className="flex flex-col gap-[24px]">
                        <h3 
                          className={`type-service-title whitespace-pre-line uppercase ${service.textColor}`}
                        >
                          {service.title}
                        </h3>
                        <p className={`type-body max-w-[400px] ${service.textColor}`}>
                          {service.desc}
                        </p>
                        <p className={`type-small-label mt-2 md:mt-[16px] ${service.textColor}`}>
                          {service.tags}
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <span className={`type-metric ${service.textColor}`}>
                          {service.stat}
                        </span>
                        <span className={`type-small-label ${service.textColor}`}>
                          {service.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex h-[240px] w-full items-center justify-end p-4 pt-0 md:h-full md:w-1/2 md:p-[24px] md:pl-0">
                      <div className="w-full h-full rounded-[24px] overflow-hidden bg-black/10">
                        <img 
                          src={service.imgUrl} 
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
      <section className="w-full flex flex-col items-center pt-[100px] pb-[120px] bg-black overflow-x-clip">
        
        {/* Header Pill */}
        <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20 mb-[32px]">
          <span className="type-small-label uppercase text-white">
            Content Inspiration
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="type-section-title text-center uppercase max-w-[701px] text-white mb-[24px]"
        >
          CREATOR CONTENT PEOPLE ACTUALLY WANT TO WATCH
        </h2>

        {/* Subtext */}
        <p className="type-lead text-center text-[#9F9F9F] max-w-[500px] mb-[80px]">
          UGC, creator-led videos and social-first content designed to feel native to the platform and relevant to the audience.
        </p>

        <ShowcaseCarousel items={SHOWCASE_DATA} />

      </section>

      {/* =========================================
          FEATURED WORK SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[120px] pb-[100px] bg-black text-white">
        <div className="flex w-full max-w-[860px] flex-col items-center">
          
          <div className="mb-[50px] flex w-full max-w-[750px] flex-col items-center gap-[24px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20">
              <span className="type-small-label uppercase text-white">
                Selected Creative
              </span>
            </div>
            <h2 
              className="type-section-title uppercase text-center"
            >
              WORK THAT SHOWS WHAT WE CAN DO.
            </h2>
          </div>

          <div className="flex w-full max-w-[804px] flex-col overflow-hidden rounded-[32px] bg-white text-black md:h-[387px] md:flex-row">
            
            <div className="h-[260px] w-full shrink-0 overflow-hidden bg-zinc-100 md:h-full md:w-[49.25%]">
              <img 
                src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                alt="Plump'd Beauty" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="flex min-h-[327px] flex-1 flex-col justify-between px-[26px] py-[26px] md:min-h-0">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[4px]">
                  <h3 className="type-card-title text-black">
                    Plump'd Beauty
                  </h3>
                  <p className="type-body text-zinc-800">
                    Beauty & Wellness · Social Content
                  </p>
                </div>
                
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col">
                    <span className="type-small-label text-black">What we created</span>
                    <span className="type-body text-zinc-600 mt-[2px]">Short-form content, social assets</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="type-small-label text-black">Platforms</span>
                    <span className="type-body text-zinc-600 mt-[2px]">Instagram · TikTok</span>
                  </div>
                </div>
              </div>

              <button className="flex h-[52px] w-[174px] items-center gap-[10px] rounded-full bg-black py-[6px] pl-[6px] pr-[24px] transition-colors hover:bg-zinc-800">
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                  <ArrowRight className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="type-button-label text-white">
                  View Project
                </span>
              </button>

            </div>
          </div>

          <div className="mt-[16px] flex items-center gap-[12px]">
            <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-white/30"></div>
            <div className="w-[8px] h-[8px] rounded-full bg-white/30"></div>
          </div>

          <div className="flex flex-col items-center gap-[24px] mt-[20px]">
            <p className="type-lead text-center text-[#9F9F9F] max-w-[460px]">
              We create across beauty, fashion, food, fitness and more - adapting the idea, format and creator to the brand.
            </p>
            <button className="flex items-center h-[55px] bg-transparent border border-white/30 rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="type-button-label text-white">
                View selected work
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          WHY THINK WILD SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[150px] pb-[100px] px-4 bg-black">
        <div className="w-full max-w-[1280px] bg-[#F5F5F5] rounded-[48px] flex flex-col items-center py-[80px] px-[40px] md:px-[80px]">

          <div className="flex flex-col items-center w-full max-w-[858px] gap-[32px] mb-[80px]">
            <div className="flex items-center justify-center w-[202px] h-[35px] border border-black/20 rounded-full bg-transparent">
              <span className="type-small-label text-black">Why Think Wild Media</span>
            </div>
            <h2
              className="type-section-title text-black uppercase text-center"
            >
              CREATOR CAMPAIGNS, CONTENT AND SOCIAL STRATEGY IN ONE PLACE.
            </h2>
          </div>

          <div className="flex w-full justify-between items-start">

            <div className="flex flex-col w-[334px] pt-[40px]">
              <h4 className="type-subheading text-black mb-[32px]">What you get</h4>
              <div className="flex flex-col">
                {[
                  'Creator matching', 
                  'Campaign strategy', 
                  'Content production', 
                  'Platform fit', 
                  'Reporting', 
                  'Ongoing optimisation'
                ].map((item, i) => (
                  <div key={i} className="type-body py-[16px] border-t border-black/10 text-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[538px] h-[539px] bg-[#155149] rounded-[32px] p-[48px] flex flex-col items-start justify-center shadow-xl">
              <div className="flex items-center gap-[12px] mb-[48px]">
                <div className="text-white">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-[28px] font-bold text-white tracking-tight">Think Wild</span>
              </div>

              <div className="flex flex-col gap-[24px] w-full">
                {[
                  'Matched by audience, niche and brand fit',
                  'Campaign strategy built around your goals',
                  'Creator-led, social-first content',
                  'Built for the platform from day one',
                  'Clear reporting and useful insights',
                  'Learn, refine and improve over time'
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-[12px] pb-[20px] border-b border-white/20 last:border-0 last:pb-0">
                    <Check className="w-[18px] h-[18px] text-[#8CFE79] shrink-0 mt-[2px]" strokeWidth={3} />
                    <span className="type-body text-white">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="w-full flex justify-center mt-[60px]">
            <button className="flex items-center w-[202px] h-[52px] bg-black rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-zinc-800 transition-colors">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="type-button-label text-white mx-auto">
                Start a Project
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
          <span className="type-small-label uppercase text-white">
            How it works
          </span>
        </div>

        {/* Heading */}
        <h2 
          className="type-section-title flex flex-col items-center text-center uppercase text-white"
        >
          <span>FOUR STEPS FROM</span>
          <span>BRIEF TO CONTENT</span>
          
          <span className="flex items-center justify-center gap-[20px] mt-[8px]">
            <span>THAT</span>
            <span className="flex h-auto min-w-0 items-center justify-center rounded-[100px] bg-[#8763FF] px-[24px] py-[8px] text-white md:h-[63px] md:min-w-[280px] md:px-[32px]">
              CONNECTS
            </span>
          </span>
        </h2>
        <p className="type-lead mt-[24px] text-center text-white/60">
          From the first brief to content made to connect.
        </p>
          </div>

        {/* 4 Cards Container */}
        <div className="process-story-cards">
          
          {/* CARD 1: Discovery & Strategy */}
          <div data-process-card className="process-story-card bg-[#F1E55C] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">01</span>
            
            <div className="flex-1 flex flex-col gap-[10px] justify-center w-full">
              <div className="w-full bg-[#1A1A1A] rounded-[16px] p-[12px] flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#22C55E] flex items-center justify-center text-white"><Check size={14} strokeWidth={3} /></div>
                <div className="flex flex-col">
                  <span className="type-small-label text-white">Market analysis</span>
                  <span className="type-small-label text-[#9F9F9F]">3 brands reviewed</span>
                </div>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-[16px] p-[12px] flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] rounded-full bg-[#F97316] flex items-center justify-center text-white"><Check size={14} strokeWidth={3} /></div>
                <div className="flex flex-col">
                  <span className="type-small-label text-white">Content strategy</span>
                  <span className="type-small-label text-[#9F9F9F]">Building now...</span>
                </div>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-[16px] p-[12px] flex items-center gap-[12px]">
                <div className="w-[24px] h-[24px] rounded-full bg-white/20 flex items-center justify-center text-white/50"><Check size={14} strokeWidth={3} /></div>
                <div className="flex flex-col">
                  <span className="type-small-label text-white">Creator brief</span>
                  <span className="type-small-label text-[#9F9F9F]">Up next</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="type-card-title text-black">Discovery & Strategy</h3>
              <p className="type-body text-black/80 px-2">We learn your brand, audience and goals.</p>
            </div>
          </div>

          {/* CARD 2: Creator Matching */}
          <div data-process-card className="process-story-card bg-[#F56633] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">02</span>
            
            <div className="flex-1 flex items-center justify-center w-full relative">
              <div className="w-[140px] h-[140px] rounded-full border border-white/30 flex items-center justify-center relative">
                <div className="w-[80px] h-[80px] rounded-full border border-white/50 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] bg-[#1A1A1A] rounded-full flex flex-col items-center justify-center text-white relative z-10">
                    <span className="font-bold text-[18px]">92%</span>
                  </div>
                </div>
                <span className="absolute -bottom-6 text-black font-bold text-[12px]">nikoflips</span>
                <div className="absolute top-0 left-4 w-6 h-6 bg-blue-500 rounded-full border-2 border-[#F56633]"></div>
                <div className="absolute top-4 right-0 w-6 h-6 bg-pink-500 rounded-full border-2 border-[#F56633]"></div>
                <div className="absolute bottom-2 left-0 w-6 h-6 bg-green-500 rounded-full border-2 border-[#F56633]"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-500 rounded-full border-2 border-[#F56633]"></div>
              </div>
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="type-card-title text-white">Creator & Content<br/>Matching</h3>
              <p className="type-body text-white/90 px-2">We match the right creators and formats.</p>
            </div>
          </div>

          {/* CARD 3: Content Production */}
          <div data-process-card className="process-story-card bg-[#8CFE79] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">03</span>
            
            <div className="flex-1 w-full bg-black/10 rounded-[20px] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/8348981/pexels-photo-8348981.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Production" className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="type-card-title text-black">Content Production</h3>
              <p className="type-body text-black/80 px-2">We create, review and deliver the content.</p>
            </div>
          </div>

          {/* CARD 4: Launch, Learn, Grow */}
          <div data-process-card className="process-story-card bg-[#FF4A5A] rounded-[30px] p-[40px] flex flex-col gap-[18px]">
            <span className="text-center text-black font-bold text-[20px]">04</span>
            
            <div className="flex-1 flex items-end justify-between w-full px-[10px] pb-[20px] gap-[6px]">
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[40px] bg-white rounded-full"></div><span className="text-white/60 text-[10px] font-bold">M</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[60px] bg-white rounded-full"></div><span className="text-white/60 text-[10px] font-bold">T</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[50px] bg-white rounded-full"></div><span className="text-white/60 text-[10px] font-bold">W</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[90px] bg-white rounded-full relative">
                <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white text-[10px] font-bold px-[6px] py-[2px] rounded-[4px]">100</div>
              </div><span className="text-white/60 text-[10px] font-bold">T</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[80px] bg-[#1A1A1A] rounded-full"></div><span className="text-white/60 text-[10px] font-bold">F</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[100px] bg-white rounded-full"></div><span className="text-white/60 text-[10px] font-bold">S</span></div>
              <div className="flex flex-col items-center gap-2"><div className="w-[14px] h-[70px] bg-white rounded-full"></div><span className="text-white/60 text-[10px] font-bold">S</span></div>
            </div>

            <div className="flex flex-col text-center gap-[8px]">
              <h3 className="type-card-title text-white">Launch, Learn, Grow</h3>
              <p className="type-body text-white/90 px-2">We launch, learn what works and improve.</p>
            </div>
          </div>

        </div>

        {/* Global CTA Button */}
        <button data-process-cta className="process-story-cta flex items-center h-[55px] bg-white rounded-full pl-[6px] pr-[20px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors">
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
            <ArrowRight className="w-5 h-5" strokeWidth={2} />
          </div>
          <span className="type-button-label text-[#1D1D1D]">
            Start a Project
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
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Team" className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-0 inset-x-0 h-[250px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
            <h3 
              className="type-section-title absolute bottom-[40px] left-[40px] w-full max-w-[422px] uppercase text-white"
            >
              REAL CREATORS.<br />REAL CONTENT.<br />REAL CONNECTION.
            </h3>
          </div>

          <div className="flex-1 lg:w-[675px] h-full bg-[#8CFE79] rounded-[30px] p-[30px] lg:p-[50px] flex flex-col items-center lg:items-end text-black relative shrink-0">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-black mb-[20px] self-end">
              <span className="type-small-label text-white">What we bring</span>
            </div>

            <div className="flex flex-col items-end mb-[50px]">
              <span className="type-metric font-bold">
                1,200+
              </span>
              <span className="type-small-label mt-[4px]">
                Videos delivered across our team's experience
              </span>
            </div>

            <div className="w-full flex flex-col gap-[20px]">
              <div className="flex w-full justify-between items-start gap-[20px]">
                <span className="type-subheading uppercase w-1/2 max-w-[200px]">CREATOR-FIRST THINKING</span>
                <p className="type-body w-1/2">We match creators by audience, brand fit and the way they make content.</p>
              </div>
              <div className="flex w-full justify-between items-start gap-[20px]">
                <span className="type-subheading uppercase w-1/2 max-w-[200px]">SOCIAL-FIRST CONTENT</span>
                <p className="type-body w-1/2">Built for how people actually watch and engage on each platform.</p>
              </div>
              <div className="flex w-full justify-between items-start gap-[20px]">
                <span className="type-subheading uppercase w-1/2 max-w-[200px]">END-TO-END DELIVERY</span>
                <p className="type-body w-1/2">From strategy and creator briefs to production, approvals and reporting.</p>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full max-w-[100vw] overflow-hidden relative h-[38px] mb-[40px]">
          <div className="flex w-max animate-marquee items-center gap-[16px] h-full px-4">
            {capabilitiesTicker.map((item, idx) => (
              <div key={idx} className="flex items-center h-[34px] bg-[#1A1A1A] border border-white/10 rounded-full pl-[10px] pr-[16px] py-[6px] gap-[8px] shrink-0">
                <div className="text-zinc-400">{item.icon}</div>
                <span className="type-small-label text-white">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* =========================================
          FAQ SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[150px] pb-[150px] px-4 bg-black overflow-x-clip">
        <div className="w-full max-w-[1440px] flex flex-col items-center">

          <h2
            className="type-section-title text-center uppercase text-white mb-[80px]"
          >
            FREQUENTLY ASKED<br/>QUESTIONS
          </h2>

          <div className="flex flex-col w-full max-w-[916.84px]">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className={`flex flex-col w-full transition-colors duration-300 ${faq.isOpen ? 'bg-[#1A1A1A] rounded-[24px] p-[32px] mb-[16px]' : 'border-b border-white/10 py-[32px]'}`}
              >
                <div className="flex items-center justify-between gap-[20px] cursor-pointer">
                  <h3 className="type-card-title text-white">
                    {faq.question}
                  </h3>
                  
                  <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 shrink-0 text-white transition-transform">
                    {faq.isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>
                
                {faq.isOpen && (
                  <p className="type-body text-[#9F9F9F] mt-[16px] max-w-[800px]">
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
      <section className="w-full flex flex-col items-center pt-[250px] pb-[150px] px-4 bg-black overflow-hidden">
        
        {/* Main Light Green Container[cite: 103] */}
        <div className="relative w-full max-w-[1280px] min-h-[733.7px] bg-[#D3FFC4] rounded-[32px] flex flex-col items-center justify-center z-10 py-[100px]">
          
          {/* Floating Images Background Layer */}
          <CtaOrbit images={CTA_FLOATING_IMAGES} />

          {/* Central Content (Needs higher z-index to sit above images) */}
          <div className="relative z-20 flex flex-col items-center text-center max-w-[597px]">
            
            {/* Tiny Badge */}
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full bg-[#155149] mb-[30px]">
              <span className="type-small-label text-white">Ready?</span>
            </div>

            {/* Main Headline[cite: 109] */}
            <h2 
              className="type-cta-title text-[#155149] uppercase mb-[24px]"
            >
              STOP THE SCROLL.<br/>START THE CONVERSATION
            </h2>

            {/* Sub-paragraph[cite: 110] */}
            <p className="type-lead text-[#155149] max-w-[564.9px] mb-[40px]">
              Tell our Dublin team about your brief. We'll shape the right creator campaign, content plan or social strategy for your brand.
            </p>

            {/* Buttons Group[cite: 111] */}
            <div className="flex items-center justify-center gap-[40px] w-full max-w-[407px]">
              
              {/* Primary Button */}
              <button className="flex items-center h-[52px] bg-[#155149] rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-[#0c312c] transition-colors">
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-[#155149] rounded-full shrink-0">
                  <Calendar className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="type-button-label text-white">
                  Start a Project
                </span>
              </button>

              {/* Secondary Link Button */}
              <button className="flex items-center h-[52px] bg-transparent rounded-full px-[6px] py-[6px] gap-[12px] group">
                <span className="type-button-label text-[#155149] group-hover:opacity-80 transition-opacity">
                  See our work
                </span>
                <div className="flex items-center justify-center w-[32px] h-[32px] bg-[#155149] text-white rounded-full shrink-0 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </div>
              </button>

            </div>
          </div>
        </div>

      </section>

      <Footer />

    </main>
  );
}