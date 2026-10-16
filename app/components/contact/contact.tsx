"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import ScrollAnimations from '@/app/components/scroll-animations';
import { CONTACT_BOOKING_DATA, CONTACT_FAQ_DATA, CONTACT_FORM_DATA, CONTACT_HERO_DATA, CONTACT_ICONS } from '@/lib/data/contact';

const CONTACT_ARROW_ICON_SRC =
  '/Think-Wild-Media-Developer-Assets/Icons/desktop/about/01-about-hero/icons/icon-about-hero-01--1404-16250.svg';

export default function ContactPage() {
  const {
    ChevronDown,
    ChevronLeft: ChevronLeftIcon,
    ChevronRight: ChevronRightIcon,
    Minus,
    Plus,
  } = CONTACT_ICONS;

  // --- Dynamic Calendar State ---
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  
  // --- FAQ State ---
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First item open by default

  // Calendar Calculations
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); 
  
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const calendarDays = Array.from(
    { length: 42 },
    (_, index) => new Date(year, month, index - firstDayOfMonth + 1),
  );

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const isPastDay = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(date);
    dateToCheck.setHours(0, 0, 0, 0);
    return dateToCheck < today;
  };

  const isSelected = (date: Date) => {
    return selectedDate.toDateString() === date.toDateString();
  };

  const handleDateClick = (date: Date) => {
    if (isPastDay(date)) return;

    setSelectedDate(date);
    setSelectedTime(null);
    if (date.getMonth() !== month || date.getFullYear() !== year) {
      setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
    }
  };

  const formatTime = (time: string) => {
    const [clock, period] = time.toLowerCase().split(' ');
    if (timeFormat === '12h') return `${clock}${period}`;

    const [hour, minute] = clock.split(':');
    const hour24 = (Number(hour) % 12) + (period === 'pm' ? 12 : 0);
    return `${String(hour24).padStart(2, '0')}:${minute}`;
  };

  const getOrdinalSuffix = (i: number) => {
    const j = i % 10, k = i % 100;
    if (j == 1 && k != 11) return i + "st";
    if (j == 2 && k != 12) return i + "nd";
    if (j == 3 && k != 13) return i + "rd";
    return i + "th";
  };

  return (
    <main className="contact-page min-h-screen w-full bg-black text-white flex flex-col font-[family-name:var(--font-saans)] overflow-x-clip">
      <ScrollAnimations variant="sequence" />
      <Header arrowIconSrc={CONTACT_ARROW_ICON_SRC} />

      {/* =========================================
          CONTACT HERO & FORM SECTION
      ========================================= */}
      <section className="contact-hero-section w-full flex justify-center pt-[180px] pb-[100px] px-4">
        <div className="contact-hero-layout flex flex-col lg:flex-row items-start justify-between w-full max-w-[1280px] gap-[50px] lg:gap-[50px]">
          
          {/* LEFT COLUMN (Text & Avatars) */}
          <div className="contact-hero-copy flex flex-col w-full lg:w-[615px] shrink-0">
            <div data-hero-support className="contact-hero-intro flex flex-col gap-[10px] mb-[40px]">
              <div className="flex items-center">
                {CONTACT_HERO_DATA.creatorImages.map((image) => (
                  <div
                    key={image.src}
                    className={`w-[32px] h-[32px] rounded-full border-2 border-black overflow-hidden relative ${image.className}`}
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="type-113 text-white">{CONTACT_HERO_DATA.tagline}</span>
            </div>

            <h1 
              className="contact-hero-title type-010 flex flex-col text-white"
            >
              {CONTACT_HERO_DATA.headingLines.map((line) => (
                <span key={line} className="scroll-text-mask block">
                  <span data-hero-line className="block">{line}</span>
                </span>
              ))}
              <span data-hero-highlight className="contact-hero-highlight inline-flex items-center justify-center bg-[#155149] text-[#8CFE79] rounded-[100px] px-[24px] pb-[8px] mt-[10px] w-max">
                {CONTACT_HERO_DATA.highlight}
              </span>
            </h1>
            <a
              data-hero-support
              href="#contact-form"
              className="contact-mobile-project-cta mt-[24px] md:hidden h-[52px] w-max items-center gap-[12px] rounded-full bg-[#8CFE79] py-[6px] pl-[6px] pr-[24px] text-black"
            >
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black text-white">
                <Image src={CONTACT_ARROW_ICON_SRC} alt="" aria-hidden="true" width={18} height={13} />
              </span>
              <span className="type-087">Start a project</span>
            </a>
          </div>

          {/* RIGHT COLUMN (Form) */}
          <div id="contact-form" data-sequence-section data-sequence-item className="contact-form-column flex flex-col w-full lg:w-[615px] shrink-0 scroll-mt-8">
            <div className="contact-form-heading-panel w-full bg-[#155149] rounded-t-[30px] px-[40px] pt-[19px] pb-[40px] -mb-[20px] z-0">
              <h2 data-sequence-text className="contact-form-heading font-heading text-[24px] font-bold text-[#8CFE79]">
                {CONTACT_FORM_DATA.heading}
              </h2>
            </div>

            <div className="contact-form-card w-full bg-white rounded-[30px] p-[40px] z-10 relative shadow-2xl flex min-h-[1068.03px] flex-col justify-between gap-[20px] text-black">
              {CONTACT_FORM_DATA.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-[10px]">
                  <label data-sequence-text className="type-106 text-black">{field.label}</label>
                  {field.type === 'select' ? (
                    <div className="relative">
                      <select defaultValue="" className="type-106 w-full h-[50px] rounded-[6px] border border-[#4B4B4B] bg-[#F5F5F5] py-[14px] pl-[20px] pr-[48px] text-[#4B4B4B] appearance-none focus:outline-none focus:border-black transition-colors">
                        <option value="" disabled>{field.placeholder}</option>
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-[16px] top-1/2 -translate-y-1/2 w-5 h-5 text-black/40 pointer-events-none" />
                    </div>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      placeholder={field.placeholder}
                      className="type-106 w-full h-[120px] rounded-[6px] border border-[#4B4B4B] bg-[#F5F5F5] px-[20px] py-[14px] text-[#4B4B4B] focus:outline-none focus:border-black transition-colors placeholder:text-[#4B4B4B] resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="type-106 w-full h-[50px] rounded-[6px] border border-[#4B4B4B] bg-[#F5F5F5] px-[20px] py-[14px] text-[#4B4B4B] focus:outline-none focus:border-black transition-colors placeholder:text-[#4B4B4B]"
                    />
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[20px]">
                <button data-sequence-text className="flex items-center justify-between w-max h-[52px] bg-black rounded-full pl-[6px] pr-[24px] py-[6px] gap-[12px] hover:bg-zinc-800 transition-colors">
                  <div className="flex items-center justify-center w-[40px] h-[40px] bg-white text-black rounded-full shrink-0">
                    <Image
                      src={CONTACT_ARROW_ICON_SRC}
                      alt=""
                      aria-hidden="true"
                      width={18}
                      height={13}
                      className="brightness-0"
                    />
                  </div>
                  <span className="type-087 text-white">
                    {CONTACT_FORM_DATA.submitLabel}
                  </span>
                </button>
                <span data-sequence-text className="type-136 text-black/60">
                  {CONTACT_FORM_DATA.privacyNote}
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          DYNAMIC DISCOVERY CALL CALENDAR SECTION
      ========================================= */}
      <section data-sequence-section className="contact-booking-section w-full flex flex-col items-center border-t border-white/10 pt-[100px] pb-[100px] px-4">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          
          <div data-sequence-item className="contact-booking-intro flex flex-col items-center text-center gap-[16px] mb-[40px]">
            <div className="flex items-center justify-center px-[16px] py-[6px] rounded-full border border-white/20 gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-full bg-[#8CFE79] shadow-[0_0_8px_#8CFE79]"></div>
              <span data-sequence-text className="type-139 font-bold text-white">{CONTACT_BOOKING_DATA.eyebrow}</span>
            </div>
            <h2 
              data-sequence-text
              className="contact-section-title type-015 text-white"
            >
              {CONTACT_BOOKING_DATA.heading}
            </h2>
            <p data-sequence-text className="contact-mobile-body type-087 max-w-[500px] text-[#9F9F9F]">
              {CONTACT_BOOKING_DATA.description}
            </p>
          </div>

          <div data-sequence-item className="contact-booking-widget flex w-full max-w-[1200px] flex-col items-center overflow-hidden rounded-[24px] bg-white px-[12px] pt-[16px] pb-[20px] lg:h-[625.78px] lg:px-0 lg:pt-[56px] lg:pb-0">
          <div className="flex w-full max-w-[1040px] flex-col overflow-hidden rounded-[8px] border border-[#E5E7EB] bg-white text-black lg:h-[489.78px] lg:flex-row">
            
            {/* Col 1: Details */}
            <div className="flex w-full flex-col border-b border-[#E5E7EB] p-[24px] lg:w-[280px] lg:flex-none lg:border-b-0 lg:border-r">
              <div className="mb-[12px] h-[24px] w-[24px] rounded-full bg-zinc-200"></div>
              <span className="type-113 mb-[4px] text-zinc-500">{CONTACT_BOOKING_DATA.businessName}</span>
              <h3 className="text-[24px] font-bold text-black mb-[24px]">{CONTACT_BOOKING_DATA.eventName}</h3>
              
              <div className="flex flex-col gap-[16px]">
                {CONTACT_BOOKING_DATA.details.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-[8px] text-zinc-600">
                    <detail.icon size={16} />
                    <span className="type-113">
                      {detail.label}
                      {detail.hasTimezoneChevron && <ChevronDown size={14} className="inline ml-1" />}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 2: Dynamic Calendar Grid */}
            <div className="flex w-full min-w-0 flex-col border-b border-[#E5E7EB] p-[20px] lg:flex-1 lg:border-b-0 lg:border-r">
              <div className="mb-[20px] flex items-center justify-between">
                <span className="text-[18px] font-semibold leading-[24px]">
                  {CONTACT_BOOKING_DATA.monthNames[month]} <span className="text-zinc-400">{year}</span>
                </span>
                <div className="flex items-center gap-[8px]">
                  <button type="button" aria-label="Previous month" onClick={handlePrevMonth} className="rounded-full p-1 text-zinc-600 transition-colors hover:bg-zinc-100">
                    <ChevronLeftIcon size={16} />
                  </button>
                  <button type="button" aria-label="Next month" onClick={handleNextMonth} className="rounded-full p-1 text-zinc-600 transition-colors hover:bg-zinc-100">
                    <ChevronRightIcon size={16} />
                  </button>
                </div>
              </div>
              
              <div className="mb-[12px] grid grid-cols-7 text-center">
                {CONTACT_BOOKING_DATA.weekdayHeadings.map(day => (
                  <span key={day} className="type-144 font-semibold text-[#171717]">{day}</span>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-x-0 gap-y-[4px] text-center">
                {calendarDays.map((date) => {
                  const past = isPastDay(date);
                  const selected = isSelected(date);
                  const outsideMonth = date.getMonth() !== month;
                  const dateLabel = date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  });

                  return (
                    <button
                      key={date.toISOString()}
                      type="button"
                      aria-label={dateLabel}
                      aria-pressed={selected}
                      disabled={past}
                      onClick={() => handleDateClick(date)}
                      className={`type-100 relative mx-auto flex aspect-square w-full max-w-[56px] min-w-0 flex-col items-center justify-center rounded-[8px] transition-colors
                        ${
                          past && outsideMonth
                            ? 'cursor-not-allowed bg-transparent text-transparent'
                            : past
                              ? 'cursor-not-allowed bg-transparent text-[#171717]'
                            : selected
                              ? 'cursor-pointer bg-[#292929] text-white hover:bg-[#292929]'
                              : 'cursor-pointer bg-[#E5E7EB] text-[#171717] hover:bg-[#D1D5DB]'
                        }
                      `}
                    >
                      {outsideMonth && date.getDate() === 1 && (
                        <span aria-hidden="true" className="absolute inset-x-0 top-[4px] text-[7px] font-bold leading-none tracking-[0.02em] text-zinc-500">
                          {CONTACT_BOOKING_DATA.monthNames[date.getMonth()].slice(0, 3).toUpperCase()}
                        </span>
                      )}
                      <span>{date.getDate()}</span>
                      {selected && <span aria-hidden="true" className="absolute bottom-[6px] h-[4px] w-[4px] rounded-full bg-white" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Col 3: Dynamic Time Slots */}
            <div className="flex w-full flex-col p-[20px] pt-[12px] lg:w-[280px] lg:flex-none">
              <div className="mb-[16px] flex items-center justify-between gap-[8px]">
                <span className="type-084 text-black">
                  {CONTACT_BOOKING_DATA.weekdays[selectedDate.getDay()]} {getOrdinalSuffix(selectedDate.getDate())}
                </span>
                <div className="flex shrink-0 items-center rounded-full border border-[#E5E7EB] bg-[#F8F9FA] p-[2px]">
                  {CONTACT_BOOKING_DATA.timeFormats.map((format) => (
                    <button
                      key={format}
                      type="button"
                      aria-pressed={timeFormat === format}
                      onClick={() => setTimeFormat(format)}
                      className={`type-136 rounded-full px-[7px] py-[2px] transition-colors ${
                        timeFormat === format
                          ? 'bg-white font-semibold text-black shadow-sm'
                          : 'text-zinc-500 hover:text-black'
                      }`}
                    >
                      {format}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-[8px]">
                {CONTACT_BOOKING_DATA.availableTimes.map((time) => {
                  const isTimeSelected = selectedTime === time;
                  return (
                    <button 
                      key={time} 
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`type-136 flex h-[36px] w-full items-center justify-center rounded-[8px] border font-medium transition-colors
                        ${isTimeSelected 
                          ? 'border-[#292929] bg-[#292929] text-white'
                          : 'border-[#D9DEE5] text-zinc-800 hover:border-[#292929] hover:bg-zinc-50'
                        }
                      `}
                    >
                      {formatTime(time)}
                    </button>
                  );
                })}
              </div>

              {selectedTime && (
                <button type="button" className="type-084 mt-[16px] w-full rounded-[8px] bg-[#292929] py-[12px] text-white transition-colors hover:bg-black">
                  {CONTACT_BOOKING_DATA.confirmLabel}
                </button>
              )}
            </div>

          </div>
          
          <div className="flex h-[80px] w-[84.86px] items-center justify-center text-[12px] font-medium text-black">
            {CONTACT_BOOKING_DATA.provider}
          </div>
          </div>

        </div>
      </section>

      {/* =========================================
          FAQ / BEFORE WE GET STARTED SECTION
      ========================================= */}
      {/* Outer section constrained to 1440px width[cite: 126] */}
      <section data-sequence-section className="contact-faq-section w-full flex flex-col items-center pt-[50px] pb-[150px] px-4 overflow-x-clip border-t border-white/10">
        <div className="w-full max-w-[1440px] flex flex-col items-center">

          {/* Inner container to hold the ~916.84px wide FAQ group[cite: 127] */}
          <div className="contact-faq-group flex flex-col w-full max-w-[916.84px] items-center">
            
            {/* Header Block */}
            <div data-sequence-item className="contact-faq-header flex flex-col items-center w-full mb-[64px]">
              <div className="contact-faq-eyebrow flex items-center justify-center px-[20px] py-[6px] rounded-full border border-white/20 mb-[32px]">
                <span data-sequence-text className="type-113 text-white uppercase tracking-widest">
                  {CONTACT_FAQ_DATA.eyebrow}
                </span>
              </div>
              
              <h2
                data-sequence-text
                className="contact-section-title type-015 text-center text-white"
              >
                {CONTACT_FAQ_DATA.heading}
              </h2>
            </div>

            {/* FAQs List Items */}
            <div data-sequence-item className="contact-faq-list flex flex-col w-full gap-[20px] md:gap-0">
              {CONTACT_FAQ_DATA.items.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const answerId = `contact-faq-answer-${index}`;
                
                return (
                  <div
                    key={faq.question}
                    data-sequence-text
                    className={`contact-faq-item flex flex-col w-full transition-colors duration-200 ${
                      isOpen
                        ? 'contact-faq-open bg-[#1A1A1A] rounded-[24px] py-[20px] mb-0 md:mb-[16px] md:px-[40px] md:py-[38px]'
                        : 'border-b border-white/10 py-[20px] md:border-b-2 md:border-white/[0.08] md:px-[40px] md:py-[30px]'
                    }`}
                  >
                    <h3 className="contact-faq-question type-038 text-white">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="flex w-full cursor-pointer items-center justify-between gap-[20px] text-left"
                      >
                        <span>{faq.question}</span>
                        <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      aria-hidden={!isOpen}
                      className="contact-faq-answer-panel overflow-hidden transition-[max-height] duration-200 ease-in-out"
                      style={{ maxHeight: isOpen ? '220px' : '0px' }}
                    >
                      <div className="mt-[16px]">
                        <p className="contact-faq-answer type-088 max-w-[800px] text-[#9F9F9F]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>
      </section>

      {/* Put the footer as the very last item inside main */}
      <Footer animateSequence />
    </main>
  );
}