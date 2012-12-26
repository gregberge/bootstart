var _ = require('lodash');
var rjsConfig = require('./public/modules/main');
_.extend(rjsConfig, {
  baseUrl: './public/modules',
  name: 'main',
  out: 'public/build/main.js',
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

    requirejs: {
      compile: {
        options: rjsConfig
      }
    },

    less: {
      all: {
        src: 'public/less/*.less',
        dest: 'public/build/main.css',
        options: {
          compress: true
        }
      }
    }

  });

  grunt.registerTask('default', 'requirejs less');
  grunt.registerTask('server', "Start webserver", function() {
    grunt.log.writeln('Starting web server.');
    process.env.NODE_ENV = 'development';
    require("./index");
  });

  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-less');

};
