import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_DATA } from '@/lib/data/footerdata';

export default function Footer() {
  return (
    // Outer container: Full width, top border (1px white 12% opacity), top padding 64px[cite: 112]
    <footer className="site-footer min-h-[930px] w-full bg-black border-t border-white/10 pt-[64px] flex flex-col items-center overflow-hidden relative z-10 font-[family-name:var(--font-saans)] md:min-h-0">
      
      {/* Inner Container: 1200px max-width, horizontal padding for responsiveness[cite: 114] */}
      <div className="w-full max-w-[1200px] px-[20px] flex flex-col z-20">
        
        {/* Top Content Row: Flex container splitting left description and right links */}
        <div className="mb-[32px] flex w-full flex-col justify-between gap-[32px] lg:mb-[60px] lg:flex-row lg:gap-0">
          
          <div className="flex flex-col w-full lg:max-w-[589px]">
            <Link href={FOOTER_DATA.logo.href} className="mb-[24px] w-fit">
              <Image
                src={FOOTER_DATA.logo.src}
                alt={FOOTER_DATA.logo.alt}
                width={FOOTER_DATA.logo.width}
                height={FOOTER_DATA.logo.height}
              />
            </Link>
            
            <p className="max-w-[400px] text-[14px] leading-[20px] text-[#9F9F9F] md:text-[16px] md:leading-[24px]">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div className="flex w-full flex-col justify-between gap-[32px] lg:max-w-[571px] lg:flex-row lg:flex-nowrap lg:gap-0">
            {FOOTER_DATA.columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-[8px] md:gap-[16px]">
                <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-[4px]">
                  {column.heading}
                </span>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] text-[#9F9F9F] transition-colors hover:text-white md:text-[15px] ${column.mobileLinks ? 'hidden md:block' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
                {column.mobileLinks?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[14px] text-[#9F9F9F] transition-colors hover:text-white md:hidden"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/10 py-[24px] flex flex-col-reverse md:flex-row items-center justify-between gap-[20px] md:gap-0">
          <span className="text-[#9F9F9F] text-[14px]">
            {FOOTER_DATA.copyright}
          </span>
          <div className="flex items-center gap-[24px]">
            {FOOTER_DATA.socialLinks.map((social) => (
              <Link key={social.label} href={social.href} className="text-[#9F9F9F] text-[14px] underline hover:text-white transition-colors">
                {social.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Giant Background Text: 298.47px font size, 268.62px line height, -3% tracking[cite: 118] */}
      <div className="w-full flex justify-center pointer-events-none mt-[56px] pb-[10px] md:mt-[-20px]">
        <h2 
          className="select-none whitespace-nowrap text-[68px] font-semibold uppercase leading-none tracking-[-0.03em] text-[#151515] md:text-[clamp(40px,15.5vw,298.47px)]"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {FOOTER_DATA.backgroundText}
        </h2>
      </div>

    </footer>
  );
}