const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToBundle = path.resolve(__dirname, 'bundle');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: pathToBundle,
    filename: '[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test:/\.m?js$
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MY AWESOME WENPACK PAGE',
      template: './index.html',
    }),
  ],
  devServer: {
    static: pathToBundle,
  },
};
