module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        surface: '#0a0a0f',
        primary: '#3b82f6',
        'primary-dark': '#2563eb',
        secondary: '#1e293b',
        accent: '#3b82f6',
        muted: '#1e293b',
        'muted-foreground': '#94a3b8',
        card: '#0a0a0f',
        border: '#1e293b',
        'blue-glow': '#3b82f6',
        'blue-dark': '#1e40af',
      },
      animation: {
        'gradient': 'gradShift 4s ease infinite',
        'float': 'floatY 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
