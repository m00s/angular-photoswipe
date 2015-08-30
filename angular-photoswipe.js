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

    ngPhotoswipeDirective.$inject = ['$compile','$http','$templateCache'];

    function ngPhotoswipeDirective($compile, $http, $templateCache) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          slides: '=',
          options: '='
        },
        link: linkFn,
        controllerAs: 'vm',
        bindToController: true
      };

      function linkFn(scope, iElement, iAttrs) {
        $http
          .get('../../ng-photoswipe.html', { cache: $templateCache })
          .success(function(html) {
            var template = angular.element(html);
            iElement.append($compile(template)(scope));
          });

        scope.start = function(){
          var pswpElement = document.querySelectorAll('.pswp')[0];
          var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default || false, scope.slides, scope.options);
          gallery.init();
        };
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
