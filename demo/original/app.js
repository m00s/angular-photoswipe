var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSrTgaP_TaPuS035ynJDnQbYWJ1RO_bgDHEdImWo25MCuO-58-9Bg',
        w: 360,
        h: 360
    },
    {
        src: 'http://itsadeliverything.com/wordpress/images//Dont-Panic.jpg',
        w: 1024,
        h: 1024
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
