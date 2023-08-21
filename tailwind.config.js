/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        "lf": ["var(--font-libre_franklin)"],
      },

      backgroundColor: {
        "c-orange": "#FF6A28",
        "c-green": "#007A58",
        "c-gray": "#f1f1f1",
      },

      colors: {
        "c-black": "#242424",
        "c-gray-font": "#999",
        "c-gray-text": "#555555",
        "c-orange": "#FF6A28",
      },

      fontSize: {
        "6xs": "12px",
        "5xs": "13px",
        "4xs": "14px",
        "3xs": "15px",
        "2xs": "16px",
        "xs": "18px",
      },
    },
  },

  plugins: [],
}
