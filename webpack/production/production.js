import webpack from 'webpack'
import baseConfig from '../base'
import Minify from 'babel-minify-webpack-plugin'

export default {
	...baseConfig,
	plugins: [
		...baseConfig.plugins,
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new Minify({}, {
			test: /\.jsx?$/,
			comments: false,
		}),
	]
}

