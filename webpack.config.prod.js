var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

require("./bootstrap.config.js");

module.exports = {
	loaders: [
		{ test: /\.js$/, 						loaders: ['babel'], 				include: path.join(__dirname, 'app') },
		{ test: /\.jsx?$/, 						loader: 'babel',					exclude: /(node_modules|bower_components)/ },
		{ test: /\.css$/, 						loader: "style-loader!css-loader" },
		{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 	loader: "file" },
		{ test: /\.(jpg|png)$/,					loaders: ['url?limit=25000'],		include: path.resolve(__dirname, 'assets/img')},
//		{ test: /\.(woff|woff2)$/, 				loader: "url?prefix=font/&limit=5000" },
//		{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 	loader: "url?limit=10000&mimetype=application/octet-stream" },
		{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
		{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 	loader: "url?limit=10000&mimetype=image/svg+xml" },
		{ test: /\.scss$/,						loaders: ['style', 'css?sourceMap&-restructuring&aggressiveMerging', 'autoprefixer', 'sass?sourceMap']}

	],
	resolve: {
	    root: [
			path.resolve('./'),
	    ],
	    fallback: [
			path.resolve('./'),
	    ],
	    extensions: ["", ".webpack.js", ".web.js", ".js", ".css"],
		alias: {
			app: 		__dirname + "/app/App.js",
//			jquery: 	"jquery/src/jquery",
			jquery: 	__dirname + "/design/html/assets/plugins/jquery-1.10.1.min.js",
			jquerymig: 	__dirname + "/design/html/assets/plugins/jquery-migrate-1.2.1.min.js",
			back2top: 	__dirname + "/design/html/assets/plugins/back-to-top.js",
			fancybox: 	__dirname + "/design/html/assets/plugins/fancybox/source/jquery.fancybox.js",
			bxslider: 	__dirname + "/design/html/assets/plugins/bxslider-4/dist/jquery.bxslider.js",
			hoverdd: 	__dirname + "/design/html/assets/plugins/hover-dropdown.js",
			revplg: 	__dirname + "/design/html/assets/plugins/revolution_slider/rs-plugin/js/jquery.themepunch.plugins.min.js",
			revolution: __dirname + "/design/html/assets/plugins/revolution_slider/rs-plugin/js/jquery.themepunch.revolution.min.js",
		}
    },
	entry: {

		styles: [
//				__dirname + '/design/html/assets/css/reset.css',
/*
				'assets/plugins/fancybox/source/jquery.fancybox.css',
				'assets/plugins/bxslider-4/dist/jquery.bxslider.css',
				'assets/plugins/revolution_slider/css/rs-style.css',
				'assets/plugins/revolution_slider/rs-plugin/css/settings.css',
				'assets/plugins/style-metro.css',
				'assets/plugins/style.css',
				'assets/plugins/style-responsive.css',
				'assets/plugins/css/themes/blue.css'
*/
		],
		vendor: [
			"jquery",
			"jquerymig",
			"back2top",
			"fancybox",
			"bxslider",
			"hoverdd",
			"revplg",
			"revolution",			
			"lodash"
		],
		app: [
			"app"
		],

	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",
			minChunks: 2
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "styles",
//			filename: "styles.js",
			minChunks: Infinity,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
//			filename: "vendor.js",
			minChunks: Infinity,
		}),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		}),
		new NpmInstallPlugin(),
		new HtmlWebpackPlugin({
			template: '!!pug!templates/index.jade',
			title: 'KarmaCircle',
			headStyles: [
			],
			bottomScripts: [
			],
//			favicon: '',
		}),
		new ExtractTextPlugin('styles.css', {allChunks: true})
	],
	output: {
		path: __dirname + '/public/',
		filename: '[name].js',

	},
	devtool: 'source-map',
	devServer: { inline: true },
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: "babel"}
		]
	}
};