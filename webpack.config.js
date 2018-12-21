const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    inline: true,
    hot: true,
    watchContentBase: true,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        }],
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV !== 'production',
    }),
    new HtmlWebpackPlugin({
      title: 'SUPER LOGO',
      template: './src/index.html',
      path: path.join(__dirname, './dist/'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
