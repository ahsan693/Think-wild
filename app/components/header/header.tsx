import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react'; // Or your preferred icon library

export default function Header() {
  return (
    // Main wrapper limiting width to 1200px
    <header className="w-full max-w-[1200px] mx-auto px-[16px] pt-4 font-[family-name:var(--font-saans)]">
      
      {/* Inner navbar container with border, pill shape, and space-between layout */}
      <nav className="flex items-center justify-between h-[66px] w-full rounded-full border border-[#161616] bg-black/50 backdrop-blur-md py-[10px] px-[16px]">
        
        {/* Logo Section - 34px height[cite: 3] */}
        <Link href="/" className="flex items-center gap-[10px] h-[34px] text-white">
          <Sparkles className="w-6 h-6" /> {/* Placeholder for the Think Wild asterisk logo */}
          <span className="text-[18px] font-semibold tracking-tight">Think Wild</span>
        </Link>

        {/* Navigation Links - 4px gap[cite: 4] */}
        <div className="hidden md:flex items-center gap-[4px] h-[36px]">
          {['Services', 'Work', 'Process', 'About'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              // Nav text: 14px size, 500 weight, 20px line-height, #B6B6B6 color
              className="text-[14px] font-medium leading-[20px] text-[#B6B6B6] hover:text-white px-3 py-2 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Start a Project Button - White bg, 44px height, specific paddings */}
        <Link 
          href="/contact"
          className="flex items-center h-[44px] bg-white rounded-full pl-[16px] pr-[8px] py-[8px] gap-[8px] hover:bg-gray-100 transition-colors"
        >
          {/* Button text: 14px size, #161616 color[cite: 7] */}
          <span className="text-[14px] font-medium leading-[20px] text-[#161616]">
            Start a Project
          </span>
          
          {/* Arrow Icon Wrapper - 28x28px, #161616 background */}
          <div className="flex items-center justify-center w-[28px] h-[28px] bg-[#161616] rounded-full text-white">
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </div>
        </Link>

      </nav>
    </header>
  );
}