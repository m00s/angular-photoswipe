module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*\n\t<%= pkg.name %> v<%= pkg.version %>\n' +
         '\t(c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n' +
         '\tLicense: <%= pkg.license %> \n*/\n'
      },
      build: {
        options: {
          sourceMap: true
        },
        files: {
          'angular-photoswipe.min.js': [
            'angular-photoswipe.annotated.js',
            'templates.js'
          ]
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['a.js', 'templates.js'],
        dest: 'aabb.js',
      },
    },
    ngAnnotate: {
      options: {
          singleQuotes: true,
          remove: true,
          singleQuotes: true
      },
      dist: {
          files: {
              'angular-photoswipe.annotated.js': ['angular-photoswipe.js']
          },
      }
    },
    jshint: {
      src: ['angular-photoswipe.js', 'tests.js']
    },
    clean: {
      release: ['angular-photoswipe.annotated.js','templates.js']
    },
    ngtemplates:  {
      app:  {
        src:  'views/**.html',
        dest: 'templates.js',
        options:  {
          htmlmin:  {
            collapseBooleanAttributes:      true,
            collapseWhitespace:             true,
            removeAttributeQuotes:          true,
            removeEmptyAttributes:          true,
            removeRedundantAttributes:      true,
            removeScriptTypeAttributes:     true,
            removeStyleLinkTypeAttributes:  true
          },
          module: 'ngPhotoswipe'
        }
      }
    }
  });

  grunt.registerTask('test', ['jshint','karma']);
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['ngtemplates','ngAnnotate','uglify','clean']);
};
