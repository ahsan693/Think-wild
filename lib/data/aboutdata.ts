import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Ghost,
  Handshake,
  Heart,
  MessageCircle,
  MessageSquare,
  Music,
  Play,
  Star,
  Users,
  Zap,
  type LucideIcon,
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
      'https://images.pexels.com/photos/8348981/pexels-photo-8348981.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgLeft:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    bgRight:
      'https://images.pexels.com/photos/5348252/pexels-photo-5348252.jpeg?auto=compress&cs=tinysrgb&w=800',
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

type AboutIcon = LucideIcon;

export const ABOUT_VALUES_DATA = {
  eyebrow: 'What we stand for',
  headingRows: [
    [
      { text: 'THE', className: '' },
      {
        text: 'VALUES',
        className: 'bg-[#FF8C9D] text-[#1D1D1D]',
      },
      { text: 'BEHIND', className: '' },
    ],
    [
      { text: 'EVERYTHING', className: '' },
      {
        text: 'WE CREATE',
        className: 'bg-[#8CFE79] text-[#1D1D1D]',
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
      bgColor: 'bg-[#FA94FF]',
      icon: MessageSquare,
    },
    {
      title: 'Real partnerships',
      desc: 'We build lasting relationships with brands and creators, with clear briefs and shared goals.',
      bgColor: 'bg-[#8CFE79]',
      icon: Handshake,
    },
  ],
  ticker: [
    {
      name: 'Tiktok',
      icon: Music,
      iconClassName: 'text-white',
      bgColor: 'bg-black',
    },
    {
      name: 'Instagram',
      icon: Camera,
      iconClassName: 'text-white',
      bgColor: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500',
    },
    {
      name: 'Youtube',
      icon: Play,
      iconClassName: 'text-white fill-white',
      bgColor: 'bg-red-600',
    },
    {
      name: 'Snapchat',
      icon: Ghost,
      iconClassName: 'text-black',
      bgColor: 'bg-[#FFFC00]',
    },
  ] satisfies {
    name: string;
    icon: AboutIcon;
    iconClassName: string;
    bgColor: string;
  }[],
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