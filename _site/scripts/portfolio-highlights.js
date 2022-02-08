/*jslint browser: true, fudge: true, long: true */
/*global jQuery, iFrameResize, blacksunplc */

jQuery(function ($) {
    "use strict";
    var security = blacksunplc.security; // import * as security   from "module:blacksunplc/security"

    /*
     * To work this file must be loaded before the vslashr ones, otherwise
     * we should implement the check in their file.
     */
    var h = security.safeLocationHash();
    if (
        h === "#geography" ||
        h === "#sector" ||
        h === "#liquidity" ||
        h === "#single-name" ||
        h === "#currency" ||
        h === "#headquarters"
    ) {
        $("iframe#portfolio").attr("src", "/vslashr/th_donuts/app/portfolio.html" + h);

        iFrameResize({"checkOrigin": true}, "iframe#portfolio");

        if ($("html").attr("lang") === "zh") {
            $("iframe#portfolio-zh").attr("src", "/vslashr/th_donuts/app/portfolio-zh.html" + h);

            iFrameResize({"checkOrigin": true}, "iframe#portfolio-zh");
        }
        setTimeout(function() { // there is a slow loading iframe on top
            $("html,body").animate({
                "scrollTop": $(h).offset().top - 100
            }, 500);
        }, 1500);

    }

    window.addQuickNavHandler(function (target) {
        var hash = target.hash;

        if (
            hash === "#geography" ||
            hash === "#sector" ||
            hash === "#liquidity" ||
            hash === "#single-name" ||
            hash === "#currency" ||
            hash === "#headquarters"
        ) {

            var _iframe = $("iframe#portfolio");
            if ($("html").attr("lang") === "zh") {
                _iframe = $("iframe#portfolio-zh");
            }
            if (_iframe.length > 0) {
                var ifr = _iframe[0];
                var key = hash.substring(1);

                var dataLink = $(ifr.contentDocument).find("a[data-key=\"" + key + "\"]");
                if (dataLink.length > 0) {
                    dataLink[0].click();
                }

            }

        }
    });
});
