'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

type ProcessStoryProps = {
  children: ReactNode;
};

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function ProcessStory({ children }: ProcessStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const scrollRange = section.offsetHeight - window.innerHeight;
      const progress = scrollRange > 0
        ? clamp(-section.getBoundingClientRect().top / scrollRange)
        : 0;
      const intro = section.querySelector<HTMLElement>('[data-process-intro]');
      const cards = section.querySelectorAll<HTMLElement>('[data-process-card]');
      const cta = section.querySelector<HTMLElement>('[data-process-cta]');

      if (window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches) {
        if (intro) {
          intro.style.opacity = '1';
          intro.style.filter = 'none';
          intro.style.transform = 'none';
        }
        cards.forEach((card) => {
          card.style.opacity = '1';
          card.style.transform = 'none';
        });
        if (cta) {
          cta.style.opacity = '1';
          cta.style.transform = 'none';
        }
        return;
      }

      if (intro) {
        const introProgress = clamp(progress / 0.34);
        intro.style.opacity = String(1 - introProgress);
        intro.style.filter = `blur(${introProgress * 14}px)`;
        intro.style.transform = `translate3d(0, ${introProgress * -48}px, 0)`;
      }

      cards.forEach((card, index) => {
        const start = 0.1 + index * 0.19;
        const cardProgress = clamp((progress - start) / 0.17);
        const travel = window.innerHeight * 0.78;

        card.style.opacity = String(cardProgress);
        card.style.transform = `translate3d(0, ${(1 - cardProgress) * travel}px, 0) scale(${0.94 + cardProgress * 0.06})`;
      });

      if (cta) {
        const ctaProgress = clamp((progress - 0.78) / 0.18);
        cta.style.opacity = String(ctaProgress);
        cta.style.transform = `translate3d(-50%, ${(1 - ctaProgress) * 28}px, 0)`;
      }
    };

    let frame = 0;
    const scheduleUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        updateProgress();
        frame = 0;
      });
    };

    updateProgress();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="process-story">
      {children}
    </section>
  );
}
