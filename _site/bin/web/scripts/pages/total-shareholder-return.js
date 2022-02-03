/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, jQuery */
jQuery(function ($) {
    "use strict";

    var arrays = blacksunplc.arrays; // import * as arrays from "module:blacksunplc/arrays"

    /**
     * @param {!Element} accordion
     */
    function initChartAccordion(accordion) {
        $(".legend-title", accordion).on("click", function (/** !jQuery.Event */ event) {
            var $legendTitle = $(event.currentTarget);
            if (!$legendTitle.parent(".no-collapsable").length) {
                $legendTitle.parent().siblings().removeClass("is-active");
                $legendTitle.parent().toggleClass("is-active");
                event.preventDefault();
            }
        });
    }

    arrays.forEach($(".chart-legend-accordion"), initChartAccordion);

});
