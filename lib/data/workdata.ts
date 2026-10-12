import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Eye,
  Scissors,
  TrendingUp,
} from 'lucide-react';

export const WORK_HERO_DATA = {
  heading: 'SELECTED\nWORK',
  description:
    'Explore creator campaigns, UGC, social content, branding and video projects from Think Wild Media and the team behind it.',
  backgroundImage:
    '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/01-work-hero/images/originals/01-work-hero--1404-17487--source.png',
  backgroundImageAlt: 'Selected Work Background',
  stats: [
    { label: 'UGC', sublabel: 'Creative', icon: Eye },
    { label: 'Reels', sublabel: 'Format', icon: Scissors },
    { label: 'Social', sublabel: 'Focus', icon: TrendingUp },
  ],
  carouselCards: [
    {
      id: 1,
      title: "PLUMP'D",
      subtitle: 'MODERN WISDOM',
      image:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/01-work-hero/images/originals/thumbnail-card--1404-17513--source.png',
    },
    {
      id: 2,
      title: 'ROUTINE STORIES',
      subtitle: 'DEEP DIVE',
      image:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/01-work-hero/images/originals/thumbnail-card--1404-17518--source.jpg',
    },
    {
      id: 3,
      title: 'CREATOR VOICES',
      subtitle: 'REELS CLIP',
      image:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/01-work-hero/images/originals/mockup-card--1404-17523--source.jpg',
    },
  ],
  carouselNavigationIcons: [ChevronLeft, ChevronRight],
};

export const WORK_GRID_DATA = {
  filters: ['All', 'Branding', 'Content', 'Creator Campaigns', 'Social', 'Video'],
  projectAction: {
    label: 'View Project',
    icon: ArrowRight,
  },
  projects: [
    {
      id: 1,
      title: "PLUMP'D BEAUTY",
      category: 'Beauty & Wellness',
      service: 'Product content',
      stats: [
        { number: '03', label: 'Product story pillars' },
        { number: '02', label: 'Short-form formats' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/01-work-hero/images/originals/thumbnail-card--1404-17513--source.png',
      tags: ['Content', 'Video', 'Social'],
      href: '/plumpstudy',
    },
    {
      id: 2,
      title: 'ORALYN SKINCARE',
      category: 'Beauty & Wellness',
      service: 'Social strategy',
      stats: [
        { number: '03', label: 'Creator angles' },
        { number: '02', label: 'Social channels' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/03-concept-gallery/images/originals/image-36--1404-17641--source.png',
      tags: ['Social', 'Creator Campaigns', 'Branding'],
      href: '/plumpstudy',
    },
    {
      id: 3,
      title: 'ROUTINE STORIES',
      category: 'Skincare',
      service: 'Short-form video',
      stats: [
        { number: '03', label: 'Routine hooks' },
        { number: '02', label: 'Video styles' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/03-concept-gallery/images/originals/case-study-image--1404-17736--source.png',
      tags: ['Branding', 'Content'],
      href: '/plumpstudy',
    },
    {
      id: 4,
      title: 'TEXTURE STUDIES',
      category: 'Beauty & Wellness',
      service: 'Visual direction',
      stats: [
        { number: '03', label: 'Visual routes' },
        { number: '02', label: 'Product scenes' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/03-concept-gallery/images/originals/image-34--1404-17768--source.png',
      tags: ['Creator Campaigns', 'Video', 'Social'],
      href: '/plumpstudy',
    },
    {
      id: 5,
      title: 'CREATOR VOICES',
      category: 'Beauty & Wellness',
      service: 'Creator content',
      stats: [
        { number: '03', label: 'Creator briefs' },
        { number: '02', label: 'UGC formats' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/03-concept-gallery/images/originals/image-33--1404-17673--source.png',
      tags: ['Creator Campaigns', 'Video', 'Social'],
      href: '/plumpstudy',
    },
    {
      id: 6,
      title: 'SOCIAL SERIES',
      category: 'Beauty & Wellness',
      service: 'Social content',
      stats: [
        { number: '03', label: 'Content themes' },
        { number: '02', label: 'Series formats' },
      ],
      imageSrc:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/case-studies/03-concept-gallery/images/originals/image-35--1404-17705--source.png',
      tags: ['Content', 'Creator Campaigns', 'Social'],
      href: '/plumpstudy',
    },
  ],
  pagination: {
    pageIndicator: '1 / 2',
    nextLabel: 'Next ›',
  },
  projectMetadataSeparator: '·',
};
