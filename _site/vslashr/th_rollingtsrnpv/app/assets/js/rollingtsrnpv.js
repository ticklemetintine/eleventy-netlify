// 20210625
"use strict";

var app = app || {};

if (! app.main) {
    app.main = {
        animationTimeline: null,
        disableAnimation: false,
        enablePortraitLock: true,
        firstTimeFlag: true,
        currentSelectedMenuItem: 2, // same as defaultSelectedMenuItem
        previousSelectedMenuItem: -1,
        defaultSelectedMenuItem: 2,
        currentTextIndex: 0,
        descriptionContainerId: "descriptionContainer",
        descriptionTextId: "descriptionText",
        mainContainerSelector: "#chart-container",
        menuContainerId: "menuContainer",
        parentSelector: "#chart",
        rotateContainerClass: "rotate",
        svgContainerClass: "svgContainer",
        svgSizeContainerClass: "svgSizeContainer",
        maxMobileWidth: 760,
        maxPortraitWidth: 450,
        originalWidth: 526,
        originalFontSize: 16,
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
            self.render();
            self.resize();
            $(window).on('orientationchange', function(){
                // console.log('orientationchange')
                self.resize();
            });
            $(window).resize(function() {
                // console.log('resize')
                self.resize();
            });
        },
        render: function(){
            var self = this;

            self.drawMenu();
            self.animateChart();
        },
        animateChart: function(){
            var self = this, 
                descriptionData = app.data.description,
                anim = self.animationTimeline = new TimelineLite();

            anim.set("svg.main g.chart ellipse.ellipse", {autoAlpha:0}, 0);
 
            //text animation
            anim.staggerFrom("#descriptionContainer p", 2.5, {autoAlpha:0}, 3, 0)
            // anim.staggerFrom("#descriptionContainer p", 2.5, {text:{value:"", delimiter:""}}, 3, 0)
                .staggerFrom("#menuContainer button", 0.5, {autoAlpha:0}, 0.3, 6)
                .from("#descriptionContainer button.arrow.down", 0.5, {autoAlpha:0}, 6);
                
            anim.staggerFrom("svg.main g.grid g.tick", 1, {autoAlpha:0, y:-30}, 0.2, 2);

            //axis animations
            anim.from("svg.main g.x.axis path.domain", 2, {drawSVG:"0% 0%"}, 1.5)
                .staggerFrom("svg.main g.x.axis g.tick", 0.5, {autoAlpha:0, y:5}, 0.04, 1.5)
                .staggerFrom("svg.main g.x.axis text.label", 0.5, {autoAlpha:0, y:5}, 0.5, 2.5)
                .staggerFrom("svg.main g.x.axis line.tooltipLine", 0.5, {autoAlpha:0}, 0.5, 3);
                
            anim.from("svg.main g.y.axis path.domain", 2, {drawSVG:"0% 0%"}, 1.5)
                .staggerFrom("svg.main g.y.axis g.tick", 0.5, {autoAlpha:0, x:-5}, 0.3, 1.5)
                .from("svg.main g.y.axis text.label", 0.5, {autoAlpha:0, x:-5}, 2.5)
                .from("svg.main g.y.axis text.title.bold", 0.5, {autoAlpha:0, x:-5}, 2.75);

            //event animations
            anim.staggerFrom("svg.main g.events g.event", 1, {autoAlpha:0}, 0.2, 4.5);

            //main chart animations
            anim.from("svg.main g.chart path.area", 1, {autoAlpha:0}, 3);
            
            //after rolling area is completely animated in, set the flag that allows update of x-axis tick color
            anim.from("svg.main g.chart path.rollingArea", 1, {autoAlpha:0, onComplete:function(){self.firstTimeFlag = false;}}, 6.5);

            anim.from("svg.main g.chart line.arrow", 1, {drawSVG:"50% 50%"}, 6.5)
                .from("svg.main g.chart path.left.arrowFill", 1, {autoAlpha:0}, 7)
                .from("svg.main g.chart path.right.arrowFill", 1, {autoAlpha:0}, 7);

            //side chart animations
            anim.from("svg.main g.side g.x.axis line", 1, {drawSVG:"0% 0%"}, 7)
                .from("svg.main g.side g.y.axis text", 1, {autoAlpha:0}, 7.25)
                .from("svg.main g.side text.title.bold", 1, {autoAlpha:0}, 7.5)
                .from("svg.main g.side g.legend", 1, {autoAlpha:0}, 7.75)
                .from("svg.main g.side g.chart path.line", 1, {drawSVG:"0% 0%"}, 7.5)
                .staggerFrom("svg.main g.side g.chart text", 0.5, {autoAlpha:0}, 0.05, 7.5);

            //focus and callout animation
            anim.from("svg.main g.focus", 1, {autoAlpha:0}, 7.5)
                .from("svg.main g.callout", 1, {autoAlpha:0}, 8.5);

            anim.duration(8);

            if (self.disableAnimation) {
                anim.seek(anim.duration(), false);
            }
        },
        resize: function(){
            // var self = app.main;
            var self = this;

            // update font scaling
            var fontSize = self.calculateFontSize(self.originalWidth, self.originalFontSize, $("#" + self.descriptionContainerId).width());
            // console.log(self.originalWidth + "," + self.originalFontSize + ";" + $("#" + self.descriptionContainerId).width() + "," + fontSize)
            // $("body").css("font-size", fontSize + "px");
            $("#" + self.descriptionContainerId).css("font-size", fontSize + "px");

            // check whether to show orientation detection screen
            var width = $(self.parentSelector).width();
            //console.log(width)

            if (self.enablePortraitLock) {
                if (width <= self.maxPortraitWidth) {
                    $("." + self.rotateContainerClass).show();
                } else {
                    $("." + self.rotateContainerClass).hide();
                }
            }
        },
        // getContainerSize: function(){
        //     var self = this, ret;
        //
        //     if (window.self !== window.parent) {
        //         var parentWidth = $(window.parent).width();
        //         ret = (parentWidth > self.maxMobileWidth) ? self.maxMobileWidth : parentWidth - 40;
        //         console.log("self != parent", parentWidth, ret)
        //     } else {
        //         ret = $(self.parentSelector).width();
        //         console.log("self = parent", ret)
        //     }
        //
        //     return ret;
        // },
        calculateFontSize: function(originalWidth, originalSize, currentWidth){
            var fontSize = currentWidth * originalSize / originalWidth;
            // console.log(originalWidth, originalSize, currentWidth, fontSize);
            return fontSize;
        },
        drawRotateOverlay: function(){
            var self = this;
            $(self.mainContainerSelector).append(
                $('<div>', { 'class': self.rotateContainerClass }).append(
                    $('<div>', { 'class': "rotate-content" }).append(
                        $('<p>').append(self.l("To see chart, please rotate your device to landscape."))
                    ).append(
                        $('<img>', { src: "assets/img/turn.png", alt: "" })
                    )
                )
            );
        },
        drawMenu: function(){
            var self = this, menuData = app.data.menu, descriptionData = app.data.description;

            // draw charts
            self.prepareChart(app.data);
            self.drawChart(app.data);

            // draw description
            var descriptionContainer = $('<div>', { id: self.descriptionContainerId });
            descriptionContainer.append(
                $('<button>', { 'class': 'arrow up' }).append(
                    $('<i>', { 'class': 'fa fa-arrow-up' })
                )
            );
            descriptionContainer.append(
                $('<div>', { id: self.descriptionTextId })
            );
            descriptionContainer.append(
                $('<button>', { 'class': 'arrow down' }).append(
                    $('<i>', { 'class': 'fa fa-arrow-down' })
                )
            );
            $(self.parentSelector).append(descriptionContainer);

            var upButton = $("#" + self.descriptionContainerId).find("button.up"),
                downButton = $("#" + self.descriptionContainerId).find("button.down"),
                descriptionText = $("#" + self.descriptionTextId);

            upButton.click(function(){
                var text = descriptionData[app.config.lang];
                self.currentTextIndex -= 1;
                if (self.currentTextIndex <= 0) {
                    self.currentTextIndex = 0;
                }
                updateDescriptionWidget();
            })

            downButton.click(function(){
                var text = descriptionData[app.config.lang];
                self.currentTextIndex += 1;
                if (self.currentTextIndex >= text.length) {
                    self.currentTextIndex = text.length - 1;
                }
                updateDescriptionWidget();

                var anim = new TimelineLite();

                if (self.disableAnimation) {
                    animationEnd();
                } else {
                    anim.to("svg.main g.chart ellipse.ellipse", 1, {autoAlpha: 1}, 0)
                        .to("svg.main g.chart ellipse.ellipse", 1, {autoAlpha: 0, onComplete: animationEnd}, 3);
                    anim.to("svg.main g.events g.event:nth-child(1)", 1, {autoAlpha:1}, 0);
                }

                //Need to initialize footnotes
                self.footnoteTooltip.initialize();
            })

            function animationEnd() {
                self.updateChart(app.data);
            }

            updateDescriptionWidget();

            function updateDescriptionWidget() {
                var text = descriptionData[app.config.lang];
                if (self.currentTextIndex == 0) {
                    upButton.hide();
                    downButton.show();
                } else if (self.currentTextIndex == text.length - 1) {
                    upButton.show();
                    downButton.hide();
                } else {
                    upButton.show();
                    downButton.show();
                }
                descriptionText.html(text[self.currentTextIndex]);
            }

            // draw menu
            $("#" + self.descriptionContainerId).append(
                $('<div>', { id: self.menuContainerId })
            );
            menuData.forEach(function(item, index){
                var button = $('<button>').text(self.l(item.buttonText));
                $("#" + self.menuContainerId).append(button);
            });

            $("#" + self.menuContainerId).find("button").click(function(){
                var index = $(this).index();
                $(this).siblings().css("background-color","#fff").css("color","#000");
                $(this).css("background-color",menuData[index].lineColor).css("color","#fff");

                self.previousSelectedMenuItem = self.currentSelectedMenuItem;
                self.currentSelectedMenuItem = index;
                self.updateChart(app.data);
            });

            // draw rotation overlay
            self.drawRotateOverlay();

            // click the first menu item
            $("#" + self.menuContainerId).find("button").eq(self.defaultSelectedMenuItem).click();

            // init tooltip
            self.footnoteTooltip.initialize();
        },
        prepareChart: function(data){
            var self = this, chartInfo = {},
                config = data.config, menu = data.menu, rollingData = data.rollingData;

            // prepare container
            var info = {
                parentWidth: config.charts.container.viewBoxWidth,
                parentHeight: config.charts.container.viewBoxHeight,
            }
            info.width = info.parentWidth - config.charts.container.left - config.charts.container.right;
            info.height = info.parentHeight - config.charts.container.top - config.charts.container.bottom;
            chartInfo.container = info;

            // prepare main
            info = {
                parentWidth: config.charts.main.viewBoxWidth,
                parentHeight: config.charts.main.viewBoxHeight,
            }
            info.width = info.parentWidth - config.charts.main.left - config.charts.main.right;
            info.height = info.parentHeight - config.charts.main.top - config.charts.main.bottom;
            chartInfo.main = info;

            // main - calculate the x values
            chartInfo.main.xAxisTickValues = [];
            chartInfo.main.data = rollingData;
            chartInfo.main.data.forEach(function(d){
                d.date = config.getX(d);
                chartInfo.main.xAxisTickValues.push(d.date);
            });

            // main - define the x axis
            var val = chartInfo.main.data[0].month - 6 + "/" + chartInfo.main.data[0].year;
            chartInfo.main.minX = config.xAxisParser(val);
            var index = chartInfo.main.data.length - 1;
            val = chartInfo.main.data[index].month + 6 + "/" + chartInfo.main.data[index].year;
            chartInfo.main.maxX = config.xAxisParser(val);
            chartInfo.main.x = d3.scaleTime()
                .range([0, chartInfo.main.width])
                // .domain(d3.extent(chartInfo.data, function(d){ return d.date; }));
                .domain([chartInfo.main.minX, chartInfo.main.maxX]);

            chartInfo.main.xAxis = d3.axisBottom()
                .scale(chartInfo.main.x)
                .tickValues(chartInfo.main.xAxisTickValues)
                .tickSizeOuter(0)
                .tickFormat(config.xAxisFormatter);

            // main - define the y axis
            chartInfo.main.y = d3.scaleLinear()
                .range([chartInfo.main.height, 0]);
            chartInfo.main.y.domain(config.charts.main.yAxisDomain);

            // main - define the y axis for display
            chartInfo.main.yDisplayed = d3.scaleLinear()
                .range([chartInfo.main.height * config.charts.main.heightScale, 0]);
            chartInfo.main.yDisplayed.domain(config.charts.main.yAxisDisplayedDomain);
            chartInfo.main.yAxisDisplayed = d3.axisLeft()
                .scale(chartInfo.main.yDisplayed)
                .tickValues(d3.range(config.charts.main.yAxisDisplayedDomain[0], config.charts.main.yAxisDisplayedDomain[1] + 50, 50));

            // main - define the horizontal grid lines
            chartInfo.main.yGridLines = d3.axisLeft(chartInfo.main.yDisplayed)
                .ticks(10)
                .tickSize(-chartInfo.main.width)
                .tickFormat("");

            // main - area generator
            chartInfo.main.areaGenerator = d3.area()
                .x(function(d) { return chartInfo.main.x(config.getX(d)); })
                .y0(chartInfo.main.height)
                .y1(function(d) { return chartInfo.main.y(config.charts.main.getY(d)); });

            chartInfo.main.rollingAreaGenerator = d3.area()
                .x(function(d) { return chartInfo.main.x(config.getX(d)); })
                .y0(chartInfo.main.height)
                .y1(function(d) { return chartInfo.main.y(config.charts.main.getY(d)); });

            // main - bisector
            chartInfo.main.bisectYear = d3.bisector(config.getX).left;

            // prepare side
            info = {
                parentWidth: config.charts.side.viewBoxWidth,
                parentHeight: config.charts.side.viewBoxHeight,
            }
            info.width = info.parentWidth - config.charts.side.left - config.charts.side.right;
            info.height = info.parentHeight - config.charts.side.top - config.charts.side.bottom;
            chartInfo.side = info;

            // side - calculate the x values
            // chartInfo.side.data = rollingData.filter(function(d){
            //     return 'rolling' in d;
            // });
            chartInfo.side.data = rollingData;

            // side - define the x axis
            // chartInfo.side.x = d3.scaleTime()
            //     .range([0, chartInfo.side.width])
            //     .domain(d3.extent(chartInfo.side.data, function(d){ return d.date; }));
            chartInfo.side.x = chartInfo.main.x;

            chartInfo.side.xAxis = d3.axisBottom()
                .scale(chartInfo.side.x)
                .ticks(0)
                .tickSizeOuter(0);
                
            // side - define the y axis
            chartInfo.side.y = d3.scaleLinear()
                .range([chartInfo.side.height, 0]);
            chartInfo.side.y.domain(config.charts.side.yAxisDomain);

            chartInfo.side.yAxis = d3.axisLeft()
                .scale(chartInfo.side.y)
                .tickValues([0])
                .tickSizeOuter(0);

            /*
            // side - line generator
            menu.forEach(function(item){
                item.lineGenerator = d3.line()
                    .defined(config.charts.side.defined)
                    .x(function(d) { return chartInfo.side.x(config.getX(d)); })
                    .y(function(d) { return chartInfo.side.y(item.getY(d)); });
            });
            */

            config.chartInfo = chartInfo;
        },
        updateInteraction: function(data) {
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main, side = chartInfo.side,
                selected = menu[self.currentSelectedMenuItem],
                d = main.data[main.currentIndex];

            // main - update rolling range index
            main.rollingAreaGenerator.defined(function(d,i){
                var index = main.currentIndex;
                return (i >= index - selected.range && i <= index);
            });
            main.chart.select("path.rollingArea")
                .attr("d", main.rollingAreaGenerator);

            var lowerIndex = main.currentIndex - selected.range,
                lowerD = main.data[lowerIndex],
                x1 = main.x(config.getX(lowerD)),
                x2 = main.x(config.getX(d)),
                triangleOffset = config.charts.main.bandArrowSize / 2;
            // console.log(lowerIndex, main.currentIndex, x1, x2, lowerD, d)

            // main - update callout
            var calloutYearPos = config.charts.main.calloutYearPos[app.config.lang],
                calloutWidth = config.charts.main.calloutWidth[app.config.lang],
                calloutX = (d.year < calloutYearPos) ? x2 + 20 : (x2 - calloutWidth - 20), 
                calloutY = main.height * 0.47;
            main.callout.attr("transform", "translate(" + calloutX + "," + calloutY + ")")

            // main - update callout text title
            main.calloutText.select("tspan.title")
                .text(self.l("calloutTitle", d.year));

            // main - update callout text rolling TSR title
            main.calloutText.select("tspan.rollingTSRTitle")
                .text(self.l(selected.calloutText));

            // main - update callout text rolling TSR value
            main.calloutText.select("tspan.rollingTSRValue")
                .text(d.rollingDisplayed[selected.calloutKey] + "%");

            // main - update callout text market value value
            main.calloutText.select("tspan.marketValueValue")
                .text(d.marketValueDisplayed + self.l("b"));
            
            if (self.firstTimeFlag == false) {
                // main - update x-axis year under indicator line
                main.xAxisSelector.selectAll(".tick text")
                    .style("fill","#000")
                    .style("font-weight", "normal");
                    
                // Select everything in a range of children, inclusive of ends. 
                // Note that array index from 0, and nth-child start from 1, so shifted by 2 
                var rangeIndex = [main.currentIndex  - selected.range + 2, main.currentIndex + 2];
                main.xAxisSelector.selectAll(".tick:nth-child(n+" + rangeIndex[0] + "):nth-child(-n+"+ rangeIndex[1] + ") text")
                    .style("fill", selected.lineColor)
                    .style("font-weight", "bold");
            }

            // main - update mouseover line
            main.focus.attr("transform", "translate(" + x2 + "," + 0 + ")");

            // main - update mouseover line actual line
            main.focus.select("line.pointer")
                .attr("stroke", selected.lineColor)
                // .attr("y1", main.y(selected.getY(d)))

            // main - update mouseover line top point
            main.focus.select("circle.top")
                .attr("fill", selected.lineColor)
                .attr("cy", side.y(selected.getY(d)));

            // main - update mouseover line bottom point
            main.focus.select("circle.bottom")
                .attr("fill", selected.lineColor)
                // .attr("cx", function(d) { return chartInfo.side.x(config.getX(d)); })
                .attr("cy", main.y(config.charts.main.getY(d)));

            // main - update band arrows line
            main.chart.select("line.arrow")
                .attr("x1", x1)
                .attr("x2", x2);

            // main - update band arrows left arrow
            var y = config.charts.main.bandYPos * main.height;
            main.chart.select("path.left")
                .attr("transform", "translate(" + (x1 + triangleOffset) + "," + y + ") rotate(-90)");

            // main - update band arrows right arrow
            main.chart.select("path.right")
                .attr("transform", "translate(" + (x2 - triangleOffset) + "," + y + ") rotate(90)");

            // main - show/hide events
            data.eventsData.forEach(function(item, itemIndex){
                var index = main.bisectYear(main.data, config.getX(item), 1),
                    toShow = (index >= lowerIndex && index <= main.currentIndex);
                main.events.select("g.event" + itemIndex)
                    .style("visibility", (toShow) ? "visible" : "hidden");
            });
        },
        updateChart: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main, side = chartInfo.side,
                selected = menu[self.currentSelectedMenuItem];

            // main - update rolling range (1, 10, 20)
            self.updateInteraction(data);

            // // main - update legend
            // main.legend.select("path")
            //     .style("fill", selected.lineColor);

            // side - update legend
            side.legend.select("rect")
                .transition()
                .duration(1000)
                .attr("fill", selected.lineColor)
                .attr("stroke", selected.lineColor);

            side.legend.select("text")
                .text(self.l(selected.legendText));

            main.chart.select("path.rollingArea")
                .style("fill", selected.lineColor);

            self.updateSideChart(data);
        },
        updateSideChart: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main, side = chartInfo.side,
                selected = menu[self.currentSelectedMenuItem],
                previous = menu[self.previousSelectedMenuItem];

            var pointsData = side.data.filter(function(d){
                return 'rolling' in d;
            });

            // lineGenerator function is now defined here
            var lineGenerator = d3.line()
                .defined(config.charts.side.defined)
                .x(function(d) { return side.x(config.getX(d)); })
                .y(function(d) { return side.y(selected.getY(d)); });
            var path = side.chart.selectAll("path");
            var points = side.chart.selectAll("text");

            // Data enter pattern
            path.data([side.data])
                .enter()
                .append("path")
                .attr("class", "line")
                .attr("d", lineGenerator)
                .style("stroke", selected.lineColor)
                .style("stroke-width", "2px");

            function positionLabel(x, y, bbox, pos) {
                switch (pos) {
                case 'e':
                    return { x: side.x(x) + 5, y: side.y(y), anchor: 'start' };
                    break;
                case 'n':
                    return { x: side.x(x), y: side.y(y) - bbox.height / 2 - 5, anchor: 'middle' };
                    break;
                case 's':
                    return { x: side.x(x), y: side.y(y) + bbox.height / 2 + 5, anchor: 'middle' };
                    break;
                case 'w':
                    return { x: side.x(x) - 5, y: side.y(y), anchor: 'end' };
                    break;
                case 'nw':
                    return { x: side.x(x), y: side.y(y) - bbox.height / 2, anchor: 'end' };
                    break;
                case 'sw':
                    return { x: side.x(x), y: side.y(y) + bbox.height / 2, anchor: 'end' };
                    break;
                }
            }

            points
                .data(pointsData)
                .enter()
                .append("text")
                .attr("class", "point")
                .text(function(d) { return config.xAxisSideFormatter(selected.getYDisplayed(d)); })
                .attr("dy", ".35em")
                .attr("text-anchor", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).anchor;
                })
                .attr("x", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).x;
                })
                .attr("y", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).y;
                });

            // Data update pattern
            path.transition()
                .duration(1000)
                .attr("d", lineGenerator)
                .style("stroke", selected.lineColor);
                
            points.transition()
                .duration(1000)
                .attr("text-anchor", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).anchor;
                })
                .attr("x", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).x;
                })
                .attr("y", function(d) {
                    var pos = selected.getPointPos(d);
                    pos = (pos === null) ? config.charts.side.pointPos : pos;
                    return positionLabel(config.getX(d), selected.getY(d), this.getBBox(), pos).y;
                })
                .on("start", function() {
                    d3.active(this)
                        .tween("text", function(d) {
                            var i = d3.interpolate(previous.getYDisplayed(d), selected.getYDisplayed(d)),
                            next = d3.select(this);
                            return function(t) {
                                next.text(config.xAxisSideFormatter(i(t)));
                            };
                        });
                });

            // Data exit pattern for completion
            path.data([side.data]).exit().remove();
            points.data(pointsData).exit().remove();
        },
        drawChart: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main, side = chartInfo.side;

            // draw the responsive containers for svg
            var aspectRatio = container.parentHeight / container.parentWidth * 100;
            d3.select(self.parentSelector).insert("div")
                .attr("class", self.svgSizeContainerClass);
            d3.select("." + self.svgSizeContainerClass).append("div")
                .attr("class", self.svgContainerClass)
                .style("padding-bottom", aspectRatio + "%");

            // draw container svg
            container.svgContainer = d3.select("." + self.svgContainerClass).append("svg")
                .attr("class", "responsive " + config.charts.container.chartClass)
                .attr("viewBox", "0 0 " + container.parentWidth + " " + container.parentHeight)
                .attr("preserveAspectRatio", "xMidYMid meet");

            // draw main svg
            main.svgContainer = container.svgContainer.append("svg")
                .attr("class", config.charts.main.chartClass)
                .attr("width", main.parentWidth)
                .attr("height", main.parentHeight)
                // .attr("viewBox", "0 0 " + main.parentWidth + " " + main.parentHeight)
                // .attr("preserveAspectRatio", "xMidYMid meet");

            main.svg = main.svgContainer.append("g")
                .attr("transform", "translate(" + config.charts.main.left + "," + config.charts.main.top + ")");

            // main - draw the horizontal grid lines
            main.yGridLinesSelector = main.svg.append("g")
                .attr("class", "grid")
                .attr("transform", "translate(0," + (main.height * (1 - config.charts.main.heightScale)) + ")")
                .call(main.yGridLines);

            // main - draw the x axis
            main.xAxisSelector = main.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + main.height + ")")
                .call(main.xAxis);

            // main - draw the x axis text label
            main.xAxisSelector.append("text")
                .attr("class", "label")
                .attr("x", main.width)
                .attr("y", "2.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(self.l("Financial Year"));

            // main - draw additional x axis labels
            // offset from 12/1975 by 5 months => 08/1975
            main.xAxisSelector.append("text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", self.l("Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards."))
                .attr("x", main.x(config.xAxisParser("08/1975")))
                .attr("y", "2.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("December"));

            var xVal = main.x(config.xAxisParser("08/1975"));
            main.xAxisSelector.append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 38 : 70);
                })
                .attr("y1", "5em")
                .attr("y2", "5em");

            // offset from 03/1994 by 5 months => 11/1993
            main.xAxisSelector.append("text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", self.l("Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards."))
                .attr("x", main.x(config.xAxisParser("11/1993")))
                .attr("y", "2.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("March"));

            xVal = main.x(config.xAxisParser("11/1993"));
            main.xAxisSelector.append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 28 : 48);
                })
                .attr("y1", "5em")
                .attr("y2", "5em");

            // main - draw the y axis for displayed
            main.yAxisDisplayedSelector = main.svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(0," + (main.height * (1 - config.charts.main.heightScale)) + ")")
                .call(main.yAxisDisplayed);

            // main - draw the y axis text label
            main.yAxisDisplayedSelector.append("text")
                .attr("class", "label")
                .attr("x", "-2em")
                .attr("y", "-1.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("(in S$ billion)"));

            // main - draw the title
            main.yAxisDisplayedSelector.append("text")
                .attr("class", "title bold")
                .attr("x", "-2em")
                .attr("y", "-3em")
                .attr("dy", ".35em")
                .attr("text-anchor", "start")
                .text(self.l("Temasek Net Portfolio Value since Inception"));

            // main - draw the chart
            main.chart = main.svg.append("g")
                .attr("class", "chart");

            // main - draw the area
            main.area = main.chart.append("path")
                .datum(main.data)
                .attr("class", "area")
                .attr("d", main.areaGenerator);

            // main - draw the rolling area
            main.chart.append("path")
                .datum(main.data)
                .attr("class", "rollingArea");

            // main - draw band arrows line
            var y = config.charts.main.bandYPos * main.height;
            main.chart.append("line")
                .attr("class", "arrow")
                .attr("y1", y)
                .attr("y2", y);

            var triangle = d3.symbol().type(d3.symbolTriangle).size(function(){
                return config.charts.main.bandArrowSize * config.charts.main.bandArrowSize / 2;
            });

            // main - draw band arrows left arrow
            main.chart.append("path")
                .attr("class", "left arrowFill")
                .attr("d", triangle);

            // main - draw band arrows right arrow
            main.chart.append("path")
                .attr("class", "right arrowFill")
                .attr("d", triangle);

            // main - draw events container
            main.events = main.svg.append("g")
                .attr("class", "events")

            // main - draw callout circle for animation
            var cxVal = config.xAxisParser("03/1994"),
                index = main.bisectYear(main.data, cxVal, 1),
                cyVal = main.data[index].marketValue;
            main.chart.append("ellipse")
                .attr("class", "ellipse")
                .attr("cx", main.x(cxVal))
                .attr("cy", main.y(cyVal))
                .attr("rx", 30)
                .attr("ry", 50);
                
            // main - draw events event container
            data.eventsData.forEach(function(item, itemIndex){
                var index = main.bisectYear(main.data, config.getX(item), 1),
                    y = item.yOffset * main.height;
                var event = main.events.append("g")
                    .attr("class", "event event" + itemIndex)
                    .attr("transform", "translate(" + main.x(config.getX(item)) + ",0)");
                    
                event.append("line")
                    .attr("class", "line")
                    .attr("y1", y)
                    .attr("y2", main.y(item.marketValue) - 10);

                event.append("text")
                    .attr("class", "label")
                    // .attr("dy", ".35em")
                    .attr("text-anchor", function(d) { return item.anchor; })
                    .attr("font-weight", function() { return item.fontWeight })
                    .text(function(d) { return self.l(item.event); })
                    .attr("y", y - 5);
            });

            // side.svg = side.svgContainer.append("g")
            side.svg = main.svg.append("g")
                .attr("class", config.charts.side.chartClass)

            // side - draw the x axis
            side.xAxisSelector = side.svg.append("g")
                .attr("class", "x axis")
                .append("line")
                .attr("x1", side.x(config.xAxisParser("06/2002")))
            // Get last year of data!
                .attr("x2", side.x(config.xAxisParser("09/" + main.data[main.data.length - 1].year)))
                .attr("y1", side.y(config.charts.main.yAxisDomain[0]))
                .attr("y2", side.y(config.charts.main.yAxisDomain[0]));

            // side - draw the y axis
            side.yAxisSelector = side.svg.append("g")
                .attr("class", "y axis")
                .append("text")
                .attr("x", side.x(config.xAxisParser("03/2002")))
                .attr("y", side.y(config.charts.main.yAxisDomain[0]))
                .attr("dy", ".35em")
                .attr("text-anchor", "end")
                .text("0");

            // side - draw the title
            side.svg.append("text")
                .attr("class", "title bold")
                .attr("text-anchor", "start")
                .attr("x", side.x(config.xAxisParser("12/2001")))
                .attr("dy", ".35em")
                .text(self.l("Rolling S$ Total Shareholder Return (%)"));

            // side - draw the chart
            side.chart = side.svg.append("g")
                .attr("class", "chart");

            /*
            // side - draw the lines
            side.lines = {};
            menu.forEach(function(item){
                // side - draw the line container
                var g = side.chart.append("g")
                    .attr("class", "year " + item.lineClass);
                side.lines[item.lineClass] = g;

                // side - draw the line
                var path = g.append("path")
                    .datum(chartInfo.side.data)
                    .attr("class", "line")
                    .attr("d", item.lineGenerator);

                // side - draw the points container
                var points = g.selectAll(".point")
                    .data(chartInfo.side.data.filter(function(d){
                        return 'rolling' in d;
                    }))
                    .enter()
                    .append("g")
                    .attr("class", "point");

                // side - draw the points
                // points.append("circle")
                //     .attr("class", "dot")
                //     .attr("r", function(d) { return 3; })
                //     .attr("cx", function(d) { return chartInfo.side.x(config.getX(d)); })
                //     .attr("cy", function(d) { return chartInfo.side.y(item.getY(d)); });

                // side - draw the points labels
                points.append("text")
                    .attr("class", "label")
                    .attr("text-anchor", "middle")
                    .text(function(d) { return item.getYDisplayed(d); })
                    .attr("dy", ".35em")
                    .attr("x", function(d) { return chartInfo.side.x(config.getX(d)); })
                    .attr("y", function(d) {
                        var val = item.getY(d);
                        return (val >= 0) ? chartInfo.side.y(val) - 5 : chartInfo.side.y(val) + 15;
                    });
            });
            */

            // side - draw the legend
            side.legend = side.svg.append("g")
                .attr("class", "legend")
                .attr("transform", "translate(" + (chartInfo.side.width * 0.9) + ",0)");

            side.legend.append("rect")
                .attr("width", config.legendSize.width)
                .attr("height", config.legendSize.height);

            side.legend.append("text")
                .attr("x", config.legendSize.width + 5)
                .attr("dy", ".35em")
                .style("text-anchor", "start");

            // main - draw callout container
            main.callout = main.svg.append("g")
                .attr("class", "callout")

            // main - draw callout background
            var calloutWidth = config.charts.main.calloutWidth[app.config.lang];
            main.callout.append("rect")
                .attr("class", "background")
                .attr("x", -10)
                .attr("y", -20)
                .attr("rx", 10)
                .attr("ry", 10)
                .attr("width", calloutWidth + 20)
                .attr("height", 98);

            // main - draw callout text
            main.calloutText = main.callout.append("text")
                .attr("class", "label")
                .attr("y", 7)
                .attr("text-anchor", "start");

            // main - draw callout text title
            main.calloutText.append("tspan")
                .attr("class", "title bold")
                .text("title");

            // main - draw callout text rolling TSR title
            main.calloutText.append("tspan")
                .attr("class", "rollingTSRTitle")
                .attr("x", "0")
                .attr("dy", "1.6em");

            // main - draw callout text rolling TSR value
            main.calloutText.append("tspan")
                .attr("class", "rollingTSRValue bold")
                .attr("x", calloutWidth)
                .attr("text-anchor", "end");

            // main - draw callout text market value title
            main.calloutText.append("tspan")
                .attr("class", "marketValueTitle")
                .attr("x", "0")
                .attr("dy", "1.6em")
                .text(self.l("Market value"));

            // main - draw callout text market value value
            main.calloutText.append("tspan")
                .attr("class", "marketValueValue bold")
                .attr("x", calloutWidth)
                .attr("text-anchor", "end");

            // main - draw mouseover line container
            main.focus = main.svg.append("g")
                .attr("class", "focus")

            // main - draw mouseover line actual line
            // mouseover line based on domain instead of always starting at 0
            main.focus.append("line")
                .attr("class", "line pointer")
                .attr("y1", 0.05 * main.height)
                .attr("y2", main.y(config.charts.main.yAxisDomain[0]));

            // main - draw mouseover line top point
            main.focus.append("circle")
                .attr("class", "point top")
                .attr("r", config.charts.main.pointSize / 2)

            // main - draw mouseover line bottom point
            main.focus.append("circle")
                .attr("class", "point bottom")
                .attr("r", config.charts.main.pointSize / 2)

            // main - define a rectangle region for mouse events
            var mouseStartXValue = config.xAxisParser("03/2002");
            main.minIndex = main.bisectYear(main.data, mouseStartXValue, 1);
            main.svg.append("rect")
                .attr("class", "overlay")
                .attr("width", main.width - main.x(mouseStartXValue))
                .attr("height", main.height)
                .attr("x", main.x(mouseStartXValue))
                // .on("mouseover", function() { chartInfo.focus.style("display", null); })
                // .on("mouseout", function(){
                //     // chartInfo.focus.style("display", "none");
                // })
                .on("mousemove", function(){
                    var x0 = main.x.invert(d3.mouse(this)[0]),
                        i = main.bisectYear(main.data, x0, 1);

                    if (i >= main.data.length || i <= main.minIndex) {
                        return;
                    }

                    if (main.currentIndex) {
                        if (main.currentIndex != i) {
                            main.currentIndex = i;
                        } else {
                            return;
                        }
                    } else {
                        // if undefined
                        main.currentIndex = i;
                    }

                    self.updateInteraction(data);
                });

            main.currentIndex = config.initialIndex;
            // self.updateInteraction(data);
        },
        footnoteTooltip: {
            initialize: function () {
                $('[data-toggle="tooltip"]:not(.tooltipstered)').tooltipster({
                    contentAsHTML: true,
                    zIndex: 999,
                    side: "bottom",
                    // distance: 3,
                    maxWidth: 300,
                    // minWidth: (app.config.lang === 'en') ? 270 : 230,
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
        }
    };
}



(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;

    app.main.start();

})(jQuery);
