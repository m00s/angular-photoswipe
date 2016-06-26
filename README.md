# Angular PhotoSwipe

AngularJS directive for [PhotoSwipe](http://photoswipe.com/).

Copyright © 2016, [Massimiliano Sartoretto](mailto:massimilianosartoretto@gmail.com)

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
<div ng-photoswipe
     slides="slides"
     slide-selector=".my-awesome-thumbnail"
     open="isOpen"
     on-close="onGalleryClose()"
     template="'./myGallery.template.html'"
     options="opts"></div>
```

where `slides` is an object defining the images, and the `slideSelector` is a valid [selector](https://www.w3.org/TR/css3-selectors/#selectors) to query the gallery images.

The `open` attribute is a scope boolean that start the gallery when truthy.

The `on-close` callback will be called after the gallery closes, not surprising.

You can also provide your own `template` that will override the default one.

(For further infos follow the [Official docs](http://photoswipe.com/documentation/options.html))


Changelog
------
### v0.1.1 (May 12, 2016)
* Fix overridden opts

### v0.1.0 (May 05, 2016)
* Animation support for multiple galleries
* Fix start animation

### v0.0.9 (Feb 15, 2016)
* Add ngTemplates grunt task
* Fix npm package version

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
