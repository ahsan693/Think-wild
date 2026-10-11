import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ArrowRight, ArrowUpRight, Heart, MessageCircle, BadgeCheck, Star } from 'lucide-react';

// =========================================
// MOCK DATA (Move to data.ts later)
// =========================================
const ABOUT_HERO_DATA = {
  eyebrow: "About us",
  heading: "WE MAKE\nBRANDS WORTH",
  highlight: "FOLLOWING",
  description: "Think Wild Media is a Dublin influencer marketing and content agency creating creator campaigns, UGC and social-first content that feels relevant and worth following.",
  action: "See our work",
  images: {
    phoneVideo: "https://images.pexels.com/photos/8348981/pexels-photo-8348981.jpeg?auto=compress&cs=tinysrgb&w=800",
    bgLeft: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    bgRight: "https://images.pexels.com/photos/5348252/pexels-photo-5348252.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "@daniel_foster",
    caption: "The best headphones for music with noise cancelling blend of superior sound, comfort in 2026."
  }
};

const ABOUT_STORY_DATA = {
  eyebrow: "Our story",
  heading: "BUILT AROUND CREATORS.\nMADE FOR BRANDS.",
  paragraphs: [
    "Think Wild Media began with a simple idea: brands need creator-led content that feels at home on the platforms people use every day.",
    "Our Dublin team brings creators, content production and social strategy together to help brands reach people with work worth watching and sharing."
  ],
  action: "Meet Our Creators",
  cards: {
    left: {
      stat: "11+",
      label: "Years of team\nexperience",
      bgColor: "bg-[#EC4037]",
      textColor: "text-white"
    },
    right: {
      stat: "21+",
      label: "Creators\nworked with",
      bgColor: "bg-[#D3FFC4]",
      textColor: "text-[#155149]"
    }
  }
};

export default function AboutPage() {
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

            <div className="flex items-center justify-center bg-[#FF742E] w-[460px] h-[120px] rounded-[100px] mb-[30px]">
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
              <img src={ABOUT_HERO_DATA.images.bgLeft} alt="Background left" className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[294px] h-[320px] rounded-[24px] overflow-hidden opacity-60">
              <img src={ABOUT_HERO_DATA.images.bgRight} alt="Background right" className="w-full h-full object-cover blur-[2px]" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 w-[232px] h-[484px] bg-black rounded-[41.44px] overflow-hidden border-[6px] border-[#1D1D1D] shadow-2xl shadow-black/50 flex flex-col">
              <img 
                src={ABOUT_HERO_DATA.images.phoneVideo} 
                alt="Main Phone content" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
              
              <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between">
                <div className="w-full h-[40px] bg-gradient-to-b from-black/60 to-transparent flex justify-center">
                  <div className="w-[80px] h-[20px] bg-black rounded-b-[14px]"></div>
                </div>

                <div className="absolute right-[8px] bottom-[140px] flex flex-col items-center gap-[12px]">
                  <div className="flex flex-col items-center">
                    <Heart className="w-[20px] h-[20px] text-white fill-white mb-1" />
                    <span className="text-[9px] font-medium text-white">6M</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className="w-[20px] h-[20px] text-white fill-white mb-1" />
                    <span className="text-[9px] font-medium text-white">20k</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[20px] h-[20px] bg-white rounded flex items-center justify-center mb-1">
                      <ArrowRight className="w-3 h-3 text-black -rotate-90" strokeWidth={3} />
                    </div>
                    <span className="text-[9px] font-medium text-white">7.9k</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowUpRight className="w-[20px] h-[20px] text-white mb-1" strokeWidth={3} />
                    <span className="text-[9px] font-medium text-white">5k</span>
                  </div>
                </div>

                <div className="w-full h-[180px] bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-[14px] pb-[20px]">
                  <div className="flex items-center gap-[6px] mb-[6px]">
                    <div className="w-[20px] h-[20px] rounded-full bg-red-500 overflow-hidden shrink-0 border border-white">
                       <img src={ABOUT_HERO_DATA.images.phoneVideo} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[11px] font-semibold text-white">{ABOUT_HERO_DATA.images.author}</span>
                    <BadgeCheck className="w-[12px] h-[12px] text-blue-500 fill-white" />
                  </div>
                  <p className="text-[10px] text-white/90 leading-[13px]">
                    {ABOUT_HERO_DATA.images.caption}
                  </p>
                  
                  <div className="flex justify-center gap-1 mt-[16px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
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
        
        {/* Main Section Wrapper: 1340px width, 430.02px height[cite: 103] */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-[1340px] h-[430.02px] px-[30px]">
          
          {/* Left Decorative Floating Card[cite: 108] */}
          <div className="absolute left-0 top-[20%] w-[180px] h-[180px] rounded-[30px] p-[30px] flex flex-col items-center justify-center gap-[29px] rotate-[16deg] shadow-2xl bg-[#EC4037] text-white pointer-events-none">
            <span className="font-bricolage text-[70px] font-bold leading-none tracking-[-0.04em]">
              {ABOUT_STORY_DATA.cards.left.stat}
            </span>
            <span className="text-[16px] font-medium text-center leading-snug whitespace-pre-line">
              {ABOUT_STORY_DATA.cards.left.label}
            </span>
          </div>

          {/* Right Decorative Floating Card[cite: 109] */}
          <div className="absolute right-0 top-[30%] w-[180px] h-[180px] rounded-[30px] p-[30px] flex flex-col items-center justify-center gap-[29px] -rotate-[16deg] shadow-2xl bg-[#D3FFC4] text-[#155149] pointer-events-none">
            <div className="flex items-center gap-[8px]">
              <span className="font-bricolage text-[70px] font-bold leading-none tracking-[-0.04em]">
                {ABOUT_STORY_DATA.cards.right.stat}
              </span>
              <Star className="w-[32px] h-[32px] fill-[#F9A826] text-[#F9A826]" />
            </div>
            <span className="text-[16px] font-medium text-center leading-snug whitespace-pre-line mt-[-10px]">
              {ABOUT_STORY_DATA.cards.right.label}
            </span>
          </div>

          {/* Central Content Container: 752px width, 30px gap[cite: 104] */}
          <div className="flex flex-col items-center text-center w-full max-w-[752px] gap-[30px] z-10">
            
            {/* Eyebrow Pill */}
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20">
              <span className="text-[14px] font-medium text-white">
                {ABOUT_STORY_DATA.eyebrow}
              </span>
            </div>

            {/* Heading: 70px size, 63px line-height, -3% tracking[cite: 105] */}
            <h2 
              className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white whitespace-pre-line"
            >
              {ABOUT_STORY_DATA.heading}
            </h2>

            {/* Paragraph Text: 17.6px size, 20.8px line-height[cite: 106] */}
            <div className="flex flex-col gap-[16px]">
              {ABOUT_STORY_DATA.paragraphs.map((text, idx) => (
                <p key={idx} className="text-[#9F9F9F] text-[17.6px] font-medium leading-[20.8px]">
                  {text}
                </p>
              ))}
            </div>

            {/* CTA Button: 263px width[cite: 107] */}
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

      {/* Adding Footer at the bottom */}
      <Footer />
    </main>
  );
}