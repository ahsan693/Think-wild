import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import CtaOrbitSection from '@/app/components/home/cta-orbit-section';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { CTA_ORBIT_DATA } from '@/lib/data/ctaorbitdata';

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
    listHeading: "What we bring:",
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
      textColor: "text-[#5F00A6]" 
    },
    {
      title: "Videos briefed, reviewed and\ndelivered",
      stat: "1,100+",
      bgColor: "bg-[#EC4037]",
      textColor: "text-[#FFE4FC]" 
    },
    {
      title: "Campaigns & content projects",
      stat: "350+",
      bgColor: "bg-[#F1E55C]",
      textColor: "text-[#F56633]" 
    },
    {
      title: "Combined views & impressions",
      stat: "10M+",
      bgColor: "bg-[#8CFE79]",
      textColor: "text-[#155149]" 
    }
  ]
};

const OUR_APPROACH_DATA = {
  eyebrow: "Our approach",
  heading: "A CONNECTED WAY TO\nMAKE CONTENT",
  items: [
    {
      title: "Be recognisably you.",
      description: "From creator-led UGC to full content production, we keep your brand recognisable while making the content feel native to social.",
      imageSrc: "https://images.pexels.com/photos/28997086/pexels-photo-28997086.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Find your people.",
      description: "We match brands with creators based on audience, niche, content style and brand fit - not follower count alone.",
      imageSrc: "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Keep making it better.",
      description: "We review content performance, test formats and use what we learn to improve future social campaigns.",
      imageSrc: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]
};

const SERVICES_FAQ_DATA = {
  heading: "FREQUENTLY ASKED\nQUESTIONS",
  items: [
    {
      question: "What does Think Wild Media do?",
      answer: "Think Wild Media is a Dublin influencer marketing and social content agency offering creator campaigns, UGC content production, social media management and social creative strategy.",
      isOpen: true
    },
    {
      question: "How do you choose the right creators?",
      answer: "We rigorously vet creators based on audience demographics, engagement rates, brand affinity, and content quality to ensure the perfect match for your campaign objectives.",
      isOpen: false
    },
    {
      question: "Can you manage an influencer campaign from start to finish?",
      answer: "Yes, we handle the entire process. From initial strategy and creator sourcing to contracting, brief creation, content review, and final performance reporting.",
      isOpen: false
    },
    {
      question: "Do you create UGC and short-form content?",
      answer: "Absolutely. We specialize in producing native, engaging short-form video content tailored perfectly for TikTok, Instagram Reels, and YouTube Shorts.",
      isOpen: false
    },
    {
      question: "Do you manage social media accounts?",
      answer: "Yes, we offer comprehensive social media management services including content planning, posting, community engagement, and long-term growth strategy.",
      isOpen: false
    },
    {
      question: "Can you work with our existing creators or in-house team?",
      answer: "Of course. We regularly collaborate with in-house marketing teams and existing brand ambassadors to scale your content output seamlessly.",
      isOpen: false
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
      <section className="w-full flex flex-col items-center pt-[180px] pb-[100px] px-4">
        <div className="flex flex-col items-center justify-center w-full max-w-[1280px] min-h-[425px]">
          <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[40px]">
            <span className="text-[14px] font-medium text-white">
              {SERVICES_HERO_DATA.eyebrow}
            </span>
          </div>

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
              <div className={`flex flex-col w-full lg:max-w-[482px] ${!card.imageRight ? 'lg:order-2' : ''}`}>
                <span className="text-[14px] font-medium mb-[12px]">{card.eyebrow}</span>
                <h2 className="font-bricolage text-[70px] font-semibold leading-[54px] tracking-[-0.06em] uppercase whitespace-pre-line mb-[24px]">
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
              <span className="text-[14px] font-medium text-white">{SERVICES_TEAM_DATA.eyebrow}</span>
            </div>
            <h2 className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white text-center max-w-[664px] whitespace-pre-line">
              {SERVICES_TEAM_DATA.heading}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row w-full justify-between gap-[30px]">
            {SERVICES_TEAM_DATA.cards.map((card, idx) => (
              <div 
                key={idx}
                className={`flex flex-col justify-between w-full lg:w-[277.5px] h-[206.69px] rounded-[30px] p-[20px] ${card.bgColor} ${card.textColor} shrink-0`}
              >
                <span className="text-[14px] font-medium leading-snug tracking-tight whitespace-pre-line">
                  {card.title}
                </span>
                <span className="font-bricolage text-[96px] font-bold leading-[54px] tracking-[-0.04em] uppercase text-right self-end mt-auto">
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
              <span className="text-[14px] font-medium text-white">{OUR_APPROACH_DATA.eyebrow}</span>
            </div>
            
            <h2 className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white text-center whitespace-pre-line">
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
      {/* Outer section constrained to 1418px max-width[cite: 110] */}
      <section className="w-full flex flex-col items-center pt-[50px] pb-[150px] px-4 bg-black overflow-x-clip">
        <div className="w-full max-w-[1418px] flex flex-col items-center">

          {/* Inner container to hold the ~945px centered content[cite: 111] */}
          <div className="flex flex-col w-full max-w-[945px] items-center">
            
            {/* FAQs Header block[cite: 113] */}
            <div className="w-full max-w-[916.84px] px-0 lg:px-[73px] mb-[80px]">
              <h2
                className="font-bricolage text-center text-[70px] leading-[63px] font-semibold uppercase tracking-[-0.03em] text-white"
              >
                {SERVICES_FAQ_DATA.heading.split('\n').map((line) => <span key={line} className="block">{line}</span>)}
              </h2>
            </div>

            {/* FAQs List Items */}
            <div className="flex flex-col w-full">
              {SERVICES_FAQ_DATA.items.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full border-b border-white/10 py-[32px] transition-colors duration-300"
                >
                  <div className="flex items-center justify-between gap-[20px] cursor-pointer">
                    <h3 className="text-white font-medium text-[23.1px] leading-[32px] tracking-[-0.6px]">
                      {faq.question}
                    </h3>
                    
                    <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 shrink-0 text-white transition-transform">
                      {faq.isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  
                  {faq.isOpen && (
                    /* The expanded text content is constrained to exactly 836.84px wide[cite: 112] */
                    <div className="w-full max-w-[836.84px] mt-[16px]">
                      <p className="text-[#9F9F9F] text-[16px] leading-[24px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </section>

      <CtaOrbitSection data={CTA_ORBIT_DATA.services} />

      {/* Put the footer as the very last item inside main */}
      <Footer />
    </main>
  );
}