import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Font Colors
        heading: '#0F2E23',      // Main Heading - deep forest green
        body: '#3F4F46',         // Body Text - muted dark green/gray
        subheading: '#1F3D2B',   // Subheadings

        // Primary Accent (CTA / highlights) - warm yellow
        accent: {
          DEFAULT: '#F4C430',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F4C430',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },

        // Secondary Accent (icons / badges) - soft green
        sage: {
          DEFAULT: '#6FBF8E',
          light: '#A8D5BA',
          dark: '#4A9B6E',
        },

        // Backgrounds
        page: '#EAF3EA',         // Main Page Background - light sage green
        dark: '#16382B',         // Section Dark Background - deep green
        muted: '#F3F7F2',        // Muted Card BG

        // Forest green shades
        forest: {
          50: '#EAF3EA',
          100: '#D5E7D5',
          200: '#A8D5BA',
          300: '#6FBF8E',
          400: '#4A9B6E',
          500: '#2D7A50',
          600: '#1F5A3A',
          700: '#1F3D2B',
          800: '#16382B',
          900: '#0F2E23',
        },

        // Keep some legacy colors for compatibility
        green: {
          50: '#EAF3EA',
          100: '#D5E7D5',
          200: '#A8D5BA',
          300: '#6FBF8E',
          400: '#4A9B6E',
          500: '#2D7A50',
          600: '#1F5A3A',
          700: '#1F3D2B',
          800: '#16382B',
          900: '#0F2E23',
        },

        yellow: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F4C430',
          500: '#EAB308',
          600: '#CA8A04',
        },

        cream: {
          50: '#F3F7F2',
          100: '#EAF3EA',
          200: '#D5E7D5',
        },
      },
      fontFamily: {
        sans: ['var(--font-gabarito)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-gabarito)', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px -8px rgba(0, 0, 0, 0.12)',
        'lifted': '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
