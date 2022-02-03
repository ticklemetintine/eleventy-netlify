var app = app || {};

if (! app.data) {
    app.data = {};
}

app.data.strokeDashArrayTypes = ["2,2", "10,4", "1,0"];
app.data.unicodeLineTypes = ["&#x2508;", "-&thinsp;-", "&#x2500;"];

if (! app.lang) {
    app.lang = {};
}

app.lang.en = {
    marketVolatility: function(d){
        return "Periods of " + d + " market volatility.";
    }
    // yearFormat: function(d){
    //     return "Mar " + d;
    // }
};

app.lang.zh = {
    "Relative Likelihood": "相对几率",
    "Potential Portfolio Returns a Year Later (%)": "1年后潜在投资组合回报 (%)",
    "Five-in-six chance<br>range of returns": "六分之五几率<br>的回报区间",
    "Based on Monte Carlo simulation for 12-month forward portfolio returns distribution, assuming no change in market conditions or portfolio mix.": "假设市场状况或投资组合成分不变，根据蒙地卡罗模拟法测算的12个月远期投资组合回报分布。",
    "Actual<br>TSR (%) a<br>year later": "一年后<br>实际股东<br>总回报率(%)",
    "Actual TSR (%) a year later": "一年后<br>实际股东<br>总回报率(%)",
    "Low (%)": "低回报 (%)",
    "High (%)": "高回报 (%)",
    "low": "较低",
    "medium": "中等",
    "high": "较高",
    marketVolatility: function(d){
        return "市场波动" + d + "时期。";
    }
};
