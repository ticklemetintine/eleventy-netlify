/*jslint browser: true, fudge: true, long: true */
/*global Waypoint, blacksunplc, jQuery, window */

jQuery(function ($) {
    "use strict";


    var debounce = blacksunplc.functions.debounce; // import {debounce}  from "module:blacksunplc/functions"
    var arrays = blacksunplc.arrays; // import * as arrays from "module:blacksunplc/arrays"
    var events = blacksunplc.events; // import * as events from "module:blacksunplc/events"
    var utils = blacksunplc.utils; // import * as utils from "module:blacksunplc/utils"
    var counterUp = window.counterUp["default"];   // import counterUp   from "./counter-up2-1.0.1.min.js"
    var cookieconsent = blacksunplc.cookieconsent; // import * as cookieconsent from "./cookieconsent-tr.js"

    var $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    var $switch = $(".tr-switch-section");
    var $counters = $(".counter");
    var $animateds = $(".animate__animated");
    var counterDuration = 1000;
    if ($(".tr-keystats--institution").length > 0) {
        counterDuration = 800;
    }

    if (utils.isTouch()) {
        $switch.on("click", function (event) {
            event.stopPropagation();
            $switch.toggleClass("is-active");
        });
        $(document).on("click", function () {
            $switch.removeClass("is-active");
        });
    } else {
        $switch.on("mouseenter", function () {
            $switch.addClass("is-active");
        });
        $switch.on("mouseleave", function () {
            $switch.removeClass("is-active");
        });
    }

    /* Counter animation start when element in view. */
    arrays.forEach($counters, function (counter) {
        var waypoint = new Waypoint({
            "element": counter,
            "handler": function () {
                counterUp(counter, {
                    "duration": counterDuration,
                    "delay": 16
                });
                waypoint.destroy();
            },
            "offset": "90%"
        });
    });

    /* Animation class "animate-active" added when element in view. */
    arrays.forEach($animateds, function (animated) {
        return new Waypoint({
            "element": animated,
            "handler": function () {
                $(animated).addClass("animate-active");
            },
            "offset": "90%"
        });
    });

    /**
     * Set header background white or transparent
     */
    function animateCompass() {
        $switch.find(".tr-icon").removeClass("animate-it");
        setTimeout(function () {
            $switch.find(".tr-icon").addClass("animate-it");
        }, 15);
    }

    var timer;
    function addWindowOnScrollListener() {
        var scroll = /** @type {number} */ ($(window).scrollTop());
        var footerOffset = $("footer").offset().top;
        clearTimeout(timer);
        if (scroll < 100) {
            $("header").removeClass("white");
            $switch.removeClass("only-compass");
        } else {
            $("header").addClass("white");
            $switch.addClass("only-compass");
            timer = setTimeout(animateCompass, 150);
        }

        if (windowWidth < 1201) {
            if (scroll + windowHeight >= footerOffset) {
                $switch.hide();
            } else {
                $switch.show();
            }
        }
        cookieconsent.dismiss();
    }

    events.add(window, "scroll", debounce(addWindowOnScrollListener, 50));

    var resizeListener = debounce(function () { // Debounced with blacksunplc library to run every 100ms.
        var scroll = /** @type {number} */ ($(window).scrollTop());
        if (scroll < 100) {
            $switch.removeClass("only-compass");
        } else {
            $switch.addClass("only-compass");
        }
    }, 100);

    events.add(window, "resize", resizeListener);

});
