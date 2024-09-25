(function($) {
    'use strict';
    // product carousel
    $(document).ready(function() {
        $(".product-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        })
    });
})(jQuery);