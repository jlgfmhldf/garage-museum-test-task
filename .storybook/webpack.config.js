// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/docs/react-storybook/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      // add your custom loaders.
    ],
    rules: [
        {
            test: /\.pcss$/,
            use: [
                'style-loader',
                'css-loader?modules',
                'postcss-loader',
            ]
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'url-loader',
            options: {
                limit: 1,
            },
        },
	    {
		    test: /\.svg$/,
		    use: [
			    {
				    loader: 'svg-sprite-loader',
			    },
		    ],
	    },
    ]
  },
};
