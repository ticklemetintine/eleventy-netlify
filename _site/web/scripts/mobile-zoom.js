/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, is */

/** @module blacksunplc/mobilezoom */
(function () {
    "use strict";

    var objects = blacksunplc.objects; // import * as objects  from "module:blacksunplc/objects"
    var geometry = blacksunplc.geometry; // import * as geometry from "module:blacksunplc/geometry"

    //    function mobileLightBoxZoom($featherlightContents) { // WIP
    //        if (is.androidPhone()) {
    //            var tracks = [];
    //            var initScale;
    //            var translateX;
    //            var minTransX;
    //            var maxTransX;
    //
    //            $featherlightContents.on("touchmove", function (/** !jQuery.Event */ event) {
    //                var touchEvent = /** @type {!TouchEvent} */ (event.originalEvent);
    //
    //                if (touchEvent.touches.length === 1) { // Scroll x
    //                    tracks.push([touchEvent.touches[0].pageX]);
    //
    //                    var dX = (tracks[tracks.length - 1] - tracks[0]) / 50;
    //
    //                    translateX += dX;
    //
    //                    if (minTransX < translateX && translateX < maxTransX) {
    //                        $featherlightContents.css('transform', 'scale(' + initScale + ') translate(' + translateX + 'px, 0)');
    //                    }
    //                } else if (touchEvent.touches.length === 2) { // Zoom w/transform around last track
    //                    tracks.push([
    //                        [touchEvent.touches[0].pageX, touchEvent.touches[0].pageY],
    //                        [touchEvent.touches[1].pageX, touchEvent.touches[1].pageY]
    //                    ]);
    //
    //                    var recentTrack = tracks[tracks.length - 1];
    //
    //                    var scale = Math.max((calcDist(recentTrack) / calcDist(tracks[0])) * initScale, 1);
    //                    var touchMidX = calcMidX(recentTrack);
    //
    //                    $featherlightContents.css('transform', 'scale(' + scale + ')');
    //                    $featherlightContents.css('transform-origin', touchMidX + 'px 50%');
    //                }
    //            });
    //
    //            $featherlightContents.on("touchstart", function () { // Restart touch
    //                var currBound = $featherlightContents[0].getBoundingClientRect();
    //
    //                var transMatrix = $featherlightContents.css('transform').match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
    //
    //                initScale = (transMatrix != null) ? transMatrix[0] : 1;
    //                translateX = (transMatrix != null) ? (transMatrix[4] / initScale) : 0;
    //
    //                minTransX = -(currBound.right - innerWidth) / initScale;
    //                maxTransX = -(currBound.left) / initScale;
    //
    //                tracks = [];
    //            });
    //
    //            $featherlightContents.on("touchend", function () {
    //                /* to be implemented */
    //            });
    //        }
    //    }

    /**
     * @param {!Array<!Array<number>>} track
     * @return {number}
     */
    function calcDist(track) {
        return geometry.hypot(
            track[0][0] - track[1][0],
            track[0][1] - track[1][1]
        );
    }

    /**
     * @param {!Array<!Array<number>>} track
     * @return {number}
     */
    function calcMidX(track) {
        return (track[0][0] + track[1][0]) / 2;
    }

    var exports = {};

    /** @param {!jQuery} $featherlightContents */
    exports.mobileLightBoxZoom = function ($featherlightContents) {
        if (is.androidPhone()) {

            /** @type {!Array<!Array<!Array<number>>>} */
            var tracks = [];

            /** @type {number} */
            var initScale;

            $featherlightContents.on("touchmove", function (/** !jQuery.Event */ event) {
                var touchEvent = /** @type {!TouchEvent} */ (event.originalEvent);

                /* Only run code if the user has two fingers touching. */
                if (touchEvent.touches.length === 2) {
                    tracks.push([[touchEvent.touches[0].pageX, touchEvent.touches[0].pageY], [touchEvent.touches[1].pageX, touchEvent.touches[1].pageY]]);

                    var scale = Math.max((calcDist(tracks[tracks.length - 1]) / calcDist(tracks[0])) * initScale, 100);

                    var $images = $("img", $featherlightContents);

                    $images.width(scale + "%");
                    $images.height(scale + "%");

                    var touchMidX = calcMidX(tracks[tracks.length - 1]);
                    var newMidX = touchMidX * scale / 100;

                    var dScroll = newMidX - touchMidX;
                    var scrollLeft = /** @type {number} */ ($featherlightContents.scrollLeft());
                    $featherlightContents.scrollLeft(scrollLeft + dScroll);
                }
            });

            $featherlightContents.on("touchstart", function () {
                /* Start-over. */
                var $images = $("img", $featherlightContents);
                var imgWidth = /** @type {number} */ ($images.width());
                initScale = (imgWidth / outerWidth) * 100; // Note Where is `outerWidth` defined?
                tracks = [];
            });
        }
    };

    blacksunplc.mobilezoom = objects.freeze(exports);

}());
