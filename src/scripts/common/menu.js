/*jslint browser: true, fudge: true, long: true */
/*global $, MutationObserver, blacksunplc, document, is, navigator, parseFloat, setInterval, setTimeout, window */

/** @module blacksunplc/menu */
(function() {
    "use strict";

    var objects = blacksunplc.objects; // import * as objects  from "module:blacksunplc/objects"
    var sitemaps = blacksunplc.sitemaps; // import * as sitemaps from "./sitemaps-eng-zh.js"
    var utils = blacksunplc.utils; // import * as utils    from "./utils.js"

    var exports = {};

    /** Deactivates navigation. */
    exports.closeMenu = function() {
        var $body = $(document.body);
        if ($body.hasClass("navigation-active")) {
            $("button.hamburger").toggleClass("is-active");
            $body.toggleClass("navigation-active");
        }
    };

    /**
     * @param {!jQuery} $buttons
     */
    exports.clickMenuButton = function($buttons) {
        /* IE 11 safe. */
        var $toggleList = $buttons.siblings("ul");
        var $parentSiblings = $buttons.parent().siblings();
        var $activeButton = $("button.active", $parentSiblings);

        if ($activeButton.length > 0) {
            var $activeList = $activeButton.siblings("ul");

            $activeList.css("max-height", "0");
            $activeButton.toggleClass("active");
        }

        if ($buttons.hasClass("active")) {
            $toggleList.css("max-height", "0");
        } else {
            $toggleList.css("max-height", $toggleList[0].scrollHeight + 10 + "px");
        }
        $buttons.toggleClass("active");
    };

    /**
     * @param {null} changeToStr - Note Why bother with this parameter?
     * @param {(string|null)} reqHref
     */
    exports.menuHashChange = function(changeToStr, reqHref) {

        var $activeA = $(".main-navigation a.active");
        var $activeBtn = $(".main-navigation button.active");

        var $requestedA;
        if (reqHref !== null) {
            $requestedA = $(".main-navigation a[href='" + reqHref + "']");
        } else {
            $requestedA = $(".main-navigation span:contains('" + changeToStr + "')").parent();
        }

        var $requestedButtons = $requestedA.parent().parent().siblings("button");

        if ($activeBtn[0] !== $requestedButtons[0]) {
            exports.clickMenuButton($requestedButtons);
        }

        if ($activeA[0] !== $requestedA[0]) {
            $activeA.removeClass("active");
            $requestedA.addClass("active");
        }
    };

    /** Deactivates any active navigation anchors. */
    exports.deactivateMenuCurr = function() {
        $(".main-navigation a.active").removeClass("active");
    };

    /** Detect location href and switch the language menu link state. */
    exports.initializeLanguageState = function() {

        var $englishAnchors = $(".header-links li a").eq(0).add($(".mobile-links li a").eq(0));
        var $chineseAnchors = $("a", $(".header-links li").eq(1)).add($("a", $(".mobile-links li").eq(1)));

        var currPath = utils.safePathName();

        if (sitemaps.isSg()) {
            if (sitemaps.isZh()) {
                $englishAnchors.removeClass("current");
                $chineseAnchors.addClass("current");

                $englishAnchors.attr("href", currPath.slice(3)); // slice after "/zh"

                var href = /** @type {string} */ ($(".header-download-link").attr("href"));
                $(".header-download-link").attr("href", href);
            } else if (!(sitemaps.isFr() || sitemaps.isDe())) {
                if (currPath === "/not-found.html") {
                    currPath = "";
                }
                $chineseAnchors.attr("href", "/zh" + currPath);
            }
        } else {
            $englishAnchors.parent().remove();
            $chineseAnchors.parent().remove();
        }
    };

    blacksunplc.menu = objects.freeze(exports);

}());

