/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // New black and white theme
        background: '#111111',
        surface: '#1a1a1a',
        'surface-light': '#222222',
        'surface-lighter': '#2a2a2a',
        textPrimary: '#FAFAFA',
        textSecondary: '#E5E5E5',
        textMuted: '#A3A3A3',
        border: '#333333',
        'border-light': '#404040',
        
        // Accent colors - limited to 1-2 tones as requested
        accent: '#00B4D8', // Teal
        accentCoral: '#FF6B6B', // Coral
        accentGold: '#FFD93D', // Gold for highlights
        
        // Legacy colors for backward compatibility
        accentTeal: '#00B4D8',
        accentCyan: '#06b6d4',
        accentViolet: '#8b5cf6',
        accentPink: '#ec4899',
        accentOrange: '#f59e0b',
        accentGreen: '#10b981',
        accentRed: '#ef4444',
        accentYellow: '#eab308',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 180, 216, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 180, 216, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(0, 180, 216, 0.3)',
      },
    },
  },
  plugins: [],
};
