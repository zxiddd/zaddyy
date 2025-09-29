/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00D4FF',
        'neon-purple': '#8B5CF6',
        'neon-green': '#00FF88',
        'neon-cyan': '#22D3EE',
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
        'dark-secondary': '#1F1F1F',
        'dark-border': '#2A2A2A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' },
          '100%': { boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  safelist: [
    // dynamic color utilities used via template strings
    // text-*, bg-*, border-*, from-*, to-*
    { pattern: /text-(neon-blue|neon-purple|neon-green|neon-cyan)/ },
    { pattern: /bg-(neon-blue|neon-purple|neon-green|neon-cyan)(\/\d+)?/ },
    { pattern: /border-(neon-blue|neon-purple|neon-green|neon-cyan)(\/\d+)?/ },
    { pattern: /from-(neon-blue|neon-purple|neon-green|neon-cyan)(\/\d+)?/ },
    { pattern: /to-(neon-blue|neon-purple|neon-green|neon-cyan)(\/\d+)?/ },
  ],
  plugins: [],
}