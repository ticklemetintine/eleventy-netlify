"use strict";

var app = app || {};

if (! app.config) {
    app.config = {
        lang: "en"
    };
}

if (! app.data) {
    app.data = {};
}

if (! app.lang) {
    app.lang = {};
}

app.lang.en = {
    calloutTitle: function(year){
        return "Mar " + year;
    },
    "One-year Rolling S$ Total Shareholder Return": "One-year Rolling S$<br>Total Shareholder Return",
    "10-year Rolling S$ Total Shareholder Return": "10-year Rolling S$<br>Total Shareholder Return",
    "20-year Rolling S$ Total Shareholder Return": "20-year Rolling S$<br>Total Shareholder Return",
};

app.lang.zh = {
    calloutTitle: function(year){
        return year + "年 3月";
    },
    "To see chart, please rotate your device to landscape.": "查看完整图表，请把手机<br>调成横屏模式。",

    // menu Items
    "One-year Rolling": "1年期滚动",
    "10-year Rolling": "10年期滚动",
    "20-year Rolling": "20年期滚动",

    // description text

    // chart axis text
    "December": "12月",
    "March": "3月",
    "Financial Year": "财政年度",
    "Rolling S$ Total Shareholder Return (%)": "以新元计算的滚动股东总回报率(%)",
    "(in S$ billion)": "(10亿新元)",
    "Temasek Net Portfolio Value since Inception": "淡马锡自成立以来的投资组合净值",

    // legend
    "Market value": "市值",
    "One-year": "1年期",
    "10-year": "10年期",
    "20-year": "20年期",

    // tooltip
    "b": "0亿",
    "Mar": "3月",
    "Dec": "12月",
    "One-year Rolling TSR": "1年期滚动股东总回报率",
    "10-year Rolling TSR": "10年期滚动股东总回报率",
    "20-year Rolling TSR": "20年期滚动股东总回报率",
    "Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards.": "从1994年起，财政年度截止日期从1993年以前的12月31日改为3月31日。",

    // chart Points
    "Listing of Singtel": "新加坡电信上市",
    "Asian Financial Crisis": "亚洲金融危机",
    "Dotcom Peak": "科技股热潮顶峰",
    "Temasek steps up investments in Asia": "淡马锡增加在亚洲的投资",
    "SARS Epidemic": "非典疫情",
    "Global Financial Crisis": "全球金融危机",
    "Market dislocation": "资本市场失衡",
    "COVID-19 Pandemic": "2019冠状病毒病疫情"
};

app.data.menu = [
    {
        buttonText: "One-year Rolling",
        calloutKey: "year1",
        calloutText: "One-year Rolling TSR",
        getY: function(d){ return d.rolling.year1; },
        getYDisplayed: function(d){ return d.rollingDisplayed.year1; },
        getPointPos: function(d) {
            return ('rollingPos' in d && 'year1' in d.rollingPos) ? d.rollingPos.year1 : null;
        },
        legendText: "One-year",
        lineClass: "year1",
        lineColor: "#22b7e9",
        range: 1,
    },
    {
        buttonText: "10-year Rolling",
        calloutKey: "year10",
        calloutText: "10-year Rolling TSR",
        getY: function(d){ return d.rolling.year10;},
        getYDisplayed: function(d){ return d.rollingDisplayed.year10; },
        getPointPos: function(d) {
            return ('rollingPos' in d && 'year10' in d.rollingPos) ? d.rollingPos.year10 : null;
        },
        legendText: "10-year",
        lineClass: "year10",
        lineColor: "#97749b",
        range: 10,
    },
    {
        buttonText: "20-year Rolling",
        calloutKey: "year20",
        calloutText: "20-year Rolling TSR",
        getY: function(d){ return d.rolling.year20; },
        getYDisplayed: function(d){ return d.rollingDisplayed.year20; },
        getPointPos: function(d) {
            return ('rollingPos' in d && 'year20' in d.rollingPos) ? d.rollingPos.year20 : null;
        },
        legendText: "20-year",
        lineClass: "year20",
        lineColor: "#e07b31",
        range: 20,
    }
];

