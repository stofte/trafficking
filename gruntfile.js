module.exports = function(grunt) {
	'use strict';

	var conf = {
		connect: {
			server: {
				options: {
					port: 80,
					base: 'src',
					keepalive: true
				}
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: "src",
					mainConfigFile: "src/require-cfg.js",
					name: 'almond',
					out: "src/min.js"
				}
			}
		},
		bower: {
			target: {
				rjsConfig: 'src/require-cfg.js'
			}
		},
		jade: {
			dev: {
				options: {
					pretty: true,
					data: {
						env: 'dev'
					}
				},
				files: { 'src/index.html': 'src/index.jade' }
			},
			'prod': {
				options: {
					data: {
						env: 'prod'
					}
				},
				files: { 'src/index.html': 'src/index.jade' }
			}
		}		
	};

	grunt.initConfig(conf);

	// Libraries
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.registerTask('prod', ['jade:prod', 'requirejs']);
	grunt.registerTask('dev', ['jade:dev']);
};