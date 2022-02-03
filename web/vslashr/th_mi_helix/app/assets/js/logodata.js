var app = app || {};

if (! app.config) {
    app.config = {
        lang: "en"
    };
}

if (! app.lang) {
    app.lang = {};
}

app.lang.zh = {
    "Our portfolio companies have added much to the strength, reputation, and potential of Temasek.": "我们的投资组合公司增强了淡马锡的优势、信誉和潜力。",
    "Our diversified portfolio spans a wide range of sectors and industries.": "我们的多元投资组合涵盖各种行业领域。",
    "We invest across geographies to deliver a better, smarter and more sustainable world.": "我们在多个地理区域进行投资，以实现更美好、更智能、更可持续的世界。",
};

var allSectors = [
    {
        sector: "finance",
        image: "finance.png",
        image_zh: "finance_zh.png",
        count: 13,
        x: -1000
    },
    {
        sector: "telecoms",
        image: "telecoms.png",
        image_zh: "telecoms_zh.png",
        count: 11,
        x: -600
    },
    {
        sector: "estate",
        image: "estate.png",
        image_zh: "estate_zh.png",
        count: 10,
        x: -200
    },
    {
        sector: "transport",
        image: "transport.png",
        image_zh: "transport_zh.png",
        count: 7,
        x: 200
    },
    {
        sector: "life",
        image: "life.png",
        image_zh: "life_zh.png",
        count: 5,
        x: 600
    },
    {
        sector: "energy",
        image: "energy.png",
        image_zh: "energy_zh.png",
        count: 3,
        x: 1000
    }
];

var animData = [
    {
        state: "helix",
        camera:
            {
                x: 0,
                y: 0,
                z: 1800
            }
    },
    {
        state: "sector",
        camera:
            {
                x: 0,
                y: 0,
                z: 1600
            }
    },
    {
        state: "globe",
        camera:
            {
                x: 0,
                y: 0,
                z: 1400
            }
    },
    {
        state: "singleicon",
        camera:
            {
                x: 0,
                y: 0,
                z: 500
            }
    },
];

var menuData = [
    {
        state: "helix",
        text: "Our portfolio companies have added much to the strength, reputation, and potential of Temasek."
    },
    {
        state: "sector",
        text: "Our diversified portfolio spans a wide range of sectors and industries."
    },
    {
        state: "globe",
        text: "We invest across geographies to deliver a better, smarter and more sustainable world."
    }
];

