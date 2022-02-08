// 20210630
'use strict';

var currentCharts = $('body').data('chart'),
    lang = $("html").attr("lang") || "en",
    parent = "#chart", slices = "#chart .slice",
    menuSelector = "a", menuContainerSelector = "#menu",
    tableSelector = "#table_data", yearsSelector = "th.years",
    chartContainer = "#chart_container",
    toolTipSelector = "#tooltip", footnoteSelector = "#footnote",
    menuActiveClass = "active",
    data, currentAnimation, currentChartPos, currentYearPos, doYearTransition,
    labelRadiusMultipler = 1.3, animationDuration = 0.8,
    maxChartContainerHeight = 540, arcOuterRadius = 0.9,
    arcInnerRadius = 0.7, toolTipRadius = 0.65;

var charts = {
    width: 0,
    height: 0,
    radius: 0,
    transitionDuration: 500,
    arc: undefined,
    svg: undefined,
    l: function (key) {
        if (dataset.lang[lang] && dataset.lang[lang][key]) {
            var lookup = dataset.lang[lang][key];
            if ($.isFunction(lookup)) {
                return lookup.apply(this, Array.prototype.slice.call(arguments, 1));
            } else {
                return lookup;
            }
        } else {
            return key;
        } // if (dataset.lang[lang] && dataset.lang[lang][key])
    },
    pie: d3.pie().sort(null).value(function (item, i) {
        return item.data[currentYearPos];
    }),
    recalculateSizes: function () {
        this.width = $(parent).width();
        this.height = $(parent).height();
        // adjusted the radius from 2.5 to 2
        this.radius = Math.min(this.width, this.height) / 2;
        this.arc = d3.arc().outerRadius(this.radius * arcOuterRadius).innerRadius(this.radius * arcInnerRadius);
    }
};

function getLabelText(data) {
    if ($.isArray(data)) {
        return data[currentYearPos];
    } else {
        return data;
    }
}

// Hack for "*" value
function getDataText(data, currentYearIndex, currentIndex) {
    if ('tableData' in data) {
        return data.tableData[currentYearIndex][currentIndex];
    } else if (data.data[currentIndex] == 0) {
        return $('<span>', {
            'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'left',
            'title': charts.l(data.footnote)
        }).append("*");
    } else {
        return data.data[currentIndex];
    }
}

function removeSVG() {
    d3.selectAll("svg").remove();
}

function drawSVG() {
    removeSVG();
    charts.recalculateSizes();
    $(toolTipSelector).css("width", charts.radius * toolTipRadius * 2 + 'px');

    var svgdata = JSON.parse(JSON.stringify(data));

    svgdata.sort(function (a, b) {
        return a.displayOrder - b.displayOrder;
    });

    var startingAngle = 0;

    $.each(svgdata, function (index, item) {
        var percentage = item.data[currentYearPos],
            item_text = charts.l(item.label),
            svg = d3.select(parent).append("svg")
                .attr("width", charts.width)
                .attr("height", charts.height)
                .attr("id", "slice" + index)
                .attr("class", "slice")
                .append("g")
                .attr("transform", "translate(" + charts.width / 2 + "," + charts.height / 2 + ")"),
            startAngle = Math.PI * 2 / 100 * startingAngle,
            endAngle = Math.PI * 2 / 100 * (startingAngle + percentage),
            arc = d3.arc()
                .outerRadius(charts.radius * arcOuterRadius)
                .innerRadius(charts.radius * arcInnerRadius)
                .startAngle(startAngle)
                .endAngle(endAngle);

        var path = svg.append("path")
            .attr("fill", function () {
                return d3.rgb(item.color);
            })
            .attr("d", arc)
            .on("mouseover", function () {
                $(toolTipSelector).html("<small>" + getLabelText(item_text) + "<span class=''><br>(" + percentage + "%)</span>" + "</small>");
            })
            .on("mouseout", function () {
                $(toolTipSelector).html($(toolTipSelector).data("title"));
            });

        // add click event on donut slice for sector
        var category = $(handlers.previousMenuSelector).data('key');
        if (category === 'sector') {
            path.on("click", function () {
                var link = item['link_' + lang];
                if (link) {
                    window.top.location.href = link;
                }
            })
        }

        var text = svg.append("text")
            .attr("class", "percentage")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .style("fill", "white")
            .text(function (d) { return (percentage > 0) ? percentage : ""; });
        if (category === 'sector') {
            var link = item['link_' + lang];
            if (link) {
                text.attr("class", "percentage slice_underline")
            }
        }

        // svg.append("text")
        //     .attr("transform", function(d) {
        //         var c = arc.centroid(d);
        //         return "translate(" + c[0] * labelRadiusMultipler + "," + c[1] * labelRadiusMultipler + ")";
        //     })
        //     .attr("dy", ".35em")
        //     .style("text-anchor", ((startAngle + endAngle) / 2 > Math.PI) ? "end" : "start")
        //     .style("fill", item.color)
        //     .text(function(d) { return item_text; })
        //     .call(wrap, $(parent).width() * .15);

        startingAngle += percentage;
    });
}

