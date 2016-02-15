'use strict';

angular
  .module('demoApp', ['ngPhotoswipe'])
  .controller('demoCtrl', demoCtrlFn);

function demoCtrlFn() {
  var vm = this;

  vm.title = 'ngPhotoswipe';

  vm.opts = {
    index: 0
  };

  vm.slides = [{
      src: 'http://lorempixel.com/500/500/nature',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/abstract',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/sports',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/city',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/food',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/animals',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/business',
      w: 500, h: 500
    }, {
      src: 'http://lorempixel.com/500/500/fashion',
      w: 500, h: 500
    }];

  vm.showGallery = function (i) {
    if(angular.isDefined(i)) {
      vm.opts.index = i;
    }
    vm.open = true;
  };

  vm.closeGallery = function () {
    vm.open = false;
  };
}

angular.element(document).ready(function() {
  angular.bootstrap(document, ['demoApp']);
});
