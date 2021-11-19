/*jslint browser: true, fudge: true, long: true */
/*global $, Waypoint, blacksunplc, document, jQuery, setTimeout, window */

/** @module blacksunplc/contentpage */
(function () {
    "use strict";


    var objects = blacksunplc.objects; // import * as objects from "module:blacksunplc/objects"
    var arrays = blacksunplc.arrays; // import * as arrays  from "module:blacksunplc/arrays"

    /** @param {!Element} fakeScroll */
    function initFakeScroll(fakeScroll) {
        var $fakeScroll = $(fakeScroll);

        var $tblLeftWrap = $fakeScroll.siblings(".tbl-left-wrap");
        var $tblRightWrap = $fakeScroll.siblings(".tbl-right-wrap");
        var $rightTable = $("table", $tblRightWrap);
        var $tblHolder = $fakeScroll.parents(".tbl-holder");

        var leftWidth = /** @type {number} */ ($tblLeftWrap.outerWidth());
        var tableWidth = /** @type {number} */ ($rightTable.outerWidth());
        var holderWidth = /** @type {number} */ ($tblHolder.outerWidth());

        $(".scroll", fakeScroll).css({
            "width": tableWidth
        });

        $fakeScroll.css({
            "margin-left": leftWidth,
            "width": holderWidth - leftWidth
        });
    }

    /** @param {!Element} tblRightWrap */
    function initTableRightWrap(tblRightWrap) {
        var $tables = $("table", tblRightWrap);
        var tableWidth = /** @type {number} */ ($tables.width());
        $(tblRightWrap).scrollLeft(tableWidth);
    }

    /* Export these functions so they can called from other modules. */
    var exports = {};

    exports.initialTableWidthResize = function () {
        arrays.forEach($(".fake-scroll"), initFakeScroll);
    };

    exports.initialTableScrollToRight = function () {
        arrays.forEach($(".tbl-right-wrap"), initTableRightWrap);
    };

    blacksunplc.contentpage = objects.freeze(exports);

}());

