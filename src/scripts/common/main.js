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

});
