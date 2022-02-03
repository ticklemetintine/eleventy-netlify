/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, location, FusionCharts */

/**
 * A module providing chart.
 * @module blacksunplc/charts
 * @requires blacksunplc/objects
 * @requires blacksunplc/security
 */
(function() {
    "use strict";

    var arrays = blacksunplc.arrays; 			// import * as arrays from "module:blacksunplc/arrays"
    var events = blacksunplc.events; 			// import * as events from "module:blacksunplc/events"
    var freeze = blacksunplc.objects.freeze;	// import {freeze}     from "module:blacksunplc/objects"
    var utils = blacksunplc.utils; 				// import * as utils from "module:blacksunplc/utils"

    var exports = {};

    function fusionReady(Charting) {
        FusionCharts.ready(function() {

            Charting.ready = true;

            /*
             * Values for "type" are taken from
             * https://docs.fusioncharts.com/charts/contents/Introduction/ChartList.html
             */
            arrays.forEach($("[id^='chart_']"), function(chartElement) {
                if (chartElement.pending) {
                    Charting.renderTo(chartElement);
                }
            });

            Charting.renderVisible();
        });
    }

    function windowEvents(Charting) {
        var windowWidth = $(window).width();

        events.add(window, "resize", function(/** !jQuery.Event */ event) {

            if (windowWidth) {
                if (windowWidth === $(window).width()) {
                    event.stopPropagation();
                    event.preventDefault();
                    return;
                }
                windowWidth = $(window).width();
            }

            arrays.forEach($("[id^='chart_']"), function(chartElement) {
                try {
                    var chart = Charting.charts[chartElement.id];
                    if (chart.fusionChart !== null) {
                        chart.fusionChart.dispose();
                    }

                    chart.fusionChart = null;
                    var $chart = $(chartElement);
                    $chart.empty();

                    if (utils.isOnScreen($chart)) {
                        Charting.renderTo(chartElement);
                    }

                } catch (ignore) {
                    /* falls through */
                }
            });
        });

        events.add(window, "scroll", function() {
            Charting.renderVisible();
        });
    }

    function updateCharts(chart) {
        if (chart && chart.updateCharts) {
            chart.updateCharts();
        }
    }

    /**
    * @param {!Element} element
    * @param {Object} Charting
    */
    function render(element, Charting) {
        var $element = $(element);
        var elementID = /** @type {string} */ ($element.attr("id"));
        var chartData = Charting.charts[elementID];

        if ($("span", $element).length === 0) {
            if (Charting.ready) {
                try {
                    chartData.fusionChart = new FusionCharts({
                        "type": chartData.type,
                        "height": chartData.height || "288",
                        "width": chartData.width || "100%",
                        "dataFormat": "json",
                        "dataSource": chartData.dataSource,
                        "events": Charting.CHART_EVENTS
                    });
                    chartData.fusionChart.render(elementID);
                    $element.get(0).pending = false;

                } catch (ignore) {
                    /* falls through */
                }

            } else {
                $element.get(0).pending = true;
            }

        } else if (chartData.fusionChart !== null && !chartData.fusionChart.hasRendered()) {
            chartData.render(elementID);
        }
    }

    /**
    * @param {Object} Charting
    */
    function renderVisible(Charting) {
        if (Charting.ready) {
            arrays.forEach($("[id^='chart_']"), function(chartElement) {
                var $chart = $(chartElement);
                if (utils.isOnScreen($chart)) {
                    Charting.renderTo(chartElement);
                }
            });
        }
    }

    /**
     * Checks if the the given JQuery element is in the screesn viewport.
     * @param {Object}
     * @return {Object}
     */
    exports.initCharts = function(chart) {

        var Charting = {

            /** @type {?Object} */
            "charts": chart.charts || null, // End of charts

            /** @type {boolean} */
            "chinese": chart.chinese || false,

            /** @type {boolean} */
            "ready": chart.ready || false,

            "CHART_EVENTS": {
                //renderComplete: updateCharts(chart),
                "loaded": function() {
                    updateCharts(chart);
                }
            },

            "updateCharts": function() {
                updateCharts(chart);
            },

            "renderTo": function(element) {
                render(element, Charting);
            },

            "renderVisible": function() {
                renderVisible(Charting);
            }
        };

        windowEvents(Charting);
        fusionReady(Charting);

        return Charting;
    };

    blacksunplc.charts = freeze(exports);

}());
