'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function HomeScrollAnimations() {
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
  }, []);

  return <span ref={markerRef} hidden aria-hidden="true" />;
}
