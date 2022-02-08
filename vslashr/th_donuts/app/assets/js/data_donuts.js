// percentages MUST add up to 100%
var dataset = {
    years: [2021, 2020, 2019, 2018, 2017],
    lang: {
        en: {
            calloutTitle: function (year) {
                return "Mar " + year;
            },
            // "Liquidity2": "Liquidity",
            "Telecommunications, Media &amp; Technology": "Telecom&shy;mu&shy;ni&shy;ca&shy;tions, Media &amp; Technology",
            "Transportation &amp; Industrials": "Trans&shy;porta&shy;tion &amp; Industrials",
            "Singapore Telecommunications Ltd": "Singapore Telecom&shy;munications Ltd",
        },
        zh: {
            calloutTitle: function (year) {
                return year + "年 3月";
            },

            // title
            "Portfolio Highlights": "投资组合摘要",
            "Managing Risk": "管理风险",

            // menu
            "Geography": "地理区域",
            "Sector": "行业领域",
            "Liquidity": "资产流动性",
            "Currency": "货币",
            "Single Name": "单一投资",
            // "Country": "国家",
            // "Liquidity2": "资产流动性",

            // geography/country
            "Singapore": "新加坡",
            "China": "中国",
            "Asia (ex Singapore & China)": "亚洲（不含新加坡与中国）",
            "North America": "北美洲",
            "Europe": "欧洲",
            "Australia &amp; New Zealand": "澳大利亚和新西兰",
            "Europe, Middle East &amp; Africa": "欧洲、中东及非洲",
            "Americas": "美洲",
            "Rest of portfolio": "其他",

            // sector
            "Financial Services": "金融服务",
            "Telecommunications, Media &amp; Technology": "电信、媒体与科技",
            "Consumer &amp; Real Estate": "消费与房地产",
            "Transportation &amp; Industrials": "交通与工业",
            "Life Sciences &amp; Agri&#8209;Food": "生命科学与农业食品",
            "Energy &amp; Resources": "能源与资源",
            "Multi-sector Funds": "多行业基金",
            "Others (including Credit)": "其他(包括信贷)",

            // liquidity
            "Liquid &amp; sub-20% listed assets": "流动资产及持股比例低于20%的上市资产",
            "Listed large blocs (≥ 20% and < 50% share)": "上市大型资产(持股比例≥20%且<50%)",
            "Listed large blocs (≥ 50% share)": "上市大型资产(持股比例≥50%)",
            "Unlisted assets": "非上市资产",

            // currency
            "Singapore dollars": "新元",
            "US dollars": "美元",
            "Hong Kong dollars": "港元",
            "Indian rupees": "印度卢比",
            "Renminbi": "人民币",
            "Others": "其他",

            // singlename
            "Singapore Telecommunications Limited": "新加坡电信有限公司",
            "DBS Group Holdings Ltd": "星展集团控股有限公司",
            "Mapletree Investments Pte Ltd": "丰树产业私人有限公司",
            "Rest of portfolio": "其余投资组合",

            // footnotes
            "The Transportation &amp; Industrials sector includes investments in Energy &amp; Resources.": "交通与工业包含对能源与资源领域的投资。",
            "Distribution based on underlying assets.": "按标的资产所在地划分。",
            "Distribution based on currency of denomination.": "按币种划分。",
            "Mainly cash and cash equivalents, and sub-20% listed assets.": "主要为现金、现金等价物及持股比例低于20%的上市资产。",
            "China Construction Bank Corporation was the third largest single name concentration at 4% and 4% of 2018 and 2017 portfolio values respectively.": "中国建设银行股份有限公司曾是第三大单一投资，在2018年和2017年占投资组合的比例分别为4%和4%。",

            // carousel
            "S$381b Portfolio": "3,810亿新元投资组合",
            "US$283b Portfolio": "2,830亿美元投资组合",
            "RMB1.86t Portfolio": "18,600亿人民币投资组合",
            "£206b Portfolio": "2,060亿英镑投资组合",
            "€241b Portfolio": "2,410亿欧元投资组合",

            // others
            "(as at 31 March)": "(截至3月31日)",
            "Exchange rates as at 31 March 2021.": "以2021年3月31日的汇率计算。"
        }
    },
    lookup: {
        portfolio_footnote: "Exchange rates as at 31 March 2021.",
    },
    carousel: [
        { text: "S$381b Portfolio" },
        { text: "US$283b Portfolio", footnote: "portfolio_footnote" },
        { text: "RMB1.86t Portfolio", footnote: "portfolio_footnote" },
        { text: "€241b Portfolio", footnote: "portfolio_footnote" },
        { text: "£206b Portfolio", footnote: "portfolio_footnote" }
    ],
    charts: {
        portfolio: {
            name: "Portfolio Highlights",
            transition: 'spin1',
            menu: [
                {
                    key: 'geography', name: "Geography",
                    icon: 'fa fa-globe',
                    footnote: "Distribution based on underlying assets."
                },
                {
                    key: 'sector', name: "Sector",
                    icon: 'fa fa-pie-chart',
                    footnote: "Distribution based on underlying assets."
                },
                {
                    key: 'liquidity', name: "Liquidity",
                    icon: 'fa fa-tint',
                    footnote: ""
                },
                {
                    key: 'currency', name: "Currency",
                    icon: 'fa fa-dollar',
                    footnote: "Distribution based on currency of denomination."
                },
                {
                    key: 'single-name', name: "Single Name",
                    icon: 'fa fa-pencil-square-o',
                    footnote: ""
                }
            ],
            chartData: {
                'geography': [
                    {
                        data: [24, 24, 26, 27, 29], color: "#b7025e",
                        label: "Singapore", displayOrder: 0
                    },
                    {
                        data: [27, 29, 26, 26, 25], color: "#0073a3",
                        label: "China", displayOrder: 1
                    },
                    {
                        data: [13, 13, 14, 15, 14], color: "#2dafe6",
                        label: "Asia (ex Singapore & China)", displayOrder: 2
                    },
                    {
                        data: [4, 5, 6, 7, 8], color: "#4d1965",
                        label: "Australia &amp; New Zealand", displayOrder: 3
                    },
                    {
                        data: [12, 11, 12, 11, 10], color: "#12a639",
                        label: "Europe, Middle East &amp; Africa", displayOrder: 4
                    },
                    {
                        data: [20, 18, 16, 14, 14], color: "#d0c1d2",
                        label: "Americas", displayOrder: 5
                    }
                ],
                'sector': [
                    {
                        data: [24, 23, 25, 26, 25], color: "#0073a3",
                        label: "Financial Services",
                        link_en: "/our-major-investments/financial-services.html",
                        link_zh: "/zh/our-major-investments/financial-services.html",
                        displayOrder: 0
                    },
                    {
                        data: [21, 21, 20, 21, 23], color: "#12a639",
                        label: "Telecommunications, Media &amp; Technology",
                        link_en: "/our-major-investments/telecommunications-media-and-technology.html",
                        link_zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
                        displayOrder: 1
                    },
                    {
                        data: [19, 18, 19, 19, 20], color: "#4d1965",
                        label: "Transportation &amp; Industrials",
                        label_footnote: "The Transportation &amp; Industrials sector includes investments in Energy &amp; Resources.",
                        link_en: "/our-major-investments/transportation-and-industrials.html",
                        link_zh: "/zh/our-major-investments/transportation-and-industrials.html",
                        displayOrder: 2
                    },
                    {
                        data: [14, 17, 17, 16, 17], color: "#f4c900",
                        label: "Consumer &amp; Real Estate",
                        link_en: "/our-major-investments/consumer-and-real-estate.html",
                        link_zh: "/zh/our-major-investments/consumer-and-real-estate.html",
                        displayOrder: 3
                    },
                    {
                        data: [10, 8, 7, 6, 4], color: "#2dafe6",
                        label: "Life Sciences &amp; Agri&#8209;Food",
                        link_en: "/our-major-investments/life-sciences-and-agri-food.html",
                        link_zh: "/zh/our-major-investments/life-sciences-and-agri-food.html",
                        displayOrder: 4
                    },
                    {
                        data: [8, 8, 8, 8, 8], color: "#99d5d3",
                        label: "Multi-sector Funds",
                        displayOrder: 5
                    },
                    {
                        data: [4, 5, 4, 4, 3], color: "#e9841d",
                        label: "Others (including Credit)",
                        displayOrder: 6
                    }
                ],
                'liquidity': [
                    {
                        data: [45, 48, 42, 39, 40], color: "#2dafe6",
                        label: "Unlisted assets"
                    },
                    {
                        data: [10, 10, 12, 15, 18], color: "#4d1965",
                        label: "Listed large blocs (≥ 50% share)"
                    },
                    {
                        data: [7, 5, 10, 10, 9], color: "#d0c1d2",
                        label: "Listed large blocs (≥ 20% and < 50% share)"
                    },
                    {
                        data: [38, 37, 36, 36, 33], color: "#71ca88",
                        label: "Liquid &amp; sub-20% listed assets",
                        label_footnote: "Mainly cash and cash equivalents, and sub-20% listed assets."
                    }
                ],
                'currency': [
                    {
                        data: [50, 57, 63, 53, 60], color: "#b7025e",
                        label: "Singapore dollars"
                    },
                    {
                        data: [31, 26, 21, 24, 19], color: "#d0c1d2",
                        label: "US dollars"
                    },
                    {
                        data: [11, 11, 10, 12, 12], color: "#12a639",
                        label: "Hong Kong dollars"
                    },
                    {
                        data: [2, 2, 2, 2, 2], color: "#4d1965",
                        label: "Indian rupees"
                    },
                    {
                        data: [1, 1, 1, 1, 1], color: "#0073a3",
                        label: "Renminbi",
                    },
                    {
                        data: [5, 3, 3, 8, 6], color: "#e88300",
                        label: "Others"
                    }
                ],
                'single-name': [
                    {
                        data: [6, 5, 6, 7, 5], color: "#0073a3",
                        label: "DBS Group Holdings Ltd"
                    },
                    {
                        data: [5, 7, 8, 9, 12], color: "#12a639",
                        label: "Singapore Telecommunications Limited"
                    },
                    {
                        data: [5, 5, 5, 0, 0], color: "#f4c900",
                        label: "Mapletree Investments Pte Ltd",
                        footnote: "China Construction Bank Corporation was the third largest single name concentration at 4% and 4% of 2018 and 2017 portfolio values respectively."
                    },
                    {
                        data: [84, 83, 81, 84, 83], color: "#e88300",
                        label: "Rest of portfolio"
                    }
                ]
            }
        }
    }
};
