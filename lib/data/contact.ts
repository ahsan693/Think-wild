import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Minus,
  Plus,
  Video,
} from 'lucide-react';

export const CONTACT_ICONS = {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Minus,
  Plus,
  Video,
} as const;

export const CONTACT_HERO_DATA = {
  creatorImages: [
    {
      src: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
      alt: 'Think Wild Media creator',
      className: 'z-40 bg-zinc-800',
    },
    {
      src: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100',
      alt: 'Think Wild Media creator',
      className: 'z-30 -ml-[12px] bg-zinc-700',
    },
    {
      src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      alt: 'Think Wild Media creator',
      className: 'z-20 -ml-[12px] bg-zinc-600',
    },
    {
      src: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=100',
      alt: 'Think Wild Media creator',
      className: 'z-10 -ml-[12px] bg-zinc-500',
    },
  ],
  tagline: 'Creators · Content · Social',
  headingLines: ["LET'S BUILD", 'SOMETHING'],
  highlight: 'WILD.',
};

type ContactFormField =
  | {
      name: string;
      label: string;
      type: 'text' | 'email' | 'textarea';
      placeholder: string;
    }
  | {
      name: string;
      label: string;
      type: 'select';
      placeholder: string;
      options: readonly { value: string; label: string }[];
    };

export const CONTACT_FORM_DATA = {
  heading: "Tell us what you're working on.",
  fields: [
    {
      name: 'fullName',
      label: 'Full name*',
      type: 'text',
      placeholder: 'Enter your full name',
    },
    {
      name: 'email',
      label: 'Email address*',
      type: 'email',
      placeholder: 'hello@yourbrand.com',
    },
    {
      name: 'company',
      label: 'Company or brand name*',
      type: 'text',
      placeholder: 'Enter your company or brand name',
    },
    {
      name: 'website',
      label: 'Website or social profile (optional)',
      type: 'text',
      placeholder: 'Enter your website or social profile',
    },
    {
      name: 'service',
      label: 'What do you need help with?',
      type: 'select',
      placeholder: 'Select a service',
      options: [
        { value: 'campaigns', label: 'Creator & Influencer Campaigns' },
        { value: 'production', label: 'Content Production' },
        { value: 'management', label: 'Social Media Management' },
      ],
    },
    {
      name: 'budget',
      label: 'Budget range (optional)',
      type: 'select',
      placeholder: 'Select a budget range',
      options: [
        { value: 'under5k', label: 'Under $5k' },
        { value: '5k-10k', label: '$5k - $10k' },
        { value: '10k-25k', label: '$10k - $25k' },
        { value: 'over25k', label: '$25k+' },
      ],
    },
    {
      name: 'timeline',
      label: 'Timeline (optional)',
      type: 'text',
      placeholder: 'When do you want to launch?',
    },
    {
      name: 'project',
      label: 'Tell us a little about the project',
      type: 'textarea',
      placeholder:
        'Share your goals, audience, channels and any details that will help us understand your project.',
    },
  ] satisfies readonly ContactFormField[],
  submitLabel: 'Send your brief',
  privacyNote: 'Your details will be used to respond to this enquiry.',
};

export const CONTACT_BOOKING_DATA = {
  eyebrow: "LET'S GET STARTED",
  heading: 'BOOK A DISCOVERY CALL',
  description:
    'A quick call to understand your goals, your project and where Think Wild Media can help.',
  businessName: 'Think Wild Media',
  eventName: 'Discovery Call',
  details: [
    { icon: CONTACT_ICONS.Clock, label: '15m' },
    { icon: CONTACT_ICONS.Video, label: 'Cal Video' },
    { icon: CONTACT_ICONS.Globe, label: 'Asia/Karachi', hasTimezoneChevron: true },
  ],
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  weekdayHeadings: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  availableTimes: ['9:00 am', '9:30 am', '10:15 am', '11:45 am', '1:00 pm', '2:30 pm', '4:00 pm'],
  timeFormats: ['12h', '24h'] as const,
  confirmLabel: 'Confirm Time',
  provider: 'Cal.com',
};

export const CONTACT_FAQ_DATA = {
  eyebrow: 'FAQS',
  heading: 'BEFORE WE GET STARTED',
  items: [
    {
      question: 'What services does Think Wild Media offer?',
      answer:
        'We offer influencer campaigns, UGC, social content production, social media management and creative strategy from Dublin.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'Project costs vary depending on scope, creator requirements, and production needs. We offer custom quoting after our initial discovery call.',
    },
    {
      question: 'Do you work with brands outside Ireland?',
      answer:
        'Yes, while we are based in Dublin, we work with international brands and have a global network of creators.',
    },
    {
      question: 'Can you manage an influencer campaign from start to finish?',
      answer:
        'Absolutely. We handle everything from creator sourcing and contracting to brief creation, content review, and final performance reporting.',
    },
    {
      question: 'What happens after I get in touch?',
      answer:
        "We'll review your brief and set up a discovery call to understand your goals in detail before presenting a tailored proposal.",
    },
  ],
} as const;