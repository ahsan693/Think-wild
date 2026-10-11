const CTA_ORBIT_IMAGES = [
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16104--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16106--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16109--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16112--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16120--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-image--1404-16118--source.jpg',
  '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/image-final-cta-01--1404-16115--source.jpg',
] as const;

export const CTA_ORBIT_DATA = {
  home: {
    copy: {
      eyebrow: 'Ready?',
      heading: ['STOP THE SCROLL.', 'START THE CONVERSATION'],
      description:
        "Tell our Dublin team about your brief. We'll shape the right creator campaign, content plan or social strategy for your brand.",
      primaryAction: 'Start a Project',
      secondaryAction: 'See our work',
    },
    images: CTA_ORBIT_IMAGES,
    colors: {
      panel: '#D3FFC4',
      text: '#155149',
      accent: '#155149',
      accentText: '#FFFFFF',
      iconBackground: '#FFFFFF',
      iconForeground: '#155149',
    },
  },
  about: {
    copy: {
      eyebrow: 'Ready?',
      heading: ['MAKE CONTENT', 'PEOPLE WANT TO WATCH.'],
      description:
        "Tell our Dublin team about your brief. We'll shape the right creator campaign, content plan or social strategy for your brand.",
      primaryAction: 'Start a Project',
      secondaryAction: 'See our work',
    },
    images: CTA_ORBIT_IMAGES,
    colors: {
      panel: '#FFEEFD',
      text: '#EC4037',
      accent: '#EC4037',
      accentText: '#FFFFFF',
      iconBackground: '#FFFFFF',
      iconForeground: '#EC4037',
    },
  },
  services: {
    copy: {
      eyebrow: 'Ready?',
      heading: ['MAKE CONTENT', 'PEOPLE WANT TO WATCH.'],
      description:
        "Tell our Dublin team what you're planning and we'll shape the right creator campaign, content production or social media approach for your brand.",
      primaryAction: 'Start a Project',
      secondaryAction: 'See our work',
    },
    images: CTA_ORBIT_IMAGES,
    colors: {
      panel: '#BEE9FE',
      text: '#4A00E0',
      accent: '#4A00E0',
      accentText: '#FFFFFF',
      iconBackground: '#FFFFFF',
      iconForeground: '#4A00E0',
    },
  },
  work: {
    copy: {
      eyebrow: 'Ready?',
      heading: ['HAVE A PROJECT IN MIND?'],
      description:
        "Tell us what you're planning and we'll shape the right creator, content or social approach around it.",
      primaryAction: 'Start a Project',
      secondaryAction: 'Explore Services',
    },
    images: CTA_ORBIT_IMAGES,
    colors: {
      panel: '#F1E55C',
      text: '#F56633',
      accent: '#F56633',
      accentText: '#FFFFFF',
      iconBackground: '#FFFFFF',
      iconForeground: '#F56633',
    },
  },
} as const;

export type CtaOrbitData = (typeof CTA_ORBIT_DATA)[keyof typeof CTA_ORBIT_DATA];
