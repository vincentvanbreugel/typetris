import colors from 'tailwindcss/colors';

export const COLORS = {
    gray: {
        lighter: colors.gray[100],
        light: colors.gray[300],
        neutral: colors.gray[500],
        dark: colors.gray[700],
        darker: colors.gray[900],
    },
    red: {
        lighter: colors.red[100],
        light: colors.red[300],
        neutral: colors.red[500],
        dark: colors.red[700],
        darker: colors.red[900],
    },
    orange: {
        lighter: colors.orange[100],
        light: colors.orange[300],
        neutral: colors.orange[500],
        dark: colors.orange[700],
        darker: colors.orange[900],
    },
    green: {
        lighter: colors.green[100],
        light: colors.green[300],
        neutral: colors.green[500],
        dark: colors.green[700],
        darker: colors.green[900],
    },
    purple: {
        lighter: colors.purple[100],
        light: colors.purple[300],
        neutral: colors.purple[500],
        dark: colors.purple[700],
        darker: colors.purple[900],
    },
    blue: {
        lighter: colors.blue[100],
        light: colors.blue[300],
        neutral: colors.blue[500],
        dark: colors.blue[700],
        darker: colors.blue[900],
    },
    cyan: {
        lighter: colors.cyan[100],
        light: colors.cyan[300],
        neutral: colors.cyan[500],
        dark: colors.cyan[700],
        darker: colors.cyan[900],
    },
    yellow: {
        lighter: colors.yellow[100],
        light: colors.yellow[300],
        neutral: colors.yellow[500],
        dark: colors.yellow[700],
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

