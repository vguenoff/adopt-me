/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nesting'),
    require('cssnano'),
  ],
}

module.exports = config