app.data.config = {
    charts: {
        container: {
            chartClass: 'container',
            top: 10, right: 10, bottom: 10, left: 10, 
            viewBoxWidth: 1024, viewBoxHeight: 768
        },
        main: {
            bandArrowSize: 10,
            bandYPos: 0.96,
            calloutWidth: {
                en: 230,
                zh: 270
            },
            calloutYearPos: {
                en: 2008,
                zh: 2005
            },
            // max in yAxisDomain is using the max values in VSI * 2
            chartClass: 'main', yAxisDomain: [0, 400/0.4], yAxisDisplayedDomain: [0, 400],
            getY: function(d){
                return d.marketValue;
            },
            heightScale: 0.4,
            legendShapeSize: 20,
            pointSize: 15,
            top: 30, right: 10, bottom: 60, left: 50, 
            viewBoxWidth: 1024, viewBoxHeight: 768
        },
        side: {
            chartClass: 'side', yAxisDomain: [-35, 60],
            defined: function(d){
                return 'rolling' in d;
            },
            pointPos: 'n',
            top: 30, right: 10, bottom: 10, left: 50, 
            xOffset: 64.2,
            viewBoxWidth: 1024, viewBoxHeight: 320
        },
    },
    getX: function(d){
        return app.data.config.xAxisParser(d.month + "/" + d.year);
    },
    initialIndex: 39,
    legendSize: { width: 20, height: 2 },
    xAxisParser: d3.timeParse("%m/%Y"),
    xAxisFormatter: d3.timeFormat("%y"),
    xAxisSideFormatter: d3.format("(d")
};

app.data.description = {
    en: [
        "<p>Our <em>Total Shareholder Return (TSR)</em> measures the returns that we deliver to our shareholder. It reflects the <em>change in our net portfolio value</em> over a specific timeframe. This includes dividends paid to our shareholder and excludes capital injections from our shareholder.</p><p>The market values of our portfolio over the years reflect the performance of our underlying investments, which were affected by external events such as the Global Financial Crisis in 2008.</p>",
        "<p>The listing of Singtel in the financial year ended 31 March 1994, which the market then valued at <span data-toggle='tooltip' title='Source: FactSet'>43 times its earnings</span>, contributed to a significant and noticeable rise in our portfolio value that year. By way of comparison, Singtel has been valued by the market at between <span data-toggle='tooltip' title='Source: FactSet'>10 and 18 times its earnings</span> over the last 10 years. This illustrates how Singtel’s price earnings ratio has changed considerably since it first listed.</p>"
    ],
    zh: [
        "<p><em>股东总回报</em>计算的是我们为股东带来的回报，反映了特定时间段内<em>投资组合净值的变化</em>。这包括派发给股东的股息，但不包括股东注入的资金。</p><p>多年来我们的投资组合市值反映了标的投资业绩，受到如2008年全球金融危机等外部事件的影响。</p>",
        "<p>新加坡电信于截至1994年3月31日的财年上市，当时市值是其<span data-toggle='tooltip' title='资料来源: FactSet'>收益的43倍</span>，对该财年淡马锡投资组合净值的大幅增长起到了很大作用。相比之下，在过去10年中，新加坡电信的市值处于其<span data-toggle='tooltip' title='资料来源: FactSet'>收益的10至18倍</span>之间，显示新加坡电信自上市以来，其股价与收益的比率如何出现较大幅度的变化。</p>"
    ]
};

