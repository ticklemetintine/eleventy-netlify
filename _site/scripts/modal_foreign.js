/*jslint browser: true, fudge: true, multivar: true, long: true, this: true, for: true */
/*global jQuery */

jQuery(function ($) {
    "use strict";


    var $html = $("html"),
        $body = $("body"),
        $elem = $(".foreign-languages .modal"),
        $mainNav = $(".main-navigation"),
        $forceItems = $(".quicklinks, .scroll-spinner"),
        $btnClose = $elem.find(".btn-close"),
        $btnModal = $(".foreign-languages [data-toggle=\"modal\"]"),
        hashEnable = true;

    var init = function () {

        if ($btnModal.length) {

            loop();

            $(window).on("load", function () {
                hashToggleModal();
            });

            $btnClose.on("click", hideModal);
            //$elem.on('click', hideModal);
        }
    };

    var loop = function () {

        $btnModal.each(function () {

            var $btnModal = $(this);
            $btnModal.on("click", triggerModal);

        });
    };

    var triggerModal = function (event) {

        var data = $(this).data();
        var target = data.target;
        var page = data.page;
        var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        if ($(target).length && $(target).hasClass("modal")) {

            $body.append("<div class=\"modal-backdrop\" />").fadeIn();
            $(target).removeClass("is-hidden");

            fn_lockMouse(1);

            // $mainHeader.css({
            //     "padding-left": scrollBarWidth,
            //     "right": scrollBarWidth
            // });

            if (!$body.hasClass("navigation-active")) {
                $mainNav.css("margin-left", scrollBarWidth);
            }

            $forceItems.css("margin-right", scrollBarWidth);
            $html.css("padding-right", scrollBarWidth);
            $html.addClass("is-locked");


        } else {

            console.log(target + " no exist");
            return;
        }

        if ($(target).find(".slick-slider").length) {

            $(target).find(".slick-slider").slick("setPosition");
            $(target).find(".slick-slider").slick("slickGoTo", page - 1);

            fn_lockMouse(1);

        } else {

            console.log("modal carousel not exist");
            return;

        }

        event.preventDefault();

    };

    var hideModal = function (e) {

        var correctTarget = false;


        if (!$elem.find(".modal-content").is(e.target) && $elem.find(".modal-content").has(e.target).length === 0) {

            $elem.addClass("is-hidden");
            correctTarget = true;

        } else if ($elem.find(".modal-content .btn-close").is(e.target)) {

            $(this).parents(".modal").toggleClass("is-hidden");
            correctTarget = true;
        }

        if (correctTarget) {

            fn_lockMouse(0);


            $body.find(".modal-backdrop").fadeOut(500, function() {
                $(this).remove();
                // $mainHeader.css({
                //     "padding-left": "",
                //     "right": ""
                // });
                $mainNav.css("margin-left", "");
                $forceItems.css("margin-right", "");
                $html.removeClass("is-locked");
                $html.css("padding-right", "");

            });

            if ("pushState" in history) {

                history.pushState("", document.title, blacksunplc.security.safeLocationHash() +
                    window.location.search);

            } else {

                window.location.hash = "";
            }
        }
    };

    var hashToggleModal = function () {


        var id = blacksunplc.security.safeLocationHash();
        var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (!hashEnable) {
            return;
        }

        if (id === "") {
            // console.log('id is empty');
            return;
        }

        id = id.split("?")[0];

        if (!$(id).length) {

            console.log("id element is not exist");
            return;

        } else if ($(id).hasClass("modal")) {

            $body.append("<div class=\"modal-backdrop\" />").hide().fadeIn();
            // $mainHeader.css({
            //     "padding-left": scrollBarWidth,
            //     "right": scrollBarWidth
            // });
            if (!$body.hasClass("navigation-active")) {
                $mainNav.css("margin-left", scrollBarWidth);
            }
            $forceItems.css("margin-right", scrollBarWidth);
            $html.css("padding-right", scrollBarWidth);
            $html.addClass("is-locked");
            $(id).removeClass("is-hidden");

        }

        activateFirst(1);
    };

    $(".modal.have-carousel .slick-vertical .slick-arrow.slick-next, .modal.have-carousel .slick-vertical .slick-arrow.slick-prev").click(function() {
        $(".modal.have-carousel .slick-vertical .slick-slide").scrollTop(0);
    });

    $(window).resize(function() {
        $(".modal .modal-content").css({"height": $(window).height() + "px"});
    });


    function fn_lockMouse(_id) {

        $(".modal .modal-content").css({"height": $(window).height() + "px"});

        if (_id === 1) {
            $(".modal.have-carousel .slick-vertical .slick-slide").scrollTop(0);
            activateFirst(1);
            $(".main-header__outer").css({"display": "none"});
        }

        if (_id === 0) {
            activateFirst(0);
            $(".main-header__outer").css({"display": "flex"});
        }


    }

    init();


    var _animateChart1 = new animateChart(".chrt1");
    var _animateChart2 = new animateChart(".crt_split");
    var _animateChart3 = new animateChart(".barchrt");
    var _animateChart4 = new animateChart(".zigchrt");
    var _animateChart5 = new animateChart(".crt_sector");
    var _animateChart6 = new animateChart(".crt_liquidity");
    var _animateChart7 = new animateChart(".timeschrt");


    $("#modal1").find(".slick-next, .slick-prev").click(function() {
        setTimeout(fn_mod1ChartManager, 500);
    });
    $("#modal3").find(".slick-next, .slick-prev").click(function() {
        setTimeout(fn_mod2ChartManager, 500);
    });
    $("#modal4").find(".slick-next, .slick-prev").click(function() {
        setTimeout(fn_mod3ChartManager, 500);
    });


    function fn_mod1ChartManager() {

        var _t = $("#modal1 .slick-pager-current").text();

        if (_t === "1") {
            _animateChart1.on();
        } else {
            _animateChart1.off();
        }
        if (_t === "2") {
            _animateChart2.on();
        } else {
            _animateChart2.off();
        }
        if (_t === "3") {
            _animateChart3.on();
        } else {
            _animateChart3.off();
        }
        if (_t === "4") {
            _animateChart4.on();
        } else {
            _animateChart4.off();
        }

    }

    function fn_mod2ChartManager() {

        var _t = $("#modal3 .slick-pager-current").text();

        if (_t === "1") {
            _animateChart5.on();
        } else {
            _animateChart5.off();
        }
        if (_t === "2") {
            _animateChart6.on();
        } else {
            _animateChart6.off();
        }

    }

    function fn_mod3ChartManager() {

        var _t = $("#modal4 .slick-pager-current").text();

        if (_t === "1") {
            _animateChart7.on();
        } else {
            _animateChart7.off();
        }

    }


    function activateFirst(_id) {
        if (_id === 1) {
            setTimeout(function() {
                _animateChart1.on();
            }, 10);
            setTimeout(function() {
                _animateChart7.on();
            }, 1000);
            setTimeout(function() {

                fn_mod1ChartManager();
                fn_mod2ChartManager();

            }, 1000);
        } else {
            _animateChart1.off();
            _animateChart7.off();
        }

    }


});


