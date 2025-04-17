// const webpack = require("webpack");

// module.exports = {
//   webpack: {
//     configure: (webpackConfig) => {
//       webpackConfig.resolve.fallback = {
//         buffer: require.resolve("buffer/"),
//       };

//       webpackConfig.plugins.push(
//         new webpack.ProvidePlugin({
//           Buffer: ["buffer", "Buffer"],
//         })
//       );

//       return webpackConfig;
//     },
//   },
// };

const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Merge fallbacks for both 'buffer' and 'path'
      webpackConfig.resolve.fallback = {
        ...(webpackConfig.resolve.fallback || {}),
        buffer: require.resolve("buffer/"),
        path: require.resolve("path-browserify"),
      };

      // Provide Buffer globally
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );

      return webpackConfig;
    },
  },
};
