# Angular PhotoSwipe [Live Demo](http://m00s.github.io/angular-photoswipe/)

AngularJS directive for [PhotoSwipe](http://photoswipe.com/).

Copyright © 2015, [Massimiliano Sartoretto](mailto:massimilianosartoretto@gmail.com)

Find me on:
[![alt text][1.1]][1]
[![alt text][2.1]][2]
[![alt text][6.1]][6]

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[6.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)

[1]: http://www.twitter.com/___Sarto
[2]: http://www.facebook.com/profile.php?id=1549402605
[6]: http://www.github.com/m00s

Installation
------------

You can choose your preferred method of installation:
* Through bower: `bower install ng-photoswipe --save`
* Through npm: `npm install ng-photoswipe --save`
* Download from github: [angular-photoswipe.min.js](https://github.com/m00s/angular-photoswipe/blob/master/angular-photoswipe.min.js)

Usage
------
Inject `ngPhotoswipe` module in your application with:

``` js
angular
  .module('myApp', ['ngPhotoswipe'])
```

and use the directive as below:

``` html
<ng-photoswipe
    slides="slides"
    start-on="{{ bindToSomething || 'eventName' }}"
    template="'template.html'"
    options="opts">
</ng-photoswipe>
```

where `slides` is an object describing the images and `options` is an object for the configuration.

The `start-on` attribute tells the directive to listen for the specified event to start the gallery.
(Helpful to start Photoswipe with a external event).
 
You can also provide your own `template` that will override the default one.

(For further infos follow the [Official docs](http://photoswipe.com/documentation/options.html))

Changelog
------
### v0.0.8 (Dec 28, 2015)
* Add custom event to manually start Photoswipe
* Better demo

### v0.0.7 (Dec 18, 2015)
* Better grunt build
* Add *template* attribute to override the default html template

### v0.0.6 (Dec 11, 2015)
* Fix DI bug due to undefined controller
* Improve jshint rules

### v0.0.5 (Dec 08, 2015)
* Update bower configuration

### v0.0.4 (Aug 29, 2015)
* Move link definition inside directive block

### v0.0.3 (Aug 27, 2015)

* Update demoApp
* Better code style

### v0.0.2 (Aug 27, 2015)

* Add JP's jshint
* External template compilation

### v0.0.1 (Aug 26, 2015)

* Add directive template
* Add ngPhotoswipeProvider
