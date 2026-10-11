"use client";

import { useState } from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ArrowRight, ChevronDown, Clock, Video, Globe, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Plus, Minus } from 'lucide-react';

// =========================================
// MOCK DATA
// =========================================
const CONTACT_FAQ_DATA = [
  {
    question: "What services does Think Wild Media offer?",
    answer: "We offer influencer campaigns, UGC, social content production, social media management and creative strategy from Dublin.",
  },
  {
    question: "How much does a project cost?",
    answer: "Project costs vary depending on scope, creator requirements, and production needs. We offer custom quoting after our initial discovery call.",
  },
  {
    question: "Do you work with brands outside Ireland?",
    answer: "Yes, while we are based in Dublin, we work with international brands and have a global network of creators.",
  },
  {
    question: "Can you manage an influencer campaign from start to finish?",
    answer: "Absolutely. We handle everything from creator sourcing and contracting to brief creation, content review, and final performance reporting.",
  },
  {
    question: "What happens after I get in touch?",
    answer: "We'll review your brief and set up a discovery call to understand your goals in detail before presenting a tailored proposal.",
  }
];

export default function ContactPage() {
  // --- Dynamic Calendar State ---
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  // --- FAQ State ---
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First item open by default

  // Calendar Calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNamesShort = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayNamesMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const isPastDay = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(year, month, day);
    return dateToCheck < today;
  };

  const isSelected = (day: number) => {
    return selectedDate.getDate() === day && 
           selectedDate.getMonth() === month && 
           selectedDate.getFullYear() === year;
  };

  const handleDateClick = (day: number) => {
    if (!isPastDay(day)) {
      setSelectedDate(new Date(year, month, day));
      setSelectedTime(null);
    }
  };

  const getOrdinalSuffix = (i: number) => {
    const j = i % 10, k = i % 100;
    if (j == 1 && k != 11) return i + "st";
    if (j == 2 && k != 12) return i + "nd";
    if (j == 3 && k != 13) return i + "rd";
    return i + "th";
  };

  const availableTimes = ['9:00 am', '9:30 am', '10:15 am', '11:45 am', '1:00 pm', '2:30 pm', '4:00 pm'];

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col font-[family-name:var(--font-saans)] overflow-x-clip">
      <Header />

      {/* =========================================
          CONTACT HERO & FORM SECTION
      ========================================= */}
      <section className="w-full flex justify-center pt-[180px] pb-[100px] px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[1280px] gap-[50px] lg:gap-[50px]">
          
          {/* LEFT COLUMN (Text & Avatars) */}
          <div className="flex flex-col w-full lg:w-[615px] shrink-0">
            <div className="flex flex-col gap-[10px] mb-[40px]">
              <div className="flex items-center">
                <div className="w-[32px] h-[32px] rounded-full border-2 border-black overflow-hidden relative z-40 bg-zinc-800">
                  <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" alt="team" className="w-full h-full object-cover" />
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-black overflow-hidden relative z-30 -ml-[12px] bg-zinc-700">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100" alt="team" className="w-full h-full object-cover" />
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-black overflow-hidden relative z-20 -ml-[12px] bg-zinc-600">
                  <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100" alt="team" className="w-full h-full object-cover" />
                </div>
                <div className="w-[32px] h-[32px] rounded-full border-2 border-black overflow-hidden relative z-10 -ml-[12px] bg-zinc-500">
                  <img src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100" alt="team" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-[14px] font-medium text-white">Creators · Content · Social</span>
            </div>

            <h1 
              className="flex flex-col text-[100px] leading-[90px] font-bold uppercase tracking-[-0.04em] text-white"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <span>LET'S BUILD</span>
              <span>SOMETHING</span>
              <span className="inline-flex items-center justify-center bg-[#155149] text-[#8CFE79] rounded-[100px] px-[24px] pb-[8px] mt-[10px] w-max">
                WILD.
              </span>
            </h1>
          </div>

          {/* RIGHT COLUMN (Form) */}
          <div className="flex flex-col w-full lg:w-[615px] shrink-0">
            <div className="w-full bg-[#155149] rounded-t-[30px] px-[40px] pt-[19px] pb-[40px] -mb-[20px] z-0">
              <h2 className="text-[#8CFE79] text-[24px] font-bold">
                Tell us what you're working on.
              </h2>
            </div>

            <div className="w-full bg-white rounded-[30px] p-[40px] z-10 relative shadow-2xl flex flex-col gap-[24px] text-black">
              
              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Full name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Email address*</label>
                <input 
                  type="email" 
                  placeholder="hello@yourbrand.com" 
                  className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Company or brand name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your company or brand name" 
                  className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Website or social profile (optional)</label>
                <input 
                  type="text" 
                  placeholder="Enter your website or social profile" 
                  className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">What do you need help with?</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] appearance-none focus:outline-none focus:border-black/50 transition-colors bg-white text-black/60">
                    <option value="" disabled>Select a service</option>
                    <option value="campaigns">Creator & Influencer Campaigns</option>
                    <option value="production">Content Production</option>
                    <option value="management">Social Media Management</option>
                  </select>
                  <ChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Budget range (optional)</label>
                <div className="relative">
                  <select defaultValue="" className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] appearance-none focus:outline-none focus:border-black/50 transition-colors bg-white text-black/60">
                    <option value="" disabled>Select a budget range</option>
                    <option value="under5k">Under $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="over25k">$25k+</option>
                  </select>
                  <ChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Timeline (optional)</label>
                <input 
                  type="text" 
                  placeholder="When do you want to launch?" 
                  className="w-full h-[52px] rounded-[12px] border border-black/20 px-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[14px] font-bold text-black">Tell us a little about the project</label>
                <textarea 
                  placeholder="Share your goals, audience, channels and any details that will help us understand your project." 
                  className="w-full h-[120px] rounded-[12px] border border-black/20 p-[16px] text-[15px] focus:outline-none focus:border-black/50 transition-colors placeholder:text-black/40 resize-none"
                ></textarea>
              </div>

              <div className="mt-[10px] flex flex-col gap-[16px]">
                <button className="flex items-center justify-between w-max h-[52px] bg-black rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                    <ArrowRight className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-white font-medium text-[16px]">
                    Send your brief
                  </span>
                </button>
                <span className="text-[12px] text-black/60 font-medium">
                  Your details will be used to respond to this enquiry.
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DYNAMIC DISCOVERY CALL CALENDAR SECTION
      ========================================= */}
      <section className="w-full flex flex-col items-center border-t border-white/10 pt-[100px] pb-[100px] px-4">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          
          <div className="flex flex-col items-center text-center gap-[16px] mb-[40px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20 gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#8CFE79] shadow-[0_0_8px_#8CFE79]"></div>
              <span className="text-[12px] uppercase font-bold tracking-widest text-white">LET'S GET STARTED</span>
            </div>
            <h2 
              className="text-[70px] leading-[0.9] font-semibold uppercase tracking-[-0.03em] text-white"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              BOOK A DISCOVERY CALL
            </h2>
            <p className="text-[#9F9F9F] text-[16px] font-medium max-w-[500px]">
              A quick call to understand your goals, your project and where Think Wild Media can help.
            </p>
          </div>

          <div className="w-full max-w-[1040px] h-auto md:h-[489.78px] bg-white rounded-[8px] border border-[#E5E7EB] flex flex-col md:flex-row overflow-hidden text-black shadow-xl">
            
            {/* Col 1: Details */}
            <div className="w-full md:w-[30%] md:min-w-[280px] p-[30px] border-b md:border-b-0 md:border-r border-[#E5E7EB] flex flex-col">
              <div className="w-[24px] h-[24px] rounded-full bg-zinc-200 mb-[16px]"></div>
              <span className="text-[14px] font-semibold text-zinc-500 mb-[4px]">Think Wild Media</span>
              <h3 className="text-[24px] font-bold text-black mb-[24px]">Discovery Call</h3>
              
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px] text-zinc-600">
                  <Clock size={16} />
                  <span className="text-[14px] font-medium">15m</span>
                </div>
                <div className="flex items-center gap-[8px] text-zinc-600">
                  <Video size={16} />
                  <span className="text-[14px] font-medium">Cal Video</span>
                </div>
                <div className="flex items-center gap-[8px] text-zinc-600">
                  <Globe size={16} />
                  <span className="text-[14px] font-medium">Asia/Karachi <ChevronDown size={14} className="inline ml-1" /></span>
                </div>
              </div>
            </div>

            {/* Col 2: Dynamic Calendar Grid */}
            <div className="flex-1 p-[30px] border-b md:border-b-0 md:border-r border-[#E5E7EB] flex flex-col">
              <div className="flex items-center justify-between mb-[30px]">
                <span className="text-[16px] font-bold">
                  {monthNames[month]} <span className="text-zinc-400">{year}</span>
                </span>
                <div className="flex items-center gap-[16px]">
                  <button onClick={handlePrevMonth} className="p-1 hover:bg-zinc-100 rounded transition-colors">
                    <ChevronLeftIcon size={20} className="text-zinc-600 cursor-pointer" />
                  </button>
                  <button onClick={handleNextMonth} className="p-1 hover:bg-zinc-100 rounded transition-colors">
                    <ChevronRightIcon size={20} className="text-zinc-600 cursor-pointer" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 mb-[16px] text-center">
                {dayNamesShort.map(day => (
                  <span key={day} className="text-[11px] font-bold text-zinc-500">{day}</span>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-y-[8px] gap-x-[4px] text-center">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-full aspect-square"></div>
                ))}
                
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const past = isPastDay(day);
                  const selected = isSelected(day);

                  return (
                    <div 
                      key={day}
                      onClick={() => handleDateClick(day)}
                      className={`w-full aspect-square flex flex-col items-center justify-center text-[15px] rounded-lg transition-colors
                        ${past ? 'text-zinc-300 cursor-not-allowed font-medium' : 'text-zinc-800 font-semibold cursor-pointer'}
                        ${selected ? 'bg-zinc-800 text-white shadow-md' : (!past ? 'hover:bg-zinc-100 bg-zinc-50/50' : '')}
                      `}
                    >
                      <span className="relative">{day}</span>
                      {selected && <div className="w-[4px] h-[4px] rounded-full bg-white mt-1 absolute bottom-1"></div>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Col 3: Dynamic Time Slots */}
            <div className="w-full md:w-[30%] md:min-w-[240px] p-[30px] flex flex-col">
              <div className="flex items-center justify-between mb-[24px]">
                <span className="text-[16px] font-bold text-black">
                  {dayNamesMap[selectedDate.getDay()]} {getOrdinalSuffix(selectedDate.getDate())}
                </span>
                <div className="flex border border-zinc-200 rounded-md overflow-hidden bg-zinc-100">
                  <button className="px-[8px] py-[4px] text-[12px] font-semibold bg-white rounded shadow-sm border border-zinc-200 m-[2px]">12h</button>
                  <button className="px-[8px] py-[4px] text-[12px] font-semibold text-zinc-500 m-[2px]">24h</button>
                </div>
              </div>
              
              <div className="flex flex-col gap-[10px] overflow-y-auto pr-2 custom-scrollbar">
                {availableTimes.map((time) => {
                  const isTimeSelected = selectedTime === time;
                  return (
                    <button 
                      key={time} 
                      onClick={() => setSelectedTime(time)}
                      className={`w-full py-[10px] rounded-md border text-[14px] font-semibold transition-all duration-200
                        ${isTimeSelected 
                          ? 'border-black bg-black text-white shadow-md scale-[0.98]' 
                          : 'border-[#E5E7EB] text-zinc-800 hover:border-black hover:bg-zinc-50'
                        }
                      `}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              {selectedTime && (
                <button className="w-full mt-[16px] py-[12px] bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold transition-colors shadow-lg">
                  Confirm Time
                </button>
              )}
            </div>

          </div>
          
          <div className="mt-[20px] font-bold text-[14px] text-zinc-500 tracking-tight">Cal.com</div>

        </div>
      </section>

      {/* =========================================
          FAQ / BEFORE WE GET STARTED SECTION
      ========================================= */}
      {/* Outer section constrained to 1440px width[cite: 126] */}
      <section className="w-full flex flex-col items-center pt-[50px] pb-[150px] px-4 overflow-x-clip border-t border-white/10">
        <div className="w-full max-w-[1440px] flex flex-col items-center">

          {/* Inner container to hold the ~916.84px wide FAQ group[cite: 127] */}
          <div className="flex flex-col w-full max-w-[916.84px] items-center">
            
            {/* Header Block */}
            <div className="flex flex-col items-center w-full mb-[70px]">
              <div className="flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[32px]">
                <span className="text-[14px] font-medium text-white uppercase tracking-widest">
                  FAQS
                </span>
              </div>
              
              <h2
                className="font-bricolage text-center text-[70px] leading-[63px] font-semibold uppercase tracking-[-0.03em] text-white"
              >
                BEFORE WE GET STARTED
              </h2>
            </div>

            {/* FAQs List Items */}
            <div className="flex flex-col w-full">
              {CONTACT_FAQ_DATA.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                
                return (
                  <div
                    key={index}
                    // Height adjusts dynamically: open ~195px, closed ~94px[cite: 129]
                    className={`flex flex-col w-full transition-all duration-300 ${
                      isOpen ? 'bg-[#1A1A1A] rounded-[24px] py-[32px] mb-[16px]' : 'border-b border-white/10 py-[32px]'
                    }`}
                  >
                    {/* The 73.42px inner padding is applied to align the text inwards as per Figma[cite: 128] */}
                    <div 
                      className="flex items-center justify-between gap-[20px] cursor-pointer px-[20px] lg:px-[73.42px]"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <h3 className="text-white font-medium text-[23.1px] leading-[32px] tracking-[-0.6px]">
                        {faq.question}
                      </h3>
                      
                      <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full border border-white/30 shrink-0 text-white transition-transform">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </div>
                    
                    {isOpen && (
                      <div className="w-full px-[20px] lg:px-[73.42px] mt-[16px]">
                        <p className="text-[#9F9F9F] text-[16px] leading-[24px]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </section>

      {/* Put the footer as the very last item inside main */}
      <Footer />
    </main>
  );
}