/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {

      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '2rem',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1496px'
        }
      }
    },
  },
  plugins: [],
}