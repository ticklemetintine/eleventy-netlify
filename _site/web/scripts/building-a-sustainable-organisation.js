/*jslint browser: true, fudge: true, long: true, this: true */
/*global $, blacksunplc, jQuery, window */

(function () {
    "use strict";

    var charts = blacksunplc.charts;	// import * as charts from "module:blacksunplc/charts"

    function updateCharts() {
        try {
            $(".chart-display-desktop svg").css({"background-color": "rgba(255,255,255,0)"});

            $("svg g[class*='background'] rect").css("fill", "transparent");
            $("svg g[class*='background'] rect").attr("fill", "transparent");

            window.setTimeout(function () {
                var white = "#FFFFFF";
                var blue = "#22b7e9";
                var pink = "#935F94";
                var purple = "#633169";
                var black = "#000000";
                // Tweaks for the #chart_three-year-environmental-footprint chart
                var $environmentalFootprint = $("#chart_three-year-environmental-footprint");
                var $group = $("g[class*='datalabel']", $environmentalFootprint);
                var firstPanel = /** @type {!Element} */ ($group.get(2));
                var secondPanel = /** @type {!Element} */ ($group.get(3));
                var thirdPanel = /** @type {!Element} */ ($group.get(4));
                var $firstPanel = $(firstPanel);
                var $secondPanel = $(secondPanel);
                var $thirdPanel = $(thirdPanel);
                $("text:eq(0)", $firstPanel).css("fill", white).find("tspan").attr("dy", "8.5");
                $("text:eq(1)", $firstPanel).css("fill", white).find("tspan").attr("dy", "8.5");
                $("text:eq(2)", $firstPanel).css("fill", white).find("tspan").attr("dy", "8.5");
                $("text:eq(3)", $firstPanel).css("fill", "#006ba6").find("tspan").attr("dy", "-10");
                $("text:eq(0)", $secondPanel).css("fill", white).find("tspan").attr("dy", "-46");
                $("text:eq(1)", $secondPanel).css("fill", white).find("tspan").attr("dy", "-34");
                $("text:eq(2)", $secondPanel).css("fill", white).find("tspan").attr("dy", "-22");
                $("text:eq(3)", $secondPanel).css("fill", "#95ba29").find("tspan").attr("dy", "-43");
                $("text:eq(0)", $thirdPanel).css("display", "none");

                var $sumLabels = $("g[class*='sumlabels']", $environmentalFootprint);

                var blackSumLabel = /** @type {!Element} */ ($sumLabels.get(0));
                var $blackSumLabel = $(blackSumLabel);
                $("text:eq(3)", $blackSumLabel).css("fill", black).find("tspan").attr("dy", "-42");
                $("text:eq(0)", $blackSumLabel).css("fill", black);
                $("text:eq(1)", $blackSumLabel).css("fill", black);
                $("text:eq(2)", $blackSumLabel).css("fill", black);

                var blueSumLabel = /** @type {!Element} */ ($sumLabels.get(1));
                var $blueSumLabel = $(blueSumLabel);
                $("text:eq(0)", $blueSumLabel).css("fill", blue);
                $("text:eq(1)", $blueSumLabel).css("fill", blue);
                $("text:eq(2)", $blueSumLabel).css("fill", blue);
                $("text:eq(3)", $blueSumLabel).css("fill", blue).find("tspan").attr("dy", "-4");

                var pinkSumLabel = /** @type {!Element} */ ($sumLabels.get(2));
                var $pinkSumLabel = $(pinkSumLabel);
                $("text:eq(0)", $pinkSumLabel).css("fill", pink);
                $("text:eq(1)", $pinkSumLabel).css("fill", pink);
                $("text:eq(2)", $pinkSumLabel).css("fill", pink);
                $("text:eq(3)", $pinkSumLabel).css("fill", pink).find("tspan").text("1.0");

                var linePanel = /** @type {!Element} */ ($group.get(1));
                var $linePanel = $(linePanel);
                $("text:eq(3)", $linePanel).css("fill", purple).find("tspan").attr("dy", "-15");
                $("text:eq(0)", $linePanel).css("fill", purple).find("tspan").attr("dy", "-27");
                $("text:eq(1)", $linePanel).css("fill", purple);
                $("text:eq(2)", $linePanel).css("fill", purple);

            }, 1000);

        } catch (ignore) {
            /* falls through */
        }
    }


    var isChinese = $("html[lang='zh']").length !== 0;
    var chart = {
        "chinese": isChinese,
        "updateCharts": updateCharts,
        "charts": {
            "chart_three-year-environmental-footprint": {
                "type": "msstackedcolumn2dlinedy",
                "height": 250, //height of the chart
                "dataSource": {
                    "chart": {
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#0055a4, #95ba29, #22b7e9, #B198B4, #633169",
                        "bgAlpha": 0,
                        "plotPaddingPercent": 30,
                        "canvasTopMargin": "40",
                        "borderAlpha": 0,
                        "showShadow": false,
                        "usePlotGradientColor": false,
                        "showLabels": true,
                        "labelDisplay": "WRAP",
                        "showValues": true,
                        "showToolTip": false,
                        "showYAxisValues": false,
                        "showBorder": false,
                        "numDivLines": 0,
                        "canvasBorderAlpha": 0,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "canvasBgAlpha": 0,
                        "plotSpacePercent": 15,
                        "showXAxisLine": true,
                        "syncAxisLimits": true,
                        // "yAxisMaxValue": 60,
                        "showSum": "1",
                        "baseFontSize": 15,
                        "baseFontColor": "#FFFFFF"
                    },
                    "categories": [
                        {
                            "fontColor": "#000000",
                            "category": [
                                {
                                    "label": "2018"
                                },
                                {
                                    "label": "2019"
                                },
                                {
                                    "label": "2020"
                                },
                                {
                                    "label": "2021"
                                }
                            ]
                        }
                    ],
                    "dataset": [
                        {
                            "valueFontColor": "#FFFFFF",
                            "dataset": [
                                {
                                    "valueFontColor": "#FFFFFF",
                                    "data": [
                                        {
                                            "value": "2.5",
                                            "valueBgColor": "#FFFFFF"

                                        },
                                        {
                                            "value": "2.3"
                                        },
                                        {
                                            "value": "2.5"
                                        },
                                        {
                                            "value": "2.2",
                                            "displayValue": "2.3"
                                        }
                                    ]
                                },
                                {
                                    "valueFontColor": "#FFFFFF",
                                    "data": [
                                        {
                                            "value": "33.7"
                                        },
                                        {
                                            "value": "27.4"
                                        },
                                        {
                                            "value": "21.1"
                                        },
                                        {
                                            "value": "1.4",
                                            "displayValue": "1.3"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "dataset": [
                                {
                                    "showValues": 0,
                                    "data": [
                                        {
                                            "value": "9.6",
                                            "displayValue": ""
                                        },
                                        {
                                            "value": "11.3",
                                            "displayValue": "none"
                                        },
                                        {
                                            "value": "7.7",
                                            "displayValue": "none"
                                        },
                                        {
                                            "value": "2.8",
                                            "displayValue": "none"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "dataset": [
                                {
                                    "showValues": 0,
                                    "data": [
                                        {
                                            "value": "5.3",
                                            "displayValue": "none"
                                        },
                                        {
                                            "value": "4.9",
                                            "displayValue": "none"
                                        },
                                        {
                                            "value": "3.7",
                                            "displayValue": "none"
                                        },
                                        {
                                            "value": 1.0,
                                            "displayValue": "none"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "lineset": [
                        {
                            "showValues": "1",
                            "anchorSides": "4",
                            "anchorBgColor": "#633169",
                            "color": "#633169",
                            "anchorStartAngle": "45",
                            "lineThickness": "3",
                            "valuePosition": "ABOVE",
                            "anchorBorderThickness": "9",
                            "data": [
                                {
                                    "value": "49.6",
                                    "valuePosition": "ABOVE",
                                    "displayValue": "49.6"
                                },
                                {
                                    "value": "37.2",
                                    "displayValue": "37.2"
                                },
                                {
                                    "value": "28.8",
                                    "displayValue": "28.8"
                                },
                                {
                                    "value": "4.3",
                                    "displayValue": "4.3"
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }; // End of charts

    var Charting = charts.initCharts(chart);
    Charting.renderVisible();

}());
