'use strict';

angular
  .module('demoApp', ['ngPhotoswipe'])
  .controller('demoCtrl', function ($scope, ngPhotoswipe) {
    $scope.title = 'ngPhotoswipe';

    $scope.slides = [{
        src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrTgaP_TaPuS035ynJDnQbYWJ1RO_bgDHEdImWo25MCuO-58-9Bg',
        w: 360, h: 360
      }, {
        src: 'http://itsadeliverything.com/wordpress/images//Dont-Panic.jpg',
        w: 1024, h: 1024
      }
    ];

    $scope.opts = {
      index: 0
    };
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['demoApp']);
});
