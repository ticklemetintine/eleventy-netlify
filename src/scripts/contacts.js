/*jslint browser: true, fudge: true, long: true */
/*global jQuery */

jQuery(function ($) {
    "use strict";


    var $activePin = $(".heartbeat-pin.singapore");
    var $activeLocation = $(".contacts-item[data-location='singapore']");
    var $contactsList = $(".contacts-list");

    $(".heartbeat-pin, .singapore-label").on("click", function (/** !jQuery.Event */ event) {
        event.preventDefault();

        var $pin = $(event.currentTarget);
        if ($pin.data("location") === null) {
            $pin = $pin.parents("a[data-location]");
        }

        if ($pin.length === 0) {
            return;
        }

        if ($activePin.attr("data-location") === $pin.attr("data-location")) {
            return;
        }

        $(".heartbeat-pins .active").removeClass("active");
        $activePin = $pin;
        var location = $activePin.attr("data-location");

        $activePin.addClass("active");

        if (location === "singapore") {
            $(".singapore-label").addClass("active");
        }

        /* Move card. */
        $activeLocation.removeClass("active");
        $activeLocation = $(".contacts-item[data-location='" + location + "']");
        $activeLocation.addClass("active fadeup");
        $activeLocation.prependTo($contactsList);
    });

});
