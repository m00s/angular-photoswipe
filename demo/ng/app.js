'use strict';

angular
  .module('demoApp', ['ngPhotoswipe'])
  .controller('demoCtrl', function ($scope, ngPhotoswipe) {});

angular.element(document).ready(function() {
  angular.bootstrap(document, ['demoApp']);
});
