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
          key: process.env.WPT_API_KEY
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
