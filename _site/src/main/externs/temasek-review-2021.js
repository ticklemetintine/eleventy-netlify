/*
 * Black Sun Plc
 * Fulham Palace, Bishop's Avenue, London, SW6 6EA.
 * https://www.blacksunplc.com/
 *
 * Copyright (c) 2020-2021 Black Sun Plc. All rights reserved.
 */

/**
 * @typedef {{modified: number, consent: {analytics: string}}}
 */
blacksunplc.CookieControl;

/**
 * @typedef {{
 *     contentType: string,
 *     description: string,
 *     length: string,
 *     modified: string,
 *     score: number,
 *     searchTitle: string,
 *     title: string,
 *     url: string,
 *     fLength: (null|number)
 * }}
 */
blacksunplc.SearchHit;

/**
 * @typedef {{
 *     query: string,
 *     count: number,
 *     start: number,
 *     end: number,
 *     total: number,
 *     hits: !Array<!blacksunplc.SearchHit>
 * }}
 */
blacksunplc.SearchResults;

/**
 * @typedef {{name: string, content: string}}
 */
blacksunplc.Metadata;

/**
 * @typedef {{
 *     title: string,
 *     tinyUrl: string,
 *     metaArray: !Array<!blacksunplc.Metadata>
 * }}
 */
blacksunplc.PageData;

/**
 * Used as an expando property by "stories-modal.js"
 *
 * This is a rare case where the jQuery Data Storage
 * methods are a suitable implementation choice.
 *
 * @type {(!blacksunplc.PageData|undefined)}
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Expando
 * @see https://api.jquery.com/category/miscellaneous/data-storage/
 * @see https://svn.blacksunplc.com/svn/blacksun/blacksunplc-js/trunk/docs/module-blacksunplc_attributes.html#jquery-data-category
 */
Element.prototype.pageData;

/**
 * Used as an expando property by "changes-in-accounting-standards.js",
 * "performance-overview.js", and "temasek-bonds.js".
 *
 * This is a rare case where the jQuery Data Storage
 * methods are a suitable implementation choice.
 *
 * @type {(boolean|undefined)}
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Expando
 * @see https://api.jquery.com/category/miscellaneous/data-storage/
 * @see https://svn.blacksunplc.com/svn/blacksun/blacksunplc-js/trunk/docs/module-blacksunplc_attributes.html#jquery-data-category
 */
Element.prototype.pending;
