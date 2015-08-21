/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: true
      },
      files: 'Gruntfile.js'
    },
    perfbudget: {
      default: {
        options: {
          url: 'http://example.com',
          key: process.env.WPT_API_KEY,
          location: "Dulles_MotoG",
          connection: "3G",
          runs: 5,
          video: true,
          private: true,
          sensitive: true,
          budget: {
            visualComplete: '4000',
            SpeedIndex: '1500'
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-perfbudget');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
