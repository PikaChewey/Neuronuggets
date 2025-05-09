const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#285a84',
        'background': '#ffffff',
        'accent': '#ef6f53',
        'secondary': '#4A6670',
        'tertiary': '#A3C1DA',
        
        'space-blue': '#285a84',
        'lab-white': '#ffffff',
        'precision-teal': '#4A6670',
        'analytical-amber': '#A3C1DA',
        'neural-red': '#ef6f53',
        'coral': '#ef6f53',
        
        'gray-light': '#e2e8f0',
        'gray-dark': '#4a5568',
        'precision-teal-light': '#6B8891',
        
        'success': '#4CAF50',
        'warning': '#FF9800',
        'error': '#F44336',
        'info': '#2196F3',
        
        'foreground': '#285a84',
        'muted': '#f1f5f9',
        'muted-foreground': '#4A6670',
        'card': '#ffffff',
        'card-foreground': '#285a84',
        'border': '#e2e8f0',
        'input': '#e2e8f0',
        'ring': '#A3C1DA',
        
        'dark-background': '#ffffff',
        'dark-foreground': '#285a84',
        'dark-muted': '#f1f5f9',
        'dark-muted-foreground': '#4A6670',
        'dark-card': '#ffffff',
        'dark-card-foreground': '#285a84',
        'dark-border': '#e2e8f0',
        'dark-input': '#e2e8f0',
        'dark-ring': '#A3C1DA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-space-grotesk)', 'ui-serif', 'Georgia'],
        serif: ['var(--font-source-serif)', 'ui-serif', 'Georgia'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
        equation: ['var(--font-jetbrains-mono)', 'CMU Serif', 'ui-monospace'],
        scientific: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        scientific: '.025em',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'all': 'all',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      transformOrigin: {
        '0': '0%',
      },
      translate: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
      },
      scale: {
        '95': '0.95',
        '98': '0.98',
        '99': '0.99',
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-color-primary)',
            a: {
              color: 'var(--tw-color-accent)',
              '&:hover': {
                color: 'var(--tw-color-primary)',
              },
            },
            strong: {
              color: 'var(--tw-color-primary)',
            },
            h1: {
              color: 'var(--tw-color-primary)',
            },
            h2: {
              color: 'var(--tw-color-primary)',
            },
            h3: {
              color: 'var(--tw-color-primary)',
            },
            h4: {
              color: 'var(--tw-color-primary)',
            },
            code: {
              color: 'var(--tw-color-accent)',
            },
            pre: {
              backgroundColor: 'var(--tw-color-primary)',
              color: 'var(--tw-color-background)',
            },
            blockquote: {
              color: 'var(--tw-color-primary)',
              borderLeftColor: 'var(--tw-color-accent)',
            },
          },
        },
      },
    },
  },
  safelist: [
    'translate-y-0',
    'translate-y-1',
    '-translate-y-0.5',
    '-translate-y-1',
    'hover:-translate-y-1',
    'shadow-sm',
    'shadow-md',
    'shadow-lg',
    'scale-95',
    'scale-100',
    'opacity-0',
    'opacity-100',
  ],
  plugins: [require('@tailwindcss/typography')],
} 
