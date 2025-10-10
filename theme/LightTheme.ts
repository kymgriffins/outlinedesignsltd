import type { ThemeTypes } from '@/types/theme/ThemeTypes';

const LIGHT_THEME: ThemeTypes = {
    name: 'LIGHT_THEME',
    dark: false,
    variables: {
        'border-color': '#C0C0C0', // Argent
        'border-opacity': 1,
    },
    colors: {
        primary: '#343434',     // Jet — used for text & main accents
        secondary: '#000000',   // Pure black for headings or callouts
        muted: '#C0C0C0',       // Argent for subtle borders/text
        white: '#FFFFFF',       // White background
        lightgray: '#F5F5F5',   // Near-white subtle gray section bg
        dark: '#000000',        // Black text variant
        surface: '#FFFFFF',     // Light cards/backgrounds
        darkgray: '#343434',    // Jet again for emphasis areas
        accent: '#C0C0C0',      // Argent accents
    },
};

export { LIGHT_THEME };