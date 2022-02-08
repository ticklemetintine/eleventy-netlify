// 20210623
"use strict";

var app = app || {};

if (! app.config) {
    app.config = {
        lang: "end"
    };
}

if (! app.main) {
    app.main = {
        parentSelector: "#chart",
        mainClassSelector: ".main",
        maxMobileWidth: 760,
        maxPortraitWidth: 450,
        enableAnimation: true,
        enablePortraitLock: true,
        chartMargins: {
            top: 40, right: 50, bottom: 90, left: 50, 
            width: 1.0, height: 400/800, viewBoxWidth: 800, viewBoxHeight: 400,
            symbolSize: 60, barSize: 10, tooltipWidth: 100
        },
        issueSizeFormatter: d3.format(".1f"),
        couponFormatter: d3.format("0.4%"),
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
        start: function(){
            var self = this;

            self.prepareData();
            self.prepareChart(self.parentSelector + " " + self.mainClassSelector);
            self.drawChart(self.parentSelector + " " + self.mainClassSelector, false, false, false);

            $(window).on('orientationchange', function(){
                // console.log('orientationchange');
                self.resizeChart();
            });
            $(window).resize(function() {
                // console.log('resize');
                self.resizeChart();
            });
            self.resizeChart();

            // $(self.parentSelector + " " + self.mainClassSelector).scroll(self.updateScroll);
            // $(window).resize(self.updateScroll);
            // self.updateScroll();

            if (self.enableAnimation) {
                self.startAnimation();
            } else {
                self.footnoteTooltip.initialize();
            }
        },
        footnoteTooltip: {
            initialize: function () {
                $('[data-toggle="tooltip"]').tooltipster({
                    contentAsHTML: true,
                    zIndex: 999,
                    side: "right",
                    distance: 3,
                    maxWidth: 300,
                    minWidth: (app.config.lang === 'en') ? 270 : 230,
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
            var self = this;

            // Animation
            var anim = new TimelineLite();

            anim.timeScale(2);

            anim.from("g.x.axis path.domain", 1, {autoAlpha:0, scale:0}, 0);
            anim.staggerFrom("g.x.axis g.tick", 0.75, {autoAlpha:0, y:20}, 0.1, 0.25);
            anim.from("g.x.axis text.label", 1, {autoAlpha:0}, 1.5);

            anim.from("g#issuesize.y.axis path.domain", 1, {autoAlpha:0, scale:0, transformOrigin:"0% 100%"}, 0);
            anim.staggerFrom("g#issuesize.y.axis g.tick", 0.75, {autoAlpha:0, x: -20}, 0.1, 0.25);
            anim.from("g#issuesize.y.axis text", 2, {autoAlpha:0}, 0.5);

            anim.from("g#coupon.y.axis path.domain", 1, {autoAlpha:0, scale:0, transformOrigin:"0% 100%"}, 2);
            anim.staggerFrom("g#coupon.y.axis g.tick", 0.75, {autoAlpha:0, x: -20}, 0.1, 2.25);
            anim.from("g#coupon.y.axis text", 2, {autoAlpha:0}, 2.5);
            anim.from("g#coupon.y.axis g.ySegment", 1, {autoAlpha:0}, 2);

            anim.from("g#issuesize.y.axis line.yTooltipLine", 1, {autoAlpha:0, onComplete: activateTooltip}, 1.5);

            // Animate each bond class in sequence
            for (var i=0; i < app.data.credit_data.length; i++) {
                anim.staggerFrom("g.stacked rect." + app.data.credit_data[i].denomination, 1.5, {autoAlpha:0, scale:0, transformOrigin:"0% 100%"}, 0.25, i * 2);
                anim.staggerFrom("path.chartpoint." + app.data.credit_data[i].denomination, 1.5, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.25, i * 2); 
                anim.from("#chartline" + i, 2.5, {drawSVG:"0% 0%"}, i * 2);
                anim.from("g.legend." + app.data.credit_data[i].denomination, 1.5, {autoAlpha:0}, i * 2);
            }

            function activateTooltip() {
                self.footnoteTooltip.initialize();
            }
        },
        prepareData: function(){
            var credit_data = app.data.credit_data;

            //Data preprocessing -- not the most elegant solution but works
            var bar_data = [];
            for (var i=0; i < credit_data.length; i++) {
                for (var j=0; j < credit_data[i].chartdata.length; j++) {
                    var item = {
                        denomination: credit_data[i].denomination, 
                        colour: credit_data[i].colour,
                        symbol: credit_data[i].symbol, 
                        year: credit_data[i].chartdata[j].year,
                        issue_size: credit_data[i].chartdata[j].issue_size,
                        issue_size_displayed: credit_data[i].chartdata[j].issue_size_displayed,
                        coupon: credit_data[i].chartdata[j].coupon
                    };
                    bar_data.push(item);
                }
            }
            app.data.barData = bar_data;

            // data processing for stacked bars
            var tempStackedData = {};
            credit_data.forEach(function(denomination, denominationIndex){
                denomination.chartdata.forEach(function(item, itemIndex){
                    var newItem = {
                        year: item.year,
                        issue_size: item.issue_size,
                        issue_size_displayed: item.issue_size_displayed,
                        colour: denomination.colour,
                        denomination: denomination.denomination
                    };

                    if (item.year in tempStackedData) {
                        tempStackedData[item.year].push(newItem)
                    } else {
                        tempStackedData[item.year] = [newItem];
                    }
                });
            });

            var stackedData = [];
            for (var year in tempStackedData) {
                stackedData.push({
                    year: year,
                    data: tempStackedData[year]
                });
            }

            stackedData.forEach(function(item){
                var y0 = 0;
                // console.log(item);
                item.data.forEach(function(subItem){
                    subItem["y0"] = y0;
                    subItem["y1"] = y0 += subItem.issue_size;
                    // console.log(subItem);
                });
            });

            app.data.stackedData = stackedData;
        },
        viewPortRatio: function(){
            var self = app.main,
                chartInfo = app.main.chartInfo,
                mainWidth = $(self.parentSelector).find(self.mainClassSelector).width(),
                parentWidth = Math.max(mainWidth * self.chartMargins.width, chartInfo.parentWidth);
            return parentWidth / chartInfo.parentWidth;
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
        resizeChart: function(){
            var self = app.main,
                chartInfo = app.main.chartInfo;

            var containerWidth = self.getContainerSize(),
                parentWidth = containerWidth * self.chartMargins.width,
                parentHeight = containerWidth * self.chartMargins.height;

            if (self.enablePortraitLock) {
                if (containerWidth < self.maxPortraitWidth) {
                    $(".rotate").show();
                } else {
                    $(".rotate").hide();
                }
            }

            var parent = $(self.parentSelector),
                main = parent.find(self.mainClassSelector),
                mainWidth = main.width()
                // parentWidth = Math.max(mainWidth * self.chartMargins.width, chartInfo.parentWidth),
                // parentHeight = Math.max(mainWidth * self.chartMargins.height, chartInfo.parentHeight);

            var svg = d3.selectAll("svg");
            // svg.attr("width", parentWidth)
                // .attr("height", parentHeight);

            // parent.height(parentHeight);
            // main.height(parentHeight);

            // update some parameters
            chartInfo.svgRect = chartInfo.svg.node().getBoundingClientRect();
        },
        prepareChart: function(container){
            app.main.chartInfo = {};
            var self = this,
                chartInfo = app.main.chartInfo,
                parentWidth = $(container).width();

            chartInfo.parentWidth = self.chartMargins.viewBoxWidth;
            chartInfo.parentHeight = self.chartMargins.viewBoxHeight;
            chartInfo.width = chartInfo.parentWidth - self.chartMargins.left - self.chartMargins.right;
            chartInfo.height = chartInfo.parentHeight - self.chartMargins.top - self.chartMargins.bottom;
            chartInfo.offsetY2 = 80;

            chartInfo.x = d3.scaleLinear()
                .range([0, chartInfo.width]);

            chartInfo.y = d3.scaleLinear()
                .range([chartInfo.height / 2, 0]);

            chartInfo.y2 = d3.scaleLinear()
                .range([chartInfo.height,  chartInfo.offsetY2]);

            chartInfo.xAxis = d3.axisBottom()
                .scale(chartInfo.x)
                .tickFormat(d3.format("04d"))
                .tickValues([2022, 2023, 2025, 2028, 2029, 2030, 2031, 2035, 2039, 2040, 2042, 2049, 2050, 2051, 2070]);

            chartInfo.yAxis = d3.axisLeft()
                .scale(chartInfo.y)
                .ticks(3);

            chartInfo.yAxis2 = d3.axisRight()
                .scale(chartInfo.y2)
                .ticks(6);

            chartInfo.x.domain([2020.75, 2071.25]);
            chartInfo.y.domain([0, 3]);
            chartInfo.y2.domain([0, 6]);

            chartInfo.chartline = d3.line()
                .x(function(d) { return chartInfo.x(d.year); })
                .y(function(d) { return chartInfo.y2(d.coupon) - chartInfo.offsetY2; });
        },
        drawChart: function(container, shouldDrawOnlyYAxis1, shouldDrawOnlyYAxis2, shouldDrawOnlyLegend){
            var self = this, 
                chartInfo = app.main.chartInfo,
                credit_data = app.data.credit_data,
                bar_data = app.data.barData,
                stackedData = app.data.stackedData;

            var svgContainer = d3.select(container).append("svg")
                // .attr("width", chartInfo.parentWidth)
                // .attr("height", chartInfo.parentHeight)
                .attr("viewBox", "0 0 " + chartInfo.parentWidth + " " + chartInfo.parentHeight)
                .attr("preserveAspectRatio", "xMidYMid meet");

            var svg = svgContainer.append("g")
                .attr("transform", "translate(" + self.chartMargins.left + "," + self.chartMargins.top + ")");

            if (! shouldDrawOnlyYAxis1 && ! shouldDrawOnlyYAxis2 && ! shouldDrawOnlyLegend) {
                chartInfo.svgContainer = svgContainer;
                chartInfo.svg = svg;
            }

            if (shouldDrawOnlyYAxis1 || shouldDrawOnlyYAxis2) {
                svgContainer.attr("preserveAspectRatio", "xMinYMid meet");
            } else if (shouldDrawOnlyLegend) {
                svgContainer.attr("preserveAspectRatio", "xMinYMin meet");
            }

            function drawXAxis() {
                // x-axis
                var axis = svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + chartInfo.height + ")")
                    .call(chartInfo.xAxis);
                                        
                axis.selectAll("text")
                    .style("text-anchor", "end")
                    .attr("transform", "rotate(-45)");
                    
                axis.append("text")
                    .attr("class", "label")
                    .attr("dy", ".71em")
                    .style("text-anchor", "middle")
                    .attr("transform", "translate(" + chartInfo.width / 2 + ", 50)")
                    .text(self.l("Year of Maturity"));
            }

            function drawYAxis1() {
                // y-axis (left)
                var axis = svg.append("g")
                    .attr("class", "y axis")
                    .attr("id", "issuesize")
                    .attr("transform", "translate(0 ," + (chartInfo.height / 2) + ")")
                    .call(chartInfo.yAxis);

                var axisText = axis.append("text");

                //Special text style for Chinese text
                if (app.config.lang == "zh") {
                    var chineseText = self.l("Notional Issue Size (S$b)");

                    axisText
                        .attr("y", - chineseText.length / 2 * 16 + 65)
                        .attr("data-toggle", "tooltip")
                        .attr("title", self.l("Exchange rates as at 31 March 2021."))
                        .style("text-anchor", "middle");

                    var chineseChar = chineseText.split("");
                    var specialText = "";
                    var flag = false;

                    // Logic hack for numbers. All numbers are printed on one line; everything else is its separate line.
                    for (var i=0; i < chineseChar.length; i++) {
                        if ($.isNumeric(chineseChar[i])) {
                            specialText += chineseChar[i];
                            flag = true;
                        } else {
                            if (flag == true) {
                                axisText.append("tspan")
                                    .attr("x", -35)
                                    .attr("dy", "1.1em")
                                    .text(specialText);
                            }
                            axisText.append("tspan")
                                .attr("x", -35)
                                .attr("dy", "1.1em")
                                .text(chineseChar[i]);
                            flag = false;
                            specialText = "";
                        }
                    }

                    axis
                        .append("line")
                        .attr("class", "yTooltipLine tooltipLine")
                        .attr("x1", -23)
                        .attr("x2", -23)
                        .attr("y1", chartInfo.y(3) - 35)
                        .attr("y2", chartInfo.y(0) + 5)
                } else {
                    // English text styling
                    axisText
                        .attr("dy", ".71em")
                        .style("text-anchor", "start")
                        .attr("data-toggle", "tooltip")
                        .attr("title", self.l("Exchange rates as at 31 March 2021."))
                        .attr("transform", "translate(-40, " + chartInfo.y(0) + ") rotate(-90)")
                        .text(self.l("Notional Issue Size (S$b)"));
                    axis
                        .append("line")
                        .attr("class", "yTooltipLine tooltipLine")
                        .attr("x1", -25)
                        .attr("x2", -25)
                        .attr("y1", chartInfo.y(3) - 22.5)
                        .attr("y2", chartInfo.y(0))
                }
            }

            function drawYAxis2() {
                // y2-axis (right)
                var axis = svg.append("g")
                    .attr("class", "y axis")
                    .attr("id", "coupon")
                    .attr("transform", "translate(" + chartInfo.width + ", " + (-chartInfo.offsetY2) + ")")
                    .call(chartInfo.yAxis2);

                var axisText = axis.append("text");

                //Special text style for Chinese text
                if (app.config.lang == "zh") {

                    var chineseText = self.l("Coupon (%)");

                    axisText.attr("y", chartInfo.height / 2 + 40) // Custom position for Chinese text
                        .style("text-anchor", "middle");

                    for (var i = 0; i < chineseText.length; i++) {
                        var chineseChar =  chineseText.slice(i, i + 1);
                        axisText.append("tspan")
                            .attr("x", 35)
                            .attr("dy", "1.1em")
                            .text(chineseChar);
                    }
                // English text styling
                } else {
                    axisText
                    .attr("transform", "translate(40," + (chartInfo.height/ 2  + chartInfo.offsetY2) + ")rotate(90)")
                    .attr("dy", ".71em")
                    .style("text-anchor", "middle")
                    .text(self.l("Coupon (%)"));
                }

                var ySegment = axis.append("g")
                    .attr("class", "ySegment");

                ySegment.append("line")
                    .attr("x1", 0.5)
                    .attr("x2", 0.5)
                    .attr("y1", chartInfo.height)
                    .attr("y2", chartInfo.height + chartInfo.offsetY2 /2 - 2);

                ySegment.append("line")
                    .attr("x1", 0.5)
                    .attr("x2", 0.5)
                    .attr("y1", chartInfo.height + chartInfo.offsetY2 /2 + 2)
                    .attr("y2", chartInfo.height + chartInfo.offsetY2);

                ySegment.append("line")
                    .attr("x1", -3)
                    .attr("x2", 3)
                    .attr("y1", chartInfo.height + chartInfo.offsetY2 /2)
                    .attr("y2", chartInfo.height + chartInfo.offsetY2 /2 + 3);

                ySegment.append("line")
                    .attr("x1", -3)
                    .attr("x2", 3)
                    .attr("y1", chartInfo.height + chartInfo.offsetY2 /2 - 3)
                    .attr("y2", chartInfo.height + chartInfo.offsetY2 /2);
            }

            function drawLines() {
                // draw lines
                svg.selectAll(".chartline")
                    .data(credit_data)
                    .enter().append("path")
                    .attr("class", "chartline")
                    .attr("id", function(d, i) { return "chartline" + i; })
                    .attr("d", function(d) { return chartInfo.chartline(d.chartdata) })
                    .style("stroke", function(d) { return d.colour });
            }

            function drawStackedBars() {
                // add stacked bars
                var stackedBars = svg.selectAll(".stacked")
                    .data(stackedData)
                    .enter().append("g")
                    .attr("class", "stacked")
                    .attr("transform", function(d) { return "translate(" + (chartInfo.x(d.year) - self.chartMargins.barSize / 2) + ",0)" });

                stackedBars.selectAll("rect")
                    .data(function(d){
                        return d.data;
                    })
                    .enter().append("rect")
                    .attr("class", function(d) { return d.denomination; })
                    .attr("width", self.chartMargins.barSize)
                    .attr("x", 0)
                    .attr("y", function(d) { return chartInfo.y(d.y1) + chartInfo.height / 2; })
                    .attr("height", function(d, i) { return chartInfo.y(d.y0) - chartInfo.y(d.y1); })
                    .style("fill", function(d) { return d.colour; })

                    // Adding mouseevents for stacked bars
                    .on("mouseover", function(d) {
                        d3.select(this).transition().duration(300)
                            .attr("x", -2.5)
                            .attr("width", self.chartMargins.barSize * 1.5)
                            .style("fill", function(d) { return d3.rgb(d.colour).darker(); });

                        chartInfo.div.html(self.l("issueSize", d));

                        chartInfo.div.transition().duration(300)
                            .style("opacity", 0.8);

                        var offset = 0,
                            // ratio = self.viewPortRatio(),
                            // posX = chartInfo.svgRect.left + (chartInfo.x(d.year) - self.chartMargins.barSize / 2) * ratio,
                            tooltipRect = chartInfo.div.node().getBoundingClientRect(),
                            tooltipWidth = tooltipRect.width,
                            tooltipHeight = tooltipRect.height;

                        // position horizontally depending on whether extreme left, normal or extreme right
                        if (d.year <= 2020) {
                            // offset = -self.chartMargins.barSize / 2 * ratio;
                        } else if (d.year == 2050) {
                            // offset = -tooltipWidth + self.chartMargins.barSize / 2 * ratio;
                            offset = tooltipWidth;
                        } else {
                            offset = tooltipWidth / 2;
                        }
                        // console.log(ratio, chartInfo.svgRect.left, tooltipWidth, tooltipHeight, d.year, chartInfo.x(d.year), posX, offset);

                        chartInfo.div.style("top", (d3.event.pageY - tooltipHeight * 1.5) + "px")
                            // .style("left", (posX + offset) + "px");
                            .style("left", (d3.event.pageX - offset) + "px");
                    })

                    .on("mousemove", function(){
                        var tooltipHeight = chartInfo.div.node().getBoundingClientRect().height;
                        chartInfo.div.style("top", (d3.event.pageY - tooltipHeight * 1.5) + "px")
                    })

                    .on("mouseout", function() {
                        d3.select(this).transition().duration(300)
                            .attr("x", 0)
                            .attr("width", self.chartMargins.barSize)
                            .style("fill", function(d) { return d.colour; });

                        chartInfo.div.transition().duration(300)
                            .style("opacity", 0);
                        // chartInfo.div.style("opacity", 0);
                    });
            } // drawStackedBars
            
            function drawPoints() {
                // add points
                svg.selectAll(".chartpoint")
                    .data(bar_data)
                    .enter().append("path")
                    .attr("class", function(d) { return "chartpoint " + d.denomination; } )
                    .attr("d", function(d) {
                        return self.getSymbol(d.symbol, self.chartMargins.symbolSize);
                    })
                    .attr("transform", function(d) {
                        return "translate(" + chartInfo.x(d.year) + "," + (chartInfo.y2(d.coupon) - chartInfo.offsetY2) + ")";
                    })
                    .style("fill", function(d) { return d.colour; })

                    //Adding mouseevents for points
                    .on("mouseover", function(d) {
                        d3.select(this).transition().duration(300)
                            .attr("d", function(d) {
                                return self.getSymbol(d.symbol, self.chartMargins.symbolSize * 2);
                            })
                            .style("fill", function(d) { return d3.rgb(d.colour).darker(); });

                        chartInfo.div.html(self.l("coupon", d));

                        chartInfo.div.transition().duration(300)
                            .style("opacity", 0.8);

                        var offset = 0,
                            // ratio = self.viewPortRatio(),
                            // posX = chartInfo.svgRect.left + chartInfo.x(d.year) * ratio,
                            tooltipRect = chartInfo.div.node().getBoundingClientRect(),
                            tooltipWidth = tooltipRect.width,
                            tooltipHeight = tooltipRect.height;

                        // position horizontally depending on whether extreme left, normal or extreme right
                        if (d.year <= 2020) {
                            // offset = -self.chartMargins.symbolSize / 8 * ratio;
                        } else if (d.year == 2050) {
                            // offset = -tooltipWidth;
                            offset = tooltipWidth;
                        } else {
                            // offset = -self.chartMargins.symbolSize / 16 * ratio - tooltipWidth / 2;
                            offset = tooltipWidth / 2;
                        }
                        // console.log(ratio, chartInfo.svgRect.left, tooltipWidth, tooltipHeight, d.year, chartInfo.x(d.year), posX, offset);

                        chartInfo.div.style("top", (d3.event.pageY + tooltipHeight * 0.5) + "px")
                            // .style("left", (posX + offset) + "px");
                            .style("left", (d3.event.pageX - offset) + "px");
                    })

                    .on("mousemove", function(){
                        var tooltipHeight = chartInfo.div.node().getBoundingClientRect().height;
                        chartInfo.div.style("top", (d3.event.pageY + tooltipHeight * 0.5) + "px")
                    })

                    .on("mouseout", function() {
                        d3.select(this)
                            .transition().duration(300)
                            .attr("d", function(d) {
                                return self.getSymbol(d.symbol, self.chartMargins.symbolSize);
                            })
                            .style("fill", function(d) { return d.colour; });

                        chartInfo.div.transition().duration(300)
                            .style("opacity", 0);
                    });
            } // drawPoints

            function drawLegend() {
                // add legend
                var legend = svg.selectAll(".legend")
                    .data(credit_data)
                    .enter().append("g")
                    .attr("class", function(d) { return "legend " + d.denomination; })
                    .attr("transform", function(d,i) {
                        return "translate(" + (chartInfo.x(2022 + i * 8)) + "," + (chartInfo.height + 78) + ")";
                    });

                // legend shape
                legend.append("path")
                    .attr("d", function(d) {
                        return self.getSymbol(d.symbol, self.chartMargins.symbolSize);
                    })
                    .style("fill", function(d) { return d.colour; });

                // legend text
                legend.append("text")
                    .text(function(d) { return self.l(d.denomination + " Bond"); })
                    .attr("x", 15)
                    .attr("y", 0)
                    .attr("dy", ".35em")
                    .style("text-anchor", "start");
            } // drawLegend

            function drawTooltip() {
                // Add tooltip;
                chartInfo.div = d3.select(container).append("div")
                    .attr("class", "tooltip")
                    .style("width", self.chartMargins.tooltipWidth + "px")
                    .style("opacity", 0);
            }

            if (shouldDrawOnlyYAxis1) {
                drawXAxis();
                drawYAxis1();
            } else if (shouldDrawOnlyYAxis2) {
                drawXAxis();
                drawYAxis2();
            } else if (shouldDrawOnlyLegend) {
                drawLegend();
            } else {
                drawXAxis();
                drawYAxis1();
                drawYAxis2();
                drawLines();
                drawStackedBars();
                drawPoints();
                drawLegend();
                drawTooltip();
            } // if (shouldDrawYAxes)
        },
        customSymbolTypes: d3.map({
            "square-diamond": function(size) {
                var d3_svg_symbolTan30 = Math.tan(30 * Math.PI / 180), 
                    ry = Math.sqrt(size / (3 * d3_svg_symbolTan30));
                return "M0," + -ry
                    + "L" + ry + ",0"
                    + " 0," + ry
                    + " " + -ry + ",0"
                    + "Z";
              }
        }),
        getSymbol: function(type, size) {
            size = size || 64;
            if (d3.symbols.indexOf(type) !== -1) {
                return d3.symbol().type(type).size(size)();
            } else {
                return d3.symbolCustom().type(type).size(size)();
            }
        },
        updateScroll: function() {
            var self = app.main,
                main = $(self.parentSelector + " " + self.mainClassSelector),
                mainChart = main.children("svg"),
                scrollLeft = main.scrollLeft();
        }
    };
}

d3.functor = function functor(v) {
    return typeof v === "function" ? v : function() {
        return v;
    };
};

d3.symbolCustom = function() {
    var type, size = 64;

    function symbol(d,i) {
        return app.main.customSymbolTypes.get(type.call(this,d,i))(size.call(this,d,i));
    }
    symbol.type = function(_) {
        if (!arguments.length) return type;
        type = d3.functor(_);
        return symbol;
    };
    symbol.size = function(_) {
        if (!arguments.length) return size;
        size = d3.functor(_);
        return symbol;
    };
    return symbol;
};

(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;
    app.main.start();

})(jQuery);
