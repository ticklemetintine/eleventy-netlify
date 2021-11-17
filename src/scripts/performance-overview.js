/*jslint browser: true, fudge: true, long: true, this: true */
/*global $, blacksunplc, jQuery, window */

(function () {
    "use strict";


    var charts = blacksunplc.charts;	// import * as charts from "module:blacksunplc/charts"

    function updateCharts() {
        try {
            $(".chart-display-desktop svg").css({"background-color": "rgba(255,255,255,0)"});

            //$("svg g[class*='canvas'] rect").css("fill", "transparent");
            //$("svg g[class*='canvas'] rect").attr("fill", "transparent");

            $("svg g[class*='background'] rect").css("fill", "transparent");
            $("svg g[class*='background'] rect").attr("fill", "transparent");

            var $investmentsAndDivestments = $("#chart_investments-and-divestments");
            var $portfolioByGeography = $("#chart_portfolio-by-geography");
            var $rollingTotalShareholdReturn = $("#chart_rolling-total-shareholder-return");

            $("tspan:contains('48')", $rollingTotalShareholdReturn).parent().remove();
            $("tspan:contains('-35')", $rollingTotalShareholdReturn).parent().remove();

            /* Reposition figures that touch lines. */
            var $oneYearDataPoints = $(".fusioncharts-label:nth-child(1):contains('(19)')", $rollingTotalShareholdReturn).parent().children();
            var $tenYearDataPoints = $(".fusioncharts-label:nth-child(2):contains('3')", $rollingTotalShareholdReturn).parent().children();
            var $twentyYearDataPoints = $(".fusioncharts-label:last-child:contains('8')", $rollingTotalShareholdReturn).parent().children();

            $($oneYearDataPoints[0]).find("tspan").attr("dy", "5");
            $($oneYearDataPoints[1]).find("tspan").attr("dy", "3");
            $($oneYearDataPoints[2]).find("tspan").attr("dy", "5");
            $($oneYearDataPoints[5]).find("tspan").attr("dx", "-5");
            $($oneYearDataPoints[5]).find("tspan").attr("dy", "0");
            $($oneYearDataPoints[11]).find("tspan").attr("dy", "30");

            $($tenYearDataPoints[10]).find("tspan").attr("dy", "-0.5");

            $($twentyYearDataPoints[0]).find("tspan").attr("dy", "20");
            $($twentyYearDataPoints[0]).find("tspan").attr("dx", "-10");
            $($tenYearDataPoints[0]).find("tspan").attr("dx", "-10");
            $($twentyYearDataPoints[11]).find("tspan").attr("dy", "-1");
            $($twentyYearDataPoints[15]).find("tspan").attr("dy", "5");


            /* Colour the line figures to match the lines.  */
            $oneYearDataPoints.css("fill", "#0055a4");
            $tenYearDataPoints.css("fill", "#a183a5");
            $twentyYearDataPoints.css("fill", "#e88300");

            window.setTimeout(function () {
                var $group = $("g[class*='datalabel']", $investmentsAndDivestments);
                var firstPanel = /** @type {!Element} */ ($group.get(1));
                var secondPanel = /** @type {!Element} */ ($group.get(2));
                var $firstPanel = $(firstPanel);
                var $secondPanel = $(secondPanel);
                $("text:eq(0)", $firstPanel).css("fill", "#4d1965");
                $("text:eq(0)", $firstPanel).attr("y", "126");
                $("text:eq(0)", $secondPanel).css("fill", "#0db14b");
                $("text:eq(0)", $secondPanel).attr("y", "150");

                $("text:eq(1)", $firstPanel).css("fill", "#4d1965");
                $("text:eq(1)", $firstPanel).attr("y", "117");
                $("text:eq(1)", $secondPanel).css("fill", "#0db14b");
                $("text:eq(1)", $secondPanel).attr("y", "153");

                $("g[class*='datalabel'] .fusioncharts-label:first-child:contains('38')", $portfolioByGeography).css("fill", "#b7025e");
                $("g[class*='datalabel'] .fusioncharts-label:first-child:contains('42')", $portfolioByGeography).css("fill", "#0073a3");
                $("g[class*='datalabel'] .fusioncharts-label:first-child:contains('20')", $portfolioByGeography).css("fill", "#e88300");
            }, 2000);

        } catch (ignore) {
            /* falls through */
        }
    }


    var isChinese = $("html[lang='zh']").length !== 0;
    var chart = {
        "chinese": isChinese,
        "updateCharts": updateCharts,
        "charts": {
            "chart_net-portfolio-value": {
                "type": "column2d",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#33ABA6",
                        "bgAlpha": 0,
                        "bgColor": "#f1f1f1",
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
                        "divLineAlpha": 0,
                        "canvasBorderAlpha": 0,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "plotSpacePercent": 50,
                        "canvasBgAlpha": 0,
                        "showXAxisLine": true,
                        "yAxisMaxValue": 450
                    },
                    "data": [
                        {
                            "label": "02",
                            "value": 76.79,
                            "displayValue": "77"
                        },
                        {
                            "label": "03",
                            "value": 60.62,
                            "displayValue": "61"
                        },
                        {
                            "label": "04",
                            "value": 90.04,
                            "displayValue": "90"
                        },
                        {
                            "label": "05",
                            "value": 103.45,
                            "displayValue": "103"
                        },
                        {
                            "label": "06",
                            "value": 129,
                            "displayValue": "129"
                        },
                        {
                            "label": "07",
                            "value": 163.89,
                            "displayValue": "164"
                        },
                        {
                            "label": "08",
                            "value": 184.99,
                            "displayValue": "185"
                        },
                        {
                            "label": "09",
                            "value": 130.28,
                            "displayValue": "130"
                        },
                        {
                            "label": "10",
                            "value": 185.93,
                            "displayValue": "186"
                        },
                        {
                            "label": "11",
                            "value": 192.77,
                            "displayValue": "193"
                        },
                        {
                            "label": "12",
                            "value": 197.78,
                            "displayValue": "198"
                        },
                        {
                            "label": "13",
                            "value": 215.30,
                            "displayValue": "215"
                        },
                        {
                            "label": "14",
                            "value": 223.48,
                            "displayValue": "223"
                        },
                        {
                            "label": "15",
                            "value": 266.39,
                            "displayValue": "266"
                        },
                        {
                            "label": "16",
                            "value": 242.35,
                            "displayValue": "242"
                        },
                        {
                            "label": "17",
                            "value": 274.75,
                            "displayValue": "275"
                        },
                        {
                            "label": "18",
                            "value": 308,
                            "displayValue": "308"
                        },
                        {
                            "label": "19",
                            "value": 313,
                            "displayValue": "313"
                        },
                        {
                            "label": "20",
                            "value": 306,
                            "displayValue": "306"
                        },
                        {
                            "label": "21",
                            "value": 381,
                            "displayValue": "381",
                            "color": "#006BA6"
                        }
                    ]
                }
            },

            "chart_investments-and-divestments": {
                "type": "stackedcolumn2d",
                "dataSource": {
                    "chart": {
                        "animationDuration": 1,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#B198B4,#59c173",
                        "bgAlpha": 0,
                        "borderAlpha": 0,
                        "showShadow": false,
                        "usePlotGradientColor": false,
                        "showLabels": true,
                        "labelDisplay": "WRAP",
                        "showValues": true,
                        "showLegend": false,
                        "showToolTip": false,
                        "showYAxisValues": false,
                        "showBorder": false,
                        "showZeroPlane": "1",
                        "zeroPlaneAlpha": "100",
                        "zeroPlaneColor": "#55555f",
                        "zeroPlaneThickness": "2",
                        "numDivLines": 1,
                        "divLineColor": "#fff",
                        "showAlternateHGridColor": "0",
                        "divLineAlpha": 0,
                        "canvasBorderAlpha": 0,
                        "canvasBgAlpha": 0,
                        "plotSpacePercent": 50,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "baseFontColor": "#FFFFFF",
                        "outCnvBaseFontColor": "#55555"
                    },
                    "categories": [
                        {
                            "category": [
                                {"label": "03"},
                                {"label": "04"},
                                {"label": "05"},
                                {"label": "06"},
                                {"label": "07"},
                                {"label": "08"},
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
                            "seriesName": "Investments",
                            "data": [
                                {
                                    "value": 0.04,
                                    "displayValue": "0",
                                    "valuePosition": "ABOVE"
                                },
                                {
                                    "value": 3.26,
                                    "displayValue": "3"
                                },
                                {
                                    "value": 12.71,
                                    "displayValue": "13"
                                },
                                {
                                    "value": 20.72,
                                    "displayValue": "21"
                                },
                                {
                                    "value": 15.69,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 31.93,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 8.84,
                                    "displayValue": "9"
                                },
                                {
                                    "value": 10.44,
                                    "displayValue": "10"
                                },
                                {
                                    "value": 12.85,
                                    "displayValue": "13"
                                },
                                {
                                    "value": 22.17,
                                    "displayValue": "22"
                                },
                                {
                                    "value": 19.71,
                                    "displayValue": "20"
                                },
                                {
                                    "value": 23.81,
                                    "displayValue": "24"
                                },
                                {
                                    "value": 30.17,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 30.28,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 16.12,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 28.71,
                                    "displayValue": "29"
                                },
                                {
                                    "value": 24.04,
                                    "displayValue": "24"
                                },
                                {
                                    "value": 32,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 49,
                                    "displayValue": "49",
                                    "color": "#633269"
                                }
                            ]
                        },
                        {
                            "seriesName": "Divestments",
                            "data": [
                                {
                                    "value": -0.30,
                                    "displayValue": "0"
                                },
                                {
                                    "value": -1.27,
                                    "displayValue": "1"
                                },
                                {
                                    "value": -5.02,
                                    "displayValue": "5"
                                },
                                {
                                    "value": -13.29,
                                    "displayValue": "13"
                                },
                                {
                                    "value": -5.42,
                                    "displayValue": "5"
                                },
                                {
                                    "value": -16.69,
                                    "displayValue": "17"
                                },
                                {
                                    "value": -16.04,
                                    "displayValue": "16"
                                },
                                {
                                    "value": -5.91,
                                    "displayValue": "6"
                                },
                                {
                                    "value": -8.73,
                                    "displayValue": "9"
                                },
                                {
                                    "value": -15.12,
                                    "displayValue": "15"
                                },
                                {
                                    "value": -12.91,
                                    "displayValue": "13"
                                },
                                {
                                    "value": -9.82,
                                    "displayValue": "10"
                                },
                                {
                                    "value": -18.52,
                                    "displayValue": "19"
                                },
                                {
                                    "value": -28.20,
                                    "displayValue": "28"
                                },
                                {
                                    "value": -18.35,
                                    "displayValue": "18"
                                },
                                {
                                    "value": -15.94,
                                    "displayValue": "16"
                                },
                                {
                                    "value": -28.30,
                                    "displayValue": "28"
                                },
                                {
                                    "value": -26,
                                    "displayValue": "26"
                                },
                                {
                                    "value": -39,
                                    "displayValue": "39",
                                    "color": "#10a639"
                                }
                            ]
                        }
                    ]
                }
            },

            "chart_portfolio-by-geography": {
                "type": "stackedcolumn2d",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#d50065,#006ba6,#ee6f04",
                        "bgAlpha": 0,
                        "bgColor": "#f1f1f1",
                        "borderAlpha": 0,
                        "showShadow": false,
                        "usePlotGradientColor": false,
                        "showLabels": true,
                        "showValues": true,
                        "showLegend": false,
                        "showToolTip": false,
                        "showYAxisValues": false,
                        "showBorder": false,
                        "numDivLines": 0,
                        "canvasBorderAlpha": 0,
                        "canvasBgAlpha": 0,
                        "plotSpacePercent": 50,
                        "showXAxisLine": true,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "baseFontColor": "#FFFFFF",
                        "outCnvBaseFontColor": "#55555",
                        "yAxisMaxValue": 267
                    },
                    "categories": [
                        {
                            "category": [
                                {"label": "04"},
                                {"label": "05"},
                                {"label": "06"},
                                {"label": "07"},
                                {"label": "08"},
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
                            "seriesName": "Singapore",
                            "data": [
                                {
                                    "value": 46.81,
                                    "displayValue": "52"
                                },
                                {
                                    "value": 50.39,
                                    "displayValue": "49"
                                },
                                {
                                    "value": 57.26,
                                    "displayValue": "44"
                                },
                                {
                                    "value": 61.72,
                                    "displayValue": "38"
                                },
                                {
                                    "value": 60.07,
                                    "displayValue": "33"
                                },
                                {
                                    "value": 41.10,
                                    "displayValue": "31"
                                },
                                {
                                    "value": 59.52,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 61.03,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 60.28,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 64.85,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 68.65,
                                    "displayValue": "31"
                                },
                                {
                                    "value": 73.71,
                                    "displayValue": "28"
                                },
                                {
                                    "value": 69.60,
                                    "displayValue": "29"
                                },
                                {
                                    "value": 80.01,
                                    "displayValue": "29"
                                },
                                {
                                    "value": 83.27,
                                    "displayValue": "27"
                                },
                                {
                                    "value": 81.35,
                                    "displayValue": "26"
                                },
                                {
                                    "value": 73.44,
                                    "displayValue": "24"
                                },
                                {
                                    "value": 91.44,
                                    "displayValue": "24"
                                }
                            ]
                        },
                        {
                            "seriesName": "Asia ex-Singapore",
                            "data": [
                                {
                                    "value": 15.78,
                                    "displayValue": "18"
                                },
                                {
                                    "value": 20.89,
                                    "displayValue": "20"
                                },
                                {
                                    "value": 46.38,
                                    "displayValue": "36"
                                },
                                {
                                    "value": 68.93,
                                    "displayValue": "42"
                                },
                                {
                                    "value": 80.08,
                                    "displayValue": "43"
                                },
                                {
                                    "value": 59.97,
                                    "displayValue": "46"
                                },
                                {
                                    "value": 85.79,
                                    "displayValue": "46"
                                },
                                {
                                    "value": 86.81,
                                    "displayValue": "45"
                                },
                                {
                                    "value": 82.51,
                                    "displayValue": "42"
                                },
                                {
                                    "value": 88.42,
                                    "displayValue": "41"
                                },
                                {
                                    "value": 90.93,
                                    "displayValue": "41"
                                },
                                {
                                    "value": 111.56,
                                    "displayValue": "42"
                                },
                                {
                                    "value": 96.81,
                                    "displayValue": "40"
                                },
                                {
                                    "value": 107.54,
                                    "displayValue": "39"
                                },
                                {
                                    "value": 126.88,
                                    "displayValue": "41"
                                },
                                {
                                    "value": 123.48,
                                    "displayValue": "40"
                                },
                                {
                                    "value": 128.52,
                                    "displayValue": "42"
                                },
                                {
                                    "value": 152.4,
                                    "displayValue": "40"
                                }
                            ]
                        },
                        {
                            "seriesName": "Rest of world",
                            "data": [
                                {
                                    "value": 27.41,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 31.72,
                                    "displayValue": "31"
                                },
                                {
                                    "value": 25.36,
                                    "displayValue": "20"
                                },
                                {
                                    "value": 33.24,
                                    "displayValue": "20"
                                },
                                {
                                    "value": 44.84,
                                    "displayValue": "24"
                                },
                                {
                                    "value": 29.21,
                                    "displayValue": "23"
                                },
                                {
                                    "value": 40.63,
                                    "displayValue": "22"
                                },
                                {
                                    "value": 44.94,
                                    "displayValue": "23"
                                },
                                {
                                    "value": 54.98,
                                    "displayValue": "28"
                                },
                                {
                                    "value": 62.03,
                                    "displayValue": "29"
                                },
                                {
                                    "value": 63.89,
                                    "displayValue": "28"
                                },
                                {
                                    "value": 81.12,
                                    "displayValue": "30"
                                },
                                {
                                    "value": 75.93,
                                    "displayValue": "31"
                                },
                                {
                                    "value": 87.21,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 98.10,
                                    "displayValue": "32"
                                },
                                {
                                    "value": 108.03,
                                    "displayValue": "34"
                                },
                                {
                                    "value": 104.04,
                                    "displayValue": "34"
                                },
                                {
                                    "value": 137.16,
                                    "displayValue": "36"
                                }
                            ]
                        }
                    ]
                }
            },

            "chart_total-shareholder-return": {
                "type": "bar2d",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#006ba6",
                        "bgAlpha": 0,
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
                        "divLineAlpha": 0,
                        "canvasBorderAlpha": 0,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "canvasBgAlpha": 0,
                        "plotSpacePercent": 30,
                        "showXAxisLine": true
                        //                    showYAxisLine: true
                        //                    yAxisMinValue: -0.25,
                        //                    yAxisMaxValue: 17
                    },
                    "data": [
                        {
                            "label": (isChinese ? "\u81ea1974\u5e74\u4ee5\u6765" : "Since 1974"),
                            "value": 14,
                            "displayValue": "14"
                        },
                        {
                            "label": "40",
                            "value": 13.11,
                            "displayValue": "13"
                        },
                        {
                            "label": "30",
                            "value": 13,
                            "displayValue": "13"
                        },
                        {
                            "label": "20",
                            "value": 8,
                            "displayValue": "8"
                        },
                        {
                            "label": "10",
                            "value": 7,
                            "displayValue": "7"
                        },
                        {
                            "label": "1",
                            "value": 25,
                            "displayValue": "25"
                        }
                    ]
                }
            },

            "chart_rolling-total-shareholder-return": {
                "type": "msline",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#ee6e01,#a082a4,#0066a3",
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
                        "alternateHGridColor": "#fff",
                        "canvasBorderAlpha": 0,
                        "canvasBgAlpha": 0,
                        "drawAnchors": false,
                        "valuePosition": "ABOVE",
                        "yAxisMinValue": -40,
                        "yAxisMaxValue": 60
                    },
                    "categories": [
                        {
                            "category": [
                                {"label": "03"},
                                {"label": "04"},
                                {"label": "05"},
                                {"label": "06"},
                                {"label": "07"},
                                {"label": "08"},
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
                            "seriesName": "20-year",
                            "data": [
                                {
                                    "value": 15.71,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 19.50,
                                    "displayValue": "20"
                                },
                                {
                                    "value": 18.39,
                                    "displayValue": "18"
                                },
                                {
                                    "value": 16.33,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 17.92,
                                    "displayValue": "18"
                                },
                                {
                                    "value": 16.79,
                                    "displayValue": "17"
                                },
                                {
                                    "value": 13.25,
                                    "displayValue": "13"
                                },
                                {
                                    "value": 16.29,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 14.82,
                                    "displayValue": "15"
                                },
                                {
                                    "value": 14.78,
                                    "displayValue": "15"
                                },
                                {
                                    "value": 14.48,
                                    "displayValue": "14"
                                },
                                {
                                    "value": 5.72,
                                    "displayValue": "6",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 7.19,
                                    "displayValue": "7",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 5.92,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 6.38,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 7.26,
                                    "displayValue": "7"
                                },
                                {
                                    "value": 7.26,
                                    "displayValue": "7",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 6,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 8,
                                    "displayValue": "8"
                                }
                                /*
                                 * Please note that if you add a new data point, the label is used
                                 * to determine the colour of all of the data point annotations.
                                 * Search for comment "Reposition figures that touch lines.".
                                 */
                            ]
                        },
                        {
                            "seriesName": "10-year",
                            "data": [
                                {
                                    "value": 16.16,
                                    "displayValue": "16"
                                },
                                {
                                    "value": 2.75,
                                    "displayValue": "3"
                                },
                                {
                                    "value": 5.37,
                                    "displayValue": "5"
                                },
                                {
                                    "value": 6.18,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 8.33,
                                    "displayValue": "8"
                                },
                                {
                                    "value": 9.58,
                                    "displayValue": "10"
                                },
                                {
                                    "value": 5.66,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 6.26,
                                    "displayValue": "6"
                                },
                                {
                                    "value": 9.03,
                                    "displayValue": "9"
                                },
                                {
                                    "value": 9.54,
                                    "displayValue": "10"
                                },
                                {
                                    "value": 12.79,
                                    "displayValue": "13",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 8.78,
                                    "displayValue": "9"
                                },
                                {
                                    "value": 9.04,
                                    "displayValue": "9"
                                },
                                {
                                    "value": 5.66,
                                    "displayValue": "6",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 4.46,
                                    "displayValue": "4",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 4.98,
                                    "displayValue": "5",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 8.89,
                                    "displayValue": "9"
                                },
                                {
                                    "value": 4.98,
                                    "displayValue": "5",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 7,
                                    "displayValue": "7",
                                    "valuePosition": "BELOW"
                                }
                                /*
                                 * Please note that if you add a new data point, the label is used
                                 * to determine the colour of all of the data point annotations.
                                 * Search for comment "Reposition figures that touch lines.".
                                 */
                            ]
                        },
                        {
                            "seriesName": "One-year",
                            "data": [
                                {
                                    "value": -18.76,
                                    "displayValue": "(19)",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 45.76,
                                    "displayValue": "46"
                                },
                                {
                                    "value": 16.37,
                                    "displayValue": "16",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 24.65,
                                    "displayValue": "25"
                                },
                                {
                                    "value": 27.05,
                                    "displayValue": "27"
                                },
                                {
                                    "value": 6.77,
                                    "displayValue": "7",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": -29.57,
                                    "displayValue": "(30)",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 42.71,
                                    "displayValue": "43"
                                },
                                {
                                    "value": 4.60,
                                    "displayValue": "5",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 1.50,
                                    "displayValue": "1"
                                },
                                {
                                    "value": 8.86,
                                    "displayValue": "9",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 1.50,
                                    "displayValue": "2"
                                },
                                {
                                    "value": 19.20,
                                    "displayValue": "19"
                                },
                                {
                                    "value": -9.02,
                                    "displayValue": "(9)",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 13.37,
                                    "displayValue": "13"
                                },
                                {
                                    "value": 12.19,
                                    "displayValue": "12"
                                },
                                {
                                    "value": 1.49,
                                    "displayValue": "1",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": -2,
                                    "displayValue": "(2)",
                                    "valuePosition": "BELOW"
                                },
                                {
                                    "value": 25,
                                    "displayValue": "25"
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
                "height": "384"
            },
            "chart_annual-environmental-footprint": {
                "type": "msstackedcolumn2dlinedy",
                "dataSource": {
                    "chart": {
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "bgAlpha": 0,
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
                        "plotSpacePercent": 50,
                        "showXAxisLine": true,
                        "yAxisMaxValue": 50,
                        "showSum": "1"

                    },
                    "categories": [
                        {
                            "category": [
                                {
                                    "label": "18"
                                },
                                {
                                    "label": "19"
                                },
                                {
                                    "label": "20"
                                },
                                {
                                    "label": "21"
                                }
                            ]
                        }
                    ],
                    "dataset": [
                        {
                            "dataset": [
                                {
                                    "data": [
                                        {
                                            "value": "2.5"
                                        },
                                        {
                                            "value": "2.3"
                                        },
                                        {
                                            "value": "2.5"
                                        },
                                        {
                                            "value": "2.3"
                                        }
                                    ]
                                },
                                {
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
                                            "value": "1.3"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "dataset": [
                                {
                                    "data": [
                                        {
                                            "value": "9.6"
                                        },
                                        {
                                            "value": "11.3"
                                        },
                                        {
                                            "value": "7.7"
                                        },
                                        {
                                            "value": "2.8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "dataset": [
                                {
                                    "data": [
                                        {
                                            "value": "5.3"
                                        },
                                        {
                                            "value": "4.9"
                                        },
                                        {
                                            "value": "3.7"
                                        },
                                        {
                                            "value": "1.0"
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
                            "data": [
                                {
                                    "value": "49.6"
                                },
                                {
                                    "value": "37.2"
                                },
                                {
                                    "value": "28.8"
                                },
                                {
                                    "value": "4.3"
                                }
                            ]
                        }
                    ]
                }
            },

            "chart_dividend-income": {
                "type": "column2d",
                "dataSource": {
                    "chart": {
                        "animationDuration": 2,
                        "chartTopMargin": 0,
                        "chartLeftMargin": 0,
                        "chartBottomMargin": 0,
                        "chartRightMargin": 0,
                        "baseFont": "\"noto-sans\", sans-serif",
                        "paletteColors": "#21b7e9",
                        "bgAlpha": 0,
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
                        "divLineAlpha": 0,
                        "canvasBorderAlpha": 0,
                        "showPlotBorder": false,
                        "showHoverEffect": false,
                        "canvasBgAlpha": 0,
                        "plotSpacePercent": 50,
                        "showXAxisLine": true,
                        "yAxisMaxValue": 14
                    },
                    "data": [
                        {
                            "label": "06",
                            "value": 5.48,
                            "displayValue": "6"
                        },
                        {
                            "label": "07",
                            "value": 5.78,
                            "displayValue": "6"
                        },
                        {
                            "label": "08",
                            "value": 6.65,
                            "displayValue": "7"
                        },
                        {
                            "label": "09",
                            "value": 5.40,
                            "displayValue": "5"
                        },
                        {
                            "label": "10",
                            "value": 5.88,
                            "displayValue": "6"
                        },
                        {
                            "label": "11",
                            "value": 5.26,
                            "displayValue": "5"
                        },
                        {
                            "label": "12",
                            "value": 8.05,
                            "displayValue": "8"
                        },
                        {
                            "label": "13",
                            "value": 6.41,
                            "displayValue": "6"
                        },
                        {
                            "label": "14",
                            "value": 7.95,
                            "displayValue": "8"
                        },
                        {
                            "label": "15",
                            "value": 7.90,
                            "displayValue": "8"
                        },
                        {
                            "label": "16",
                            "value": 7.81,
                            "displayValue": "8"
                        },
                        {
                            "label": "17",
                            "value": 7.03,
                            "displayValue": "7"
                        },
                        {
                            "label": "18",
                            "value": 8.95,
                            "displayValue": "9"
                        },
                        {
                            "label": "19",
                            "value": 8.52,
                            "displayValue": "9"
                        },
                        {
                            "label": "20",
                            "value": 12,
                            "displayValue": "12"
                        },
                        {
                            "label": "21",
                            "value": 8,
                            "displayValue": "8",
                            "color": "#006ba6"
                        }
                    ]
                }
            }
        }
    }; // End of charts

    var Charting = charts.initCharts(chart);
    Charting.renderVisible();

}());
