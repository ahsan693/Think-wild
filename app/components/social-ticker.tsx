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
      <p className="mb-[20px] text-[17.7px] font-medium text-white">
        {HOME_SOCIAL_TICKER.heading}
      </p>
      <div className="relative flex h-[38px] w-full max-w-[620px] items-center overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-[40px] w-[84px] bg-gradient-to-r from-black to-transparent" />
        <div className="social-platform-marquee flex w-max items-center gap-[12px]">
          {tickerItems.map((platform, idx) => (
            <div
              key={`${platform.name}-${idx}`}
              className="social-platform-capsule flex h-[38px] shrink-0 items-center gap-[8px] rounded-full bg-white py-[6px] pl-[6px] pr-[16px]"
            >
              <Image
                src={platform.iconUrl}
                alt=""
                width={26}
                height={26}
                className="h-[26px] w-[26px] shrink-0 rounded-full"
              />
              <span className="text-[14px] font-medium text-[#1D1D1D]">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-[38px] w-[76px] bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
}
