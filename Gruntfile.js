function config(name) {
	return require('./tasks/' + name + '.js');
}

module.exports = function (grunt) {
	// Liem Buu: automatic load Grunt plugins.
	require('matchdep')
		.filterDev('grunt-*')
		.forEach(grunt.loadNpmTasks);

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// concat: config('concat'),
		// jshint: config('jshint'),

		// express: {
		// 	all: {
		// 		options: {
		// 			bases: ['C:\\Users\\liem.buu\\Documents\\NHE'], // Liem Buu: Your project bath in local
		// 			port: 69, 
		// 			hostname: "0.0.0.0",
		// 			livereload: true
		// 		}
		// 	}
		// },
		
		// uglify: config('uglify'),
		less: config('less'),
		watch: {
			options: {
				keepalive: true,
				interval: 5007,
			},
			files: [
				'src/less/**/*.less',
				'src/less/**/*.css',
				'src/js/**/*.js'],
			tasks: ['less', 'uglify'],
			html: {
				files: 'NHE/*.html',
				//Liem Buu: reload page when changed HTML
				// livereload: true  
			}, //html
		},
		open: { //Liem Buu: Open project port 69 on browser follow bases in express.
			all: {
				path: 'http://localhost:69/index.html'
			}
		}
	});

	// Tasks - npm - grunt dist or grunt - grunt server
	grunt.registerTask('dist', ['uglify', 'less']);
	grunt.registerTask('default', ['watch', 'uglify']);
	grunt.registerTask('server', ['express','open','watch']);
};