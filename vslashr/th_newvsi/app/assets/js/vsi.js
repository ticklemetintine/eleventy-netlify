// 20210703
"use strict";

var app = app || {};

if (! app.main) {
    app.main = {
        clickMenuFirstTime: false,
        currentSelectedMenuItem: -1,
        defaultSelectedMenuItem: 0,
        descriptionContainerId: "descriptionContainer",
        descriptionTextId: "descriptionText",
        disableAnimation: false,
        enablePortraitLock: true,
        introTimeline: new TimelineLite(),
        mainContainerSelector: "#chart-container",
        menuContainerId: "menu-container",
        menuId: "menu",
        maxMobileWidth: 760,
        maxPortraitWidth: 450,
        originalWidth: 1024,
        originalFontSize: 16,
        parentSelector: "#chart",
        rotateContainerClass: "rotate",
        svgContainerClass: "svgContainer",
        svgSizeContainerClass: "svgSizeContainer",
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
        },
        animateIntro: function(){
            var self = this, anim = self.introTimeline;
            var chart1 = "svg .chart1";

            //text animation
            anim.staggerFrom("#" + self.descriptionContainerId + " p", 1, {autoAlpha:0}, 1.5, 0)

            anim.staggerFrom(chart1 + " g.grid g.tick", 1, {autoAlpha:0, y:-30}, 0.2, 1);

            //axis animations
            anim.from(chart1 + " g.x.axis path.domain", 2, {drawSVG:"0% 0%"}, 0.5)
                .staggerFrom(chart1 + " g.x.axis g.tick", 0.5, {autoAlpha:0, y:5}, 0.04, 0.5);

            anim.from(chart1 + " g.y.axis path.domain", 2, {drawSVG:"0% 0%"}, 0.5)
                .staggerFrom(chart1 + " g.y.axis g.tick", 0.5, {autoAlpha:0, x:-5}, 0.3, 0.5)
                .from(chart1 + " g.y.axis text.label", 0.5, {autoAlpha:0, x:-5}, 1.5);

            anim.staggerFrom(chart1 + " g.parallel line", 1.5, {autoAlpha:0}, 0.5, 1);
            anim.from(chart1 + " g.parallel path", 1.5, {autoAlpha:0}, 0.5);

            //event animations
            anim.staggerFrom(chart1 + " g.events g.event", 1, {autoAlpha:0}, 0.2, 3.5);

            //main chart animations
            anim.from(chart1 + " g.chart path.marketValueArea", 1, {scaleY:0, transformOrigin:"50% 100%", autoAlpha:0}, 2);
            anim.from(chart1 + " g.chart path.shareholderEquityArea", 1, {scaleY:0, transformOrigin:"50% 100%", autoAlpha:0}, 3);
            anim.from(chart1 + " g.chart path.shareholderFVR", 1, {autoAlpha: 0}, 4);

            //legend animations
            anim.staggerFrom(chart1 + " g.legend g path", 0.5, {y:5, autoAlpha:0}, 0.2, 2);
            anim.staggerFrom(chart1 + " g.legend g text", 0.5, {y:5, autoAlpha:0}, 0.2, 2.25);
            anim.staggerFrom(chart1 + " g.legend g line.tooltipLine", 0.5, {y:5, autoAlpha:0}, 0.2, 2.5);

            //focus and callout animation
            anim.from(chart1 + " g.focus", 1, {autoAlpha:0}, 5)
                .from(chart1 + " g.callout", 1, {autoAlpha:0}, 5.5);

            anim.duration(8);
        },
        resize: function(){
            // var self = app.main;
            var self = this;

            // update font scaling
            // var fontSize = self.calculateFontSize(self.originalWidth, self.originalFontSize, $("#" + self.descriptionContainerId).width());
            var fontSize = self.calculateFontSize(self.originalWidth, self.originalFontSize, $("body").width());
            var debugText = self.originalWidth + ", " + self.originalFontSize + "; " + $("body").width() + ", " + fontSize;
            // console.log(debugText)
            $("body").css("font-size", fontSize + "px");
            // $("#" + self.descriptionContainerId).css("font-size", fontSize + "px");
            // $("#" + self.menuContainerId).css("font-size", fontSize + "px");

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
        calculateFontSize: function(originalWidth, originalSize, currentWidth){
            var fontSize = currentWidth * originalSize / originalWidth;
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
            var self = this, menuData = app.data.menu, descriptionData = app.data.description,
                config = app.data.config

            // draw charts
            self.prepareChartContainer(app.data);
            self.prepareChartMain(app.data);
            self.prepareChartSecond(app.data);
            self.drawChartContainer(app.data);
            self.drawChartMain(app.data);
            self.drawChartSecond(app.data);

            // draw menu
            $("#" + self.menuContainerId).append(
                $('<ul>', { id: self.menuId })
            );
            menuData.forEach(function(item, index){
                var button = $('<li>').text(self.l(item.buttonText));
                $("#" + self.menuId).append(button);
            });

            var anim = new TimelineLite();
            self.prepareAnimation(anim);

            $("#" + self.menuId).find("li").click(function(){
                var index = $(this).index();

                // don't activate the same menu item
                if (self.currentSelectedMenuItem == index) {
                    return;
                }

                $(this).siblings().removeClass("selected");
                $(this).addClass("selected");

                self.currentSelectedMenuItem = index;

                var descriptionText = $("#" + self.descriptionTextId),
                    menuItem = menuData[self.currentSelectedMenuItem];

                // update description
                descriptionText.html(self.l(menuItem.description));

                var chartInfo = config.chartInfo, container = chartInfo.container;

                var textAnim = new TimelineLite();

                if (! self.clickMenuFirstTime) {
                    self.clickMenuFirstTime = true;

                    // show only one of the charts
                    container.svgContainer.selectAll('.main').style("visibility", "hidden");
                    container.svgContainer.select("." + menuItem.target).style("visibility", "visible");

                    if (self.disableAnimation) {
                        self.introTimeline.seek(self.introTimeline.duration(), false);
                    } else {
                        self.animateIntro();
                    }
                } else {
                    // need to reset visibility property for subsequent transitions
                    container.svgContainer.selectAll('.main').style("visibility", "visible")

                    if (self.introTimeline.progress() < 1) {
                        self.introTimeline.seek(self.introTimeline.duration(), false);
                    }

                    
                    if (self.currentSelectedMenuItem == 0) {
                        if (self.disableAnimation) {
                            anim.seek(0, false);
                        } else {
                            textAnim.staggerFrom("#" + self.descriptionContainerId + " p", 1, {autoAlpha:0}, 1.5, 0);
                            anim.reverse(0);
                        }
                        
                    } else if (self.currentSelectedMenuItem == 1) {
                        if (self.disableAnimation) {
                            anim.seek(anim.duration(), false);
                        } else {
                            textAnim.staggerFrom("#" + self.descriptionContainerId + " p", 1, {autoAlpha:0}, 1, 0);
                            textAnim.staggerFrom("#" + self.descriptionContainerId + " ul li", 1, {autoAlpha:0}, 0.5, 4);
                            anim.restart();
                        }
                    }
                }

                // Footnote tooltips need to be initialized every time menu is clicked.
                // self.footnoteTooltip.initialize();
            });

            // draw description
            var descriptionContainer = $('<div>', { id: self.descriptionContainerId });
            descriptionContainer.append(
                $('<div>', { id: self.descriptionTextId })
            );
            $(self.parentSelector).append(descriptionContainer);

            // draw rotation overlay
            self.drawRotateOverlay();

            // attach tooltip events
            self.footnoteTooltip.initialize.call(self);

            // click the first menu item
            $("#" + self.menuId).find("li").eq(self.defaultSelectedMenuItem).click();
        },
        prepareAnimation: function(anim){
            var chart1 = "svg .chart1";
            var chart2 = "svg .chart2";

            /* Set chart elements to be opaque at beginning */
            anim.set(chart2 + " g.chart path.marketValueArea", {opacity:0}, 0);
            anim.set(chart2 + " g.chart path.rollingArea", {opacity:0}, 0);

            anim.set(chart2 + " g.y.axis", {opacity:0}, 0)
                .set(chart2 + " g.grid", {opacity:0}, 0)
                .set(chart2 + " g.focus", {opacity:0}, 0)
                .set(chart2 + " g.callout", {opacity:0}, 0)
                .set(chart2 + " g.arrowGroup", {opacity:0}, 0)
                .set(chart2 + " g.x.axis path", {autoAlpha:0}, 0)
                .set(chart2 + " g.x.axis g.tick", {opacity:0}, 0)
                .set(chart2 + " g.x.axis text.label", {opacity:0}, 0)
                .set(chart2 + " g.axisLabels text", {opacity:0}, 0)
                .set(chart2 + " g.legend g path", {opacity:0}, 0)
                .set(chart2 + " g.legend g text", {opacity:0}, 0)
                .set(chart2 + " g.legend g path", {opacity:0}, 0)
                .set(chart2 + " g.events g.event", {opacity:0}, 0);

            anim.set(chart2 + " g.chart path.marketValueArea", {autoAlpha:0}, 0);
            anim.set(chart2 + " g.grid", {autoAlpha:0}, 0);
            anim.set(chart2 + " g.events g.event", {autoAlpha:0}, 0);
            
            anim.set(chart2 + " g.x.axis path", {opacity:0}, 0);

            anim.to(chart1 + " g.chart path.marketValueArea.base", 2, {autoAlpha:0}, 1)
                .to(chart1 + " g.chart path.shareholderEquityArea", 2, {autoAlpha:0}, 0.5)
                .to(chart1 + " g.chart path.shareholderFVR", 2, {autoAlpha:0}, 0)
                .to(chart1 + " g.chart path.marketValueArea.anim", 1.5, {morphSVG:chart2 + " g.chart path.marketValueArea"}, 2.5);

            //animate parallel lines
            anim.staggerTo(chart1 + " g.parallel line", 0.5, {autoAlpha:0}, 0.25, 0.5);
            anim.to(chart1 + " g.parallel path", 0.5, {autoAlpha:0}, 0.5);

            //event animations
            anim.staggerTo(chart1 + " g.events g.event", 1.1, {autoAlpha:0, x:"-=200"}, 0.2, 1);
            anim.staggerFrom(chart2 + " g.events g.event", 1.1, {x: "+=50"}, 0.2, 3);
            anim.staggerTo(chart2 + " g.events g.event", 1.1, {autoAlpha:1}, 0.2, 3);

            //y-tick scaling animations
            anim.staggerTo(chart1 + " g.grid g.tick", 1, {scaleX:0.62, transformOrigin:"0% 50%"}, 0.2, 2);

            //focus and callout animation fadeout
            anim.to(chart1 + " g.focus", 0.75, {autoAlpha:0}, 0.5)
                .to(chart1 + " g.callout", 0.75, {autoAlpha:0}, 1);

            //axis animations
            anim.to(chart1 + " g.x.axis path.domain", 1.75, {scaleX:0.62, transformOrigin:"0% 50%"}, 2.5)
                .staggerTo(chart1 + " g.x.axis g.tick", 0.5, {autoAlpha:0, x:-10}, 0.05, 1)
                .staggerTo(chart1 + " g.axisLabels text", 0.5, {autoAlpha:0, x:-10}, 0.5, 2.5)
                .staggerTo(chart1 + " g.axisLabels line.tooltipLine", 0.5, {autoAlpha:0}, 0.5, 3);

            anim.staggerTo(chart2 + " g.x.axis g.tick", 0.5, {autoAlpha:1}, 0.05, 2.8)
                .staggerFrom(chart2 + " g.x.axis g.tick", 0.5, {x:"+=20"}, 0.05, 2.8)
                .to(chart2 + " g.x.axis text.label", 0.5, {autoAlpha:1, x:-5}, 3.25);
                
            anim.set(chart1 + " g.y.axis", {autoAlpha: 0}, 4);
            anim.set(chart2 + " g.y.axis", {autoAlpha: 1}, 4);

            //legend animations
            anim.staggerTo(chart1 + " g.legend g path", 0.5, {y:5, autoAlpha:0}, 0.2, 3)
                .staggerTo(chart1 + " g.legend g text", 0.5, {y:5, autoAlpha:0}, 0.2, 3.25)
                .staggerTo(chart1 + " g.legend g line.tooltipLine", 0.5, {y:5, autoAlpha:0}, 0.2, 3.5);

            anim.to(chart2 + " g.legend g path", 0.5, {y:5, autoAlpha:1}, 4)
                .to(chart2 + " g.legend g text", 0.5, {y:5, autoAlpha:1}, 4.25);

            anim.to(chart2 + " g.chart path.rollingArea", 1, {autoAlpha: 1}, 4.5)
                .to(chart2 + " rect.overlay", 0, {"pointer-events":"visible"}, 4.5);

            //focus and callout animation fadein
            anim.to(chart2 + " g.focus", 1, {autoAlpha:1}, 4.5)
                .to(chart2 + " g.arrowGroup", 0.75, {autoAlpha:1}, 4.75)
                .to(chart2 + " g.callout", 0.75, {autoAlpha:1}, 5);

            //focus and callout animation fadein

            anim.pause();
        },
        prepareChartContainer: function(data){
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

            config.chartInfo = chartInfo;
        },
        prepareChartMain: function(data){
            var self = this, chartInfo = {},
                config = data.config, menu = data.menu, rollingData = data.rollingData, chartInfo = config.chartInfo;

            // prepare main
            var info = {
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
            // -6 to give some offset to the left of 1974
            var val = chartInfo.main.data[0].month - 6 + "/" + chartInfo.main.data[0].year;
            chartInfo.main.minX = config.xAxisParser(val);

            var index = chartInfo.main.data.length - 1;
            // +6 to give some offset to the right of the current year
            val = chartInfo.main.data[index].month + 6 + "/" + chartInfo.main.data[index].year;
            chartInfo.main.maxX = config.xAxisParser(val);
            chartInfo.main.x = d3.scaleTime()
                .range([0, chartInfo.main.width])
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
            chartInfo.main.marketValue = d3.area()
                .x(function(d) { return chartInfo.main.x(config.getX(d)); })
                .y0(chartInfo.main.height)
                .y1(function(d) { return chartInfo.main.y(d.marketValue); });

            chartInfo.main.shareholderEquity = d3.area()
                .x(function(d) { return chartInfo.main.x(config.getX(d)); })
                .y0(chartInfo.main.height)
                .y1(function(d) { return chartInfo.main.y(d.shareholderEquity); });

            chartInfo.main.shareholderFVR = d3.line()
                .x(function(d) { return chartInfo.main.x(config.getX(d)); })
                .y(function(d) { return chartInfo.main.y(d.shareholderFVR); });

            // main - bisector
            chartInfo.main.bisectYear = d3.bisector(config.getX).left;

            // config.chartInfo = chartInfo;
        },
        prepareChartSecond: function(data){
            var self = this, chartInfo = {},
                config = data.config, menu = data.menu, rollingData = data.rollingData, chartInfo = config.chartInfo;

            // prepare second
            var info = {
                parentWidth: config.charts.second.viewBoxWidth,
                parentHeight: config.charts.second.viewBoxHeight,
            }
            info.width = info.parentWidth - config.charts.second.left - config.charts.second.right;
            info.height = info.parentHeight - config.charts.second.top - config.charts.second.bottom;
            chartInfo.second = info;

            // main - calculate the x values
            chartInfo.second.xAxisTickValues = [];
            chartInfo.second.data = rollingData.filter(function (d) { return d.year >= 2002; });
            chartInfo.second.data.forEach(function(d){
                d.date = config.getX(d);
                chartInfo.second.xAxisTickValues.push(d.date);
            });

            // main - define the x axis
            var val = chartInfo.second.data[0].month + "/" + chartInfo.second.data[0].year;
            chartInfo.second.minX = config.xAxisParser(val);

            var index = chartInfo.second.data.length - 1;
            val = chartInfo.second.data[index].month + "/" + chartInfo.second.data[index].year;

            chartInfo.second.maxX = config.xAxisParser(val);
            chartInfo.second.x = d3.scaleTime()
                .range([0, chartInfo.second.width])
                .domain([chartInfo.second.minX, chartInfo.second.maxX]);

            chartInfo.second.xAxis = d3.axisBottom()
                .scale(chartInfo.second.x)
                .tickValues(chartInfo.second.xAxisTickValues)
                .tickSizeOuter(0)
                .tickFormat(config.xAxisFormatter);

            // main - define the y axis
            chartInfo.second.y = d3.scaleLinear()
                .range([chartInfo.second.height, 0]);
            chartInfo.second.y.domain(config.charts.second.yAxisDomain);

            // main - define the y axis for display
            chartInfo.second.yDisplayed = d3.scaleLinear()
                .range([chartInfo.second.height * config.charts.second.heightScale, 0]);
            chartInfo.second.yDisplayed.domain(config.charts.second.yAxisDisplayedDomain);
            chartInfo.second.yAxisDisplayed = d3.axisLeft()
                .scale(chartInfo.second.yDisplayed)
                .tickValues(d3.range(config.charts.second.yAxisDisplayedDomain[0], config.charts.second.yAxisDisplayedDomain[1] + 50, 50));

            // main - define the horizontal grid lines
            chartInfo.second.yGridLines = d3.axisLeft(chartInfo.second.yDisplayed)
                .ticks(5)
                .tickSize(-chartInfo.second.width)
                .tickFormat("");

            // main - area generator
            chartInfo.second.marketValue = d3.area()
                .x(function(d) { return chartInfo.second.x(config.getX(d)); })
                .y0(chartInfo.second.height)
                .y1(function(d) { return chartInfo.second.y(d.marketValue); });

            chartInfo.second.rollingArea = d3.area()
                .x(function(d) { return chartInfo.second.x(config.getX(d)); })
                .y0(chartInfo.second.height)
                .y1(function(d) { return chartInfo.second.y(d.marketValue); });

            // main - bisector
            chartInfo.second.bisectYear = d3.bisector(config.getX).left;

            // config.chartInfo = chartInfo;
        },
        updateInteractionMain: function(data) {
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main,
                selected = menu[self.currentSelectedMenuItem],
                d = main.data[main.currentIndex];

            // main - update callout
            var calloutYearPos = config.charts.main.calloutYearPos[app.config.lang], 
                calloutWidth, calloutHeight;

            var formatInteger = d3.format("d");
            
            if (d.year >= 2006) {

                calloutWidth = config.charts.main.calloutWidth[app.config.lang][0],
                calloutHeight = config.charts.main.calloutHeight[app.config.lang][0];

                main.callout.select("rect")
                    .attr("width", calloutWidth + 20)
                    .attr("height", calloutHeight);

                main.callout.selectAll("circle")
                    .attr("r",  config.charts.main.pointSize / 2)

                main.calloutText.select("tspan.title")
                    .text(self.l("calloutTitle", d.month, d.year));

                main.calloutText.select("tspan.marketValueTitle")
                    .text(self.l("Market value"));

                main.calloutText.select("tspan.marketValueValue")
                    .attr("x", calloutWidth)
                    .text(formatInteger(d.marketValue) + self.l("b"));

                main.calloutText.select("tspan.shareholderEquityTitle")
                    .text(self.l("Shareholder equity"));

                main.calloutText.select("tspan.shareholderEquityValue")
                    .attr("x", calloutWidth)
                    .text(formatInteger(d.shareholderEquity) + self.l("b"));

                main.calloutText.select("tspan.shareholderEquityFVRTitle")
                    .text(self.l("Shareholder equity2"));

                main.calloutText.select("tspan.shareholderEquityFVRTitle2")
                    .text(self.l("mark to market movement"));

                main.calloutText.select("tspan.shareholderEquityFVRValue")
                    .attr("x", calloutWidth)
                    .text(formatInteger(d.shareholderFVR) + self.l("b"));

            } else if (d.year >= 2002 && d.year <= 2005){

                calloutWidth = config.charts.main.calloutWidth[app.config.lang][1];
                calloutHeight = config.charts.main.calloutHeight[app.config.lang][1];

                main.callout.select("rect")
                    .attr("width", calloutWidth + 20)
                    .attr("height", calloutHeight);

                main.calloutText.selectAll("tspan").text("");
                
                main.callout.select("circle.point.marketValueColor")
                    .attr("r", config.charts.main.pointSize / 2);

                main.callout.select("circle.point.shareholderEquityColor")
                    .attr("r", function() { return config.charts.main.pointSize / 2});
                    
                main.callout.select("circle.point.shareholderFVRColor")
                    .attr("r", 0);

                main.calloutText.select("tspan.title")
                    .text(self.l("calloutTitle", d.month, d.year));

                main.calloutText.select("tspan.marketValueTitle")
                    .text(self.l("Market value"));

                main.calloutText.select("tspan.marketValueValue")
                    .attr("x", calloutWidth)
                    .text(formatInteger(d.marketValue) + self.l("b"));

                main.calloutText.select("tspan.shareholderEquityTitle")
                    .text(self.l("Shareholder equity"));

                main.calloutText.select("tspan.shareholderEquityValue")
                    .attr("x", calloutWidth)
                    .text(formatInteger(d.shareholderEquity) + self.l("b"));

            } else {

                calloutWidth = config.charts.main.calloutWidth[app.config.lang][2];
                calloutHeight = config.charts.main.calloutHeight[app.config.lang][2];

                main.callout.select("rect")
                    .attr("width", calloutWidth + 20)
                    .attr("height", calloutHeight);

                main.callout.selectAll("circle")
                    .attr("r", 0)

                main.calloutText.selectAll("tspan").text("");

                main.calloutText.select("tspan.title")
                .text(self.l("calloutTitle", d.month, d.year));
            }

            var calloutX = (d.year < calloutYearPos) ? main.x(config.getX(d)) + 20 : (main.x(config.getX(d)) - calloutWidth - 20), 
                calloutY = main.height * 0.7;
            main.callout.attr("transform", "translate(" + calloutX + "," + calloutY + ")")

            // main - update mouseover line
            main.focus.attr("transform", "translate(" + main.x(config.getX(d)) + "," + 0 + ")");

            // main - update mouseover line points
            main.focus.select("circle.marketValueColor")
                .attr("cy", main.y(d.marketValue));
                
            main.focus.select("circle.shareholderEquityColor")
                .attr("cy", main.y(d.shareholderEquity));

            main.focus.select("circle.shareholderFVRColor")
                .attr("cy", main.y(d.shareholderFVR));
        },
        updateInteractionSecond: function(data) {
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.second,
                selected = menu[self.currentSelectedMenuItem],
                d = main.data[main.currentIndex];

            //update rolling range index
            main.rollingArea.defined(function(d,i){
                var index = main.currentIndex;
                return (i >= index);
            });

            main.chart.select("path.rollingArea")
                .attr("d", main.rollingArea);

            var lastItem = main.data[main.data.length - 1];
            var x1 = main.x(config.getX(d)),
                x2 = main.x(config.xAxisParser(lastItem.month + "/" + lastItem.year)),
                triangleOffset = config.charts.second.bandArrowSize / 2,
                y = config.charts.second.bandYPos * main.height;

            // main - update band arrows line
            main.chart.select("g.arrowGroup line.arrow")
                .attr("x1", x1)
                .attr("x2", x2);

            // main - update band arrows left arrow
            main.chart.select("g.arrowGroup path.left")
                .attr("transform", "translate(" + (x1 + triangleOffset) + "," + y + ") rotate(-90)");

            // main - update band arrows right arrow
            main.chart.select("g.arrowGroup path.right")
                .attr("transform", "translate(" + (x2 - triangleOffset) + "," + y + ") rotate(90)");
                
            // main - updatearrow band text
            main.chart.select("g.arrowGroup text.arrowText")
                .attr("transform", "translate(" + ((x1 + x2)/2) + "," + (y - 20) + ")")
                .text(function() {
                    // Calculate year difference in the data set
                    var years = main.data[main.data.length - 1].year - main.data[0].year - main.currentIndex;
                    return self.l("years", years);
                });

            main.calloutText.select("tspan.year-text")
                .text(self.l(d.year));

            // second - update x-axis year under indicator line
            main.xAxisSelector.selectAll(".tick").classed("selected", false);

            // Select everything in a range of children, inclusive of ends. 
            // Note that array index from 0, and nth-child start from 1, so shifted by 2 
            var rangeIndex = [main.currentIndex + 2, main.data.length + 1];
            main.xAxisSelector.selectAll(".tick:nth-child(n+" + rangeIndex[0] + "):nth-child(-n+"+ rangeIndex[1] + ")")
                .classed("selected", true);

            var format = d3.format(",d");

            main.calloutText.select("tspan.TSR-text")
                .text(self.l("calloutSecondDollar", format(d.TSR)));
            main.calloutText.select("tspan.MSCISG-text")
                .text(self.l("calloutSecondDollar", format(d.MSCISG)));
            main.calloutText.select("tspan.MSCIAsiaExJapan-text")
                .text(self.l("calloutSecondDollar", format(d.MSCIAsiaExJapan)));
            main.calloutText.select("tspan.MSCIWorld-text")
                .text(self.l("calloutSecondDollar", format(d.MSCIWorld)));

            // main - update mouseover line
            main.focus.attr("transform", "translate(" + main.x(config.getX(d)) + "," + 0 + ")");

            // main - update mouseover line bottom point
            main.focus.select("circle.bottom")
                .attr("cy", main.y(d.marketValue))
                .style("class", "marketValueColor");
        },
        drawChartContainer: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container;

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
        },
        drawChartMain: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.main;

            // draw main svg
            main.svgContainer = container.svgContainer.append("svg")
                .attr("class", config.charts.main.chartClass)
                .attr("width", main.parentWidth)
                .attr("height", main.parentHeight);

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
            var axisLabels = main.xAxisSelector.append("g")
                .attr("class", "axisLabels");

            axisLabels.append("text")
                .attr("class", "label")
                .attr("x", main.width)
                .attr("y", "2.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "end")
                .text(self.l("Financial Year"));

            //1974 tooltip
            d3.select("g.x.axis .tick text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("title", self.l("Incorporation of Temasek on 25 June 1974."))
                .attr("data-placement", "top");

            var xVal = main.x(config.xAxisParser("03/1991"));
            d3.select("g.x.axis .tick").append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 20 : 20);
                })
                .attr("y1", "2.5em")
                .attr("y2", "2.5em");

            /*
            //1975 tooltip
            d3.select("g.x.axis .tick:nth-child(3) text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("title", self.l("Financial year 75 began on 25 June 1974 and ended 31 December 1975."))
                .attr("data-placement", "top");

            d3.select("g.x.axis .tick:nth-child(3)").append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 20 : 20);
                })
                .attr("y1", "2.5em")
                .attr("y2", "2.5em");
            */
            
            
            var xVal = main.x(config.xAxisParser("03/1991"));
            
            // 1994 tooltip
            d3.select("g.x.axis .tick:nth-child(5) text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("title", self.l("Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards."))
                .attr("data-placement", "top");

            d3.select("g.x.axis .tick:nth-child(5)").append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 20 : 20);
                })
                .attr("y1", "2.5em")
                .attr("y2", "2.5em");
            
            //main" replace "91" with "74" for display - this is a hack
            // as chopping up the scale and making it work is even more problematic
            d3.select("g.x.axis .tick text").text("74");
            
            //main: delete second tick - 1992 June - this is a hack
            // as chopping up the scale and making it work is even more problematic
            d3.select("g.x.axis .tick:nth-child(3)").remove();

            // main - draw additional x axis labels
            // offset from 12/1975 by 5 months => 08/1975
            
            /*
            axisLabels
                .append("text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", self.l("Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards."))
                .attr("x", main.x(config.xAxisParser("08/1975")))
                .attr("y", "2.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("December"));

            // draw the underline for tooltip for December
            var xVal = main.x(config.xAxisParser("08/1975"));

            axisLabels.append("line")
                .attr("class", "tooltipLine")
                .attr("x1", xVal)
                .attr("x2", function(){
                    return xVal + ((app.config.lang == "zh") ? 35 : 80);
                })
                .attr("y1", "5em")
                .attr("y2", "5em");
            */
            
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
            // main.yAxisDisplayedSelector.append("text")
                // .attr("class", "title bold")
                // .attr("x", "-2em")
                // .attr("y", "-3em")
                // .attr("dy", ".35em")
                // .attr("text-anchor", "start")
                // .text(self.l("Net Portfolio Value since Inception"));

            // main - draw the chart
            main.chart = main.svg.append("g")
                .attr("class", "chart");

            // main - draw marketValue
            main.chart.append("path")
                .datum(main.data)
                .attr("class", "marketValueArea base")
                .attr("d", main.marketValue);

            //Draw 2nd chart overlay for animation
            main.chart.append("path")
                .datum(main.data.filter(function (d) {return d.year >= 2002}))
                .attr("class", "marketValueArea anim")
                .attr("d", main.marketValue);
                
            // main - draw shareholderEquity
            main.chart.append("path")
                .datum(main.data)
                .attr("class", "shareholderEquityArea")
                .attr("d", main.shareholderEquity);

            // main - draw shareholderFVR
            main.chart.append("path")
                .datum(main.data.filter(function (d) {return d.year <= 2006}))
                .attr("class", "shareholderFVR")
                .attr("d", main.shareholderFVR);
                
            // main - draw shareholderFVR
            main.chart.append("path")
                .datum(main.data.filter(function (d) {return d.year >= 2006}))
                .attr("class", "shareholderFVR dotted")
                .attr("d", main.shareholderFVR);

            // main - draw events container
            main.events = main.svg.append("g")
                .attr("class", "events");
                
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

                //split text into 2 tspan lines
                var eventText = event.append("text")
                    .attr("class", "label")
                    // .attr("dy", ".35em")
                    .attr("text-anchor", function() { return item.anchor; })
                    .attr("font-weight", function() { return item.fontWeight })
                    .attr("y", y - 5);
                    
                eventText.append("tspan")
                    .attr("x", 0)
                    .attr("dy", -16)
                    .text(function() { return self.l(item.event); });
                eventText.append("tspan")
                    .attr("x", 0)
                    .attr("dy", 16)
                    .text(function() { return self.l(item.event1); });
            });

            /* extra parallel lines */
            main.parallel = main.svg.append("g")
                .attr("class", "parallel")
                .attr("transform", "translate(0," + main.height + ")");

            main.parallel.append("path")
                    .attr("d", "M27,12 34,12 44,-12, 37,-12Z");

            main.parallel.append("line")
                    .attr("x1", 27)
                    .attr("x2", 37)
                    .attr("y1", 12)
                    .attr("y2", -12);

            main.parallel.append("line")
                    .attr("x1", 34)
                    .attr("x2", 44)
                    .attr("y1", 12)
                    .attr("y2", -12);


            /* LEGEND */
            // main - draw legend container
            main.legend = main.svg.append("g")
                .attr("class", "legend")
                .attr("transform", "translate(" + main.x(config.xAxisParser("12/1991")) + "," + (main.height + 70) + ")");

            // main - draw legend shape
            var circle = d3.symbol().type(d3.symbolCircle).size(function(){
                return config.charts.main.legendShapeSize * config.charts.main.legendShapeSize / 2;
            });

            main.legend.g1 = main.legend.append("g");

            main.legend.g1.append("path")
                .attr("d", circle)
                .attr("class", "marketValueColor");

            main.legend.g1.append("text")
                .text(self.l("Market value"))
                .attr("x", config.charts.main.legendShapeSize * 0.75)
                .attr("dy", ".35em")
                .style("text-anchor", "start");

            main.legend.g2 = main.legend.append("g")
                .attr("transform", "translate(" + main.x(config.xAxisParser("12/1997")) + ", 0)");

            main.legend.g2.append("path")
                .attr("d", circle)
                .attr("class", "shareholderEquityColor");

            main.legend.g2.append("text")
                .text(self.l("Shareholder equity"))
                .attr("x", config.charts.main.legendShapeSize * 0.75)
                .attr("dy", ".35em")
                .style("text-anchor", "start");

            main.legend.g3 = main.legend.append("g")
                .attr("transform", "translate(" + main.x(config.xAxisParser("12/2005")) + ", 0)");

            main.legend.g3.append("path")
                .attr("d", circle)
                .attr("class", "shareholderFVRColor");

            main.legend.g3.append("text")
                .attr("class", "label")
                .attr("data-toggle", "tooltip")
                .attr("data-placement", "top")
                .attr("title", self.l("From the financial year ended 31 March 2006, the accounting standards require sub-20% investments to be marked to market."))
                .attr("x", config.charts.main.legendShapeSize * 0.75)
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("Shareholder equity excluding mark to market movement"));

            d3.select("g.legend g:nth-child(3)").append("line")
                .attr("class", "tooltipLine")
                .attr("x1", 15)
                .attr("x2", function(){
                    return (app.config.lang == "zh") ? 210 : 442;
                })
                .attr("y1", "0.7em")
                .attr("y2", "0.7em");
                
            /* CALLOUT */
            // main - draw callout container
            main.callout = main.svg.append("g")
                .attr("class", "callout")

            // main - draw callout background
            var calloutWidth = config.charts.main.calloutWidth[app.config.lang][0],
                calloutHeight = config.charts.main.calloutHeight[app.config.lang][0];
            main.callout.append("rect")
                .attr("class", "background")
                .attr("x", -10)
                .attr("y", -20)
                .attr("rx", 10)
                .attr("ry", 10)
                .attr("width", calloutWidth + 20)
                .attr("height", calloutHeight);

            main.callout.append("circle")
                .attr("class", "point marketValueColor")
                .attr("cx", 10)
                .attr("cy", 30)
                .attr("r", config.charts.main.pointSize / 2)

            main.callout.append("circle")
                .attr("class", "point shareholderEquityColor")
                .attr("cx", 10)
                .attr("cy", 60)
                .attr("r", config.charts.main.pointSize / 2)

            main.callout.append("circle")
                .attr("class", "point shareholderFVRColor")
                .attr("cx", 10)
                .attr("cy", 100)
                .attr("r", config.charts.main.pointSize / 2)

            main.calloutText = main.callout.append("text")
                .attr("class", "label")
                .attr("y", 7)
                .attr("text-anchor", "start");

            main.calloutText.append("tspan")
                .attr("class", "title bold")
                .text("title");

            main.calloutText.append("tspan")
                .attr("class", "marketValueTitle")
                .attr("x", "25")
                .attr("dy", "1.6em");

            main.calloutText.append("tspan")
                .attr("class", "marketValueValue bold")
                .attr("x", calloutWidth)
                .attr("text-anchor", "end");

            main.calloutText.append("tspan")
                .attr("class", "shareholderEquityTitle")
                .attr("x", "25")
                .attr("dy", "1.6em");

            main.calloutText.append("tspan")
                .attr("class", "shareholderEquityValue bold")
                .attr("x", calloutWidth)
                .attr("text-anchor", "end");

            main.calloutText.append("tspan")
                .attr("class", "shareholderEquityFVRTitle")
                .attr("x", "25")
                .attr("dy", "1.6em");

            main.calloutText.append("tspan")
                .attr("class", "shareholderEquityFVRTitle2")
                .attr("x", "25")
                .attr("dy", "1.1em");

            main.calloutText.append("tspan")
                .attr("class", "shareholderEquityFVRValue bold")
                .attr("x", calloutWidth)
                .attr("dy", "-0.4em")
                .attr("text-anchor", "end");

            // main - draw mouseover line container
            main.focus = main.svg.append("g")
                .attr("class", "focus")

            // main - draw mouseover line actual line
            // mouseover line based on domain instead of always starting at 0
            main.focus.append("line")
                .attr("class", "line pointer")
                .attr("y1", config.charts.main.indicatorLineHeightStartY * main.height)
                .attr("y2", main.y(config.charts.main.yAxisDomain[0]));

            // main - draw mouseover line bottom point
            main.focus.append("circle")
                .attr("class", "point marketValueColor")
                .attr("r", config.charts.main.pointSize / 2);

            main.focus.append("circle")
                .attr("class", "point shareholderEquityColor")
                .attr("r", config.charts.main.pointSize / 2);

            main.focus.append("circle")
                .attr("class", "point shareholderFVRColor")
                .attr("r", config.charts.main.pointSize / 2);
            
            // main - define a rectangle region for mouse events
            var firstItem = main.data[2], lastItem = main.data[main.data.length - 1];
            var mouseStartXValue = config.xAxisParser(firstItem.month + "/" + firstItem.year);
            var mouseEndXValue = config.xAxisParser(lastItem.month + "/" + lastItem.year);
            main.svg.append("rect")
                .attr("class", "overlay")
                .attr("width", main.x(mouseEndXValue) - main.x(mouseStartXValue))
                .attr("height", main.height)
                .attr("x", main.x(mouseStartXValue))
                .on("mousemove", function(){
                    var x0 = main.x.invert(d3.mouse(this)[0]),
                        i = main.bisectYear(main.data, x0, 1);

                    var d0 = config.xAxisParser(main.data[i - 1].month  + "/" + main.data[i - 1].year);
                    var d1 = config.xAxisParser(main.data[i].month + "/" + main.data[i].year);

                    if (x0 - d0 > d1 - x0) {
                        main.currentIndex = i
                    } else {
                        main.currentIndex = i - 1
                    }

                    self.updateInteractionMain(data);
                })
            .on("mouseleave", function(d) {
                d3.select("g.callout").style("visibility", "hidden");
                d3.select("g.focus").style("visibility", "hidden");
            })
            .on("mouseenter", function(d) {
                d3.select("g.callout").style("visibility", "visible");
                d3.select("g.focus").style("visibility", "visible");
            });

            main.currentIndex = config.charts.main.initialIndex;
            self.updateInteractionMain(data);
        },
        drawChartSecond: function(data){
            var self = this, config = data.config, menu = data.menu,
                chartInfo = config.chartInfo,
                container = chartInfo.container, main = chartInfo.second;

            // draw main svg
            main.svgContainer = container.svgContainer.append("svg")
                .attr("class", config.charts.second.chartClass)
                .attr("width", main.parentWidth)
                .attr("height", main.parentHeight)
                // .attr("viewBox", "0 0 " + main.parentWidth + " " + main.parentHeight)
                // .attr("preserveAspectRatio", "xMidYMid meet");

            main.svg = main.svgContainer.append("g")
                .attr("transform", "translate(" + config.charts.second.left + "," + config.charts.second.top + ")");

            // main - draw the horizontal grid lines
            main.yGridLinesSelector = main.svg.append("g")
                .attr("class", "grid")
                .attr("transform", "translate(0," + (main.height * (1 - config.charts.second.heightScale)) + ")")
                .call(main.yGridLines);
                
            // main - draw the chart
            main.chart = main.svg.append("g")
                .attr("class", "chart");

            // main - draw marketValue
            main.chart.append("path")
                .datum(main.data.filter(function (d) {return d.year >= 2002}))
                .attr("class", "marketValueArea")
                .attr("d", main.marketValue);

            // main - draw the rolling area
            main.chart.append("path")
                .datum(main.data.filter(function (d) {return d.year >= 2002}))
                .attr("class", "rollingArea")
                .attr("d", main.marketValue);
                
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

            // main - draw the y axis for displayed
            main.yAxisDisplayedSelector = main.svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(0," + (main.height * (1 - config.charts.second.heightScale)) + ")")
                .call(main.yAxisDisplayed);

            // main - draw the y axis text label
            main.yAxisDisplayedSelector.append("text")
                .attr("class", "label")
                .attr("x", "-2em")
                .attr("y", "-1.5em")
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("(in S$ billion)"));
                                
            // main - draw band arrows line
            var y = config.charts.second.bandYPos * main.height;
            var arrowGroup = main.chart.append("g")
                .attr("class", "arrowGroup");
                
            arrowGroup.append("line")
                .attr("class", "arrow")
                .attr("y1", y)
                .attr("y2", y);

            var triangle = d3.symbol().type(d3.symbolTriangle).size(function(){
                return config.charts.second.bandArrowSize * config.charts.second.bandArrowSize / 2;
            });

            // main - draw band arrows left arrow
            arrowGroup.append("path")
                .attr("class", "left arrowFill")
                .attr("d", triangle);

            // main - draw band arrows right arrow
            arrowGroup.append("path")
                .attr("class", "right arrowFill")
                .attr("d", triangle);
                
            arrowGroup.append("text")
                .attr("class", "arrowText")
                .attr("dy", ".35em")
                .style("text-anchor", "middle");
                
            // main - draw events container
            main.events = main.svg.append("g")
                .attr("class", "events");
                
            // main - draw events event container
            var chartEvents = data.eventsData.filter(function (d) {return d.year > 2002});
            
            chartEvents.forEach(function(item, itemIndex){
                var index = main.bisectYear(main.data, config.getX(item), 1),
                    y = item.yOffset * main.height;
                var event = main.events.append("g")
                    .attr("class", "event event" + itemIndex)
                    .attr("transform", "translate(" + main.x(config.getX(item)) + ",0)");

                event.append("line")
                    .attr("class", "line")
                    .attr("y1", y)
                    .attr("y2", main.y(item.marketValue) - 10);

                var eventText = event.append("text")
                    .attr("class", "label")
                    // .attr("dy", ".35em")
                    .attr("text-anchor", function() { return item.anchor; })
                    .attr("y", y - 5);
                    
                eventText.append("tspan")
                    .attr("x", 0)
                    .attr("dy", -16)
                    .text(function() { return self.l(item.event); });
                eventText.append("tspan")
                    .attr("x", 0)
                    .attr("dy", 16)
                    .text(function() { return self.l(item.event1); });
            });

            /* LEGEND */
            // main - draw legend container
            main.legend = main.svg.append("g")
                .attr("class", "legend")
                .attr("transform", "translate(" + main.x(config.xAxisParser("03/2003")) + "," + (main.height + 50) + ")");

            // main - draw legend shape
            var circle = d3.symbol().type(d3.symbolCircle).size(function(){
                return config.charts.second.legendShapeSize * config.charts.second.legendShapeSize / 2;
            });

            main.legend.g1 = main.legend.append("g");

            main.legend.g1.append("path")
                .attr("d", circle)
                .attr("class", "rollingArea");

            main.legend.g1.append("text")
                .attr("x", config.charts.second.legendShapeSize * 0.75)
                .attr("dy", ".35em")
                .style("text-anchor", "start")
                .text(self.l("Temasek net portfolio value by market value"));

            /* CALLOUT */
            // main - draw callout container
            main.callout = main.svg.append("g")
                .attr("class", "callout")

            // main - position the callout
            var calloutWidth = config.charts.second.calloutWidth[app.config.lang],
                calloutHeight = config.charts.second.calloutHeight[app.config.lang],
                calloutX = main.width + 40,
                calloutY = main.height * 0.6;
            main.callout.attr("transform", "translate(" + calloutX + "," + calloutY + ")")

            // main - draw callout background
            main.callout.append("rect")
                .attr("class", "background")
                .attr("x", -10)
                .attr("y", -20)
                .attr("rx", 10)
                .attr("ry", 10)
                .attr("width", calloutWidth + 20)
                .attr("height", calloutHeight);

            main.calloutText = main.callout.append("text")
                .attr("class", "label")
                .attr("y", 7)
                .attr("text-anchor", "start");

            app.data.calloutText.forEach(function(d) {
                main.calloutText.append("tspan")
                    .attr("class", d.class)
                    .attr("x", function(){
                        if (d.partOfLine === true) {
                            return;
                        } else {
                            if (d.anchor == undefined || d.anchor == "start") {
                                return 0;
                            } else if (d.anchor == "end") {
                                return calloutWidth;
                            }
                        }
                    })
                    .attr("dy", function(){
                        return (d.dy == undefined) ? "0em" : d.dy
                    })
                    .attr("text-anchor", function(){
                        return (d.anchor == undefined) ? "start" : d.anchor;
                    })
                    .text(self.l(d.text));
            });

            // main - draw mouseover line container
            main.focus = main.svg.append("g")
                .attr("class", "focus")

            // main - draw mouseover line actual line
            // mouseover line based on domain instead of always starting at 0
            // main.focus.append("line")
                // .attr("class", "line pointer")
                // .attr("y1", config.charts.second.indicatorLineHeightStartY * main.height)
                // .attr("y2", main.y(config.charts.second.yAxisDomain[0]));

            // main - draw mouseover line bottom point
            main.focus.append("circle")
                .attr("class", "point bottom rollingArea")
                .attr("r", config.charts.second.pointSize / 2)

            // main - define a rectangle region for mouse events
            var firstItem = main.data[0], lastItem = main.data[main.data.length - 1];
            var mouseStartXValue = config.xAxisParser(firstItem.month + "/" + firstItem.year);
            var mouseEndXValue = config.xAxisParser(lastItem.month + "/" + lastItem.year);
            main.minIndex = main.bisectYear(main.data, mouseStartXValue, 0);
            main.svg.append("rect")
                .attr("class", "overlay")
                .attr("width", main.x(mouseEndXValue) - main.x(mouseStartXValue))
                .attr("height", main.height)
                .attr("x", main.x(mouseStartXValue))
                .on("mousemove", function(){
                    var x0 = main.x.invert(d3.mouse(this)[0]),
                        i = main.bisectYear(main.data, x0, 1);

                        //ignore last data point for bisector - always pick second last point
                        var years = main.data[main.data.length - 1].year - main.data[0].year;
                        
                        if (i < (years) + 1)  {
                            main.currentIndex = i - 1
                        } else {
                            return;
                        }

                    self.updateInteractionSecond(data);
                });

            main.currentIndex = config.charts.second.initialIndex;
            self.updateInteractionSecond(data);
        },
        footnoteTooltip: {
            initialize: function () {
                var self = this;
                $(self.mainContainerSelector).on('mouseenter', '[data-toggle="tooltip"]:not(.tooltipstered)', function(e){
                    $(e.target).tooltipster({
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
                    }).tooltipster('open');
                });

                // $('[data-toggle="tooltip"]').tooltipster({
                //     contentAsHTML: true,
                //     zIndex: 999,
                //     side: "bottom",
                //     // distance: 3,
                //     maxWidth: 300,
                //     // minWidth: (app.config.lang === 'en') ? 270 : 230,
                //     delay: 200,
                //     trigger: "custom",
                //     triggerOpen: {
                //         mouseenter: true,
                //         touchstart: true
                //     },
                //     triggerClose: {
                //         mouseleave: true,
                //         tap: true
                //     }
                // });
            }
        }
    };
}



(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;

    app.main.start();

})(jQuery);
