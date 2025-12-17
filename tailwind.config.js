import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', // enables `dark:` variants
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0f0f0f',
        },
        surface: {
          light: '#f3f3f3ff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#111827',
          dark: '#f5f5f5',
        },
        primary: {
          light: '#3299c9ff',
          dark: '#4FC3F7',
        },
        dimmed: {
          light: 'rgba(51, 126, 160, 1)',
          dark: '#429ec9ff',
        },
        border: {
          light: '#e5e7eb',
          dark: '#374151',
        },
        footer: {
          light: '#f9f9f9',
          dark: '#0f0f0f',
        }
      },
    },
  },
  plugins: [typography],
};

export default config;
