// webpack.config.js

// eslint-disable-next-line no-unused-vars
const path = require('path');

module.exports = {
  // Other webpack configurations
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/', // Output path for images (adjust as needed)
            },
          },
        ],
      },
    ],
  },
};
