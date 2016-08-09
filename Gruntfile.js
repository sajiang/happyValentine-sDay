module.exports = function(grunt) { 
  grunt.initConfig({
    uglify: {
      build: {
        src: ['js/code.js'],
        dest: 'js/code.min.js'
      }
    },
  watch :{
    scripts :{
      files : ['js/code.js','index.html','css/*.css'],
      tasks : ['uglify'],
      options : {
        livereload : 9090,
      }
    }
  }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify']);  
};