/*
	angular-photoswipe v0.0.8
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
      .directive('ngPhotoswipe', ngPhotoswipeDirective);

    function ngPhotoswipeDirective($compile, $http, $templateCache) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          slides: '=',
          options: '=',
          template: '@',
          open: '=',
          onClose: '&',
          extensions:'=?'
        },
        link: linkFn
      };

      function linkFn(scope, iElement, iAttrs) {
        scope.template = scope.template || 'views/ng-photoswipe.html';

        $http
          .get(scope.template, { cache: $templateCache })
          .success(function(html) {
            var template = angular.element(html);
            iElement.append($compile(template)(scope));
          });

        scope.start = function () {
          scope.open = true;
          startGallery();
        };

        var startGallery = function () {
          var pswpElement = document.querySelectorAll('.pswp')[0];
          scope.gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default || false, scope.slides, scope.options);
          scope.gallery.init();
          scope.item = scope.gallery.currItem;

          scope.gallery.listen('destroy', function () {
            scope.safeApply(function () {
              scope.onClose();
            });
          });

          scope.gallery.listen('afterChange', function () {
            scope.safeApply(function () {
              scope.item = scope.gallery.currItem;
            });
          });
        };

        scope.$watch('open', function (nVal, oVal) {
          if (nVal != oVal) {
            if (nVal) {
              startGallery();
            }
          } else if (!nVal && scope.gallery) {
            scope.gallery.close();
            scope.gallery = null;
          }
        });

        scope.safeApply = function(fn) {
          var phase = this.$root.$$phase;
          if(phase == '$apply' || phase == '$digest') {
            if(fn && (typeof(fn) === 'function')) {
              fn();
            }
          } else {
            this.$apply(fn);
          }
        };

        scope.$on('destroy', function () {
          scope.gallery = null;
        });
      }
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
