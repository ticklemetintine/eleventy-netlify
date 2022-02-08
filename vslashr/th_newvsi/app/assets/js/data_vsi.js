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
    years: function(year){
        return (year > 1) ? year + " years" : "1 year";
    },
    calloutTitle: function(month, year){
        var months = { "3": "Mar", "12": "Dec" };
        return months[month] + " " + year;
    },
    calloutSecondDollar: function(val){
        return "S$" + val;
    },
    "calloutLine1Part1": "If S$1,000 had been invested in ",
    "calloutLine1Part3": ",",
    "Shareholder equity2": "Shareholder equity excluding"
};

app.lang.zh = {
    years: function(year){
        return year + "年";
    },
    calloutTitle: function(month, year){
        return year + "年 " + month + "月";
    },
    calloutSecondDollar: function(val){
        return val + "新元";
    },
    "To see chart, please rotate your device to landscape.": "查看完整图表，请把手机<br>调成横屏模式。",

    // menu items
    "Temasek Net Portfolio Value since Inception": "淡马锡自成立以来的投资组合净值",
    "If S$1,000 had been invested...": "如果当时投资了1,000新元…",

    // description text
    "<p>The chart below shows the growth of our net portfolio value since its inception in 1974.</p><p>The <span class='marketValueColor'>blue area</span> reflects our portfolio valued on a mark to market basis, which is subject to greater volatility caused by external events.</p><p>The <span class='shareholderEquityColor'>pink area</span> reflects our shareholder equity. From the financial year ended 31 March 2006, the accounting standards require sub-20% investments to be marked to market.</p><p>The <span class='shareholderFVRColor'>yellow dashed line</span> reflects our shareholder equity excluding mark to market movement of our sub-20% investments. Its growth reflects the underlying profitability of our portfolio companies and returns from our investment activities.</p>": "<p>下图显示淡马锡自1974年成立以来投资组合净值的增长。</p><p><span class='marketValueColor'>蓝色部分</span>体现投资组合按市值计算的估值，会受到外部事件影响而有较大的波动。</p><p><span class='shareholderEquityColor'>粉色部分</span>体现股东权益。从截至2006年3月31日的财政年度开始，会计准则要求持股比例低于20%的投资需要按照市值计算。</p><p><span class='shareholderFVRColor'>黄色虚线</span>体现股东权益，但未计算持股比例低于20%的投资的市值变动。其增长反映了我们投资组合公司的盈利能力和投资活动的回报。</p>",
    "<p>Here is another way of looking at our performance over time.</p><p>If S$1,000 had been invested in Temasek at a particular point in time, <span data-toggle='tooltip' title='Calculated using our Total Shareholder Return (%), which includes dividends paid to our shareholder and excludes capital injections from our shareholder.'>how much would it have been worth as at 31 March 2021</span>? (Scroll to find out.)</p><p>For reference, the callout also shows similar positions in:</p><ul><li>MSCI Singapore</li><li>MSCI AC Asia ex-Japan</li><li>MSCI World</li></ul>": "<p>以另一种方式了解我们的业绩表现如何随时间而变化。</p><p>如果某一时间点向淡马锡投资了1,000新元，<span data-toggle='tooltip' title='以股东总回报率（%）计算，包括派发给股东的股息，但不包括股东注入的资金。'>截至2021年3月31日会值多少呢</span>？(请向右滑动找到答案)</p><p>标注栏也显示在以下指数中的相似变动情况，以供参考:</p><ul><li>MSCI新加坡指数</li><li>MSCI亚洲(日本除外)指数</li><li>MSCI全球指数</li></ul>",
    
    // chart axis text
    "December": "12月",
    "March": "3月",
    "Financial Year": "财政年度",
    "(in S$ billion)": "(以10亿新元计)",

    // legend
    "Market value": "市值",
    "Shareholder equity": "股东权益",
    "Shareholder equity2": "未计算市值变动",
    "mark to market movement": "的股东权益",
    // "Shareholder equity before fair value reserve": "计算公允价值储备前的股东权益",
    "Temasek net portfolio value by market value": "按市值计算的淡马锡投资组合净值",
    "Shareholder equity excluding mark to market movement": "未计算市值变动的股东权益",

    // callout
    "calloutLine1Part1": "如果在",
    "calloutLine1Part3": "年投资了1,000新元，",
    "here's how much it would be worth": "截至2021年的价值为：",
    "in 2021:": " ",
    "Temasek": "淡马锡",
    "MSCI Singapore": "MSCI新加坡指数",
    "MSCI AC Asia ex-Japan": "MSCI亚洲(日本除外)指数",
    "MSCI World": "MSCI全球指数",

    // tooltip
    "b": "0亿",
    "From the financial year ended 31 March 2006, the accounting standards require sub-20% investments to be marked to market.": "从截至2006年3月31日的财政年度开始，会计准则要求持股比例低于20%的投资需要按市值计算。",
    "Incorporation of Temasek on 25 June 1974.": "淡马锡于1974年6月25日成立。",
    "Financial year 75 began on 25 June 1974 and ended 31 December 1975.": "1975财政年度开始于1974年6月25日，截止于1975年12月31日。",
    "Financial year‑end was changed from 31 December before 1993 to 31 March from 1994 onwards.": "从1994年起，财政年度截止日期从1993年以前的12月31日改为3月31日。",
    "Restated.": "重述。",

    // chart Points
    "Listing": "新加坡电信",
    "of Singtel": "上市",
    "Asian": "亚洲",
    "Financial Crisis": "金融危机",
    "Dotcom": "科技股热潮",
    "Peak": "顶峰",
    "Temasek steps up": "淡马锡增加在",
    "investments in Asia": "亚洲的投资",
    "SARS": "\u00a0",
    "Epidemic": "非典疫情",
    "Global": "全球",
    "Financial Crisis": "金融危机",
    "Market": "资本市场",
    "dislocation": "失衡",
    "COVID-19": "2019冠状",
    "Pandemic": "病毒病疫情"
};

