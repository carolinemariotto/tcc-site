module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#0A091F',
        secondary: '#1FB5BA', // banner studygif
        tertiary: '#0A091F',
        accent: {
          DEFAULT: '#29d6d5', ///button feito//
          hover: '#abc1d5',//button feito //
        },
        paragraph: '#F2F2F0', //letra branca
      },
    },
  },
  plugins: [],
};
