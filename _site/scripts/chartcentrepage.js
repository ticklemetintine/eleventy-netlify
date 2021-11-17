/*jslint browser: true, fudge: true, long: true */
/*global jQuery, is */

jQuery(function($) {
    "use strict";

    var chinese = $("html[lang='zh']").length !== 0;

    $("#chart-filter-container").liveFilter({
        "filterChildSelector": ".column",
        "defaultText": false,
        "noMatches": "",
        "totalNumber": " "
    });

    if (is.mobile() || is.tablet()) {
        $("#chart-centre-download-all").remove();
    }

    $(".download-item img").on("mouseout", function( /** !jQuery.Event */ event) {
        var image = event.currentTarget;
        var source = (chinese ? "../../" : "../") + "assets/icons/download-purple.png";
        image.setAttribute("src", source);
    });

    $(".download-item img").on("mouseover", function( /** !jQuery.Event */ event) {
        var image = event.currentTarget;
        var source = (chinese ? "../../" : "../") + "assets/icons/download-hover-over.png";
        image.setAttribute("src", source);
    });

});