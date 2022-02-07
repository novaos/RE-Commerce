module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(0) translate(-50%, -50%)' },
          '100%': { transform: 'scale(1) translate(-50%, -50%)' },
        },
        slide: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0%)'},
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out 1',
        slide: 'slide 2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
