/*jslint browser: true, long: true */
/*global jQuery, window, gsap, blacksunplc */

jQuery(function ($) {
    "use strict";

    var security = blacksunplc.security; // import * as security from "module:blacksunplc/security"
    var events = blacksunplc.events; // import * as events        from "module:blacksunplc/events"

    var $window = $(window);
    var windowWidth = $window.width();
    var teaserHeight = $(".teaser-safe-till-everyone").height();
    var bannerSectionTimeline;
    var overcommingSectionTimeline;

    var bannerAnimValues = {"duration": 0.8,
        "scale": 8.2};
    if (windowWidth < 1367) {
        bannerAnimValues = {"duration": 0.8,
            "scale": 9};
    }

    function goToSection(section) {
        gsap.to(window, {
            "duration": 1,
            "scrollTo": {"autoKill": false,
                "offsetY": teaserHeight - 100,
                "y": section}
        });
    }

    bannerSectionTimeline = gsap.timeline({
        "scrollTrigger": {
            "anticipatePin": 1,
            "end": 1350,
            "onEnter": function (callback) {
                if (callback.isActive) {
                    goToSection(".teaser-safe-till-everyone");
                }
            },
            "onEnterBack": function (callback) {
                if (callback.isActive) {
                    goToSection(".tr-homepage-banner");
                }
            },
            "pin": ".tr-homepage-banner",
            "scrub": 1,
            "start": "1",
            "trigger": ".tr-homepage-banner"
        }
    });
    bannerSectionTimeline.to(".tr-homepage-banner", bannerAnimValues, 0.001).to(".tr-homepage-banner", {"duration": 0.8,
        "opacity": 0});

    overcommingSectionTimeline = gsap.timeline({
        "scrollTrigger": {
            "anticipatePin": 1,
            "end": 1500,
            "onEnterBack": function (callback) {
                if (callback.isActive) {
                    goToSection(".tr-homepage-banner");
                }
            },
            "pin": ".teaser-overcoming-challenges",
            "scrub": 1,
            "start": "top top",
            "trigger": ".teaser-overcoming-challenges"
        }
    });
    overcommingSectionTimeline.to(".teaser-overcoming-challenges", {"delay": 0.5,
        "duration": 0.5,
        "autoAlpha": 1}).
        from(".teaser-overcoming-challenges h2", {"duration": 0.1,
            "opacity": 0,
            "xPercent": 100}, "-=0.1").
        from(".teaser-overcoming-challenges p", {"duration": 0.1,
            "opacity": 0,
            "xPercent": 100}, "-=0.05").
        from(".teaser-overcoming-challenges .tr-teaser__action", {"duration": 0.1,
            "opacity": 0,
            "xPercent": 100}, "-=0.05").
        from(".teaser-overcoming-challenges .tr-teaser__action", {"duration": 0.2});

    function scrollToSection(section) {
        if (section.length) {
            $("html, body").animate({
                scrollTop: section.offset().top + 1
            }, 1200);
        }
    }

    function checkUrlHasHash() {
        var hash = security.safeLocationHash();
        if (hash) {
            scrollToSection($(hash + "-id"));
        }
    }
    events.add(window, "load", checkUrlHasHash);

});
