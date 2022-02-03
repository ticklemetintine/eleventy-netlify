// 20210626
"use strict";

var app = app || {};

if (! app.main) {
    app.main = {
        animationTimeline: null,
        disableAnimation: false,
        enablePortraitLock: true,
        showRectGuide: false,
        mainContainerSelector: "#chart-container",
        parentSelector: "#chart",
        menuContainer: "#menu-container", 
        descriptionContainer: "#description-container",
        currentSelectedMenuItem: 0,
        maxMobileWidth: 760,
        maxPortraitWidth: 450,
        originalWidth: 960,
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
        viewPortRatio: function(chartInfo, chartMargins){
            var self = app.main,
            parentWidth = $(self.parentSelector).width() * chartMargins.width;
            return parentWidth / chartInfo.parentWidth;
        },
        start: function(){
            var self = this;
            $(window).on('orientationchange', function(){
                // console.log('orientationchange');
                self.resize();
            });
            $(window).resize(function() {
                // console.log('resize');
                self.resize();
            });
            self.render();
            self.resize();
        },
        render: function(){
            var self = this;

            self.drawMenu();

            // uncomment below for debugging
            // comment below and uncomment the menu portion to enable menu delete/draw svg functionality
            // --- begin ---
            // self.prepareChart(app.data.snpPriceChart, app.data.snpData);
            // self.drawChart(app.data.snpPriceChart);

            // self.prepareChart(app.data.snpYoYChart, app.data.snpData);
            // self.drawChart(app.data.snpYoYChart);

            // self.prepareChart(app.data.snpRollingChart, app.data.snpData);
            // self.drawChart(app.data.snpRollingChart);

            // var zoomedData = app.data.snpData.slice(app.data.snpZoomedRollingChart.startDataSlice);
            // self.prepareChart(app.data.snpZoomedRollingChart, zoomedData);
            // self.drawChart(app.data.snpZoomedRollingChart);
            // --- end ---
        },
        animateChart: function(menuIndex){
            var self = this;
            var animationIndex = 0;

            //Current animation of chart on load - to tweak to on trigger
            var anim = self.animationTimeline = new TimelineLite();

            anim.timeScale(1);

            //Turn off both arrows
            anim.set("div#description-container div.button.left", {autoAlpha:0});
            anim.set("div#description-container div.button.right", {autoAlpha:0});
            anim.set("div#description-container div.button.forward", {autoAlpha:0});

            if (menuIndex == 0) {

                var chart1 = "svg." + app.data.snpPriceChart.chartClass;

                anim.from(chart1 + " g.x.axis path.domain", 1, {autoAlpha:0, scale:0}, 0);
                anim.staggerFrom(chart1 + " g.x.axis g.tick", 0.75, {autoAlpha:0, y:20}, 0.1, 0.25);
                anim.from(chart1 + " g.x.axis text.label", 2, {autoAlpha:0}, 0.5);

                anim.from(chart1 + " g.y.axis path.domain", 1, {autoAlpha:0, scale:0, transformOrigin:"0% 100%"}, 0.5);
                anim.staggerFrom(chart1 + " g.y.axis g.tick", 0.75, {autoAlpha:0, x:-20}, 0.1, 0.75);
                anim.from(chart1 + " g.y.axis text.label", 2, {autoAlpha:0}, 1);

                anim.from(chart1 + " path.line.price", 4, {drawSVG:"0% 0%"}, 1);

                anim.from(chart1 + " g.legend", 2, {autoAlpha:0, x:20}, 2);
                anim.from(chart1 + " text.title", 2, {autoAlpha:0, x:20}, 2);

                anim.staggerFrom(chart1 + " g.point circle", 1, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.5, 1.5);
                anim.from(chart1 + " g.focus", 1, {autoAlpha:0}, 4);
                anim.staggerFrom(chart1 + " g.point text", 0.5, {autoAlpha:0, y:20}, 0.25, 1.5);

            } else if (menuIndex == 1) {

                var chart1 = "svg." + app.data.snpPriceChart.chartClass;
                var chart2 = "svg." + app.data.snpYoYChart.chartClass;

                //Turn off things not needed
                anim.set(chart2 + " path.line.yoy", {autoAlpha:0});
                anim.set(chart1 + " g.x.axis", {autoAlpha:0});
                anim.set(chart1 + " g.y.axis path.domain", {autoAlpha:0});

                //Animate snp PriceChart Out
                anim.staggerTo(chart1 + " g.y.axis g.tick", 0.75, {autoAlpha:0, x:-20}, 0.1, 0.5);
                anim.from(chart2 + " g.x.axis.zero", 2, {y: app.data.snpPriceChart.margins.viewBoxHeight/2 - 80, autoAlpha:0, ease: Power2. easeOut}, 0.5);

                anim.to(chart1 + " g.y.axis text.label", 1, {autoAlpha:0}, 0.75);

                anim.staggerTo(chart1 + " g.legend", 1, {autoAlpha:0, x:20}, 0.25, 0.75);
                anim.to(chart1 + " text.title", 1, {autoAlpha:0, x:20}, 0.75);

                anim.staggerTo(chart1 + " g.point circle", 1, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.25, 0.5);
                anim.to(chart1 + " g.focus", 1, {autoAlpha:0}, 0.5);
                anim.staggerTo(chart1 + " g.point text", 1, {autoAlpha:0, y:20}, 0.25, 0.5);

                //Animate YoY Chart In
                anim.staggerFrom(chart2 + " g.y.axis g.tick", 0.75, {autoAlpha:0, x:-20}, 0.1, 2.75);
                anim.from(chart2 + " g.y.axis text.label", 2, {autoAlpha:0}, 2);

                //Morph paths
                anim.to(chart1 + " path.line.price", 2.5, {morphSVG:chart2 + " path.line.yoy"}, 2)

                anim.from(chart2 + " g.legend", 2, {autoAlpha:0, x:20}, 3);
                anim.from(chart2 + " text.title", 2, {autoAlpha:0, x:20}, 3);

                anim.staggerFrom(chart2 + " g.point circle", 1, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.5, 4);
                anim.from(chart2 + " g.focus", 1, {autoAlpha:0}, 5);
                anim.staggerFrom(chart2 + " g.point text", 1, {autoAlpha:0, y:20}, 0.25, 4);

            } else if (menuIndex == 2) {

                var chart3 = "svg." +  app.data.snpRollingChart.chartClass;
                var chart4 = "svg." +  app.data.snpZoomedRollingChart.chartClass;

                // Turn off elements that are not needed
                anim.set(chart3 + " g.focus", {autoAlpha:0});
                anim.set(chart3 + " g.y.axis path.domain", {autoAlpha:0});
                anim.set(chart3 + " g.point text:nth-child(odd)", {autoAlpha:0});

                anim.set(chart4 + " path.line.rolling", {autoAlpha:0});
                anim.set(chart4 + " g.x.axis", {autoAlpha:0});
                
                anim.set(chart4 + " g.y.axis text.label", {autoAlpha:0});
                anim.set(chart4 + " text.title", {autoAlpha:0});
                anim.set(chart4 + " g.legend", {autoAlpha:0});

                anim.set("#button-container", {autoAlpha:0}, 0);

                anim.to("div#description-container div.button.forward", 0.5, {autoAlpha:1, x:20}, 2);

                //Animate in new rolling line
                anim.from(chart3 + " path.line.rolling", 13, {drawSVG:"0%"}, 0);

                anim.from(chart3 + " g.rect-period", 0.5, {autoAlpha:0}, 0.5)
                    .from(chart3 + " g.rect-period line.arrow", 0.5, {drawSVG:"50% 50%"}, 1)
                    .from(chart3 + " g.rect-period path", 0.5, {autoAlpha:0}, 1)
                    .from(chart3 + " g.rect-period text.arrowfill", 0.5, {autoAlpha:0}, 1.25);

                //Animation for rect-period is scaled to 1024px. Hard-coded, not formula based
                var config = app.data.snpRollingChart, chartInfo = config.chartInfo, xOffset;

                xOffset = chartInfo.x(app.data.snpToolTip.rolling[1].year - 20);
                anim.to(chart3 + " g.rect-period", 1, {x:xOffset, onComplete:updateNextPeriod}, 3.5);
                xOffset = chartInfo.x(app.data.snpToolTip.rolling[2].year - 20);
                anim.to(chart3 + " g.rect-period", 1, {x:xOffset, onComplete:updateNextPeriod}, 7);
                xOffset = chartInfo.x(app.data.snpToolTip.rolling[3].year - 20);
                anim.to(chart3 + " g.rect-period", 1, {x:xOffset, onComplete:updateNextPeriod}, 10.5);
                xOffset = chartInfo.x(app.data.snpToolTip.rolling[4].year - 20);
                anim.to(chart3 + " g.rect-period", 1, {x:xOffset, onComplete:updateNextPeriod}, 14);

                anim.from(chart3 + " g.events", 0.5, {autoAlpha:0}, 0);
                anim.to(chart3 + " g.events", 0.5, {autoAlpha:0}, 3.5);

                anim.from(chart3 + " g.legend:nth-child(even)", 1.5, {autoAlpha:0, x:20}, 0);

                anim.staggerFrom(chart3 + " g.point circle", 1, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 3, 1);
                anim.staggerFrom(chart3 + " g.point text:nth-child(even)", 1, {autoAlpha:0, y:20}, 3, 1);

                anim.staggerTo(chart3 + " g.point circle", 0.75, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 3, 4.5);
                anim.staggerTo(chart3 + " g.point text:nth-child(even)", 0.75, {autoAlpha:0, y:20}, 3, 4.5);

                anim.to(chart3 + " path.line.yoy", 2, {autoAlpha:0}, 16);
                anim.to(chart3 + " g.rect-period", 1, {autoAlpha:0}, 17.5);

                //Morph paths
                anim.to(chart3 + " path.line.rolling", 1, {morphSVG:chart4 + " path.line.rolling"}, 17)

                anim.staggerTo(chart3 + " g.y.axis g.tick", 0.75, {autoAlpha:0, y:"+=40"}, 0.1, 17);
                anim.to(chart3 + " g.x.axis.zero", 2, {y: app.data.snpZoomedRollingChart.margins.viewBoxHeight/2 - 80, autoAlpha:0, ease: Power2. easeOut}, 17);

                anim.staggerFrom(chart4 + " g.y.axis g.tick", 0.75, {autoAlpha:0, y:-20}, 0.1, 17);
                anim.staggerFrom(chart4 + " g.points.series0 g.point circle", 0.5, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.5, 17.5);
                anim.staggerFrom(chart4 + " g.points.series0 g.point text", 0.5, {autoAlpha:0, y:20}, 0.25, 17.5);

                anim.staggerFrom(chart4 + " g.points.series1 g.point circle", 0.5, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.5, 19);
                anim.staggerFrom(chart4 + " g.points.series1 g.point text", 0.5, {autoAlpha:0, y:20}, 0.25, 19);
                anim.to(chart3 + " path.line.rolling", 2, {autoAlpha:0.05}, 19);
                anim.to(chart4 + " g.points.series0", 2, {autoAlpha:0.05}, 19);
                anim.from(chart4 + " path.line.rolling30", 2, {drawSVG:"0%", onStart:function(){ anim.timeScale(1);}}, 19);

                anim.staggerFrom(chart4 + " g.points.series2 g.point circle", 0.5, {autoAlpha:0, scale:0, transformOrigin:"50% 50%"}, 0.5, 21);
                anim.staggerFrom(chart4 + " g.points.series2 g.point text", 0.5, {autoAlpha:0, y:20}, 0.25, 21);
                anim.to(chart4 + " path.line.rolling30", 2, {autoAlpha:0.1}, 21);
                anim.to(chart4 + " g.points.series1", 2, {autoAlpha:0.1}, 21);

                anim.from(chart4 + " path.line.rolling50", 2, {drawSVG:"0%"}, 21);

                anim.from("#description2", 2, {autoAlpha:0}, 19);
                
                anim.to(chart4 + " path.line.rolling50", 1, {autoAlpha:0.1}, 23);
                anim.to(chart4 + " g.points.series2", 1, {autoAlpha:0.1}, 23);

                anim.to(chart4 + " path.line.rolling", 1, {autoAlpha:1}, 23);
                anim.to(chart4 + " g.points.series0", 1, {autoAlpha:1}, 23);

                anim.to("#button-container", 2, {autoAlpha:1}, 24);

                anim.to(chart3 + " g.legend", 1, {autoAlpha:0, x:20}, 15.5);
                anim.staggerFrom(chart4 + " g.legend", 1, {autoAlpha:0, x:-20}, 2, 16.5);

                //Hide forward button
                anim.to("div#description-container div.button.forward", 0.5, {autoAlpha:0}, 16);

                // Trigger Guideline text
                anim.from(chart4 + " g.focus", 1, {autoAlpha:0, onComplete: function(){app.main.showRectGuide = true;}}, 23);
                
                //anim.seek(0);

            }

            //animate arrow buttons
            if (menuIndex > 0) {
                anim.to("div#description-container div.left.button", 0.5, {autoAlpha:1, x:-20}, 2);
            }

            if (menuIndex < app.data.menu.length - 1) {
                anim.to("div#description-container div.right.button", 0.5, {autoAlpha:1, x:20}, 2);
            }

            anim.set("div#description-container div.text", {autoAlpha:0}, 0);
            anim.to("div#description-container div.text",1.5, {autoAlpha:1}, 0.5);

            if (self.disableAnimation) {
                anim.seek(anim.duration(), false);
            }

            function updateNextPeriod() {
                //Rather than write d3 code to update the event text, took the lazier method of removing then recreating
                d3.selectAll(chart3 + " g.events").remove();

                animationIndex += 1;
                self.drawEvents(animationIndex, 20);

                if (animationIndex == 1) {
                    self.showRectGuide = false;
                    anim.from(chart3 + " g.events", 0.5, {autoAlpha:0}, 3.5);
                    anim.to(chart3 + " g.events", 0.5, {autoAlpha:0}, 7);
                } else if (animationIndex == 2) {
                    self.showRectGuide = false;
                    anim.from(chart3 + " g.events", 0.5, {autoAlpha:0}, 7);
                    anim.to(chart3 + " g.events", 0.5, {autoAlpha:0}, 10);
                } else if (animationIndex == 3) {
                    self.showRectGuide = false;
                    anim.from(chart3 + " g.events", 0.5, {autoAlpha:0}, 10.5);
                    anim.to(chart3 + " g.events", 0.5, {autoAlpha:0}, 14);
                } else if (animationIndex == 4) {
                    anim.to(chart3 + " g.events", 1, {autoAlpha:0}, 17);
                }
            }

            // function showGuide() {
                // self.showRectGuide = true;
                // self.footnoteTooltip.initialize();
            // }
        },
        resize: function(){
            var self = app.main;
            self.resizeChart(app.data.snpPriceChart);
            self.resizeChart(app.data.snpYoYChart);
            self.resizeChart(app.data.snpRollingChart);
            self.resizeChart(app.data.snpZoomedRollingChart);
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
            // console.log(originalWidth, originalSize, currentWidth, fontSize);
            return fontSize
        },
        resizeChart: function(config){
            var self = app.main, chartInfo = config.chartInfo;

            // var parent = $(self.parentSelector), currentParentWidth = parent.width();
            var currentParentWidth = self.getContainerSize()

            if (self.enablePortraitLock) {
                if (currentParentWidth < self.maxPortraitWidth) {
                    $(".rotate").show();
                } else {
                    $(".rotate").hide();
                }
            }

            if (currentParentWidth > config.margins.viewBoxWidth) {
                currentParentWidth = config.margins.viewBoxWidth;
            }

            var parentWidth = currentParentWidth * config.margins.width,
                parentHeight = currentParentWidth * config.margins.height;

            var svg = d3.selectAll("svg." + config.chartClass);
            svg.attr("width", parentWidth)
                .attr("height", parentHeight);

            $(self.parentSelector).height(parentHeight);

            // set body font size
            var fontSize = self.calculateFontSize(self.originalWidth, self.originalFontSize, currentParentWidth);
            $("body").css("font-size", fontSize + "px");
        },
        drawRotateOverlay: function(){
            var self = this;
            $(self.mainContainerSelector).append(
                $('<div>', { 'class': "rotate" }).append(
                    $('<div>', { 'class': "rotate-content" }).append(
                        $('<p>').append(self.l("To see chart, please rotate your device to landscape."))
                    ).append(
                        $('<img>', { src: "assets/img/turn.png", alt: "", width:"50%" })
                    )
                )
            );
        },
        drawMenu: function(){
            var self = this, menuData = app.data.menu;

            // set body font size
            var fontSize = self.calculateFontSize(self.originalWidth, self.originalFontSize, $(self.parentSelector).width());
            $("body").css("font-size", fontSize + "px");

            // <ul id="menu">
            //     <li><a href="#nav1">S&amp;P 500 Index</a></li>
            //     <li><a href="#nav2">Volatile Equity Returns</a></li>
            //     <li><a href="#nav3">20-year Average Returns</a></li>
            // </ul>
            var ul = $('<ul>', { id: "menu" });
            menuData.forEach(function(item, index){
                var li = $('<li>').html(self.l(item.text));
                ul.append(li);
            });

            // draw rotate overlay
            self.drawRotateOverlay();

            $(self.menuContainer).append(ul);
            $(self.menuContainer + " li").click(function(){
                var index = $(this).index();
                $(this).siblings().removeClass("selected");
                $(this).addClass("selected");

                if (index == 2) {
                    $(self.descriptionContainer + " .text").html(self.l(menuData[index].description) + "<span id='description2'>" + self.l(menuData[index].description2) + "</span>");
                } else {
                    $(self.descriptionContainer + " .text").text(self.l(menuData[index].description));
                }
                
                if (menuData[index].button != undefined) {
                    if ($("#button-container").get(0) == undefined) {
                        var menu = $('<div>').attr("id", "button-container");
                        menuData[index].button.forEach(function(item, index){
                            var button = $('<button>').text(self.l(item.text)).addClass("rollingYearButton");
                            if (index == 0) {
                                button.css("background", item.background).css("color", item.color);
                            } else {
                                button.css("background", "#fff").css("color", "#000");
                            }
                            button.click(function() {
                                $(".rollingYearButton").css("background", "#fff").css("color", "#000");
                                button.css("background", item.background).css("color", item.color);

                                //reset and delete all previous events
                                d3.selectAll("svg.chart3 g.events").remove();
                                d3.selectAll("svg.chart3 g.rect-period").remove();

                                if (index == 0) {
                                    app.main.showRectGuide = true;
                                } else {
                                    app.main.showRectGuide = false;
                                }
                                
                                var chart4 = "svg." +  app.data.snpZoomedRollingChart.chartClass;
                                var anim = new TimelineLite();
                                anim.to(chart4 + " g.chart path", 1, {autoAlpha: 0.1}, 0);
                                anim.to(chart4 + " g.points", 1, {autoAlpha: 0.1}, 0);
                                anim.to(chart4 + " " + item.SVGline, 1, {autoAlpha: 1}, 0);
                                anim.to(chart4 + " " + item.SVGpoints, 1, {autoAlpha: 1}, 0);
                                
                                self.updateGuideLine(app.data.snpZoomedRollingChart, index);
                            });
                            menu.append(button);
                        });
                        $(self.descriptionContainer).append(menu);
                    }
                } else {
                    $("#button-container").remove();
                }
                

                // uncomment below to enable functionality to remove and draw chart
                d3.select(self.parentSelector).selectAll("*").remove();

                // stop previous animations
                if (self.animationTimeline && self.animationTimeline.isActive()) {
                    self.animationTimeline.kill();
                }

                if (index == 0) {
                    self.prepareChart(app.data.snpPriceChart, app.data.snpData);
                    self.drawChart(app.data.snpPriceChart);
                    self.resizeChart(app.data.snpPriceChart);
                    self.animateChart(index);
                } else if (index == 1) {
                    self.prepareChart(app.data.snpPriceChart, app.data.snpData);
                    self.drawChart(app.data.snpPriceChart);
                    self.prepareChart(app.data.snpYoYChart, app.data.snpData);
                    self.drawChart(app.data.snpYoYChart);
                    self.resizeChart(app.data.snpPriceChart);
                    self.resizeChart(app.data.snpYoYChart);
                    self.animateChart(index);
                } else if (index == 2) {
                    self.prepareChart(app.data.snpRollingChart, app.data.snpData);
                    self.drawChart(app.data.snpRollingChart);
                    self.drawEvents(0, 10);
                    self.drawRect(0);

                    // Using original years else animation will look a little weird
                    var zoomedData = app.data.snpData.slice(app.data.snpZoomedRollingChart.startDataSlice);

                    self.prepareChart(app.data.snpZoomedRollingChart, zoomedData);
                    self.drawChart(app.data.snpZoomedRollingChart);
                    self.resizeChart(app.data.snpRollingChart);
                    self.resizeChart(app.data.snpZoomedRollingChart);
                    self.animateChart(index);
                }

                self.currentSelectedMenuItem = index;
            })
            
            $(self.descriptionContainer + " .left").click(function(){
                var index = self.currentSelectedMenuItem - 1;
                if (index < 0) {
                    return;
                }
                $(self.menuContainer + " li:eq(" + index + ")").click();
            });

            $(self.descriptionContainer + " .right").click(function(){
                var index = self.currentSelectedMenuItem + 1;
               if (index > menuData.length - 1) {
                    return;
                }
                $(self.menuContainer + " li:eq(" + index + ")").click();
            });

            $(self.descriptionContainer + " .forward").click(function(){
                self.animationTimeline.timeScale(5);
            });

            // click the first menu item
            $(self.menuContainer + " li:eq(" + self.currentSelectedMenuItem + ")").click();
        },
        
        // wrapper works, but need to add in space for Chinese text to linebreak nicely for translation!
        wrap: function(text, width) { // from https://bl.ocks.org/mbostock/7555321
            text.each(function() {
                var text = d3.select(this),
                    lines = text.text().split(/\n/).reverse(),
                    currentLine,
                    word,
                    lineNumber = 0,
                    lineHeight = 1.1, // ems
                    x = text.attr("x") || 0,
                    y = text.attr("y") || 0,
                    dy = parseFloat(text.attr("dy")),
                    tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");

                while (currentLine = lines.pop()) {
                    var words = currentLine.split(/\s+/).reverse(),
                        line = [];
                    // console.log(currentLine, words);
                    while (word = words.pop()) {
                        line.push(word);
                        // console.log(line);
                        tspan.text(line.join(" "));
                        // try/catch to fix edge issue when refreshing/loading the page, getComputedTextLength() causes an exception
                        try {
                            if (tspan.node().getComputedTextLength() > width) {
                                line.pop();
                                tspan.text(line.join(" "));
                                line = [word];
                                tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                            }
                        } catch(e) {
                        }
                    } // while (word = words.pop())

                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em");
                } // while (currentLine = lines.pop())
            });
        },
        prepareChart: function(config, data){
            var self = this, chartInfo = { data: data };

            chartInfo.parentWidth = config.margins.viewBoxWidth;
            chartInfo.parentHeight = config.margins.viewBoxHeight;
            chartInfo.width = chartInfo.parentWidth - config.margins.left - config.margins.right;
            chartInfo.height = chartInfo.parentHeight - config.margins.top - config.margins.bottom;

            chartInfo.bisectYear = d3.bisector(config.getX).left;

            // define the x axis
            chartInfo.x = d3.scaleLinear()
                .range([0, chartInfo.width]);
            chartInfo.x.domain([chartInfo.data[0].year, chartInfo.data[chartInfo.data.length - 1].year]);

            var xDomains = chartInfo.x.domain();
            chartInfo.xAxisTickValues = d3.range(xDomains[0] + 2, xDomains[1], 10);
            if (xDomains[1] != chartInfo.xAxisTickValues[chartInfo.xAxisTickValues.length - 1]) {
                chartInfo.xAxisTickValues.push(xDomains[1]);
            }

            chartInfo.xAxis = d3.axisBottom()
                .scale(chartInfo.x)
                .tickValues(chartInfo.xAxisTickValues)
                .tickSizeOuter(0)
                .tickFormat(d3.format("04d"));

            // define the y axis
            chartInfo.y = d3.scaleLinear()
                .range([chartInfo.height, 0]);
            chartInfo.y.domain(config.yAxisDomain);

            var yDomains = chartInfo.y.domain();
            chartInfo.yAxisTickValues = d3.range(yDomains[0], yDomains[1] + config.yAxisTickStep, config.yAxisTickStep);
            chartInfo.yAxis = d3.axisLeft()
                .scale(chartInfo.y)
                .tickValues(chartInfo.yAxisTickValues);

            // line generator
            chartInfo.lineGenerators = [];
            config.sets.forEach(function(item, index){
                var generator = d3.line()
                    .x(function(d) { return chartInfo.x(config.getX(d)); })
                    .y(function(d) { return chartInfo.y(item.getY(d)); })
                    .defined(function(d) { return (item.getY(d) !== 0); });
                chartInfo.lineGenerators.push(generator);
            });

            config.chartInfo = chartInfo;
        },
        drawChart: function(config, menuIndex){
            var self = this, chartInfo = config.chartInfo;

            // draw the svg
            chartInfo.svgContainer = d3.select(self.parentSelector).append("svg", ":first-child")
                .attr("class", config.chartClass)
                // .attr("width", chartInfo.parentWidth)
                // .attr("height", chartInfo.parentHeight)
                .attr("viewBox", "0 0 " + chartInfo.parentWidth + " " + chartInfo.parentHeight)
                .attr("preserveAspectRatio", "xMidYMid meet");

            chartInfo.svg = chartInfo.svgContainer.append("g")
                .attr("transform", "translate(" + config.margins.left + "," + config.margins.top + ")");

            // draw the title
            chartInfo.svg.append("text")
                .attr("class", "title")
                .attr("y", -config.margins.top + 20)
                .attr("text-anchor", "start")
                .text(self.l(config.title));

            // draw the x axis
            var xAxis = chartInfo.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + chartInfo.height + ")")
                .call(chartInfo.xAxis);

            // draw the x axis - text label
            xAxis.append("text")
                .attr("class", "label")
                .attr("transform", "translate(" + chartInfo.width + "," + 50 + ")")
                .style("text-anchor", "end")
                .text(self.l(config.xAxisLabel));

            // draw horizontal line at y = 0 if drawZeroLine is true
            if (config.drawZeroLine) {
                var zeroLine = chartInfo.svg.append("g")
                    .attr("class", "x axis zero")
                    .append("line")
                    .attr("y1", chartInfo.y(0))
                    .attr("x2", chartInfo.width)
                    .attr("y2", chartInfo.y(0));
            }

            // draw the y axis
            var yAxisText = chartInfo.svg.append("g")
                .attr("class", "y axis")
                .call(chartInfo.yAxis)
                .append("text")
                .attr("class", "label");

            //Special text style for Chinese text
            if (app.config.lang == "zh") {
                
                var chineseText = self.l(config.yAxisLabel);
                
                yAxisText
                    .attr("y", chartInfo.height / 2 - chineseText.length / 2 * 16)
                    .style("text-anchor", "middle");

                for (var i=0; i < chineseText.length; i++) {
                    var chineseChar =  chineseText.slice(i, i + 1);
                    yAxisText.append("tspan")
                        .attr("x", -config.margins.left + 8)
                        .attr("dy", "1.1em")
                        .text(chineseChar);
                }
            
            // English text styling
            } else {
                yAxisText
                    .attr("transform", "rotate(-90)")
                    .attr("x", -chartInfo.height / 2)
                    .attr("y", -config.margins.left + 8)
                    .attr("dy", ".71em")
                    .style("text-anchor", "middle")
                    .text(self.l(config.yAxisLabel));
            }

            // draw the legend
            chartInfo.legend = chartInfo.svg.selectAll(".legend")
                .data(config.sets)
                .enter().append("g")
                .attr("class", function(d,i) {return "legend series" + i })
                .attr("transform", function(d, i){
                    var x = config.legendOffset.getX(chartInfo, i);
                    var y = config.legendOffset.getY(chartInfo, i);
                    return "translate(" + x + "," + y + ")";
                });

            chartInfo.legend.append("rect")
                .attr("width", config.legendIconSize)
                .attr("height", config.legendIconSize)
                .style("fill", function(d){ return d.color; })
                .style("stroke", function(d){ return d.color; });

            chartInfo.legend.append("text")
                .text(function(d) { return self.l(d.legend); })
                .attr("x", config.legendIconSize + 10)
                .attr("y", config.legendIconSize / 2)
                .attr("dy", ".35em")
                .attr("data-toggle", function(d) { if (d.footnoteTooltip != undefined) return "tooltip"; })
                .attr("title", function(d) { if (d.footnoteTooltip != undefined) return self.l(d.footnoteTooltip); })
                .style("text-anchor", "start");

            //hack to add tooltip
            if (config.sets[0].footnoteTooltip != undefined) {
                chartInfo.legend.append("line")
                    .attr("class", "tooltipLine")
                    .attr("x1", config.legendIconSize + 10)
                    .attr("x2", function() { return (app.config.lang == "zh") ? 415 : 815})
                    .attr("y1", 20)
                    .attr("y2", 20);
            }

            // draw the chart
            chartInfo.chart = chartInfo.svg.append("g")
                .attr("class", "chart");

            // draw the special labels
            config.sets.forEach(function(item, index){
                if (! item.shouldDrawTooltips) {
                    return;
                }

                var tooltips = app.data.snpToolTip[item.name];

                var pointsGroup = chartInfo.svg.append("g")
                    .attr("class", "points series" + index)

                var points = pointsGroup.selectAll(".point")
                    .data(tooltips)
                    .enter().append("g")
                    .attr("class", "point")
                    .attr("transform", function(d){
                        var x = chartInfo.x(d.year);
                        var y = chartInfo.y(d[item.name]);
                        return "translate(" + x + "," + y + ")";
                    });

                points.append("circle")
                    .attr("r", config.legendIconSize / 2)
                    .attr("fill", function(d) { return d.color; });

                points.append("text")
                    .text(function(d) { return self.l(d.year); })
                    .attr("y", 20)
                    // .attr("dx", function(d) {
                    //     if (d.position == "start") {
                    //         return -config.legendIconSize / 2;
                    //     } else {
                    //         return 0;
                    //     }
                    // })
                    .attr("dy", ".35em")
                    .attr("fill", function(d) { return d.color; })
                    .attr("transform", function(d){
                        var x = d.xOffset;
                        var y = d.yOffset;
                        return "translate(" + x + "," + y + ")";
                    })
                    .style("text-anchor", function(d){ return d.position; });

                points.append("text")
                    .attr("class", "description")
                    .text(function(d) { return self.l(d.text); })
                    .attr("y", 40)
                    // .attr("dx", function(d) {
                    //     if (d.position == "start") {
                    //         return -config.legendIconSize / 2;
                    //     } else {
                    //         return 0;
                    //     }
                    // })
                    .attr("dy", ".35em")
                    .attr("fill", function(d) { return d.color; })
                    .attr("transform", function(d){
                        var x = d.xOffset;
                        var y = d.yOffset;
                        return "translate(" + x + "," + y + ")";
                    })
                    .style("text-anchor", function(d){ return d.position; });

                    points.selectAll("text.description")
                        .call(self.wrap, 150);
            });

            // draw the lines
            chartInfo.paths = [];
            chartInfo.lineGenerators.forEach(function(item, index){
                var path = chartInfo.chart.append("path")
                    .datum(chartInfo.data)
                    .attr("class", "line " + config.sets[index].name)
                    .attr("stroke", config.sets[index].color)
                    .attr("stroke-width", config.sets[index].strokeWidth)
                    .attr("d", item);
                chartInfo.paths.push(path);
            });

            // draw mouseover line - container
            chartInfo.focus = chartInfo.svg.append("g")
                .attr("class", "focus")

            // draw mouseover line - actual line
            // Mouseover line based on domain instead of always starting at 0
            chartInfo.focus.append("line")
                .attr("class", "line pointer")
                .attr("y1", 0)
                .attr("y2", chartInfo.y(config.yAxisDomain[0])); //chartInfo.y(0)

            // draw mouseover line - container
            chartInfo.pointerText = chartInfo.focus.append("g")
                .attr("class", "pointer_text");

            // draw mouseover line - price text
            chartInfo.pointerText.append("text")
                .attr("class", "label")
                .attr("dy", "-0.8em")
                .attr("text-anchor", "middle");

            self.updateGuideLine(config, 0);
        },
        updateGuideLine: function(config, guidelineIndex){
            var self = this, chartInfo = config.chartInfo;

            d3.select("svg rect.overlay").remove();

            // define a rectangle region for mouse events
            // start from year 1931
            
            var firstItem = chartInfo.data[0].year, lastItem = chartInfo.data[chartInfo.data.length - 1].year;
            chartInfo.svg.append("rect")
                .attr("class", "overlay")
                .attr("width", chartInfo.width)
                .attr("width", chartInfo.x(lastItem) - chartInfo.x(firstItem))
                .attr("height", chartInfo.height)
                .attr("x", chartInfo.x(firstItem))
                .on("mouseout", function(){
                    // chartInfo.focus.style("display", "none");
                })
                .on("mousemove", function(){
                    var x0 = chartInfo.x.invert(d3.mouse(this)[0]),
                        i = chartInfo.bisectYear(chartInfo.data, x0, 1);

                    if (i >= chartInfo.data.length) {
                        return;
                    }

                    var d0 = chartInfo.data[i - 1],
                        d1 = chartInfo.data[i],
                        d = x0 - config.getX(d0) > config.getX(d1) - x0 ? d1 : d0;

                    var visible = true;

                    if (self.showRectGuide) {
                        d3.selectAll("svg.chart3 g.events").remove();
                        d3.selectAll("svg.chart3 g.rect-period").remove();

                        for (var i=0; i < app.data.snpToolTip.rolling.length; i++) {
                            var tooltip = app.data.snpToolTip.rolling[i];
                            if(config.getX(d) == tooltip.year) {
                                self.drawRect(i);
                                self.drawEvents2(i, 20);
                                visible = false;
                            }
                        }
                    }

                    updateVerticalInteractionLine(d, visible);
                });

            function updateVerticalInteractionLine(d, visible) {
                // move the mouseover line
                chartInfo.focus.attr("transform", "translate(" + chartInfo.x(config.getX(d)) + "," + 0 + ")");

                // y is based on the last set of data
                // var formatY = config.sets[config.sets.length - 1].getFormat(d);
                // var y = config.sets[config.sets.length - 1].getY(d);

                var formatY = config.sets[config.sets.length - 1].getFormat(d);

                //console.log(config.sets);
                var y = config.sets[guidelineIndex].getY(d);

                // update the height of the mouseover line
                chartInfo.focus.select("line.pointer")
                    .attr("stroke", function(){return config.sets[guidelineIndex].color})
                    .attr("y1", chartInfo.y(y));

                // update the position of the mouseover line
                chartInfo.pointerText.select("text")
                    .attr("fill", function(){return config.sets[guidelineIndex].color})
                    .text(formatY(y));
                    
                chartInfo.pointerText.attr("transform", "translate(0," + chartInfo.y(y) + ")");

                if (visible && y != 0) {
                    $("g.focus").show();
                } else {
                    $("g.focus").hide();
                }
            }

            updateVerticalInteractionLine(chartInfo.data[config.initialIndex]);

        },
        drawEvents: function(index, positionYear){
            var self = this, config = app.data.snpRollingChart, chartInfo = config.chartInfo;

            // draw the significant events
            var tooltips = app.data.snpToolTip.rolling[index];

            var xOffset = chartInfo.x(tooltips.year - positionYear) + 5;

            var eventGroup = chartInfo.svg.append("g")
                .attr("class", "events")
                .attr("transform", "translate("+ xOffset + ", 0)");

            var event = eventGroup.selectAll(".event")
                .data(tooltips.events)
                .enter().append("g")
                .attr("class", "event");

            eventGroup.append("text")
                .text(self.l("Significant events"))
                .attr("dy", ".35em");

            eventGroup.append("text")
                .text(function(d) { return self.l("Rolling returns") + ": " + tooltips.rolling + "%"; } )
                .attr("transform", "translate(0, -30)")
                .attr("font-weight", "bold")
                .attr("dy", ".35em");
            
            event.append("text")
                .text(function(d) { return self.l(d.text); })
                .attr("y", function(d, i){ return i * 25 + 25; })
                .attr("dy", ".35em");
        },
        drawEvents2: function(index, positionYear){
            var self = this, config = app.data.snpRollingChart, chartInfo = config.chartInfo;

            // draw the significant events
            var tooltips = app.data.snpToolTip.rolling[index];

            var xOffset = chartInfo.x(tooltips.year - positionYear) + 5;

            var eventGroup = chartInfo.svg.append("g")
                .attr("class", "events")
                .attr("transform", "translate("+ xOffset + ", 0)");

            var event = eventGroup.selectAll(".event")
                .data(tooltips.events2)
                .enter().append("g")
                .attr("class", "event");
            
            event.append("text")
                .text(function(d) { return self.l(d.text); })
                .attr("font-weight", function(d,i) { if (i == 0){ return "bold" } else { return "normal"}})
                .attr("y", function(d, i){ return i * 25 + 25; })
                .attr("dy", ".35em");
        },
        drawRect: function(index){
            var self = this, config = app.data.snpRollingChart, chartInfo = config.chartInfo;

            var tooltips = app.data.snpToolTip.rolling[index];

            // draw the rect representing 20-year period
            var startYear = chartInfo.x.domain()[0];
            var rectRegion = chartInfo.svg.append("g")
                .attr("class", "rect-period")
                .attr("transform", function(d, i){
                    var x = chartInfo.x(startYear - 20);
                    return "translate(" + x + ",0)";
                });

            var rectWidth = chartInfo.x(startYear + 20) - chartInfo.x(startYear);

            rectRegion.append("rect")
                .attr("width", rectWidth)
                .attr("height", chartInfo.y(config.yAxisDomain[0]));

            rectRegion.append("line")
                .attr("class", "guideline")
                .attr("x1", 0)
                .attr("x2", 0)
                .attr("y1", 0)
                .attr("y2", chartInfo.y(config.yAxisDomain[0]));
                
            rectRegion.append("line")
                .attr("class", "guideline")
                .attr("x1", chartInfo.x(startYear + 20))
                .attr("x2", chartInfo.x(startYear + 20))
                .attr("y1", 0)
                .attr("y2", chartInfo.y(config.yAxisDomain[0]));

            // Draw 20-year arrow with text
            rectRegion.append("line")
                .attr("class", "arrow")
                .attr("x1", 0)
                .attr("x2", chartInfo.x(startYear + 20))
                .attr("y1", 250)
                .attr("y2", 250);
                
            rectRegion.append("text")
                .attr("class", "arrowfill")
                .attr("x", rectWidth /2)
                .attr("y",270)
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .text(function(d) { return self.l("20 years"); });

            var triangle = d3.symbol().type(d3.symbolTriangle)

            rectRegion.append("path")
                .attr("class", "arrowfill")
                .attr("d", triangle)
                .attr("transform", "translate(5,250)rotate(-90)");

            rectRegion.append("path")
                .attr("class", "arrowfill")
                .attr("d", triangle)
                .attr("transform", "translate(" + (rectWidth - 5) + ",250) rotate(90)");

            // move the rect depending on tooltips.year or any year
            chartInfo.svg.selectAll("g.rect-period")
                .attr("transform", function(d, i){
                    var x = chartInfo.x(tooltips.year - 20);
                    return "translate(" + x + ",0)";
                });
        },
        // footnoteTooltip: {
            // initialize: function () {
                // $('[data-toggle="tooltip"]').tooltipster({
                    // contentAsHTML: true,
                    // zIndex: 999,
                    // side: "bottom",
                    // distance: 3,
                    // maxWidth: 300,
                    // minWidth: (app.config.lang === 'en') ? 270 : 230,
                    // delay: 200,
                    // trigger: "custom",
                    // triggerOpen: {
                        // mouseenter: true,
                        // touchstart: true
                    // },
                    // triggerClose: {
                        // mouseleave: true,
                        // tap: true
                    // }
                // });
            // }
        // }
    };
}



(function($){

    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;

    app.main.start();

})(jQuery);
