import { ArrowRight, Calendar } from 'lucide-react';
import CtaOrbit from '@/app/components/home/cta-orbit';
import type { CtaOrbitData } from '@/lib/data/ctaorbitdata';

type CtaOrbitSectionProps = {
  data: CtaOrbitData;
};

export default function CtaOrbitSection({ data }: CtaOrbitSectionProps) {
  return (
    <section className="w-full flex flex-col items-center pt-[250px] pb-[150px] px-4 bg-black overflow-hidden">
      <div
        className="relative z-10 flex min-h-[733.7px] w-full max-w-[1280px] flex-col items-center justify-center rounded-[32px] py-[100px]"
        style={{ backgroundColor: data.colors.panel }}
      >
        <CtaOrbit images={[...data.images]} />

        <div className="relative z-20 flex max-w-[597px] flex-col items-center text-center">
          <div
            className="mb-[30px] flex items-center justify-center rounded-full px-[16px] py-[6px]"
            style={{ backgroundColor: data.colors.accent }}
          >
            <span className="text-[12px] font-medium text-white">{data.copy.eyebrow}</span>
          </div>

          <h2
            className="font-bricolage mb-[24px] text-[clamp(2rem,3.6vw,46px)] font-semibold uppercase leading-[0.96] tracking-[-0.05em]"
            style={{ color: data.colors.text }}
          >
            {data.copy.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p
            className="mb-[40px] max-w-[564.9px] text-[17.9px] font-medium leading-[20.8px]"
            style={{ color: data.colors.text }}
          >
            {data.copy.description}
          </p>

          <div className="flex w-full max-w-[407px] items-center justify-center gap-[40px]">
            <button
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
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
