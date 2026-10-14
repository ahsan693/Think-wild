import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HEADER_CTA, HEADER_LOGO, HEADER_NAVIGATION } from '@/lib/data/header';

const headerIcons = {
  arrowRight: ArrowRight,
} as const;

type HeaderProps = {
  arrowIconSrc?: string;
};

export default function Header({ arrowIconSrc }: HeaderProps = {}) {
  const CtaIcon = headerIcons[HEADER_CTA.icon];

  return (
    // Main wrapper limiting width to 1200px
    <header className="mx-auto w-full max-w-[1200px] px-[20px] py-[16px] font-[family-name:var(--font-saans)] md:px-[16px] md:pt-4 md:pb-0">
      
      {/* Inner navbar container with border, pill shape, and space-between layout */}
      <nav className="flex h-[48px] w-full items-center justify-between border-0 bg-transparent p-0 md:h-[66px] md:rounded-full md:border md:border-[#161616] md:bg-[#161616]/80 md:py-[10px] md:px-[16px] md:backdrop-blur-md">
        
        {/* Logo Section - 34px height[cite: 3] */}
        <Link href={HEADER_LOGO.href} className="flex items-center gap-[10px] h-[34px] text-white">
          <Image
            src={HEADER_LOGO.src}
            alt={HEADER_LOGO.alt}
            width={HEADER_LOGO.width}
            height={HEADER_LOGO.height}
            priority
          />
        </Link>

        {/* Navigation Links - 4px gap[cite: 4] */}
        <div className="hidden h-[36px] items-center gap-[4px] md:flex">
          {HEADER_NAVIGATION.map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              // Nav text: 14px size, 500 weight, 20px line-height, #B6B6B6 color
              className="text-[14px] font-medium leading-[20px] text-[#B6B6B6] hover:text-white px-3 py-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link 
          href={HEADER_CTA.href}
          className="hidden h-[44px] items-center gap-[8px] rounded-full bg-white py-[8px] pl-[16px] pr-[8px] transition-colors hover:bg-gray-100 md:flex"
        >
          {/* Button text: 14px size, #161616 color[cite: 7] */}
          <span className="text-[14px] font-medium leading-[20px] text-[#161616]">
            {HEADER_CTA.label}
          </span>
          
          {/* Arrow Icon Wrapper - 28x28px, #161616 background */}
          <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#161616] rounded-full text-white">
            {arrowIconSrc ? (
              <Image src={arrowIconSrc} alt="" aria-hidden="true" width={18} height={13} />
            ) : (
              <CtaIcon className="w-4 h-4" strokeWidth={2} />
            )}
          </div>
        </Link>

        <details className="relative md:hidden">
          <summary className="flex h-[48px] w-[72px] cursor-pointer list-none items-center justify-center text-[20px] font-medium leading-[28px] text-white">
            Menu
          </summary>
          <div className="absolute right-0 top-full z-50 mt-[8px] flex w-[min(350px,calc(100vw-40px))] flex-col gap-[4px] rounded-[16px] border border-[#262626] bg-black p-[16px] shadow-xl">
            {HEADER_NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-[8px] px-[12px] py-[10px] text-[16px] font-medium text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={HEADER_CTA.href}
              className="mt-[8px] flex h-[44px] items-center justify-between rounded-full bg-white py-[8px] pl-[16px] pr-[8px] text-[14px] font-medium text-[#161616]"
            >
              {HEADER_CTA.label}
              <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#161616] text-white">
                {arrowIconSrc ? (
                  <Image src={arrowIconSrc} alt="" aria-hidden="true" width={18} height={13} />
                ) : (
                  <CtaIcon className="h-4 w-4" strokeWidth={2} />
                )}
              </span>
            </Link>
          </div>
        </details>

      </nav>
    </header>
  );
}