function resizeSVG() {

    if ($(chartContainer).width() < maxChartContainerHeight) {
        // fix for portrait devices
        $(chartContainer).height($(chartContainer).width());
    } else {
        $(chartContainer).height(Math.min($(chartContainer).width(), maxChartContainerHeight));
    }

    charts.recalculateSizes();

    $(toolTipSelector).css("width", charts.radius * toolTipRadius * 2 + 'px');
    d3.selectAll(parent + " svg").attr("width", charts.width).attr("height", charts.height);
    d3.selectAll(parent + " svg g")
        .attr("transform", "translate(" + charts.width / 2 + "," + charts.height / 2 + ")");

    var svgdata = JSON.parse(JSON.stringify(data));

    svgdata.sort(function (a, b) {
        return a.displayOrder - b.displayOrder;
    });

    var startingAngle = 0;
    $.each(svgdata, function (index, item) {
        var percentage = item.data[currentYearPos],
            startAngle = Math.PI * 2 / 100 * startingAngle,
            endAngle = Math.PI * 2 / 100 * (startingAngle + percentage),
            arc = charts.arc.startAngle(startAngle).endAngle(endAngle);
        d3.select("#slice" + index + " path").attr("d", arc);
        d3.select("#slice" + index + " text.percentage")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; });

        startingAngle += percentage;
    });
}

