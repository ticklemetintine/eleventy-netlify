/*jslint browser: true, fudge: true, long: true, this: true */
/*global $, FusionCharts, blacksunplc, jQuery, window */

(function () {
    "use strict";

    var events = blacksunplc.events; // import * as events from "module:blacksunplc/events"
    var charts = blacksunplc.charts; // import * as charts from "module:blacksunplc/charts"

    function updateCharts() {

        //            try {
        $(".chart-display-desktop svg").css("background-color", "transparent");

        var $tenYearsSim = $("#chart_ten-years-simulation");

        var $netProfitDataVals = $(".fusioncharts-label:last-child:contains('21.7')", $tenYearsSim).parent().children();

        $($netProfitDataVals[5]).find("tspan").attr("dy", "-5");

        $netProfitDataVals.css("fill", "#0073A2");

        var $simuDataVals = $(".fusioncharts-label:last-child:contains('41.8')", $tenYearsSim).parent().children();

        $($simuDataVals[0]).find("tspan").attr("dx", "22");
        $($simuDataVals[0]).find("tspan").attr("dy", "12");
        $($simuDataVals[2]).find("tspan").attr("dy", "-1");
        $($simuDataVals[3]).find("tspan").attr("dy", "11");
        $($simuDataVals[8]).find("tspan").attr("dy", "-2");
        $($simuDataVals[10]).find("tspan").attr("dy", "-5");

        $simuDataVals.css("fill", "#CB3567");

        var $groupNetVals = $(".fusioncharts-label:last-child:contains('11.0')", $tenYearsSim).parent().children();

        $($groupNetVals[0]).find("tspan").attr("dy", "1");
        $($groupNetVals[1]).find("tspan").attr("dy", "-1");

        $groupNetVals.css("fill", "#b198b4");

        var $auditedGroupVals = $(".fusioncharts-label:last-child:contains('56.5')", $tenYearsSim).parent().children();

        $($auditedGroupVals[0]).find("tspan").attr("dy", "7");
        $($auditedGroupVals[2]).find("tspan").attr("dy", "-17");

        $auditedGroupVals.css("fill", "#633269");

        var $yaxisGridlabels = $(".fusioncharts-yaxis-0-gridlabels", $tenYearsSim).eq(0);

        $yaxisGridlabels.css("opacity", "0");

        var $svg = $("svg", $tenYearsSim);
        var $circ = $svg.children().eq(8).children().eq(1).children().eq(0);
        $circPath.attr("transform", "rotate(45 " + $circ.attr("cx") + " " + $circ.attr("cy") + ")");
    }


    var isChinese = $("html[lang='zh']").length !== 0;
    var chart = {
        "chinese": isChinese,
        "updateCharts": updateCharts,
        "charts": {
            "chart_ten-years-simulation": {
                "type": "msline",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#633269, #b198b4, #CB3567, #0073A2",
                        "bgAlpha": 0,
                        "bgColor": "#f1f1f1",
                        "borderAlpha": 0,
                        "showShadow": false,
                        "usePlotGradientColor": false,
                        "showLegend": false,
                        "showToolTip": false,
                        "showYAxisValues": true,
                        "showLimits": 0,
                        "showBorder": false,
                        "showHoverEffect": false,
                        "numDivLines": 0,
                        "canvasBorderAlpha": 0,
                        "canvasBgAlpha": 0,
                        "drawAnchors": false,
                        "valuePosition": "ABOVE"
                        // yAxisMinValue: -10,
                        // yAxisMaxValue: 10,
                    },
                    "categories": [
                        {
                            "category": [
                                {"label": "09"},
                                {"label": "10"},
                                {"label": "11"},
                                {"label": "12"},
                                {"label": "13"},
                                {"label": "14"},
                                {"label": "15"},
                                {"label": "16"},
                                {"label": "17"},
                                {"label": "18"},
                                {"label": "19"},
                                {"label": "20"},
                                {"label": "21"}
                            ]
                        }
                    ],
                    "dataset": [
                        {
                            "seriesName": "Group net profit",
                            "data": [
                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
                                {
                                    "value": 12.3,
                                    "displayValue": "11.8",
                                    "valuePosition": "BELOW",
                                    "drawAnchors": 1,
                                    "anchorRadius": 3,
                                    "anchorBgColor": "#633269"
                                },
                                {
                                    "value": 10,
                                    "displayValue": "8.8",
                                    "valuePosition": "BELOW",
                                    "drawAnchors": 1,
                                    "anchorRadius": 3,
                                    "anchorBgColor": "#633269"
                                },
                                {
                                    "value": 50.8,
                                    "displayValue": "56.5",
                                    "valuePosition": "ABOVE",
                                    "drawAnchors": 1,
                                    "anchorRadius": 3,
                                    "anchorBgColor": "#633269"
                                }
                            ]
                        },
                        {
                            "seriesName": "Audited Group net",
                            "anchorSides": "4",
                            "anchorStartAngle": "45",
                            "data": [
                                {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
                                {
                                    "value": 14.8,
                                    "displayValue": "12.8",
                                    "drawAnchors": 1,
                                    "anchorSides": 4,
                                    "anchorRadius": 4,
                                    "anchorBgColor": "#b198b4"
                                },
                                {
                                    "value": 12.4,
                                    "displayValue": "11.4",
                                    "drawAnchors": 1,
                                    "anchorSides": 4,
                                    "anchorRadius": 4,
                                    "anchorBgColor": "#b198b4"
                                },
                                {
                                    "value": 12.0,
                                    "displayValue": "11.0",
                                    "drawAnchors": 1,
                                    "anchorSides": 4,
                                    "anchorRadius": 4,
                                    "anchorBgColor": "#b198b4"
                                }
                            ]
                        },
                        {
                            "seriesName": "Simulated-group",
                            "data": [
                                {
                                    "value": -24.90,
                                    "displayValue": "(24.9)"
                                },
                                {
                                    "value": 27.30,
                                    "displayValue": "27.3"
                                },
                                {
                                    "value": 13.60,
                                    "displayValue": "13.6"
                                },
                                {
                                    "value": 2.90,
                                    "displayValue": "2.9",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 13.60,
                                    "displayValue": "13.6"
                                },
                                {
                                    "value": 10.30,
                                    "displayValue": "10.3",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 32.10,
                                    "displayValue": "32.1"
                                },
                                {
                                    "value": -6.70,
                                    "displayValue": "(6.7)",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 26.10,
                                    "displayValue": "26.1"
                                },
                                {
                                    "value": 41.80,
                                    "displayValue": "41.8"
                                }
                                /*
                                 * Please note that if you add a new data point, the label is used
                                 * to determine the colour of all of the data point annotations.
                                 * Search for comment "Reposition figures that touch lines.".
                                 */
                            ],
                            "dashed": "1"
                        },
                        {
                            "seriesName": "Audited-group",
                            "data": [
                                {
                                    "value": 6.20,
                                    "displayValue": "6.2"
                                },
                                {
                                    "value": 4.60,
                                    "displayValue": "4.6"
                                },
                                {
                                    "value": 12.70,
                                    "displayValue": "12.7",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 10.70,
                                    "displayValue": "10.7"
                                },
                                {
                                    "value": 10.70,
                                    "displayValue": "10.7",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 10.90,
                                    "displayValue": "10.9"
                                },
                                {
                                    "value": 14.50,
                                    "displayValue": "14.5"
                                },
                                {
                                    "value": 8.40,
                                    "displayValue": "8.4"
                                },
                                {
                                    "value": 14.20,
                                    "displayValue": "14.2",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 21.70,
                                    "displayValue": "21.7"
                                }
                                /*
                                 * Please note that if you add a new data point, the label is used
                                 * to determine the colour of all of the data point annotations.
                                 * Search for comment "Reposition figures that touch lines.".
                                 */
                            ]
                        }
                    ]
                },
                "height": "240"
            }
        }
    }; // End of charts

    charts.initCharts(chart);

    jQuery(function ($) {

        var debounce = blacksunplc.functions.debounce; // import {debounce}  from "module:blacksunplc/functions"

        var $stickyElement = $(".table-header-sticky");
        var $table = $(".has-sticky-header");
        var $fakeDiv = $(".fake-space");
        var $tableResponsives = $(".table-responsive");
        var stickyHeight = /** @type {number} */ ($stickyElement.height());
        var scrollLeft = 0;

        $fakeDiv.height(stickyHeight);

        function addWindowOnScrollListener () {
            var scroll = /** @type {number} */ ($(window).scrollTop());
            var tableOffset = $table.offset().top - stickyHeight;
            var scrollTill = tableOffset + /** @type {number} */ ($table.height());
            var $tables;
            if (scroll >= tableOffset && scrollTill >= scroll) {
                $stickyElement.addClass("is-sticky");
                $table.css("padding-top", stickyHeight);
                if ($("header").hasClass("slideUp")) {
                    $stickyElement.css("top", "0px");
                } else {
                    $stickyElement.css("top", "59px");
                }
                $fakeDiv.show();
                if (scrollLeft > 0) {
                    $tables = $(".table-header-sticky--wrapper table", $stickyElement);
                    $tables.css("transform", "translateX(" + -scrollLeft + "px)");
                }
            } else {
                $stickyElement.removeClass("is-sticky").removeAttr("style");
                $fakeDiv.hide();
                $tables = $(".table-header-sticky--wrapper table", $stickyElement);
                $tables.removeAttr("style");
            }
        }

        $tableResponsives.on("scroll", function (/** !jQuery.Event */ event) {
            var tableResponsive = event.currentTarget;
            scrollLeft = /** @type {number} */ ($(tableResponsive).scrollLeft());
            if ($stickyElement.hasClass("is-sticky")) {
                var $tables = $(".table-header-sticky--wrapper table", $stickyElement);
                $tables.css("transform", "translateX(" + -scrollLeft + "px)");
            }
        });

        events.add(window, "scroll", debounce(addWindowOnScrollListener, 10));

    });

}());
