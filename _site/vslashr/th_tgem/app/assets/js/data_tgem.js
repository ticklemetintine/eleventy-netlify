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
    "Oil Crisis Annual Return: -12.84%": "Oil Crisis\nAnnual Return: -12.84%",
    "Black Monday Annual Return: -8.35%": "Black Monday\nAnnual Return: -8.35%",
    "Dotcom Peak Annual Return: 17.93%": "Dotcom Peak\nAnnual Return: 17.93%",
    "Global Financial Crisis Annual Return: -38.06%": "Global Financial Crisis\nAnnual Return: -38.06%",
    "Includes1": "Includes",
    "Includes2": "Includes",
    "Includes3": "Includes",
    "Includes4": "Includes",
    "Dotcom Peak1": "Dotcom Peak",
    "Dotcom Peak2": "Dotcom Peak",
};

app.lang.zh = {
    "To see chart, please rotate your device to landscape.": "查看完整图表，请把手机<br>调成横屏模式。",

    //Menu Items
    "1. Markets are volatile": "1. 市场波动不定",
    "2. Annual equity returns are volatile": "2. 年度股权投资回报率<br>波动不定",
    "3. Long term equity returns are also volatile": "3. 长期股权投资回报率<br>也波动不定",

    //Description text
    "The S&P 500 Index has swung widely, underpinned by cycles of boom and bust.": "标准普尔500指数(S&P 500)随经济繁荣和萧条周期大幅波动。 ",
    "Equity returns are volatile over time, driven by macroeconomic or geopolitical events.": "受宏观经济或地缘政治事件影响，股权投资回报随着时间而波动。",
    "Even on a 20-year rolling basis, returns varied significantly across time.": "即使在20年期滚动基础上，投资回报率随时间而有显著差异。",
    " Likewise, on a longer 30-year or 50-year rolling basis, returns still vary significantly.": "相同的，在较长的30年期和50年期，滚动回报率依然变化显著。",

    //Chart axis text
    "Index Level": "指数水平",
    "Returns in US$ (%)": "以美元计算的回报率︵%︶",
    "Year (ending 31 March)": "年（截至3月31日）",

    //Legend
    "The Standard & Poor's 500 Index": "标准普尔500指数",
    "The Standard & Poor's 500 Index Annual Returns": "标准普尔500指数年度回报率",
    "The Standard & Poor's 500 Index Rolling 20-year Returns (Compounded Annualised)": "标准普尔500指数20年期滚动复合年化回报率",
    "20-year Rolling Compounded Annualised Returns": "20年期滚动回报率(复合年化)",
    "30-year Rolling Compounded Annualised Returns": "30年期滚动回报率(复合年化)",
    "50-year Rolling Compounded Annualised Returns": "50年期滚动回报率(复合年化)",

    //Footnote tooltip
    "Rolling 20-year returns include events of the preceding 20 years.":"20年期滚动回报涵盖此前20年内的事件。",

    // buttons
    "20-year Rolling": "20年期滚动",
    "30-year Rolling": "30年期滚动",
    "50-year Rolling": "50年期滚动",

    //Chart Points
    "1949": "1949年",
    "1958": "1958年",
    "1972": "1972年",
    "1974": "1974年",
    "1979": "1979年",
    "1982": "1982年",
    "1988": "1988年",
    "1999": "1999年",
    "2000": "2000年",
    "2009": "2009年",
    "2020": "2020年",
    "Oil Crisis": "石油危机",
    "Black Monday": "黑色星期一",
    "Dotcom Peak1": "科技股热潮顶峰",
    "Global Financial Crisis": "全球金融危机",
    // space is not a typo - needed for Bostock's wrapper function to detect and split the text nicely
    "COVID-19 Pandemic": "2019冠状 病毒病疫情",

    "Rolling returns": "滚动回报率",
    "Significant events": "重大事件",

    "1929-1941: Great Depression": "1929年-1941年：经济大萧条",
    "1931-1933: Banking Panics": "1931年-1933年：银行恐慌",
    "1941-1945: World War II": "1941年-1945年：第二次世界大战",
    "1965-1982: US Stagflation": "1965年-1982年：美国滞胀",
    "1973-1974: Oil Crisis": "1973年-1974年：石油危机",
    "1978-1979: Oil Crisis II": "1978年-1979年：第二次石油危机",
    "1980-1989: Savings & Loans Crisis": "1980年-1989年：储蓄和贷款危机",
    "1982-1989: Latin American Debt Crisis": "1982年-1989年：拉丁美洲债务危机",
    "1987\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0: Black Monday": "1987年\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0: \u00a0黑色星期一",
    "1997-1998: Asian Financial Crisis": "1997年-1998年：亚洲金融危机",
    "1995-2000: Dotcom Bubble": "1995年-2000年：互联网泡沫",
    "2007-2009: Global Financial Crisis": "2007年-2009年：全球金融危机",
    "2007-2009: Global": "2007年-2009年：",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Financial": "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 全球金融危机",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Crisis": " ",
    "2020-2021: COVID-19": "2020年-2021年：",
    "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Pandemic": "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 2019冠状病毒病疫情",

    "1929-1949:": "",
    "1962-1982:": "",
    "1980-2000:": "",
    "1989-2009:": "",
    "Includes1": "包括经济大萧条和",
    "Great Depression": "第二次世界大战",
    "and World War II": " ",
    "Includes2": "包括石油危机",
    "Oil Crisis and": "和美国滞胀",
    "US Stagflation": " ",
    "Includes3": "包括科技股",
    "Dotcom Peak2": "热潮顶峰",
    "Includes Global": "包括全球",
    "Financial Crisis": "金融危机",
    "Includes COVID-19": "包括2019冠状",
    "Pandemic": "病毒病疫情",

    "20 years": "20年",
    "Min: 1%": "最低值: 1%",
    "Min: 7%": "最低值: 7%",
    "Max: 14%": "最高值: 14%",
    "Max: 18%": "最高值: 18%"
};

