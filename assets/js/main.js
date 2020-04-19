/*
    Theme Name: Kerusso Ministry
    Version: 1.0
    Author: Shahadul Islam
    Email: shahadul.islam1@gmail.com
*/

(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
        scrollAnimation();
    });

    // Document Ready Function
    $(document).ready(function () {
        
        displayBlocks();
    });

    // Window Resize Function
    $(window).on('resize', function () {

    });

    // Window Scroll Function
    $(window).on('scroll', function () {

    });

    // ========================== Preloader Setup ==========================
    function preloaderSetup() {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    } // preloaderSetup

    // ========================== Scroll Animation ==========================
    function scrollAnimation() {
        // Animate Scroll
        AOS.init({
            offset: 80
        });
    }

    

    function displayBlocks() {
        // Blocks
        $('.block-btn').click(function () {
            $('.capabilities').find('.d-hide').removeClass('d-hide');
            $(this).fadeOut('slow');

        })
    }
})(jQuery); // End of use strict
