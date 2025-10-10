import type { ThemeTypes } from '@/types/theme/ThemeTypes';

const DARK_THEME: ThemeTypes = {
    name: 'BLACK_WHITE_THEME',
    dark: true,
    variables: {
        'border-color': '#e0e0e0',
        'border-opacity': 0.2,
    },

    colors: {
        primary: '#000000',
        secondary: '#1a1a1a',
        muted: '#808080',
        white: '#ffffff',
        lightgray: '#d3d3d3',
        dark: '#000000',
        surface: '#1a1a1a',
        darkgray: '#333333',
        accent: '#4d4d4d'
    }
};

export { DARK_THEME };