app.data.snpPriceChart = {
    chartClass: "chart1",
    title: "",
    legendIconSize: 15,
    legendOffset: {
        getX: function(info, i){
            return info.x(1938);
        },
        getY: function(info, i){
            return info.height + 60 + i * 20;
        }
    },
    xAxisLabel: "Year (ending 31 March)",
    yAxisLabel: "Index Level",
    yAxisDomain: [0, 4000],
    yAxisTickStep: 500,
    sets: [
        {
            legend: "The Standard & Poor's 500 Index",
            color: "#d991aa",
            strokeWidth: 1,
            "name": "price",
            shouldDrawTooltips: true,
            getY: function(d){
                return d.price;
            },
            getFormat: function(d) { return d3.format(".2f") },
        }
    ],
    getX: function(d){
        return d.year;
    },
    initialIndex: 80,
    drawZeroLine: false,
    margins: {
        top: 50, right: 50, bottom: 120, left: 90, width: 1.0, height: 600/1024, 
        viewBoxWidth: 1024, viewBoxHeight: 600
    }
};

app.data.snpYoYChart = {
    chartClass: "chart2",
    title: "",
    legendIconSize: 15,
    legendOffset: {
        getX: function(info, i){
            return info.x(1934);
        },
        getY: function(info, i){
            return info.height + 60 + i * 20;
        }
    },
    xAxisLabel: "Year (ending 31 March)",
    yAxisLabel: "Returns in US$ (%)",
    yAxisDomain: [-80, 80],
    yAxisTickStep: 20,
    sets: [
        {
            legend: "The Standard & Poor's 500 Index Annual Returns",
            color: "#d991aa",
            "name": "yoy",
            strokeWidth: 1,
            shouldDrawTooltips: true,
            getY: function(d){
                return d.yoy;
            },
            getFormat: function(d) { return d3.format(".0f") }
        }
    ],
    getX: function(d){
        return d.year;
    },
    initialIndex: 80,
    drawZeroLine: true,
    margins: {
        top: 50, right: 50, bottom: 120, left: 90, width: 1.0, height: 600/1024, 
        viewBoxWidth: 1024, viewBoxHeight: 600
    }
};

