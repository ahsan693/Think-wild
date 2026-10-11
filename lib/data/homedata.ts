// Homepage data is organized in the same order as its rendered sections.

// Hero section: headline copy and creator carousel content.
export const HOME_HERO = {
  copy: {
    eyebrow: 'Creators · Content · Social',
    firstLine: 'CONTENT THAT',
    secondLine: 'STOPS THE',
    highlight: 'SCROLL',
    description:
      "We're a Dublin creator marketing agency connecting brands with influencers and making social-first content people want to watch, share and talk about.",
    action: 'Start a Project',
  },
  carousel: {
    platformLabel: 'Reels',
    originalAudioLabel: 'Original audio',
  },
  creators: [
    {
      id: 1,
      username: '@mila.creates',
      likes: '2.4M likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/1.jpg',
    },
    {
      id: 2,
      username: '@nikoflips',
      likes: '890K likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/2.jpg',
    },
    {
      id: 3,
      username: '@thewildjune',
      likes: '5.1M likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/3.jpg',
    },
    {
      id: 4,
      username: '@dro.visuals',
      likes: '420K likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/4.jpg',
    },
    {
      id: 6,
      username: '@saskia.reels',
      likes: '1.2M likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/5.jpg',
    },
    {
      id: 7,
      username: '@lina.creates',
      likes: '760K likes',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/01-hero-creator-marketing/images/originals/6.jpg',
    },
  ],
} as const;

// Social ticker section: heading and platform capsules.
export const HOME_SOCIAL_TICKER = {
  heading: 'Your audience is everywhere. So are we.',
  platforms: [
    {
      name: 'Tiktok',
      iconUrl:
        '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/tiktok.png',
    },
    {
      name: 'Instagram',
      iconUrl:
        '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/insta.png',
    },
    {
      name: 'Youtube',
      iconUrl:
        '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/yt.png',
    },
    {
      name: 'Snapchat',
      iconUrl:
        '/Think-Wild-Media-Developer-Assets/Icons/desktop/home/01-hero-creator-marketing/icons/snap.png',
    },
  ],
} as const;

// Introduction section: eyebrow and formatted body paragraphs.
export const HOME_INTRODUCTION = {
  eyebrow: 'Sound familiar?',
  paragraphs: [
    [
      { text: 'Your content is ' },
      { text: 'showing up. 📈', highlight: 'orange' },
      { text: ' But is anyone actually stopping for it? 👀' },
    ],
    [
      { text: "Brands don't need more posts 📱 for the sake of posting. They need " },
      { text: 'ideas 💡', highlight: 'blue' },
      { text: ' people want to watch, ' },
      { text: 'creators 👥', highlight: 'red' },
      { text: ' people trust, 🤝 and content that feels native 🌱 to the platform.' },
    ],
    [
      { text: "If your feed looks polished ✨ but still feels forgettable, 😔 the problem usually isn't " },
      { text: 'consistency. 🚫', highlight: 'orange' },
      { text: " It's the concept, 🎯 the " },
      { text: 'creator fit, 👤', highlight: 'pink' },
      { text: ' or the ' },
      { text: 'strategy ♟️', highlight: 'green' },
      { text: ' behind it.' },
    ],
    [
      { text: "That's where " },
      { text: 'Think Wild Media', highlight: 'lime' },
      { text: ' comes in – turning creators, 🎬 content 📝, and social strategy 📊 into work people actually want to watch. 🚀' },
    ],
  ],
} as const;

// Mission section: copy and both featured images.
export const HOME_MISSION = {
  copy: {
    imageAlt: 'Creator content',
    imageMetrics: ['12M', '82+', '18.8M'],
    eyebrow: 'Our mission',
    heading: "WE TURN CREATORS INTO YOUR BRAND'S STRONGEST STORYTELLERS.",
    description:
      'Think Wild Media is a Dublin influencer marketing and content agency creating UGC, creator campaigns and social content built for the platform.',
    action: 'See our process',
  },
  images: {
    creator: {
      src: HOME_HERO.creators[0].imageUrl,
    },
    fashion: {
      src: 'https://images.pexels.com/photos/28997086/pexels-photo-28997086.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fashion creator',
    },
  },
} as const;

