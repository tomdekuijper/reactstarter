var path = require('path');
var webpack = require('webpack');


module.exports = {
	devtool: 'eval',
	entry: ['webpack-dev-server/client?http://10.0.0.100:3000',
		'webpack/hot/only-dev-server',
		'./app/app.js'],
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js",
		publicPath: '/public/'

	},
	plugins: [
  		new webpack.HotModuleReplacementPlugin(),
 		 new webpack.NoErrorsPlugin()
		],
	resolve: {
   		 extensions: ['', '.js', '.jsx']
 		 },

	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loaders: ['react-hot', 'babel'],
			include: path.resolve(__dirname, 'app')
		},
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test: /\.(png|woff)$/, loader: 'url-loader?limit=100000' }]
	}
};