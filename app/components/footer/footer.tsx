import Link from 'next/link';

export default function Footer() {
  return (
    // Outer container: Full width, top border (1px white 12% opacity), top padding 64px[cite: 112]
    <footer className="site-footer w-full bg-black border-t border-white/10 pt-[64px] flex flex-col items-center overflow-hidden relative z-10 font-[family-name:var(--font-saans)]">
      
      {/* Inner Container: 1200px max-width, horizontal padding for responsiveness[cite: 114] */}
      <div className="w-full max-w-[1200px] px-[20px] flex flex-col z-20">
        
        {/* Top Content Row: Flex container splitting left description and right links */}
        <div className="flex flex-col lg:flex-row justify-between w-full mb-[60px] gap-[40px] lg:gap-0">
          
          {/* Left Side (Logo & Desc): 589px width[cite: 116] */}
          <div className="flex flex-col w-full lg:max-w-[589px]">
            {/* Fake Logo (Replace with your actual SVG/Image) */}
            <div className="flex items-center gap-[10px] mb-[24px]">
              <div className="text-[#8CFE79]">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-[24px] font-bold text-white tracking-tight">Think Wild <span className="text-[12px] font-normal align-top">Media</span></span>
            </div>
            
            {/* Description Text */}
            <p className="text-[#9F9F9F] text-[16px] leading-[24px] max-w-[400px]">
              Creator-led campaigns, social content and influencer marketing built for brands that want to be noticed.
            </p>
          </div>

          {/* Right Side (Links): 571px width[cite: 115] */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between w-full lg:max-w-[571px] gap-[40px] lg:gap-0">
            
            {/* Column 1: Company */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-[4px]">Company</span>
              {['About', 'Services', 'Creators', 'Work'].map((link) => (
                <Link key={link} href="#" className="text-[#9F9F9F] text-[15px] hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-[4px]">Services</span>
              {[
                'Creator & Influencer Campaigns', 
                'Content Production', 
                'Social Media Management', 
                'Social Creative Strategy'
              ].map((link) => (
                <Link key={link} href="#" className="text-[#9F9F9F] text-[15px] hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-[16px]">
              <span className="text-[14px] font-bold text-white uppercase tracking-wider mb-[4px]">Resources</span>
              {['FAQs', 'Work', 'Contact'].map((link) => (
                <Link key={link} href="#" className="text-[#9F9F9F] text-[15px] hover:text-white transition-colors">
                  {link}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Copyright Row: 1160px max width inside the 1200px container, Top Border 12% opacity, 24px padding[cite: 117] */}
        <div className="w-full border-t border-white/10 py-[24px] flex flex-col md:flex-row items-center justify-between gap-[20px] md:gap-0">
          <span className="text-[#9F9F9F] text-[14px]">
            © 2026 Think Wild Media. All rights reserved.
          </span>
          <div className="flex items-center gap-[24px]">
            {['Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map((social) => (
              <Link key={social} href="#" className="text-[#9F9F9F] text-[14px] underline hover:text-white transition-colors">
                {social}
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
          THINK WILD MEDIA
        </h2>
      </div>

    </footer>
  );
}