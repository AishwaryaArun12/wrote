/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head-gradient': 'linear-gradient(90deg, #EEFFF7 0%, #3D9970 40%, #3D9970 110.8%)',
      },
    },
  },
  plugins: [],
}