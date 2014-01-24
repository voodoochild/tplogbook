module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          sourcemap: false
        },
        files: {
          'stylesheets/css/main.css': 'stylesheets/sass/main.scss'
        }
      }
    },

    cssmin: {
      minify: {
        files: {
          'stylesheets/css/main.min.css': ['stylesheets/css/main.css']
        }
      }
    },

    watch: {
      styles: {
        files: ['stylesheets/sass/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: true,
        }
      },
      scripts: {
        files: ['javascripts/**/*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8888,
          base: '.',
          livereload: true
        }
      }
    }
  });

  // Modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Tasks
  grunt.registerTask('default', ['sass', 'cssmin', 'connect', 'watch']);
};
