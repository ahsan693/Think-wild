"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ArrowLeft, ArrowRight, Play, Camera } from 'lucide-react';
import { PLUMPD_STUDY_DATA } from '@/lib/data/plumpstudydata'; // Adjust path if needed

export default function PlumpdStudyPage() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col font-[family-name:var(--font-saans)] overflow-x-clip">
      <Header />

      {/* =========================================
          CASE STUDY HERO SECTION
      ========================================= */}
      <section className="w-full flex justify-center pt-[150px] pb-[80px] px-4">
        <div className="flex flex-col w-full max-w-[1200px] gap-[30px]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-[30px] w-full">
            <div className="flex flex-col w-full lg:max-w-[696px]">
              <Link 
                href="/work" 
                className="flex items-center gap-[12px] h-[42px] w-max bg-transparent rounded-full pr-[16px] mb-[30px] group transition-opacity hover:opacity-70"
              >
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full shrink-0">
                  <ArrowLeft className="w-5 h-5 text-black" strokeWidth={2} />
                </div>
                <span className="text-white font-medium text-[16px]">
                  {PLUMPD_STUDY_DATA.hero.backText}
                </span>
              </Link>

              <h1 className="font-bricolage text-[120px] font-semibold leading-[98px] tracking-[-0.06em] uppercase text-white whitespace-pre-line mb-[24px]">
                {PLUMPD_STUDY_DATA.hero.title}
              </h1>

              <p className="text-[#9F9F9F] text-[17.7px] font-medium leading-[20.8px] max-w-[318px]">
                {PLUMPD_STUDY_DATA.hero.description}
              </p>
            </div>

            <div className="w-full lg:w-[474px] h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shrink-0">
              <img 
                src={PLUMPD_STUDY_DATA.hero.imageSrc} 
                alt="Plumpd Beauty" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="w-full flex flex-col gap-[16px] mt-[20px]">
            <div className="w-full h-[1px] bg-white/10"></div>
            <div className="flex items-center justify-between w-full text-[#B9B9B1] text-[12px] font-medium tracking-wide uppercase">
              <span>{PLUMPD_STUDY_DATA.hero.tags.left}</span>
              <span>{PLUMPD_STUDY_DATA.hero.tags.right}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between gap-[16px] md:gap-[30px] mt-[10px]">
            {PLUMPD_STUDY_DATA.hero.metadata.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col justify-center w-full md:w-[277.5px] h-[135px] bg-[#141414] rounded-[24px] p-[24px] shrink-0"
              >
                <span className="text-[13px] font-medium text-white/60 mb-[12px]">
                  {item.label}
                </span>
                
                {item.type === "text" ? (
                  <span className="text-[22px] font-medium text-white">
                    {item.value}
                  </span>
                ) : (
                  <div className="flex items-center gap-[8px]">
                    <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center">
                      <Camera className="w-[14px] h-[14px] text-white" />
                    </div>
                    <div className="w-[28px] h-[28px] rounded-full bg-[#1877F2] flex items-center justify-center">
                      <span className="text-white font-bold text-[14px] font-serif leading-none">f</span>
                    </div>
                    <div className="w-[28px] h-[28px] rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-[14px] h-[14px] text-white fill-white ml-[2px]" />
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
      <section className="w-full flex justify-center pt-[80px] pb-[150px] px-4 border-t border-white/10">
        <div className="flex flex-col w-full max-w-[700px] gap-[60px]">
          
          <div className="flex flex-col w-full gap-[18.7px]">
            <h2 className="font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[12px]">
              {PLUMPD_STUDY_DATA.content.opportunity.heading}
            </h2>
            {PLUMPD_STUDY_DATA.content.opportunity.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#9F9F9F] text-[16px] font-medium leading-[26px]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col w-full gap-[18.7px]">
            <h2 className="font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[12px]">
              {PLUMPD_STUDY_DATA.content.strategy.heading}
            </h2>
            {PLUMPD_STUDY_DATA.content.strategy.paragraphs.map((para, idx) => (
              <p key={idx} className="text-[#9F9F9F] text-[16px] font-medium leading-[26px]">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-col w-full gap-[36px] mt-[20px]">
            <h2 className="font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none">
              VISUALS / DELIVERABLES
            </h2>
            
            <div className="w-[108%] -ml-[4%] max-w-[758px] h-[370px] rounded-[30px] overflow-hidden shrink-0">
              <img 
                src={PLUMPD_STUDY_DATA.content.concept.imageSrc} 
                alt="Concept Visual" 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="flex flex-col gap-[18.7px]">
              <h2 className="font-bricolage text-[48px] font-bold uppercase tracking-[-0.02em] leading-none mb-[12px]">
                {PLUMPD_STUDY_DATA.content.concept.heading}
              </h2>
              {PLUMPD_STUDY_DATA.content.concept.paragraphs.map((para, idx) => (
                <p key={idx} className="text-[#9F9F9F] text-[16px] font-medium leading-[26px]">
                  {para}
                </p>
              ))}
            </div>

            <div className="w-full flex flex-col gap-[20px] bg-[#E4E4E4] rounded-[30px] p-[30px] text-black">
              <p className="text-[17.7px] font-bold leading-snug">
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
      <section className="w-full flex flex-col items-center pt-[30px] pb-[80px] px-4">
        <div className="w-full max-w-[1340px] px-[30px] flex flex-col items-center gap-[50px]">
          
          <h2 
            className="font-bricolage text-[70px] font-semibold leading-[63px] tracking-[-0.03em] uppercase text-white text-center"
          >
            {PLUMPD_STUDY_DATA.exploreMore.heading}
          </h2>

          <div className="flex flex-col lg:flex-row w-full justify-center gap-[30px]">
            
            {PLUMPD_STUDY_DATA.exploreMore.cards.map((card) => (
              <div 
                key={card.id} 
                className="flex w-full lg:w-[625px] h-[350px] bg-white rounded-[30px] overflow-hidden shrink-0 text-black shadow-xl group transition-transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex flex-col justify-between w-[342.5px] h-full pt-[29px] px-[30px] pb-[30px] shrink-0">
                  <div className="flex flex-col">
                    <h3 className="font-bricolage text-[40px] font-semibold leading-tight tracking-[-0.03em] uppercase text-black mb-[4px] group-hover:text-blue-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-zinc-600 font-medium tracking-tight">
                      {card.category} <span className="mx-1 font-bold">·</span> {card.service}
                    </p>
                  </div>

                  <div className="flex items-center gap-[40px]">
                    {card.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-bricolage text-[26px] font-bold text-black leading-none mb-[4px]">
                          {stat.number}
                        </span>
                        <span className="text-[13px] text-zinc-600 font-medium tracking-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-[282.5px] h-full shrink-0 overflow-hidden">
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