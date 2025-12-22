/**
 * Design System Configuration
 * Central place for all design tokens and styling constants
 */

// Brand Colors
export const brandColors = {
  primary: {
    light: '#5d3f36',
    dark: '#d4a574',
  },
  accent: {
    light: '#ad8662',
    dark: '#a68b5c',
  },
  highlight: {
    light: '#eae2d7',
    dark: '#3a3530',
  },
} as const;

// Spacing Scale (following Tailwind's default scale)
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
} as const;

// Typography Scale
export const typography = {
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

// Breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index Scale
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Animation Durations
export const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Component Specific Sizes
export const componentSizes = {
  sidebar: {
    width: '261px',
  },
  header: {
    height: {
      mobile: '64px',
      desktop: '80px',
    },
  },
  avatar: {
    sm: '32px',
    md: '40px',
    lg: '48px',
  },
  button: {
    sm: '32px',
    md: '36px',
    lg: '40px',
  },
} as const;

// Status Colors
export const statusColors = {
  success: {
    light: { bg: 'bg-green-100', text: 'text-green-800' },
    dark: { bg: 'dark:bg-green-900/30', text: 'dark:text-green-300' },
  },
  warning: {
    light: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    dark: { bg: 'dark:bg-yellow-900/30', text: 'dark:text-yellow-300' },
  },
  error: {
    light: { bg: 'bg-red-100', text: 'text-red-800' },
    dark: { bg: 'dark:bg-red-900/30', text: 'dark:text-red-300' },
  },
  info: {
    light: { bg: 'bg-blue-100', text: 'text-blue-800' },
    dark: { bg: 'dark:bg-blue-900/30', text: 'dark:text-blue-300' },
  },
} as const;

// Common Class Combinations
export const commonClasses = {
  card: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg',
  cardHighlighted: 'bg-[#eae2d7] dark:bg-[#3a3530] rounded-lg',
  input: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg',
  button: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
  heading: 'text-gray-900 dark:text-white font-semibold',
  body: 'text-gray-600 dark:text-gray-300',
  muted: 'text-gray-400 dark:text-gray-500',
  sidebar: 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800',
  header: 'bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800',
  main: 'bg-gray-50 dark:bg-gray-900',
} as const;

// Export everything as a single object for easy importing
export const theme = {
  brandColors,
  spacing,
  typography,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  duration,
  componentSizes,
  statusColors,
  commonClasses,
} as const;

export default theme;
