/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, document, encodeURIComponent, is, jQuery, location, window */

/** @module blacksunplc/sharelink */
(function () {
    "use strict";

    var objects = blacksunplc.objects; // import * as objects from "module:blacksunplc/objects"

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     * @param {string=} metablock
     * @return {{url: string, title: string, text: string, getText: function ():string}}
     */
    function ensureData(sender, data, metablock) {

        if (!data) {
            data = {};
        }

        var $sender = $(sender || document);

        var defaultUrl = /** @type {string} */ ($sender.data("url"));
        var defaultDescription = /** @type {string} */ ($sender.data("description"));
        var defaultTitle = /** @type {string} */ ($sender.data("title"));

        if (metablock) {
            switch (metablock.toLowerCase()) {

            case "og":
            case "og:":
            case "opengraph":
                defaultUrl = defaultUrl || /** @type {string} */ ($("meta[name='og:url']").attr("content"));
                defaultTitle = defaultTitle || /** @type {string} */ ($("meta[name='og:title']").attr("content"));
                defaultDescription = defaultDescription || /** @type {string} */ ($("meta[name='og:description']").attr("content"));
                break;

            case "twitter":
            case "twitter:":
                defaultUrl = defaultUrl || /** @type {string} */ ($("meta[name='twitter:url']").attr("content"));
                defaultTitle = defaultTitle || /** @type {string} */ ($("meta[name='twitter:title']").attr("content"));
                defaultDescription = defaultDescription || /** @type {string} */ ($("meta[name='twitter:description']").attr("content"));
                break;

            }
        }

        defaultTitle = defaultTitle || document.title;
        defaultDescription = defaultDescription || /** @type {string} */ ($("meta[name='description']").attr("content"));
        defaultUrl = defaultUrl || location.href;

        var rv = {
            "url": data.url || defaultUrl,
            "title": data.title || defaultTitle,
            "text": data.text || defaultDescription
        };

        /** @return {string} */
        rv.getText = function () {

            if (rv.text !== null) {
                return rv.text + " #TemasekReview";
            }

            if ($("html[lang='zh']").length) {
                return "\u6b32\u77e5\u66f4\u591a\u5173\u4e8e\"\u6de1\u9a6c\u9521\"\u8be6\u60c5,\u8bf7\u67e5\u9605 #TemasekReview 2021";
            }

            return "Find out more about Temasek from #TemasekReview 2021";
        };

        return rv;
    }

    var exports = {};

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.mail = function (sender, data) {
        var d = ensureData(sender, data);

        if (d.text.length > 1000) {
            d.text = d.text.substring(0, 996) + "...";
        }

        var body = d.getText() + "\r\n\r\n" + d.title + "\r\n" + d.url;
        window.location.href = "mailto:?subject=" + encodeURIComponent(d.title) + "&body=" + encodeURIComponent(body);
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.facebook = function (sender, data) {
        var d = ensureData(sender, data, "og");
        window.open(
            "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(d.url),
            "shareWindow",
            "width=700,height=500,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.twitter = function (sender, data) {
        var d = ensureData(sender, data, "twitter");
        window.open(
            "https://twitter.com/intent/tweet?url=" + encodeURIComponent(d.url) +
            "&text=" + encodeURIComponent(d.getText()),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.linkedIn = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://www.linkedin.com/shareArticle?source=www.temasekreview.com.sg" +
            "&title=" + encodeURIComponent(d.title) +
            "&summary=" + encodeURIComponent(d.getText()) +
            "&url=" + d.url,
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.whatsApp = function (sender, data) {
        var d = ensureData(sender, data);
        var message = d.getText() + " - " + d.url;

        if (is.desktop()) {
            window.open(
                "https://web.whatsapp.com/send?text=" + encodeURIComponent(message),
                "shareWindow",
                "width=700,height=500,top=50,left=50"
            );
        } else {
            window.open("whatsapp://send?text=" + encodeURIComponent(message));
        }
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.telegram = function (sender, data) {
        var d = ensureData(sender, data);
        var message = d.getText() + " - " + d.url;

        window.open(
            "https://t.me/share/url?url=" + encodeURIComponent(message),
            "shareWindow",
            "width=700,height=500,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.google = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://plus.google.com/share?url=" + encodeURIComponent(d.url),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.sina = function (sender, data) {
        var d = ensureData(sender, data); // Note Should the unused `sender` parameter be the first argument to `ensureData`?
        window.open(
            "https://service.weibo.com/share/share.php?url=" + encodeURIComponent(d.url) + "&title=" + encodeURIComponent(d.title),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.tencent = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://v.t.qq.com/share/share.php?url=" + encodeURIComponent(d.url) + "&title=" + encodeURIComponent(d.title),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.qzone = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + encodeURIComponent(d.url),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.wechat = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "//weixin:/url=" + encodeURIComponent(d.url),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.renren = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://share.renren.com/share/buttonshare?link=" + encodeURIComponent(d.url) + "&title=" + encodeURIComponent(d.title),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    /**
     * @param {!Element} sender
     * @param {{url: (string|undefined), title: (string|undefined), text: (string|undefined)}=} data
     */
    exports.pengyou = function (sender, data) {
        var d = ensureData(sender, data);
        window.open(
            "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=" + encodeURIComponent(d.url) + "&title=" + encodeURIComponent(d.title),
            "shareWindow",
            "width=500,height=300,top=50,left=50"
        );
    };

    blacksunplc.sharelink = objects.freeze(exports);

}());

jQuery(function ($) {
    "use strict";

    var sharelink = blacksunplc.sharelink; // import * as sharelink from "./sharelink.js"

    /**
     * @param {!Element} sender
     * @return {string}
     */
    function getUrl(sender) {
        return /** @type {string} */ ($(sender).parents(".share-links-menu").attr("data-url"));
    }

    var $menu = $(".share-links-menu");

    $("li.facebook", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.facebook(sender, {"url": getUrl(sender)});
    });

    $("li.twitter", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.twitter(sender, {"url": getUrl(sender)});
    });

    $("li.linkedin", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.linkedIn(sender, {"url": getUrl(sender)});
    });

    $("li.google", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.google(sender, {"url": getUrl(sender)});
    });

    $("li.wechat", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.wechat(sender, {"url": getUrl(sender)});
    });

    $("li.whatsapp", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.whatsApp(sender, {"url": getUrl(sender)});
    });

    $("li.telegram", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.telegram(sender, {"url": getUrl(sender)});
    });

    $("li.sina", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.sina(sender, {"url": getUrl(sender)});
    });

    $("li.tencent", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.tencent(sender, {"url": getUrl(sender)});
    });

    $("li.email", $menu).on("click", function (/** !jQuery.Event */ event) {
        var sender = event.currentTarget;
        sharelink.mail(sender, {"url": getUrl(sender)});
        event.preventDefault();
        event.stopPropagation();
    });

});
