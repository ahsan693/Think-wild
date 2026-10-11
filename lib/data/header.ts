// Header brand mark.
export const HEADER_LOGO = {
  href: '/',
  src: '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/13-nav/icons/logo--1404-16214.svg',
  alt: 'Think Wild Media',
  width: 121,
  height: 34,
} as const;

// Primary navigation links.
export const HEADER_NAVIGATION = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
] as const;

// Project CTA content and icon key (mapped to its Lucide icon in the component).
export const HEADER_CTA = {
  label: 'Start a Project',
  href: '/contact',
  icon: 'arrowRight',
} as const;