"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { Eye, Scissors, TrendingUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// =========================================
// MOCK DATA (Move to data.ts later)
// =========================================
const WORK_HERO_DATA = {
  heading: "SELECTED\nWORK",
  description: "Explore creator campaigns, UGC, social content, branding and video projects from Think Wild Media and the team behind it.",
  backgroundImage: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1600",
  stats: [
    { label: "UGC", sublabel: "Creative", icon: <Eye size={14} className="text-white" /> },
    { label: "Reels", sublabel: "Format", icon: <Scissors size={14} className="text-white" /> },
    { label: "Social", sublabel: "Focus", icon: <TrendingUp size={14} className="text-white" /> }
  ],
  carouselCards: [
    {
      id: 1,
      title: "PLUMP'D",
      subtitle: "MODERN WISDOM",
      image: "https://images.pexels.com/photos/4427906/pexels-photo-4427906.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "ROUTINE STORIES",
      subtitle: "DEEP DIVE",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "CREATOR VOICES",
      subtitle: "REELS CLIP",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]
};

const WORK_GRID_DATA = {
  filters: ["All", "Branding", "Content", "Creator Campaigns", "Social", "Video"],
  projects: [
    {
      id: 1,
      title: "PLUMP'D BEAUTY",
      category: "Beauty & Wellness",
      service: "Product content",
      stats: [
        { number: "03", label: "Product story pillars" },
        { number: "02", label: "Short-form formats" }
      ],
      imageSrc: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Content", "Video", "Social"]
    },
    {
      id: 2,
      title: "ORALYN SKINCARE",
      category: "Beauty & Wellness",
      service: "Social strategy",
      stats: [
        { number: "03", label: "Creator angles" },
        { number: "02", label: "Social channels" }
      ],
      imageSrc: "https://images.pexels.com/photos/4427906/pexels-photo-4427906.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Social", "Creator Campaigns", "Branding"]
    },
    {
      id: 3,
      title: "TEXTURE STUDIES",
      category: "Beauty & Wellness",
      service: "Visual direction",
      stats: [
        { number: "03", label: "Visual routes" },
        { number: "02", label: "Product scenes" }
      ],
      imageSrc: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Content"]
    },
    {
      id: 4,
      title: "CREATOR VOICES",
      category: "Fashion",
      service: "Reels clip",
      stats: [
        { number: "04", label: "Creator scripts" },
        { number: "01", label: "Master edit" }
      ],
      imageSrc: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Creator Campaigns", "Video", "Social"]
    }
  ]
};

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on active pill
  const filteredProjects = WORK_GRID_DATA.projects.filter(project => 
    activeFilter === "All" || project.tags.includes(activeFilter)
  );

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col font-[family-name:var(--font-saans)] overflow-x-clip">
      <Header />

      {/* =========================================
          WORK HERO SECTION
      ========================================= */}
      <section className="w-full flex justify-center bg-black">
        <div className="relative w-full max-w-[1440px] h-[778px] px-[80px] pt-[85px] pb-[47px] flex items-end justify-between overflow-hidden">
          
          <div className="absolute inset-0 w-full h-full z-0">
            <img 
              src={WORK_HERO_DATA.backgroundImage} 
              alt="Selected Work Background" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
          </div>

          {/* Left Content Block */}
          <div className="relative z-10 flex flex-col w-[500px] gap-[24px]">
            <h1 className="font-bricolage text-[120px] font-semibold leading-[95px] tracking-[-0.07em] uppercase text-white whitespace-pre-line">
              {WORK_HERO_DATA.heading}
            </h1>

            <p className="text-white text-[17.7px] font-medium leading-[20.8px]">
              {WORK_HERO_DATA.description}
            </p>

            <div className="flex items-center gap-[40px] w-[260px] h-[47px] mt-[10px]">
              {WORK_HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col justify-between h-full">
                  <span className="text-[20px] font-bold leading-none">{stat.label}</span>
                  <div className="flex items-center gap-[6px] text-white/80">
                    {stat.icon}
                    <span className="text-[12px] font-medium leading-none">{stat.sublabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Block (Mini Carousel) */}
          <div className="relative z-10 flex flex-col w-[458px] gap-[40px]">
            <div className="flex w-full h-[143px] gap-[16px]">
              {WORK_HERO_DATA.carouselCards.map((card) => (
                <div 
                  key={card.id}
                  className="relative w-[142px] h-[143px] rounded-[16px] overflow-hidden shrink-0 group cursor-pointer"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  <div className="absolute bottom-[12px] left-[12px] flex flex-col">
                    <span className="text-white font-bricolage text-[14px] font-bold leading-tight tracking-tight uppercase">
                      {card.title}
                    </span>
                    <span className="text-white/80 text-[9px] font-medium uppercase tracking-wider mt-[2px]">
                      {card.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-between w-[248px] h-[36px]">
                <div className="flex items-center gap-[12px]">
                  <button className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                    <ChevronLeft size={16} className="text-white" />
                  </button>
                  <button className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                    <ChevronRight size={16} className="text-white" />
                  </button>
                </div>
                
                <div className="w-[120px] h-[4px] bg-white/30 rounded-full overflow-hidden">
                  <div className="w-1/3 h-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          PROJECTS GRID SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center pt-[60px] pb-[150px] px-4">
        
        {/* Filter Bar[cite: 110] */}
        <div className="flex items-center justify-center bg-[#1A1A1A] rounded-full p-[8px] gap-[4px] mb-[60px] overflow-x-auto max-w-full">
          {WORK_GRID_DATA.filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-[24px] py-[10px] rounded-full text-[14px] font-bold transition-all duration-300 whitespace-nowrap
                  ${isActive 
                    ? 'bg-[#8CFE79] text-[#1D1D1D]' 
                    : 'bg-transparent text-white hover:bg-white/10'
                  }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] w-full max-w-[1280px]">
          
          {filteredProjects.map((project) => (
            <Link 
              href="/plumpstudy"
              key={project.id} 
              className="flex w-full xl:w-[625px] h-auto md:h-[350px] bg-white rounded-[30px] overflow-hidden shrink-0 text-black shadow-xl group transition-transform hover:-translate-y-1 justify-self-center"
            >
              {/* Left Text Block */}
              <div className="flex flex-col justify-between w-full md:w-[342.5px] h-full pt-[29px] px-[30px] pb-[30px] shrink-0">
                <div className="flex flex-col">
                  <h3 className="font-bricolage text-[40px] font-semibold leading-tight tracking-[-0.03em] uppercase text-black mb-[4px] group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-zinc-600 font-medium tracking-tight">
                    {project.category} <span className="mx-1 font-bold">·</span> {project.service}
                  </p>
                </div>

                <div className="flex items-center gap-[40px] mt-6 md:mt-0">
                  {project.stats.map((stat, idx) => (
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

              {/* Right Image Block */}
              <div className="hidden md:block w-[282.5px] h-full shrink-0 overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </Link>
          ))}

        </div>

      </section>

      {/* Put the footer as the very last item inside main */}
      <Footer />
    </main>
  );
}