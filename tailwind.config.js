const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/views/**/*.js",
    "./src/components/**/*.js"
  ],
  mode: 'jit',
  fontFamily: {
    sans: ['Roboto', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif'],
    serif: ['Montserrat', 'Roboto', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif']
  },
  theme: {
    colors: {
      transparent: 'transparent',
      currentColor: 'currentColor',
      slate: colors.slate,
      'primary': {
        50: '#e8f4fe',
        100: '#cbdde6',
        200: '#adc4d2',
        300: '#8eadbe',
        400: '#6e95ab',
        500: '#567c92',
        600: '#426072',
        700: '#2d4552', //
        800: '#182933',
        900: '#001015',
      },
      'secondary': {
        50: '#e8f4fe',
        100: '#cbdbe6',
        200: '#adc4d2',
        300: '#8eacbe',
        400: '#6e94ab',
        500: '#567b92',
        600: '#425f72',
        700: '#2d4452', //
        800: '#182933',
        900: '#001015',
      },
      'gray': {
        50: '#edf3f8',
        100: '#d6d7dc', //
        200: '#bbbcc1',
        300: '#a0a1a9',
        400: '#848690',
        500: '#6b6d77',
        600: '#53555d',
        700: '#3b3c43',
        800: '#232429',
        900: '#0c0c13',
      },
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: {
        50: '#ffefe0',
        100: '#f6d5bb',
        200: '#ebba94',
        300: '#e19f6a',
        400: '#d78341', //
        500: '#be6a28',
        600: '#95521e',
        700: '#6a3a14',
        800: '#412207',
        900: '#1c0a00',
      },
      amber: colors.amber,
      yellow: {
        50: '#fff6dd',
        100: '#fce5b2',
        200: '#f8d485', //Icon
        300: '#f6c256', //Focus
        400: '#f3b128', //Link
        500: '#da9710', //Button
        600: '#a97609', //Button Hover
        700: '#795405',
        800: '#4a3200',
        900: '#1b1000',
      },
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      'white': {
        50: '#eff3f5', //
        100: '#d4dadd',
        200: '#b7c2c8',
        300: '#99a9b4',
        400: '#7c91a0',
        500: '#627886',
        600: '#4d5e69',
        700: '#38434a',
        800: '#22282c',
        900: '#0a0e10',
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require('@tailwindcss/aspect-ratio')
  ],
};