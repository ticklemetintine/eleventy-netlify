/*jslint browser: true, fudge: true, long: true, for: true */
/*global blacksunplc, document, is, jQuery, location, setTimeout, window */

jQuery(function ($) {
    "use strict";

    var events = blacksunplc.events; // import * as events        from "module:blacksunplc/events"
    var functions = blacksunplc.functions; // import * as functions     from "module:blacksunplc/functions"
    var security = blacksunplc.security; // import * as security      from "module:blacksunplc/security"
    var cookieconsent = blacksunplc.cookieconsent; // import * as cookieconsent from "./cookieconsent-tr.js"
    var quicknav = blacksunplc.quicknav; // import * as quicknav      from "./share-link-common.js"
    var tinyurl = blacksunplc.tinyurl;  // import * as tinyurl      from "./matchtinyurl.js"

    var hash = security.safeLocationHash();

    var HEADER_WAYPOINT_OFFSET = 240;

    /**
     * @param {function ():number} offsetCallback
     * @param {(function ())=} complete
     */
    function scrollPageTo(offsetCallback, complete) {

        var offset = offsetCallback();
        if (offset > HEADER_WAYPOINT_OFFSET) {
            offset -= 80;
        }
        var pageYOffset = window.pageYOffset;
        var delta = Math.abs(pageYOffset - offset);
        if (delta < 8) {
            if (complete) {
                complete();
            }
            return;
        }
        var duration = Math.min(delta, 600);

        setTimeout(function () {
            $({"pageYOffset": pageYOffset}).animate({"pageYOffset": offset}, {
                "duration": duration,
                "easing": "linear",
                "step": function (/** number */ now) {
                    window.scrollTo(0, now);
                },
                "complete": function () {
                    scrollPageTo(offsetCallback, complete);
                }
            });
        }, 500);

    }

    function initializeSiteSearch() {
        var $bodyElement = $(document.body);
        var cachedWidth = $(window).width(); // Samsung input focus, keyboard resizing hack
        var cachedHeight = $(window).height();

        var isMobile = is.iphone() || !is.androidPhone();

        function listener() {
            var $browserWindow = $(window);

            if ($browserWindow.width() !== cachedWidth && (!isMobile || (isMobile && $browserWindow.height() !== cachedHeight))) {

                if ($bodyElement.hasClass("search-active")) {
                    $bodyElement.removeClass("search-active");
                    $(".search").removeClass("active");
                    $(".search").css("min-width", 0);
                }

                cachedWidth = $browserWindow.width();
                cachedHeight = $browserWindow.height();
            }
        }

        /* Debounced to run at most one per 100ms. */
        events.add(window, "resize", functions.debounce(listener, 100));

        var $searchText = $(".search-text");
        if ($searchText.length > 0 && $searchText.val() !== "") {
            $(".search").addClass("active");
            $(document.body).addClass("search-active");
        }

        $(".search-button").on("click", function (/** !jQuery.Event */ event) {
            event.preventDefault();

            var $searchButton = $(event.currentTarget);
            var $search = $searchButton.closest(".search");

            if ($(".search-text", $search).val() !== "") {
                $(".search-form", $search).trigger("submit");
                return;
            }

            $search.toggleClass("active");
            $(document.body).toggleClass("search-active");

            var hasMobileLinks = $searchButton.closest(".mobile-links").length > 0;

            if ($search.is(".active")) {
                if (hasMobileLinks) {
                    var mainNavWidth = /** @type {number} */ ($(".main-navigation").width());
                    $search.css("min-width", (mainNavWidth - 32) + "px");
                }
                var $input = $("input[name='q']", $search);
                $input.trigger("focus");
            } else if (hasMobileLinks) {
                $search.css("min-width", 0);
            }
        });
    }

    /**
     * Do not use this function, it will causing when you click the inner
     * container hide the dropdown menu as well.
     */
    function initializeSiteShare() {

        $(".share .tool-share").on("click", function (/** !jQuery.Event */ event) {
            var $toolShare = $(event.currentTarget);

            /* When share button is clicked hide cookie pop up. */
            cookieconsent.dismiss();

            var $quicklinks = $toolShare.closest(".quicklinks");
            $(".quicknav.active", $quicklinks).removeClass("active");

            /* Prevent if in the contentpage quicklink and main-header share overlap issue. */
            if ($toolShare.parents(".main-header").length) {
                $(".quicklinks .share").removeClass("active");
            } else {
                $(".main-header .share").removeClass("active");
            }

            $toolShare.parents(".share").toggleClass("active");

            event.stopPropagation();
        });

        /* Click outside of share dismiss dropdown. */
        $(document).on("click", function (/** !jQuery.Event */ event) {
            var $sharelink = $(".tools .share.sharelink");
            if (!$sharelink.is(event.target) && $sharelink.has(event.target).length === 0) {
                $sharelink.removeClass("active");
            }
        });
    }

    function initializeSiteScrollTop() {
        $(".back-to-top").on("click", function () {
            $("html, body").animate({"scrollTop": 0}, 600);
        });
    }

    function initializeQuickLinksNav() {
        $(".quicknav-links").on("click", "a", function (/** !jQuery.Event */ event) {
            var quicknavLink = /** @type {!HTMLAnchorElement} */ (event.currentTarget);
            if (quicknavLink.hash !== "") {
                event.preventDefault();

                hash = quicknavLink.hash;

                scrollPageTo(
                    /** @return {number} */
                    function () {
                        return $(hash).offset().top;
                    },
                    function () {
                        if (window.history && window.history.pushState) {
                            window.history.pushState(null, "", hash);
                        } else {
                            location.hash = hash;
                        }
                        tinyurl.setTinyUrl();
                    }
                );

                if (window._quickNavHandlers != null) {
                    var index;
                    var handler;
                    for (index = 0; index < window._quickNavHandlers.length; index += 1) {
                        handler = window._quickNavHandlers[index];
                        if (typeof handler === "function") {
                            handler(quicknavLink);
                        }
                    }
                }

                quicknav.handle(quicknavLink);
            }
        });
    }

    function initialHashScrollDown() {
        if ($(hash).length) {
            scrollPageTo(
                /** @return {number} */
                function () {
                    return $(hash).offset().top;
                });
        }
    }

    function initializeQuickLinksPopup() {
        $(".quicknav-button").on("click", function (/** !jQuery.Event */ event) {
            var $quicknavButton = $(event.currentTarget);
            $quicknavButton.parent().toggleClass("active");
            var $quicklinks = $quicknavButton.closest(".quicklinks");
            $(".sharelink.active", $quicklinks).removeClass("active");
        });
    }

    if (is.ie() || is.edge()) {
        $(document.body).addClass("ie");
    }

    if (is.ie()) {
        $(document.body).addClass("ie-not-edgy");
    }

    if (is.edge()) {
        $(document.body).addClass("ie-edgy");
    }

    initializeSiteSearch();
    initializeSiteShare();
    initializeSiteScrollTop();
    initializeQuickLinksNav();
    initializeQuickLinksPopup();
    initialHashScrollDown();

});

/** @module blacksunplc/quicknav */
(function () {
    "use strict";

    var objects = blacksunplc.objects; // import * as objects from "module:blacksunplc/objects"
    var arrays = blacksunplc.arrays; // import * as arrays  from "module:blacksunplc/arrays"

    /** @type {!Array<function (!HTMLAnchorElement)>} */
    var handlers = [];

    var exports = {};

    /**
     * @param {function (!HTMLAnchorElement)} handler
     */
    exports.add = function (handler) {
        handlers.push(handler);
    };

    /**
     * @param {!HTMLAnchorElement} quicknavLink
     */
    exports.handle = function (quicknavLink) {
        arrays.forEach(handlers, function (handler) {
            handler(quicknavLink);
        });
    };

    blacksunplc.quicknav = objects.freeze(exports);

}());

window._quickNavHandlers = [];
window.addQuickNavHandler = function (callback) {
    "use strict";
    window._quickNavHandlers.push(callback);
};
