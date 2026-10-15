'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { HOME_FAQ } from '@/lib/data/homedata';

export default function HomeFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(() => {
    const initialIndex = HOME_FAQ.items.findIndex((faq) => faq.isOpen);
    return initialIndex === -1 ? null : initialIndex;
  });

  return (
    <section className="flex min-h-[873.5px] w-full flex-col items-center overflow-x-clip bg-black px-5 pb-[48px] pt-[48px] md:min-h-0 md:px-4 md:pb-[150px] md:pt-[135px]">
      <div className="flex w-full max-w-[1440px] flex-col items-center">
        <h2 data-scroll-reveal className="mb-[56px] w-full px-[8px] text-center font-bricolage text-[40px] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-white md:mb-[64px] md:px-0 md:text-[70px]">
          {HOME_FAQ.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <div data-scroll-stagger className="flex w-full max-w-[916.84px] flex-col gap-[20px] md:gap-0">
          {HOME_FAQ.items.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const answerId = `home-faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                data-scroll-card
                className={`flex w-full flex-col transition-colors duration-200 ${
                  isOpen
                    ? 'rounded-[20px] bg-[#1A1A1A] p-[20px] md:mb-[16px] md:rounded-[24px] md:px-[40px] md:py-[38px]'
                    : 'border-b border-white/10 py-[32px] md:border-b-2 md:border-white/[0.08] md:px-[40px] md:py-[30px]'
                }`}
              >
                <h3 className="w-full text-[18px] font-bold leading-tight tracking-tight text-white md:text-[24px]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-[20px] text-left"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-white/30 text-white"
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '220px' : '0px',
                  }}
                >
                  <p className="mt-[12px] max-w-[800px] text-[14px] font-medium text-[#9F9F9F] md:mt-[16px] md:text-[16px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
