var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
require("./bootstrap.config.js");

module.exports = {
	loaders: [
		{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
		{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
	],
	entry: {

		app: "./app/App.js",
/*		styles: [

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
		]
*/	},
	plugins: [
		new NpmInstallPlugin(),
/*		new CleanWebpackPlugin(['dist', 'build'], {
			root: '/full/project/path',
			verbose: true, 
			dry: false,
			exclude: ['shared.js']
		}),
//		new HtmlWebpackPlugin(),
*/   		new ExtractTextPlugin('[name].[chunkhash].css')
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