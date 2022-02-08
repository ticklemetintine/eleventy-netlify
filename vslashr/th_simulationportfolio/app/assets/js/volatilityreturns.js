// 2021061815
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
        disableAnimation: !true,
        parentSelector: "#chart",
        firstChartClass: "chart1",
        secondChartClass: "chart2",
        firstChartContainerContainerClass: "chart1ContainerContainer",
        firstChartContainerClass: "chart1Container",
        secondChartContainerClass: "chart2Container",
        maxMobileWidth: 720,
        chartMargins1: {
            top: 30, right: 50, bottom: 80, left: 60, width: 1.0, height: 600/800, 
            viewBoxWidth: 800, viewBoxHeight: 600
        },
        chartMargins2: {
            wide: {
                top: 30, right: 30, bottom: 110, left: 40, width: 0.35 / 375 * 500, height: 0.35,
                viewBoxWidth: 500, viewBoxHeight: 375
            },
            narrow: {
                top: 30, right: 30, bottom: 60, left: 40, width: 0.6 / 375 * 500, height: 0.6,
                viewBoxWidth: 500, viewBoxHeight: 375
            }
        },
        // toolTipMargins: { width: 90, height: 20 },
        chartLegend1IconSize: 18,
        chartLegend1: [
            { shape: "rect", text: "Simulated Returns" }, 
            { shape: "circle", text: "Actual TSR" }
        ],
        volatilityColors: {
            low:     d3.rgb("#aaf").darker(), //low volatility
            medium: d3.rgb("#afa").darker(), //mid volatility
            high:     d3.rgb("#faa").darker() //high volatilty
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
            self.drawToolTip();
            self.drawChart1(initialIndex);
            app.main.currentItemData = app.data.simulationData[initialIndex];
            self.drawChart2(app.main.currentItemData.bellData);
        },
        startAnimation: function(){
            //Animation of chart on load
            
            var anim = this.animationTimeline = new TimelineLite();

            anim.staggerFrom("g.point circle.dot", 1, {autoAlpha:0, x:-20}, 0.2, 0); 
            anim.staggerFrom("g.point text.label", 1, {autoAlpha:0, x:-20}, 0.2, 0.5); 
            anim.staggerFrom("g.point rect.boxplot", 1, {autoAlpha:0, scale:0, transformOrigin:"50%, 50%"}, 0.2, 0.75); 
            
            anim.from("g.x.axis path.domain", 1, {autoAlpha:0, scale:0, ease: Power2.easeOut}, 0);
            anim.staggerFrom("g.x.axis g.tick", 0.75, {autoAlpha:0, y: 20}, 0.1, 0.25);
            anim.from("g.x.axis text.label", 2, {autoAlpha:0}, 0.5);                        

            anim.from("g.x.axis line.zero-line", 1, {autoAlpha:0, scale:0, ease: Power2.easeOut}, 0.5);
            
            anim.from("g.y.axis path.domain", 1, {autoAlpha:0, scale:0, transformOrigin:"0% 100%", ease: Power2.easeOut}, 0);
            anim.staggerFrom("g.y.axis g.tick", 0.75, {autoAlpha:0, x:-20}, 0.1, 0.25);
            anim.from("g.y.axis text.label", 2, {autoAlpha:0}, 0.5);                        

            anim.from("g.profile", 3, {autoAlpha:0}, 1.5);

            anim.from("g.bell", 3, {autoAlpha:0}, 1.5);  
            anim.from("g.focus", 3, {autoAlpha:0}, 1.8);
            
            anim.staggerFrom("g.legend", 2, {autoAlpha:0}, 0.2, 2);
            anim.from("text.title", 1, {autoAlpha:0, x:20}, 2);
            
            anim.from(".tooltip", 2, {autoAlpha:0}, 2.4);
                       
            anim.duration(4.5);
                       
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
        drawToolTip: function(){
            var self = this, chartInfo = {};
                // chartMargins = self.toolTipMargins;

            chartInfo.toolTipText = d3.select(self.parentSelector).append("div")
                .attr("class", "tooltip_container")
                // .style("width", chartMargins.width + "%")
                // .style("height", chartMargins.height + "%")
                .append("p")
                .attr("class", "tooltip");

            app.main.tooltip = chartInfo;
        },
        resizeChart: function(){
            var self = app.main;
            self.resizeChart1();
            self.resizeChart2();

            // console.log($(window).width(), self.maxMobileWidth)

            // console.log($(self.parentSelector + ' .' + self.secondChartContainerClass).css(['margin']))

            if ($(window).width() < self.maxMobileWidth) {
                $(self.parentSelector).css('text-align', 'center');
                $(self.parentSelector + ' .tooltip_container').css('margin', '0 auto');
                $(self.parentSelector + ' .tooltip_container .tooltip').css('text-align', 'left');

                $(self.parentSelector + ' .' + self.firstChartContainerContainerClass).css('padding-top', '0px');
                $(self.parentSelector + ' .' + self.secondChartContainerClass).css({
                    'position': 'static',
                    'top': 'auto',
                    'right': 'auto',
                    'margin': '0 auto'
                });
                $(self.parentSelector + ' .tooltip_container').css({
                    'position': 'static',
                    'top': 'auto',
                    'right': 'auto'
                });
                $(self.parentSelector + ' .tooltip_container .tooltip').css({
                    'margin': '16px 0px',
                    'font-size': '1em'
                });
            } else {
                $(self.parentSelector).css('text-align', 'start');
                $(self.parentSelector + ' .tooltip_container').css('margin', '0px');
                $(self.parentSelector + ' .tooltip_container .tooltip').css('text-align', 'start');

                $(self.parentSelector + ' .' + self.firstChartContainerContainerClass).css('padding-top', '10%');
                $(self.parentSelector + ' .' + self.secondChartContainerClass).css({
                    'position': 'absolute',
                    'top': '9%',
                    'right': '8%',
                    'margin': '0px'
                });
                $(self.parentSelector + ' .tooltip_container').css({
                    'position': 'absolute',
                    'top': '0',
                    'right': '0'
                });
                $(self.parentSelector + ' .tooltip_container .tooltip').css({
                    'margin': '0 3em 0 0',
                    'font-size': '0.9em'
                });
            }
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
        resizeChart1: function(){
            var self = app.main,
                chartInfo = self.chartInfo1,
                chartMargins = self.chartMargins1;

            var containerWidth = self.getContainerSize(),
                parentWidth = containerWidth * chartMargins.width,
                parentHeight = containerWidth * chartMargins.height;

            var svg = d3.selectAll("svg." + self.firstChartClass);

            // parent.height(parentHeight);
        },
        resizeChart2: function(){
            var self = app.main,
                chartInfo = self.chartInfo2,
                chartMargins = self.chartMargins2[$(window).width() < self.maxMobileWidth ? "narrow" : "wide"];

            var containerWidth = self.getContainerSize(),
                parentWidth = containerWidth * chartMargins.width,
                parentHeight = containerWidth * chartMargins.height;

            var svg = d3.selectAll("svg." + self.secondChartClass);
            // svg.attr("width", parentWidth)
            //     .attr("height", parentHeight);
            d3.selectAll("." + self.secondChartContainerClass)
                .style("width", parentWidth + "px");
        },
        drawChart1: function(index){
            var self = this,
                chartInfo = {},
                chartMargins = self.chartMargins1;

            chartInfo.data = app.data.simulationData;

            chartInfo.parentWidth = chartMargins.viewBoxWidth;
            chartInfo.parentHeight = chartMargins.viewBoxHeight;
            chartInfo.width = chartInfo.parentWidth - chartMargins.left - chartMargins.right;
            chartInfo.height = chartInfo.parentHeight - chartMargins.top - chartMargins.bottom;

            chartInfo.bisectYear = d3.bisector(function(d) { return d.year; }).left;

            // define the x axis
            chartInfo.x = d3.scaleLinear()
                .range([0, chartInfo.width]);
            chartInfo.minX = d3.min(chartInfo.data, function(d){ return d.year; });
            chartInfo.x.domain([
                chartInfo.minX - 0.5,
                d3.max(chartInfo.data, function(d){ return d.year; })
                // d3.extent(chartInfo.data, function(d) { return d.year; })
            ]);

            chartInfo.xAxis = d3.axisBottom()
                .scale(chartInfo.x)
                .tickValues(d3.range(d3.min(chartInfo.data, function(d){ return d.year; }), 
                    d3.max(chartInfo.data, function(d){ return d.year; }) + 1))
                .tickFormat(d3.format("04d"));

            // define the y axis
            chartInfo.y = d3.scaleLinear()
                .range([chartInfo.height, 0]);
            chartInfo.y.domain([
                d3.min(chartInfo.data, function(d) { return Math.min(d.low, d.high, d.actual); }) - 5,
                d3.max(chartInfo.data, function(d) { return Math.max(d.low, d.high, d.actual); }) + 20
            ]);

            chartInfo.yAxis = d3.axisLeft()
                .scale(chartInfo.y);

            // low line generator
            chartInfo.lowLine = d3.line()
                .x(function(d) { return chartInfo.x(d.year); })
                .y(function(d) { return chartInfo.y(d.low); });

            // high line generator
            chartInfo.highLine = d3.line()
                .x(function(d) { return chartInfo.x(d.year); })
                .y(function(d) { return chartInfo.y(d.high); });

            // area generator
            chartInfo.area = d3.area()
                .x(function(d) { return chartInfo.x(d.year); })
                .y0(function(d) { return chartInfo.y(d.low); })
                .y1(function(d) { return chartInfo.y(d.high); });

            // draw the svg
            d3.select(self.parentSelector).insert("div", ":first-child")
                .attr("class", self.firstChartContainerContainerClass);
            d3.select("." + self.firstChartContainerContainerClass).append("div")
                .attr("class", self.firstChartContainerClass);
            chartInfo.svgContainer = d3.select("." + self.firstChartContainerClass).append("svg")
                .attr("class", self.firstChartClass)
                // .attr("width", chartInfo.parentWidth)
                // .attr("height", chartInfo.parentHeight)
                .attr("viewBox", "0 0 " + chartInfo.parentWidth + " " + chartInfo.parentHeight)
                .attr("preserveAspectRatio", "xMidYMid meet");

            chartInfo.svg = chartInfo.svgContainer.append("g")
                .attr("transform", "translate(" + chartMargins.left + "," + chartMargins.top + ")");

            // draw the title
            //chartInfo.svg.append("text")
            //    .attr("class", "title")
            //    .attr("y", -10)
            //    .attr("text-anchor", "start")
            //    .text(self.l("Volatility of Returns"));

            // draw the x axis
            var xAxis = chartInfo.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + chartInfo.height + ")")
                .call(chartInfo.xAxis);

            // draw the x axis - tick marker text
            xAxis.selectAll("text")
                .attr("transform", "rotate(-45)")
                .style("text-anchor", "end");

            // draw the x axis - text label
            xAxis.append("text")
                .attr("class", "label")
                .attr("x", chartInfo.width)
                .attr("y", 60)
                .style("text-anchor", "end")
                .text(self.l("Year (beginning 1 April)"));
                
            xAxis.append("line")
                .attr("class", "zero-line")
                .attr("x1", 0)
                .attr("x2", chartInfo.width)
                .attr("y1", -131)
                .attr("y2", -131);

            // draw the legend
            var legend = chartInfo.svg.selectAll(".legend")
                .data(self.chartLegend1)
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i){
                    return "translate(" + (chartInfo.x(chartInfo.minX + i * 4.5)) + "," + (chartInfo.height + 50) + ")";
                });

            var shape = legend.append(function(d){
                    return document.createElementNS("http://www.w3.org/2000/svg", d.shape);
                });

            legend.selectAll("rect")
                .attr("width", self.chartLegend1IconSize)
                .attr("height", self.chartLegend1IconSize)
                .style("stroke-dasharray", self.chartLegend1IconSize / 8 + "," + self.chartLegend1IconSize /8);

            legend.selectAll("circle")
                .attr("cx", self.chartLegend1IconSize / 2)
                .attr("cy", self.chartLegend1IconSize / 2)
                .attr("r", self.chartLegend1IconSize / 2);

            legend.append("text")
                .text(function(d) { return self.l(d.text); })
                .attr("x", 25)
                .attr("y", self.chartLegend1IconSize / 2)
                .attr("dy", ".35em")
                .style("text-anchor", "start");

            // draw the y axis
            chartInfo.svg.append("g")
                .attr("class", "y axis")
                .call(chartInfo.yAxis)
                .append("text")
                .attr("class", "label")
                // .attr("transform", "rotate(-90)")
                .attr("x", -chartMargins.left + 10)
                // .attr("y", -chartMargins.left + 10)
                .attr("dy", ".71em")
                .style("text-anchor", "start")
                .text(self.l("%"));

            // draw the chart
            chartInfo.chart = chartInfo.svg.append("g")
                .attr("class", "chart");

                
            // Old chart - removed
            /*
            chartInfo.profile = chartInfo.chart.append("g")
                .attr("class", "profile");
                                
            // draw the area between the low and high line
            chartInfo.profile.append("path")
                .datum(chartInfo.data)
                .attr("class", "area")
                .attr("d", chartInfo.area);

            // draw the low line
            chartInfo.profile.append("path")
                .datum(chartInfo.data)
                .attr("class", "line low")
                .attr("d", chartInfo.lowLine);
                
            // draw the high line
            chartInfo.profile.append("path")
                .datum(chartInfo.data)
                .attr("class", "line high")
                .attr("d", chartInfo.highLine);
            */
            
            // draw the actual TSR points
            chartInfo.points = chartInfo.chart.selectAll(".point")
                .data(chartInfo.data)
                .enter()
                .append("g")
                .attr("class", "point");

            // draw boxplot
            chartInfo.points.append("rect")
                .attr("class", "boxplot")
                .attr("width", 34)
                .attr("height", function(d) {return chartInfo.y(d.low) - chartInfo.y(d.high); } )
                .attr("x", function(d) { return chartInfo.x(d.year) - 18; })
                .attr("y", function(d) { return chartInfo.y(d.high); });

            chartInfo.points.append("circle")
                .attr("class", "dot")
                .attr("r", function(d) { return (d.actual === null) ? 0 : 6; })
                .attr("cx", function(d) { return chartInfo.x(d.year); })
                .attr("cy", function(d) { return chartInfo.y(d.actual); });

            // draw the text labels for the TSR points
            chartInfo.points.append("text")
                .attr("class", "label")
                .text(function(d) { return (d.actual === null) ? "" : d.actual; })
                .attr("x", function(d) { return chartInfo.x(d.year); })
                .attr("y", function(d) { return chartInfo.y(d.actual) - 12; })
                .attr("text-anchor", "middle");

            // draw the vertical interaction line
            chartInfo.focus = chartInfo.svg.append("g")
                .attr("class", "focus")
                // .style("display", "none");

            // draw vertical interaction line - vertical background line
            chartInfo.focus.append("line")
                .attr("class", "line background")
                .attr("y1", 0)
                .attr("y2", chartInfo.height);

            // draw vertical interaction line - vertical line
            chartInfo.focus.append("line")
                .attr("class", "line volatility");

            // draw vertical interaction line - intersection with low line
            chartInfo.lowMarker = chartInfo.focus.append("g")
                .attr("class", "low_marker");

            // draw vertical interaction line - bottom arrow
            // the transform adjust the y position by min y + 2
            chartInfo.lowMarker.append("path")
                .attr("class", "arrow bottom")
                .attr("d", d3.symbol().type(d3.symbolTriangle).size(100))
                .attr("transform", "rotate(180)");

            // draw vertical interaction line - low intersection point text
            chartInfo.lowMarker.append("text")
                .attr("class", "label")
                .attr("dy", "1.5em")
                .attr("text-anchor", "middle");

            // draw vertical interaction line - intersection with high line
            chartInfo.highMarker = chartInfo.focus.append("g")
                .attr("class", "high_marker");

            // draw vertical interaction line - top arrow
            // the transform adjust the y position by max y - 2
            chartInfo.highMarker.append("path")
                .attr("class", "arrow top")
                .attr("d", d3.symbol().type(d3.symbolTriangle).size(100));

            // draw vertical interaction line - high intersection point text
            chartInfo.highMarker.append("text")
                .attr("class", "label")
                .attr("dy", "-0.8em")
                .attr("text-anchor", "middle");
                
            //Add extra text tooltip
            chartInfo.focus.append("text")
                .attr("class", "extratext")
                .attr("dy", "-0.8em")
                .attr("text-anchor", "middle")
                .text("");

            // define a rectangle region for mouse events
            var previousD = undefined;
            chartInfo.svg.append("rect")
                .attr("class", "overlay")
                .attr("width", chartInfo.width)
                .attr("height", chartInfo.height)
                .on("mouseover", function() { chartInfo.focus.style("display", null); })
                .on("mouseout", mouseout)
                .on("mousemove", mousemove);

            function updateToolTip(d){
                var volatility = self.l(d.volatility);
                self.tooltip.toolTipText.html(self.l("tooltip", d, volatility));
            }

            function updateVerticalInteractionLine(d) {
                // move the vertical interaction line
                chartInfo.focus.attr("transform", "translate(" + (chartInfo.x(d.year) - 10) + "," + 0 + ")");

                // update the position of the intersection point with low line
                chartInfo.lowMarker.select("text")
                    .attr("fill", self.volatilityColors[d.volatility])
                    .attr("text-anchor", d.markerAnchor || "middle")
                    .text(d.low);
                chartInfo.lowMarker.attr("transform", "translate(0," + chartInfo.y(d.low + 3) + ")");
                chartInfo.lowMarker.select(".arrow")
                    .attr("fill", self.volatilityColors[d.volatility])
                    .attr("stroke", self.volatilityColors[d.volatility]);

                // update the position of the intersection point with high line
                chartInfo.highMarker.select("text")
                    .attr("fill", self.volatilityColors[d.volatility])
                    .attr("text-anchor", d.markerAnchor || "middle")
                    .text(d.high);
                chartInfo.highMarker.attr("transform", "translate(0," + chartInfo.y(d.high - 3) + ")");
                chartInfo.highMarker.select(".arrow")
                    .attr("fill", self.volatilityColors[d.volatility])
                    .attr("stroke", self.volatilityColors[d.volatility]);

                // update the position of the low volatility line
                chartInfo.focus.select("line.volatility")
                    .attr("stroke", self.volatilityColors[d.volatility])
                    .attr("y1", chartInfo.y(d.low))
                    .attr("y2", chartInfo.y(d.high));
                    
                chartInfo.focus.select("text.extratext")
                    .attr("fill", self.volatilityColors[d.volatility])
                    .attr("y", chartInfo.y(d.high + 3))
                    .text(self.l(d.extraText));
            }

            function mouseout() {
                // chartInfo.focus.style("display", "none");
                previousD = undefined;
                // console.log(previousD);
            }

            function mousemove() {
                var x0 = chartInfo.x.invert(d3.mouse(this)[0]),
                    i = chartInfo.bisectYear(chartInfo.data, x0, 1);

                if (i >= chartInfo.data.length) {
                    return;
                }

                var d0 = chartInfo.data[i - 1],
                    d1 = chartInfo.data[i],
                    d = x0 - d0.year > d1.year - x0 ? d1 : d0;

                if (previousD !== d) {
                    previousD = d;
                    app.main.currentItemData = d;
                    self.updateChart2(d);
                }

                updateVerticalInteractionLine(d);
                updateToolTip(d);
            }

            app.main.chartInfo1 = chartInfo;
            updateVerticalInteractionLine(chartInfo.data[index]);
            updateToolTip(chartInfo.data[index]);
        },
        updateChart2: function(itemData){
            var self = this,
                duration = 250,
                currentItemData = self.currentItemData,
                chartInfo = self.chartInfo2;

            // update the bell curve
            // var printArr = itemData.bellData.map(function(item){
            //     return item.frequency;
            // });
            // console.log(currentItemData, printArr);

            var bellDataStruct = [{ values: itemData.bellData }];
            var selection = chartInfo.svg.selectAll(".bell")
                .data(bellDataStruct);

            selection.select("path.line")
                .transition()
                .duration(duration)
                .attr("d", function(d,i){
                    return chartInfo.bellCurve(d.values);
                });

            // update the clipping of the area under the bell curve
            selection.select("clipPath#clippedBell rect")
                .transition()
                .duration(duration)
                .attr("x", chartInfo.x(currentItemData.low))
                .attr("width", chartInfo.x(currentItemData.high) - chartInfo.x(currentItemData.low));

            // update the area under the bell curve
            selection.select("path.area")
                .transition()
                .duration(duration)
                .attr("fill", self.volatilityColors[currentItemData.volatility])
                .attr("d", function(d,i){
                    return chartInfo.area(d.values);
                })
                .attr("clip-path", "url(#clippedBell)");

            selection.select(".left_marker line")
                .transition()
                .duration(duration)
                .attr("x1", chartInfo.x(currentItemData.low))
                .attr("x2", chartInfo.x(currentItemData.low))
                .attr("y1", currentItemData.frequency_low);

            // update the left dotted line text marker
            selection.select(".left_marker text.label")
                .transition()
                .duration(duration)
                .attr("x", chartInfo.x(currentItemData.low))
                .attr("y", chartInfo.height)
                .text(currentItemData.low);

            // update the right dotted line under the bell curve
            selection.select(".right_marker line")
                .transition()
                .duration(duration)
                .attr("x1", chartInfo.x(currentItemData.high))
                .attr("x2", chartInfo.x(currentItemData.high))
                .attr("y1", currentItemData.frequency_high);

            // update the right dotted line text marker
            selection.select(".right_marker text.label")
                .transition()
                .duration(duration)
                .attr("x", chartInfo.x(currentItemData.high))
                .attr("y", chartInfo.height)
                .text(currentItemData.high);
        },
        drawChart2: function(bellData){
            var self = this,
                currentItemData = self.currentItemData,
                chartInfo = {},
                chartMargins = self.chartMargins2[$(window).width() < self.maxMobileWidth ? "narrow" : "wide"];

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

            // function for finding the value of y given x on the bell curve
            chartInfo.findY = function (chartInfo, path, x) {
                var pathEl = path.node(),
                    pathLength = pathEl.getTotalLength(),
                    // x = chartInfo.x(app.data.bellRange[0]),
                    beginning = chartInfo.x(app.data.bellRange[0]), end = pathLength;
                // console.log(pathLength, x, beginning, end);

                while (true) {
                    var target = Math.floor((beginning + end) / 2),
                        pos = pathEl.getPointAtLength(target);

                    // console.log(pathLength, x, beginning, end, target, pos.x, pos.y);

                    if ((target === end || target === beginning) && pos.x !== x) {
                        break;
                    }
                    if (pos.x > x) {
                        end = target;
                    } else if (pos.x < x) {
                        beginning = target;
                    } else {
                        break;
                    }
                }
                return pos.y;
            };

            // draw the svg
            d3.select(self.parentSelector).append("div")
                .attr("class", self.secondChartContainerClass)
            chartInfo.svgContainer = d3.select("." + self.secondChartContainerClass).append("svg")
                .attr("class", self.secondChartClass)
                // .attr("width", chartInfo.parentWidth)
                // .attr("height", chartInfo.parentHeight)
                .attr("viewBox", "0 0 " + chartInfo.parentWidth + " " + chartInfo.parentHeight)
                .attr("preserveAspectRatio", "xMidYMin slice");

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
                .text(self.l("Potential Portfolio Returns (%)"));

            // Original text style
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

            // draw the bell curve
            // var printArr = bellData.map(function(item){
            //     return item.frequency;
            // });
            // console.log(currentItemData, printArr);

            var bellDataStruct = [{ values: chartInfo.data[0].bellData }];
            var selection = chartInfo.svg.selectAll(".working")
                .data(bellDataStruct);

            var enterSelection = selection.enter().append("g")
                .attr("class", "working");

            enterSelection.append("path")
                .attr("class", "line")
                .attr("d", function(d){
                    return chartInfo.bellCurve(d.values);
                });

            chartInfo.data.forEach(function(d){
                var bellDataStruct = [{ values: d.bellData }];
                var selection = chartInfo.svg.selectAll(".working")
                    .data(bellDataStruct);

                selection.select(".working path.line")
                    .attr("d", function(d,i){
                        return chartInfo.bellCurve(d.values);
                    });

                d.frequency_low = chartInfo.findY(chartInfo, selection.select(".working path.line"), chartInfo.x(d.low));
                d.frequency_high = chartInfo.findY(chartInfo, selection.select(".working path.line"), chartInfo.x(d.high));
            });

            var bellDataStruct = [{ values: bellData }];
            var selection = chartInfo.svg.selectAll(".bell")
                .data(bellDataStruct)

            var enterSelection = selection.enter().append("g")
                .attr("class", "bell");
            enterSelection.append("path")
                .attr("class", "line")
                .attr("d", function(d){
                    return chartInfo.bellCurve(d.values);
                });

            // draw the clipped path
            enterSelection.append("clipPath")
                .attr("id", "clippedBell")
                .append("rect")
                .attr("x", chartInfo.x(currentItemData.low))
                .attr("y", 0)
                .attr("height", chartInfo.height)
                .attr("width", chartInfo.x(currentItemData.high) - chartInfo.x(currentItemData.low));

            // draw the area between the low and high line
            enterSelection.append("path")
                .attr("class", "area")
                .attr("fill", self.volatilityColors[currentItemData.volatility])
                .attr("d", function(d){
                    return chartInfo.area(d.values);
                })
                .attr("clip-path", "url(#clippedBell)");

            // draw dotted lines - left marker
            chartInfo.leftMarker = enterSelection.append("g")
                .attr("class", "left_marker");

            // draw dotted lines - left marker - dotted line
            chartInfo.leftMarker.append("line")
                .attr("class", "line left")
                .style("stroke-dasharray", ("4, 2"))
                .attr("x1", chartInfo.x(currentItemData.low))
                .attr("x2", chartInfo.x(currentItemData.low))
                .attr("y1", currentItemData.frequency_low)
                .attr("y2", chartInfo.height);

            // draw dotted lines - left marker - text
            chartInfo.leftMarker.append("text")
                .attr("class", "label")
                .attr("x", chartInfo.x(currentItemData.low))
                .attr("y", chartInfo.height)
                .text(currentItemData.low)
                .attr("dy", "-0.5em")
                .style("text-anchor", "middle");

            // draw dotted lines - right marker
            chartInfo.rightMarker = enterSelection.append("g")
                .attr("class", "right_marker");

            // draw dotted lines - right marker - dotted line
            chartInfo.rightMarker.append("line")
                .attr("class", "line right")
                .style("stroke-dasharray", ("4, 2"))
                .attr("x1", chartInfo.x(currentItemData.high))
                .attr("x2", chartInfo.x(currentItemData.high))
                .attr("y1", currentItemData.frequency_high)
                .attr("y2", chartInfo.height);

            // draw dotted lines - right marker - text
            chartInfo.rightMarker.append("text")
                .attr("class", "label")
                .attr("x", chartInfo.x(currentItemData.high))
                .attr("y", chartInfo.height)
                .text(currentItemData.high)
                .attr("dy", "-0.5em")
                .style("text-anchor", "middle");

            selection.exit().remove();

            app.main.chartInfo2 = chartInfo;
        }
    };
}



(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;
    app.main.start();

    // text = $('<span>', { 'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'top', 'title': self.translate(vslashr.data.footnotes[row.mod]) }).append(text);
    // var Tooltip = {
    //     initialize: function () {
    //         $('[data-toggle="tooltip"]').tooltipster({
    //             contentAsHTML: true,
    //             zIndex: 999,
    //             side: "bottom",
    //             distance: 3,
    //             maxWidth: 300,
    //             delay: 200,
    //             trigger: "custom",
    //             triggerOpen: {
    //                 mouseenter: true,
    //                 touchstart: true
    //             },
    //             triggerClose: {
    //                 mouseleave: true,
    //                 tap: true
    //             }
    //         });
    //     }
    // };
    // Tooltip.initialize();

})(jQuery);
