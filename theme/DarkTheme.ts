import type { ThemeTypes } from '@/types/theme/ThemeTypes';

const DARK_THEME: ThemeTypes = {
    name: 'DARK_THEME',
    dark: true,
    variables: {
        'border-color': '#343434', // Jet-inspired neutral border
        'border-opacity': 0.15,
    },

    colors: {
        primary: '#FFFFFF',       // Clean white for contrast and legibility
        secondary: '#343434',     // Jet — architectural dark base tone
        muted: '#4A4A4A',         // Softer gray for muted texts or backgrounds
        white: '#FFFFFF',         // Pure white for highlights
        lightgray: '#4E585C',     // Slightly bluish-gray for subtle elevation
        dark: '#ffffffff',          // True dark background tone
        surface: '#1E1E1E',       // Elevated card surfaces or panels
        darkgray: '#272727',      // Neutral dark for consistent UI blending
        accent: '#E9E3DF',        // Warm gray-white for elegance and softness
    },
};

export { DARK_THEME };
