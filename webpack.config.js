const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    publicPath: 'http://localhost:8080/',
    host: 'localhost',
    port: 8080,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'uidemo.html',
      template: './src/pages/uidemo/uidemo.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './src/pages/registration/registration.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts/contacts.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'speakers.html',
      template: './src/pages/speakers/speakers.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'schedule.html',
      template: './src/pages/schedule/schedule.pug',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
                require('postcss-normalize'),
              ],
            },
          },
          'stylus-loader?resolve url',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
                require('postcss-normalize'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(ttf|svg|eot|woff)$/,
        exclude: [/img/, /favicons/],
        use: [
          { 
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: [/fonts/, /favicons/],
        use: [
          { 
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/img',
            },
          },
        ],
      },
      {
        test: /\.(svg|png|ico|xml)$/,
        exclude: [/img/, /fonts/],
        use: [
          { 
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/favicons',
            },
          },
        ],
      },
    ],
  },
};
