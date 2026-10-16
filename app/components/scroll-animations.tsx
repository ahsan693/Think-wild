'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ScrollAnimationsProps = {
  variant?: 'default' | 'home';
};

export default function ScrollAnimations({ variant = 'default' }: ScrollAnimationsProps) {
  const markerRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = markerRef.current?.closest('main');

    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia(root);
    media.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const revealDistance = isMobile ? 18 : 24;
        if (variant === 'home') {
          const context = gsap.context(() => {
            const loader = root.querySelector<HTMLElement>('[data-home-loader]');
            const loaderProgress = root.querySelector<HTMLElement>('[data-home-loader-progress]');
            const header = root.querySelector<HTMLElement>('header');
            const heroWords = root.querySelectorAll<HTMLElement>('[data-home-hero-word]');
            const heroHighlight = root.querySelector<HTMLElement>('[data-home-hero-highlight]');
            const heroSupport = root.querySelectorAll<HTMLElement>('[data-home-hero-support]');

            const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (loader && loaderProgress) {
              intro
                .set(loader, { autoAlpha: 1, yPercent: 0 })
                .fromTo(loaderProgress, { scaleX: 0 }, { scaleX: 1, duration: 0.38, ease: 'power2.inOut' })
                .to(loader, { yPercent: -100, duration: 0.42, ease: 'power3.inOut' }, '>-0.02')
                .set(loader, { autoAlpha: 0 });
            }

            if (header) {
              intro.fromTo(
                header,
                { autoAlpha: 0, y: -10 },
                { autoAlpha: 1, y: 0, duration: 0.3 },
                loader ? '-=0.16' : 0,
              );
            }

            if (heroWords.length > 0) {
              intro.fromTo(
                heroWords,
                { autoAlpha: 0, yPercent: 110 },
                { autoAlpha: 1, yPercent: 0, duration: 0.36, stagger: 0.045, ease: 'power3.out' },
                loader ? '-=0.18' : 0.08,
              );
            }

            if (heroHighlight) {
              intro.fromTo(
                heroHighlight,
                { autoAlpha: 0, scale: 0.96 },
                { autoAlpha: 1, scale: 1, duration: 0.34 },
                '<0.06',
              );
            }

            if (heroSupport.length > 0) {
              intro.fromTo(
                heroSupport,
                { autoAlpha: 0, y: 10 },
                { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.055 },
                '>-0.08',
              );
            }

            root.querySelectorAll<HTMLElement>('[data-sequence-section]').forEach((section) => {
              const items = Array.from(
                section.querySelectorAll<HTMLElement>('[data-sequence-item]'),
              ).filter((item) => item.closest('[data-sequence-section]') === section);
              if (section.matches('[data-sequence-item]')) items.unshift(section);

              if (items.length === 0) return;

              const sequence = gsap.timeline({ paused: true });
              let position = 0;

              items.forEach((item) => {
                sequence.fromTo(
                  item,
                  { autoAlpha: 0, y: isMobile ? 14 : 18 },
                  {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.28,
                    ease: 'power3.out',
                  },
                  position,
                );

                const imageFrames = Array.from(
                  item.querySelectorAll<HTMLElement>('[data-sequence-image]'),
                );
                imageFrames.forEach((frame) => {
                  sequence.fromTo(
                    frame,
                    { clipPath: 'inset(0 0 100% 0)' },
                    { clipPath: 'inset(0 0 0% 0)', duration: 0.32, ease: 'power2.out' },
                    position,
                  );

                  const image = frame.querySelector<HTMLElement>('img');
                  if (image) {
                    sequence.fromTo(
                      image,
                      { scale: 1.025 },
                      { scale: 1, duration: 0.32, ease: 'power2.out' },
                      position,
                    );
                  }
                });

                const text = Array.from(
                  item.querySelectorAll<HTMLElement>('[data-sequence-text]'),
                );
                if (text.length > 0) {
                  sequence.fromTo(
                    text,
                    { autoAlpha: 0, y: 5 },
                    {
                      autoAlpha: 1,
                      y: 0,
                      duration: 0.2,
                      stagger: 0.025,
                      ease: 'power2.out',
                    },
                    position + 0.04,
                  );
                }

                position += Math.max(0.25, 0.06 + 0.2 + Math.max(0, text.length - 1) * 0.025) + 0.025;
              });

              ScrollTrigger.create({
                trigger: section,
                start: 'top 82%',
                once: true,
                onEnter: () => sequence.play(0),
                onRefresh: (self) => {
                  if (self.progress > 0) sequence.play(0);
                },
              });
            });

          }, root);
          ScrollTrigger.refresh();
          return () => context.revert();
        }

        const context = gsap.context(() => {
          const revealOnEnter = (
              targets: HTMLElement | HTMLElement[],
              trigger: HTMLElement,
              start: string,
              y: number,
              stagger = 0,
            ) => {
              const animation = gsap.fromTo(
                targets,
                { autoAlpha: 0, y },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.9,
                  stagger,
                  ease: 'power4.out',
                  paused: true,
                },
              );

              ScrollTrigger.create({
                trigger,
                start,
                once: true,
                onEnter: () => animation.play(),
                onRefresh: (self) => {
                  if (self.progress > 0) animation.play();
                },
              });
            };

            const heroLines = root.querySelectorAll<HTMLElement>('[data-hero-line]');
            const heroHighlight = root.querySelector<HTMLElement>('[data-hero-highlight]');
            const heroSupport = root.querySelectorAll<HTMLElement>('[data-hero-support]');

            gsap.timeline({ defaults: { ease: 'power4.out' } })
              .fromTo(
                heroLines,
                { yPercent: 110 },
                { yPercent: 0, duration: 1.15, stagger: 0.14 },
                0.12,
              )
              .fromTo(
                heroHighlight,
                { autoAlpha: 0, scale: 0.94 },
                { autoAlpha: 1, scale: 1, duration: 0.9 },
                0.5,
              )
              .fromTo(
                heroSupport,
                { autoAlpha: 0, y: 14 },
                { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
                0.58,
              );

            root.querySelectorAll<HTMLElement>('[data-scroll-reveal]').forEach((element) => {
              revealOnEnter(
                element,
                element,
                'top 88%',
                revealDistance,
              );
            });

            const groupedCards = new Set<HTMLElement>();
            root.querySelectorAll<HTMLElement>('[data-scroll-stagger]').forEach((group) => {
              const cards = Array.from(group.querySelectorAll<HTMLElement>('[data-scroll-card]'));

              cards.forEach((card) => groupedCards.add(card));

              if (cards.length === 0) return;

              revealOnEnter(
                cards,
                group,
                'top 86%',
                revealDistance + 4,
                0.12,
              );
            });

            root.querySelectorAll<HTMLElement>('[data-scroll-card]').forEach((card) => {
              if (groupedCards.has(card)) return;

              revealOnEnter(
                card,
                card,
                'top 86%',
                revealDistance + 4,
              );
            });

            root.querySelectorAll<HTMLElement>('[data-image-reveal]').forEach((frame) => {
              const image = frame.querySelector<HTMLElement>('img');
              const animation = isMobile
                ? gsap.timeline({ paused: true })
                : gsap.timeline({
                    scrollTrigger: {
                      trigger: frame,
                      start: 'top 88%',
                      end: 'top 46%',
                      scrub: 0.8,
                    },
                  });

              animation.fromTo(
                frame,
                { clipPath: 'inset(0 0 100% 0)' },
                { clipPath: 'inset(0 0 0% 0)', duration: 1, ease: 'power2.inOut' },
                0,
              );

              if (image) {
                animation.fromTo(
                  image,
                  { scale: 1.06 },
                  { scale: 1, duration: 1, ease: 'power2.out' },
                  0,
                );
              }

              if (isMobile) {
                ScrollTrigger.create({
                  trigger: frame,
                  start: 'top 88%',
                  once: true,
                  onEnter: () => animation.play(),
                  onRefresh: (self) => {
                    if (self.progress > 0) animation.play();
                  },
                });
              }
          });
        }, root);

        ScrollTrigger.refresh();

        return () => context.revert();
      });

    return () => media.revert();
  }, [variant]);

  return (
    <>
      <span ref={markerRef} hidden aria-hidden="true" />
      {variant === 'home' && (
        <div className="home-page-loader" data-home-loader aria-hidden="true">
          <div className="flex w-[min(260px,70vw)] flex-col items-center gap-[16px]">
            <span className="text-[13px] font-semibold uppercase tracking-[0.24em] text-white">
              Think Wild
            </span>
            <span className="h-[2px] w-full overflow-hidden bg-white/20">
              <span
                className="home-page-loader-progress block h-full w-full origin-left bg-[#8CFE79]"
                data-home-loader-progress
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
}
