export const LAYOUT = {
  MAX_WIDTH: 'max-w-6xl',
  MAX_WIDTH_NARROW: 'max-w-4xl',
  MAX_WIDTH_WIDE: 'max-w-7xl',
  SECTION_PADDING: 'py-16 px-4 sm:px-6 md:px-8',
  SECTION_PADDING_LARGE: 'py-20 px-4 sm:px-6 md:px-8',
  NAV_HEIGHT: 80,
  NAV_HEIGHT_MOBILE: 120
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536
};

export const TIMING = {
  SCROLL_DELAY: 150,
  ANIMATION_FAST: 200,
  ANIMATION_NORMAL: 300,
  ANIMATION_SLOW: 500,
  DEBOUNCE_DELAY: 300
};

export const SCROLL = {
  MOBILE_PADDING: 20,
  DESKTOP_PADDING: 10,
  BEHAVIOR: 'smooth'
};

export const COLORS = {
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  GRAY: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  SUCCESS: '#10b981',
  ERROR: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3b82f6'
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const FORM = {
  FORMSPREE_ENDPOINT: 'https://formspree.io/f/mpwrwdzp',
  MAX_MESSAGE_LENGTH: 1000,
  MIN_MESSAGE_LENGTH: 10,
  FEEDBACK_TYPES: [
    { value: 'general', label: 'General Message' },
    { value: 'feedback', label: 'Website Feedback' },
    { value: 'collaboration', label: 'Collaboration Opportunity' },
    { value: 'question', label: 'Question' },
    { value: 'tip', label: 'Improvement Suggestion' }
  ]
};

export const SEO = {
  SITE_NAME: 'Walter Nieves-Canabal Portfolio',
  SITE_URL: 'https://walternieves.com',
  TWITTER_HANDLE: '@walternieves',
  DEFAULT_IMAGE: '/preview-walter.png',
  KEYWORDS: [
    'PharmD',
    'Pharmacy Student',
    'Digital Health',
    'Healthcare Technology',
    'Product Management',
    'Innovation',
    'Puerto Rico',
    'University of Pittsburgh',
    'Clinical Pharmacy',
    'Regulatory Science',
    'FDA',
    'Virtual Reality',
    'Patient Care',
    'Medication Management'
  ]
};

export const PROJECT_STATUS = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Development',
  COMING_SOON: 'Coming Soon',
  PLANNED: 'Planned'
};

export const ICONS = {
  PHARMACY: '💊',
  TECH: '💻',
  RESEARCH: '🔬',
  EDUCATION: '🎓',
  LEADERSHIP: '👥',
  INNOVATION: '💡',
  HEALTH: '❤️',
  DATA: '📊',
  VR: '🥽',
  PRESENTATION: '🎤',
  EMAIL: '✉️',
  LINKEDIN: '💼',
  DOWNLOAD: '📄',
  LOCATION: '📍',
  CALENDAR: '📅',
  CHECK: '✅',
  STAR: '⭐',
  ROCKET: '🚀',
  FLAG_PR: '🇵🇷'
};

export const A11Y = {
  SKIP_TO_CONTENT_ID: 'main-content',
  REDUCED_MOTION_QUERY: '(prefers-reduced-motion: reduce)'
};

export const ANALYTICS_EVENTS = {
  DOWNLOAD_CV: 'download_cv',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  EXTERNAL_LINK_CLICK: 'external_link_click',
  SECTION_VIEW: 'section_view',
  PROJECT_VIEW: 'project_view'
};

export default {
  LAYOUT,
  BREAKPOINTS,
  TIMING,
  SCROLL,
  COLORS,
  ANIMATION_VARIANTS,
  FORM,
  SEO,
  PROJECT_STATUS,
  ICONS,
  A11Y,
  ANALYTICS_EVENTS
};