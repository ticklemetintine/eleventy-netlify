/*jslint browser: true, fudge: true, long: true, this: true */
/*global jQuery Waypoint */

jQuery(function ($) {
    "use strict";


    var waypoint = new Waypoint({
        "element": document.getElementById("total-shareholder_tsr"),
        "handler": function(direction) {
            var file = $("html[lang='zh']").length !== 0 ? "zh/tsrmv-core-zh.js" : "en/tsrmv-core.js";
            var path = "/ed/tsrmv-chart/" + file;
            $("#total-shareholder_tsr").after("<script src=" + path + "></script>");
            this.destroy();
        },
        "offset": "bottom-in-view"
    });

});
