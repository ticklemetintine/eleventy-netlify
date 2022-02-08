/*jslint browser: true, fudge: true, long: true, this: true, white: true */
/*global $, FusionCharts, Waypoint */

(function () {
    "use strict";


    var charts = blacksunplc.charts; // import * as charts from "module:blacksunplc/charts"

    function updateCharts() {
        $(".chart-display-desktop svg").css({"background-color": ""});
        //$(".chart-display-desktop path[d='M0,0.5L288,0.5']").remove();
    }

    /*    function buildChart(dataSource) {
            return new FusionCharts({
                type: "column2d",
                height: "288",
                width: "288",
                dataFormat: "json",
                dataSource: dataSource,
                events: GLOBAL_CHART_EVENTS
            });
        }*/

    function chartConfig(colors, fontColor) {
        return {
            "chartTopMargin": 0,
            "chartLeftMargin": 0,
            "chartBottomMargin": 0,
            "chartRightMargin": 0,
            "baseFont": "\"noto-sans\", sans-serif",
            "paletteColors": colors,
            "bgAlpha": 0,
            "plotPaddingPercent": 30,
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
            "plotSpacePercent": 35,
            "showXAxisLine": true,
            "syncAxisLimits": true,
            "baseFontSize": 15,
            "numbersuffix": "%",
            "baseFontColor": fontColor
        };
    }

    var categories = [
        {
            "category": [
                {
                    "label": "17",
                    "fontColor": "#000000"
                },
                {
                    "label": "18",
                    "fontColor": "#000000"
                },
                {
                    "label": "19",
                    "fontColor": "#000000"
                },
                {
                    "label": "20",
                    "fontColor": "#000000"
                },
                {
                    "label": "21",
                    "fontColor": "#000000"
                }
            ]
        }
    ];
    function commonBars(value) {
        return {
            "showValues": "0",
            "data": [
                {
                    "value": value
                },
                {
                    "value": value
                },
                {
                    "value": value
                },
                {
                    "value": value
                },
                {
                    "value": value
                }
            ]
        };
    }
    var chartHeight = 205;
    var isChinese = $("html[lang='zh']").length !== 0;
    var chart = {
        "chinese": isChinese,
        "updateCharts": updateCharts,
        "charts": {
            "chart_interest-expense-of-dividend-income": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#fab600, #9ad5d3", "#fab600"),
                    "categories": categories,
                    "dataset": [
                        {
                            "data": [
                                {"value": "5"},
                                {"value": "4"},
                                {"value": "5"},
                                {"value": "3"},
                                {"value": "4"}
                            ]
                        },
                        commonBars(50)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 167,
                                        "toX": 73,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 99,
                                        "y": 170,
                                        "toX": 151,
                                        "toY": 170,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 178,
                                        "y": 167,
                                        "toX": 234,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 173,
                                        "toX": 314,
                                        "toY": 173,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 340,
                                        "y": 170,
                                        "toX": 396,
                                        "toY": 170,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "chart_credit-quality_total-debt-of-net-portfolio-value": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#961829, #006ba6", "#961829"),
                    "categories": categories,
                    "dataset": [
                        {

                            "data": [
                                {"value": "5",
                                    "valueFontColor": "#9b59b6"},
                                {"value": "4"},
                                {"value": "5"},
                                {"value": "5"},
                                {"value": "5"}
                            ]
                        },
                        commonBars(50)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 167,
                                        "toX": 73,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 99,
                                        "y": 170,
                                        "toX": 155,
                                        "toY": 170,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 180,
                                        "y": 167,
                                        "toX": 230,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 167,
                                        "toX": 312,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 340,
                                        "y": 167,
                                        "toX": 396,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "chart_credit-quality_total-debt-of-liquid-assets": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#961829, #9fc98f", "#961829"),
                    "categories": categories,
                    "dataset": [
                        {
                            "data": [
                                {"value": "10",
                                    "displayValue": "14%"},
                                {"value": "8",
                                    "displayValue": "12%"},
                                {"value": "9",
                                    "displayValue": "13%"},
                                {"value": "8",
                                    "displayValue": "12%"},
                                {"value": "8",
                                    "displayValue": "12%"}
                            ]
                        },
                        commonBars(50)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 152,
                                        "toX": 73,
                                        "toY": 152,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 95,
                                        "y": 158,
                                        "toX": 156,
                                        "toY": 158,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 178,
                                        "y": 155,
                                        "toX": 240,
                                        "toY": 155,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 158,
                                        "toX": 317,
                                        "toY": 158,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 335,
                                        "y": 158,
                                        "toX": 396,
                                        "toY": 158,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "chart_credit-quality_interest-expense-of-recurring-income": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#fab600, #33aaa6", "#fab600"),
                    "categories": categories,
                    "dataset": [
                        {
                            "data": [
                                {"value": "1"},
                                {"value": "1"},
                                {"value": "1"},
                                {"value": "1"},
                                {"value": "1"}
                            ]
                        },
                        commonBars(50)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 179,
                                        "toX": 74,
                                        "toY": 179,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 100,
                                        "y": 179,
                                        "toX": 155,
                                        "toY": 179,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 180,
                                        "y": 179,
                                        "toX": 230,
                                        "toY": 179,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 179,
                                        "toX": 312,
                                        "toY": 179,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 340,
                                        "y": 179,
                                        "toX": 396,
                                        "toY": 179,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "chart_credit-quality_total-debt-due-in-one-year-of-recurring-income": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#ba0052, #33aaa6", "#ba0052"),
                    "categories": categories,
                    "dataset": [
                        {
                            "data": [
                                {"value": "5"},
                                {"value": "5"},
                                {"value": "9",
                                    "displayValue": "11%"},
                                {"value": "3"},
                                {"value": "5"}
                            ]
                        },
                        commonBars(50)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 167,
                                        "toX": 76,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 99,
                                        "y": 167,
                                        "toX": 155,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 180,
                                        "y": 155,
                                        "toX": 230,
                                        "toY": 155,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 173,
                                        "toX": 312,
                                        "toY": 173,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 340,
                                        "y": 167,
                                        "toX": 396,
                                        "toY": 167,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            "chart_credit-quality_total-debt-due-in-next-10-years-liquidity-balance": {
                "type": "mscolumn2d",
                "height": chartHeight,
                "dataSource": {
                    "chart": chartConfig("#ba1028, #10a639", "#ba1028"),
                    "categories": categories,
                    "dataset": [
                        {
                            "data": [
                                {"value": "21"},
                                {"value": "26"},
                                {"value": "24"},
                                {"value": "18"},
                                {"value": "18"}
                            ]
                        },
                        commonBars(100)
                    ],
                    "annotations": {
                        "groups": [
                            {
                                "showBelow": 0,
                                "items": [
                                    {
                                        "type": "line",
                                        "x": 17,
                                        "y": 147,
                                        "toX": 74,
                                        "toY": 147,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 99,
                                        "y": 139,
                                        "toX": 155,
                                        "toY": 139,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 180,
                                        "y": 142,
                                        "toX": 230,
                                        "toY": 142,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 260,
                                        "y": 152,
                                        "toX": 312,
                                        "toY": 152,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }, {
                                        "type": "line",
                                        "x": 340,
                                        "y": 152,
                                        "toX": 396,
                                        "toY": 152,
                                        "dashed": "1",
                                        "color": "#000000",
                                        "thickness": 1
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }
    };

    var Charting = charts.initCharts(chart);
    Charting.updateCharts();

    /*var $chart;
    $(".chart-display-desktop").each(function(ignore, chart) {
        $chart = $(chart);
        console.log(chart);
        var waypoint = new Waypoint({
            element: $chart[0],
            handler: function(direction) {
                if (direction === "down") {
                    $chart = $(this.element);
                    console.log($chart);

                    //charts[this.element.id].render(this.element.id);
                    var $horizon = $chart.next(".chart_horizon");
                    $horizon.show().animate({ width: $horizon.parent().innerWidth() }, "slow", "linear", function() {
                        $horizon.css("width", "100%");
                    });
                    this.destroy();
                }
            },
            offset: "bottom-in-view"
        });
    });*/

}());
