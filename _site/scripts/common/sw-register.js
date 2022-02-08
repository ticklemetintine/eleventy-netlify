/*jslint browser: true, fudge: true, long: true */
/*global Waypoint, blacksunplc, jQuery, window, console */

(function() {
    "use strict";

    var jsonml = blacksunplc.jsonml; // import * as jsonml     from "module:blacksunplc/jsonml"

    var CACHED_FILES = 1598;
    var isInstalled = false;
    var isBefore = false;
    var isLoaded = false;
    var deferredPrompt;
    var swOverly = document.querySelector(".sw-overly");
    var addBtn = document.querySelector(".home-screen-button");
    var spinner = document.querySelector(".tr-spinnner");
    if (addBtn) {
        addBtn.style.display = "none";
    }
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== "undefined";

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window["safari"] || (typeof safari !== "undefined" && safari.pushNotification));

    var isMobileSafari = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    function hideInstallPromotion() {
        if (swOverly) {
            swOverly.style.display = "none";
        }
    }

    function displayMessageForSafari() {
        var isMessageClosed = localStorage.getItem("messageClosed");
        var markup = ["div", { class: "add-to-home-screen-message" },
            ["button", "close"],
            "This website is ready to install on your device.", ["br", { class: "br-small" }],
            "Tap the Share icon and then select Add to Home Screen"
        ];
        if (!isMessageClosed) {
            jsonml.append(document.body, markup);

            $("body").on("click", "button", function() {
                document.querySelector(".add-to-home-screen-message").style.display = "none";
                localStorage.setItem("messageClosed", true);
            })
        }
    }

    function checkPWADisplayMode(status) {
        var isStandalone = window.matchMedia("(display-mode: standalone)").matches;
        console.log("installed:", isInstalled, "status:", status);
        if (navigator.standalone || isStandalone) {
            if (isLoaded && status === "ready") {
                hideInstallPromotion();
                console.log("standalone");
            }
            return;
        } else if (isIE) {
            hideInstallPromotion();
            console.error("no prompts for browser");
            return;
        } else if (isFirefox) {
            if (status === "reject" || status === "ready") {
                hideInstallPromotion();
                console.error("Browser rejected or ready");
            }
            return;
        } else if (isSafari || isMobileSafari) {
            if (status === "ready") {
                hideInstallPromotion();
                displayMessageForSafari();
                console.error("no prompts for browser");
            }
            return;
        }
        console.log("browser");
        if (!isBefore && status === "ready") {
            setTimeout(function() {
                hideInstallPromotion();
                console.error("Browser ready timeout");
            }, 60 * 1000);
        }
    }

    function doRegister() {
        var path = "/web/sw.js",
            scope = "/";
        navigator.serviceWorker.register(path, { scope: scope }).then(waitUntilInstalled);
    }

    function cacheCheck(registration) {
        caches.keys().then(function(cacheList) {
            var key = cacheList.find(function(key) {
                return key.startsWith("TR21-precache-v2-");
            });
            caches.open(key).then(function(cache) {
                cache.keys().then(function(kList) {
                    if (kList.length !== CACHED_FILES) {
                        console.error("recache");
                        registration.unregister().then(function(done) {
                            if (done) {
                                caches.delete(key);
                                window.location.reload();
                            }
                        });
                    }
                })
            });
        });
    }

    function waitUntilInstalled(registration) {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
        return new Promise(function(resolve, reject) {
            if (registration.installing) {
                console.debug("Installing");
                registration.installing.addEventListener("statechange", function(e) {
                    if (e.target.state === "installed") {
                        console.debug("Installed");
                        resolve();
                    } else if (e.target.state === "redundant") {
                        console.debug("reject");
                        checkPWADisplayMode("reject");
                        reject();
                    } else if (e.target.state === "activated") {
                        console.debug("activated");
                        checkPWADisplayMode("ready");
                    } else {
                        console.debug("New State:", e.target.state);
                    }
                });
            } else {
                resolve();
                cacheCheck(registration);
            }
        });
    }

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(function() {
            checkPWADisplayMode("ready");
        });

        if (!navigator.serviceWorker.controller) {
            if (swOverly) { swOverly.style.display = "flex"; }
            console.error("This page is not currently controlled by a service worker.");
        }
        doRegister();

        window.addEventListener("load", function() {
            window.addEventListener("beforeinstallprompt", function(event) {
                console.log("before install");
                isBefore = true;
                var addButton = document.querySelector(".home-screen-button");
                if (addButton) {
                    event.preventDefault();
                    deferredPrompt = event;
                    addButton.style.display = "block";
                    spinner.style.display = "none";

                    addBtn.addEventListener("click", function() {
                        addBtn.style.display = "none";
                        deferredPrompt.prompt();
                        deferredPrompt.userChoice.then(function(choiceResult) {
                            checkPWADisplayMode("install");
                            if (choiceResult.outcome === "accepted") {
                                console.log("User accepted the A2HS prompt");
                            } else {
                                console.log("User dismissed the A2HS prompt");
                            }
                            deferredPrompt = null;
                        });
                    });
                }
            });

            checkPWADisplayMode("load");
            isLoaded = true;
        });
    }

    window.addEventListener("appinstalled", function() {
        // Hide the app-provided install promotion
        hideInstallPromotion();
        // Clear the deferredPrompt so it can be garbage collected
        deferredPrompt = null;
        // Optionally, send analytics event to indicate successful install
        console.log("PWA was installed");
        isInstalled = true;
    });

    function handleNetworkChange(event) {
        if (navigator.onLine) {
            document.body.classList.remove("offline");
        } else {
            document.body.classList.add("offline");
        }
    }

    if (!navigator.onLine) {
        document.body.classList.add("offline");
    }
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

})();