const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin') //TODO
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV || 'development'
const isDevelopment = NODE_ENV === 'development'
const isProd = NODE_ENV === 'production'
const { stringify } = JSON

const babelRcPath = path.join(__dirname, '../.babelrc')

module.exports = {
	entry: [
		'babel-polyfill',
		'./app',
	],
	output: {
		path: path.join(__dirname, '../public'),
		filename: 'app.min.js',
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: stringify(NODE_ENV),
		}),
		new StyleLintPlugin({
			files: [
				'./app/components/**/*.pcss',
				'./app/styles/*.pcss'
			], //TODO
			configFile: './.stylelintrc',
		}),
		new ExtractTextPlugin('style.css'),
		new PostCSSAssetsPlugin({
			test: /\.pcss$/,
			log: true,
		}),
		new webpack.DefinePlugin({
			__DEV__: isDevelopment,
			__PROD__: isProd,
		}),
	],
	devServer: {
		inline: true
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			include: [path.resolve(__dirname, '../app')],
			use: [
				'react-hot-loader/webpack',
				{
					loader: 'babel-loader',
					options: {
						babelrc: false,
						extends: babelRcPath,
					}
				},
				{
					loader: 'eslint-loader',
					options: {
						fix: true,
					}
				}
			],
		}, {
			test: /\.pcss$/,
			use: ExtractTextPlugin.extract({
				use: [
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[local]'
						}
					},
					'postcss-loader',
				]
			}),
		},
		{
			test: /\.svg$/,
			use: [
				{
					loader: 'svg-sprite-loader',
				},
			],
		},
		{
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'url-loader',
			options: {
				limit: 1,
			},
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
}
