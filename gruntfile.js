module.exports = function(grunt) {
	grunt.initConfig({
		sass: {                              // Task 
    	dist: {                            // Target 
      	files: {                         // Dictionary of files 
        'assets/stylesheets/land.css': 'assets/stylesheets/src/land.scss',
        'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss'
      }
    }
  },

		watch: {
  		css: {
    		files: ['assets/stylesheets/src/*.scss'],
    		tasks: ['sass', 'cssmin'],
  		}
		},

		cssmin: {
  		target: {
    		files: {
      		'assets/stylesheets/app.min.css': ['assets/stylesheets/common.css', 'assets/stylesheets/land.css']
    		}
  		}
		},

  'http-server': {
      'dev': {
            root: './',
            port: 8282,
            // the host ip address 
            // If specified to, for example, "127.0.0.1" the server will 
            // only be available on that ip. 
            // Specify "0.0.0.0" to be available everywhere 
            host: "0.0.0.0",
            showDir : true,
            autoIndex: true,
            // server default file extension 
            ext: "html",
            // run in parallel with other tasks 
            runInBackground: false,
            // specify a logger function. By default the requests are 
            // sent to stdout. 
            logFn: function(req, res, error) { },
            // Proxies all requests which can't be resolved locally to the given url 
            // Note this this will disable 'showDir' 
            proxy: "http://someurl.com",
            /// Use 'https: true' for default module SSL configuration 
            /// (default state is disabled) 
        }
 
    }
   	
});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default',['sass', 'cssmin', 'http-server:dev', 'watch']);
}