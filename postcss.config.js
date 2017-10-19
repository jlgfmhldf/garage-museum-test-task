const cssnano = require('cssnano')

module.exports = () => ({
	plugins: [
		require('postcss-normalize')({
			forceImport: true
		}),
		require('precss'),
		require('postcss-custom-properties'),
		require('postcss-size'),
		require('postcss-font-magician')({
			hosted: ['./static/fonts',]
		}),
		require("postcss-custom-media")({
			extensions: {
				'--phone': '(min-width: 544px)',
				'--tablet': '(min-width: 768px)',
				'--desktop': '(min-width: 992px)',
				'--large-desktop': '(min-width: 1200px)',
			}
		}),
		require('postcss-axis'),
		require('css-mqpacker'),
		cssnano({
			preset: 'default'
		}),
		require('autoprefixer'),
	]
})
