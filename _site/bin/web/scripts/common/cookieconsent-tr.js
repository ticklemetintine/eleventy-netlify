/* Copyright (c) 2020 Black Sun Plc. All rights reserved. */
/*jslint browser: true, fudge: true, long: true, white: true */
/*global $, blacksunplc, decodeURIComponent, document, encodeURIComponent */

/** @module blacksunplc/cookieconsent */
(function () {
    "use strict";


    var objects = blacksunplc.objects; // import * as objects    from "module:blacksunplc/objects"
    var arrays = blacksunplc.arrays; // import * as arrays     from "module:blacksunplc/arrays"
    var attributes = blacksunplc.attributes; // import * as attributes from "module:blacksunplc/attributes"
    var dates = blacksunplc.dates; // import * as dates      from "module:blacksunplc/dates"
    var events = blacksunplc.events; // import * as events     from "module:blacksunplc/events"
    var storage = blacksunplc.storage; // import * as storage    from "module:blacksunplc/storage"
    var jsonml = blacksunplc.jsonml; // import * as jsonml     from "module:blacksunplc/jsonml"
    var ccConfig = blacksunplc.ccConfig; // import * as ccConfig   from "module:blacksunplc/ccConfig"

    /* Must match the name used by the COOKIE. */
    var COOKIE_NAME = "cookieconsent_2020";

    /* Maximum age is a period of 90 days, expressed in seconds. */
    var COOKIE_OPTIONS = {"maxAge": 90 * 24 * 60 * 60};

    /* The known Google Analytics cookies (last checked on 2020-04-01). */
    //    var ANALYTICS_NAMES = [/^_ga/, "_gid", "OT_1073743404"];
    var ANALYTICS_NAMES = [/.*/];

    /* Implements the Web Storage API for cookies. */
    var cookieStorage = storage.cookieStorage();

    /** @return {!blacksunplc.CookieControl} */
    function getCookieControl() {
        var cookieItem = cookieStorage.getItem(COOKIE_NAME);
        if (cookieItem) {
            return /** @type {!blacksunplc.CookieControl} */ (JSON.parse(decodeURIComponent(cookieItem.value)));
        }
        return {"modified": 0,
            "consent": {"analytics": "init"}};
    }

    /** @param {!blacksunplc.CookieControl} cookieControl */
    function setCookieControl(cookieControl) {
        cookieControl.modified = dates.now();
        var value = encodeURIComponent(JSON.stringify(cookieControl));
        cookieStorage.setItem(COOKIE_NAME, value, COOKIE_OPTIONS);
    }

    storage.installFilter();
    storage.certifyLawfulBasis([COOKIE_NAME]);
    if (getCookieControl().consent.analytics !== "deny") {
        storage.certifyLawfulBasis(ANALYTICS_NAMES);
    }

    /** @param {boolean} isDropdown */
    function openDialog(isDropdown) {
        var dialog = document.querySelector("#cc-dialog");
        if (dialog) {
            var dialogClassList = attributes.classList(dialog);
            if (isDropdown) {
                dialogClassList.add("cc-dropdown");
            }
            dialogClassList.remove("cc-invisible");
        }
        var dialogMobile = document.querySelector("#cc-mobile-dialog");
        var dropdownMobile = document.querySelector("li.cc-dropdown-li");
        if (dialogMobile && dropdownMobile) {
            attributes.classList(dialogMobile).remove("cc-invisible");
            attributes.classList(dropdownMobile).remove("cc-collapsed");
        }
    }

    function closeDialog() {
        var dialog = document.querySelector("#cc-dialog");
        if (dialog) {
            attributes.classList(dialog).add("cc-invisible");
        }
        var dialogMobile = document.querySelector("#cc-mobile-dialog");
        var dropdownMobile = document.querySelector("li.cc-dropdown-li");
        if (dialogMobile && dropdownMobile) {
            attributes.classList(dialogMobile).add("cc-invisible");
            attributes.classList(dropdownMobile).add("cc-collapsed");
        }
        $(".tools .cookieConsent").addClass("show");
    }

    function updateButtons() {
        var cStatus = Boolean(getCookieControl().consent.analytics !== "deny");
        var denyElements = document.querySelectorAll(".cc-deny");
        arrays.forEach(denyElements, function (element) {
            var denyClassList = attributes.classList(element);
            if (cStatus) {
                denyClassList.remove("cc-turn-on");
            } else {
                denyClassList.add("cc-turn-on");
            }
        });

        var allowElements = document.querySelectorAll(".cc-btn.cc-dismiss");
        arrays.forEach(allowElements, function (element) {
            var allowClassList = attributes.classList(element);
            if (cStatus) {
                allowClassList.add("cc-turn-on");
            } else {
                allowClassList.remove("cc-turn-on");
            }
        });
    }

    /** @const */
    var exports = {};

    /** @return {string} One of "init", "deny", or "allow". */
    exports.getStatus = function () {
        var consent = getCookieControl().consent;
        return consent.analytics;
    };

    exports.deny = function () {
        var cookieControl = getCookieControl();
        storage.revokeLawfulBasis(ANALYTICS_NAMES);
        cookieControl.consent.analytics = "deny";
        setCookieControl(cookieControl);
        closeDialog();
        updateButtons();
    };

    exports.allow = function () {
        var cookieControl = getCookieControl();
        storage.certifyLawfulBasis(ANALYTICS_NAMES);
        cookieControl.consent.analytics = "allow";
        setCookieControl(cookieControl);
        closeDialog();
        updateButtons();
    };

    exports.dismiss = function () {
        var cookieControl = getCookieControl();
        if (exports.getStatus() === "init") {
            storage.certifyLawfulBasis(ANALYTICS_NAMES);
            cookieControl.consent.analytics = "allow";
        }
        setCookieControl(cookieControl);
        closeDialog();
        updateButtons();
    };

    /**
     * @param {string} id
     * @param {string} classes
     * @return {!blacksunplc.JsonML}
     */
    function cookieConsentDialogTemplate(id, classes) {
        return (
            [
                "div", {"id": id,
                    "role": "dialog",
                    "aria-live": "polite",
                    "aria-label": "cookieconsent",
                    "aria-describedby": "cookieconsent:desc",
                    "class": classes},
                ["span", {"class": "cc-message"}, ccConfig.message],
                ["span", {"class": "cc-dropdown-message"}, ccConfig.dropDownMessage],
                [
                    "a", {"aria-label": "deny cookies",
                        "role": "button",
                        "tabindex": "0",
                        "class": "cc-btn cc-deny"}, ccConfig.turnOffLabel
                ],
                [
                    "a", {"aria-label": "dismiss cookies",
                        "role": "button",
                        "tabindex": "0",
                        "class": "cc-btn cc-dismiss cc-turn-on"}, ccConfig.turnOnLabel
                ],
                [
                    "span", {"class": "learn-more"},
                    ccConfig.privacyMessageLeftPart,
                    [
                        "a",
                        {"aria-label": "learn more about cookies",
                            "role": "button",
                            "tabindex": "0",
                            "class": "cc-link",
                            "href": ccConfig.privacyLink,
                            "rel": "noopener noreferrer nofollow",
                            "target": "_blank"},
                        ccConfig.privacyLabel
                    ],
                    ccConfig.privacyMessageRightPart
                ],
                [
                    "div", {"class": "cc-close"},
                    [
                        "a", {"aria-label": "dismiss cookie message",
                            "role": "button",
                            "tabindex": "0",
                            "class": "cc-dismiss"}
                    ]
                ]
            ]
        );
    }

    /** @return {!blacksunplc.JsonML} */
    function mobileCookieConsentDialogTemplate() {
        var id = "cc-mobile-dialog";
        var classes = "cc-window cc-dropdown cc-invisible";
        var dialog = cookieConsentDialogTemplate(id, classes);
        return ["li", {"class": "cc-dropdown-li cc-collapsed"}, dialog];
    }

    /** @return {!blacksunplc.JsonML} */
    function desktopCookieConsentDialogTemplate() {
        var id = "cc-dialog";
        var classes = "cc-window cc-main cc-invisible";
        return cookieConsentDialogTemplate(id, classes);
    }

    exports.addNavNotice = function () {
        // add mobile nav
        var mainNavList = document.querySelector(".main-navigation>ul");
        if (mainNavList) {
            jsonml.prepend(mainNavList, mobileCookieConsentDialogTemplate());
        }
        var ccDeny = document.querySelector("#cc-mobile-dialog .cc-deny");
        if (ccDeny) {
            events.add(ccDeny, "click", function () {
                exports.deny();
            });
        }
        var ccDismiss = document.querySelector("#cc-mobile-dialog a.cc-btn.cc-dismiss");
        if (ccDismiss) {
            events.add(ccDismiss, "click", function () {
                exports.allow();
            });
        }
        var ccClose = document.querySelector("#cc-mobile-dialog .cc-close");
        if (ccClose) {
            events.add(ccClose, "click", function () {
                exports.dismiss();
            });
        }
    };

    function addNotice() {
        // Add desktop notice
        jsonml.append(document.body, desktopCookieConsentDialogTemplate());

        $(".tool-cookieConsent").on("click", function () {
            openDialog(true);
        });
        var ccDeny = document.querySelector("#cc-dialog .cc-deny");
        if (ccDeny) {
            events.add(ccDeny, "click", exports.deny);
        }
        var ccDismiss = document.querySelector("#cc-dialog a.cc-btn.cc-dismiss");
        if (ccDismiss) {
            events.add(ccDismiss, "click", exports.allow);
        }
        var ccClose = document.querySelector("#cc-dialog .cc-close");
        if (ccClose) {
            events.add(ccClose, "click", exports.dismiss);
        }
        updateButtons();
    }

    /* Wait for DOMContentLoaded before accessing the DOM. */
    events.ready(function () {
        addNotice();
        if (exports.getStatus() === "init") {
            openDialog(false);
        } else {
            closeDialog();
        }
    });

    blacksunplc.cookieconsent = objects.freeze(exports);

}());
