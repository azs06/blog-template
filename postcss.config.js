const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');

module.exports = {
  plugins: [cssnano(), postcssPresetEnv(), nested()],
};