// Services section: heading copy and each service card's text, stats, colors, and image.
export const HOME_SERVICES = {
  copy: {
    heading: 'HOW WE HELP BRANDS GROW',
    tabLabel: 'SERVICE',
  },
  items: [
    {
      id: '01',
      title: 'CREATOR &\nINFLUENCER\nCAMPAIGNS',
      description:
        'We find creators who fit your audience and manage influencer campaigns from outreach and briefs to content delivery and reporting.',
      tags: 'Creator sourcing · UGC · Influencer partnerships',
      stat: '21+',
      statLabel: 'Creators activated',
      bgColor: 'bg-[#FFD6E8]',
      textColor: 'text-[#FF4A5A]',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/04-services/images/originals/image-2--1404-15427--source.png',
    },
    {
      id: '02',
      title: 'CONTENT\nPRODUCTION',
      description:
        'We produce social-first video, UGC, photography, edits, motion graphics and selected CGI creative for brands that want to stand out.',
      tags: 'Short-form video · UGC · CGI/VFX · Social content',
      stat: '450+',
      statLabel: 'Content assets produced',
      bgColor: 'bg-[#CBEBFF]',
      textColor: 'text-[#4A00E0]',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/04-services/images/originals/image-3--1404-15455--source.png',
    },
    {
      id: '03',
      title: 'SOCIAL MEDIA\nMANAGEMENT',
      description:
        'We plan, publish and optimise your social content, helping your brand stay consistent, relevant and part of the conversation.',
      tags: 'Strategy · Content planning · Publishing · Reporting',
      stat: '8.4M',
      statLabel: 'Organic views generated',
      bgColor: 'bg-[#FDF05B]',
      textColor: 'text-[#1A1A1A]',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/04-services/images/originals/image-5--1404-15483--source.png',
    },
    {
      id: '04',
      title: 'SOCIAL CREATIVE\nSTRATEGY',
      description:
        'We build campaign concepts, creator briefs, hooks and content formats around your audience, brand goals and the platforms that matter.',
      tags: 'Campaign concepts · Creative direction · Content strategy',
      stat: '42%',
      statLabel: 'Increase in Engagement',
      bgColor: 'bg-[#76F773]',
      textColor: 'text-[#065F46]',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/04-services/images/originals/image-6--1404-15511--source.png',
    },
  ],
} as const;

// Creator showcase section: copy, carousel cards, and accessibility labels.
export const HOME_SHOWCASE = {
  copy: {
    eyebrow: 'Content Inspiration',
    heading: 'CREATOR CONTENT PEOPLE ACTUALLY WANT TO WATCH',
    description:
      'UGC, creator-led videos and social-first content designed to feel native to the platform and relevant to the audience.',
  },
  items: [
    {
      id: 1,
      username: '@fitcorelab',
      views: '1.6M views',
      sales: '$14k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/group-motionworks--1404-15529--source.png',
    },
    {
      id: 2,
      username: '@wearnova',
      views: '3.7M views',
      sales: '$49k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/group-motionworks--1404-15631--source.png',
    },
    {
      id: 3,
      username: '@thewildjune',
      views: '3.2M views',
      sales: '$31k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/hsyvvkiyqo5ngd1xof1jkbvyyau-mp4--1404-15548--source.jpg',
    },
    {
      id: 4,
      username: '@brandnatalya',
      views: '2.1M views',
      sales: '$39k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/jaryntqcrfkkjjmwhldytbtntuy-mp4--1404-15611--source.jpg',
    },
    {
      id: 5,
      username: '@motionworks',
      views: '2.1M views',
      sales: '$27k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/jtg5v5irofg8fx1skbxlf1esa08-mp4--1404-15569--source.jpg',
    },
    {
      id: 6,
      username: '@saskia.reels',
      views: '3.2M views',
      sales: '$31k sales',
      imageUrl:
        '/Think-Wild-Media-Developer-Assets/Images/desktop/home/05-creator-content-showcase/images/originals/pyclwdsy4hjrnkylpnwruxwzvnu-mp4--1404-15590--source.jpg',
    },
  ],
  accessibility: {
    carousel: 'Creator content examples',
    carouselRole: 'carousel',
    scrollLeft: 'Scroll creator content left',
    scrollRight: 'Scroll creator content right',
  },
} as const;

