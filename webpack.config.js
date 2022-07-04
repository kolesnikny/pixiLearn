const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new new HtmlWebpackPlugin({
      title: 'MY AWESOME WENPACK PAGE',
      template: './index.html',
    })(),
  ],
  devServer: {
    static: pathToBundle,
  },
};
