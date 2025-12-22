/**
 * Design System Configuration
 * Central place for all design tokens and styling constants
 * Updated with Figma design tokens - December 23, 2025
 */

import {
  colors,
  typography as designTypography,
  spacing as designSpacing,
  borderRadius as designBorderRadius,
  shadows as designShadows,
  breakpoints as designBreakpoints,
  zIndex as designZIndex,
  transitions as designTransitions,
  components as designComponents,
} from './design-tokens';

// Brand Colors (using design tokens)
export const brandColors = {
  primary: {
    light: colors.primary[800], // #5d3f36
    dark: colors.primary[300], // #c0a384
  },
  accent: {
    light: colors.primary[400], // #ad8662
    dark: colors.primary[300], // #c0a384
  },
  highlight: {
    light: colors.primary[100], // #eae2d7
    dark: colors.primary[900], // #513732
  },
} as const;

/**
 * Theme configuration using design tokens
 * This integrates with your existing theme system
 */
export const themeConfig = {
  colors: {
    // Primary brand colors
    primary: colors.primary[800], // Main brand color
    primaryLight: colors.primary[500],
    primaryDark: colors.primary[950],

    // Secondary colors
    secondary: colors.background.white,

    // Semantic colors
    success: colors.semantic.success,
    error: colors.semantic.error,
    warning: colors.semantic.warning,
    info: colors.semantic.info,

    // Background colors
    background: colors.semantic.background,
    surface: colors.semantic.surface,

    // Text colors
    textPrimary: colors.semantic.text.primary,
    textSecondary: colors.semantic.text.secondary,
    textTertiary: colors.semantic.text.tertiary,

    // Border colors
    border: colors.semantic.border,
    borderLight: colors.neutral[100],
    borderDark: colors.neutral[300],
  },

  fonts: {
    sans: designTypography.fontFamily.sans,
    mono: designTypography.fontFamily.mono,
  },

  spacing: designSpacing,
  borderRadius: designBorderRadius,
  shadows: designShadows,
} as const;

// Re-export design tokens with simpler names
export const spacing = designSpacing;
export const typography = designTypography;
export const borderRadius = designBorderRadius;
export const shadows = designShadows;
export const breakpoints = designBreakpoints;
export const zIndex = designZIndex;
export const duration = designTransitions.duration;

// Component Specific Sizes
export const componentSizes = {
  sidebar: {
    width: designComponents.sidebar.width,
    collapsedWidth: designComponents.sidebar.collapsedWidth,
  },
  header: {
    height: designComponents.header.height,
  },
  avatar: {
    sm: '32px',
    md: '40px',
    lg: '48px',
  },
  button: designComponents.button.height,
  input: designComponents.input.height,
  card: designComponents.card,
  statsCard: designComponents.statsCard,
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
  input:
    'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-lg',
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
  themeConfig,
  colors,
} as const;

export default theme;
