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
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(0) translate(-50%, -50%)' },
          '100%': { transform: 'scale(1) translate(-50%, -50%)' },
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
