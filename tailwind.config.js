import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral: {
        9: '#1C1E24',
        8: '#3F4145',
        7: '#6E7178',
        6: '#A9AEB7',
        5: '#C6C9CF',
        4: '#DFE1E6',
        3: '#EEEEEE',
        2: '#F6F7F7',
        1: '#FAFAFA',
        0: '#FFFFFF',
      },
      primay: {
        5: '#4B286D',
        4: '#C9BFD3',
        3: '#DBD4E2',
        2: '#EDEAF0',
        1: '#F6F4F7',
      },
      secondary: {
        5: '#6277F0',
        4: '#D0D6FB',
        3: '#E0E4FC',
        2: '#EFF1FE',
        1: '#F7F8FE',
      },
      state: {
        blue: '#1970E6',
        red: '#D83E31',
        yellow: '#F7AE3B',
        green: '#28B058',
      },
    },
    fontFamily: {
      sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      'heading-5': [
        '2rem',
        {
          lineHeight: '115%',
          letterSpacing: '0.005em',
          fontWeight: 'bold',
        },
      ],
      'heading-4': [
        '1.75rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.005em',
          fontWeight: 'bold',
        },
      ],
      'heading-3': [
        '1.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'bold',
        },
      ],
      'heading-2': [
        '1.25rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'bold',
        },
      ],
      'heading-1': [
        '1.125rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'bold',
        },
      ],
      'subheading-5': [
        '2rem',
        {
          lineHeight: '115%',
          letterSpacing: '0.005em',
          fontWeight: 'medium',
        },
      ],
      'subheading-4': [
        '1.75rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.005em',
          fontWeight: 'medium',
        },
      ],
      'subheading-3': [
        '1.5rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'medium',
        },
      ],
      'subheading-2': [
        '1.25rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'medium',
        },
      ],
      'subheading-1': [
        '1.125rem',
        {
          lineHeight: '120%',
          letterSpacing: '0.01em',
          fontWeight: 'medium',
        },
      ],
      'body-6': [
        '1.125rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.005em',
          fontWeight: 'regular',
        },
      ],
      'body-5': [
        '1rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.005em',
          fontWeight: 'regular',
        },
      ],
      'body-4': [
        '0.925rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.005em',
          fontWeight: 'regular',
        },
      ],
      'body-3': [
        '0.875rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.005em',
          fontWeight: 'regular',
        },
      ],
      'body-2': [
        '0.75rem',
        {
          lineHeight: '140%',
          letterSpacing: '0.01em',
          fontWeight: 'regular',
        },
      ],
      'body-1': [
        '0.625rem',
        {
          lineHeight: '125%',
          letterSpacing: '0.01em',
          fontWeight: 'regular',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
