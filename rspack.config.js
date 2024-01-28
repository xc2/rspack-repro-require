const NodePath = require("node:path");

module.exports = function ({ WEBPACK_BUNDLE, WEBPACK_SERVE, WEBPACK_WATCH }) {
  const isWebpack = WEBPACK_WATCH || WEBPACK_SERVE || WEBPACK_BUNDLE;
  return /** @type {import('@rspack/cli').Configuration} */ ({
    mode: 'development',
    devtool: false,
    entry: './src/index.js',
    output: {
      clean: true,
      path: NodePath.resolve(__dirname, isWebpack ? 'dist-webpack' : 'dist-rspack')
    }
  })
};
