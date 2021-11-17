/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, document, jQuery, setTimeout, window */

jQuery(function ($) {
    "use strict";


    var sharelink = blacksunplc.sharelink; // import * as sharelink from "./sharelink.js"

    /** @type {?jQuery} */
    var $currentDialog = null;

    /**
     * @type {?Range}
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Range
     */
    var range = null;

    function saveRange() {
        var selection = window.getSelection();
        if (selection.getRangeAt && selection.rangeCount) {
            range = selection.getRangeAt(0);
        }
    }

    function restoreRange() {
        if (range) {
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    /** @return {string} */
    function getRangeText() {

        if (!range) {
            return "";
        }

        var text = range.toString();

        while (text.indexOf("\r") >= 0) {
            text = text.replace(new RegExp("\r", "g"), " ");
        }

        while (text.indexOf("\n") >= 0) {
            text = text.replace(new RegExp("\n", "g"), " ");
        }

        while (text.indexOf("  ") >= 0) {
            text = text.replace(new RegExp("  ", "g"), " ");
        }

        return text;
    }

    /** @return {boolean} */
    function isEmptyRange() {
        return !(range && range.toString());
    }

    function showShareTool() {

        hideShareTool();
        saveRange();

        if (isEmptyRange()) {
            return;
        }

        var $dialog = $("<div id='share-dialog'></div>");
        var $innerWrapper = $("<div class='share-dialogue-inner'></div>");

        $(document.body).append($dialog);
        $dialog.append($innerWrapper);

        var $facebookButton = $("<button class='facebook'><span class='tr-icon facebook-before'></span></button>");
        var $linkedinButton = $("<button class='linkedin'><span class='tr-icon linkedin-before'></span></button>");
        var $twitterButton = $("<button class='twitter'><span class='tr-icon twitter-before'></span></button>");
        var $whatsappButton = $("<button class='whatsapp'><span class='tr-icon whatsapp-before'></span></button>");
        var $telegramappButton = $("<button class='telegram'><span class='tr-icon telegram-before'></span></button>");
        var $weiboButton = $("<button class='weibo'><span class='tr-icon weibo-before'></span></button>");
        var $tencentButton = $("<button class='tencent'><span class='tr-icon tencent-before'></span></button>");
        var $envelopeButton = $("<button class='email'><span class='tr-icon email-before'></span></button>");

        $innerWrapper.append($facebookButton);
        $innerWrapper.append($linkedinButton);
        $innerWrapper.append($twitterButton);
        $innerWrapper.append($whatsappButton);
        $innerWrapper.append($telegramappButton);
        $innerWrapper.append($weiboButton);
        $innerWrapper.append($tencentButton);
        $innerWrapper.append($envelopeButton);

        $facebookButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.facebook(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });
            event.preventDefault();
            event.stopPropagation();
        });

        $twitterButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.twitter(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });
            event.preventDefault();
            event.stopPropagation();
        });

        $linkedinButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.linkedIn(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });
            event.preventDefault();
            event.stopPropagation();
        });

        $whatsappButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.whatsApp(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });
            event.preventDefault();
            event.stopPropagation();
        });

        $telegramappButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.telegram(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });
            event.preventDefault();
            event.stopPropagation();
        });

        $weiboButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.sina(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });

            event.preventDefault();
            event.stopPropagation();
        });

        $tencentButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.tencent(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });

            event.preventDefault();
            event.stopPropagation();
        });

        $envelopeButton.on("click", function (/** !jQuery.Event */ event) {
            sharelink.mail(event.currentTarget, {
                "text": getRangeText(),
                "url": $(".share-links-menu", $("header")).data("url")
            });

            event.preventDefault();
            event.stopPropagation();
        });

        $dialog.on("mouseup", restoreRange);

        var currentSelction = window.getSelection();

        $dialog.removeClass("is-show");

        if (currentSelction.anchorNode) {
            var selectionClientRect = currentSelction.getRangeAt(0).getBoundingClientRect();

            var dialogPositionLeft = selectionClientRect.left + selectionClientRect.width / 2;
            var dialogPositionTop = selectionClientRect.top;

            $dialog.css("left", dialogPositionLeft + "px");
            $dialog.css("top", dialogPositionTop + "px");
            $dialog.addClass("is-show");
            $currentDialog = $dialog;
        }
    }

    function hideShareTool() {
        if ($currentDialog) {
            $currentDialog.remove();
            $currentDialog = null;
        }
    }

    $("main, .our-heartbeat-map, .articlesContainer, .modal").on("mouseup", function () {
        saveRange();
        setTimeout(showShareTool, 10);
    });

    $(window).on("resize", hideShareTool);
    $(window).on("scroll", hideShareTool);

});