app.data.snpRollingChart = {
    chartClass: "chart3",
    title: "",
    legendIconSize: 15,
    legendOffset: {
        getX: function(info, i){
            return info.x(1934);
        },
        getY: function(info, i){
            return info.height + 60 + i * 25;
        }
    },
    xAxisLabel: "Year (ending 31 March)",
    yAxisLabel: "Returns in US$ (%)",
    yAxisDomain: [-80, 80],
    yAxisTickStep: 20,
    sets: [
        {
            legend: "The Standard & Poor's 500 Index Annual Returns",
            color: "#d991aa",
            strokeWidth: 1,
            "name": "yoy",
            shouldDrawTooltips: false,
            getY: function(d){
                return d.yoy;
            }
        },
        {
            legend: "The Standard & Poor's 500 Index Rolling 20-year Returns (Compounded Annualised)",
            color: "#4d1965",
            strokeWidth: 2,
            "name": "rolling",
            shouldDrawTooltips: true,
            getY: function(d){
                return d.rolling;
            },
            getFormat: function(d) { return d3.format(".0f") }
        }
    ],
    getX: function(d){
        return d.year;
    },
    initialIndex: 80,
    drawZeroLine: true,
    margins: {
        top: 50, right: 50, bottom: 120, left: 90, width: 1.0, height: 600/1024, 
        viewBoxWidth: 1024, viewBoxHeight: 600
    }
};

app.data.snpZoomedRollingChart = {
    chartClass: "chart4",
    title: "",
    startDataSlice: 0,
    legendIconSize: 15,
    legendOffset: {
        getX: function(info, i){
            return info.x(1934);
        },
        getY: function(info, i){
            return info.height + 60 + i * 20;
        }
    },
    xAxisLabel: "Year (ending 31 March)",
    yAxisLabel: "Rolling 20-year Compunded Annualised Returns in USD (%)",
    yAxisDomain: [0, 25],
    yAxisTickStep: 5,
    sets: [
        {
            legend: "20-year Rolling Compounded Annualised Returns",
            color: "#4d1965",
            strokeWidth: 2,
            name: "rolling",
            shouldDrawTooltips: true,
            getY: function(d){
                return d.rolling;
            },
            getFormat: function(d) { return d3.format(".0f") },
            // footnoteTooltip: "Rolling 20-year returns include events of the preceding 20 years."
        },
        {
            legend: "30-year Rolling Compounded Annualised Returns",
            color: "blue",
            strokeWidth: 2,
            name: "rolling30",
            shouldDrawTooltips: true,
            getY: function(d){
                return d.rolling30;
            },
            getFormat: function(d) { return d3.format(".0f") },
            // footnoteTooltip: "Rolling 20-year returns include events of the preceding 20 years."
        },
        {
            legend: "50-year Rolling Compounded Annualised Returns",
            color: "green",
            strokeWidth: 2,
            name: "rolling50",
            shouldDrawTooltips: true,
            getY: function(d){
                return d.rolling50;
            },
            getFormat: function(d) { return d3.format(".0f") },
            // footnoteTooltip: "Rolling 20-year returns include events of the preceding 20 years."
        }
    ],
    getX: function(d){
        return d.year;
    },
    initialIndex: 61,
    drawZeroLine: false,
    margins: {
        top: 50, right: 50, bottom: 120, left: 90, width: 1.0, height: 600/1024, 
        viewBoxWidth: 1024, viewBoxHeight: 600
    }
};

