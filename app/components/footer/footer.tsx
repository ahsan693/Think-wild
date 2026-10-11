import Link from 'next/link';
import Image from 'next/image';
import { FOOTER_DATA } from '@/lib/data/footerdata';

export default function Footer() {
  return (
    // Outer container: Full width, top border (1px white 12% opacity), top padding 64px[cite: 112]
    <footer className="site-footer w-full bg-black border-t border-white/10 pt-[64px] flex flex-col items-center overflow-hidden relative z-10 font-[family-name:var(--font-saans)]">
      
      {/* Inner Container: 1200px max-width, horizontal padding for responsiveness[cite: 114] */}
      <div className="w-full max-w-[1200px] px-[20px] flex flex-col z-20">
        
        {/* Top Content Row: Flex container splitting left description and right links */}
        <div className="flex flex-col lg:flex-row justify-between w-full mb-[60px] gap-[40px] lg:gap-0">
          
          <div className="flex flex-col w-full lg:max-w-[589px]">
            <Link href={FOOTER_DATA.logo.href} className="mb-[24px] w-fit">
              <Image
                src={FOOTER_DATA.logo.src}
                alt={FOOTER_DATA.logo.alt}
                width={FOOTER_DATA.logo.width}
                height={FOOTER_DATA.logo.height}
              />
            </Link>
            
            <p className="text-[#9F9F9F] text-[16px] leading-[24px] max-w-[400px]">
              {FOOTER_DATA.description}
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap justify-between w-full lg:max-w-[571px] gap-[40px] lg:gap-0">
            {FOOTER_DATA.columns.map((column) => (
              <div key={column.heading} className="flex flex-col gap-[16px]">
                <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-[4px]">
                  {column.heading}
                </span>
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[#9F9F9F] text-[15px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-white/10 py-[24px] flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
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
      <div className="w-full flex justify-center pointer-events-none mt-[-20px] pb-[10px]">
        <h2 
          className="text-[#151515] font-semibold text-[150px] md:text-[298.47px] leading-[1] md:leading-[268.62px] tracking-[-0.03em] uppercase whitespace-nowrap select-none"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {FOOTER_DATA.backgroundText}
        </h2>
      </div>

    </footer>
  );
}