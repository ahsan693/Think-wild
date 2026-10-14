import Image from 'next/image';
import { HOME_SOCIAL_TICKER } from '@/lib/data/homedata';

type SocialTickerProps = {
  className?: string;
};

export default function SocialTicker({ className = '' }: SocialTickerProps) {
  const tickerItems = Array.from(
    { length: 5 },
    () => HOME_SOCIAL_TICKER.platforms,
  ).flat();

  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      <p className="mb-[12px] whitespace-nowrap text-[12px] font-medium text-white md:mb-[20px] md:text-[17.7px]">
        {HOME_SOCIAL_TICKER.heading}
      </p>
      <div className="relative flex h-[24px] w-full max-w-[620px] items-center overflow-hidden md:h-[38px]">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[42px] bg-gradient-to-r from-black to-transparent md:w-[84px]" />
        <div className="social-platform-marquee flex w-max items-center gap-[6px] md:gap-[12px]">
          {tickerItems.map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              className="social-platform-capsule flex h-[24px] shrink-0 items-center gap-[4px] rounded-full bg-white py-[4px] pl-[4px] pr-[8px] md:h-[38px] md:gap-[8px] md:py-[6px] md:pl-[6px] md:pr-[16px]"
            >
              <Image
                src={platform.iconUrl}
                alt=""
                width={26}
                height={26}
                className="h-[16px] w-[16px] shrink-0 rounded-full md:h-[26px] md:w-[26px]"
              />
              <span className="text-[10px] font-medium text-[#1D1D1D] md:text-[14px]">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[38px] bg-gradient-to-l from-black to-transparent md:w-[76px]" />
      </div>
    </div>
  );
}
