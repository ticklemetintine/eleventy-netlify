// 20210708
"use strict";

var app = app || {};

if (! app.config) {
    app.config = {
        lang: "en"
    };
}

if (! app.main) {
    app.main = {
        animationTimeline: null,
        disableAnimation: false,
        parentSelector: "#chart",
        firstChartClass: "chart1",
        maxMobileWidth: 760,
        chartMargins: {
            // top: 30, right: 30, bottom: 120, left: 50, width: 1.0, height: 600/800,
            // viewBoxWidth: 800, viewBoxHeight: 600
            top: 30, right: 30, bottom: 60, left: 50, width: 1.0, height: 780/1024,
            viewBoxWidth: 1024, viewBoxHeight: 780
        },
        l: function(key){
            if (app.lang[app.config.lang] && app.lang[app.config.lang][key]) {
                var lookup = app.lang[app.config.lang][key];
                if ($.isFunction(lookup)) {
                    return lookup.apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    return lookup;
                }
            } else {
                return key;
            } // if (app.lang[app.config.lang] && app.lang[app.config.lang][key])
        },
        viewPortRatio: function(chartInfo, chartMargins){
            var self = app.main,
            parentWidth = $(self.parentSelector).width() * chartMargins.width;
            return parentWidth / chartInfo.parentWidth;
        },
        start: function(){
            var self = this, resizeTimer = null;
            $(window).on('orientationchange', function(){
                // console.log('orientationchange');
                self.resizeChart();
            });
            $(window).resize(function() {
                // console.log('resize');
                self.resizeChart();
                // if (resizeTimer) {
                //     clearTimeout(resizeTimer);
                // } else {
                //     if (self.animationTimeline) {
                //         self.animationTimeline.stop();
                //     }
                //     TweenLite.to(self.parentSelector, 0.2, { alpha: 0, onComplete: function() {
                //         if (self.animationTimeline) {
                //             self.animationTimeline.kill();
                //         }
                //     } });
                // }
                // resizeTimer = setTimeout(function() {
                //     resizeTimer = null;
                //     $(self.parentSelector).empty();
                //     TweenLite.to(self.parentSelector, 0.2, { alpha: 1 });
                //     self.render();
                // }, 500);
            });
            self.render();
            self.resizeChart();
            if (! self.disableAnimation) {
                self.startAnimation();
            }
        },
        render: function(){
            var self = this, initialIndex = 6;
            self.prepareData();
            self.drawTable();
            self.drawChart2();
        },
        footnoteTooltip: {
            initialize: function () {
                $('[data-toggle="tooltip"]').tooltipster({
                    contentAsHTML: true,
                    zIndex: 999,
                    side: "bottom",
                    distance: 3,
                    maxWidth: 300,
                    delay: 200,
                    trigger: "custom",
                    triggerOpen: {
                        mouseenter: true,
                        touchstart: true
                    },
                    triggerClose: {
                        mouseleave: true,
                        tap: true
                    }
                });
            }
        },
        startAnimation: function(){
            var anim = this.animationTimeline = new TimelineLite();
            
            //anim.set("svg.chart1 g g.legend", {autoAlpha:0});

            anim.staggerFrom("svg.chart1 g g.x.axis g.tick", 0.5, {autoAlpha:0, y:20}, 0.1, 0);
            anim.from("svg.chart1 g g.x.axis text.label", 1, {autoAlpha:0}, 0.5);
            anim.from("svg.chart1 g g.y.axis text.label", 1, {autoAlpha:0}, 0.5);

            anim.from("svg.chart1 g g.y.axis line", 1, {autoAlpha:0, scale:0, transformOrigin:"50% 100%"}, 0.5);

            //Animate Legend
            //anim.staggerFrom("svg.chart1 g g.legend", 1, {autoAlpha:0}, 1, 1.5);

            //anim.staggerTo("svg.chart1 g path.line", 1, {drawSVG:"0% 100%"}, 0.5, 1);
            anim.staggerFrom("svg.chart1 g path.line", 1, {scale:0, transformOrigin:"35%, 100%"}, 0.3, 1.5);

            anim.from("div.table_container table", 1, {autoAlpha:0}, 1);
            anim.staggerFrom("div.table_container table tbody tr", 0.01, {autoAlpha:0}, 0.3, 1.5);
            
            anim.duration(3);
            
        },
        prepareData: function(){
            var range = d3.range(app.data.bellRange[0], app.data.bellRange[1] + app.data.bellRangeInterval, app.data.bellRangeInterval);
            range.sort(function(a, b){
                return a - b;
            });

            app.data.simulationData.forEach(function(d){
                // change the year from 2004 to 4
                // d.year = d.year - 2000;

                // fill in the missing data points for bellData (those with frequency 0)
                var bellDataObj = {};
                d.bellData.forEach(function(item){
                    bellDataObj[item.bin] = item.frequency;
                })
                range.forEach(function(item){
                    if (bellDataObj[item] === undefined) {
                        bellDataObj[item] = 0;
                    }
                });
                d.bellData = [];
                range.forEach(function(item){
                    d.bellData.push({ bin: item, frequency: bellDataObj[item] })
                });
            });
        },
        drawTable: function(){
            var self = this, chartInfo = {};

            chartInfo.originalWidth = 1850;
            chartInfo.originalFontSize = 28;
            chartInfo.table = d3.select(self.parentSelector).append("div")
                .attr("class", "table_container")
                .append("table");
            chartInfo.tableContainer = $(".table_container");
            chartInfo.tableSelector = $(".table_container table");

            // set table font size
            var parent = $(self.parentSelector),
                fontSize = self.calculateFontSize(chartInfo.originalWidth, chartInfo.originalFontSize, parent.width());
            chartInfo.tableContainer.css("font-size", fontSize + "px");

            // table header
            var thead = $('<thead>');
            var tr = $('<tr>');
            tr.append($('<th>', { rowspan: 2 }).append('&nbsp;'));
            tr.append($('<th>', { colspan: 2 }).append(
                $('<span>', { 'class': 'underline', 'data-toggle': 'tooltip', 'title': self.l("Based on Monte Carlo simulation for 12-month forward portfolio returns distribution, assuming no change in market conditions or portfolio mix.") }).append(
                    self.l("Five-in-six chance<br>range of returns")
                )
            ));
            if (app.config.lang == "zh") {
                tr.append($('<th>', { rowspan: 2 }).append(self.l("Actual TSR (%) a year later")));
            } else {
                var tooltip = $('<span>', { 'class': 'underline', 'data-toggle': 'tooltip', 'title': "Total Shareholder Return." }).append("TSR");
                tr.append($('<th>', { rowspan: 2 }).append("Actual<br>")
                    .append(tooltip).append(" (%) a<br>year later")
                );
            }
            thead.append(tr);

            tr = $('<tr>');
            tr.append($('<th>').append(self.l("Low (%)")));
            tr.append($('<th>').append(self.l("High (%)")));
            thead.append(tr);

            $(chartInfo.tableSelector).html(thead);

            // table body
            var tbody = $('<tbody>'),
                lastItem = app.data.simulationData[app.data.simulationData.length - 1];
            $.each(app.data.simulationData, function(index, item){
                var tr = $('<tr>');
                var tooltip = $('<span>', { 'class': 'underline', 'data-toggle': 'tooltip', 'title': self.l("marketVolatility", self.l(item.volatility)) }).append(self.l(item.year));
                tr.append($('<td>').append(
                    $('<span>', { 'class': 'dashes', style: 'color:' + d3.rgb(item.color).darker() }).append(app.data.unicodeLineTypes[item.strokeDashArray])
                ).append(" ").append(tooltip));
                //.append(" " + self.l("yearFormat", item.year - 1)));
                
                tr.append($('<td>', { style: 'background-color:' + item.color }).append(item.low));
                tr.append($('<td>', { style: 'background-color:' + item.color }).append(item.high));
                var actual = (item.actual === null) ? "&nbsp;" : item.actual;
                tr.append($('<td>', { style: 'background-color:' + item.color }).append(actual));

                tr.data("year", item.year).mouseover(function(){
                    var year = $(this).data("year");
                    d3.selectAll(".bell").select("path").style("stroke", "none");

                    d3.select("#year" + lastItem.year).select("path").style("stroke", function(d) {return d3.rgb(d.color).darker(); });
                    d3.select("#year" + year).select("path").style("stroke", function(d) {return d3.rgb(d.color).darker(); });
                    d3.select("#year" + year).select("path").style("stroke-width", function(d){ return (d.strokeWidth + 3); });
                }).mouseout(function(){
                    var year = $(this).data("year");
                    d3.selectAll(".bell").select("path").style("stroke", function(d) {return d3.rgb(d.color).darker();; });
                    d3.select("#year" + year).select("path").style("stroke-width", function(d){ return d.strokeWidth; });
                });

                tbody.append(tr);
            })
            $(chartInfo.tableSelector).append(tbody);

            app.main.table = chartInfo;
        },
        resizeChart: function(){
            var self = app.main;
            self.resizeChart2();
        },
        resizeChart2: function(){
            var self = app.main,
                chartInfo = self.chartInfo2, table = self.table,
                chartMargins = self.chartMargins;

            var containerWidth = self.getContainerSize(),
                parentWidth = containerWidth * chartMargins.width,
                parentHeight = containerWidth * chartMargins.height;

            var svg = d3.selectAll("svg." + self.firstChartClass);
            // svg.attr("width", parentWidth)
            //     .attr("height", parentHeight);

            // set table font size
            var fontSize = self.calculateFontSize(table.originalWidth, table.originalFontSize, containerWidth);
            table.tableContainer.css("font-size", fontSize + "px");
        },
        getContainerSize: function(){
            var self = this, ret;

            if (window.self !== window.parent) {
                var parentWidth = $(window.parent).width();
                ret = (parentWidth > self.maxMobileWidth) ? self.maxMobileWidth : parentWidth - 40;
            } else {
                ret = $(self.parentSelector).width();
            }
            // console.log([$(window.top).width(), $(window.parent).width(), $(window).width(), $(self.parentSelector).width(), ret]);
            return ret;
        },
        calculateFontSize: function(originalWidth, originalSize, currentWidth){
            var fontSize = currentWidth * originalSize / originalWidth;
            //console.log(originalWidth, originalSize, currentWidth, fontSize);
            return fontSize
        },
        drawChart2: function(){
            var self = this,
                currentItemData = self.currentItemData,
                chartInfo = {},
                chartMargins = self.chartMargins;

            chartInfo.data = app.data.simulationData;

            chartInfo.parentWidth = chartMargins.viewBoxWidth;
            chartInfo.parentHeight = chartMargins.viewBoxHeight;
            chartInfo.width = chartInfo.parentWidth - chartMargins.left - chartMargins.right;
            chartInfo.height = chartInfo.parentHeight - chartMargins.top - chartMargins.bottom;

            // define the x axis
            chartInfo.x = d3.scaleLinear()
                .range([0, chartInfo.width]);
            chartInfo.x.domain(app.data.bellRange).nice();

            chartInfo.xAxis = d3.axisBottom()
                .scale(chartInfo.x)
            // .tickFormat(d3.format("02d"));

            // define the y axis
            chartInfo.y = d3.scaleLinear()
                .range([chartInfo.height, 0]);
            chartInfo.y.domain([
                0, d3.max(chartInfo.data, function(d1) {
                    return d3.max(d1.bellData, function(d2) { return d2.frequency });
                })
            ]).nice();

            chartInfo.yAxis = d3.axisLeft()
                .scale(chartInfo.y)
                .ticks(0);

            // bell curve generator, "cardinal" is used for the smoothening
            chartInfo.bellCurve = d3.line()
                .curve(d3.curveCardinal)
                .x(function(d) { return chartInfo.x(d.bin); })
                .y(function(d) { return chartInfo.y(d.frequency); });

            // bell curve area generator
            chartInfo.area = d3.area()
                .curve(d3.curveCardinal)
                .x(function(d) {
                    return chartInfo.x(d.bin);
                })
                .y0(function(d) { return chartInfo.height; })
                .y1(function(d) { return chartInfo.y(d.frequency); });

            // draw the svg
            chartInfo.svgContainer = d3.select(self.parentSelector).append("svg")
                .attr("class", self.firstChartClass)
                .attr("viewBox", "0 0 " + chartInfo.parentWidth + " " + chartInfo.parentHeight)
                .attr("preserveAspectRatio", "xMidYMid meet");

            chartInfo.svg = chartInfo.svgContainer.append("g")
                .attr("transform", "translate(" + chartMargins.left + "," + chartMargins.top + ")");

            // draw the x axis
            chartInfo.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + chartInfo.height + ")")
                .call(chartInfo.xAxis)
                .append("text")
                .attr("class", "label")
                .attr("x", chartInfo.width)
                .attr("y", 45)
                .style("text-anchor", "end")
                .text(self.l("Potential Portfolio Returns a Year Later (%)"));

            // Original text styling
            // draw the y axis            
            // chartInfo.svg.append("g")
                // .attr("class", "y axis")
                // .call(chartInfo.yAxis)
                // .append("text")
                // .attr("class", "label")
                // .attr("transform", "rotate(-90)")
                // .attr("y", -25)
                // .attr("dy", ".71em")
                // .style("text-anchor", "end")
                // .text(self.l("Relative Likelihood"));
                
            // draw the y axis
            var yAxisText = chartInfo.svg.append("g")
                .attr("class", "y axis")
                .call(chartInfo.yAxis)
                .append("text")
                .attr("class", "label");

            //Special text style for Chinese text
            if (app.config.lang == "zh") {
                
                var chineseText = self.l("Relative Likelihood");
                
                yAxisText
                    .attr("y", 0)
                    .style("text-anchor", "middle");

                for (var i=0; i < chineseText.length; i++) {
                    var chineseChar =  chineseText.slice(i, i + 1);
                    yAxisText.append("tspan")
                        .attr("x", -25)
                        .attr("dy", "1.1em")
                        .text(chineseChar);
                }
            
            // English text styling
            } else {
                yAxisText
                    .attr("transform", "rotate(-90)")
                    .attr("x", 0)
                    .attr("y", -25)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text(self.l("Relative Likelihood"));
            }

            // draw another y axis
            chartInfo.svg.append("g")
                .attr("class", "y axis")
                .append("line")
                .attr("x1", chartInfo.x(0))
                .attr("x2", chartInfo.x(0))
                .attr("y2", chartInfo.height);

            var selection = chartInfo.svg.selectAll(".bell")
                .data(chartInfo.data)

            var enterSelection = selection.enter().append("g")
                .attr("class", "bell")
                .attr("id", function(d){ return "year" + d.year; })
                .style("opacity", 1);
            enterSelection.append("path")
                .attr("class", "line")
                .attr("stroke", function(d){ return d3.rgb(d.color).darker(); })
                .attr("stroke-dasharray", function(d){
                    return app.data.strokeDashArrayTypes[d.strokeDashArray];
                })
                .attr("stroke-width", function(d){ return d.strokeWidth; } )
                .attr("d", function(d){ return chartInfo.bellCurve(d.bellData); });

            selection.exit().remove();

            app.main.chartInfo2 = chartInfo;
        }
    };
}



(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;
    app.main.start();
    app.main.footnoteTooltip.initialize();

})(jQuery);