// Featured work section: project copy and its image.

export const HOME_FEATURED_WORK = {
  copy: {
    eyebrow: 'Selected Creative',
    heading: 'WORK THAT SHOWS WHAT WE CAN DO.',
    projectName: "Plump'd Beauty",
    category: 'Beauty & Wellness · Social Content',
    createdLabel: 'What we created',
    created: 'Short-form content, social assets',
    platformsLabel: 'Platforms',
    platforms: 'Instagram · TikTok',
    action: 'View Project',
    summary:
      'We create across beauty, fashion, food, fitness and more - adapting the idea, format and creator to the brand.',
    moreAction: 'View selected work',
  },
  image: {
    src: '/Think-Wild-Media-Developer-Assets/Images/desktop/home/06-featured-work/images/originals/bm-ss-cosmetic-tube-03--1404-15687--source.png',
  },
} as const;

// Why Think Wild section: heading, service list, benefits, and CTA copy.
export const HOME_WHY_US = {
  copy: {
    eyebrow: 'Why Think Wild Media',
    heading: 'CREATOR CAMPAIGNS, CONTENT AND SOCIAL STRATEGY IN ONE PLACE.',
    listHeading: 'What you get',
    services: [
      'Creator matching',
      'Campaign strategy',
      'Content production',
      'Platform fit',
      'Reporting',
      'Ongoing optimisation',
    ],
    brandName: 'Think Wild',
    benefits: [
      'Matched by audience, niche and brand fit',
      'Campaign strategy built around your goals',
      'Creator-led, social-first content',
      'Built for the platform from day one',
      'Clear reporting and useful insights',
      'Learn, refine and improve over time',
    ],
    action: 'Start a Project',
  },
} as const;

// Process section: intro copy, four steps, and the production-card image.
export const HOME_PROCESS = {
  copy: {
    eyebrow: 'How it works',
    headingLines: ['FOUR STEPS FROM', 'BRIEF TO CONTENT'],
    headingConnector: 'THAT',
    headingHighlight: 'CONNECTS',
    description: 'From the first brief to content made to connect.',
    action: 'Start a Project',
  },
  steps: [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We learn your brand, audience and goals.',
      visual: {
        type: 'strategy',
        rows: [
          { label: 'Market analysis', detail: '3 brands reviewed', accent: 'bg-[#22C55E]' },
          { label: 'Content strategy', detail: 'Building now...', accent: 'bg-[#F97316]' },
          { label: 'Creator brief', detail: 'Up next', accent: 'bg-white/20' },
        ],
      },
    },
    {
      number: '02',
      description: 'We match the right creators and formats.',
      titleLines: ['Creator & Content', 'Matching'],
    },
    {
      number: '03',
      title: 'Content Production',
      description: 'We create, review and deliver the content.',
    },
    {
      number: '04',
      title: 'Launch, Learn, Grow',
      description: 'We launch, learn what works and improve.',
    },
  ],
  images: {
    matching: {
      src: '/Think-Wild-Media-Developer-Assets/Images/desktop/home/08-our-process/images/originals/step-image--1404-15894--source.png',
      alt: 'Creator matching campaign score and creator profiles',
    },
    production: {
      src: '/Think-Wild-Media-Developer-Assets/Images/desktop/home/08-our-process/images/originals/image-32--1404-15906--source.png',
      alt: 'Creators showcasing apparel for content production',
    },
    performance: {
      src: '/Think-Wild-Media-Developer-Assets/Images/desktop/home/08-our-process/images/originals/graph-decoration--1404-15936--source.png',
      alt: 'Weekly campaign performance chart',
    },
  },
} as const;

