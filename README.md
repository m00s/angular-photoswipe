# Angular PhotoSwipe

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
Inject `ngPhotoswipe` module and use the directive as below:

``` html
<ng-photoswipe
    slides="slides"
    options="opts">
</ng-photoswipe>
```

where `slides` is an object describing the images and `options` is an object for the configuration.

(For further infos follow the [Official docs](http://photoswipe.com/documentation/options.html))
