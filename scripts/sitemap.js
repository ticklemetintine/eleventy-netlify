/*jslint browser: true, fudge: true, long: true */
/*global blacksunplc, jQuery */

jQuery(function ($) {
    "use strict";


    var arrays = blacksunplc.arrays; // import * as arrays   from "module:blacksunplc/arrays"
    var sitemaps = blacksunplc.sitemaps; // import * as sitemaps from "./sitemaps-eng-zh.js"

    var sections = sitemaps.getLangSections();
    var $targetElement = $(".contentpage--section");

    arrays.forEach(sections, function (section, index) {

        var $ul = $("<ul></ul>"),
            icon = '<span class="icon"><span class="icon-inner"></span></span>';

        var $sectionTitle = $("<h5 class='sitemap-title'><a>" + section.sectionName + "</a></h5>");

        if (index % 2 === 0) {
            $targetElement.append("<div class='row row-wrap'></div>");
        }

        if (section.sectionName == "Our Stories" || section.sectionName === "我们的故事") {
            arrays.forEach(section.sectionPages, function (sectionPage) {
                arrays.forEach(sectionPage.pages, function (page) {
                    var anchorText = '<span class="anchor-text">' + page.pageName + '</span>';
                    $ul.append($("<li class=''><a href='" + page.href + "' class='anchor'>" + icon + anchorText + "</a></li>"));
                });
            });

        } else {

            arrays.forEach(section.sectionPages, function (sectionPage) {
                var anchorText = '<span class="anchor-text">' + sectionPage.pageName + '</span>';

                $ul.append($("<li class=''><a href='" + sectionPage.href + "' class='anchor'>" + icon + anchorText + "</a></li>"));
            });
        }

        $targetElement.children(".row-wrap").last().append($("<div class='column-12 column'></div>").append($sectionTitle).append($ul));

    });

});
