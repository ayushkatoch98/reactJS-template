/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      
      screens: {
        'xs': '360px',   // Extra Small
        'sm': '576px',   // Small
        'md': '768px',   // Medium
        'lg': '1200px',   // Large
        'xl': '1300px',  // Extra Large
        '2xl': '1440px', // 2x Extra Large
      },

      fontSize: {
        'xxs': '0.5rem',  
      },
      lineHeight: {
        'xxs': '0.75rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

