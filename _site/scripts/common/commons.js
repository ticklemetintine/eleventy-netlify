/*jslint browser: true, fudge: true, long: true */
/*global DocumentTouch, Headroom, blacksunplc, clearTimeout, document, jQuery, setInterval, setTimeout, window */

jQuery(function($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays     from "module:blacksunplc/arrays"
    var attributes = blacksunplc.attributes; // import * as attributes from "module:blacksunplc/attributes"
    var css = blacksunplc.css; // import * as css        from "module:blacksunplc/css"
    var debounce = blacksunplc.functions.debounce; // import {debounce}  from "module:blacksunplc/functions"
    var events = blacksunplc.events; // import * as events from "module:blacksunplc/events"

    /** @return {boolean} */
    function isTouchEnabled() {
        var mediaQuery = [
            "(touch-enabled)",
            "(-webkit-touch-enabled)",
            "(-moz-touch-enabled)",
            "(-o-touch-enabled)",
            "(-ms-touch-enabled)"
        ].join();
        return (
            "ontouchstart" in window ||
            window.DocumentTouch && document instanceof DocumentTouch ||
            css.matchMedia(mediaQuery).matches
        );
    }

    function detectTouch() {
        var cssClass;
        if (isTouchEnabled()) {
            cssClass = "touch-enabled";
        } else {
            cssClass = "no-touch";
        }
        attributes.classList(document.body).add(cssClass);
    }

    detectTouch();

    function removeQuickLinksIcon() {
        $(".quicklinks .quicknav").remove();
    }

    /**
     * @param {string} id
     * @param {string} text
     * @return {string} An HTML string for a list item.
     */
    function quickLinksTemplate(id, text) {
        return "<li><a href=#" + id + " class='quicknav-link'><i class='tr-icon arrow-open-down-before '></i>" + text + "</a></li>";
    }

    /**
     * This will look for quick-links-required class on the page.
     * If its present then will provide Dynamic Quick Links feature.
     */
    function generateDynamicQuickLinks() {

        if ($(".quick-links-required").length === 0) {
            removeQuickLinksIcon();
            return;
        }

        $(".quicklinks .quicknav").css("display", "block");

        var $quickLinksItems = $("[data-quick-links-item]");
        if ($quickLinksItems.length === 0 && !$(document.body).hasClass("our-story-page")) {
            removeQuickLinksIcon();
            return;
        }

        arrays.forEach($quickLinksItems, function(quickLinksItem) {
            var id = quickLinksItem.getAttribute("id");
            var text = quickLinksItem.getAttribute("data-quick-links-item");
            var htmlString = quickLinksTemplate(id, text);
            $(".quicknav .quicknav-links ul").append(htmlString);
        });
    }

    //    function removeBackToTop() {
    //        $(".quicklinks .back-to-top").remove();
    //    }
    //
    //    /**
    //     * This will look for back-to-top-required class on the page.
    //     * If it's present then will provide Back to Top feature.
    //     */
    //     function generateBackToTopFeature() {
    //         if ($(".back-to-top-required").length === 0) {
    //             removeBackToTop();
    //         }
    //     }

    function removeSocialShare() {
        $(".quicklinks .sharelink").remove();
    }

    /**
     * This will look for social-share-required class on the page .
     * If its present then will provide Social Share feature.
     */
    function generateSocialShareFeature() {
        if ($(".social-share-required").length === 0) {
            removeSocialShare();
        }
    }

    generateDynamicQuickLinks();
    //    generateBackToTopFeature();
    generateSocialShareFeature();

    /* A nested "ready" callback: perhaps it needs to be called _after_ the above script. */
    jQuery(function() {

        /* Note The `outerWidth` method is not applicable to window objects; use function `layoutViewport` from "module:blacksunplc/css" instead. */
        var windowOuterWidth1 = /** @type {number} */ ($(window).outerWidth());
        var desktop = 1025;
        var header = /** @type {!HTMLElement} */ (document.querySelector("header"));
        var headroomIs = false;

        /* Construct an instance of Headroom, passing the "header" element. */
        var headroom = new Headroom(header, {
            "offset": 150,
            "tolerance": 5,
            "classes": {
                "initial": "animated",
                "pinned": "slideDown",
                "unpinned": "slideUp"
            }
        });

        if (windowOuterWidth1 < desktop && headroomIs === false) {
            headroomIs = true;
            headroom.init();
        }

        function handleHeadroomOnResize() {
            /* Note The `outerWidth` method is not applicable to window objects; use function `layoutViewport` from "module:blacksunplc/css" instead. */
            var windowOuterWidth2 = /** @type {number} */ ($(window).outerWidth());

            if (windowOuterWidth2 < desktop && headroomIs === false) {
                headroomIs = true;
                headroom.init();
            }

            if (windowOuterWidth2 >= desktop && headroomIs === true) {
                headroom.destroy();

                headroomIs = false;
                $("header").removeClass("slideUp");
            }
        }

        /* Function to adjust fullpage height on iOS to allow for the URL bar. */
        if ($("#fullpage").length && $(".our-story-page").length === 0) {
            var height = window.innerHeight;
            var resize = function() {
                if (window.innerHeight !== height) {
                    height = window.innerHeight;
                    $(".section, .fp-tableCell").css("height", height + "px");
                }
            };
            setInterval(resize, 500); // Don't lower more than 500 milliseconds, otherwise there will be animation-problems with the  Safari toolbar
            $(window).on("resize", resize);
        }
        // end

        var resizeTimer = 0;
        $(window).on("resize", function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handleHeadroomOnResize, 250);
        });

        /* Note: to be removed on 10th */
        if ($(document.body).hasClass("conference-recording")) {
            $(".header-links > li > a:not('.current'):not('.header-download-link'):not(.header-print-basket-link)").attr("href", "/zh/media-centre/videos.html");
            $(".mobile-links--left > li a:not('.current'):not('.header-download-link'):not(.header-print-basket-link)").attr("href", "/zh/media-centre/videos.html");
        }
    });

    // image caption show/hide
    var $caption = $(".image-caption .icon-info");
    var $imgCaption = $(".image-caption");

    if ($imgCaption.length > 0) {
        $caption.on("click", function(e) {
            e.preventDefault();

            $(this).focus();
            $(this).parent().toggleClass("show");
            $(this).parent().parent().toggleClass("show");
        }).on("focusout", function() {
            $(this).parent().removeClass("show");
            $(this).parent().parent().removeClass("show");
        });

    }

    function addWindowOnScrollListener() {
        if ($(".image-caption.show").length > 0) {
            if ($(window).scrollTop() >= $(".image-caption.show").offset().top) {
                $imgCaption.removeClass("show");
                $imgCaption.parent().removeClass("show");

            }
        }
    }

    events.add(window, "scroll", debounce(addWindowOnScrollListener, 50));

});