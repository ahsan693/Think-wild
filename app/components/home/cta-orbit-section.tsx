import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import CtaOrbit from '@/app/components/home/cta-orbit';
import type { CtaOrbitData } from '@/lib/data/ctaorbitdata';

type CtaOrbitSectionProps = {
  data: CtaOrbitData;
  arrowIconSrc?: string;
  animateSequence?: boolean;
};

export default function CtaOrbitSection({ data, arrowIconSrc, animateSequence = false }: CtaOrbitSectionProps) {
  return (
    <section data-sequence-section={animateSequence ? '' : undefined} className="w-full flex flex-col items-center pt-[250px] pb-[150px] px-4 bg-black overflow-hidden">
      <div
        data-sequence-item={animateSequence ? '' : undefined}
        className="relative z-10 flex min-h-[580px] w-full max-w-[355px] flex-col items-center justify-center rounded-[27.31px] py-[56px] md:min-h-[733.7px] md:max-w-[1280px] md:rounded-[32px] md:py-[100px]"
        style={{ backgroundColor: data.colors.panel }}
      >
        <CtaOrbit images={[...data.images]} />

        <div className="relative z-20 flex w-full max-w-[300px] flex-col items-center text-center md:max-w-[650px]">
          <div
            data-sequence-text={animateSequence ? '' : undefined}
            className="mb-[16px] flex items-center justify-center rounded-full px-[16px] py-[6px] md:mb-[30px]"
            style={{ backgroundColor: data.colors.accent }}
          >
            <span className="text-[12px] font-medium text-white">{data.copy.eyebrow}</span>
          </div>

          <h2
            data-sequence-text={animateSequence ? '' : undefined}
            className="font-bricolage mb-[16px] w-full text-[36px] font-semibold uppercase leading-[0.96] tracking-[-0.05em] md:mb-[30px] md:text-[clamp(2rem,3.6vw,50px)]"
            style={{ color: data.colors.text }}
          >
            {data.copy.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p
            data-sequence-text={animateSequence ? '' : undefined}
            className="mb-[20px] w-full max-w-[628px] text-[14px] font-medium leading-[18px] md:mb-[40px] md:text-[17.9px] md:leading-[20.8px]"
            style={{ color: data.colors.text }}
          >
            {data.copy.description}
          </p>

          <div className="flex w-full max-w-[407px] flex-col items-center justify-center gap-[8px] md:flex-row md:gap-[40px]">
            <button
              data-sequence-text={animateSequence ? '' : undefined}
              type="button"
              className="flex h-[52px] items-center gap-[12px] rounded-full py-[6px] pl-[6px] pr-[24px] transition-colors hover:brightness-90"
              style={{ backgroundColor: data.colors.accent, color: data.colors.accentText }}
            >
              <span
                className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: data.colors.iconBackground,
                  color: data.colors.iconForeground,
                }}
              >
                <Calendar className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-[16px] font-medium">{data.copy.primaryAction}</span>
            </button>

            <button
              data-sequence-text={animateSequence ? '' : undefined}
              type="button"
              className="group flex h-[52px] items-center gap-[12px] rounded-full bg-transparent px-[6px] py-[6px]"
              style={{ color: data.colors.text }}
            >
              <span className="text-[16px] font-medium transition-opacity group-hover:opacity-80">
                {data.copy.secondaryAction}
              </span>
              <span
                className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105"
                style={{ backgroundColor: data.colors.accent, color: data.colors.accentText }}
              >
                {arrowIconSrc ? (
                  <Image src={arrowIconSrc} alt="" aria-hidden="true" width={18} height={13} />
                ) : (
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
