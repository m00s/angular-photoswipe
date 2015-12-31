/*
	angular-photoswipe v0.0.4
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
          open: '=',//lets us put a watch on when the open changes'
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
        
        //var gallery;
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
                if (typeof scope.onClose === 'function') {
                    scope.onClose();
                }
                
            });
            scope.gallery.listen('afterChange', function () {
                
                scope.item = scope.gallery.currItem;
                if (!scope.$$phase) {
                    scope.$apply();
                }
                
            });
        }
        scope.$watch('open', function (nval, oval) {
            if (nval != oval) {
                if (nval) {
                    startGallery();
                }
            } else if (!nval && scope.gallery) {
                //close it
                scope.gallery.close();
                scope.gallery = null;
            }
        });
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
