var _ = require('lodash'),
spawn = require('child_process').spawn,
// require.js configuration load from main
rjsConfig = require('./public/modules/main');
_.extend(rjsConfig, {
  baseUrl: './public/modules',
  name: 'main',
  out: 'public/dist/main.js',
  optimize: 'uglify2',
  generateSourceMaps: true,
  preserveLicenseComments: false,
  useSourceUrl: true
});

module.exports = function( grunt ) {
  'use strict';
  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // The clean task ensures all files are removed from the public/dist/ directory so
    // that no files linger from previous builds.
    clean: ['public/dist/'],

    // The lint task will run the build configuration and the application
    // JavaScript through JSHint and report any errors.  You can change the
    // options for this task, by reading this:
    // https://github.com/gruntjs/grunt/blob/0.3-stable/docs/task_lint.md
    lint: {
      files: [
      ]
    },

    // JSHint configuration
    jshint: {
      options: {
        browser: true,
        node: true,
        globals: {
          jQuery: true
        }
      },
      all: ['grunt.js', 'private/**/*.js', 'public/templates/**/*.js', 'public/modules/**/*.js']
    },

    // requirejs configuration
    requirejs: {
      compile: {
        options: rjsConfig
      }
    },

    // uglify configuration
    uglify: {
      all: {
        files: {
          'public/dist/require.js' : ['public/components/requirejs/require.js']
        }
      }
    },

    // less configuration
    less: {
      all: {
        files: {
          'public/dist/main.css' : 'public/less/*.less'
        },
        options: {
          compress: true,
          yuicompress: true
        }
      }
    }

  });

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'requirejs', 'less']);

};
