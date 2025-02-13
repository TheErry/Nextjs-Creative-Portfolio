/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(218, 135, 127, 0.5) 0%, rgba(255, 251, 232, 0) 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(254,254,91, 0.05)',
        'glass-sm': '5px 5px 20px 0px rgba(254,254,91, 0.3)',
      },
      keyframes:{
      'spin-reverse':{
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'}
      }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
      screens:{
        xs: '480px',
      }
    },
  },
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      'bg-background',
      'text-foreground',
      'text-accent',
      'text-muted',
      'bg-accent',
      'bg-muted',
      'bg-foreground',
      'hover:bg-accent',
      'hover:bg-muted',
      'hover:bg-foreground',
      'hover:text-foreground',
      'hover:text-accent',
      'hover:text-muted',
      'hover:bg-background',
      'hover:text-background',
      'hover:border-accent',
      'hover:border-muted',
      'hover:border-foreground',
      'border-accent',
      'border-muted',
      'border-foreground',
      'border-background',
      'border-2',
      'border-4',
      'border-8',
      'firefly-radial',
      'glass-inset',
      'glass-sm',
      'animate-spin-slow',
      'animate-spin-slow-reverse'
    ],
  },
  plugins: [],
};