app.data.rollingData = [
    {
        month: 12, year: 1974, marketValue: 0.35
    },
    {
        month: 12, year: 1975, marketValue: 0.51
    },
    {
        month: 12, year: 1976, marketValue: 0.57
    },
    {
        month: 12, year: 1977, marketValue: 0.57
    },
    {
        month: 12, year: 1978, marketValue: 0.65
    },
    {
        month: 12, year: 1979, marketValue: 0.78
    },
    {
        month: 12, year: 1980, marketValue: 1.72
    },
    {
        month: 12, year: 1981, marketValue: 2.96
    },
    {
        month: 12, year: 1982, marketValue: 3.07
    },
    {
        month: 12, year: 1983, marketValue: 3.43
    },
    {
        month: 12, year: 1984, marketValue: 2.77
    },
    {
        month: 12, year: 1985, marketValue: 4.11
    },
    {
        month: 12, year: 1986, marketValue: 7.14
    },
    {
        month: 12, year: 1987, marketValue: 6.88
    },
    {
        month: 12, year: 1988, marketValue: 8.63
    },
    {
        month: 12, year: 1989, marketValue: 10.96
    },
    {
        month: 12, year: 1990, marketValue: 9.34
    },
    {
        month: 12, year: 1991, marketValue: 12.42
    },
    {
        month: 12, year: 1992, marketValue: 12.58
    },
    {
        month: 3, year: 1994, marketValue: 66.82,
    },
    {
        month: 3, year: 1995, marketValue: 61.99
    },
    {
        month: 3, year: 1996, marketValue: 72.02
    },
    {
        month: 3, year: 1997, marketValue: 69.56,
    },
    {
        month: 3, year: 1998, marketValue: 75.57
    },
    {
        month: 3, year: 1999, marketValue: 77.47
    },
    {
        month: 3, year: 2000, marketValue: 104.29,
    },
    {
        month: 3, year: 2001, marketValue: 81.05
    },
    {
        month: 3, year: 2002, marketValue: 76.79, marketValueDisplayed: 77,
    },
    {
        month: 3, year: 2003, marketValue: 60.62, marketValueDisplayed: 61,
        rolling: {
            year1: -18.76, year10: 16.16, year20: 15.71
        },
        rollingDisplayed: {
            year1: -19, year10: 16, year20: 16
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2004, marketValue: 90.04, marketValueDisplayed: 90,
        rolling: {
            year1: 45.76, year10: 2.75, year20: 19.5
        },
        rollingDisplayed: {
            year1: 46, year10: 3, year20: 20
        },
        rollingPos: {
            year10: 'w'
        }
    },
    {
        month: 3, year: 2005, marketValue: 103.45, marketValueDisplayed: 103,
        rolling: {
            year1: 16.37, year10: 5.37, year20: 18.39
        },
        rollingDisplayed: {
            year1: 16, year10: 5, year20: 18
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2006, marketValue: 129.00, marketValueDisplayed: 129,
        rolling: {
            year1: 24.65, year10: 6.18, year20: 16.33
        },
        rollingDisplayed: {
            year1: 25, year10: 6, year20: 16
        },
        rollingPos: {
            year1: 'nw', year10: 's', year20: 's'
        }
    },
    {
        month: 3, year: 2007, marketValue: 163.89, marketValueDisplayed: 164,
        rolling: {
            year1: 27.05, year10: 8.33, year20: 17.92
        },
        rollingDisplayed: {
            year1: 27, year10: 8, year20: 18
        }
    },
    {
        month: 3, year: 2008, marketValue: 184.99, marketValueDisplayed: 185,
        rolling: {
            year1: 6.77, year10: 9.58, year20: 16.79
        },
        rollingDisplayed: {
            year1: 7, year10: 10, year20: 17
        },
        rollingPos: {
            year1: 'e'
        }
    },
    {
        month: 3, year: 2009, marketValue: 130.28, marketValueDisplayed: 130,
        rolling: {
            year1: -29.57, year10: 5.66, year20: 13.25
        },
        rollingDisplayed: {
            year1: -30, year10: 6, year20: 13
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2010, marketValue: 185.93, marketValueDisplayed: 186,
        rolling: {
            year1: 42.71, year10: 6.26, year20: 16.29
        },
        rollingDisplayed: {
            year1: 43, year10: 6, year20: 16
        }
    },
    {
        month: 3, year: 2011, marketValue: 192.77, marketValueDisplayed: 193,
        rolling: {
            year1: 4.6, year10: 9.03, year20: 14.82
        },
        rollingDisplayed: {
            year1: 5, year10: 9, year20: 15
        },
        rollingPos: {
            year1: 'w'
        }
    },
    {
        month: 3, year: 2012, marketValue: 197.78, marketValueDisplayed: 198,
        rolling: {
            year1: 1.5, year10: 9.54, year20: 14.78
        },
        rollingDisplayed: {
            year1: 1, year10: 10, year20: 15
        }
    },
    {
        month: 3, year: 2013, marketValue: 215.30, marketValueDisplayed: 215,
        rolling: {
            year1: 8.86, year10: 12.79, year20: 14.48
        },
        rollingDisplayed: {
            year1: 9, year10: 13, year20: 14
        }
    },
    {
        month: 3, year: 2014, marketValue: 223.48, marketValueDisplayed: 223,
        rolling: {
            year1: 1.5, year10: 8.78, year20: 5.72
        },
        rollingDisplayed: {
            year1: 2, year10: 9, year20: 6
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2015, marketValue: 266.39, marketValueDisplayed: 266,
        rolling: {
            year1: 19.2, year10: 9.04, year20: 7.19
        },
        rollingDisplayed: {
            year1: 19, year10: 9, year20: 7
        },
        rollingPos: {
            year10: 's', year20: 's'
        }
    },
    {
        month: 3, year: 2016, marketValue: 242.35, marketValueDisplayed: 242,
        rolling: {
            year1: -9.02, year10: 5.66, year20: 5.92
        },
        rollingDisplayed: {
            year1: -9, year10: 6, year20: 6
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2017, marketValue: 274.75, marketValueDisplayed: 275,
        rolling: {
            year1: 13.37, year10: 4.46, year20: 6.38
        },
        rollingDisplayed: {
            year1: 13, year10: 4, year20: 6
        }
    },
    {
        month: 3, year: 2018, marketValue: 308.25, marketValueDisplayed: 308,
        rolling: {
            year1: 12.19, year10: 4.98, year20: 7.26
        },
        rollingDisplayed: {
            year1: 12, year10: 5, year20: 7
        }
    },
    {
        month: 3, year: 2019, marketValue: 312.86, marketValueDisplayed: 313,
        rolling: {
            year1: 1.49, year10: 8.89, year20: 7.26
        },
        rollingDisplayed: {
            year1: 1, year10: 9, year20: 7
        }
    },
    {
        month: 3, year: 2020, marketValue: 305.73, marketValueDisplayed: 306,
        rolling: {
            year1: -2, year10: 5, year20: 6
        },
        rollingDisplayed: {
            year1: -2, year10: 5, year20: 6
        },
        rollingPos: {
            year1: 's'
        }
    },
    {
        month: 3, year: 2021, marketValue: 380.72, marketValueDisplayed: 381,
        rolling: {
            year1: 25, year10: 7, year20: 8
        },
        rollingDisplayed: {
            year1: 25, year10: 7, year20: 8
        }
    }
];

app.data.eventsData = [
    {
        month: 3, year: 1994, event: "Listing of Singtel",
        fontWeight: "normal",
        marketValue: 66.82,
        anchor: "end", yOffset: 0.84
    },
    {
        month: 3, year: 1997, event: "Asian Financial Crisis",
        fontWeight: "normal",
        marketValue: 69.56,
        anchor: "end", yOffset: 0.79
    },
    {
        month: 3, year: 2000, event: "Dotcom Peak",
        fontWeight: "normal",
        marketValue: 104.29,
        anchor: "end", yOffset: 0.69
    },
    {
        month: 3, year: 2002, event: "Temasek steps up investments in Asia",
        fontWeight: "bold",
        marketValue: 76.79,
        anchor: "middle", yOffset: 0.64
    },
    {
        month: 3, year: 2003, event: "SARS Epidemic",
        fontWeight: "normal",
        marketValue: 60.62,
        anchor: "start", yOffset: 0.74
    },
    {
        month: 9, year: 2008, event: "Global Financial Crisis",
        fontWeight: "normal",
        marketValue: (184.99 + 130.28)/2,
        anchor: "middle", yOffset: 0.79
    },
    {
        month: 9, year: 2015, event: "Market dislocation",
        fontWeight: "normal",
        marketValue: (266.39 + 242.35)/2,
        anchor: "end", yOffset: 0.69
    },
    {
        month: 1, year: 2020, event: "COVID-19 Pandemic",
        fontWeight: "normal",
        marketValue: (312.86 + 305.73) * 0.485,
        anchor: "end", yOffset: 0.64
    }
];
