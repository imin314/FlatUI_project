const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjector = require('html-webpack-injector');

module.exports = {
  entry: {
    main: './src/main.js',
    main_head: './src/templates/layout.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    publicPath: 'http://localhost:8080/',
    host: 'localhost',
    port: 8080,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
      chunks: ['main', 'main_head'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uidemo.html',
      template: './src/pages/uidemo/uidemo.pug',
      chunks: ['main', 'main_head'],
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './src/pages/registration/registration.pug',
      chunks: ['main', 'main_head'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contacts.html',
      template: './src/pages/contacts/contacts.pug',
      chunks: ['main', 'main_head'],
    }),
    new HtmlWebpackPlugin({
      filename: 'speakers.html',
      template: './src/pages/speakers/speakers.pug',
      chunks: ['main', 'main_head'],
    }),
    new HtmlWebpackPlugin({
      filename: 'schedule.html',
      template: './src/pages/schedule/schedule.pug',
      chunks: ['main', 'main_head'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new HtmlWebpackInjector(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
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
        exclude: [/common.blocks/, /img/, /favicons/],
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
        exclude: [/common.blocks/, /img/, /fonts/],
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