var logoData = [
    {
        name: "Adyen N.V.",
        sector: "finance",
        image: "Adyen N.V(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "adyen",
        categoryCount: 1
    },
    {
        name: "AIA Group Limited",
        name_zh: "友邦保险控股有限公司",
        sector: "finance",
        image: "AIA Group Limited(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "aia",
        categoryCount: 2
    },
    {
        name: "China Construction Bank Corporation",
        name_zh: "中国建设银行股份有限公司",
        sector: "finance",
        image: "China Construction Bank Corporation(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "ccbc",
        categoryCount: 3
    },
    {
        name: "DBS Group Holdings Ltd",
        name_zh: "星展集团控股有限公司",
        sector: "finance",
        image: "DBS Group Holdings(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "dbs",
        categoryCount: 4
    },
    {
        name: "HDFC Bank Limited",
        sector: "finance",
        image: "HDFC Bank Limited(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "hdfc",
        categoryCount: 5
    },
    {
        name: "Industrial and Commercial Bank of China Limited",
        name_zh: "中国工商银行股份有限公司",
        sector: "finance",
        image: "ICBC_Bank(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "icbc",
        categoryCount: 6
    },
    {
        name: "Mastercard Incorporated",
        sector: "finance",
        image: "Mastercard Incorporated(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "mastercard",
        categoryCount: 7
    },
    {
        name: "Paypal Holdings, Inc.",
        sector: "finance",
        image: "PayPal Holdings(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "paypal",
        categoryCount: 8
    },
    {
        name: "Ping An Insurance (Group) Company of China, Ltd.",
        name_zh: "中国平安保险（集团）股份有限公司",
        sector: "finance",
        image: "Ping An Insurance(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "pingan",
        categoryCount: 9
    },
    {
        name: "PT Bank Danamon Indonesia Tbk",
        sector: "finance",
        image: "PT Bank Danamon Indonesia Tbk(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "ptbank",
        categoryCount: 10
    },
    {
        name: "Standard Chartered PLC",
        name_zh: "渣打集团有限公司",
        sector: "finance",
        image: "Standard Chartered(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "stanchart",
        categoryCount: 11
    },
    {
        name: "Virtu Financial, Inc.",
        sector: "finance",
        image: "Virtu Financial(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "virtu",
        categoryCount: 12
    },
    {
        name: "Visa Inc.",
        sector: "finance",
        image: "Visa Inc(centre)_300X100.png",
        en: "/our-major-investments/financial-services.html",
        zh: "/zh/our-major-investments/financial-services.html",
        id: "visa",
        categoryCount: 13
    },
    {
        name: "Alibaba Group Holding Limited",
        name_zh: "阿里巴巴集团控股有限公司",
        sector: "telecoms",
        image: "Alibaba Group Holding Limited(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "alibaba",
        categoryCount: 1
    },
    {
        name: "CenturyLink, Inc.",
        sector: "telecoms",
        image: "CenturyLink(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "centurylink",
        categoryCount: 2
    },
    {
        name: "Dell Technologies, Inc",
        sector: "telecoms",
        image: "Dell Technologies(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "dell",
        categoryCount: 3
    },
    {
        name: "Global Healthcare Exchange, LLC.",
        sector: "telecoms",
        image: "Global Healthcare Exchange(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "ghx",
        categoryCount: 4
    },
    {
        name: "IHS Markit Ltd.",
        sector: "telecoms",
        image: "IHS Markit Ltd(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "ihs",
        categoryCount: 5
    },
    {
        name: "Intouch Holdings Public Company Limited",
        sector: "telecoms",
        image: "Intouch Holdings(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "intouch",
        categoryCount: 6
    },
    {
        name: "Mediacorp Pte Ltd",
        name_zh: "新传媒私人有限公司",
        sector: "telecoms",
        image: "Mediacorp Pte Ltd(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "mediacorp",
        categoryCount: 7
    },
    {
        name: "Meituan Dianping",
        sector: "telecoms",
        image: "Meituan Dianping(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "meituan",
        categoryCount: 8
    },
    {
        name: "Singapore Technologies Telemedia Pte Ltd",
        name_zh: "新加坡电信有限公司",
        sector: "telecoms",
        image: "Singapore Technologies Telemedia(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "sttelemedia",
        categoryCount: 9
    },
    {
        name: "Singapore Telecommunications Limited",
        name_zh: "新加坡科技电信媒体私人有限公司",
        sector: "telecoms",
        image: "Singapore Telecommunications Limited(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "singtel",
        categoryCount: 10
    },
    {
        name: "Tencent Holdings Limited",
        name_zh: "腾讯控股有限公司",
        sector: "telecoms",
        image: "Tencent Holdings Limited(centre)_300X100.png",
        en: "/our-major-investments/telecommunications-media-and-technology.html",
        zh: "/zh/our-major-investments/telecommunications-media-and-technology.html",
        id: "tencent",
        categoryCount: 11
    },
    {
        name: "A.S. Watson Holdings Limited",
        sector: "estate",
        image: "A.S. Watson Holdings(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "aswatson",
        categoryCount: 1
    },
    {
        name: "Ascendas-Singbridge Pte Ltd",
        name_zh: "星桥腾飞私人有限公司",
        sector: "estate",
        image: "Ascendas-Singbridge(centre)_300X100.png",
        image_zh: "Ascendas-Singbridge-Bi-Lingual(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "ascendas-singbridge",
        categoryCount: 2
    },
    {
        name: "CapitaLand Limited",
        name_zh: "凯德集团有限公司",
        sector: "estate",
        image: "CapitaLand Limited(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "capitaland",
        categoryCount: 3
    },
    {
        name: "M+S Pte. Ltd.",
        sector: "estate",
        image: "MS(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "ms",
        categoryCount: 4
    },
    {
        name: "Mandai Park Holdings Pte. Ltd.",
        name_zh: "万礼生态园控股公司",
        sector: "estate",
        image: "Mandai Park Holdings(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "mandai",
        categoryCount: 5
    },
    {
        name: "Mapletree Investments Pte Ltd",
        name_zh: "丰树产业私人有限公司",
        sector: "estate",
        image: "Mapletree Investments(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "mapletree",
        categoryCount: 6
    },
    {
        name: "Olam International Limited",
        name_zh: "翱兰国际有限公司",
        sector: "estate",
        image: "Olam International Limited(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "olam",
        categoryCount: 7
    },
    {
        name: "Pulau Indah Ventures Sdn. Bhd.",
        sector: "estate",
        image: "Pulau Indah Ventures(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "pulauindah",
        categoryCount: 8
    },
    {
        name: "SATS Ltd.",
        name_zh: "新翔集团有限公司",
        sector: "estate",
        image: "SATS Ltd(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "sats",
        categoryCount: 9
    },
    {
        name: "Surbana Jurong Private Limited",
        name_zh: "盛裕控股集团",
        sector: "estate",
        image: "Surbana Jurong(centre)_300X100.png",
        en: "/our-major-investments/consumer-and-real-estate.html",
        zh: "/zh/our-major-investments/consumer-and-real-estate.html",
        id: "surbanajurong",
        categoryCount: 10
    },
    {
        name: "Keppel Corporation Limited",
        name_zh: "吉宝企业有限公司",
        sector: "transport",
        image: "Keppel Corporation Limited(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "keppel",
        categoryCount: 1
    },
    {
        name: "PSA International Pte Ltd",
        name_zh: "PSA国际港务集团",
        sector: "transport",
        image: "PSA International Pte Ltd(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "psa",
        categoryCount: 2
    },
    {
        name: "Sembcorp Industries Ltd",
        name_zh: "胜科工业有限公司",
        sector: "transport",
        image: "Sembcorp Industries Ltd(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "sembcorp",
        categoryCount: 3
    },
    {
        name: "Singapore Airlines Limited",
        name_zh: "新加坡航空公司",
        sector: "transport",
        image: "Singapore Airlines Limited(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "singaporeair",
        categoryCount: 4
    },
    {
        name: "Singapore Power Limited",
        name_zh: "新加坡能源有限公司",
        sector: "transport",
        image: "Singapore Power Limited(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "singpower",
        categoryCount: 5
    },
    {
        name: "Singapore Technologies Engineering Ltd",
        name_zh: "新加坡科技工程有限公司",
        sector: "transport",
        image: "Singapore Technologies Engineering(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "stengineering",
        categoryCount: 6
    },
    {
        name: "SMRT Corporation Ltd",
        name_zh: "SMRT 企业有限公司",
        sector: "transport",
        image: "SMRT Corporation Ltd(centre)_300X100.png",
        en: "/our-major-investments/transportation-and-industrials.html",
        zh: "/zh/our-major-investments/transportation-and-industrials.html",
        id: "smrt",
        categoryCount: 7
    },
    {
        name: "Bayer Aktiengesellschaft",
        sector: "life",
        image: "Bayer Aktiengesellschaft(centre)_300X100.png",
        en: "/our-major-investments/life-sciences-and-agribusiness.html",
        zh: "/zh/our-major-investments/life-sciences-and-agribusiness.html",
        id: "bayer",
        categoryCount: 1
    },
    {
        name: "Celltrion Healthcare Co., Ltd",
        sector: "life",
        image: "Celltrion Healthcare(centre)_300X100.png",
        en: "/our-major-investments/life-sciences-and-agribusiness.html",
        zh: "/zh/our-major-investments/life-sciences-and-agribusiness.html",
        id: "celltrionhealthcare",
        categoryCount: 2
    },
    {
        name: "Celltrion, Inc.",
        sector: "life",
        image: "Celltrion(centre)_300X100.png",
        en: "/our-major-investments/life-sciences-and-agribusiness.html",
        zh: "/zh/our-major-investments/life-sciences-and-agribusiness.html",
        id: "celltrion",
        categoryCount: 3
    },
    {
        name: "Wuxi AppTec Co., Ltd.",
        sector: "life",
        image: "WuXi AppTec(centre)_300X100.png",
        en: "/our-major-investments/life-sciences-and-agribusiness.html",
        zh: "/zh/our-major-investments/life-sciences-and-agribusiness.html",
        id: "wuxiapptec",
        categoryCount: 4
    },
    {
        name: "Wuxi Biologics (Cayman) Inc.",
        sector: "life",
        image: "Wuxi Biologics (Cayman)(centre)_300X100.png",
        en: "/our-major-investments/life-sciences-and-agribusiness.html",
        zh: "/zh/our-major-investments/life-sciences-and-agribusiness.html",
        id: "wuxibiologics",
        categoryCount: 5
    },
    {
        name: "FTS International, Inc.",
        name_zh: "FTS国际公司",
        sector: "energy",
        image: "FTS International(centre)_300X100.png",
        en: "/our-major-investments/energy-and-resources.html",
        zh: "/zh/our-major-investments/energy-and-resources.html",
        id: "fts",
        categoryCount: 1
    },
    {
        name: "Pavilion Energy Pte Ltd",
        name_zh: "蘭亭能源",
        sector: "energy",
        image: "Pavilion Energy(centre)_300X100.png",
        en: "/our-major-investments/energy-and-resources.html",
        zh: "/zh/our-major-investments/energy-and-resources.html",
        id: "pavilionenergy",
        categoryCount: 2
    },
    {
        name: "Repsol, S.A.",
        name_zh: "睿烁能源",
        sector: "energy",
        image: "Repsol S.A(centre)_300X100.png",
        en: "/our-major-investments/energy-and-resources.html",
        zh: "/zh/our-major-investments/energy-and-resources.html",
        id: "repsol",
        categoryCount: 3
    }
    
]
