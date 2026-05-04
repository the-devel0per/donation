/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        pulse2: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251,146,60,0.5)' },
          '50%': { boxShadow: '0 0 0 14px rgba(251,146,60,0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.08) translate(-1%,-1%)' },
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.25)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.18)' },
          '56%': { transform: 'scale(1)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: '62%' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.9s ease forwards',
        fadeIn: 'fadeIn 1s ease forwards',
        pulse2: 'pulse2 2s infinite',
        kenBurns: 'kenBurns 9s ease-in-out infinite alternate',
        heartbeat: 'heartbeat 2.5s ease-in-out infinite',
        progressFill: 'progressFill 2.2s ease-out 0.5s forwards',
        slideUp: 'slideUp 0.8s ease forwards',
      },
    },
  },
  plugins: [],
}
