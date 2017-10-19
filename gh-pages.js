var ghpages = require('gh-pages')

ghpages.publish('public', function(err) {
	if (err) {
		console.log('Publication error')
	} else {
		console.log('Publication done!')
	}
})
