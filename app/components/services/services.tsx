import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ArrowRight } from 'lucide-react';

// =========================================
// MOCK DATA (Move to data.ts later)
// =========================================
const SERVICES_HERO_DATA = {
  eyebrow: "Our services",
  headingLine1: "CREATOR MARKETING",
  headingLine2Start: "BUILT FOR",
  headingHighlight: "SOCIAL.",
  description: "Explore our influencer marketing, UGC, content production, social media management and social creative strategy services - built to help brands create better social content and stronger campaigns.",
  action: "Start a Project"
};

const SERVICE_CARDS_DATA = [
  {
    id: 1,
    eyebrow: "Creator & Influencer Campaigns",
    title: "GIVE EVERY\nCAMPAIGN\nA PURPOSE.",
    description: "We plan and manage influencer marketing campaigns around your audience, brand and goals - from creator sourcing and outreach to briefs, approvals, content delivery and reporting.",
    listHeading: "What we bring",
    listItems: [
      "Creator sourcing and outreach",
      "Audience and creator fit",
      "Campaign briefs and content themes",
      "Influencer campaign management",
      "Approvals and reporting"
    ],
    action: "Start a Project",
    bgColor: "bg-[#8CFE79]", // Green
    imageSrc: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageRight: true
  },
  {
    id: 2,
    eyebrow: "Social Media Management",
    title: "KEEP THE\nCONVERSATION\nGOING.",
    description: "We manage social media strategy, content planning, publishing and community activity to help brands stay consistent, relevant and active across the platforms that matter.",
    listHeading: "What we bring",
    listItems: [
      "Social media strategy",
      "Content calendars and scheduling",
      "Publishing and profile management",
      "Community management",
      "Reporting and optimisation"
    ],
    action: "Start a Project",
    bgColor: "bg-[#F1E55C]", // Yellow
    imageSrc: "https://images.pexels.com/photos/5053846/pexels-photo-5053846.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageRight: false
  },
  {
    id: 3,
    eyebrow: "Content Production",
    title: "MAKE CONTENT\nWORTH SHARING.",
    description: "We produce social-first content including short-form video, UGC, photography, editing and selected CGI/VFX for brands and creator campaigns.",
    listHeading: "What we bring",
    listItems: [
      "Short-form video production",
      "UGC content",
      "Photography and editing",
      "Campaign creative",
      "Platform-ready social content"
    ],
    action: "Start a Project",
    bgColor: "bg-[#FFD9FB]", // Pink
    imageSrc: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageRight: true
  },
  {
    id: 4,
    eyebrow: "Social Creative Strategy",
    title: "BUILD THE IDEA\nBEFORE THE CONTENT.",
    description: "We develop social media campaign concepts, creator directions, hooks and content formats around your audience, brand and platform.",
    listHeading: "What we bring:", // Includes colon in screenshot
    listItems: [
      "Campaign concepts",
      "Creative direction",
      "Hooks and content formats",
      "Audience and creator insights",
      "Content testing and learnings"
    ],
    action: "Start a Project",
    bgColor: "bg-[#BEE9FE]", // Light Blue
    imageSrc: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    imageRight: false
  }
];

