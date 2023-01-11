import colors from 'tailwindcss/colors';

export const COLORS = {
    gray: {
        lighter: colors.gray[100],
        light: colors.gray[400],
        neutral: colors.gray[500],
        dark: colors.gray[600],
        darker: colors.gray[900],
    },
    red: {
        lighter: colors.red[100],
        light: colors.red[400],
        neutral: colors.red[500],
        dark: colors.red[600],
        darker: colors.red[900],
    },
    orange: {
        lighter: colors.orange[100],
        light: colors.orange[400],
        neutral: colors.orange[500],
        dark: colors.orange[600],
        darker: colors.orange[900],
    },
    green: {
        lighter: colors.green[100],
        light: colors.green[400],
        neutral: colors.green[500],
        dark: colors.green[600],
        darker: colors.green[900],
    },
    purple: {
        lighter: colors.purple[100],
        light: colors.purple[400],
        neutral: colors.purple[500],
        dark: colors.purple[600],
        darker: colors.purple[900],
    },
    blue: {
        lighter: colors.blue[100],
        light: colors.blue[400],
        neutral: colors.blue[500],
        dark: colors.blue[600],
        darker: colors.blue[900],
    },
    cyan: {
        lighter: colors.cyan[100],
        light: colors.cyan[300],
        neutral: colors.cyan[400],
        dark: colors.cyan[500],
        darker: colors.cyan[900],
    },
    yellow: {
        lighter: colors.yellow[100],
        light: colors.yellow[300],
        neutral: colors.yellow[400],
        dark: colors.yellow[500],
        darker: colors.yellow[900],
    },
};

export const PIECE_COLOR_NAMES: (keyof typeof COLORS)[] = [
    'red',
    'orange',
    'green',
    'purple',
    'blue',
    'cyan',
    'yellow'
]

