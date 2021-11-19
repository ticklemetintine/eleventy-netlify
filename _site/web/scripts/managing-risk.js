/*jslint browser: true, fudge: true, long: true */
/*global Waypoint, blacksunplc, document, iFrameResize, jQuery, navigator, window */

jQuery(function ($) {
    "use strict";

    var mobilezoom = blacksunplc.mobilezoom; // import * as mobilezoom from "./mobile-zoom.js"

    var $btn = $(".lightbox-button");
    if ($btn.length > 0) {

        $btn.featherlight();

        $btn.on("click", function () {
            if ($(".featherlight-content").length > 0) {
                mobilezoom.mobileLightBoxZoom($(".featherlight-content"));
            }
        });
    }

    $("#vix-trend .vix-trend").on("click", function () {
        $("#vix-trend .lightbox-button").trigger("click");
    });

    var chinese = $("html[lang='zh']").length !== 0;

    /** @type {string} */
    var language;

    /** @type {string} */
    var languageFlag;

    if (chinese) {
        language = "zh";
        languageFlag = "-zh";
    } else {
        language = "en";
        languageFlag = "";
    }

    var simulation2 = document.getElementById("simulation2");
    if (simulation2) {
        var simulation2Waypoint = new Waypoint({
            "element": simulation2,
            "handler": function () {
                var url = "/vslashr/th_simulationportfolio/app/simulationportfolio" + languageFlag + ".html";
                $("#simulation2").attr("src", url);
                iFrameResize({"checkOrigin": true}, "iframe#simulation2");
                simulation2Waypoint.destroy();
            },
            "offset": "bottom-in-view"
        });
    }

    var simulation1 = document.getElementById("simulation1");
    if (simulation1) {
        var simulation1Waypoint = new Waypoint({
            "element": simulation1,
            "handler": function () {
                var url = "/vslashr/th_simulationportfolio/app/volatilityreturns" + languageFlag + ".html";
                $("#simulation1").attr("src", url);
                iFrameResize({"checkOrigin": true}, "iframe#simulation1");
                simulation1Waypoint.destroy();
            },
            "offset": "bottom-in-view"
        });
    }

    //    /* Commented out as there is no hash and no iframe on the page with the ID. */
    //    var riskFrameUrl = "/vslashr/th_donuts/app/risk" + languageFlag + ".html" + (hash || "#country");
    //    $("#risk").attr("src", riskFrameUrl);
    //    iFrameResize({checkOrigin: true}, "iframe#risk");

    /**
     * Set risk iframe width for iPhone only.
     * @return {boolean}
     */
    function isIPhone() {
        try {
            return Boolean(navigator.userAgent.match(/iPhone/i));
        } catch (ignore) {
            return false;
        }
    }

    function setIframeWidthIphone() {
        var $iframe = $("#risk");
        var parentWidth = /** @type {number} */ ($iframe.parent().width());
        $iframe.width(parentWidth);
    }

    if (isIPhone()) {
        $(window).one("load", setIframeWidthIphone);
        $(window).on("resize", setIframeWidthIphone);
    }

    var chartTgem5 = document.getElementById("chart_tgem5");
    if (chartTgem5) {
        var chartTgem5Waypoint = new Waypoint({
            "element": chartTgem5,
            "handler": function () {
                var url = "/ed/fundamental/" + language + "/draw-tgem5" + languageFlag + ".js";
                $("#chart_tgem5").after("<script src=" + url + "></script>");
                chartTgem5Waypoint.destroy();
            },
            "offset": "bottom-in-view"
        });
    }

});
