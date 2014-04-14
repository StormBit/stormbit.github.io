module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['**/*'],
				tasks: ['less:development', 'jekyll:development'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		},
		jekyll: {
			development: {
				options: {
					dest: '/home/plejeck/public_html/stormbit-jekyll',
					config: '_config.yml,_config-dev.yml',
					safe: true
				}
			}
		},
		less: {
			development: {
				options: {
					strictMath: true,
					strictUnits: true,
					strictImports: true,
					sourceMap: true
				},
				files: {
					'css/style.css': 'css/style.less',
					'css/dev-grid.css': 'css/dev-grid.less'
				}
			},
			production: {
				files: {
					'css/style.css': 'css/style.less'
				},
				options: {
					cleancss: true,
					sourceMap: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');

	grunt.registerTask('production', ['less:production']);
	grunt.registerTask('development', ['less:development', 'jekyll:development']);
	grunt.registerTask('default', ['less:development']);
};
