/*jslint browser: true, fudge: true, long: true, this: true, for: true */
/*global blacksunplc, console, document, history, jQuery, location, window */

jQuery(function ($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays   from "module:blacksunplc/arrays"
    var security = blacksunplc.security; // import * as security from "module:blacksunplc/security"

    var $html = $(document.documentElement);
    var $body = $(document.body);
    var $modal = $("body:not(.foreign-languages) .modal");
    var hash = security.safeLocationHash();
    var scrollLocation = 0;

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal
     */
    function showModal(/** !jQuery.Event */ event) {
        var showModalButton = event.currentTarget;

        var buttonData = /** @type {{target: string, slideindex: number}} */ ($(showModalButton).data());
        var idSelector = buttonData.target;
        var slideIndex = buttonData.slideindex;

        var $buttonTarget = $(idSelector);
        if (!$buttonTarget.hasClass("modal")) {
            console.log(idSelector + " no exist");
            return;
        }

        scrollLocation = $(window).scrollTop();
        $body.append("<div class='modal-backdrop' />").hide().fadeIn();
        $buttonTarget.removeClass("is-hidden");
        $html.addClass("is-locked");

        var $slickSlider = $(".slick-slider", $buttonTarget);
        if ($slickSlider.length) {
            $slickSlider.slick("setPosition");
            $slickSlider.slick("slickGoTo", slideIndex);
        } else {
            location.hash = idSelector;
            console.log("modal carousel not exist");
        }

        if ($(document.body).hasClass("homepage")) {
            jQuery.fn.fullpage.setAllowScrolling(false);
        }

        event.preventDefault();
    }

    function hashToggleModal() {
        if (hash) {
            var $targetElement = $("[data-toggle='modal'][data-page=" + hash.slice(1) + "]");
            if ($targetElement.length) {
                var modal = $($targetElement.attr("data-target"));
                if (modal.length && modal.hasClass("modal")) {
                    $body.append("<div class='modal-backdrop' />").hide().fadeIn();
                    $html.addClass("is-locked");
                    modal.removeClass("is-hidden");
                }
            }
        }
    }

    function removeLocationHash() {
        if (history.replaceState) {
            history.replaceState("", document.title, location.pathname + location.search);
        } else {
            /* Prevent scrolling by storing the page's current scroll offset. */
            var scrollV = document.body.scrollTop;
            var scrollH = document.body.scrollLeft;
            location.hash = "";
            document.body.scrollTop = scrollV;
            document.body.scrollLeft = scrollH;
        }
    }

    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close
     */
    function closeModal(/** !jQuery.Event */ event) {
        var closeModalButton = event.currentTarget;

        var correctTarget = false;

        $("html, body").animate({
            "scrollTop": scrollLocation
        }, 300);

        var $modalContents = $(".modal-content", $modal);
        if (!$modalContents.is(event.target) && $modalContents.has(event.target).length === 0) {
            $modal.addClass("is-hidden");
            correctTarget = true;
        } else {
            var $closeButton = $(".modal-content .btn-close", $modal);
            if ($closeButton.is(event.target)) {
                $(closeModalButton).parents(".modal").toggleClass("is-hidden");
                correctTarget = true;
            }
        }

        if (correctTarget) {
            removeLocationHash();
            document.getSelection().removeAllRanges();
            $(".modal-backdrop", $body).fadeOut(
                500, // duration in milliseconds
                /**
                 * A function to call once the animation is complete,
                 * called once per matched element.
                 * @this {!Element} The DOM element being animated.
                 */
                function () {
                    var modalBackdrop = this;
                    $(modalBackdrop).remove();
                    $html.removeClass("is-locked");
                }
            );
        }

        if ($(document.body).hasClass("homepage")) {
            jQuery.fn.fullpage.setAllowScrolling(true);
        }
    }

    var $showModalButtons = $("body:not(.foreign-languages) [data-toggle='modal']");
    if ($showModalButtons.length) {
        arrays.forEach($showModalButtons, function (showModalButton) {
            $(showModalButton).on("click", showModal);
        });
        $(window).one("load", hashToggleModal);
        $(".btn-close", $modal).on("click", closeModal);
        $modal.on("click", closeModal);
    }

});
