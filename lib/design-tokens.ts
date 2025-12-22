/**
 * Design Tokens for Tamak Hotel Management System
 * Extracted from Figma design system
 * Last updated: December 23, 2025
 */

// ============================================
// COLOR PALETTE
// ============================================

export const colors = {
  // Primary Brand Colors (Brown/Taupe palette)
  primary: {
    50: '#F7F3EF',
    100: '#EAE2D7',
    200: '#D7C6B1',
    300: '#C0A384',
    400: '#AD8662',
    500: '#966F50', // Primary button color
    600: '#875E47',
    700: '#6D493B',
    800: '#5D3F36', // Main brand color
    900: '#513732',
    950: '#2E1D1A',
  },

  // Secondary Accent Colors
  secondary: {
    olive: '#528748', // Success states
    redBrown: '#875448', // Error/warning states
    clearBrown: '#877348', // Alternative accent
    mint: '#488787', // Info states
  },

  // Neutral Colors (Grays)
  neutral: {
    50: '#F6F6F5',
    100: '#E7E7E6',
    200: '#D0D2CF',
    300: '#AFB2AE',
    400: '#888A86',
    500: '#6D6F6B',
    600: '#6D6F6B', // Same as 500
    700: '#4E504D',
    800: '#454644',
    900: '#3D3D3C',
    950: '#252725',
  },

  // Background Colors
  background: {
    light: '#F7F7F7',
    white: '#FFFFFF',
    dark: '#323232',
  },

  // Additional Neutral Shades
  additionalNeutral: {
    lightGray: '#CBD4C2',
    mediumGray: '#50514F',
  },

  // Semantic Colors (mapped from palette)
  semantic: {
    success: '#528748', // secondary.olive
    error: '#875448', // secondary.redBrown
    warning: '#877348', // secondary.clearBrown
    info: '#488787', // secondary.mint
    background: '#F7F7F7', // background.light
    surface: '#FFFFFF',
    border: '#D0D2CF', // neutral.200
    text: {
      primary: '#252725', // neutral.950
      secondary: '#6D6F6B', // neutral.500
      tertiary: '#888A86', // neutral.400
      inverse: '#FFFFFF',
    },
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
    mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
  },

  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
  },

  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  base: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// ============================================
// SHADOWS
// ============================================

export const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  none: 'none',
} as const;

// ============================================
// BREAKPOINTS (Responsive Design)
// ============================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================
// Z-INDEX
// ============================================

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// ============================================
// COMPONENT-SPECIFIC TOKENS
// ============================================

export const components = {
  button: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '0 12px',
      md: '0 16px',
      lg: '0 24px',
    },
    borderRadius: borderRadius.lg,
  },

  input: {
    height: {
      sm: '32px',
      md: '40px',
      lg: '48px',
    },
    padding: {
      sm: '0 12px',
      md: '0 16px',
      lg: '0 20px',
    },
    borderRadius: borderRadius.lg,
  },

  card: {
    padding: {
      sm: spacing[4],
      md: spacing[6],
      lg: spacing[8],
    },
    borderRadius: borderRadius['2xl'],
    shadow: shadows.sm,
  },

  sidebar: {
    width: '261px',
    collapsedWidth: '80px',
  },

  header: {
    height: '71px',
  },

  statsCard: {
    height: '106px',
    borderRadius: borderRadius.xl,
  },
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get color with opacity
 * @param color - Hex color code
 * @param opacity - Opacity value (0-1)
 */
export function withOpacity(color: string, opacity: number): string {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

/**
 * Get responsive value based on screen size
 */
export function responsive(values: {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}) {
  return values;
}

// ============================================
// TYPE EXPORTS
// ============================================

export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
export type BorderRadiusToken = typeof borderRadius;
export type ShadowToken = typeof shadows;
export type BreakpointToken = typeof breakpoints;
export type ZIndexToken = typeof zIndex;
export type TransitionToken = typeof transitions;
export type ComponentToken = typeof components;

// Default export for convenience
export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
  components,
  utils: {
    withOpacity,
    responsive,
  },
} as const;

export default designTokens;