function drawTable(dataKey) {
    // draw table header
    var thead = $('<thead>');
    var tr = $('<tr>');
    tr.append($('<th>').append('&nbsp;'));
    tr.append($('<th>').append('&nbsp;'));
    $.each(dataset.years, function (yearIndex, year) {
        tr.append($('<th>', { 'class': 'text-right years', 'data-index': yearIndex }).append(year));
    });
    thead.append(tr);
    $(tableSelector).html(thead);

    // draw table body
    var tbody = $('<tbody>');
    $.each(dataset.charts[currentCharts].chartData[dataKey], function (index, item) {
        var item_text = charts.l(item.label);
        var tr = $('<tr>');
        tr.append($('<td>').append(
            $('<span>', { style: 'color:' + item.color }).append(
                $('<i>', { 'class': 'fa fa-circle' })
            )
        ));
        var key = 'footnote_' + lang, labelText = getLabelText(item_text);
//        if (key in item) {
//            labelText = $('<span>', { 'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'bottom', 'title': item['footnote_' + lang] }).append(labelText);
//        }

        var link = item['link_' + lang];
//        else {
        var key = 'label_footnote';
        if (key in item) {
            labelText = $('<span>', {
                'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'left',
                'title': charts.l(item[key])
            }).append(labelText);
        }
            
        if (link) {
            tr.append($('<td>', { 'data-link': link }).append(
                labelText
            ));
        } else {
            tr.append($('<td>').append(
                labelText
            ));
        }
        
        $.each(dataset.years, function (yearIndex, year) {
            tr.append($('<td>', { 'class': 'text-right' }).append(
                getDataText(item, currentYearPos, yearIndex)
            ));
        });

        $.each(dataset.years, function (yearIndex, year) {
        });
        tbody.append(tr);
    });
    $(tableSelector).append(tbody);

    // indicate which is the current selected column
    $(tableSelector + " " + yearsSelector + ":eq(" + currentYearPos + ")").addClass("selected");
    $(tableSelector + " tr td:nth-child(" + (currentYearPos + 3) + ")").addClass("selected");

    // add click event on table row for sector
    $('table [data-link]').click(function () {
        window.top.location.href = $(this).data('link');
    });

    // update footnote
    // $(footnoteSelector).html(dataset.charts[currentCharts].menu[currentChartPos]['footnote_' + lang]);
    // $('table [data-toggle="tooltip"]').tooltip();
    var Tooltip = {
        initialize: function () {
            $('table [data-toggle="tooltip"]').tooltipster({
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
    };
    Tooltip.initialize();
}

/*
function resizeChart() {
    if ($(chartContainer).width() < maxChartContainerHeight) {
        // fix for portrait devices
        $(chartContainer).height($(chartContainer).width());
    } else {
        $(chartContainer).height(Math.min($(chartContainer).width(), maxChartContainerHeight));
    }
    // console.log($(chartContainer).width(), $(chartContainer).height());
}
*/

var handlers = {
    previousMenuSelector: undefined,
    previousYearSelector: undefined,
    disableAllMenus: function () {
        // $(menuContainerSelector + " " + menuSelector).addClass("disabled");
        $(menuContainerSelector).off("click", menuSelector);
        $(tableSelector).off("click", yearsSelector);
    },
    enableAllMenus: function () {
        // $(menuContainerSelector + " " + menuSelector).removeClass("disabled");
        $(menuContainerSelector).on("click", menuSelector, handlers.chartMenuHandler);
        $(tableSelector).on("click", yearsSelector, handlers.yearMenuHandler);
    },
    transitionIn: function (set, animation, onStart, onComplete) {
        var t = new TimelineLite({
            onStart: onStart,
            onComplete: onComplete
        });
        animations.run(t, set, animation, "anim_in");
    },
    transitionOut: function (set, animation, onStart, onComplete) {
        var t = new TimelineLite({
            onStart: onStart,
            onComplete: onComplete
        });
        animations.run(t, set, animation, "anim_out");
    },
    chartMenuHandler: function () {
        currentChartPos = $(this).data('index');
        // update title of current pane
        var title = charts.l(dataset.charts[currentCharts].menu[currentChartPos].name) + "<br>(%)";

        // store the title for mouseout use
        $(toolTipSelector).data("title", title)
        $(toolTipSelector).html(title);

        if (doYearTransition) {
            currentAnimation = doYearTransition;
            doYearTransition = undefined;
        } else {
            // currentAnimation = $(this).data('animation');
            currentAnimation = dataset.charts[currentCharts].transition;
        }

        // Check for exception on geography tag
        if ($(this).data('key') === "geography") {
            $('#geography_tag').show();
        } else {
            $('#geography_tag').hide();
        }

        drawTable($(this).data('key'));
        if (handlers.previousMenuSelector) {
            // $(handlers.previousMenuSelector).removeClass(menuActiveClass);
            $(handlers.previousMenuSelector).parent().removeClass(menuActiveClass);

            handlers.previousMenuSelector = this;

            // $(handlers.previousMenuSelector).addClass(menuActiveClass);
            $(handlers.previousMenuSelector).parent().addClass(menuActiveClass);

            handlers.transitionOut($(slices), currentAnimation, handlers.disableAllMenus, function () {
                data = dataset.charts[currentCharts].chartData[$(handlers.previousMenuSelector).data('key')];
                drawSVG();
                handlers.transitionIn($(slices), currentAnimation, undefined, handlers.enableAllMenus);
                initGeographyTagAnim();
            });
        } else {
            handlers.previousMenuSelector = this;
            // $(handlers.previousMenuSelector).addClass(menuActiveClass);
            $(handlers.previousMenuSelector).parent().addClass(menuActiveClass);

            data = dataset.charts[currentCharts].chartData[$(handlers.previousMenuSelector).data('key')];
            drawSVG();
            handlers.transitionIn($(slices), currentAnimation, handlers.disableAllMenus, function() {
            /*
            var anim = new TimelineLite();

            anim.to("#slice2 g path", 1, {opacity:0.1},0)
                .to("#slice3 g path", 1, {opacity:0.1},0)
                .to("#slice4 g path", 1, {opacity:0.1},0)
                .to("#slice5 g path", 1, {opacity:0.1},0)
                .to("#slice6 g path", 1, {opacity:0.1},0);

            anim.to("#slice2 g path", 2, {opacity:1},1)
                .to("#slice3 g path", 2, {opacity:1},1)
                .to("#slice4 g path", 2, {opacity:1},1)
                .to("#slice5 g path", 2, {opacity:1},1)
                .to("#slice6 g path", 2, {opacity:1},1);
            */
                handlers.enableAllMenus();
            });

            initGeographyTagAnim();

        } // if (handlers.previousMenuSelector)
    }, // chartMenuHandler:function()
    yearMenuHandler: function () {
        var previousYearPos = currentYearPos;
        currentYearPos = $(this).data('index');

        doYearTransition = (currentYearPos > previousYearPos) ? 'skewLeftToRight' : 'skewRightToLeft';
        $(menuContainerSelector + " " + menuSelector + ":eq(" + currentChartPos + ")").trigger("click");
        // drawChart("update");
    }
};

function initGeographyTagAnim() {
    //new animation on mouseover
    var anim = new TimelineLite();

    anim.to("#slice3 g path", 1, { opacity: 0.1 }, 0)
        .to("#slice4 g path", 1, { opacity: 0.1 }, 0)
        .to("#slice5 g path", 1, { opacity: 0.1 }, 0);

    anim.pause();

    $("#geography_tag").mouseover(function () {
        anim.play();
    });

    $("#geography_tag").mouseout(function () {
        anim.reverse();
    });
}

$(function () {

    // update title
    document.title = charts.l(dataset.charts[currentCharts].name);

    // update as at
    $("#as_at").html(charts.l("(as at 31 March)"));

    // generate menu
    $.each(dataset.charts[currentCharts].menu, function (index, item) {
        $("#icon" + index).append(
            $('<i>', { 'class': item.icon + ' fa-5x' })
        ).append("<br>" + charts.l(item.name));

        var menuLabel;
        if (item.footnote != "") {
            menuLabel = $('<span>', {
                'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'bottom',
                'title': charts.l(item.footnote)
            }).append("<i class='" + item.icon + "'></i> " + charts.l(item.name));
        } else {
            menuLabel = $('<span>', {
                'class': 'menuColor'
            }).append("<i class='" + item.icon + "'></i> " + charts.l(item.name));
        }

        $(menuContainerSelector).append(
            $('<li>').append(
                $('<a>', { 'data-key': item.key, 'data-index': index }).append(
                    menuLabel
                )
            )
        );
    });

    // generate carousel
    $.each(dataset.carousel, function (index, item) {
        var row, text;
        if ("footnote" in item) {
            var footnote = charts.l(dataset.lookup[item.footnote]);
            var text = $('<span>', {
                'class': 'underline', 'data-toggle': 'tooltip', 'data-placement': 'bottom',
                'title': footnote
            }).append(charts.l(item.text));
        } else {
            text = charts.l(item.text);
        }

        // if (index == 0) {
        //     row = $('<div>', { 'class': "item active" }).append($('<h1>').append(text));
        // } else {
        //     row = $('<div>', { 'class': "item" }).append($('<h1>').append(text));
        // }
        // $("#text-carousel .carousel-inner").append(row);

        row = $('<div>', { 'class': "swiper-slide" }).append($('<h1>').append(text));
        $(".swiper-wrapper").append(row);
    });
    var swiper = new Swiper('.swiper-container', {
        allowTouchMove: false,
        autoplay: {
            delay: 3000,
        },
        loop: true,
        speed: 600
    });

    $(window).resize(function () {

        resizeSVG();

        // var scaled = $(parent);
        // var base_width = 900;
        // var perc = $(parent).width() / base_width * 100;
        // console.log(scaled.width(), scaled.height(), perc);
        // $('#body_container').css('font-size', perc + '%');

    // }).trigger('resize');
    });

    // resizeChart();

    handlers.enableAllMenus();
    currentYearPos = 0;
    var foundIndex = 0;

    function safeLocationHash() {
        var hash = location.hash;
        if (!hash || /^#[A-Za-z][\w\-:.]*$/.test(hash)) {
            return hash;
        }
        throw new Error("Unsafe location.hash");
    }

    var safeHash = safeLocationHash();
    if (safeHash) {
        // check if there's a hash and load it if it is valid
        var hash = safeHash.substring(1);
        if (hash in dataset.charts[currentCharts].chartData) {
            $.each(dataset.charts[currentCharts].menu, function (index, item) {
                if (hash === item.key) {
                    foundIndex = index;
                    return false;
                }
            });
        }
    }
    // console.log(window.location.hash, foundIndex);

    // console.log(window.top.location.hash);
    // var hash = window.top.location.hash.substring(1);
    // hash && $('ul.nav a[data-key="' + hash + '"]').tab('show');

    // $('.nav-tabs a').click(function (e) {
    //     $(this).tab('show');
    //     var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    //     window.top.location.hash = $(this).data('key');
    //     $('html,body').scrollTop(scrollmem);
    // });

    $(menuContainerSelector + " " + menuSelector + ":eq(" + foundIndex + ")").trigger("click");

    // $('[data-toggle="tooltip"]').tooltip();
    var Tooltip = {
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
    };
    Tooltip.initialize();

    resizeSVG();
});
