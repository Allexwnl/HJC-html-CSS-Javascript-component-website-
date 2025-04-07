// postcss.config.cjs
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),  // Correct PostCSS plugin for Tailwind
    require('autoprefixer'),           // Autoprefixer (if needed)
  ],
};
