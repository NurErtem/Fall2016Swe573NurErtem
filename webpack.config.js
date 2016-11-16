var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
bootstrapEntryPoints = require('./webpack.bootstrap.config.js');


module.exports = {
	loaders: [
		{ test: /\.css$/,		loader:'style!css!' },
		{ test: /\.js$/,		exclude: /node_modules/,	loaders: ['react-hot', 'babel?stage=0&optional=runtime&plugins=typecheck'] },
 
//		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
//		{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
//		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
//		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
//		{ test: /\.json$/, loader: 'json-loader'},
//		{ test: /\.scss$/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
//		{ test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240'}
	],
	entry: {

		page1: "./app/App.js",
		styles: [
		    bootstrapEntryPoints.dev,
/*
			"./design/html/assets/plugins/bootstrap/css/bootstrap.css",
			"./design/html/assets/plugins/bootstrap/css/bootstrap-responsive.css",
			"./design/html/assets/css/reset.css",
			"./design/html/assets/css/style-metro.css",
			"./design/html/assets/css/style.css",
			"./design/html/assets/plugins/fancybox/source/jquery.fancybox.css",
			"./design/html/assets/plugins/font-awesome/css/font-awesome.css",
			"./design/html/assets/plugins/bxslider/jquery.bxslider.css",
			"./design/html/assets/plugins/revolution_slider/css/rs-style.css",
			"./design/html/assets/plugins/revolution_slider/rs-plugin/css/settings.css",
			"./design/html/assets/css/style-responsive.css"
*/
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].[chunkhash].css'),
	],
	output: {
		path: __dirname + "./public/",
		filename: '[name].[chunkhash].js',
	},
	devtool: 'source-map',
	devServer: { inline: true },
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"}
		]
	}
};