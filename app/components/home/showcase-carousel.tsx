'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { BadgeCheck, ChevronLeft, ChevronRight, Eye, ShoppingCart } from 'lucide-react';
import { HOME_SHOWCASE } from '@/lib/data/homedata';

type ShowcaseItem = {
  readonly id: number;
  readonly username: string;
  readonly views: string;
  readonly sales: string;
  readonly imageUrl: string;
};

type ShowcaseCarouselProps = {
  items: readonly ShowcaseItem[];
};

const REPEATED_SETS = 7;
const CENTER_SET = Math.floor(REPEATED_SETS / 2);

export default function ShowcaseCarousel({ items }: ShowcaseCarouselProps) {
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const centerOffsetRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const centerSetRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const centerSet = centerSetRef.current;

    if (!viewport || !centerSet) return;

    const centerTrack = () => {
      const nextOffset =
        centerSet.offsetLeft - (viewport.clientWidth - centerSet.offsetWidth) / 2;
      centerOffsetRef.current = nextOffset;
      offsetRef.current = nextOffset;
      setOffset(nextOffset);
    };

    centerTrack();

    const resizeObserver = new ResizeObserver(centerTrack);
    resizeObserver.observe(viewport);
    resizeObserver.observe(centerSet);

    return () => resizeObserver.disconnect();
  }, []);

  const recenterIfNeeded = () => {
    const centerSet = centerSetRef.current;

    if (!centerSet) return;

    const setWidth = centerSet.offsetWidth;
    const start = centerOffsetRef.current;
    let nextOffset = offsetRef.current;

    if (nextOffset >= start + setWidth) {
      nextOffset -= setWidth;
    } else if (nextOffset < start) {
      nextOffset += setWidth;
    }

    offsetRef.current = nextOffset;
    setOffset(nextOffset);
  };

  const scrollCards = (direction: -1 | 1) => {
    offsetRef.current += direction * 220;
    setOffset(offsetRef.current);
  };

  return (
    <>
      <div
        ref={viewportRef}
        data-sequence-item
        className="relative h-[302px] w-full max-w-[100vw] overflow-hidden font-[family-name:var(--font-saans)]"
      >
        <div
          onTransitionEnd={recenterIfNeeded}
          className="flex h-full w-max items-center transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}px)` }}
          role="region"
          aria-label={HOME_SHOWCASE.accessibility.carousel}
          aria-roledescription={HOME_SHOWCASE.accessibility.carouselRole}
        >
          {Array.from({ length: REPEATED_SETS }, (_, setIndex) => (
            <div
              key={setIndex}
              ref={setIndex === CENTER_SET ? centerSetRef : undefined}
              aria-hidden={setIndex !== CENTER_SET}
              className="flex h-full shrink-0 items-center gap-[10px] pr-[10px]"
            >
              {items.map((item, index) => {
                const isLarge = index === 2;
                const alignClass =
                  index === 0 || index === 3 ? 'self-start' :
                  index === 1 || index === 4 ? 'self-end' :
                  'self-center';

                return (
                  <div
                    key={`${setIndex}-${item.id}`}
                    className={`relative flex shrink-0 flex-col overflow-hidden rounded-[24px] border border-white/10 bg-zinc-900 ${
                      isLarge ? 'h-[302px] w-[220px]' : 'h-[259.72px] w-[189.2px]'
                    } ${alignClass}`}
                  >
                    <div className="relative w-full flex-1 overflow-hidden">
                      <img src={item.imageUrl} alt={item.username} className="h-full w-full object-cover" />
                      <div className="absolute left-[12px] top-[12px] z-10 flex items-center gap-[4px]">
                        <span className="text-[13px] font-semibold tracking-tight text-white drop-shadow-md">{item.username}</span>
                        <BadgeCheck className="h-[12px] w-[12px] fill-blue-500 text-white" />
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40px] bg-gradient-to-b from-black/50 to-transparent" />
                    </div>

                    <div className="flex h-[48px] shrink-0 items-center justify-between bg-white px-[16px]">
                      <div className="flex items-center gap-[6px]">
                        <Eye className="h-[14px] w-[14px] text-zinc-400" />
                        <span className="text-[12px] font-medium text-black">{item.views}</span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <ShoppingCart className="h-[14px] w-[14px] text-zinc-400" />
                        <span className="text-[12px] font-medium text-black">{item.sales}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[60px] flex items-center gap-[12px]">
        <button
          data-sequence-item
          type="button"
          onClick={() => scrollCards(-1)}
          aria-label={HOME_SHOWCASE.accessibility.scrollLeft}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1D1D1D] transition-colors hover:bg-zinc-700"
        >
          <ChevronLeft className="h-[20px] w-[20px] text-white" />
        </button>
        <button
          data-sequence-item
          type="button"
          onClick={() => scrollCards(1)}
          aria-label={HOME_SHOWCASE.accessibility.scrollRight}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#1D1D1D] transition-colors hover:bg-zinc-700"
        >
          <ChevronRight className="h-[20px] w-[20px] text-white" />
        </button>
      </div>
    </>
  );
}
