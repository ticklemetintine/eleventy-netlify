var app = app || {};

if (! app.data) {
    app.data = {};
}

if (! app.lang) {
    app.lang = {};
}

app.lang.en = {
    tooltip: function(d){
        var yearFormat = d3.format("04d"),
            actual = (d.actual === null) ? "" : "<br>Actual TSR was <strong>" + d.actual + "%</strong>.";
        
        var verbTense = (d.year === app.data.simulationData[app.data.simulationData.length - 1].year) ? "is" : "was";
        
        return "For the year <strong>" + yearFormat(d.year) + "/" + yearFormat(d.year + 1) + "</strong>, the simulated five-in-six chance portfolio return " + verbTense + " between <strong>" + d.low + "%</strong> and <strong>+" + d.high + "%</strong>, corresponding to a period of <strong><span style='color:" + d3.rgb(this.volatilityColors[d.volatility]).darker() + "'>" + d.volatility + "</span></strong> market volatility." + actual;
    }
};

app.lang.zh = {
    "Volatility of Returns": "回报波动性",
    "Year (beginning 1 April)": "财政年度（开始于4月1日）",
    "Simulated Returns": "模拟回报",
    "Actual TSR": "实际股东总回报率",
    "Relative Likelihood": "相对几率",
    "Potential Portfolio Returns (%)": "潜在投资组合回报 (%)",
    "low": "较低",
    "medium": "中等",
    "high": "较高",
    "During Global Financial Crisis": "在全球金融危机时期",
    tooltip: function(d, volatility){
        var yearFormat = d3.format("04d"),
            actual = (d.actual === null) ? "" : "实际股东总回报率是<strong>" + d.actual + "%</strong>。"

        return "<strong>" + yearFormat(d.year) + "/" + yearFormat(d.year + 1) + "</strong>的财政年度，我们模拟的回报区间有六分之五的几率获得<strong>" + d.low + "%</strong>至<strong>+" + d.high + "%</strong>的回报率，与<strong><span style='color:" + d3.rgb(this.volatilityColors[d.volatility]).darker() + "'>" + volatility + "</span></strong>的市场波动时期相呼应。" + actual;
    }
    
// Actual TSR a year later was [XX]%.1年后实际股东总回报率是[XX]%。

};