app.data.menu = [
    {
        buttonText: "Temasek Net Portfolio Value since Inception",
        description: "<p>The chart below shows the growth of our net portfolio value since its inception in 1974.</p><p>The <span class='marketValueColor'>blue area</span> reflects our portfolio valued on a mark to market basis, which is subject to greater volatility caused by external events.</p><p>The <span class='shareholderEquityColor'>pink area</span> reflects our shareholder equity. From the financial year ended 31 March 2006, the accounting standards require sub-20% investments to be marked to market.</p><p>The <span class='shareholderFVRColor'>yellow dashed line</span> reflects our shareholder equity excluding mark to market movement of our sub-20% investments. Its growth reflects the underlying profitability of our portfolio companies and returns from our investment activities.</p>",
        target: "chart1"
    },
    {
        buttonText: "If S$1,000 had been invested...",
        description: "<p>Here is another way of looking at our performance over time.</p><p>If S$1,000 had been invested in Temasek at a particular point in time, <span data-toggle='tooltip' title='Calculated using our Total Shareholder Return (%), which includes dividends paid to our shareholder and excludes capital injections from our shareholder.'>how much would it have been worth as at 31 March 2021</span>? (Scroll to find out.)</p><p>For reference, the callout also shows similar positions in:</p><ul><li>MSCI Singapore</li><li>MSCI AC Asia ex-Japan</li><li>MSCI World</li></ul>",
        target: "chart2"
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
            calloutWidth: {
                en: [330, 250, 80],
                zh: [250, 200, 100]
            },
            calloutHeight: {
                en: [150, 100, 40],
                zh: [150, 100, 40]
            },
            calloutYearPos: {
                en: 2002,
                zh: 2002
            },
            // max in yAxisDomain is using the max values in VSI * 2
            chartClass: 'main chart1', yAxisDomain: [0, 400/0.5], yAxisDisplayedDomain: [0, 400],
            heightScale: 0.5,
            indicatorLineHeightStartY: 0.48,
            initialIndex: 28,
            legendShapeSize: 20,
            pointSize: 15,
            top: 40, right: 10, bottom: 90, left: 50, 
            viewBoxWidth: 1024, viewBoxHeight: 768
        },
        second: {
            bandArrowSize: 10,
            bandYPos: 0.96,
            calloutWidth: {
                en: 310,
                zh: 310
            },
            calloutHeight: {
                en: 230,
                zh: 230
            },
            calloutYearPos: {
                en: 2002,
                zh: 2002
            },
            // max in yAxisDomain is using the max values in VSI * 2
            chartClass: 'main chart2', yAxisDomain: [0, 400/0.5], yAxisDisplayedDomain: [0, 400],
            heightScale: 0.5,
            indicatorLineHeightStartY: 0.48,
            initialIndex: 8,
            legendShapeSize: 20,
            pointSize: 15,
            top: 40, right: 380, bottom: 90, left: 50, 
            viewBoxWidth: 1024, viewBoxHeight: 768
        }
    },
    descriptionTextHeight: {
        'en': "28em",
        'zh': "28em"
    },
    getX: function(d){
        return app.data.config.xAxisParser(d.month + "/" + d.year);
    },
    legendSize: { width: 20, height: 2 },
    xAxisParser: d3.timeParse("%m/%Y"),
    xAxisFormatter: d3.timeFormat("%y"),
};

