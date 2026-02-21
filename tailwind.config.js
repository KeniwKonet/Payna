export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#F5D78A',
          400: '#E8C14A',
          500: '#D4A017',
          600: '#B8880E',
        },
        earth: {
          900: '#1A0F00',
          800: '#2D1B00',
          700: '#3D2800',
          600: '#5C3D1A',
          500: '#7A5230',
        },
        forest: {
          900: '#021A04',
          800: '#062E09',
          700: '#0A4010',
          600: '#145A1C',
          500: '#1E7A28',
          400: '#2EA83A',
          300: '#45C453',
        },
        charcoal: '#1C1C1E',
        ash: '#2C2C2E',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'counter': 'counter 0.3s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,160,23,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(212,160,23,0.8)' },
        },
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(ellipse at center, rgba(212,160,23,0.15) 0%, transparent 70%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(20,90,28,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(212,160,23,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(30,122,40,0.2) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
