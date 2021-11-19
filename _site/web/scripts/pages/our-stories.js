/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, jQuery */

jQuery(function ($) {
    "use strict"

    var debounce = blacksunplc.functions.debounce; // import {debounce}  from "module:blacksunplc/functions"
    var events = blacksunplc.events; // import * as events from "module:blacksunplc/events"

    /**
      * Set header background white or transparent
      */
    function addWindowOnScrollListener() {
        if ($(window).scrollTop() >= window.innerHeight - 100) {
            $(".next-story").addClass("show");
        } else {
            $(".next-story").removeClass("show");

        }

        if ($(window).scrollTop() + $(window).height() >= $("footer").offset().top) {
            $(".contentpage-main").addClass("on-display");
        }

        if ($(window).scrollTop() + $(window).height() <= $("footer").offset().top - 300) {
            $(".contentpage-main").removeClass("on-display");
        }
    }

    events.add(window, "scroll", debounce(addWindowOnScrollListener, 50));
});
