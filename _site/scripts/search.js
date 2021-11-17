/*jslint browser: true, fudge: true, long: true */
/*global $, blacksunplc, document, jQuery */
/*exported processSearchResults */

/**
 * Called as a global function by the "search.blacksunplc.com" script.
 * @param {!blacksunplc.SearchResults=} searchResults
 */
function processSearchResults(searchResults) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays from "module:blacksunplc/arrays"

    if (!searchResults || !searchResults.hits.length) {
        $("#search-results-in-progress").hide();
        $("#search-results-not-found").show();
        return;
    }

    var pageCount = Math.ceil(searchResults.total / searchResults.count);
    var current = Math.ceil(searchResults.start / searchResults.count);

    $(".start").text(searchResults.start);
    $(".end").text(searchResults.end);
    $(".total").text(searchResults.total);

    if (pageCount > 1) {
        if (searchResults.start !== 1) {
            $(".search-pagination").append("<a href='?q=" + searchResults.query +
                "&s=" + Math.max(1, searchResults.start - searchResults.count) +
                "' class='previous  tr-icon arrow-tail-left-before pagination-arrow'></a>");
        }

        var pageIndex = 1;
        while (pageIndex <= pageCount) {
            $(".search-pagination").append("<a href='?q=" + searchResults.query +
                "&s=" + ((pageIndex - 1) * searchResults.count + 1) + "' class='pagination" +
                (pageIndex === current ? " active" : "") + "'> <i class='fa fa-circle' aria-hidden='true'></i> </a>");
            pageIndex += 1;
        }

        if (searchResults.end < searchResults.total) {
            $(".search-pagination").append("<a href='?q=" + searchResults.query +
                "&s=" + Math.max(1, searchResults.start + searchResults.count) + "' class='next  tr-icon arrow-tail-right-after pagination-arrow'></a>");
        }
    }

    arrays.forEach(searchResults.hits, function (hit) {
        var attribs = ["href='" + hit.url + "'"];
        var text = [];
        text.push(hit.title);
        /*var lastIndexOfTitle = hit.title.indexOf(" - ");
        if (lastIndexOfTitle === -1) {
        } else {
            text.push(hit.title.slice(lastIndexOfTitle + 3));
        }*/
        if (hit.contentType === "application/pdf") {
            attribs.push("data-filetype='pdf'");
            text.push("(" + hit.fLength + " pdf)");
        }
        var children = ["<a " + attribs.join(" ") + ">" + text.join(" ") + "</a>"];
        if (hit.description) {
            children.push("<p>" + hit.description + "</p>");
        }
        $("#search-results ol").append("<li>" + children.join("") + "</li>");
    });

    $("#search-results ol").attr("start", searchResults.start);

    $("#search-results-in-progress").hide();
    $("#search-results").show();
}

jQuery(function ($) {
    "use strict";

    var urls = blacksunplc.urls; // import * as urls from "module:blacksunplc/urls"

    var searchServiceURL;
    if ($("html[lang='zh']").length > 0) {
        searchServiceURL = "https://search.blacksunplc.com/search/temasek_annual_review_2021_zh";
    } else {
        searchServiceURL = "https://search.blacksunplc.com/search/temasek_annual_review_2021_en";
    }
    var params = urls.searchParams(document.URL);
    var query = params.get("q");
    if (query !== null) {
        searchServiceURL = urls.appendSearchParam(searchServiceURL, "q", query);
        var start = params.get("s");
        if (start !== null) {
            searchServiceURL = urls.appendSearchParam(searchServiceURL, "s", start);
        }
        var searchElement = /** @type {!HTMLScriptElement} */ (document.createElement("script"));
        searchElement.type = "text/javascript";
        searchElement.src = searchServiceURL;
        document.getElementsByTagName("head").item(0).appendChild(searchElement);
    } else {
        processSearchResults();
    }

});
