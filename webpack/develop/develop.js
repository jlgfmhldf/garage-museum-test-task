import webpack from 'webpack'
import baseConfig from '../base'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

export default {
	...baseConfig,
	entry: [
		...baseConfig.entry,
		'webpack-hot-middleware/client'
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	devtool: 'cheap-inline-module-source-map',
	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin(),
		// new BundleAnalyzerPlugin(),
	],
}
