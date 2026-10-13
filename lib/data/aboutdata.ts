import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Heart,
  MessageCircle,
  MessageSquare,
  Star,
  Users,
  Zap,
} from 'lucide-react';

export const ABOUT_HERO_DATA = {
  eyebrow: 'About us',
  heading: 'WE MAKE\nBRANDS WORTH',
  highlight: 'FOLLOWING',
  highlightBackground: 'bg-[#FF742E]',
  description:
    'Think Wild Media is a Dublin influencer marketing and content agency creating creator campaigns, UGC and social-first content that feels relevant and worth following.',
  action: 'See our work',
  images: {
    phoneVideo:
      '/Think-Wild-Media-Developer-Assets/Images/desktop/about/01-about-hero/images/originals/1.jpg',
    bgLeft:
      '/Think-Wild-Media-Developer-Assets/Images/desktop/about/01-about-hero/images/originals/6a018c163190c0cf03857405-2f6a113c1d45457fc67c98ca7e-about3-mp4-m--1404-16267--source.jpg',
    bgRight:
      '/Think-Wild-Media-Developer-Assets/Images/desktop/about/01-about-hero/images/originals/6a018c163190c0cf03857405-2f6a113c5c9b30e5440636007e-about1-mp4-m--1404-16283--source.jpg',
    author: '@daniel_foster',
    caption:
      'The best headphones for music with noise cancelling blend of superior sound, comfort in 2026.',
    phoneAlt: 'Creator video displayed on a phone',
    backgroundLeftAlt: 'Creator filming social content',
    backgroundRightAlt: 'Creator content production',
    avatarAlt: 'Creator profile',
  },
  engagement: [
    {
      icon: Heart,
      value: '6M',
      iconClassName: 'text-white fill-white',
      containerClassName: '',
      strokeWidth: 2,
    },
    {
      icon: MessageCircle,
      value: '20k',
      iconClassName: 'text-white fill-white',
      containerClassName: '',
      strokeWidth: 2,
    },
    {
      icon: ArrowRight,
      value: '7.9k',
      iconClassName: 'text-black -rotate-90',
      containerClassName:
        'w-[20px] h-[20px] bg-white rounded flex items-center justify-center',
      strokeWidth: 3,
    },
    {
      icon: ArrowUpRight,
      value: '5k',
      iconClassName: '',
      containerClassName: '',
      strokeWidth: 3,
    },
  ],
  carouselDots: [
    { active: true, label: 'Slide 1' },
    { active: false, label: 'Slide 2' },
    { active: false, label: 'Slide 3' },
  ],
} as const;

export const ABOUT_TEAM_EXPERIENCE_DATA = {
  eyebrow: 'Our story',
  heading: 'ACROSS OUR TEAM’S\nEXPERIENCE',
  cards: [
    {
      label: 'Creators worked with',
      value: '21+',
      backgroundColor: 'bg-[#BDEBFF]',
      textColor: 'text-[#5F00A6]',
    },
    {
      label: 'Videos briefed, reviewed and delivered',
      value: '1,100+',
      backgroundColor: 'bg-[#F03B36]',
      textColor: 'text-white',
    },
    {
      label: 'Campaigns & content projects',
      value: '350+',
      backgroundColor: 'bg-[#F5E95B]',
      textColor: 'text-[#F56633]',
    },
    {
      label: 'Combined views & impressions',
      value: '10M+',
      backgroundColor: 'bg-[#7FFA72]',
      textColor: 'text-[#155149]',
    },
  ],
} as const;

export const ABOUT_STORY_DATA = {
  eyebrow: 'Our story',
  heading: 'BUILT AROUND CREATORS.\nMADE FOR BRANDS.',
  paragraphs: [
    'Think Wild Media began with a simple idea: brands need creator-led content that feels at home on the platforms people use every day.',
    'Our Dublin team brings creators, content production and social strategy together to help brands reach people with work worth watching and sharing.',
  ],
  action: 'Meet Our Creators',
  cards: {
    left: {
      stat: '11+',
      label: 'Years of team\nexperience',
      bgColor: 'bg-[#EC4037]',
      textColor: 'text-white',
    },
    right: {
      stat: '21+',
      label: 'Creators\nworked with',
      bgColor: 'bg-[#D3FFC4]',
      textColor: 'text-[#155149]',
      icon: Star,
      iconClassName: 'fill-[#F9A826] text-[#F9A826]',
    },
  },
} as const;

export const ABOUT_VALUES_DATA = {
  eyebrow: 'What we stand for',
  headingRows: [
    [
      { text: 'THE', className: '' },
      {
        text: 'VALUES',
        className: 'bg-[#FFD9FA] text-[#EC4037]',
      },
      { text: 'BEHIND', className: '' },
    ],
    [
      { text: 'EVERYTHING', className: '' },
      {
        text: 'WE CREATE',
        className: 'bg-[#83FF83] text-[#155149]',
      },
    ],
  ],
  cards: [
    {
      title: 'Audience first',
      desc: 'We start with the audience you need to reach, then choose creators, content and channels that make sense for them.',
      bgColor: 'bg-[#FDDB32]',
      icon: Users,
    },
    {
      title: 'Move with culture',
      desc: 'Social moves fast. We plan, create and adapt content with the pace each platform demands.',
      bgColor: 'bg-[#4DBBFF]',
      icon: Zap,
    },
    {
      title: 'Straight talking',
      desc: 'Clear advice, honest feedback and no unnecessary jargon.',
      bgColor: 'bg-[#FFD9FA]',
      icon: MessageSquare,
    },
    {
      title: 'Real partnerships',
      desc: 'We build lasting relationships with brands and creators, with clear briefs and shared goals.',
      bgColor: 'bg-[#83FF83]',
      icon: Handshake,
    },
  ],
} as const;

export const CREATIVE_PARTNERSHIP_DATA = {
  heading: 'ONE IDEA.\nMORE POSSIBILITIES.',
  description:
    'A creator campaign can become a content series. A product shoot can become social video. We connect the right services so strong ideas travel further.',
  action: 'Build a Creative Partnership',
  list: [
    {
      num: '01',
      title: 'BRING US YOUR AMBITION.',
      desc: 'Your audience, your challenge, your next big move.',
    },
    {
      num: '02',
      title: 'FIND THE RIGHT MIX.',
      desc: 'People, formats and production, shaped around your brief.',
    },
    {
      num: '03',
      title: 'MAKE IT HAPPEN.',
      desc: 'From creative direction to content ready for the world.',
    },
  ],
} as const;