/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, location */

/**
  * A module providing utility related functions.
  * @module blacksunplc/utils
  * @requires blacksunplc/objects
  * @requires blacksunplc/security
  */
(function () {
    "use strict";

    var freeze = blacksunplc.objects.freeze; // import {freeze}     from "module:blacksunplc/objects"
    var escapeHtml = blacksunplc.security.escapeHtml; // import {escapeHtml} from "module:blacksunplc/security"

    /**
     * Used in exported functions `safePath` and `safePathName`.
     * @type {!RegExp}
     */
    var SAFE_PATH = /^([\w\-]+\/)*[\w\-\.\/]+$/; // [\w] is equivalent to [A-Za-z0-9_]

    var exports = {};

    /**
     * Validates that the value of the path argument is either empty or is a valid NAME token with
     * the exception of the hash (#) and the colon (:) characters.
     * @function
     * @param {string} path - The path to be validated.
     * @return {string} A string containing path name. The path name is not
     *          percent-decoded.
     * @throws {!Error} If the path name is invalid.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname
     * @see https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-pathname
     */
    exports.safePath = function (path) {
        if (!path || SAFE_PATH.test(path)) {
            return path;
        }
        throw new Error("Unsafe path: " + escapeHtml(path));
    };

    /**
     * Gets the window's location path name and validates that the value is
     * either empty or is a valid NAME token with the exception of the hash (#)
     * and the colon (:) characters.
     * @function
     * @return {string} A string containing path name. The path name is not
     *          percent-decoded.
     * @throws {!Error} If the path name is invalid.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname
     * @see https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-pathname
     */
    exports.safePathName = function () {
        var path = location.pathname;
        if (!path || SAFE_PATH.test(path)) {
            return path;
        }
        throw new Error("Unsafe location.pathname");
    };

    /**
     * Checks if the the given JQuery element is in the screesn viewport.
     * @param {!jQuery}
     * @return {boolean}
     */
    exports.isOnScreen = function ($elements) {

        var $window = $(window);

        var scrollTop = /** @type {number} */ ($window.scrollTop());
        var scrollLeft = /** @type {number} */ ($window.scrollLeft());
        var windowWidth = /** @type {number} */ ($window.width());
        var windowHeight = /** @type {number} */ ($window.height());

        //var $elements = this;
        var offset = /** @type {{top: number, left: number}} */ ($elements.offset());
        var outerWidth = /** @type {number} */ ($elements.outerWidth());
        var outerHeight = /** @type {number} */ ($elements.outerHeight());

        var scrollBox = {
            "top": scrollTop,
            "right": scrollLeft + windowWidth,
            "bottom": scrollTop + windowHeight,
            "left": scrollLeft
        };

        var borderBox = {
            "top": offset.top,
            "right": offset.left + outerWidth,
            "bottom": offset.top + outerHeight,
            "left": offset.left
        };

        return !(
            scrollBox.right < borderBox.left ||
            scrollBox.left > borderBox.right ||
            scrollBox.bottom < borderBox.top ||
            scrollBox.top > borderBox.bottom
        );
    };

    /**
     * Check the screen event.
     * @return {boolean}
     */
    exports.isTouch = function () {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (ignore) {
            return false;
        }
    };

    blacksunplc.utils = freeze(exports);

}());
