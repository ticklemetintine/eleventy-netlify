window.gaScrollTrigger = {

    "_enabled": false,
    "_counters": [],

    "resetTrigger": function(id) {
        window.gaScrollTrigger._counters[id] = null;
    },
    "trigger": function(percent, id) {

        if (!window.gaScrollTrigger._enabled) {
            return;
        }

        if (id == null) {
            id = "_default";
        }

        percent = Math.min(100, Math.max(0, percent));

        var cCounter = window.gaScrollTrigger._counters[id];
        if (cCounter == null) {
            cCounter = {
                "id": id,
                "maxScroll": 0,
                "maxTriggered": 0
            };

            window.gaScrollTrigger._counters[id] = cCounter;
        }

        if (percent > cCounter.maxScroll) {

            cCounter.maxScroll = percent;

            var toTrigger = Math.floor(percent / 25) * 25;
            if (toTrigger > cCounter.maxTriggered) {
                cCounter.maxTriggered = toTrigger;

                if (typeof ga !== "undefined") {

                    ga("gtm1.send", {
                        "hitType": "event",
                        "eventCategory": location.pathname,
                        "eventAction": "Scroll Depth",
                        "eventLabel": cCounter.maxTriggered
                    });
                }
            }
        }

    }
};

(function(w, d, s, l, sg, cn, sitemaps) {
    var id = sitemaps.isSg() ? sg : cn;
    w[l] = w[l] || []; w[l].push({"gtm.start":
        new Date().getTime(),
    "event": "gtm.js"});
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true; j.src = "https://www.googletagmanager.com/gtm.js?id=" + id + dl;
    f.parentNode.insertBefore(j, f);
}(window, document, "script", "dataLayer", "GTM-P5XFDXT", "GTM-5HT2QFC", blacksunplc.sitemaps));

var _nht_args = {};
_nht_args.rta_k = "GNjCU6LhEV";
window._nht_args = _nht_args;
(function () {
    var rta_js = document.createElement("script");
    rta_js.type = "text/javascript";
    rta_js.async = true;
    rta_js.src = "https://trace.rtbasia.com/nht_static.js";
    document.getElementsByTagName("head")[0].appendChild(rta_js);
}());
