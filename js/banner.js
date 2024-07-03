jQuery(function($) {
    setInterval (function () {
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -1920});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : -3840});
        $('.slidelist').delay(2000);
        $('.slidelist').animate({marginLeft : 0});
    });
});