const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
};

const lineHeights = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
    '2xl': '2.25rem',
    '3xl': '2.5rem',
    '4xl': 1,
};

/**
 * @summary
 * Use this sizing for fonts instead of fontSizes and lineHeights
 */
export const fontSizing = {
    xs: {
        fontSize: fontSizes.xs,
        lineHeight: lineHeights.xs,
    },
    sm: {
        fontSize: fontSizes.sm,
        lineHeight: lineHeights.sm,
    },
    md: {
        fontSize: fontSizes.md,
        lineHeight: lineHeights.md,
    },
    lg: {
        fontSize: fontSizes.lg,
        lineHeight: lineHeights.lg,
    },
    xl: {
        fontSize: fontSizes.xl,
        lineHeight: lineHeights.lg,
    },
    '2xl': {
        fontSize: fontSizes['2xl'],
        lineHeight: lineHeights.xl,
    },
    '3xl': {
        fontSize: fontSizes['3xl'],
        lineHeight: lineHeights['3xl'],
    },
    '4xl': {
        fontSize: fontSizes['4xl'],
        lineHeight: lineHeights['4xl'],
    },
    '5xl': {
        fontSize: fontSizes['5xl'],
        lineHeight: lineHeights['4xl'],
    },
    '6xl': {
        fontSize: fontSizes['6xl'],
        lineHeight: lineHeights['4xl'],
    },
    '7xl': {
        fontSize: fontSizes['7xl'],
        lineHeight: lineHeights['4xl'],
    },
    '8xl': {
        fontSize: fontSizes['8xl'],
        lineHeight: lineHeights['4xl'],
    },
    '9xl': {
        fontSize: fontSizes['9xl'],
        lineHeight: lineHeights['4xl'],
    },
};

export const fontWeights = {
    regular: 400,
    medium: 500,
    semi: 600,
    bold: 700,
    extraBold: 800,
};

export const colors = {
    primary: '#00BCD4',
    light: '#17BDFF',
    dark: '#09202E',
    darkGrey: '#454646',
    white: '#FFFFFF',
    blue: '#3E4095',
    borderBlue: 'rgba(37, 40, 43, 0.2)',
    blueSky: '#e8f0fe',
    orange: '#F89D5C',
    blueGrey: '#7376B4',
};

/**
 * @description
 * This is used for neron's Button theme props
 */
export const buttonThemes = {
    primary: {
        background: colors.primary,
        foreground: colors.white,
    },
};

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
};

export const mediaQueries = {
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
    '2xl': `@media (min-width: ${breakpoints['2xl']})`,
};
