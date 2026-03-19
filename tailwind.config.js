/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        bg:           'var(--color-bg)',
        surface:      'var(--color-surface)',
        border:       'var(--color-border)',
        accent:       'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
        muted:        'var(--color-muted)',
        mid:          'var(--color-mid)',
        white:        'var(--color-text)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
