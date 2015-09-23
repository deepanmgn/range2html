module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
  		css: {
    		files: ['*.scss'],
    		tasks: ['sass'],
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
 
    },
 

  	sass: {                              // Task 
    	dist: {                            // Target 
      	files: {                         // Dictionary of files 
        'styles.css': 'styles.scss'
      }
    }
  }
});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-http-server');

	grunt.registerTask('default',['sass', 'http-server:dev', 'watch']);
}