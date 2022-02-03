/***********************************************************/
/*                    LiveFilter Plugin                    */
/*                      Version: 1.4                       */
/*                      Mike Merritt                       */
/*        https://github.com/mikemerritt/LiveFilter        */
/***********************************************************/

(function ($) {
    "use strict";

    $.fn.liveFilter = function (settings) {

        // Default settings
        var defaults = {
            delay: 0,
            defaultText: "Type to Filter:",
            resetText: "Reset",
            noMatches: "No Matches",
            totalNumber: false,
            fitlerTargetCustomDiv: "div",
            filterChildSelector: null,
            hideDefault: false,
            addInputs: false,
            ignore: false,
            zebra: {
                enabled: false,
                baseColor: false,
                altColor: false
            }
        };

        // Overwrite default settings with user provided ones. Declare some vars.
        var options = $.extend(defaults, settings);
        var keyDelay;
        var filter;
        var child;

        // Cache our wrapper element and find our target list.
        var wrap = $(this);
        var filterTarget = wrap.find("ul, ol, table, div");
        var nomatches = null;
        var totalnumber = null;

        // Add no matches text.
        if (options.noMatches) {
            wrap.append("<div class=\"nomatches\">" + options.noMatches + "</div>");
            nomatches = $(".nomatches");
            nomatches.hide();
        }

        // Determine our child element type.
        if (filterTarget.is("ul") || filterTarget.is("ol")) {
            child = "li";
        } else if (filterTarget.is("table")) {
            child = "tbody tr";
        } else {
            child = options.fitlerTargetCustomDiv;
        }

        options.filterChildSelector = options.filterChildSelector || child;

        function updateTotalNumber() {
            if (totalnumber) {
                totalnumber.text(options.totalNumber + wrap.find(options.filterChildSelector + ":visible").length);
            }
        }

        if (options.totalNumber) {
            if (!$(".totalnumber").length) {
                wrap.append("<div class=\"totalnumber\"></div>");
            }
            totalnumber = $(".totalnumber");
            updateTotalNumber();
        }

        // Used for zebra striping list/table.
        function zebraStriping() {
            filterTarget.find(child + ":visible:odd").css({background: options.zebra.baseColor});
            filterTarget.find(child + ":visible:even").css({background: options.zebra.altColor});
        }

        // Hide the list/table by default. If not being hidden apply zebra striping if needed.
        if (options.hideDefault) {
            filterTarget.find(child).hide();
        } else if (options.zebra.enabled) {
            zebraStriping();
        }

        // Add inputs if required
        if (options.addInputs) {
            var markup = "<input class=\"filter\" type=\"text\" value=\"\" /><input class=\"reset\" type=\"reset\" value=\"" + options.resetText + "\" />";
            wrap.prepend(markup);
        }

        // Cache list/table elements so we don't have to keep traversing the DOM.
        var list = filterTarget.find(child);

        // Used to reset our text input and show all items in the filtered list
        wrap.find("input[type=\"reset\"]").on("click", function () {
            if (nomatches) {
                nomatches.hide();
            }

            wrap.find("input[type=\"text\"]").attr("value", options.defaultText || "");

            if (options.hideDefault) {
                list.each(function () {
                    $(this).hide();
                });
            } else {
                list.each(function () {
                    $(this).show();
                });
            }

            updateTotalNumber();

            return false;
        });

        // Used to set the default text of the text input if there is any
        if (options.defaultText) {

            var defaultTextInput = wrap.find("input[type=\"text\"]");
            defaultTextInput.attr("value", options.defaultText);

            defaultTextInput.focus(function () {
                var curVal = $(this).attr("value");
                if (curVal === options.defaultText) {
                    $(this).attr("value", "");
                }
            });

            defaultTextInput.blur(function () {
                var curVal = $(this).attr("value");
                if (curVal === "") {
                    $(this).attr("value", options.defaultText);
                }
            });

        }

        // Keyup event - where the magic happens.
        // wrap.find("input[type=\"text\"]").on("keyup", function () {
        // added input for chinese text search
        wrap.find("input[type=\"text\"]").on("keyup input", function () {

            var input = $(this);
            window.clearTimeout(keyDelay);

            // Setting timeout for performance reasons.
            keyDelay = window.setTimeout(function () {

                filter = input.val().toLowerCase();
                var visible = 0;
                var words = filter.split(" ");

                if (filter === "" && options.hideDefault) {
                    list.each(function () {
                        $(this).hide();
                    });
                } else {
                    // Iterate through list and show/hide the proper elements.
                    list.each(function () {
                        var text = $(this).text().toLowerCase();
                        // Non consecutive filtering
                        var t;
                        var match = true;
                        for (t = 0; t < words.length; t++) {
                            if (text.indexOf(words[t]) < 0) {
                                match = false;
                                break;
                            }
                        }

                        if (match) {
                            visible++;
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    });

                    // Hide items with no children
                    list.not(options.filterChildSelector).each(function () {
                        var $item = $(this);
                        if (!$item.find(options.filterChildSelector + ":visible").length) {
                            $item.hide();
                        }
                    });

                    if (nomatches) {
                        if (visible === 0) {
                            nomatches.show();
                        } else if (visible > 0) {
                            nomatches.hide();
                        }
                    }

                    updateTotalNumber();

                    if (options.ignore) {
                        options.ignore.show();
                    }

                    if (options.zebra.enabled) {
                        zebraStriping();
                    }
                }

                window.clearTimeout(keyDelay);
            }, options.delay);

        });

    };
}(jQuery));