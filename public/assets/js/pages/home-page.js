(function($) {
    'use strict';
    // service carousel
    $(document).ready(function() {
        $(".service-carousel").owlCarousel({
            autoplay: true,
            dots: false,
            responsive: {
                0: {
                    loop: true,
                    items: 1
                },
                768: {
                    loop: false,
                    items: 3
                }
            }
        })
    });
    // exclusive carousel
    $(document).ready(function() {
        $(".exclusive-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            margin: 20,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    loop: false,
                    items: 3
                }
            }
        })
    });
})(jQuery);