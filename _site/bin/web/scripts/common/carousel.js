/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, jQuery, location, parseInt, setTimeout, window */

jQuery(function ($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays   from "module:blacksunplc/arrays"
    var security = blacksunplc.security; // import * as security from "module:blacksunplc/security"

    /**
     * @param {!Element} carousel
     * @param {boolean} pager
     * @param {number} pagerCurrent
     * @param {number} pagerTotal
     */
    function afterInit(carousel, pager, pagerCurrent, pagerTotal) {

        if (pager) {
            /* Append pager HTML. */
            $(carousel).append("<div class='slick-pager'>" +
                "<span class='slick-pager-current'>" + pagerCurrent + "</span>" + "/" +
                "<span class='slick-pager-total'>" + pagerTotal + "</span>" +
                "</div>");
        }

        if (pagerTotal < 2) {
            $(".slick-pager", carousel).hide();
        }
    }

    /**
     * @param {!Element} carousel
     * @param {boolean} pager
     * @param {number} nextSlide
     */
    function beforeChange(carousel, pager, nextSlide) {
        if (pager) {
            /* Update pager number. */
            $(".slick-pager-current", carousel).text(nextSlide + 1);
        }
    }

    /**
     * @param {!Element} carousel
     * @param {boolean} pager
     * @param {boolean} vertical
     */
    function afterChange(carousel, pager, vertical) {

        if (vertical) {
            $(".slick-current", carousel).scrollTop(0);
        }

        if (pager) {
            $("#share-dialog").hide();
            var $active = $(".slick-active", carousel);
            if ($active.length) {
                var activePageHash = /** @type {string} */ ($active.attr("data-page"));
                /*
                 * Use location.hash to set hash instead of history push state could
                 * prevent the browser back and forward button not working properly.
                 */
                location.hash = activePageHash;
            }
        }
    }

    /**
     * @param {!Element} carousel
     * @param {string} page
     */
    function initialiseCarousel(carousel, page) {

        var $carousel = $(carousel);
        var pagerTotal = $carousel.children().length;
        var data = /** @type {{dots: boolean, arrows: boolean, draggable: boolean, swipe: boolean, vertical: boolean, pager: boolean}} */ ($carousel.data());

        var config = {
            "dots": data.dots || false,
            "arrows": data.arrows || false,
            "infinite": true,
            "speed": 300,
            "slidesToShow": 1,
            "adaptiveHeight": true,
            "draggable": data.draggable || false,
            "swipe": data.swipe || false,
            "rows": 0,
            "prevArrow": "<button type='button' class='slick-prev'><i class='tr-icon arrow-tail-down-before'></i></button>",
            "nextArrow": "<button type='button' class='slick-next'><i class='tr-icon arrow-tail-down-before'></i></button>"
        };

        if (data.vertical) {
            config.vertical = true;
        }

        var pagerCurrent;
        if (page) {
            pagerCurrent = parseInt($("[data-toggle='modal'][data-page=" + page + "]").attr("data-slideindex"), 10) + 1;
        } else {
            pagerCurrent = 1;
        }

        $carousel.on("init", function () {
            afterInit(carousel, data.pager, pagerCurrent, pagerTotal);
        });

        $carousel.slick(config);

        if (page && $(".slick-item[data-page=" + page + "]", carousel).length) {
            $carousel.slick("slickGoTo", $("[data-toggle='modal'][data-page=" + page + "]").attr("data-slideindex"));
        }

        $carousel.on("beforeChange", function (/** !jQuery.Event */ event, /** !Object */ slick, /** number */ currentSlide, /** number */ nextSlide) {
            beforeChange(carousel, data.pager, nextSlide);
        });

        $carousel.on("afterChange", function () {
            afterChange(carousel, data.pager, data.vertical);
        });

        $(window).on("resize", function () {
            setTimeout(function () {
                $carousel.slick("setPosition");
            }, 1000);
        });
    }

    function init() {
        var page = security.safeLocationHash().slice(1);
        arrays.forEach($(".carousel"), function (carousel) {
            initialiseCarousel(carousel, page);
        });
    }

    init();

    /**
     * @param {!Element} slideMajorInvestments
     */
    function initialiseInvestmentCarousel(sectionCarousel) {
        var $sectionCarousel = $(sectionCarousel);
        var numberOfSlides = $sectionCarousel.data("slides");
        if (!numberOfSlides) {
            numberOfSlides = 3;
        }
        var SLICK_CONFIG = {
            "dots": false,
            "infinite": true,
            "speed": 300,
            "slidesToShow": numberOfSlides,
            "slidesToScroll": 1,
            "arrows": true,
            "responsive": [
                {
                    "breakpoint": 1201,
                    "settings": {
                        "slidesToShow": 3
                    }
                }, {
                    "breakpoint": 992,
                    "settings": {
                        "slidesToShow": 2
                    }
                }, {
                    "breakpoint": 601,
                    "settings": {
                        "slidesToShow": 1,
                        "arrows": false
                    }
                }
            ]
        };

        $sectionCarousel.slick(SLICK_CONFIG);
    }

    arrays.forEach($(".tr-section__carousel"), initialiseInvestmentCarousel);

});
