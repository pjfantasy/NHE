module.exports = {
	options: {
		//banner: '/*! Updated on <%= grunt.template.today("mm/dd/yyyy") %> */\n',
		mangle: false,
		separator: '\n'
	},
	dist: {
		files: {
			'src/js/minify/animation.min.js': 'src/js//animation.js',
		}
	}
};