jQuery(function ($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays        from "module:blacksunplc/arrays"
    var events = blacksunplc.events; // import * as events        from "module:blacksunplc/events"
    var functions = blacksunplc.functions; // import * as functions     from "module:blacksunplc/functions"
    var security = blacksunplc.security; // import * as security      from "module:blacksunplc/security"
    var contentpage = blacksunplc.contentpage; // import * as contentpage   from "./content-page.js"
    var cookieconsent = blacksunplc.cookieconsent; // import * as cookieconsent from "./cookieconsent-tr.js"

    var $window = $(window);
    var $body = $(document.body);

    var $wechatCode = $(".wechat-code");
    new Waypoint({
        "element": $wechatCode[0],
        "handler": function () {
            $wechatCode.removeClass("active");
        },
        "offset": "100%"
    });

    var $related = $(".related-list");
    if ($related.length) {
        new Waypoint({
            "element": $related[0],
            "handler": function () {
                $related.addClass("fadeup");
            },
            "offset": "90%"
        });
    }

    if ($(document.body).hasClass("institution-heartbeat")) {
        $(window).on("orientationchange", function () {
            /* Attempt to reload iframe sources. */
            arrays.forEach($("#our-temasek-heartbeat_our-staff iframe"), function (iframe) {
                var $iframe = $(iframe);
                var source = /** @type {string} */ ($iframe.attr("src"));
                $iframe.attr("src", source);
            });
        });
    }

    var $flows = $([
        "body:not(.no-content-flow, .performance-overview) .contentpage-body > *:not(.flow-ignore)",
        "body:not(.no-content-flow) .contentpage-body .flow-this"
    ].join());
    arrays.forEach($flows, function (flow) {
        /* `return` only to suppress the "Do not use 'new' for side effects" warning. */
        return new Waypoint({
            "element": flow,
            "handler": function () {
                $(flow).addClass("fadeup");
            },
            "offset": "90%"
        });
    });

    /* Note The `outerWidth` method is not applicable to window objects; use function `layoutViewport` from "module:blacksunplc/css" instead. */
    var windowOuterWidth = /** @type {number} */ $(window).outerWidth();
    if (windowOuterWidth < 768) {
        arrays.forEach($("body.performance-overview .contentpage-body .chart-row"), function (chartRow) {
            /* `return` only to suppress the "Do not use 'new' for side effects" warning. */
            return new Waypoint({
                "element": chartRow,
                "handler": function () {
                    $(chartRow).addClass("fadeup");
                },
                "offset": "130%"
            });
        });

        arrays.forEach($("body.overview-changes-in-accounting-standards .chart-container.flow-ignore"), function (chartContainer) {
            /* `return` only to suppress the "Do not use 'new' for side effects" warning. */
            return new Waypoint({
                "element": chartContainer,
                "handler": function () {
                    $(chartContainer).addClass("fadeup");
                },
                "offset": "90%"
            });
        });
    }

    var $images = $(".fade-in-up");
    if ($images.length) {
        new Waypoint({
            "element": $images[0],
            "handler": function () {
                $images.addClass("go");
            },
            "offset": "70%"
        });
    }

    function initialiseAccordions() {
        if ($(".accordionWrapper").length) {
            /*
             * Event for the "expand all"/"Collapse all" button.
             */
            $(".accordion-controls").on("click", function (/** !jQuery.Event */ event) {
                var $accordionControls = $(event.currentTarget);

                $("html, body").animate({
                    "scrollTop": $accordionControls.offset().top - 80
                }, 800, "linear");

                var $accordionWrapper = $accordionControls.closest(".accordionWrapper");
                var $accordion = $(".accordion", $accordionWrapper);

                $accordionControls.toggleClass("open");

                var $accordionControlsTextSpan = $("span", $accordionControls);
                var $accordionItemHeaders = $(".accordion-item-header", $accordion);
                if ($accordionControls.hasClass("open")) {
                    if ($(document.documentElement).attr("lang") === "zh") {
                        $accordionControlsTextSpan.text("闭合全部内容");
                    } else {
                        $accordionControlsTextSpan.text("Close all");
                    }

                    $accordionItemHeaders.addClass("active");
                    $(".accordion-item-content", $accordion).slideDown("slow");

                } else {
                    if ($(document.documentElement).attr("lang") === "zh") {
                        $accordionControlsTextSpan.text("浏览全部内容");
                    } else {
                        $accordionControlsTextSpan.text("Open all");
                    }
                    $accordionItemHeaders.removeClass("active");
                    $(".accordion-item-content", $accordion).slideUp("slow");
                }
            });
        }

        /*
         * Event for expanding/collapse of individual accordions.
         */
        $(".accordion-item-header a, .accordion-item-footer a").on("click", function (/** !jQuery.Event */ event) {
            event.preventDefault();

            var $clickedAnchor = $(event.currentTarget);
            $clickedAnchor.parent().toggleClass("active");

            var $mainHeader = $(".main-header");
            var mainHeaderHeight = /** @type {number} */ ($mainHeader.height());
            var parentTop = $clickedAnchor.parents(".accordion-item").offset().top;

            $("html, body").animate({
                "scrollTop": parentTop - mainHeaderHeight - 20
            }, 800, "linear");


            var $accordionItem = $clickedAnchor.closest(".accordion-item");
            $(".accordion-item-content", $accordionItem).slideToggle("slow");

            /* Change state of "expand"/"collapse" all button. */
            var $accordionWrapper = $clickedAnchor.closest(".accordionWrapper");
            var $accordionControls = $(".accordion-controls", $accordionWrapper);

            var collapseText = /** @type {string} */ ($clickedAnchor.attr("data-collapse-text"));
            var cacheCollapseText = /** @type {string} */ ($("span", $clickedAnchor).text());

            $clickedAnchor.attr("data-collapse-text", cacheCollapseText);
            $("span", $clickedAnchor).text(collapseText);

            if ($accordionControls.length) {
                var $accordionControlsTextSpan = $("span", $accordionControls);
                /*
                 * If there are any that are closed then show "Open". Otherwise
                 * all must be open so show close
                 */
                var $closedItems = $(".accordion-item-header:not(.active)", $accordionWrapper);
                if ($closedItems.length === 0) {
                    $accordionControls.addClass("open");
                    if ($(document.documentElement).attr("lang") === "zh") {
                        $accordionControlsTextSpan.text("闭合全部内容");
                    } else {
                        $accordionControlsTextSpan.text("Close all");
                    }
                } else {
                    if ($(document.documentElement).attr("lang") === "zh") {
                        $accordionControlsTextSpan.text("浏览全部内容");
                    } else {
                        $accordionControlsTextSpan.text("Open all");
                    }
                    $accordionControls.removeClass("open");
                }
            }
        });
    }

    /**
     * Initialises a carousel passed in as a JQuery object.
     * If carouselSlideIndex should be an int and sets which
     * slide to start on by index.
     * @param {!Element} carousel
     * @param {number=} carouselSlideIndex - Defaults to zero.
     */
    function initialiseCarousel(carousel, carouselSlideIndex) {
        var $carousel = $(carousel);

        var config = {};
        config.slide = "div";
        config.dots = true;
        config.pauseOnHover = false;

        if (carouselSlideIndex) {
            config.initialSlide = carouselSlideIndex; /* Default is zero.*/
        }

        config.nextArrow =
            "<div class=\"link-icon link-icon-arrow next-arrow\">" +
            "   <span class=\"icon\">" +
            "       <span class=\"icon-inner\"></span>" +
            "   </span>" +
            "</div>";
        config.prevArrow =
            "<div class=\"link-icon link-icon-arrow previous-arrow\">" +
            "   <span class=\"icon\">" +
            "       <span class=\"icon-inner\"></span>" +
            "   </span>" +
            "</div>";
        var animate = $carousel.data("animate");
        if (animate) {
            config.autoplay = true;
            config.autoplaySpeed = /** @type {(number|undefined)} */ ($carousel.data("display-time"));
            config.speed = /** @type {(number|undefined)} */ ($carousel.data("animation-speed"));

            var transition = $carousel.data("transition");
            if (transition === "fade") {
                config.fade = true;
            }
        }

        $carousel.slick(config);

        $carousel.on("beforeChange", function () {
            $carousel.addClass("is-scrolling");
        });

        $carousel.on("afterChange", function () {
            $carousel.removeClass("is-scrolling");
        });
    }

    /**
     * `carouselContainer` is checked for all carousel child elements. Any that
     * are visible will be initialised if they aren't already. If they are
     * already initialised then they will resume auto play.
     * If any are hidden that are initialised then they will be paused.
     * @param {!Element} carouselContainer
     */
    function initialiseOrUpdateCarousels(carouselContainer) {
        arrays.forEach($(".carousel-slides", carouselContainer), function (carousel) {
            var $carousel = $(carousel);

            if (!$carousel.hasClass("slick-initialized")) {
                /* Initialise if visible. Do nothing otherwise. */
                if ($carousel.is(":visible")) {
                    initialiseCarousel(carousel);
                }
            } else if ($carousel.data("animate")) {
                /* If configured to animate, pause if hidden, resume if not. */
                if ($carousel.is(":visible")) {
                    $carousel.slick("slickPlay");
                } else {
                    $carousel.slick("slickPause");
                }
            }
        });
    }

    /**
     * Initialises expand inner container to full width.
     */
    function initialFullWidth() {

        var windowWidth = /** @type {number} */ ($window.width());
        var $contentpageBody = $(".contentpage-body");

        arrays.forEach($(".full-width"), function (container) {
            var $container = $(container);
            $container.attr("style", "");
            var contentpageBodyWidth = /** @type {number} */ ($contentpageBody.width());
            if (contentpageBodyWidth < windowWidth) {
                var gap = (windowWidth - contentpageBodyWidth) / 2;
                $container.css({
                    "margin-left": -gap,
                    "margin-right": -gap
                });
            }
        });
    }

    /**
     * Initialises animation request.
     */
    function initialAnimationRequest() {
        arrays.forEach($(".animation-request"), function (animationRequest) {
            /* `return` only to suppress the "Do not use 'new' for side effects" warning. */
            return new Waypoint({
                "element": animationRequest,
                "handler": function () {
                    $(animationRequest).addClass("animate");
                },
                "offset": "75%"
            });
        });
    }

    function initialTableScrollSync() {
        var $fakeScrolls = $(".fake-scroll");
        if ($fakeScrolls.length) {
            $fakeScrolls.on("scroll", function (/** !jQuery.Event */ event) {
                var scrollLeft = /** @type {number} */ ($(event.currentTarget).scrollLeft());
                $(event.currentTarget).siblings(".tbl-right-wrap").scrollLeft(scrollLeft);
            });

            $(".tbl-right-wrap").on("scroll", function (/** !jQuery.Event */ event) {
                var scrollLeft = /** @type {number} */ ($(event.currentTarget).scrollLeft());
                $(event.currentTarget).siblings(".fake-scroll").scrollLeft(scrollLeft);
            });
        }
    }

    /* Initialise all (visible) carousels on the page. */
    initialiseOrUpdateCarousels(document.body);
    initialiseAccordions();
    initialFullWidth();
    initialAnimationRequest();
    contentpage.initialTableWidthResize();
    initialTableScrollSync();
    contentpage.initialTableScrollToRight();

    /* Fade out video title once video starts playing. */
    if ($(".video-wrapper").length) {
        $(document).on("click", ".vjs-big-play-button", function (/** !jQuery.Event */ event) {
            var $button = $(event.currentTarget);
            var $wrapper = $button.closest(".video-wrapper");
            var $subtitle = $(".video-subtitle", $wrapper);
            $subtitle.css("opacity", 0);
        });
    }

    if ($body.hasClass("major-investments") && $(".tableauPlaceholder").length) {
        if (security.safeLocationHash()) {
            setTimeout(function () {
                var scrollTop = /** @type {number} */ ($(window).scrollTop());
                $("html,body").animate({
                    "scrollTop": scrollTop - 100
                });
            }, 900);
        }
    }

    function merittHandlerIn(/** !jQuery.Event */ event) {
        var type = $(event.currentTarget).attr("data-type");
        $(".meritt-petal-text." + type + ", .meritt-petal-title." + type).addClass("animate");
    }

    function merittHandlerOut() {
        $(".meritt-petal-text, .meritt-petal-title").removeClass("animate");
    }

    if ($body.hasClass("our-meritt-values") && /** @type {number} */ $window.width() > 767) {
        if ($body.hasClass("ie")) {
            $(".meritt-petal-title").hide();
            setTimeout(function () {
                $(".meritt-petal-title").show();
            }, 3000);
        }
        $(".meritt-map-transparent .meritt-hover").on("mouseenter", merittHandlerIn).on("mouseleave", merittHandlerOut);
    }

    var scrollListener = functions.debounce(function () { // Debounced with blacksunplc library to run every 100ms.
        cookieconsent.dismiss();
    });
    events.add(window, "scroll", scrollListener);

    var resizeListener = functions.debounce(function () { // Debounced with blacksunplc library to run every 100ms.
        initialFullWidth();
        contentpage.initialTableWidthResize();
    }, 100);

    events.add(window, "resize", resizeListener);

});
