// 20210709
var vslashr = vslashr || {};

vslashr.config = {
    category: "financial",
    lang: "en",
    ie: false,
    currentYear: 2021
};

vslashr.table = {
    containerSelector: ".vsr-container",
    tableContainerSelector: "#vsr-table-main",
    floatingTableSelector: ".vsr-floating-table",
    lockTableSelector: ".vsr-table-lock .vsr-flex-container",
    scrollTableSelector: ".vsr-table-scroll .vsr-flex-container",
    rowIDSelector: ".vsr-row-id-",
    // upArrowCode: "&nbsp;&#x2191",
    // downArrowCode: "&nbsp;&#x2193;",
    // diamondCode: "&nbsp;&#x2195;",
    upArrowCode: " <i class=\"fa fa-sort-asc\"></i>",
    downArrowCode: " <i class=\"fa fa-sort-desc\"></i>",
    diamondCode: " <i class=\"fa fa-sort\"></i>",
    animationType: 'slide',
    // animationType: 'none',
    enableInteraction: true,
    duration: 800,
    delay: 0.8,
    previousSortColumnIndex: undefined,
    onLoadDone: false,
    onTableLoadDone: false,
    scrollOffset: 0,
    scrollTop: 0,
    previousRowIds: [],
    l: function(key){
        if (vslashr.lang[vslashr.config.lang]
            && vslashr.lang[vslashr.config.lang][key]) {
            var lookup = vslashr.lang[vslashr.config.lang][key];
            return lookup;
        } else {
            return key;
        } // if (vslashr.lang[vslashr.config.lang]
    },
    populateSortData: function(){
        var self = this;

        // add id to data rows
        $.each(vslashr.data.tableData.rows[vslashr.config.category], function(index, val) {
            val.id = index;
            self.previousRowIds[index] = index;
        });

        $()

        var headers = vslashr.data.tableData.headers2,
            headerRow = headers[headers.length - 1];
        $.each(headerRow, function(index, val) {
            if ('sortable' in val) {
                // hack to disable sorting by chinese names
                if (val.title === 'Name' && vslashr.config.lang !== 'en') {
                    return;
                }

                var sortable = val.sortable, sortType = ('sortType' in val) ? val.sortType : 'numeric';
                val.direction = 'asc';

                val.oldrows = vslashr.data.tableData.rows[vslashr.config.category].concat();

                val.rows = vslashr.data.tableData.rows[vslashr.config.category].concat();
                if (sortType === 'text') {
                    val.rows.sort(function(a, b){
                        var aItem = (sortable in a) ? a[sortable] : '';
                        var bItem = (sortable in b) ? b[sortable] : '';
                        return aItem.localeCompare(bItem);
                    })

                    val.reverserows = val.rows.concat().reverse();
                } else if (sortType === 'numeric') {
                    val.rows.sort(function(a, b){
                        var aItem = (sortable in a) ? (a[sortable] === '<1' ? 0 : (a[sortable] === 'NM' ? Number.MAX_VALUE : a[sortable])) : Number.MAX_VALUE;
                        var bItem = (sortable in b) ? (b[sortable] === '<1' ? 0 : (b[sortable] === 'NM' ? Number.MAX_VALUE : b[sortable])) : Number.MAX_VALUE;
                        return aItem - bItem;
                    });

                    val.reverserows = val.rows.concat();
                    val.reverserows.sort(function(a, b){
                        var aItem = (sortable in a) ? (a[sortable] === '<1' ? 0 : (a[sortable] === 'NM' ? -Number.MAX_VALUE : a[sortable])) : -Number.MAX_VALUE;
                        var bItem = (sortable in b) ? (b[sortable] === '<1' ? 0 : (b[sortable] === 'NM' ? -Number.MAX_VALUE : b[sortable])) : -Number.MAX_VALUE;
                        return bItem - aItem;
                    });
                } // if (sortType === 'text')
            } // if ('sortable' in val)
        });
    },
    drawLegend: function(){
        var self = this, legend = $('<div>', { 'class': 'vsr-legend' });
        $.each(vslashr.data.legend[vslashr.config.category], function(key, val){
            legend.append(
                $('<p>').append(
                    $('<i>', { 'class': 'fa fa-circle vsr-legend-' + key })
                ).append(self.l(val))
            );
        });

        $(this.tableContainerSelector).append(legend);
    },
    drawLockTable: function(){
        var lockTable = $('<div>', { 'class': 'vsr-flex-container' });

        for (var i = 0; i < 3; i++) {
            var classes = ["vsr-flex-item", "vsr-div-th", "vsr-empty-row"];
            if (i == 2) {
                // add class for last th row
                classes.push("vsr-div-th-header");
            }
            lockTable.append(
                $('<div>', { 'class': classes.join(' ') })
            );
        }

        $.each(vslashr.data.tableData.rows[vslashr.config.category], function(i, v) {
            var classes = ["vsr-flex-item", "vsr-div-td", "vsr-row-id-" + i];
            var image = vslashr.data.images[v.Name], name = v.Name + '-zh';
            if (vslashr.config.lang === 'zh' && vslashr.data.images[name]) {
                image = vslashr.data.images[name];
            }

            lockTable.append($('<div>', { 'class': classes.join(' ') }).append($('<img>', {
                src: vslashr.config.imgPath + '/' + image
            })));
        });

        $(this.tableContainerSelector).append($('<div>', { 'class': 'vsr-table-lock' }).append(lockTable));
    },
    drawFloatingLockTable: function() {
        var lockTable = $('<div>', { 'class': 'vsr-flex-container' });

        for (var i = 0; i < 3; i++) {
            var classes = ["vsr-flex-item", "vsr-div-th", "vsr-empty-row"];
            if (i == 2) {
                // add class for last th row
                classes.push("vsr-div-th-header");
            }
            lockTable.append(
                $('<div>', { 'class': classes.join(' ') })
            );
        }

        $(this.floatingTableSelector).append($('<div>', { 'class': 'vsr-table-lock' }).append(lockTable));
    },
    drawFloatingScrollTable: function() {
        var self = this;
        var scrollTable = $('<div>', { 'class': 'vsr-flex-container' });

        var headers = vslashr.data.tableData.headers2;
        $.each(headers, function(i, v) {

            $.each(v, function(j, w) {
                var classes = ["vsr-flex-item", "vsr-div-th"];
                if (w['class']) {
                    classes.push(w['class']);
                }
                if (i == headers.length - 1) {
                    // add class for last th row
                    classes.push("vsr-div-th-header");
                }

                var th = $('<div>', { 'class': classes.join(' ') });
                if (! vslashr.config.ie) {
                    if (i == headers.length - 1) {
                        if ('sortable' in w) {
                            // hack to disable sorting by chinese names
                            if (w.title === 'Name' && vslashr.config.lang !== 'en') {
                            } else {
                                th.addClass('vsr-sortable');
                                // used by sorting code
                                // th.attr('data-sortable', w.sortable);
                                th.attr('data-sortable-index', j);
                            }
                        }
                    }
                }

                if (w.title) {
                    if (w.mod) {
                        var tooltip = self.l(vslashr.data.footnotes[vslashr.config.category][w.mod]);
                        var placement = w.placement ? w.placement : 'bottom';

                        var link = $('<a>', {
                            'data-toggle': 'tooltip', 'data-placement': placement, 'title': tooltip
                        }).append(self.l(w.title));

                        // added an extra div so that <a> can be inline
                        var div = $('<div>').append(link);
                        th.html(div);
                    } else {
                        var span = $('<span>').append(self.l(w.title));
                        th.html(span);
                    }
                }

                scrollTable.append(th);
            });
        });

        $(self.floatingTableSelector).append($('<div>', { 'class': 'vsr-table-scroll' }).append(scrollTable));
    },
    drawScrollTable: function(){
        var self = this;
        var scrollTable = $('<div>', { 'class': 'vsr-flex-container' });

        var headers = vslashr.data.tableData.headers2;
        $.each(headers, function(i, v) {

            $.each(v, function(j, w) {
                var classes = ["vsr-flex-item", "vsr-div-th"];
                if (w['class']) {
                    classes.push(w['class']);
                }
                if (i == headers.length - 1) {
                    // add class for last th row
                    classes.push("vsr-div-th-header");
                }

                var th = $('<div>', { 'class': classes.join(' ') });
                if (! vslashr.config.ie) {
                    if (i == headers.length - 1) {
                        if ('sortable' in w) {
                            // hack to disable sorting by chinese names
                            if (w.title === 'Name' && vslashr.config.lang !== 'en') {
                            } else {
                                th.addClass('vsr-sortable');
                                // used by sorting code
                                // th.attr('data-sortable', w.sortable);
                                th.attr('data-sortable-index', j);
                            }
                        }
                    }
                }

                if (w.title) {
                    if (w.mod) {
                        var tooltip = self.l(vslashr.data.footnotes[vslashr.config.category][w.mod]);
                        var placement = w.placement ? w.placement : 'bottom';

                        var link = $('<a>', {
                            'data-toggle': 'tooltip', 'data-placement': placement, 'title': tooltip
                        }).append(self.l(w.title));

                        // added an extra div so that <a> can be inline
                        var div = $('<div>').append(link);
                        th.html(div);
                    } else {
                        var span = $('<span>').append(self.l(w.title));
                        th.html(span);
                    }
                }

                scrollTable.append(th);
            });
        });

        $.each(vslashr.data.tableData.rows[vslashr.config.category], function(i, v) {
            var classes = ["vsr-row-id-" + i];
            if (v.Color) {
                classes.push("vsr-" + v.Color);
            }

            classes.push("vsr-div-td", "vsr-flex-item");

            var currentYear = vslashr.config.currentYear, classesStr = classes.join(' '),
                style = "order:" + i;

            scrollTable.append(
                self.numberCell('Name', v, { 'class': classesStr + ' vsr-name', style: style, 'data-company': v.id, id: v.id })
            );

            scrollTable.append(
                self.numberCell('Shareholding', v, { 'class': classesStr + ' vsr-shareholding', style: style })
            );

            scrollTable.append(
                self.numberCell('Market.Cap.Currency', v, { 'class': classesStr + ' vsr-currency', style: style })
            );

            scrollTable.append(
                self.numberCell('Years.1', v, {
                    'class': classesStr + ' vsr-column-small', style: style
                }, 1)
            );
            scrollTable.append(
                self.numberCell('Years.3', v, {
                    'class': classesStr + ' vsr-column-small', style: style
                }, 1)
            );
            scrollTable.append(
                self.numberCell('Years.5', v, {
                    'class': classesStr + ' vsr-column-small', style: style
                }, 1)
            );

            scrollTable.append($('<div>', { 'class': classesStr + ' vsr-gap', style: style }));
            scrollTable.append(
                self.numberCell('Market.Cap.' + currentYear, v, {
                    'class': classesStr + ' vsr-column-big vsr-highlight', style: style
                })
            );
            scrollTable.append(
                self.numberCell('Market.Cap.' + (currentYear - 1), v, {
                    'class': classesStr + ' vsr-column-big', style: style
                })
            );

            scrollTable.append($('<div>', { 'class': classesStr + ' vsr-gap', style: style }));
            scrollTable.append(
                self.numberCell('Dividends.FY' + (currentYear - 1), v, {
                    'class': classesStr + ' vsr-column vsr-highlight', style: style
                })
            );
            scrollTable.append(
                self.numberCell('Dividends.FY' + (currentYear - 2), v, {
                    'class': classesStr + ' vsr-column', style: style
                })
            );

            scrollTable.append($('<div>', { 'class': classesStr + ' vsr-gap', style: style }));
            scrollTable.append(
                self.numberCell('Revenue.FY' + (currentYear - 1), v, {
                    'class': classesStr + ' vsr-column vsr-highlight', style: style
                })
            );
            scrollTable.append(
                self.numberCell('Revenue.FY' + (currentYear - 2), v, {
                    'class': classesStr + ' vsr-column', style: style
                })
            );

            scrollTable.append($('<div>', { 'class': classesStr + ' vsr-gap', style: style }));
            scrollTable.append(
                self.numberCell('PATMI.FY' + (currentYear - 1), v, {
                    'class': classesStr + ' vsr-column vsr-highlight', style: style
                })
            );
            scrollTable.append(
                self.numberCell('PATMI.FY' + (currentYear - 2), v, {
                    'class': classesStr + ' vsr-column', style: style
                })
            );

            scrollTable.append($('<div>', { 'class': classesStr + ' vsr-gap', style: style }));
            scrollTable.append(
                self.numberCell('EVA.FY' + (currentYear - 1), v, {
                    'class': classesStr + ' vsr-column vsr-highlight', style: style
                })
            );
            scrollTable.append(
                self.numberCell('EVA.FY' + (currentYear - 2), v, {
                    'class': classesStr + ' vsr-column', style: style
                })
            );
        });

        $(self.tableContainerSelector).append($('<div>', { 'class': 'vsr-table-scroll' }).append(scrollTable));
    },
    prepareForSorting: function(){
        var self = this;

        // add structure for the up/down arrows
        $(self.scrollTableSelector).find('.vsr-sortable').each(function(){
            if ($(this).hasClass('vsr-has-tooltip')) {
                $('<span>', { 'class': 'vsr-arrow' }).html(self.diamondCode).appendTo($(this).find('div'));
            } else {
                $('<span>', { 'class': 'vsr-arrow' }).html(self.diamondCode).appendTo($(this));
            }
        });

        // add click functionality if the column is sortable
        var headers = vslashr.data.tableData.headers2;
        $(self.scrollTableSelector).find('.vsr-sortable').click(function(){
            if (! self.enableInteraction) {
                return;
            }

            var index = $(this).data('sortable-index');

            if (self.previousSortColumnIndex !== undefined) {
                var headerCol = headers[headers.length - 1][index];
                // console.log(index, self.previousSortColumnIndex, headerCol)
                // if clicking the same column, change the sort order
                if (self.previousSortColumnIndex == index) {
                    if (headerCol.direction === 'asc') {
                        headerCol.direction = 'desc';
                    } else if (headerCol.direction === 'desc') {
                        headerCol.direction = 'original';
                    } else if (headerCol.direction === 'original') {
                        headerCol.direction = 'asc';
                    }
                } else {
                    // if clicking on a new column, start with ascending order
                    headerCol.direction = 'asc';
                }
            } else {
                // console.log(index, self.previousSortColumnIndex)
            } // if (self.previousSortColumnIndex !== undefined)

            self.animateSortIcon(index, this);
            self.animateTableSorting(index, this);
            self.previousSortColumnIndex = index;
        });
    },
    animateTableSorting: function(index, target){
        var self = this, headers = vslashr.data.tableData.headers2,
            headerCol = headers[headers.length - 1][index], rows;

        if (headerCol.direction === 'asc') {
            rows = headerCol.rows.concat();
        } else if (headerCol.direction === 'desc') {
            rows = headerCol.reverserows.concat();
        } else if (headerCol.direction === 'original') {
            rows = headerCol.oldrows.concat();
        }

        var tl = new TimelineLite({
            onStart: function(){
                self.enableInteraction = false;
            },
            onComplete: function(){
                self.enableInteraction = true;
            },
        });

        var rowHeight = $(self.scrollTableSelector).find(self.rowIDSelector + "0").outerHeight();

        if (self.animationType === 'none') {
            $.each(rows, function(index, row){
                $(self.scrollTableSelector).find(self.rowIDSelector + row.id).css({ order: index });
                $(self.lockTableSelector).find(self.rowIDSelector + row.id).css({ order: index });
            });
        } else if (self.animationType === 'slide') {
            $.each(rows, function(index, row){
                var diff = (index - self.previousRowIds[row.id]) * rowHeight;
                if (diff >= 0) {
                    tl.to(self.rowIDSelector + row.id, self.delay, {y: "+=" + diff, ease:Power2.easeInOut},0);
                } else {
                    tl.to(self.rowIDSelector + row.id, self.delay, {y: "-=" + Math.abs(diff), ease:Power2.easeInOut},0);
                }
                self.previousRowIds[row.id] = index;
            });
        }
    },
    animateSortIcon: function(index, target){
        var self = this, headers = vslashr.data.tableData.headers2,
            headerCol = headers[headers.length - 1][index];

        // reset the sort icon for all sortable columns
        $(self.scrollTableSelector).find('.vsr-arrow').removeClass("picked").html(self.diamondCode);

        // show the sort icon in the new column
        var arrow = $(target).find('.vsr-arrow');
        if (headerCol.direction === 'asc') {
            arrow.addClass("picked").html(self.upArrowCode);
        } else if (headerCol.direction === 'desc') {
            arrow.addClass("picked").html(self.downArrowCode);
        } else if (headerCol.direction === 'original') {
            arrow.removeClass("picked").html(self.diamondCode);
        }
    },
    formatNumbers: function(n, precision){
        return accounting.formatMoney(n, {
            symbol: '', precision: precision, format: {
                pos: "%s %v", neg: "%s (%v)", zero: "%s    –"
            }
        });
    },
    numberCell: function(prefix, v, attrs, precision){
        var self = this, cell = $('<div>', attrs);
        if (precision == undefined) {
            precision = 0;
        }

        var text;
        if (v[prefix]) {
            if ($.isNumeric(v[prefix])) {
                text = self.formatNumbers(v[prefix], precision);
            } else {
                text = self.l(v[prefix]);
            }
        } else {
            text = 'NA';
        }

        if (prefix == 'Name') {
            var key = 'Name.Link';

            if (key in v) {
                var href = v[key], key_zh = key + '.zh';
                if (vslashr.config.lang === 'zh' && key_zh in v) {
                    href = v[key_zh];
                }

                var link;
                if (v[prefix + '.Mod']) {
                    var mods = v[prefix + '.Mod'].split(","), tooltip = '';
                    $.each(mods, function(index, val){
                        if (tooltip) {
                            tooltip += "<br>" + self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                        } else {
                            tooltip = self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                        }
                    });
                    link = $('<a>', { href: href, target: "_blank", 'data-toggle': 'tooltip', 'data-placement': 'top', title: tooltip }).append(text);
                } else {
                    link = $('<a>', { href: href, target: "_blank" }).append(text);
                }

                cell.html(link);
            } else {
                if (v[prefix + '.Mod']) {
                    var mods = v[prefix + '.Mod'].split(","), tooltip = '';
                    $.each(mods, function(index, val){
                        if (tooltip) {
                            tooltip += "<br>" + self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                        } else {
                            tooltip = self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                        }
                    });
                    var link = $('<a>', { href: href, target: "_blank", 'data-toggle': 'tooltip', 'data-placement': 'top', title: tooltip }).append(text);
                    cell.html(link);
                } else {
                    cell.text(text);
                }
            } // if (key in v)
        } else if (v[prefix + '.Mod']) {
            var mods = v[prefix + '.Mod'].split(","), tooltip = '';
            $.each(mods, function(index, val){
                if (tooltip) {
                    tooltip += "<br>" + self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                } else {
                    tooltip = self.l(vslashr.data.footnotes[vslashr.config.category][val]);
                }
            });
            var link = $('<a>', { 'data-toggle': 'tooltip', 'data-placement': 'top', 'title': tooltip }).append(text);

            cell.html(link);
        } else {
            cell.text(text);
        }

        return cell;
    },
    setFloatingTableScrollPosition: function() {
        const self = this,
            selector = $(self.tableContainerSelector + ' .vsr-table-scroll'),
            top = selector.scrollTop(), left = selector.scrollLeft();

        // console.log("from main", top, left)
        // $(self.floatingTableSelector + ' .vsr-table-scroll').scrollTop(top).scrollLeft(left);
        $(self.floatingTableSelector + ' .vsr-table-scroll').scrollLeft(left);
    },
    updateFloatingHeaderTop: function() {
        const self = this, floatingTableSelector = $(self.floatingTableSelector),
            categorySelector = $('section.category-navigation');

        if (categorySelector.length > 0) {
            const bottom = categorySelector.offset().top + categorySelector.outerHeight();
            self.scrollOffset = bottom;
            // console.log("updateFloatingHeaderTop:", "bottom", bottom,
            //     "categorySelector.offset().top", categorySelector.offset().top,
            //     "categorySelector.outerHeight()", categorySelector.outerHeight()
            // );
        }
    },
    scrollHandler: function() {
        var scrollTop = $(window).scrollTop();
        const self = this,
            mainTableSelector = $(self.tableContainerSelector),
            mainTableInnerTableSelector = mainTableSelector.find('.vsr-table-scroll'),
            floatingTableSelector = $(self.floatingTableSelector),
            flexContainerSelector = mainTableInnerTableSelector.find('.vsr-flex-container'),
            oneRowSelector = mainTableInnerTableSelector.find('.vsr-row-id-0.vsr-name'),
            mainTableOffset = mainTableSelector.offset(),
            borderHeight = mainTableInnerTableSelector.outerHeight() - flexContainerSelector.outerHeight(),
            scrollingLastRowOffset = mainTableOffset.top + mainTableInnerTableSelector.outerHeight() - floatingTableSelector.outerHeight() - oneRowSelector.outerHeight() - borderHeight,
            scrollingEndOffset = mainTableOffset.top + mainTableInnerTableSelector.outerHeight(),
            bodyWidth = $('body').width(),
            mainTableWidth = mainTableSelector.width();

        const categorySelector = $('section.category-navigation');

        var newScrollTop;
        if (categorySelector.length > 0) {
            newScrollTop = categorySelector.offset().top + categorySelector.outerHeight();
        } else {
            newScrollTop = scrollTop;
        }

        // console.log(oneRowSelector.height(), oneRowSelector.outerHeight(), oneRowSelector.innerHeight());
        // console.log("scrollHandler:", "scrollTop", scrollTop,
        //     "newScrollTop", newScrollTop,
        //     "categorySelector.offset().top", categorySelector.offset().top,
        //     "categorySelector.outerHeight()", categorySelector.outerHeight(),
        //     "mainTableOffset.top", mainTableOffset.top,
        //     "scrollingLastRowOffset", scrollingLastRowOffset,
        //     "scrollingEndOffset", scrollingEndOffset,
        //     "mainTableInnerTableSelector.outerHeight", mainTableInnerTableSelector.outerHeight(),
        //     "floatingTableSelector.offset()", floatingTableSelector.offset(),
        //     "floatingTableSelector.outerHeight", floatingTableSelector.outerHeight(),
        //     "oneRowSelector.outerHeight", oneRowSelector.outerHeight(),
        //     "borderHeight", borderHeight
        // );

        // console.log("mainTableWidth", mainTableWidth,
        //     "bodyWidth", bodyWidth,
        //     "scrollTop", scrollTop,
        //     "newScrollTop", newScrollTop,
        //     "mainTableOffset.top", mainTableOffset.top,
        //     "categorySelector.offset().top", categorySelector.offset().top,
        //     "categorySelector.outerHeight()", categorySelector.outerHeight()
        // );

        if (newScrollTop >= mainTableOffset.top && newScrollTop < scrollingLastRowOffset) {
            // begin locking
            // console.log("inside: " + newScrollTop + " >= " + mainTableOffset.top + " and " + newScrollTop + " < " + scrollingLastRowOffset, "(newScrollTop - scrollTop)", newScrollTop - scrollTop);

            self.setFloatingTableScrollPosition();

            floatingTableSelector.css({
                display: "block",
                "max-width": mainTableWidth,
                top: newScrollTop - scrollTop
            });
        } else if (newScrollTop >= scrollingLastRowOffset && newScrollTop < scrollingEndOffset) {
            // last row of table is inside the floating header
            // console.log("last row: " + newScrollTop + " >= " + scrollingLastRowOffset + " and " + newScrollTop + " < " + scrollingEndOffset)
            // console.log("last row: ", scrollingLastRowOffset - scrollTop);

            self.setFloatingTableScrollPosition();

            floatingTableSelector.css({
                display: "block",
                "max-width": mainTableWidth,
                top: scrollingLastRowOffset - scrollTop
            });
        } else {
            // console.log("outside: " + newScrollTop + " < " + mainTableOffset.top + " or " + newScrollTop + " > " + scrollingEndOffset)
            // console.log("outside: ", newScrollTop - scrollTop);

            floatingTableSelector.css({
                display: "",
                "max-width": mainTableWidth,
                top: newScrollTop - scrollTop
            });
        }
    },
    jumpToName: function() {
        const self = this;

        // console.log("jumpToName:", "window.location.hash", window.location.hash,
        //     "onLoadDone", self.onLoadDone, "onTableLoadDone", self.onTableLoadDone);

        // if (! (self.onLoadDone && self.onTableLoadDone)) {
        //     return;
        // }

        function safeLocationHash() {
            var hash = location.hash;
            if (!hash || /^#[A-Za-z][\w\-:.]*$/.test(hash)) {
                return hash;
            }
            throw new Error("Unsafe location.hash");
        }

        var safeHash = safeLocationHash();
        if (safeHash) {
            // check if there's a hash and load it if it is valid
            const hash = safeHash.substring(1),
                companySelector = $("[data-company='" + hash + "']");

            // console.log(hash, companySelector);

            if (companySelector.length > 0) {
                const floatingTableSelector = $(self.floatingTableSelector);
                const classNames = $(companySelector).prop('className'),
                    classNamesArr = classNames.split(/\s/),
                    classNameIndex = _.find(classNamesArr, function(item) {
                        return item.match(/vsr-row-id/);
                    });
                // console.log("companySelector.offset().top", companySelector.offset().top,
                //     "floatingTableSelector.outerHeight()", floatingTableSelector.outerHeight(),
                //     "$(companySelector).parent()", $(companySelector).parent(),
                //     "classNames", classNames, "classNamesArr", classNamesArr,
                //     "classNameIndex", classNameIndex
                // );

                if (classNameIndex) {
                    const index = classNameIndex.substring('vsr-row-id-'.length),
                        mainTableSelector = $(self.tableContainerSelector),
                        mainTableInnerTableSelector = mainTableSelector.find('.vsr-table-scroll'),
                        oneRowSelector = mainTableInnerTableSelector.find('.vsr-row-id-0.vsr-name'),
                        bodyWidth = $('body').width(),
                        mainTableWidth = mainTableSelector.width();

                    // w>1024, max=1060, diff bet newScrollTop and scrollTop=(239, 223), when newScrollTop == mainTableOffset.top (383, 386), scrollTop=383-239=144, 386-223=163
                    // w=1024, diff bet newScrollTop and scrollTop=(180, 164), when newScrollTop == mainTableOffset.top (383, 386), scrollTop=383-180=203, 386-164=222
                    // w>=768, diff bet newScrollTop and scrollTop=(53, 53), when newScrollTop == mainTableOffset.top (342, 365), scrollTop=342-53=289, 365-53=312
                    // w>=339 (w=641), diff bet newScrollTop and scrollTop=(53, 53), when newScrollTop == mainTableOffset.top (249, 270), scrollTop=249-53=196, 270-53=217
                    // w<339, diff bet newScrollTop and scrollTop=(53, 53), when newScrollTop == mainTableOffset.top (285, 270), scrollTop=285-53=232, 270-53=217
                    var scrollTop = 0;
                    if (bodyWidth > 1024) {
                        scrollTop = (vslashr.config.lang === 'en') ? 144 : 163;
                    } else if (bodyWidth == 1024) {
                        scrollTop = (vslashr.config.lang === 'en') ? 203 : 222;
                    } else if (bodyWidth >= 768) {
                        scrollTop = (vslashr.config.lang === 'en') ? 289 : 312;
                    } else if (bodyWidth >= 339) {
                        scrollTop = (vslashr.config.lang === 'en') ? 196 : 217;
                    } else {
                        scrollTop = (vslashr.config.lang === 'en') ? 232 : 217;
                    }
                    // console.log("scrollTop", scrollTop);
                    scrollTop += oneRowSelector.outerHeight() * index;
                    // console.log("index", index,
                    //     "mainTableSelector.outerWidth()", mainTableSelector.outerWidth(),
                    //     "oneRowSelector.outerHeight()", oneRowSelector.outerHeight(),
                    //     "mainTableWidth", mainTableWidth, "scrollTop", scrollTop
                    // );

                    TweenLite.to(window, 1, {
                        scrollTo: {
                            y: scrollTop,
                            autoKill: false
                        }
                    });
                }
            }
        }
    },
    init: function(){
        var self = this;

        this.drawFloatingLockTable();
        this.drawFloatingScrollTable();
        this.drawLockTable();
        this.drawScrollTable();
        this.drawLegend();
        if (! vslashr.config.ie) {
            this.populateSortData();
            this.prepareForSorting();
        }

        // activate tooltips
        // $('[data-toggle="tooltip"]').tooltip({
        //         html: true
        // });
        var Tooltip = {
            initialize: function () {
                $('[data-toggle="tooltip"]').tooltipster({
                    contentAsHTML: true,
                    zIndex: 999,
                    side: "bottom",
                    distance: 3,
                    maxWidth: 300,
                    delay: 200,
                    trigger: "custom",
                    triggerOpen: {
                        mouseenter: true,
                        touchstart: true
                    },
                    triggerClose: {
                        mouseleave: true,
                        tap: true
                    }
                });
            }
        };
        Tooltip.initialize();

        // shadow effect
        $('.vsr-table-scroll').scroll(function() {
            $('.vsr-table-lock').css('box-shadow', Math.min($(this).scrollLeft() - 10, 8) + 'px 0px 10px 0px rgba(0,0,0,0.15)');
        });

        // var debouncedSetFloatingTableScrollPosition = _.debounce(function() {
        //     console.log('debounce', $(self.tableContainerSelector + ' .vsr-table-scroll').scrollLeft());
        //     self.setFloatingTableScrollPosition();
        //     // setTimeout(setFloatingTableScrollPosition, 1000);
        // }, 1000);

        // sync scrolling with floating table
        $(self.tableContainerSelector + ' .vsr-table-scroll').scroll(function() {
            self.setFloatingTableScrollPosition();
            // debouncedSetFloatingTableScrollPosition();
        });

        // sync scrolling with main table
        $(self.floatingTableSelector + ' .vsr-table-scroll').scroll(function() {
            const top = $(this).scrollTop(), left = $(this).scrollLeft();
            // console.log("from floating", top, left)
            // $(self.tableContainerSelector + ' .vsr-table-scroll').scrollTop(top).scrollLeft(left);
            $(self.tableContainerSelector + ' .vsr-table-scroll').scrollLeft(left);
        });

        // table headers locking
        window.onscroll = function() {
        // $(window).on("scroll", function() {
            self.scrollHandler();
        // });
        };

        self.scrollHandler();

        $(window).resize(function() {
            const floatingTableSelector = $(self.floatingTableSelector),
                mainTableSelector = $(self.tableContainerSelector),
                mainTableWidth = mainTableSelector.width(),
                categorySelector = $('section.category-navigation');

            floatingTableSelector.css({
                "max-width": mainTableWidth,
            });
            // console.log("resize", mainTableWidth);

            // self.updateFloatingHeaderTop();
            self.scrollHandler();
        }).resize();

        self.onTableLoadDone = true;
        self.jumpToName();
    }
};

$(document).ready(function() {
    var lang = $(vslashr.table.tableContainerSelector).data("lang") || "en";
    var ie = $(vslashr.table.tableContainerSelector).data("ie") || 0;
    var imgPath = $(vslashr.table.tableContainerSelector).data("imgpath") || "imgs";
    var category = $(vslashr.table.tableContainerSelector).data("category") || "financial";

    vslashr.config.ie = (ie === 1);
    // var locale = $(vslashr.table.containerSelector).data("locale") || "en_US"; // zh_CN
    vslashr.config.lang = lang;
    vslashr.config.imgPath = imgPath;
    vslashr.config.category = category;

    vslashr.table.init();
});

document.addEventListener("DOMContentLoaded", function(event) {
    // vslashr.table.onLoadDone = true;
    // console.log("DOMContentLoaded");
    vslashr.table.jumpToName();
});
// $(window).on("load", function() {
//     vslashr.table.onLoadDone = true;
//     vslashr.table.jumpToName();
// })