(function() {
    "use strict";

    var arrays = blacksunplc.arrays; // import * as arrays        from "module:blacksunplc/arrays"
    var events = blacksunplc.events; // import * as events        from "module:blacksunplc/events"
    var functions = blacksunplc.functions; // import * as functions     from "module:blacksunplc/functions"
    var cookieconsent = blacksunplc.cookieconsent; // import * as cookieconsent from "./cookieconsent-tr.js"
    var sitemaps = blacksunplc.sitemaps; // import * as sitemaps      from "./sitemaps-eng-zh.js"
    var utils = blacksunplc.utils; // import * as utils         from "./utils.js"
    var menu = blacksunplc.menu; // import * as menu          from "./menu.js"

    import * as sitemaps from "/web/scripts/common/sitemaps-eng-zh.js"
    /**
     * @param {!jQuery} $navList
     * @param {?jQuery} $activeBtn
     */
    function populateMenu($navList, $activeBtn) {
        $("nav").append($navList);
        navigation();

        if ($activeBtn !== null) {
            menu.clickMenuButton($activeBtn);
        }
    }

    function getMenuItems() {

        var sections = sitemaps.getLangSections();
        var $navList = $("<ul></ul>");
        var path = utils.safePathName();

        /* Strip the version of any version rewritten URLs */
        var sectionUri = path.replace(/\/version[1-90]+(?:[a-z]?)/, "");
        if (sectionUri.indexOf("/") !== sectionUri.lastIndexOf("/")) {
            sectionUri = sectionUri.substring(path.indexOf("/") + 1, sectionUri.lastIndexOf("/"));
        } else {
            sectionUri = "";
        }

        var $activeBtn = null;
        var sectionHref;

        arrays.forEach(sections, function(section, index) {

            if (section.href) {
                /* Strip the version of any version rewritten URLs */
                sectionHref = section.href.replace(/\/version[1-90]+(?:[a-z]?)/, "");
            }
            /* `sectionId` is used to construct a CSS class name among other things */
            var sectionId = sectionHref.replace(/\//g, ""); // drop any forward slashes

            var $li = section.sectionName == "Our Stories" || section.sectionName === "我们的故事" ? $("<li class='stories'></li>") : $("<li></li>");
            var $anchor = $("<a><span itemProp='name'>" + section.sectionName + "</span></a>");

            $navList.append($li.append($anchor));

            if (sectionHref === "/our-stories/index.html") {
                $anchor.addClass("globe-icon");
            }

            /* Use the original value of section.href, not the possibly stripped sectionHref */
            $anchor.attr({
                "href": section.href,
                "itemprop": "url"
            });

            if (section.sectionPages.length > 1) {
                $anchor.addClass("has-children");

                var $btn = $("<button type='button'><span class='tr-icon arrow-open-up-after'></span></button>");
                $btn.addClass("menu-btn-" + index + " " + sectionId + "-menu-btn");
                $li.append($btn);
                var $sPagesList;
                if (section.sectionName == "Our Stories" || section.sectionName === "我们的故事") {
                    $sPagesList = $("<ul class='stories'></ul>");
                } else if (section.sectionName == "Group Financials" || section.sectionName === "集团财务") {
                    $sPagesList = $("<ul class='group-financials-menu-items'></ul>");
                } else {
                    $sPagesList = $("<ul></ul>");
                }

                $li.append($sPagesList);

                if ($(document.documentElement).attr("lang") === "zh") {
                    if (sectionHref.replace("/zh/", "").replace(/\//g, "") === sectionUri.replace("zh/", "")) {
                        $activeBtn = $btn;
                    }
                } else if (sectionHref.replace(/\//g, "") === sectionUri) {
                    $activeBtn = $btn;
                }

                if (section.sectionName == "Our Stories" || section.sectionName === "我们的故事") {
                    var $categorySection = $("<li></li>");

                    $sPagesList.append($categorySection);

                    arrays.forEach(section.sectionPages, function(sectionPage) {
                        var count = sectionPage.pages.length == 1 ? "single" : "",
                            $subPagesList = $("<ul class='menu-thumb " + sectionPage.category + " " + count + "'></ul>");

                        $categorySection.append($subPagesList);

                        arrays.forEach(sectionPage.pages, function(pages) {

                            var activeStr;
                            if (path === pages.href) {
                                activeStr = " class='active'"; // the active menu will be expanded
                            } else {
                                activeStr = "";
                            }
                            var itemName = pages.pageName;

                            var $listItem = $("<li></li>");

                            $subPagesList.append($listItem);

                            $listItem.append("<a href='" + pages.href + "'" + activeStr + " itemprop='url' class='img-container'><img src='" + pages.image + "' alt='" + itemName + "'></a>");

                            $listItem.append("<a href='" + pages.href + "'" + activeStr + " itemprop='url'><span itemprop='name'>" + itemName + "</span></a>");
                        });

                    });
                } else {
                    arrays.forEach(section.sectionPages, function(sectionPage) {

                        //                    console.log('path=' + path + ', sectionPage.href=' + sectionPage.href);

                        var activeStr;
                        if (path === sectionPage.href) {
                            activeStr = " class='active'"; // the active menu will be expanded
                        } else {
                            activeStr = "";
                        }
                        var itemName = sectionPage.pageName;
                        //                    itemName = sectionPage.pageName.replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\"/g, "&quot;").replace(/&/g, "&amp;");

                        $sPagesList.append($("<li><a href='" + sectionPage.href + "'" + activeStr + " itemprop='url'><span itemprop='name'>" + itemName + "</span></a></li>"));
                    });
                }

            }
        });

        populateMenu($navList, $activeBtn);
        cookieconsent.addNavNotice();
    }

    /* Workaround for Safari on iPad where viewport is shortened by the address bar and tabs */
    var windowInnerHeight = /** @type {number} */ ($(window).innerHeight());
    var viewportHeight = windowInnerHeight - 57;

    /** @param {number} height */
    function setHeightOfMenuSafariIpad(height) {
        $(".navigation-active .main-navigation").css({
            "height": height + "px"
        });
    }

    function detectViewportHeightChangeSafari() {
        var isIpad = navigator.userAgent.match(/iPad/i) !== null;
        var isSafari = (
            /* Detection for Safari 3 to 9.1.3 */
            (/constructor/i).test(window.HTMLElement) ||
            /* Detection for Safari 10, but maybe not Safari 11+ */
            (
                window.safari &&
                window.safari.pushNotification &&
                window.safari.pushNotification.toString() === "[object SafariRemoteNotification]"
            )
        );
        if (!isSafari || !isIpad) {
            return;
        }
        $(".main-header .hamburger").on("click", function() {
            setHeightOfMenuSafariIpad(viewportHeight);
        });
        setInterval(function() {
            var windowInnerHeight2 = /** @type {number} */ ($(window).innerHeight());
            var newViewportHeight = windowInnerHeight2 - 57;
            if (newViewportHeight === viewportHeight) {
                return;
            }
            viewportHeight = newViewportHeight;
            setHeightOfMenuSafariIpad(viewportHeight);
        }, 1000);
    }

    detectViewportHeightChangeSafari();

    function navigation() {

        /** Manually set - mobile viewport height workaround. */
        function menuHeightMobile() {
            var windowHeight = window.innerHeight;
            $(".main-navigation > ul").css("max-height", windowHeight - 119);
        }

        menuHeightMobile();

        $(".main-header .hamburger").on("click", function( /** !jQuery.Event */ event) {
            cookieconsent.dismiss();
            $(event.currentTarget).toggleClass("is-active");
            $(document.body).toggleClass("navigation-active");
            setInterval(menuHeightMobile, 500);
        });

        /** @param {!Element} anchor */
        function hoverMenuItem(anchor) {
            var $currList = $(anchor).parent().parent();

            if ($currList.siblings("button").hasClass("active")) {
                var deltaH = $currList[0].scrollHeight - parseFloat($currList.css("max-height"));

                if (deltaH > 0) {
                    $currList.css("max-height", $currList[0].scrollHeight + 20 + "px");
                }
            }
        }

        //         function menuHeight() {
        //             var $mainNav = $(".main-navigation");
        //             var offset = $(".main-header").outerHeight() + $mainNav.outerHeight() - $mainNav.height();
        //
        //             $(".main-navigation > ul").css({"max-height": window.innerHeight - offset});
        //         }
        //
        //         menuHeight();
        //
        //         $(window).on("resize", function () {
        //             menuHeight();
        //         });

        $(".main-navigation > ul > li > button").on("click", function( /** !jQuery.Event */ event) {
            menu.clickMenuButton($(event.currentTarget));
        });
        $(".main-navigation > ul > li > a").on("click", function(event) {
            if (!(sitemaps.isFr() || sitemaps.isDe())) {
                event.preventDefault();
                menu.clickMenuButton($(event.currentTarget).next("button"));
            }
        });
        $(".main-navigation > ul > li > a + button + ul > li a").on("mouseenter", function( /** !jQuery.Event */ event) {
            var anchor = event.currentTarget;
            hoverMenuItem(anchor);
        });

        $("main").on("click", menu.closeMenu);

        //        /* Double click functionality left in case required in future. */
        //        $(".main-navigation > ul > li > a").on("click", function (/** !jQuery.Event */ event) {
        //            var $link =  $(event.currentTarget);
        //            var $buttons = $link.siblings("button");
        //
        //            if ($link.parent().hasClass("shaping-icon")) {
        //                return;
        //            }
        //
        //            if (!$buttons.hasClass("active")) {
        //                event.preventDefault();
        //            }
        //
        //            menu.clickMenuButton($buttons);
        //        });
    }

    function initializeSiteFooter() {
        var $footer = $("footer").first();
        var $document = $(document);
        var $window = $(window);

        var documentHeight = /** @type {number} */ ($document.height());
        var windowHeight = /** @type {number} */ ($window.height());
        var footerHeight = /** @type {number} */ ($footer.height());

        $(window).on("resize", function() {
            documentHeight = /** @type {number} */ ($document.height());
            windowHeight = /** @type {number} */ ($window.height());
            footerHeight = /** @type {number} */ ($footer.height());

            /* iPad new window from share link (on closing) offsets fullpage window hack. */
            setTimeout(function() {
                var scrollTop = /** @type {number} */ ($window.scrollTop());
                if (is.ipad() && is.safari() && scrollTop < 0) {
                    $window.scrollTop(0);
                }
            }, 500);
        });

        $window.on("scroll", function( /** !jQuery.Event */ event) {
            if (
                (document.activeElement && document.activeElement.className === "search-text") ||
                ($(document.body).hasClass("navigation-active") && (is.iphone() || is.androidPhone()))
            ) {
                /* Prevent mobile scroll on search input focus/nav open. */
                event.preventDefault();
                return;
            }

            menu.closeMenu();

            var scrollTop = /** @type {number} */ ($window.scrollTop());
            if (!$footer.hasClass("visible") && (windowHeight + scrollTop + (footerHeight / 2) > documentHeight)) {
                $footer.addClass("visible");
            }
        });

        $window.on("load", function() {
            var scrollTop = /** @type {number} */ ($window.scrollTop());
            if (!$footer.hasClass("visible") && (windowHeight + scrollTop + (footerHeight / 2) > documentHeight)) {
                $footer.addClass("visible");
            }
        })

        //        $(document.body).on("touchmove", function (/** !jQuery.Event */ event) {
        //            if (document.activeElement.className == "search-text" && /iPhone/.test(navigator.userAgent)) {
        //                /* Prevent iPhone scroll on search input focus. */
        //                event.preventDefault();
        //                return;
        //            }
        //        })
    }

    /** @return {boolean} */
    function hasTouchEvents() {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (ignore) {
            return false;
        }
    }

    function initializeTooltips() {

        var $tooltips = $(".tooltip");
        if (!$tooltips.length) {
            return;
        }

        var activateTooltipster = true; // conditionally modified below

        var tooltipsterOptions = {
            "interactive": true,
            "contentAsHTML": true,
            "maxWidth": 300,
            "contentCloning": true,
            "trigger": "custom",
            "triggerOpen": {
                "mouseenter": true, // conditionally modified below
                "tap": true,
                "click": true
            },
            "triggerClose": {
                "click": true,
                "mouseleave": true, // conditionally modified below
                "scroll": true, // conditionally modified below
                "tap": true
            }
        };

        if (activateTooltipster) {
            $tooltips.tooltipster(tooltipsterOptions);
        }
    }

    var isVisible;

    function showIfNeeded() {
        var scrollTop = /** @type {number} */ ($(window).scrollTop());
        if (scrollTop > 300) {
            isVisible = true;
            $(".back-to-top").addClass("back-to-top--visible");
        }
    }

    function backToTop() {
        isVisible = false;
        showIfNeeded();

        $(window).one("load", function() {
            $(".scroll-content").on("scroll", function() {
                $(".back-to-top").addClass("back-to-top--visible");
            });
        });
    }

    if ($(document.body).hasClass("back-to-top-required")) {
        backToTop();
    }

    function listener() {
        if (!isVisible) {
            showIfNeeded();
        }
    }

    /* Debounced to run at most once per 100 milliseconds. */
    events.add(window, "scroll", functions.debounce(listener, 100));

    events.ready(function() {

        getMenuItems();
        //        navigation;

        //        initializeSiteFooter();

        initializeTooltips();
        menu.initializeLanguageState();

        //        /* The Lengend of the reordering function lies here. */
        //        var $namelist = $(".name-list .row .col-namelist");
        //        console.log($namelist.length)
        //        $namelist.detach()
        //
        //        console.log($namelist)
        //
        //        $namelist.slice(0, 24).each(function (index, name) {
        //            var $name = $(name);
        //            $(".name-list .row").eq(index).append($name);
        //        });
        //
        //        $namelist.slice(25, 49).each(function (index, name) {
        //            var $name = $(name);
        //            $(".name-list .row").eq(index).append($name);
        //        });
        //
        //        $namelist.slice(50, 75).each(function (index, name) {
        //            var $name = $(name);
        //            $(".name-list .row").eq(index).append($name);
        //        });

        var carouselSlides = document.querySelector(".carousel-slides");
        if (carouselSlides && window.MutationObserver) {
            /* Browser compatibility: Internet Explorer 11+ */

            /*
             * An ugly hack to detect the first time some other script modifies
             * the "class" attribute of the ".carousel-slides" element.
             */
            var observer = new MutationObserver(function(mutations) {
                var classAttrMutations = mutations.filter(function(mutation) {
                    return mutation.attributeName === "class";
                });
                if (classAttrMutations.length > 0) {
                    observer.disconnect();
                    initializeSiteFooter();
                }
            });
            observer.observe(carouselSlides, { "attributes": true });

        } else {
            initializeSiteFooter();
        }

    });

}());