app.data.rollingData = [
    // {
        // month: 12, year: 1974,
        // marketValue: 0.35,
        // shareholderEquity: 0.35,
        // shareholderFVR: 0.35
    // },
    // {
        // month: 12, year: 1975, 
        // marketValue: 0.51,
        // shareholderEquity: 0.72,
        // shareholderFVR: 0.72
    // },
    // {
        // month: 12, year: 1976, 
        // marketValue: 0.57,
        // shareholderEquity: 0.81,
        // shareholderFVR: 0.81
    // },
    // {
        // month: 12, year: 1977, 
        // marketValue: 0.57,
        // shareholderEquity: 0.91,
        // shareholderFVR: 0.91
    // },
    // {
        // month: 12, year: 1978,
        // marketValue: 0.65,
        // shareholderEquity: 1.03,
        // shareholderFVR: 1.03
    // },
    // {
        // month: 12, year: 1979,
        // marketValue: 0.78,
        // shareholderEquity: 1.23,
        // shareholderFVR: 1.23
    // },
    // {
        // month: 12, year: 1980,
        // marketValue: 1.72,
        // shareholderEquity: 1.83,
        // shareholderFVR: 1.83
    // },
    // {
        // month: 12, year: 1981,
        // marketValue: 2.96,
        // shareholderEquity: 2.72,
        // shareholderFVR: 2.72
    // },
    // {
        // month: 12, year: 1982,
        // marketValue: 3.07,
        // shareholderEquity: 3.56,
        // shareholderFVR: 3.56
    // },
    // {
        // month: 12, year: 1983,
        // marketValue: 3.43,
        // shareholderEquity: 3.74,
        // shareholderFVR: 3.74
    // },
    // {
        // month: 12, year: 1984,
        // marketValue: 2.77,
        // shareholderEquity: 3.92,
        // shareholderFVR: 3.92
    // },
    // {
        // month: 12, year: 1985,
        // marketValue: 4.11,
        // shareholderEquity: 4.29,
        // shareholderFVR: 4.29
    // },
    // {
        // month: 12, year: 1986,
        // marketValue: 7.14,
        // shareholderEquity: 4.64,
        // shareholderFVR: 4.64
    // },
    // {
        // month: 12, year: 1987,
        // marketValue: 6.88,
        // shareholderEquity: 5.44,
        // shareholderFVR: 5.44
    // },
    // {
        // month: 12, year: 1988,
        // marketValue: 8.63,
        // shareholderEquity: 6.32,
        // shareholderFVR: 6.32
    // },
    // {
        // month: 12, year: 1989,
        // marketValue: 10.96,
        // shareholderEquity: 7.93,
        // shareholderFVR: 7.93
    // },
    // {
        // month: 12, year: 1990,
        // marketValue: 9.34,
        // shareholderEquity: 9.11,
        // shareholderFVR: 9.11
    // },
    // {
        // month: 12, year: 1991,
        // marketValue: 12.42,
        // shareholderEquity: 11.27,
        // shareholderFVR: 11.27
    // },

    {
        month: 12, year: 1991,
        marketValue: 0.35,
        shareholderEquity: 0.35,
        shareholderFVR: 0.35
    },
    {
        month: 6, year: 1992,
        marketValue: 0.35,
        shareholderEquity: 0.35,
        shareholderFVR: 0.35
    },
    {
        month: 12, year: 1992,
        marketValue: 12.58,
        shareholderEquity: 12.35,
        shareholderFVR: 12.35
    },
    {
        month: 3, year: 1994,
        marketValue: 66.82,
        shareholderEquity: 21.46,
        shareholderFVR: 21.46,
    },
    {
        month: 3, year: 1995,
        marketValue: 61.99,
        shareholderEquity: 25.81,
        shareholderFVR: 25.81
    },
    {
        month: 3, year: 1996,
        marketValue: 72.02,
        shareholderEquity: 32.26,
        shareholderFVR: 32.26
    },
    {
        month: 3, year: 1997,
        marketValue: 69.56,
        shareholderEquity: 33.11,
        shareholderFVR: 33.11
    },
    {
        month: 3, year: 1998,
        marketValue: 75.57,
        shareholderEquity: 43.39,
        shareholderFVR: 43.39
    },
    {
        month: 3, year: 1999,
        marketValue: 77.47,
        shareholderEquity: 46.08,
        shareholderFVR: 46.08
    },
    {
        month: 3, year: 2000,
        marketValue: 104.29,
        shareholderEquity: 50.64,
        shareholderFVR: 50.64
    },
    {
        month: 3, year: 2001,
        marketValue: 81.05,
        shareholderEquity: 51.90,
        shareholderFVR: 51.90
    },
    {
        month: 3, year: 2002,
        marketValue: 76.79,
        shareholderEquity: 54.47,
        shareholderFVR: 54.47,
        TSR: 4681,
        MSCISG: 3100,
        MSCIAsiaExJapan: 4446,
        MSCIWorld: 2944,
        MSCIACWorld: 2955
    },
    {
        month: 3, year: 2003,
        marketValue: 60.62,
        shareholderEquity: 54.52,
        shareholderFVR: 54.52,
        TSR: 5761,
        MSCISG: 4422,
        MSCIAsiaExJapan: 6157,
        MSCIWorld: 4064,
        MSCIACWorld: 4072
    },
    {
        month: 3, year: 2004,
        marketValue: 90.04,
        shareholderEquity: 64.52,
        shareholderFVR: 64.52,
        TSR: 3952,
        MSCISG: 2986,
        MSCIAsiaExJapan: 3782,
        MSCIWorld: 2975,
        MSCIACWorld: 2950
    },
    {
        month: 3, year: 2005,
        marketValue: 103.45,
        shareholderEquity: 70.89,
        shareholderFVR: 70.89,
        TSR: 3396,
        MSCISG: 2575,
        MSCIAsiaExJapan: 3479,
        MSCIWorld: 2735,
        MSCIACWorld: 2705
    },
    {
        month: 3, year: 2006,
        marketValue: 129.00,
        shareholderEquity: 90.63,
        shareholderFVR: 83.56,
        TSR: 2725,
        MSCISG: 2106,
        MSCIAsiaExJapan: 2682,
        MSCIWorld: 2362,
        MSCIACWorld: 2303
    },
    {
        month: 3, year: 2007,
        marketValue: 163.89,
        shareholderEquity: 113.96,
        shareholderFVR: 92.95,
        TSR: 2145,
        MSCISG: 1540,
        MSCIAsiaExJapan: 2321,
        MSCIWorld: 2180,
        MSCIACWorld: 2118
    },
    {
        month: 3, year: 2008,
        marketValue: 184.99,
        shareholderEquity: 144.06,
        shareholderFVR: 120.21,
        TSR: 2009,
        MSCISG: 1576,
        MSCIAsiaExJapan: 2153,
        MSCIWorld: 2483,
        MSCIACWorld: 2361
    },
    {
        month: 3, year: 2009,
        marketValue: 130.28,
        shareholderEquity: 118.40,
        shareholderFVR: 119.85,
        TSR: 2852,
        MSCISG: 2761,
        MSCIAsiaExJapan: 3486,
        MSCIWorld: 3920,
        MSCIACWorld: 3761
    },
    {
        month: 3, year: 2010,
        marketValue: 185.93,
        shareholderEquity: 149.74,
        shareholderFVR: 127.77,
        TSR: 1998,
        MSCISG: 1590,
        MSCIAsiaExJapan: 2188,
        MSCIWorld: 2798,
        MSCIACWorld: 2630
    },
    {
        month: 3, year: 2011,
        marketValue: 192.77,
        shareholderEquity: 155.48,
        //shareholderFVR: 134.58 (rounding),
        shareholderFVR: 134.48,
        TSR: 1911,
        MSCISG: 1434,
        MSCIAsiaExJapan: 2031,
        MSCIWorld: 2735,
        MSCIACWorld: 2557
    },
    {
        month: 3, year: 2012,
        marketValue: 197.78,
        shareholderEquity: 158.14,
        shareholderFVR: 146.38,
        TSR: 1882,
        MSCISG: 1460,
        MSCIAsiaExJapan: 2190,
        MSCIWorld: 2727,
        MSCIACWorld: 2583
    },
    {
        month: 3, year: 2013,
        marketValue: 215.30,
        shareholderEquity: 169.17,
        shareholderFVR: 155.95,
        TSR: 1729,
        MSCISG: 1308,
        MSCIAsiaExJapan: 2078,
        MSCIWorld: 2470,
        MSCIACWorld: 2368
    },
    {
        month: 3, year: 2014,
        marketValue: 223.48,
        shareholderEquity: 187.43,
        // shareholderFVR: 172.55 (rounding)
        shareholderFVR: 172.49,
        TSR: 1704,
        MSCISG: 1319,
        MSCIAsiaExJapan: 1989,
        MSCIWorld: 2047,
        MSCIACWorld: 2004
    },
    {
        month: 3, year: 2015,
        marketValue: 266.39,
        shareholderEquity: 218.60,
        shareholderFVR: 188.02,
        TSR: 1429,
        MSCISG: 1186,
        MSCIAsiaExJapan: 1647,
        MSCIWorld: 1770,
        MSCIACWorld: 1743
    },
    {
        month: 3, year: 2016,
        marketValue: 242.35,
        shareholderEquity: 218.15,
        shareholderFVR: 198.22,
        TSR: 1571,
        MSCISG: 1371,
        MSCIAsiaExJapan: 1903,
        MSCIWorld: 1867,
        MSCIACWorld: 1856
    },
    {
        month: 3, year: 2017,
        marketValue: 274.75,
        shareholderEquity: 238.88,
        shareholderFVR: 210.67,
        TSR: 1386,
        MSCISG: 1206,
        MSCIAsiaExJapan: 1561,
        MSCIWorld: 1568,
        MSCIACWorld: 1555
    },
    {
        month: 3, year: 2018,
        marketValue: 308.25,
        shareholderEquity: 272.10,
        shareholderFVR: 227.43,
        TSR: 1235,
        MSCISG: 1046,
        MSCIAsiaExJapan: 1325,
        MSCIWorld: 1472,
        MSCIACWorld: 1443
    },
    {
        month: 3, year: 2019,
        marketValue: 312.86,
        // shareholderEquity: 283.54,
        shareholderEquity: 283.44,
        shareholderFVR: 246.32,
        TSR: 1217,
        MSCISG: 1082,
        MSCIAsiaExJapan: 1351,
        MSCIWorld: 1369,
        MSCIACWorld: 1361
    },
    {
        month: 3, year: 2020,
        marketValue: 305.73,
        shareholderEquity: 290.5,
        shareholderFVR: 257.7,
        TSR: 1245,
        MSCISG: 1324,
        MSCIAsiaExJapan: 1484,
        MSCIWorld: 1454,
        MSCIACWorld: 1459
    },
    {
        month: 3, year: 2021,
        marketValue: 380.72,
        shareholderEquity: 347.53,
        shareholderFVR: 272.88,
        TSR: 1000,
        MSCISG: 1000,
        MSCIAsiaExJapan: 1000,
        MSCIWorld: 1000,
        MSCIACWorld: 1000
    }
];

