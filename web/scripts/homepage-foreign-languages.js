/*jslint browser: true, long: true */
/*global jQuery, window, gsap, blacksunplc */

jQuery(function ($) {
    "use strict";

    var arrays = blacksunplc.arrays; // import * as arrays  from "module:blacksunplc/arrays"

    var $window = $(window);
    var $body = $("body");
    var windowWidth = $window.width();
    var teaserHeight = $("#teaserForward").height();
    var bannerSectionTimeline;
    var overcommingSectionTimeline;
    var language = $body.data("lang");
    var counter_run = false;

    function counts(val, item, duration) {
        var counter = {"var": 0};
        TweenMax.to(counter, duration, {
            "var": val,
            "onUpdate": function () {
                document.querySelector("#counter" + item).innerHTML = Math.ceil(counter.var);
            },
            "onComplete": function () {
                if (val === 24) {
                    document.querySelector("#counter" + item).innerHTML = "24.53";
                }
            },
            "ease": Circ.easeOut
        });
    }

    // needed if they want to make the logo smaller
    // $window.on("resize load", function() {
    //     if (winSize >= 2100) {
    //         $(".logo-animation svg").setAttribute("viewBox", "0 0 586.49 338.89")
    //     } else if (winSize >= 1800) {
    //         $(".logo-animation svg").setAttribute("viewBox", "0 0 620 358.25")
    //     }
    // })

    $window.on("resize scroll load", function() {
        if ($(window).scrollTop() > 1350) {
            if (!counter_run) {
                counter_run = true;
                setTimeout(function() {
                    var duration = 1;
                    var upper_values = JSON.parse($("#counter-wrapper").attr("data-counter-values"));
                    for (var x = 0; x < upper_values.length; x++) {
                        counts(upper_values[x], x, duration);
                        duration += 0.8;
                    }
                }, 100);

            }
        }

        var distanceBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
        if ($window.scrollTop() < 300 || distanceBottom < 400) {
            $(".back-to-top").removeClass("back-to-top--visible");
        } else {
            $(".back-to-top").addClass("back-to-top--visible");
        }

    });

    function initCarousel() {
        $(".carousel-slides").slick({
            "infinite": true,
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": true,
            "fade": true,
            "cssEase": "linear",
            "arrows": true,
            "accessibility": false,
            "customPaging": function (slider, i) {
                return "<div id='slickdot-" + i + "'></div>";
            }
        });
        $(".carousel-diagram").slick({
            "centerMode": true,
            "infinite": true,
            "centerPadding": "30px",
            "slidesToShow": 1,
            "speed": 500,
            "variableWidth": false,
            "responsive": [
                {
                    "breakpoint": 1023,
                    "settings": {
                        "slidesToShow": 2
                    }
                }, {
                    "breakpoint": 767,
                    "settings": {
                        "slidesToShow": 1
                    }
                }
            ]
        });
    }
    initCarousel();

    var allPanels = $(".foreign-languages .accordion .acc-body").hide();
    var allactions = $(".foreign-languages .accordion .action");

    $(".foreign-languages .accordion > .acc-header").click(function() {
        var $this = $(this);
        var $target = $this.next();

        if (!$target.hasClass("active")) {
            allPanels.removeClass("active").slideUp();
            $target.addClass("active").slideDown();
            allactions.removeClass("close").addClass("plus");
            $this.find(".action").removeClass("plus").addClass("close");
        } else {
            allPanels.removeClass("active").slideUp();
            allactions.removeClass("close").addClass("plus");
        }

        return false;
    });


    $window.on("orientationchange", function () { // fix for iPad orientation change on Overview section page
        if (!$("body.theme-overview").length) {
            return;
        }
        $(".carousel-slides").slick("unslick");
        setTimeout(function () {
            initCarousel();
        }, 500);

    });

    var debounce = blacksunplc.functions.debounce; // import {debounce}  from "module:blacksunplc/functions"
    var events = blacksunplc.events; // import * as events from "module:blacksunplc/events"
    var counterUp = window.counterUp.default; // import counterUp   from "./counter-up2-1.0.1.min.js"

    var $switch = $(".tr-switch-section");
    var $counters = $(".counter");
    var $animateds = $(".animate__animated");

    $switch.on("click", function () {
        $switch.toggleClass("is-active");
    });

    /* Counter animation start when element in view. */
    arrays.forEach($counters, function (counter) {
        return new Waypoint({
            "element": counter,
            "handler": function () {
                counterUp(counter, {
                    "duration": 5000,
                    "delay": 16
                });
                waypoint.destroy();
            },
            "offset": "95%"
        });
    });

    /* Animation class "animate-active" added when element in view. */
    arrays.forEach($animateds, function (animated) {
        return new Waypoint({
            "element": animated,
            "handler": function () {
                $(animated).addClass("animate-active");
            },
            "offset": "85%"
        });
    });

    /**
     * Set header background white or transparent
     */
    function addWindowOnScrollListener() {
        var scroll = /** @type {number} */ ($(window).scrollTop());
        if (scroll < 100) {
            $("header").removeClass("white");
            $switch.show();
        } else {
            $("header").addClass("white");
            $switch.hide();
        }
    }

    events.add(window, "scroll", debounce(addWindowOnScrollListener, 50));

    // INVESTOR INSTITUTION STEWARD

    var _obj = [
        ".page-dos .dos_cols",
        ".page-dos"
    ];

    var _cls = 0;
    var activemodal = 0;

    var winSize = $(window).width();

    $window.resize(function() {
        winSize = $(window).width();
        if ($(".modal-backdrop").length > 0 && winSize > 1024) {
            $(_obj[1]).find(".dos_cols_lv2").css({"width": "calc(33.33% - 26px)"});
            $("html, body").animate({
                "scrollTop": $(".three-colors").offset().top
            },1)
            if ($(".three-colors").hasClass("active")) {
                tweenManager($(".three-colors").attr("data-val"))
            }
        } else {
            $(_obj[1]).find(".dos_cols_lv2").css({"width": "100%"});
        }
        if ($(".three-colors").hasClass("active")) {
            $("html, body").animate({
                "scrollTop": $(".three-colors").offset().top
            },0, function(){
                setTimeout(function(){
                    if (winSize < 1025) {
                        $(".main-header").removeClass("slideDown").addClass("slideUp");
                    }
                }, 1000)
            })
        }

    });

    var nohover = 0;
    var $pageDos = $(_obj[0]);
    $pageDos.on("mouseenter", function () {
        var $thisobj = $(this);
        if (nohover === 0) {
            winSize = $(window).width();
            if (winSize > 1024) {
                var overview = $thisobj.find(".overview-copy div");
                if (overview.length > 0) {
                    var i = overview.height();
                    $thisobj.find(".overview-copy").css({"height": i + "px"});
                }
                $thisobj.find(".dos_cols_lv2").addClass("a1");
            }
            $thisobj.find(".logospin2").addClass("go");
        }
        $thisobj.addClass("_hover");
    });
    $pageDos.on("mouseleave", function () {
        var $thisobj = $(this);
        if (nohover === 0) {
            $thisobj.find(".overview-copy").css({"height": "0px"});
            $thisobj.find(".dos_cols_lv2").removeClass("a1");
            $thisobj.find(".logospin2").removeClass("go");
        }
        $thisobj.removeClass("_hover");
    });


    $(".three-colors .anchor").click(function() {
        $(".three-colors").addClass("active").attr("data-val", $(this).parents(".flex-child").data("val"))
        $(this).find(".link").fadeOut();
        nohover = 1;
        _cls = $(this).parents(".flex-child").attr("data-val");
        tweenManager($(this).parents(".flex-child").attr("data-val"));
        window.location.hash = $(this).data("target");
        $("html, body").animate({
            "scrollTop": $(".three-colors").offset().top
        },
            1000, function () {
                setTimeout(function () {
                    if (winSize < 1025) {
                        $(".main-header").removeClass("slideDown").addClass("slideUp");
                    } else {
                        $(".main-header").removeClass("slideUp").addClass("slideDown");
                    }
                }, 10)
            }
        );

    });

    var safeHash = blacksunplc.security.safeLocationHash();
    if (safeHash) {
        if (safeHash === "#un-investisseur-actif-et-exigeant" ||
            safeHash === "#une-institution-responsable" ||
            safeHash === "#un-gestionnaire-avise" ||
            safeHash === "#voraus-als-investor" ||
            safeHash === "#voraus-als-institution" ||
            safeHash === "#voraus-als-partner") {
            $("html, body").animate({
                "scrollTop": $(".three-colors").offset().top
            },100, function() {$(".anchor[data-target='" + safeHash + "']").trigger("click")});
        }
        else if (safeHash === "#exposition-mondiale" ||
            safeHash === "#profil-de-credit-de-temasek" ||
            safeHash === "#temasek-bonitatsprofil"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='" + safeHash + "']").offset().top
            },100, function() {
                $(".anchor[data-scroll='" + safeHash + "']").trigger("click")
            });
        }
        else if (safeHash === "#globale-ausrichtung"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='" + safeHash + "']").offset().top
            },100, function() {$(".anchor[data-scroll='" + safeHash + "']").trigger("click")});
        }
        else if (safeHash === "#portefeuille-de-sector" ||
            safeHash === "#approche-investissement-flexible"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='#portefeuille-de-sector']").offset().top
            },100, function() {
                $(".anchor[data-scroll='#portefeuille-de-sector']").trigger("click")
                setTimeout(
                    function (){
                        var index = 0;
                        if (safeHash === "#approche-investissement-flexible") {
                            index = 1
                        }
                        $("#modal3 .carousel").slick("slickGoTo", index);
                    }, 500
                )
            });
        }
        else if (safeHash === "#portfolio-sektor" ||
            safeHash === "#flexibler-investitionsansatz"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='#portfolio-sektor']").offset().top
            },100, function() {
                $(".anchor[data-scroll='#portfolio-sektor']").trigger("click")
                setTimeout(
                    function (){
                        var index = 0;
                        if (safeHash === "#flexibler-investitionsansatz") {
                            index = 1
                        }
                        $("#modal3 .carousel").slick("slickGoTo", index);
                    }, 500
                )
            });
        }
        else if (safeHash === "#valeur-nette-du-portefeuille" ||
            safeHash === "#taux-de-rentabilite-pour-l-actionnaire-annualise-un-an" ||
            safeHash === "#investissements-cessions-de-participations" ||
            safeHash === "#taux-de-rentabilite-pour-l-actionnaire-annualise-vingt-ans"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='#valeur-nette-du-portefeuille']").offset().top
            },100, function() {
                $(".anchor[data-scroll='#valeur-nette-du-portefeuille']").trigger("click");
                setTimeout(
                    function (){
                        var index = 0;
                        if (safeHash === "#investissements-cessions-de-participations") {
                            index = 1
                        } else if (safeHash === "#taux-de-rentabilite-pour-l-actionnaire-annualise-un-an") {
                            index = 2
                        } else if (safeHash === "#taux-de-rentabilite-pour-l-actionnaire-annualise-vingt-ans") {
                            index = 3
                        }
                        $("#modal1 .carousel").slick("slickGoTo", index);
                    }, 500
                )
            });
        }
        else if (safeHash === "#portfoliowert" ||
            safeHash === "#investitionen-verausserung" ||
            safeHash === "#rendite-1-jahr" ||
            safeHash === "#rendite-20-jahre"
        ) {
            $("html, body").animate({
                "scrollTop": $(".anchor[data-scroll='#portfoliowert']").offset().top
            },100, function() {
                $(".anchor[data-scroll='#portfoliowert']").trigger("click");
                setTimeout(
                    function (){
                        var index = 0;
                        if (safeHash === "#investitionen-verausserung") {
                            index = 1
                        } else if (safeHash === "#rendite-1-jahr") {
                            index = 2
                        } else if (safeHash === "#rendite-20-jahre") {
                            index = 3
                        }
                        $("#modal1 .carousel").slick("slickGoTo", index);
                    }, 500
                )
            });
        }
    }

    $("#robust .anchor.modal-link").on("click", function(){
        window.location.hash = $(this).attr("data-scroll");
    })

    $(".modal.have-carousel .btn-close").on("click", function() {
        history.replaceState(null, null, " ");
    });

    $(".three-cols .btn-close").click(function() {
        if (winSize >= 1025) {
            $(".main-header").removeClass("slideUp");
        }
        setTimeout(
            function(){
                $(".dos_cols_lv2").css("margin-top", 0);
            }, 1000
        )
        $(".three-colors").removeClass("active")
        history.replaceState(null, null, " ");
    });

    function tweenManager(_id) {

        activemodal = _id;
        var _t = $(_obj[1]).find(".dos_cols" + _id + " .dos_cols_lv2").css("width");
        $(_obj[1]).find(".dos_cols_lv2").addClass("no-delay");
        if (winSize > 1024) {
            $(_obj[1]).find(".dos_cols_lv2").css({"width": _t});
        }
        $(_obj[1]).addClass("_fire" + _id);
        setTimeout(function() {
            $(_obj[1]).find(".dos_cols_lv2").removeClass("no-delay");
            $(".tri" + _id).click();
            if (winSize > 1024) {
                $(".modal-backdrop").attr("data-color", $(_obj[1]).find(".dos_cols" + _id).data("background"));
                var parentHeight = $('.three-colors').height();
                var childHeight = $(_obj[1]).find(".dos_cols" + _id + " .dos_cols_lv2").height();
                $('.dos_cols_lv2').css('margin-top', (parentHeight - childHeight) / 2 - 20);
            }
        }, 400);

    }

    $body.on("click", "#modal_do1 .btn-close", function() {
        exitDos(1);
    });
    $body.on("click", "#modal_do2 .btn-close", function() {
        exitDos(2);
    });
    $body.on("click", "#modal_do3 .btn-close", function() {
        exitDos(3);
    });


    function exitDos(_id) {

        dlyBolcker(2500);

        $(_obj[1]).removeClass("_ani1");
        setTimeout(function() {
            $(_obj[1]).removeClass("_fire" + _id);
            $(".modal-backdrop").removeClass("nodim");
            $(_obj[1]).find(".link").fadeIn();
            nohover = 0;
        }, 1000);

        setTimeout(function() {
            $(_obj[1]).find(".dos_cols_lv2").css({"width": "100%"});
        }, 2000);

    }


    $("nav > ul li").click(function() {
        if ($body.hasClass("navigation-active")) {
            $("button.hamburger").toggleClass("is-active");
            $body.toggleClass("navigation-active");
        }
    });


    function dlyBolcker(dly) {

        $(".do_bklr").addClass("on");
        setTimeout(function() {
            $(".do_bklr").removeClass("on");

            $(".page-dos .dos_cols").find(".dos_cols_lv2").removeClass("a1");
            $(".page-dos .dos_cols").find(".logospin2").removeClass("go");
            $(".page-dos .dos_cols").removeClass("_hover");

        }, dly);

    }

    // investor diagram
    var _diagram = $("#active-investor-diagram");
    if (_diagram.length > 0) {
        _diagram.get(0).wp = new Waypoint({
            "element": _diagram.get(0),
            "handler": function () {
                $("#active-investor-diagram svg > g").addClass("animated");
            },
            "offset": "50%"
        });
    }


    $("#active-investor-diagram .slice-objects").on("mouseover", function () {
        var _t = $(this);
        var _tParent = _t.parent();
        var id = _tParent.prop("id");
        _tParent.addClass("hover");
        _tParent.removeClass("faded");

        $(".slice-group.hover").each(function (index, element) {
            if (element.id != id) {
                $(element).removeClass("hover");
            }
        });

        UpdateFadedState();
    });

    $("#active-investor-diagram .slice-objects").parent().children(".mouseover").on("mouseout", function () {
        var _t = $(this);
        var _tParent = _t.parent();
        _tParent.removeClass("hover");
        UpdateFadedState();
    });

    $("#active-investor-diagram .slice-group").click(function () {
        var _t = $(this);
        window.setTimeout(function () {
            _t.addClass("active");
            UpdateFadedState();
            $("#investor-dialog-" + _t.data("dialog")).removeClass("inactive").addClass("active");
        }, 1);
    });

    $("#active-investor-diagram .investor-dialog").click(function (evt) {
        evt.preventDefault();
        return false;
    });

    $("#active-investor-diagram .investor-dialog .investor-dialog-close").click(function () {
        $("#active-investor-diagram .slice-group.active").removeClass("active");
        $(".investor-dialog.active").removeClass("active").addClass("inactive");
        UpdateFadedState();
    });

    $(".investor-close").click(function () {
        $("#active-investor-diagram .slice-group.active").removeClass("active");
        $(".investor-dialog.active").removeClass("active").addClass("inactive");
        UpdateFadedState();
    });

    $("#active-investor-diagram .investor-dialog").addClass("inactive");

    var updateFadedStateTimeout = null;

    function UpdateFadedState() {

        if (updateFadedStateTimeout != null) {
            window.clearTimeout(updateFadedStateTimeout);
        }

        updateFadedStateTimeout = window.setTimeout(function () {

            updateFadedStateTimeout = null;
            if ($("#active-investor-diagram .slice-group.active").length == 0 &&
                $("#active-investor-diagram .slice-group.hover").length == 0) {
                $("#active-investor-diagram .slice-group.faded").removeClass("faded");
            } else {
                $("#active-investor-diagram .slice-group").each(function (index, element) {
                    var _e = $(element);
                    if (!_e.hasClass("hover")) {
                        _e.addClass("faded");
                    } else {
                        _e.removeClass("faded");
                    }
                });
            }


        }, 50);
    }

    $(window).click(function (evt) {
        $("#active-investor-diagram .slice-group.active").removeClass("active");
        $(".investor-dialog.active").removeClass("active").addClass("inactive");
        UpdateFadedState();
    });

});
