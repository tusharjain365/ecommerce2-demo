(function ($) {
    'use strict';
    // preloader
    jQuery(window).on('load', function () {
        jQuery(".preloader").delay(500).fadeOut(500);
        jQuery(".loader").fadeOut(500);
    });
    // cart-sidebar
    jQuery(document).ready(function ($) {
        $('.cart-close-btn').click(function (event) {
            $('.cart-sidebar').css('right', '-1000px');
        });
        $('.cartButton').click(function (event) {
            $('.cart-sidebar').css('right', '0');
        });
    });
    // Navigation
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('#menubar .nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href == currentLocation) {
            menuItem[i].className = "nav-link active";
        }
    }
    // Scrollup
    // $(function () {
    //     $.scrollUp({
    //         scrollName: 'scrollUp',
    //         scrollText: 'Top',
    //         activeOverlay: false
    //     });
    // });
    // Autocomplete off
    $(document).ready(function () {
        $('input').attr('autocomplete', 'nope');
    });
    // Restrict Inspect
    jQuery(document).ready(function ($) {
        document.onkeydown = function (e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                    e.keyCode === 86 ||
                    e.keyCode === 85 ||
                    e.keyCode === 117)) {
                return false;
            } else {
                return true;
            }
        };
        $(document).keypress("u", function (e) {
            if (e.ctrlKey) {
                return false;
            } else {
                return true;
            }
        });
    });
})(jQuery);