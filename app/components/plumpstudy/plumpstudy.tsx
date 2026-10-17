import Link from 'next/link';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ArrowLeft, ArrowRight, Play, Camera } from 'lucide-react';
import { PLUMPD_STUDY_DATA } from '@/lib/data/plumpstudydata'; // Adjust path if needed

export default function PlumpdStudyPage() {
  return (
    <main className="plumpstudy-page min-h-screen w-full bg-black text-white flex flex-col font-[family-name:var(--font-saans)] overflow-x-clip">
      <Header />

      {/* =========================================
          CASE STUDY HERO SECTION
      ========================================= */}
      <section className="w-full flex justify-center pt-[30px] pb-[32px] px-[15px] md:pt-[150px] md:pb-[80px] md:px-4">
        <div className="flex flex-col w-full max-w-[1200px] gap-[24px] md:gap-[30px]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[22px] md:gap-[30px] w-full">
            <div className="flex flex-col w-full lg:max-w-[696px]">
              <Link 
                href="/work" 
                className="flex items-center gap-[10px] h-[36px] md:h-[42px] w-max bg-transparent rounded-full pr-[16px] mb-[20px] md:mb-[30px] group transition-opacity hover:opacity-70"
              >
                <div className="flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] bg-white rounded-full shrink-0">
                  <ArrowLeft className="w-[18px] h-[18px] md:w-5 md:h-5 text-black" strokeWidth={2} />
                </div>
                <span className="text-white font-medium text-[14px] md:text-[16px]">
                  {PLUMPD_STUDY_DATA.hero.backText}
                </span>
              </Link>

              <h1 className="plumpstudy-display-title font-bricolage text-[120px] font-semibold leading-[98px] tracking-[-0.06em] uppercase text-white whitespace-normal md:whitespace-pre-line mb-[12px] md:mb-[24px]">
                {PLUMPD_STUDY_DATA.hero.title}
              </h1>

              <p className="whitespace-pre-line text-[#9F9F9F] text-[13px] font-medium leading-[18px] max-w-[300px] md:text-[17.7px] md:leading-[20.8px] md:max-w-[318px]">
                {PLUMPD_STUDY_DATA.hero.description}
              </p>
            </div>

            <div className="w-full h-[220px] rounded-[14px] overflow-hidden shrink-0 md:h-[350px] md:rounded-[24px] lg:w-[474px] lg:h-[400px]">
              <img 
                src={PLUMPD_STUDY_DATA.hero.imageSrc} 
                alt="Plumpd Beauty" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-[10px] mt-[2px] md:gap-[16px] md:mt-[20px]">
            <div className="w-full h-[1px] bg-white/10"></div>
            <div className="flex flex-col items-start gap-[3px] w-full text-[#B9B9B1] text-[10px] font-medium tracking-wide uppercase md:flex-row md:items-center md:justify-between md:gap-0 md:text-[12px]">
              <span>{PLUMPD_STUDY_DATA.hero.tags.left}</span>
              <span className="normal-case tracking-normal text-white/60 md:uppercase md:tracking-wide">{PLUMPD_STUDY_DATA.hero.tags.right}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full gap-[10px] mt-[2px] md:flex md:justify-between md:gap-[30px] md:mt-[10px]">
            {PLUMPD_STUDY_DATA.hero.metadata.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-center w-full h-[74px] bg-[#111111] border border-white/15 rounded-[5px] p-[10px] min-w-0 md:w-[277.5px] md:h-[135px] md:bg-[#141414] md:border-0 md:rounded-[24px] md:p-[24px] md:shrink-0"
              >
                <span className="text-[10px] font-medium text-white/60 mb-[5px] md:text-[13px] md:mb-[12px]">
                  {item.label}
                </span>
                
                {item.type === "text" ? (
                  <span className="truncate text-[12px] font-medium text-white md:text-[22px]">
                    {item.value}
                  </span>
                ) : (
                  <div className="flex items-center gap-[6px] md:gap-[8px]">
                    <div className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center">
                      <Camera className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white" />
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-[#1877F2] flex items-center justify-center">
                      <span className="text-white font-bold text-[12px] md:text-[14px] font-serif leading-none">f</span>
                    </div>
                    <div className="w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white fill-white ml-[2px]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          PROJECT DETAILS CONTENT SECTION
      ========================================= */}
      <section className="w-full flex justify-center pt-[30px] pb-[80px] px-[15px] border-t border-white/10 md:pt-[80px] md:pb-[150px] md:px-4">
        <div className="flex flex-col w-full max-w-[700px] gap-[36px] md:gap-[60px]">
          
          <div className="flex flex-col w-full gap-[12px] md:gap-[18.7px]">
            <h2 className="plumpstudy-section-heading font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[4px] md:mb-[12px]">
              {PLUMPD_STUDY_DATA.content.opportunity.heading}
            </h2>
            {PLUMPD_STUDY_DATA.content.opportunity.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#A6A6A6] text-[13px] font-medium leading-[18px] md:text-[#9F9F9F] md:text-[16px] md:leading-[26px]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col w-full gap-[12px] md:gap-[18.7px]">
            <h2 className="plumpstudy-section-heading font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[4px] md:mb-[12px]">
              {PLUMPD_STUDY_DATA.content.strategy.heading}
            </h2>
            {PLUMPD_STUDY_DATA.content.strategy.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#A6A6A6] text-[13px] font-medium leading-[18px] md:text-[#9F9F9F] md:text-[16px] md:leading-[26px]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col w-full gap-[20px] mt-[4px] md:gap-[36px] md:mt-[20px]">
            <h2 className="plumpstudy-section-heading font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none">
              VISUALS / DELIVERABLES
            </h2>
            
            <div className="w-full h-[220px] rounded-[14px] overflow-hidden shrink-0 md:w-[108%] md:-ml-[4%] md:max-w-[758px] md:h-[370px] md:rounded-[30px]">
              <img 
                src={PLUMPD_STUDY_DATA.content.concept.imageSrc} 
                alt="Concept Visual" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex flex-col gap-[12px] md:gap-[18.7px]">
              <h2 className="plumpstudy-section-heading font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[4px] md:mb-[12px]">
                {PLUMPD_STUDY_DATA.content.concept.heading}
              </h2>
              {PLUMPD_STUDY_DATA.content.concept.paragraphs.map((para, idx) => (
                <p key={idx} className="text-[#A6A6A6] text-[13px] font-medium leading-[18px] md:text-[#9F9F9F] md:text-[16px] md:leading-[26px]">
                  {para}
                </p>
              ))}
            </div>

            <div className="w-full flex flex-col gap-[16px] bg-[#E4E4E4] rounded-[20px] p-[18px] md:gap-[20px] md:rounded-[30px] md:p-[30px] text-black">
              <p className="text-[15px] font-bold leading-[21px] md:text-[17.7px] md:leading-snug">
                {PLUMPD_STUDY_DATA.content.concept.quoteCard.text}
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#FF4A5A] flex items-center justify-center shrink-0 border-2 border-white overflow-hidden">
                  <span className="text-white font-bricolage text-[12px] font-bold">WILD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold leading-none mb-[4px]">
                    {PLUMPD_STUDY_DATA.content.concept.quoteCard.author}
                  </span>
                  <span className="text-[#666666] text-[12px] font-medium leading-none">
                    {PLUMPD_STUDY_DATA.content.concept.quoteCard.role}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          EXPLORE MORE WORK SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[20px] pb-[60px] px-[15px] md:pt-[30px] md:pb-[80px] md:px-4">
        <div className="w-full max-w-[1340px] px-0 flex flex-col items-center gap-[28px] md:px-[30px] md:gap-[50px]">
          
          <h2 
            className="plumpstudy-explore-heading font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white text-center"
          >
            {PLUMPD_STUDY_DATA.exploreMore.heading}
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-[30px]">
            
            {PLUMPD_STUDY_DATA.exploreMore.cards.map((card) => (
              <div 
                key={card.id} 
                className="flex flex-col-reverse w-full h-auto bg-white rounded-[18px] overflow-hidden text-black shadow-xl group transition-transform hover:-translate-y-1 cursor-pointer md:h-[350px] md:flex-row md:rounded-[30px] md:shrink-0 lg:w-[625px]"
              >
                <div className="flex flex-col justify-between w-full min-h-[145px] pt-[16px] px-[16px] pb-[18px] md:w-[342.5px] md:h-full md:min-h-0 md:pt-[29px] md:px-[30px] md:pb-[30px] md:shrink-0">
                  <div className="flex flex-col">
                    <h3 className="plumpstudy-explore-card-title font-bricolage text-[40px] font-semibold leading-tight tracking-[-0.03em] uppercase text-black mb-[4px] group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[12px] text-zinc-600 font-medium tracking-tight md:text-[14px]">
                      {card.category} <span className="mx-1 font-bold">·</span> {card.service}
                    </p>
                  </div>

                  <div className="mt-[18px] flex items-center gap-[28px] md:mt-0 md:gap-[40px]">
                    {card.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-bricolage text-[22px] font-bold text-black leading-none mb-[4px] md:text-[26px]">
                          {stat.number}
                        </span>
                        <span className="text-[11px] text-zinc-600 font-medium tracking-tight md:text-[13px]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-[185px] shrink-0 overflow-hidden md:w-[282.5px] md:h-full">
                  <img 
                    src={card.imageSrc} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              </div>
            ))}

          </div>

          <Link href="/work">
            <button className="flex items-center h-[52px] bg-white rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-gray-200 transition-colors mt-[10px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#1D1D1D] text-white rounded-full shrink-0">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </div>
              <span className="text-[#1D1D1D] font-medium text-[16px]">
                {PLUMPD_STUDY_DATA.exploreMore.action}
              </span>
            </button>
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}