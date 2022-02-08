
/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, jQuery, setTimeout */

jQuery(function ($) {
    "use strict";

    if ($("#pathway_towards_net_zero_chart").length > 0) {
        return new Waypoint({
            "element": $("#pathway_towards_net_zero_chart").get(0),
            "handler": function() {
                $("#pathway_towards_net_zero_chart").children(".svg-chart").removeClass("animated");
                window.setTimeout(function() {
                    $("#pathway_towards_net_zero_chart").children(".svg-chart").addClass("animated");
                }, 200);
            },
            "offset": "90%"
        });
    }

});
