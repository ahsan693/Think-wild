export const FOOTER_DATA = {
  logo: {
    href: '/',
    src: '/Think-Wild-Media-Developer-Assets/Icons/mobile/home/12-footer/icons/logo--I1565-28939_1435-6793.svg',
    alt: 'Think Wild Media',
    width: 350,
    height: 65,
  },
  description:
    'Creator-led campaigns, social content and influencer marketing built for brands that want to be noticed.',
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Creators', href: '#' },
        { label: 'Work', href: '#' },
      ],
      mobileLinks: [
        { label: 'About', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Our approach', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Creator & Influencer Campaigns', href: '#' },
        { label: 'Content Production', href: '#' },
        { label: 'Social Media Management', href: '#' },
        { label: 'Social Creative Strategy', href: '#' },
      ],
      mobileLinks: undefined,
    },
    {
      heading: 'Resources',
      links: [
        { label: 'FAQs', href: '#' },
        { label: 'Work', href: '#' },
        { label: 'Contact', href: '#' },
      ],
      mobileLinks: undefined,
    },
  ],
  copyright: '© 2026 Think Wild Media. All rights reserved.',
  socialLinks: [
    { label: 'Instagram', href: '#' },
    { label: 'TikTok', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  backgroundText: 'Think Wild Media',
} as const;