app.data.menu = [
    {
        text: "1. Markets are volatile",
        description: "The S&P 500 Index has swung widely, underpinned by cycles of boom and bust."
    },
    {
        text: "2. Annual equity returns are volatile",
        description: "Equity returns are volatile over time, driven by macroeconomic or geopolitical events."
    },
    {
        text: "3. Long term equity returns are also volatile",
        description: "Even on a 20-year rolling basis, returns varied significantly across time.",
        description2: " Likewise, on a longer 30-year or 50-year rolling basis, returns still vary significantly.",
        button: [
            {
                text: "20-year Rolling",
                background: "#4d1965",
                color: "#fff",
                SVGline: "path.line.rolling",
                SVGpoints: "g.points.series0"
            },
            {
                text: "30-year Rolling",
                background: "blue",
                color: "#fff",
                SVGline: "path.line.rolling30",
                SVGpoints: "g.points.series1"
            },
            {
                text: "50-year Rolling",
                background: "green",
                color: "#fff",
                SVGline: "path.line.rolling50",
                SVGpoints: "g.points.series2"
            }
        ]
    }
];

app.data.snpToolTip = {
    "price": [
        {
            year: 1974,
            price: 93.98,
            text: "Oil Crisis",
            position: "middle",
            color: "#b7025e",
            xOffset:-50,
            yOffset:-80
        },
        {
            year: 1988,
            price: 258.89,
            text: "Black Monday",
            position: "middle",
            color: "#b7025e",
            xOffset:-50,
            yOffset:-80
        },
        {
            year: 2000,
            price: 1498.58,
            text: "Dotcom Peak1",
            position: "middle",
            color: "#b7025e",
            xOffset:-50,
            yOffset:-80
        },
        {
            year: 2009,
            price: 797.87,
            text: "Global Financial Crisis",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:10
        },
        {
            year: 2020,
            price: 2584.59,
            text: "COVID-19 Pandemic",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:25
        }
    ],
    "yoy": [
        {
            year: 1974,
            yoy: -12.84,
            text: "Oil Crisis",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:10
        },
        {
            year: 1988,
            yoy: -8.35,
            text: "Black Monday",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:10
        },
        {
            year: 2000,
            yoy: 17.93,
            text: "Dotcom Peak1",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:-160
        },
        {
            year: 2009,
            yoy: -38.06,
            text: "Global Financial Crisis",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:10
        },
        {
            year: 2020,
            yoy: -6.99,
            text: "COVID-19 Pandemic",
            position: "middle",
            color: "#b7025e",
            xOffset:0,
            yOffset:10
        }
    ],
    "rolling": [
        {
            year: 1949,
            rolling: 1, //0.93
            text: "Min: 1%",
            events: [
                { text: "1929-1941: Great Depression" },
                { text: "1931-1933: Banking Panics" },
                { text: "1941-1945: World War II" },
            ],
            events2: [
                { text: "1929-1949:" },
                { text: "Includes1" },
                { text: "Great Depression" },
                { text: "and World War II" }
            ],
            position: "middle",
            color: "#4d1965",
            xOffset:55,
            yOffset:-35
        },
        {
            year: 1982,
            rolling: 6, //6.49
            text: "",
            events: [
                { text: "1965-1982: US Stagflation" },
                { text: "1973-1974: Oil Crisis" },
                { text: "1978-1979: Oil Crisis II" },
                { text: "1980-1989: Savings & Loans Crisis" },
            ],
            events2: [
                { text: "1962-1982:" },
                { text: "Includes2" },
                { text: "Oil Crisis and" },
                { text: "US Stagflation" }
            ],
            position: "middle",
            color: "#4d1965",
            xOffset:0,
            yOffset:0
        },
        {
            year: 2000,
            rolling: 18, //18.23
            text: "Max: 18%",
            events: [
                { text: "1980-1989: Savings & Loans Crisis" },
                { text: "1982-1989: Latin American Debt Crisis" },
                { text: "1987\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0: Black Monday" },
                { text: "1997-1998: Asian Financial Crisis" },
                { text: "1995-2000: Dotcom Bubble" },
            ],
            events2: [
                { text: "1980-2000:" },
                { text: "Includes3" },
                { text: "Dotcom Peak2" }
            ],
            position: "middle",
            color: "#4d1965",
            xOffset:70,
            yOffset:-15
        },
        {
            year: 2009,
            rolling: 7, //7.41
            text: "",
            events: [
                { text: "1980-1989: Savings & Loans Crisis" },
                { text: "1982-1989: Latin American Debt Crisis" },
                { text: "1997-1998: Asian Financial Crisis" },
                { text: "1995-2000: Dotcom Bubble" },
                { text: "2007-2009: Global Financial Crisis" },
            ],
            events2: [
                { text: "1989-2009:" },
                { text: "Includes Global" },
                { text: "Financial Crisis" }
            ],
            position: "middle",
            color: "#4d1965",
            xOffset:0,
            yOffset:0
        },
        {
            year: 2020,
            rolling: 5, //4.78
            text: "",
            events: [
                { text: "2007-2009: Global" },
                { text: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Financial" },
                { text: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Crisis" },
                { text: "2020-2021: COVID-19" },
                { text: "\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 Pandemic" },
            ],
            events2: [
                { text: "2000-2020:" },
                { text: "Includes COVID-19" },
                { text: "Pandemic" }
            ],
            position: "middle",
            color: "#4d1965",
            xOffset:0,
            yOffset:0
        }
    ],
    rolling30: [
        {
            year: 1958,
            rolling30: 7, //7.01
            text: "Min: 7%",
            position: "middle",
            color: "blue",
            xOffset:10,
            yOffset:5
        },
        {
            year: 1972,
            rolling30: 14, //14.1
            text: "Max: 14%",
            position: "middle",
            color: "blue",
            xOffset:60,
            yOffset:-60
        }
    ],
    rolling50: [
        {
            year: 1979,
            rolling50: 7, //7.01
            text: "Min: 7%",
            position: "middle",
            color: "green",
            xOffset:-40,
            yOffset:-10
        },
        {
            year: 1999,
            rolling50: 14, //13.76
            text: "Max: 14%",
            position: "middle",
            color: "green",
            xOffset:0,
            yOffset:30
        }
    ]
};

app.data.snpData = [
    // {
    //   year: 1928,
    //   price: 19.28,
    //   yoy: 0,
    //   rolling: 0
    // },
    {
        year: 1929,
        price: 25.53,
        yoy: 0,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1930,
        price: 25.14,
        yoy: -1.53,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1931,
        price: 16.69,
        yoy: -33.61,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1932,
        price: 7.31,
        yoy: -56.2,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1933,
        price: 5.85,
        yoy: -19.97,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1934,
        price: 10.62,
        yoy: 81.54,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1935,
        price: 8.45,
        yoy: -20.43,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1936,
        price: 14.92,
        yoy: 77.04,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1937,
        price: 17.92,
        yoy: 25.72,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1938,
        price: 8.5,
        yoy: -49.49,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1939,
        price: 10.98,
        yoy: 34.85,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1940,
        price: 12.18,
        yoy: 16.94,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1941,
        price: 9.96,
        yoy: -12.7,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1942,
        price: 8.01,
        yoy: -13.48,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1943,
        price: 11.58,
        yoy: 54.14,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1944,
        price: 12.02,
        yoy: 9.25,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1945,
        price: 13.61,
        yoy: 18.95,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1946,
        price: 18.04,
        yoy: 38.19,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1947,
        price: 15.17,
        yoy: -12.09,
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1948,
        price: 15.08,
        yoy: 5.08,
        // rolling: 2.05
        rolling: 0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1949,
        price: 15.06,
        yoy: 6.27,
        rolling: 0.93,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1950,
        price: 17.29,
        yoy: 29.24,
        rolling: 2.32,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1951,
        price: 21.48,
        yoy: 34.64,
        rolling: 6.0,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1952,
        price: 24.37,
        yoy: 20.65,
        rolling: 11.51,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1953,
        price: 25.29,
        yoy: 9.66,
        rolling: 13.28,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1954,
        price: 26.94,
        yoy: 13.02,
        rolling: 10.62,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1955,
        price: 36.58,
        yoy: 42.26,
        rolling: 13.89,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1956,
        price: 48.48,
        yoy: 37.76,
        rolling: 12.47,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1957,
        price: 44.11,
        yoy: -5.53,
        rolling: 10.87,
        rolling30: 0,
        rolling50: 0
    },
    {
        year: 1958,
        price: 42.1,
        yoy: -0.56,
        rolling: 14.69,
        rolling30: 7.01,
        rolling50: 0
    },
    {
        year: 1959,
        price: 55.44,
        yoy: 36.31,
        rolling: 14.75,
        rolling30: 7.12,
        rolling50: 0
    },
    {
        year: 1960,
        price: 55.34,
        yoy: 3.22,
        rolling: 14.04,
        rolling30: 7.29,
        rolling50: 0
    },
    {
        year: 1961,
        price: 65.06,
        yoy: 21.54,
        rolling: 15.94,
        rolling30: 9.44,
        rolling50: 0
    },
    {
        year: 1962,
        price: 69.55,
        yoy: 10.14,
        rolling: 17.35,
        rolling30: 12.89,
        rolling50: 0
    },
    {
        year: 1963,
        price: 66.57,
        yoy: -0.81,
        rolling: 14.79,
        rolling30: 13.7,
        rolling50: 0
    },
    {
        year: 1964,
        price: 78.98,
        yoy: 22.44,
        rolling: 15.44,
        rolling30: 12.21,
        rolling50: 0
    },
    {
        year: 1965,
        price: 86.16,
        yoy: 12.43,
        rolling: 15.12,
        rolling30: 13.52,
        rolling50: 0
    },
    {
        year: 1966,
        price: 89.23,
        yoy: 6.84,
        rolling: 13.65,
        rolling30: 11.62,
        rolling50: 0
    },
    {
        year: 1967,
        price: 90.2,
        yoy: 4.68,
        rolling: 14.64,
        rolling30: 10.94,
        rolling50: 0
    },
    {
        year: 1968,
        price: 90.2,
        yoy: 3.19,
        rolling: 14.54,
        rolling30: 13.61,
        rolling50: 0
    },
    {
        year: 1969,
        price: 101.51,
        yoy: 16.0,
        rolling: 15.04,
        rolling30: 13.02,
        rolling50: 0
    },
    {
        year: 1970,
        price: 89.63,
        yoy: -8.64,
        rolling: 13.07,
        rolling30: 12.12,
        rolling50: 0
    },
    {
        year: 1971,
        price: 100.31,
        yoy: 16.07,
        rolling: 12.23,
        rolling30: 13.19,
        rolling50: 0
    },
    {
        year: 1972,
        price: 107.2,
        yoy: 10.19,
        rolling: 11.72,
        rolling30: 14.1,
        rolling50: 0
    },
    {
        year: 1973,
        price: 111.52,
        yoy: 7.03,
        rolling: 11.59,
        rolling30: 12.73,
        rolling50: 0
    },
    {
        year: 1974,
        price: 93.98,
        yoy: -12.84,
        rolling: 10.15,
        rolling30: 11.88,
        rolling50: 0
    },
    {
        year: 1975,
        price: 83.36,
        yoy: -6.97,
        rolling: 7.83,
        rolling30: 10.99,
        rolling50: 0
    },
    {
        year: 1976,
        price: 102.77,
        yoy: 28.33,
        rolling: 7.45,
        rolling30: 10.69,
        rolling50: 0
    },
    {
        year: 1977,
        price: 98.42,
        yoy: -0.24,
        rolling: 7.74,
        rolling30: 11.16,
        rolling50: 0
    },
    {
        year: 1978,
        price: 89.21,
        yoy: -4.64,
        rolling: 7.52,
        rolling30: 10.8,
        rolling50: 7.22
    },
    {
        year: 1979,
        price: 101.59,
        yoy: 20.07,
        rolling: 6.84,
        rolling30: 11.25,
        rolling50: 7.01
    },
    {
        year: 1980,
        price: 102.09,
        yoy: 6.18,
        rolling: 6.99,
        rolling30: 10.53,
        rolling50: 7.17
    },
    {
        year: 1981,
        price: 136,
        yoy: 40.1,
        rolling: 7.75,
        rolling30: 10.67,
        rolling50: 8.78
    },
    {
        year: 1982,
        price: 111.96,
        yoy: -13.07,
        rolling: 6.49,
        rolling30: 9.47,
        rolling50: 10.28
    },
    {
        year: 1983,
        price: 152.96,
        yoy: 44.26,
        rolling: 8.5,
        rolling30: 10.48,
        rolling50: 11.59
    },
    {
        year: 1984,
        price: 159.18,
        yoy: 8.73,
        rolling: 7.86,
        rolling30: 10.33,
        rolling50: 10.45
    },
    {
        year: 1985,
        price: 180.66,
        yoy: 18.88,
        rolling: 8.16,
        rolling30: 9.68,
        rolling50: 11.34
    },
    {
        year: 1986,
        price: 238.9,
        yoy: 37.66,
        rolling: 9.54,
        rolling30: 9.7,
        rolling50: 10.78
    },
    {
        year: 1987,
        price: 291.7,
        yoy: 26.2,
        rolling: 10.57,
        rolling30: 10.74,
        rolling50: 10.79
    },
    {
        year: 1988,
        price: 258.89,
        yoy: -8.35,
        rolling: 9.91,
        rolling30: 10.44,
        rolling50: 12.12
    },
    {
        year: 1989,
        price: 294.87,
        yoy: 18.1,
        rolling: 10.01,
        rolling30: 9.91,
        rolling50: 11.82
    },
    {
        year: 1990,
        price: 339.94,
        yoy: 19.21,
        rolling: 11.48,
        rolling30: 10.44,
        rolling50: 11.87
    },
    {
        year: 1991,
        price: 375.22,
        yoy: 14.29,
        rolling: 11.4,
        rolling30: 10.24,
        rolling50: 12.47
    },
    {
        year: 1992,
        price: 403.69,
        yoy: 10.97,
        rolling: 11.44,
        rolling30: 10.25,
        rolling50: 13.03
    },
    {
        year: 1993,
        price: 451.67,
        yoy: 15.21,
        rolling: 11.85,
        rolling30: 10.8,
        rolling50: 12.38
    },
    {
        year: 1994,
        price: 445.77,
        yoy: 1.45,
        rolling: 12.7,
        rolling30: 10.11,
        rolling50: 12.21
    },
    {
        year: 1995,
        price: 500.71,
        yoy: 15.52,
        rolling: 13.93,
        rolling30: 10.21,
        rolling50: 12.16
    },
    {
        year: 1996,
        price: 645.5,
        yoy: 32.03,
        rolling: 14.09,
        rolling30: 10.99,
        rolling50: 12.04
    },
    {
        year: 1997,
        price: 757.12,
        yoy: 19.78,
        rolling: 15.14,
        rolling30: 11.49,
        rolling50: 12.74
    },
    {
        year: 1998,
        price: 1101.75,
        yoy: 47.92,
        rolling: 17.69,
        rolling30: 12.83,
        rolling50: 13.51
    },
    {
        year: 1999,
        price: 1286.37,
        yoy: 18.44,
        rolling: 17.61,
        rolling30: 12.94,
        rolling50: 13.76
    },
    {
        year: 2000,
        price: 1498.58,
        yoy: 17.93,
        rolling: 18.23,
        rolling30: 13.88,
        rolling50: 13.55
    },
    {
        year: 2001,
        price: 1160.33,
        yoy: -21.66,
        rolling: 14.84,
        rolling30: 12.39,
        rolling50: 12.33
    },
    {
        year: 2002,
        price: 1147.39,
        yoy: 0.24,
        rolling: 15.67,
        rolling30: 12.05,
        rolling50: 11.91
    },
    {
        year: 2003,
        price: 848.18,
        yoy: -24.75,
        rolling: 11.96,
        rolling30: 10.73,
        rolling50: 11.07
    },
    {
        year: 2004,
        price: 1126.21,
        yoy: 35.08,
        rolling: 13.18,
        rolling30: 12.36,
        rolling50: 11.47
    },
    {
        year: 2005,
        price: 1180.59,
        yoy: 6.68,
        rolling: 12.57,
        rolling30: 12.87,
        rolling50: 10.83
    },
    {
        year: 2006,
        price: 1294.83,
        yoy: 11.71,
        rolling: 11.4,
        rolling30: 12.35,
        rolling50: 10.38
    },
    {
        year: 2007,
        price: 1420.86,
        yoy: 11.81,
        rolling: 10.73,
        rolling30: 12.78,
        rolling50: 10.74
    },
    {
        year: 2008,
        price: 1322.7,
        yoy: -5.01,
        rolling: 10.93,
        rolling30: 12.77,
        rolling50: 10.64
    },
    {
        year: 2009,
        price: 797.87,
        yoy: -38.06,
        rolling: 7.41,
        rolling30: 10.31,
        rolling50: 8.91
    },
    {
        year: 2010,
        price: 1169.43,
        yoy: 49.7,
        rolling: 8.64,
        rolling30: 11.58,
        rolling50: 9.72
    },
    {
        year: 2011,
        price: 1325.83,
        yoy: 15.66,
        rolling: 8.7,
        rolling30: 10.87,
        rolling50: 9.63
    },
    {
        year: 2012,
        price: 1408.47,
        yoy: 8.5,
        rolling: 8.58,
        rolling30: 11.69,
        rolling50: 9.58
    },
    {
        year: 2013,
        price: 1569.19,
        yoy: 13.95,
        rolling: 8.52,
        rolling30: 10.81,
        rolling50: 9.88
    },
    {
        year: 2014,
        price: 1872.34,
        yoy: 21.83,
        rolling: 9.52,
        rolling30: 11.24,
        rolling50: 9.87
    },
    {
        year: 2015,
        price: 2067.89,
        yoy: 12.7,
        rolling: 9.38,
        rolling30: 11.04,
        rolling50: 9.88
    },
    {
        year: 2016,
        price: 2059.74,
        yoy: 1.77,
        rolling: 7.97,
        rolling30: 9.93,
        rolling50: 9.77
    },
    {
        year: 2017,
        price: 2362.72,
        yoy: 17.15,
        rolling: 7.85,
        rolling30: 9.66,
        rolling50: 10.02
    },
    {
        year: 2018,
        price: 2640.87,
        yoy: 13.98,
        rolling: 6.45,
        rolling30: 10.46,
        rolling50: 10.24
    },
    {
        year: 2019,
        price: 2834.4,
        yoy: 9.49,
        rolling: 6.04,
        rolling30: 10.18,
        rolling50: 10.13
    },
    {
        year: 2020,
        price: 2584.59,
        yoy: -6.99,
        rolling: 4.78,
        rolling30: 9.27,
        rolling50: 10.15
    },
    {
        year: 2021,
        price: 3972.89,
        yoy: 56.33,
        rolling: 8.47,
        rolling30: 10.41,
        rolling50: 10.81
    }
]

