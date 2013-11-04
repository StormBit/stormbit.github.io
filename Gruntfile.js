module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			files: {
				'css/index.less': 'css/index.css'
			},
			development: {
				options: {
					strictMath: true,
					strictUnits: true,
					strictImports: true
				}
			},
			production: {
				options: {
					cleancss: true,
					sourceMap: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('production', ['less:production']);
	grunt.registerTask('development', ['less:development']);
	grunt.registerTask('default', ['less:development']);
};
