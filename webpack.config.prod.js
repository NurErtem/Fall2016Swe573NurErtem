var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var webpack = require('webpack');
var path = require('path');


require("./bootstrap.config.js");

module.exports = {
	loaders: [
		{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
		{ test: /\.css$/, loader: "style-loader!css-loader" },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
		{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
	],
	resolve: {
		alias: {
			jquery: "jquery/src/jquery",
			assets: 'design/html/assets/'
		}
    },
    root: [
		path.resolve('./'),
		path.resolve('./design/html/assets/')
    ],
	entry: {

		app: [
			"./app/App.js",
			"font-awesome-webpack!./font-awesome.config.js"
		],
		styles: [
			('reset.css'),
			('style-metro.css'),
			('style.css'),
			('style-responsive.css'),
		],
/*		styles: [

			"./design/html/assets/plugins/fancybox/source/jquery.fancybox.css",
			"./design/html/assets/plugins/font-awesome/css/font-awesome.css",
			"./design/html/assets/plugins/bxslider/jquery.bxslider.css",
			"./design/html/assets/plugins/revolution_slider/css/rs-style.css",
			"./design/html/assets/plugins/revolution_slider/rs-plugin/css/settings.css",
		]
*/	},
	plugins: [
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		}),
		new NpmInstallPlugin(),
		new HtmlWebpackPlugin({
			template: '!!pug!templates/index.jade',
			title: 'KarmaCircle',
//			favicon: '',
		}),
		new ExtractTextPlugin('styles.css', {allChunks: true})
	],
	output: {
		path: 'public',
		filename: 'bundle_[chunkhash].js'
	},
	devtool: 'source-map',
	devServer: { inline: true },
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"}
		]
	}
};