/*
	angular-photoswipe v0.0.0
	(c) 2015 Massimiliano Sartoretto <massimilianosartoretto@gmail.com>
	License: MIT
*/

'format amd';
/* global define */

(function () {
  'use strict';

  function ngPhotoswipe(angular, Photoswipe) {

    return angular
      .module('ngPhotoswipe', [])
      .directive('ngPhotoswipe', ['ngPhotoswipe', ngPhotoswipeDirective])
      .provider('ngPhotoswipe', ngPhotoswipeProvider);

    function ngPhotoswipeDirective() {
      return {
        restrict: 'A',
        scope: {},
        link: function (scope, element, attrs) {}
      }
    }

    function ngPhotoswipeProvider() {
      var defaults = {};

      var requiredKeys = [];

      var config;

      this.configure = function(params) {
        // Check if it is an `object`
        if (!(params instanceof Object)) {
          throw new TypeError('Invalid argument: `config` must be an `Object`.');
        }

        // Extend default configuration
        config = angular.extend({}, defaults, params);

        // Check if all required keys are set
        angular.forEach(requiredKeys, function(key) {
          if (!config[key]) {
            throw new Error('Missing parameter:', key);
          }
        });

        return config;
      };

      this.$get = function() {
        if(!config) {
          throw new Error('ngPhotoswipe must be configured first.');
        }

        var getConfig = (function() {
          return config;
        })();

        return {
          configuration: getConfig
        };
      };
    }
  }

  if (typeof define === 'function' && define.amd) {
		define(['angular', 'Photoswipe'], ngPhotoswipe);
	} else if (typeof module !== 'undefined' && module && module.exports) {
		ngPhotoswipe(angular, require('Photoswipe'));
		module.exports = 'ngPhotoswipe';
	} else {
		ngPhotoswipe(angular, (typeof global !== 'undefined' ? global : window).Photoswipe);
	}
})();
