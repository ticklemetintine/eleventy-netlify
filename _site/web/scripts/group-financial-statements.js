/*jslint browser: true, fudge: true, long: true, this: true */
/*global blacksunplc, document, jQuery, location, setTimeout, window */

jQuery(function ($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays   from "module:blacksunplc/arrays"
    var debounce = blacksunplc.functions.debounce; // import {debounce}    from "module:blacksunplc/functions"
    var events = blacksunplc.events; // import * as events   from "module:blacksunplc/events"
    var security = blacksunplc.security; // import * as security from "module:blacksunplc/security"
    var utils = blacksunplc.utils; // import * as utils    from "./utils.js"

    var $window = $(window);
    var windowWidth1 = /** @type {number} */ ($window.width());

    /** @param {boolean} isExtraTR */
    function assignTableRowHeight(isExtraTR) {
        arrays.forEach($(".tbl-left-wrap table tr"), function (row, index) {
            var $row = $(row);
            var includeMargin = true;
            var rowHeight = /** @type {number} */ ($row.outerHeight(includeMargin));
            $row.css({"height": rowHeight});
            if (isExtraTR && index > 0) {
                index += 1;
            }
            $(".tbl-right-wrap table tr").eq(index).css({"height": rowHeight});
        });
    }

    function resetAssignTableRowHeight() {
        var $rows = $(".tbl-left-wrap table tr, .tbl-right-wrap table tr");
        arrays.forEach($rows, function (row) {
            $(row).removeAttr("style");
        });
        var leftLength = $(".tbl-left-wrap table tr").length;
        var rightLength = $(".tbl-right-wrap table tr").length;
        var isExtraTR = leftLength !== rightLength;
        assignTableRowHeight(isExtraTR);
    }

    setTimeout(assignTableRowHeight, 360);

    var safeHash = security.safeLocationHash();

    function loadPageWithHash() {
        if (safeHash) {
            document.getElementById("statements").scrollIntoView();
            setTimeout(assignTableRowHeight, 60);
        }
    }

    if (safeHash) {
        setTimeout(loadPageWithHash);
    }

    $window.on("hashchange", loadPageWithHash);

    $window.on("resize", function () {
        if (windowWidth1 && windowWidth1 !== $window.width()) {
            windowWidth1 = $window.width();
            resetAssignTableRowHeight();
        }
    });

    /**
     * @param {string} path - the path segment to examine
     * @return {boolean} true, if the path segment resembles an HTML file name
     */
    function isFileName(path) {
        return (/(?:.*?)\.(?:html|htm)/).test(path);
    }

    /**
     * @param {!jQuery} $elements
     */
    function hideModal($elements) {

        var pathName = utils.safePathName();
        var pathSegments = pathName.split("/");
        var lastSegment = pathSegments.pop();

        //         console.log('hideModal(): lastSegment=' + lastSegment);

        if (!isFileName(lastSegment)) {
            /* the last segment was expected to be the modal HTML page file name,
             * but it does not appear so. Put it back with the others?
             */
            pathSegments.push(lastSegment);
        }

        /* push "" as a last segment to add a slash to the reconstructed URI */
        pathSegments.push("");

        var sectionPath = pathSegments.join("/");
        //         console.log('hideModal(): location.href=' + sectionPath);
        location.href = sectionPath + "group-financial-summary.html";

        $elements.addClass("is-hidden");

        $(".modal-backdrop", document.body).fadeOut(
            500, // duration in milliseconds
            /**
             * A function to call once the animation is complete,
             * called once per matched element.
             * @this {!Element} The DOM element being animated.
             */
            function () {
                $(this).remove();
                $(document.documentElement).removeClass("is-locked");
            }
        );
    }

    /**
     * @param {!jQuery} $elements
     * @param {!jQuery.Event} event
     */
    function checkNeedToHideModal($elements, event) {
        if (!$(event.target).parents(".modal-dialog").length) {
            hideModal($elements);
        }
    }

    function detectPageShowModal() {

        var $html = $(document.documentElement);
        var $body = $(document.body);
        var $modal = $(".modal");

        try {

            var pathName = utils.safePathName();
            //            console.log('detectPageShowModal(): pathName=' + pathName);

            var pathSegments = pathName.split("/");
            var lastSegment = pathSegments.pop();

            /* if the last path segment is an html file name, drop the file extension */
            var lastPath;
            if (isFileName(lastSegment)) {
                lastPath = lastSegment.replace(".html", "");
            } else {
                lastPath = "";
            }
            //            console.log('detectPageShowModal(): lastPath=' + lastPath);

            var $elements = $("." + lastPath); // Note Invalid selector when `lastPath` is the empty string.
            if ($elements.length && !$(".gfs-root").length) {
                if (!$(".modal-backdrop").length) {
                    $body.append("<div class='modal-backdrop' />").hide().fadeIn();
                }
                $elements.removeClass("is-hidden");
                var scrollTop = /** @type {number} */ ($(window).scrollTop());
                $html.attr("data-scroll-top", scrollTop);
                $html.addClass("is-locked");

                $(".btn-close", $elements).on("click", function () {
                    hideModal($elements);
                });
                $(".modal-dialog", $elements).on("click", function (/** !jQuery.Event */ event) {
                    checkNeedToHideModal($elements, event);
                });
            }

        } catch (ignore) {

            /* If pathname does not contain the relevant id string. */
            $modal.addClass("is-hidden");

            $(".modal-backdrop", $body).fadeOut(
                500, // duration in milliseconds
                /**
                 * A function to call once the animation is complete,
                 * called once per matched element.
                 * @this {!Element} The DOM element being animated.
                 */ function () {
                    $(this).remove();
                    $html.removeClass("is-locked");
                }
            );
        }
    }

    detectPageShowModal();

    events.add(window, "popstate", detectPageShowModal); // Browser compatibility: Internet Explorer 10+

    /* A nested "ready" callback: perhaps it needs to be called _after_ the above script. */
    /* This is for sticky header for the long table on income statements. */
    jQuery(function () {

        function setCssTop() {
            if ($(".main-header").hasClass("slideUp")) {
                $(".floatThead-container").css({"top": "-40px"});
            } else if ($(".main-header").hasClass("slideDown")) {
                $(".floatThead-container").css({"top": "0px"});
            }
        }

        function addWindowOnScrollListener() {
            $(window).on("scroll", setCssTop);
        }

        function enableFloatThead() {
            $("#table-group-scrolling").floatThead({
                "top": 40,
                "position": "absolute"
            });
            var windowWidth2 = /** @type {number} */ ($(window).width());
            if (windowWidth2 < 1025) {
                /* Mobile and iPad landscape, account for header up and down. */
                events.add(window, "scroll", debounce(addWindowOnScrollListener, 50));
            }
        }

        if ($("#table-group-scrolling").length && !$(document.body).hasClass("ie-edgy")) {
            setTimeout(enableFloatThead, 500);
        }

    });

});