app.data.eventsData = [
    {
        month: 3, year: 1994, event: "Listing", event1: "of Singtel",
        fontWeight: "normal",
        marketValue: 66.82,
        anchor: "start", yOffset: 0.81
    },
    {
        month: 3, year: 1997, event: "Asian", event1: "Financial Crisis",
        fontWeight: "normal",
        marketValue: 69.56,
        anchor: "end", yOffset: 0.685
    },
    {
        month: 3, year: 2000, event: "Dotcom", event1: "Peak",
        fontWeight: "normal",
        marketValue: 104.29,
        anchor: "end", yOffset: 0.75
    },
    {
        month: 3, year: 2002, event: "Temasek steps up", event1: "investments in Asia",
        fontWeight: "bold",
        marketValue: 76.79,
        anchor: "middle", yOffset: 0.565
    },
    {
        month: 3, year: 2003, event: "SARS", event1: "Epidemic",
        fontWeight: "normal",
        marketValue: 60.62,
        anchor: "start", yOffset: 0.75
    },
    {
        month: 7, year: 2008, event: "Global", event1: "Financial Crisis",
        fontWeight: "normal",
        marketValue: (184.99 + 130.28) * 0.55,  // roughly halfway between the 2008 and 2009 data points
        anchor: "start", yOffset: 0.685
    },
    {
        month: 11, year: 2015, event: "Market", event1: "dislocation",
        fontWeight: "normal",
        marketValue: (266.39 + 242.35) * 0.48,
        anchor: "end", yOffset: 0.56
    },
    {
        month: 1, year: 2020, event: "COVID-19", event1: "Pandemic",
        fontWeight: "normal",
        marketValue: (312.86 + 305.73) * 0.485,
        anchor: "end", yOffset: 0.56
    }
];

app.data.calloutText = [
    {
        text: "calloutLine1Part1",
        partOfLine: true
    },
    {
        text: "",
        class: "year-text bold marketValueColor",
        partOfLine: true
    },
    {
        text: "calloutLine1Part3",
        partOfLine: true
    },
    {
        text: "here's how much it would be worth",
        dy: "1.6em",
    },
    {
        text: "in 2021:",
        dy: "1.6em",
    },
    {
        text: "Temasek",
        dy: "2.4em",
    },
    {
        text: "",
        anchor: "end",
        class: "TSR-text bold"
    },
    {
        text: "MSCI Singapore",
        dy: "1.6em",
    },
    {
        text: "",
        anchor: "end",
        class: "MSCISG-text bold"
    },
    {
        text: "MSCI AC Asia ex-Japan",
        dy: "1.6em",
    },
    {
        text: "",
        anchor: "end",
        class: "MSCIAsiaExJapan-text bold"
    },
    {
        text: "MSCI World",
        dy: "1.6em",
    },
    {
        text: "",
        anchor: "end",
        class: "MSCIWorld-text bold"
    }
]