const SERVICES_TEAM_DATA = {
  eyebrow: "Across our team's experience",
  heading: "SOCIAL CONTENT WITH A\nCLEAR PURPOSE",
  cards: [
    {
      title: "Creators worked with",
      stat: "21+",
      bgColor: "bg-[#BEE9FE]",
      textColor: "text-[#5F00A6]" // Purple text
    },
    {
      title: "Videos briefed, reviewed and\ndelivered",
      stat: "1,100+",
      bgColor: "bg-[#EC4037]",
      textColor: "text-[#FFE4FC]" // Light pink text matching Figma palette
    },
    {
      title: "Campaigns & content projects",
      stat: "350+",
      bgColor: "bg-[#F1E55C]",
      textColor: "text-[#F56633]" // Orange text
    },
    {
      title: "Combined views & impressions",
      stat: "10M+",
      bgColor: "bg-[#8CFE79]",
      textColor: "text-[#155149]" // Dark green text
    }
  ]
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col overflow-x-clip font-[family-name:var(--font-saans)]">
      <Header />

      {/* =========================================
          SERVICES HERO SECTION
      ========================================= */}
      {/* Top padding to account for fixed header */}
      <section className="w-full flex flex-col items-center pt-[180px] pb-[100px] px-4">
        
        {/* Main Wrapper: 1280px wide, 425px tall */}
        <div className="flex flex-col items-center justify-center w-full max-w-[1280px] min-h-[425px]">
          
          {/* Eyebrow Pill */}
          <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[40px]">
            <span className="text-[14px] font-medium text-white">
              {SERVICES_HERO_DATA.eyebrow}
            </span>
          </div>

          {/* Heading: Flexbox structure preventing overlap */}
          <h1 
            className="flex flex-col items-center text-center text-[120px] leading-[120px] font-semibold uppercase tracking-[-0.06em] text-white mb-[32px]"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            <span>{SERVICES_HERO_DATA.headingLine1}</span>
            
            <span className="flex items-center justify-center gap-[20px] mt-[8px]">
              <span>{SERVICES_HERO_DATA.headingLine2Start}</span>
              
              <span className="inline-flex items-center justify-center bg-[#1A71FF] text-white rounded-[100px] px-[32px] pb-[8px] h-[109px]">
                {SERVICES_HERO_DATA.headingHighlight}
              </span>
            </span>
          </h1>

          <p className="text-center text-white text-[17.7px] font-medium leading-[20.8px] max-w-[795px] mb-[40px]">
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
              
              {/* Text Block Content */}
              <div className={`flex flex-col w-full lg:max-w-[482px] ${!card.imageRight ? 'lg:order-2' : ''}`}>
                <span className="text-[14px] font-medium mb-[12px]">{card.eyebrow}</span>
                
                <h2 
                  className="font-bricolage text-[70px] font-semibold leading-[54px] tracking-[-0.06em] uppercase whitespace-pre-line mb-[24px]"
                >
                  {card.title}
                </h2>
                
                <p className="text-[16px] font-medium leading-[24px] max-w-[402px] mb-[40px]">
                  {card.description}
                </p>

                <div className="flex flex-col w-full lg:max-w-[410px]">
                  <h3 className="text-[18px] font-bold mb-[16px]">{card.listHeading}</h3>
                  <div className="flex flex-col">
                    {card.listItems.map((item, i) => (
                      <div key={i} className="py-[16px] border-b border-black/10 last:border-0 text-[15px] font-medium">
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

              {/* Image Block Content */}
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
      {/* Container: 1440px max-width, 70px top padding, 110px bottom padding[cite: 110] */}
      <section className="w-full flex flex-col items-center pt-[70px] pb-[110px] px-4 xl:px-[120px]">
        {/* Inner Wrapper: 1200px max-width, 60px gap[cite: 111] */}
        <div className="flex flex-col items-center w-full max-w-[1200px] gap-[60px]">
          
          {/* Heading Group */}
          <div className="flex flex-col items-center gap-[24px]">
            {/* Eyebrow Pill[cite: 113] */}
            <div className="flex items-center justify-center px-[20px] py-[6px] rounded-[100px] border border-white/20">
              <span className="text-[14px] font-medium text-white">{SERVICES_TEAM_DATA.eyebrow}</span>
            </div>
            
            {/* Main Headline: 70px size, 63px line-height, -3% tracking[cite: 112] */}
            <h2 
              className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white text-center max-w-[664px] whitespace-pre-line"
            >
              {SERVICES_TEAM_DATA.heading}
            </h2>
          </div>

          {/* Cards Row: 1200px width, 30px gap[cite: 114] */}
          <div className="flex flex-col lg:flex-row w-full justify-between gap-[30px]">
            {SERVICES_TEAM_DATA.cards.map((card, idx) => (
              <div 
                key={idx}
                // Each card: 277.5px wide, 206.69px tall, 30px radius, 20px padding[cite: 115]
                className={`flex flex-col justify-between w-full lg:w-[277.5px] h-[206.69px] rounded-[30px] p-[20px] ${card.bgColor} ${card.textColor} shrink-0`}
              >
                <span className="text-[14px] font-medium leading-snug tracking-tight whitespace-pre-line">
                  {card.title}
                </span>
                
                {/* 96px size, 54px line-height, -4% tracking, right aligned[cite: 116] */}
                <span 
                  className="font-bricolage text-[96px] font-bold leading-[54px] tracking-[-0.04em] uppercase text-right self-end mt-auto"
                >
                  {card.stat}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Put the footer as the very last item inside main */}
      <Footer />
    </main>
  );
}