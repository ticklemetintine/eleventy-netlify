/*jslint browser: true, fudge: true, long: true, this: true */
/*global $, blacksunplc, document, hapyak, jQuery, setTimeout, videojs, window */

(function () {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays   from "module:blacksunplc/arrays"
    var events = blacksunplc.events; // import * as events   from "module:blacksunplc/events"
    var security = blacksunplc.security; // import * as security from "module:blacksunplc/security"

    var chinese = $("html[lang='zh']").length !== 0;

    var brightcoveData = {
        "account": "4922155157001",
        "player": "ryFCfJxS",
        "embed": "default",
        "width": 720,
        "height": 405
    };

    /**
     * @const {!Object<{
     *     hapyakid: string,
     *     languagecode: string,
     *     viewer: {apiKey: string, projectId: number}
     * }>}
     */
    var hapyakVideos = {
        "6180754614001": {
            "hapyakid": "hapyak-player-290907-2176",
            "languagecode": "en",
            "viewer": {
                "apiKey": "534e1c72786546848319",
                "projectId": 360937
            }
        },
        "6180745635001": {
            "hapyakid": "hapyak-player-290427-5762",
            "languagecode": "en",
            "viewer": {
                "apiKey": "534e1c72786546848319",
                "projectId": 360936
            }
        },
        "6180750258001": {
            "hapyakid": "hapyak-player-290599-7526",
            "languagecode": "zh",
            "viewer": {
                "apiKey": "534e1c72786546848319",
                "projectId": 360935
            }
        }
    };

    /**
     * @param {string} videoid
     * @param {!jQuery} $videoContainer
     */
    function initVideo(videoid, $videoContainer) {

        var hapyakData = hapyakVideos[videoid];
        var vjs = videojs("vjs" + videoid);

        function initSocialPanel() {
            var video = videojs("vjs" + videoid);
            video.social({
                "embedCode": chinese ? "视频版权 © 2019淡马锡控股 (私人) 有限公司" : "All videos copyright © 2019 Temasek Holdings (Private) Limited",
                "deeplinking": true,
                "offset": "00:00:00",
                "services": {
                    "facebook": true,
                    "google": true,
                    "twitter": true,
                    "tumblr": false,
                    "pinterest": false,
                    "linkedin": true
                }
            });
            var hash = security.safeLocationHash();
            var offsetTime = hash.match(/[0-9]+/g);
            if (offsetTime) {
                video.currentTime(offsetTime);
            }
        }

        function initHapyak() {
            //            vjs.one("loadedmetadata", function () {
            /* Note The `trackId` property is not marked "optional" for the Viewer API at https://www.hapyak.com/docs/#Options */
            hapyak.viewer({
                "environment": "production",
                "logLevel": "warn",
                "apiKey": hapyakData.viewer.apiKey,
                "projectId": hapyakData.viewer.projectId,
                "plugins": {
                    "annotationSources": {"brightcove.cuepoints": true}
                },
                "resetVariables": true,
                "player": vjs,
                "playerType": "brightcove-v2",
                "autoplay": false
            });
            //            });
        }

        if (hapyakData) {
            /* NOTE: The callback is fired once the script has been loaded but not necessarily executed. */
            jQuery.getScript("//d2qrdklrsxowl2.cloudfront.net/js/hapyak.js", initHapyak);
        }

        vjs.ready(
            /** @this {!videojs.Player} */
            function () {
                var player = this;
                var el = player.el_;
                var mainHeaderHeight = /** @type {number} */ ($(".main-header").height());
                var elOffsetTop = $(el).offset().top;

                initSocialPanel();
                $videoContainer.addClass("hapyak-video-loaded");

                /* Force browser scroll to video offset top to prevent iPad exit screen improper jump scroll issue. */
                if ($(".contentpage").length) {

                    events.add(el, "fullscreenchange", function () {
                        // https://codepen.io/team/rcrooks1969/pen/JGEdEd
                        // Use of setTimeout() temporary measure until bug in fullscreenchange event corrected
                        setTimeout(function () {
                            if (!player.isFullscreen()) {
                                $("html, body").animate({"scrollTop": elOffsetTop - mainHeaderHeight - 40});
                                //                                console.log('exit');
                                //                            } else {
                                //                                console.log('enter');
                            }
                        }, 100);
                    });
                }
            });
    }

    /**
     * @param {string} videoid
     * @param {!jQuery} $videoContainer
     * @param {boolean} autoPlay
     */
    function insertVideo(videoid, $videoContainer, autoPlay) {
        if ($("#vjs" + videoid, $videoContainer).length) {
            /* The video is already on the stage. */
            return;
        }
        var htmlString =
            "<video id='vjs" + videoid + "' " +
            "data-account='" + brightcoveData.account + "' " +
            "data-player='ryFCfJxS'" +
            "data-embed='default'" +
            "data-video-id='" + videoid + "' " +
            "class='video-js' playsinline='playsinline' controls " +
            (autoPlay ? "autoplay " : "") +
            " width='" + brightcoveData.width + "' height='" + brightcoveData.height + "'>" +
            "</video>";
        $(htmlString).appendTo($videoContainer);

        /* NOTE: The callback is fired once the script has been loaded but not necessarily executed. */
        jQuery.getScript("//players.brightcove.net/" + brightcoveData.account + "/ryFCfJxS_default/index.min.js", function () {
            initVideo(videoid, $videoContainer);
        });
    }

    function initVideoOverlay() {

        /** @param {string} videoid */
        function populateVideoOverlay(videoid) {
            var $overlay = $("#overlay");
            if ($("#video-panel-" + videoid, $overlay).length) {
                /* Video panel is already on stage. */
                return;
            }
            var htmlString =
                "<div id='video-panel-" + videoid + "' class='video-container-popup'>" +
                "<div class='video-container-inner'></div>" +
                "</div>";
            $(htmlString).appendTo($("#overlay .video-wrapper"));
        }

        function closeVideoOverlay() {
            var $activePopup = $(".video-container-popup.active");
            if (!$(".vjs-social-overlay", $activePopup).hasClass("vjs-hidden")) {
                var $children = $(".video-container-inner", $activePopup).children();
                var playerId = /** @type {string} */ ($children.attr("id"));
                if (playerId) {
                    videojs(playerId).socialOverlay.close();
                }
            } else {
                var $video = $("video", $activePopup);
                if ($video.length) {
                    var video = /** @type {!HTMLMediaElement} */ ($video.get(0));
                    video.pause();
                }
                $("#overlay").removeClass("active");
                $activePopup.removeClass("active");
                $("#overlay .media-close").hide();
            }
        }

        var $body = $(document.body);

        $body.on("click touchend", ".media-open", function (/** !jQuery.Event */ event) {
            event.preventDefault();

            if (navigator.onLine) {
                var $link = $(event.currentTarget);
                var videoid = /** @type {(string|undefined)} */ ($link.data("video-id"));

                if (!videoid) {
                    event.stopPropagation();
                    return;
                }

                populateVideoOverlay(videoid);

                $("#overlay .media-close").show();
                $("#overlay").addClass("active");

                var $videoPopup = $("#video-panel-" + videoid);
                $videoPopup.addClass("active");
                var $videoContainer = $(".video-container-inner", $videoPopup);

                var autoPlay = true;

                insertVideo(videoid, $videoContainer, autoPlay);
            } else {
                alert("You are offline. Please connect to internet to play this video.")
            }
        });

        $body.on("click touchend", ".media-close, .video-overly", function (/** !jQuery.Event */ event) {
            if (event.target === event.currentTarget) {
                event.preventDefault();
                closeVideoOverlay();
                event.stopPropagation();
            }
        });

        $(document).on("keyup", function (/** !jQuery.Event */ event) {
            if (event.keyCode === 27) {
                closeVideoOverlay();
            }
        });
    }

    function initPageVideos() {
        if ($(".video-container-inner", document.body).length) {

            arrays.forEach($(".video-container-inner"), function (videoContainer) {

                var $videoContainer = $(videoContainer);
                var videoid = /** @type {(string|undefined)} */ ($videoContainer.data("video-id"));

                if (videoid) {
                    var autoPlay = false;
                    insertVideo(videoid, $videoContainer, autoPlay);
                }
            });
        }
    }

    jQuery(function () {
        /* Remove hapyak js in snippets-from-temasek-review-2020.html */
        if ($(document.body).hasClass("media-centre-videos")) {
            delete hapyakVideos["6180754614001"];
        }

        initVideoOverlay();
        initPageVideos();
    });

    function unHideVideos() {
        $("video").removeClass("hide");
    }

    $(window).one("load", unHideVideos);

}());
