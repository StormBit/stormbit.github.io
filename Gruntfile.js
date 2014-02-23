module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['css/*.less'],
				tasks: ['less:development'],
				options: {
					spawn: false,
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

	grunt.registerTask('production', ['less:production']);
	grunt.registerTask('development', ['less:development']);
	grunt.registerTask('default', ['less:development']);
};
