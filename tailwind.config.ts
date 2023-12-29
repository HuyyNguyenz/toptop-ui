import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px'
      },
      colors: {
        'primary-color': '#FE2C55',
        'hover-primary-color': '#EF2950',
        'border-color': '#E2E2E2',
        'border-input-color': '#D7D7D9',
        'text-title-color': '#161823',
        'text-color': '#4E5058',
        'text-disabled-color': '#A7A7AB',
        'bg-login-color': '#FFFFFF',
        'bg-input-color': '#F1F1F2',
        'hover-menu-color': '#F8F8F8',
        'light-color': '#FFFFFF',
        'dark-color': '#000000',
        'dark-mode-btn-color': '#0ACE8F'
      },
      keyframes: {
        'scale-center': {
          '0%': { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(0)' },
          '50%': {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%) scale(0.5)'
          },
          '100%': { position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%) scale(1)' }
        }
      },
      animation: {
        'scale-center': 'scale-center 0.3s linear'
      }
    }
  },
  plugins: []
}
export default config
