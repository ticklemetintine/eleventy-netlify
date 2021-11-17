/*jslint browser: true, fudge: true, long: true, this: true */
/*global jQuery, blacksunplc, Waypoint */

jQuery(function ($) {
    "use strict";


    function setupWaypoint(chartId, src) {
        var $chart = $("#" + chartId);
        new Waypoint({
            "element": $chart[0],
            "handler": function() {
                var script = window.document.createElement("script");
                script.src = src;
                var firstScript = window.document.getElementsByTagName("script")[0];
                firstScript.parentNode.insertBefore(script, firstScript);
                this.destroy();
            },
            "offset": "bottom-in-view"
        });
    }

    var path = "/ed";
    var lang = $("html[lang='zh']").length !== 0 ? "/zh" : "/en";

    setupWaypoint("chart_tgem1", path + "/t-gem-chart1" + lang + "/draw-tgem1.js");
    setupWaypoint("chart_tgem2", path + "/t-gem-chart2" + lang + "/draw-tgem2.js");
    setupWaypoint("chart_tgem3", path + "/t-gem-chart3" + lang + "/draw-tgem3.js");
    setupWaypoint("chart_tgem4", path + "/t-gem-chart4" + lang + "/draw-tgem4.js");

});