// Capabilities section: copy, team image, and the scrolling capability labels.
export const HOME_CAPABILITIES = {
  copy: {
    imageHeading: ['REAL CREATORS.', 'REAL CONTENT.', 'REAL CONNECTION.'],
    eyebrow: 'What we bring',
    metric: '1,200+',
    metricLabel: "Videos delivered across our team's experience",
    items: [
      {
        heading: 'CREATOR-FIRST THINKING',
        description: 'We match creators by audience, brand fit and the way they make content.',
      },
      {
        heading: 'SOCIAL-FIRST CONTENT',
        description: 'Built for how people actually watch and engage on each platform.',
      },
      {
        heading: 'END-TO-END DELIVERY',
        description: 'From strategy and creator briefs to production, approvals and reporting.',
      },
    ],
  },
  image: {
    src: '/Think-Wild-Media-Developer-Assets/Images/desktop/home/09-capabilities/images/originals/image-8--1404-15953--source.png',
    alt: 'Creative team collaborating',
  },
  ticker: [
    { text: 'Creator sourcing', icon: 'search' },
    { text: 'UGC & short-form content', icon: 'zap' },
    { text: 'Social-first strategy', icon: 'chart' },
    { text: 'Content approvals', icon: 'check' },
    { text: 'Campaign reporting', icon: 'rocket' },
    { text: 'Creative revisions', icon: 'refresh' },
  ],
} as const;

// FAQ section: heading copy and question-and-answer items.
export const HOME_FAQ = {
  heading: ['FREQUENTLY ASKED', 'QUESTIONS'],
  items: [
    {
      question: 'What does Think Wild Media do?',
      answer:
        'Think Wild Media is a Dublin creator and influencer marketing agency offering UGC, content production, social media management and creative strategy.',
      isOpen: true,
    },
    {
      question: 'How do you choose the right creators?',
      answer:
        'We carefully vet creators based on audience demographics, engagement rates, brand affinity, and content quality to ensure the perfect match for your campaign.',
      isOpen: false,
    },
    {
      question: 'Can you manage an influencer campaign from start to finish?',
      answer:
        'Yes, we handle everything from creator sourcing and contracting to brief creation, content review, and final performance reporting.',
      isOpen: false,
    },
    {
      question: 'Do you create UGC and short-form content?',
      answer:
        'Absolutely. We specialize in producing native, engaging short-form video content tailored for TikTok, Instagram Reels, and YouTube Shorts.',
      isOpen: false,
    },
    {
      question: 'Do you manage social media accounts?',
      answer:
        'Yes, we offer comprehensive social media management services including content planning, posting, community engagement, and growth strategy.',
      isOpen: false,
    },
  ],
} as const;

// Final CTA section: copy and orbit images.
export const HOME_FINAL_CTA = {
  copy: {
    eyebrow: 'Ready?',
    heading: ['STOP THE SCROLL.', 'START THE CONVERSATION'],
    description:
      "Tell our Dublin team about your brief. We'll shape the right creator campaign, content plan or social strategy for your brand.",
    primaryAction: 'Start a Project',
    secondaryAction: 'See our work',
  },
  images: {
    orbit: [
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16104--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16106--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16109--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16112--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-avatar--1404-16120--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/cta-image--1404-16118--source.jpg',
      '/Think-Wild-Media-Developer-Assets/Images/desktop/home/11-final-cta/images/originals/image-final-cta-01--1404-16115--source.jpg',
    ],
  },
} as const;
