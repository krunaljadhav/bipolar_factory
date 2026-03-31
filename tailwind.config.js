/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bpf-navy': '#0D1B2A',
        'bpf-blue': '#1565C0',
        'bpf-sky': '#1E88E5',
        'bpf-cyan': '#00ACC1',
        'bpf-light': '#E3F2FD',
        'bpf-pale': '#F0F7FF',
        'bpf-white': '#FFFFFF',
        'bpf-gray': '#F8FAFC',
        'bpf-text': '#1A2B3C',
        'bpf-muted': '#64748B',
        'bpf-accent': '#FF6B2B',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'slide-in': 'slideIn 0.6s ease forwards',
        'counter': 'counter 2s ease forwards',
        'gradient-x': 'gradientX 8s ease infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-20px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        gradientX: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundSize: { '300%': '300%' },
    },
  },
  plugins: [],
}
