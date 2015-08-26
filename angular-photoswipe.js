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
      .directive('ngPhotoswipe', ['ngPhotoswipe','$compile','$http','$templateCache', ngPhotoswipeDirective])
      .provider('ngPhotoswipe', ngPhotoswipeProvider);

    function ngPhotoswipeDirective(ngPhotoswipe, $compile, $http, $templateCache) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          slides: '=',
          options: '=',
          uiClass: '@'
        },
        compile: function ($elm, $attrs) {
          return {
            pre: function ($scope, $elm, $attrs, controllers) {
              $http
                .get('../../ng-photoswipe.html', { cache: $templateCache })
                .success(function(html) {
                  //$elm.append($compile(html)($scope));
                  var template = angular.element(html);
                  var newElm = $compile(template)($scope);
                  $elm.append(newElm);
                });
            },
            post: function ($scope, $elm, $attrs, controllers) {
              setTimeout(
                function(){
                  var pswpElement = document.querySelectorAll('.pswp')[0];
                  console.log(pswpElement);
                  console.log($scope.slides);
                  var gallery = new PhotoSwipe(pswpElement, $scope.uiClass || false, $scope.slides, $scope.options);
                  gallery.init();
                }, 3000);
            }
          }
        }
      };
    }

    function ngPhotoswipeProvider() {
      var defaults = {};

      var requiredKeys = [];

      var config;

      /* jshint validthis: true */
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

      /* jshint validthis: true */
      this.$get = function() {
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
