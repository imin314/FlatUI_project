const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/main.js',
    map: ['./src/main.js', './src/map.js']
  },
  devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      publicPath: '/',
      host: 'localhost',
      port: 8080
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: './'
  },
  optimization:{
    minimize: false
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/pages/index/index.pug',
        chunks:['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'uidemo.html',
      template: './src/pages/uidemo/uidemo.pug',
      chunks:['map']
  }),
  new HtmlWebpackPlugin({
    filename: 'registration.html',
    template: './src/pages/registration/registration.pug',
    chunks:['main']
}),
new HtmlWebpackPlugin({
    filename: 'contacts.html',
    template: './src/pages/contacts/contacts.pug',
    chunks:['map']
}),
new HtmlWebpackPlugin({
    filename: 'speakers.html',
    template: './src/pages/speakers/speakers.pug',
    chunks:['main']
}),
new HtmlWebpackPlugin({
    filename: 'schedule.html',
    template: './src/pages/schedule/schedule.pug',
    chunks:['main']
}),
    new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
    })
    ],
    module: {
    rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
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
				          require('autoprefixer')({browsers:['last 2 version']}),
				          require('postcss-normalize')({browsers:['last 2 version']})]
				      			}
				},
            	'stylus-loader']
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
				          require('autoprefixer')({browsers:['last 2 version']}),
				          require('postcss-normalize')({browsers:['last 2 version']})]
				      			}
				}
					]
        },
        {
  			test: /\.(ttf|svg|eot|woff)$/,
  			exclude: [/img/],
		  	use: {
		    loader: 'file-loader',
		    options: {
		    name: "./assets/fonts/[name].[ext]"
		    },
		  },
		},
		{
		test: /\.(jpg|png|svg)$/,
		exclude: [/fonts/],
        loader: 'file-loader',
        options: {
        name: '/assets/img/[name].[ext]',
        outputPath: './',
        publicPath: '././'
                 },
         }
    ]
    }
};