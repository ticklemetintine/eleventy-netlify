/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, dialogPolyfill, document, location, navigator, window */

blacksunplc.events.ready(function () {
    "use strict";


    var nodes = blacksunplc.nodes; // import * as nodes     from "module:blacksunplc/nodes"
    var events = blacksunplc.events; // import * as events    from "module:blacksunplc/events"
    var security = blacksunplc.security; // import * as security  from "module:blacksunplc/security"
    var analytics = blacksunplc.analytics; // import * as analytics from "module:blacksunplc/analytics"

    if (!security.isSecureContext || security.antiClickJack()) {
        return;
    }

    analytics.setOpenExternal();
    analytics.sendPageviews();

    /**
     * Enable support for dialogs.
     * @type {!Object<function(!Element)>}
     */
    var dialogFns = {
        "showModal": function (/** !Element */ button) {
            var dialogId = button.getAttribute("aria-controls");
            var dialog = /** @type {!HTMLDialogElement} */ (document.getElementById(dialogId));
            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }
            dialog.showModal();
        },
        "show": function (/** !Element */ button) {
            var dialogId = button.getAttribute("aria-controls");
            var dialog = /** @type {!HTMLDialogElement} */ (document.getElementById(dialogId));
            if (!dialog.show) {
                dialogPolyfill.registerDialog(dialog);
            }
            dialog.show();
        },
        "close": function (/** !Element */ button) {
            var dialog = /** @type {!HTMLDialogElement} */ (nodes.closest(button, "dialog"));
            if (dialog) {
                if (!dialog.close) {
                    dialogPolyfill.registerDialog(dialog);
                }
                dialog.close();
            }
        }
    };

    events.add(document.body, "click", function (event) {
        var button = events.closest(event, "[data-dialog]");
        if (button) {
            var fn = dialogFns[button.getAttribute("data-dialog")];
            if (fn) {
                event.preventDefault();
                fn(button);
            }
        }
    });

    function refreshIphone() {
        $(window).on("orientationchange", function () {
            if (!$(".video-overly").is(":visible")) {
                location.reload();
            }
        });
    }

    function detectIphoneSafari() {
        var isSafari = Boolean(navigator.userAgent.match(/Version\/[\d\.]+.*Safari/));
        var iOS = (/iPhone/).test(navigator.userAgent) && !window.MSStream;

        if (isSafari && iOS) {
            var $body = $(document.body);
            if ($body.hasClass("homepage") || $body.hasClass("sectionpage")) {
                refreshIphone();
            }
        }
    }

    detectIphoneSafari();

    function delayBeforePrintPreview(event) {
        var documentHeight = $(document).height();
        var timeout = 5000;
        var bodyClasses = ".building-a-sustainable-organisation, "
        + ".performance-overview, "
        + ".how-we-grew, "
        + ".pg-total-shareholder-return, "
        + ".how-we-manage-risks, "
        + ".twelve-month-returns, "
        + ".investor-twenty-year, "
        + ".credit-quality, "
        + ".pg-temasek-bond, "
        + ".overview-changes-in-accounting-standards, "
        + ".tr-homepage";

        if ($("#table-group-scrolling").length) {
            $("#table-group-scrolling").floatThead("destroy")
        }
        if ($("body").is(bodyClasses)) {
            event.preventDefault();

            if($("body").hasClass("investor-twenty-year")) {
                timeout = 15000;
                documentHeight = 9999;
            }
            if($("body").hasClass("twelve-month-returns")) {
                timeout = 8000;
            }

            $("html, body").animate({ scrollTop: documentHeight }, 3000);

            setTimeout(function() {
                window.print();
            }, timeout);
        }
    }

    function printPage() {
        $(document).keydown(function(event) {
            if (event.ctrlKey == true && (event.which === 80)) { //cntrl + p
                delayBeforePrintPreview(event);
            }
        });
    }

    printPage();

});
