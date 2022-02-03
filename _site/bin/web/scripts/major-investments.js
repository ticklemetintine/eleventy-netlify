/*jslint browser: true, fudge: true, long: true */
/*global Headroom, document, jQuery */

jQuery(function ($) {
    "use strict";

    function majorInvestmentsMenu() {
        $(".category-nav-title").on("click", function () {
            $(".category-nav-title").toggleClass("closed");
            $(".category-navigation .all-links").slideToggle("slow", function () {
                return undefined;
            });
        });
        var item = $(document.body).attr("data-item");
        $(".category-nav-item[data-item=" + item + "] a").addClass("active");
    }

    majorInvestmentsMenu();

    var categoryNavigation = document.querySelector(".category-navigation");
    if (categoryNavigation) {

        /* Construct an instance of Headroom, passing the element. */
        var headroom = new Headroom(categoryNavigation, {
            "offset": 150,
            "tolerance": 5,
            "classes": {
                "initial": "animate",
                "pinned": "pinned",
                "unpinned": "unpinned"
            }
        });

        headroom.init();
    }

});
