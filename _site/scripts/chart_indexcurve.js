/*jslint browser: true, fudge: true, long: true, this: true */
/*global jQuery, blacksunplc, Waypoint */

jQuery(function ($) {
    "use strict";


    function setupWaypoint(chartId, src) {
        var $chart = $("#" + chartId);
        return new Waypoint({
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

    setupWaypoint("chart_indexcurve-us", path + "/IndexCurves-US" + lang + "/draw-indexcurve-us.js");
    setupWaypoint("chart_indexcurve-eu", path + "/IndexCurves-EU" + lang + "/draw-indexcurve-eu.js");
    setupWaypoint("chart_indexcurve-sg", path + "/IndexCurves-SG" + lang + "/draw-indexcurve-sg.js");
    setupWaypoint("chart_indexcurve-cn", path + "/IndexCurves-CN" + lang + "/draw-indexcurve-cn.js");

});
