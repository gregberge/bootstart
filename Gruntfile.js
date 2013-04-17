module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      'default': ['Gruntfile.js', 'app/**/*.js']
    },

    less: {
      'default': {
        options: {
          paths: ['app/assets/less', 'public'],
          compress: true,
          yuicompress: true
        },
        files: {
          'public/assets/css/main.css': ['app/assets/less/main.less']
        }
      }
    },

    copy: {
      'default': {
        files: {
          'public/assets/': 'components/**/*'
        }
      }
    },

    requirejs: {
      'default': {
        options: {
          appDir: 'app/assets',
          baseUrl: '.',
          keepBuildDir: true,
          skipDirOptimize: true,
          mainConfigFile: 'app/assets/js/main.js',
          optimizeCss: 'none',
          modules: [
            {
              name: 'js/main'
            }
          ],
          dir: 'public/assets'
        }
      }
    },

    uglify: {
      'default': {
        files: {
          'public/assets/js/require.js' : 'components/requirejs/require.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'less', 'copy', 'requirejs', 'uglify']);
};