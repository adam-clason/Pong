module.exports = function(grunt) {

	grunt.initConfig({

		less: {
			development : {
				options : {
					paths: ['public/stylesheets/less'],	
					yuicompress : true,	
				},
				files : {
					"public/stylesheets/css/style.css" : "./public/stylesheets/less/style.less"
				}
			}
		},

		watch : {		
			files: ['public/stylesheets/less/*.less'],		
			tasks : ['less']
		}
	});


	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);

};