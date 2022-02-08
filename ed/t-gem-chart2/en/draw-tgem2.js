var data = [
  {
    "returns": -95,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0
  },
  {
    "returns": -85,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0
  },
  {
    "returns": -75,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0
  },
  {
    "returns": -65,
    "gequity": 0.01,
    "gbond": 0,
    "temasek": 0.01
  },
  {
    "returns": -55,
    "gequity": 0.08,
    "gbond": 0,
    "temasek": 0.07
  },
  {
    "returns": -45,
    "gequity": 0.47,
    "gbond": 0.0,
    "temasek": 0.56
  },
  {
    "returns": -35,
    "gequity": 2.05,
    "gbond": 0.01,
    "temasek": 2.31
  },
  {
    "returns": -25,
    "gequity": 6.01,
    "gbond": 0.16,
    "temasek": 6.44
  },
  {
    "returns": -15,
    "gequity": 12.33,
    "gbond": 4.86,
    "temasek": 12.03
  },
  {
    "returns": -5,
    "gequity": 17.98,
    "gbond": 34.08,
    "temasek": 16.99
  },
  {
    "returns": 5,
    "gequity": 19.73,
    "gbond": 44.07,
    "temasek": 18.22
  },
  {
    "returns": 15,
    "gequity": 17.02,
    "gbond": 14.61,
    "temasek": 15.98
  },
  {
    "returns": 25,
    "gequity": 11.79,
    "gbond": 2.00,
    "temasek": 11.69
  },
  {
    "returns": 35,
    "gequity": 6.90,
    "gbond": 0.19,
    "temasek": 7.51
  },
  {
    "returns": 45,
    "gequity": 3.34,
    "gbond": 0.02,
    "temasek": 4.18
  },
  {
    "returns": 55,
    "gequity": 1.41,
    "gbond": 0.01,
    "temasek": 2.06
  },
  {
    "returns": 65,
    "gequity": 0.61,
    "gbond": 0,
    "temasek": 0.99
  },
  {
    "returns": 75,
    "gequity": 0.20,
    "gbond": 0,
    "temasek": 0.50
  },
  {
    "returns": 85,
    "gequity": 0.08,
    "gbond": 0,
    "temasek": 0.24
  },
  {
    "returns": 95,
    "gequity": 0.02,
    "gbond": 0,
    "temasek": 0.10
  },
  {
    "returns": 105,
    "gequity": 0.01,
    "gbond": 0,
    "temasek": 0.05
  },
  {
    "returns": 115,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0.03
  },
  {
    "returns": 125,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0.02
  },
  {
    "returns": 135,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0.01
  },
  {
    "returns": 145,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0.01
  },
  {
    "returns": 155,
    "gequity": 0,
    "gbond": 0,
    "temasek": 0.01
  },
]

var tgem2AssetPath = "/ed/t-gem-chart2/en/";
// var tgem2AssetPath = "./";

var colorEquity = "#EE7003";
var colorBond = "#33ABA6";
var colorTem = "#49176D";

var width = 900, height = 250;

var chart2x = d3.scaleLinear().range([0, width]);
var chart2y = d3.scaleLinear().range([height, 0]);

var chart2XAxis = d3.axisBottom()
  .scale(chart2x)
  .tickFormat(function (d) {
    if (d == 0) {
      return d;
    }
  })
  .tickValues([-80, -60, -40, -20, 0, 20, 40, 60, 80]);


var chart2YAxis = d3.axisLeft()
  .scale(chart2y)
  .tickFormat(function (d) {
    return "";
  })
  .tickSize(0);

var chart2LineGEquity = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart2x(d.returns); })
  .y(function (d) { return chart2y(d.gequity); })
  .curve(d3.curveBasis);

var chart2LineGBond = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart2x(d.returns); })
  .y(function (d) { return chart2y(d.gbond); })
  .curve(d3.curveBasis);

var chart2LineTemasek = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart2x(d.returns); })
  .y(function (d) { return chart2y(d.temasek); })
  .curve(d3.curveBasis);

d3.select(window).on("resize", resize);

var chart2svg = d3.select("#chart_tgem2")
  .append("div")
  .classed("ed-container", true) //container class to make it responsive
  .append("div")
  .classed("ed-svg-container", true) //container class to make it responsive
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 " + (width + 100) + " " + (height + 100))
  .classed("ed-svg-content-responsive", true)
  .append("g")
  .attr("transform", "translate(" + 50 + "," + 20 + ")");


data.forEach(function (d) {
  d.returns = +d.returns;
  d.gbond = +d.gbond;
  d.gequity = +d.gequity;
  d.temasek = +d.temasek;
});

chart2x.domain([
  d3.min(data, function (d) { return -80; }),
  d3.max(data, function (d) { return 80; })
]);

var maxY = d3.max(data, function (d) { return Math.max(d.gbond, d.gequity, d.temasek); });
var maxTemasekY = d3.max(data, function (d) { return d.temasek; });

chart2y.domain([
  d3.min(data, function (d) {
    //return Math.min(d.gbond, d.gequity, d.temasek);
    return Math.min(d.gbond, d.gequity, d.temasek);
  }),
  //maxTemasekY / 0.48
  maxY
]);

chart2svg.datum(data);

chart2svg.append("clipPath")
  .attr("id", "chart2MaskClip2")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

chart2svg.append("clipPath")
  .attr("id", "chart2MaskVisible")
  .append("rect")
  .attr("x", 0)
  .attr("width", width)
  .attr("height", height);

chart2svg.append("clipPath")
  .attr("id", "chart2MaskClip3")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);



chart2svg.append("line")
  .style("stroke", "black")
  .style("stroke-dasharray", ("3, 3"))
  .attr("x1", chart2x(0))       // x position of the first end of the line
  .attr("y1", chart2y(0))       // y position of the first end of the line
  .attr("x2", chart2x(0))       // x position of the second end of the line
  .attr("y2", 0);         // y position of the second end of the line

// ==============================

var GBondPath = chart2svg.append("path")
  .attr("id", "chart2BondGraphLine")
  .attr("class", "line")
  .style("stroke", colorBond)
  .attr("stroke-width", 3)
  .attr("d", chart2LineGBond)
  .attr("clip-path", "url(#chart2MaskVisible)");

var GEquityPath = chart2svg.append("path")
  .attr("id", "chart2EquGraphLine")
  .attr("class", "line")
  .style("stroke", colorEquity)
  .attr("stroke-width", 3)
  .attr("d", chart2LineGEquity)
  .attr("clip-path", "url(#chart2MaskVisible)");

var temPath = chart2svg.append("path")
  .attr("id", "chart2TemGraphLine")
  .attr("class", "line")
  .style("stroke", colorTem)
  .attr("stroke-width", 5)
  .attr("d", chart2LineTemasek)
  .attr("clip-path", "url(#chart2MaskVisible)");

transitionFunc(GBondPath, 0);
transitionFunc(GEquityPath, 2500);
transitionFunc(temPath, 5000);


chart2svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(chart2XAxis)

chart2svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .append("text")
  .attr("y", 45)
  .attr("x", width / 2 - 10)
  // .attr("dy", ".71em")
  .style("text-anchor", "middle")
  .text("Year-to-year Annual Returns during 20-year Period (%)");

chart2svg.append("g")
  .attr("class", "y axis")
  .call(chart2YAxis)

chart2svg.append("g")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -18)
  .attr("dy", ".71em")
  .attr("x", -height / 2 + 20)
  .style("text-anchor", "middle")
  .text("Relative Likelihood");

chart2ShowToolTipA();
chart2ShowTemToolTipB();



setTimeout(function () {
  d3.select("#chart2MaskClip2 rect")
    .transition().duration(2000)
    .attr("width", width);
}, 200);

setTimeout(function () {
  d3.select("#chart2MaskClip3 rect")
    .transition().duration(2200)
    .attr("width", width);
}, 5200);

addTickMargin();


chart2svg.append("line")
  .attr("id", "chart2EquLine")
  .style("stroke", colorEquity)
  .attr("stroke-width", 3)
  .attr("x1", 340)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 380)     // x position of the second end of the line
  .attr("y2", height + 65);

chart2svg.append("text")
  .text("Global Equity Portfolio")
  // .style("stroke", colorEquity)
  .attr("x", 385)
  .attr("y", height + 70)
  .on('click', chart2OnClickLegendEqu);


chart2svg.append("line")
  .attr("id", "chart2BondLine")
  .style("stroke", colorBond)
  .attr("stroke-width", 3)
  .attr("x1", 650)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 690)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line

chart2svg.append("text")
  .text("Global Bond Portfolio")
  // .style("stroke", colorEquity)
  .attr("x", 695)
  .attr("y", height + 70)
  .on('click', chart2OnClickLegendThem);

chart2svg.append("text")
  .attr("x", 545)
  .attr("y", 313)
  .style("font-size", "13px")
  .text("1");


chart2svg.append("line")
  .attr("id", "chart2TemLine")
  .style("stroke", colorTem)
  .attr("stroke-width", 5)
  .attr("x1", 50)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 65);

chart2svg.append("text")
  .text("Temasek Portfolio")
  // .style("stroke", colorEquity)
  .attr("x", 95)
  .attr("y", height + 70)
  .on('click', chart2OnClickLegendTem);

chart2svg.append("text")
  .attr("x", 851)
  .attr("y", 315)
  .style("font-size", "13px")
  .text("2");


var chart2BondActive = true;
function chart2OnClickLegendThem() {
  chart2BondActive = !chart2BondActive;

  if (chart2BondActive) {
    chart2svg.select("#chart2BondLine").style("stroke", colorBond);
    chart2svg.append("path")
      .attr("id", "chart2BondGraphLine")
      .attr("class", "line")
      .style("stroke", colorBond)
      .attr("stroke-width", 3)
      .attr("d", chart2LineGBond)
      .attr("clip-path", "url(#chart2MaskVisible)");
    chart2ShowToolTipA();
  } else {
    chart2svg.select("#chart2BondLine").style("stroke", "");
    chart2svg.select("#chart2BondGraphLine").remove();
    chart2RemoveToolTipA();
  }
}


var chart2EquActive = true;
function chart2OnClickLegendEqu() {
  chart2EquActive = !chart2EquActive;

  if (chart2EquActive) {
    chart2svg.select("#chart2EquLine").style("stroke", colorEquity);
    chart2svg.append("path")
      .attr("id", "chart2EquGraphLine")
      .attr("class", "line")
      .style("stroke", colorEquity)
      .attr("stroke-width", 3)
      .attr("d", chart2LineGEquity)
      .attr("clip-path", "url(#chart2MaskVisible)");
  } else {
    chart2svg.select("#chart2EquLine").style("stroke", "");
    chart2svg.select("#chart2EquGraphLine").remove();
  }
}

var chart2TemasekActive = true;
function chart2OnClickLegendTem() {
  chart2TemasekActive = !chart2TemasekActive;

  if (chart2TemasekActive) {
    chart2svg.select("#chart2TemLine").style("stroke", colorTem);
    chart2svg.append("path")
      .attr("id", "chart2TemGraphLine")
      .attr("class", "line")
      .style("stroke", colorTem)
      .attr("stroke-width", 5)
      .attr("clip-path", "url(#chart2MaskVisible)");
    chart2svg.select("#chart2TemGraphLine").attr("d", chart2LineTemasek);
    chart2ShowTemToolTipB();
  } else {
    chart2svg.select("#chart2TemLine").style("stroke", "");
    chart2svg.select("#chart2TemGraphLine").remove();
    chart2RemoveToolTipB();
  }
}

chart2svg.append("text")
  .attr("x", 8)
  .attr("y", height + 20)
  .text("-ve")
  .style("text-anchor", "start");

chart2svg.append("text")
  .attr("x", width - 35)
  .attr("y", height + 20)
  .text("+ve")
  .style("text-anchor", "start");

function chart2RemoveToolTipA() {
  chart2svg.select("#chart2TemToolTipA").remove();
  chart2svg.select("#chart2TemToolTipATextA").remove();
  chart2svg.select("#chart2TemToolTipATextB").remove();
  chart2svg.select("#chart2TemToolTipATextC").remove();
  chart2svg.select("#chart2TemToolTipATextD").remove();
  chart2svg.select("#chart2TemToolTipATextE").remove();
}
function chart2RemoveToolTipB() {
  chart2svg.select("#chart2TemToolTipB").remove();
  chart2svg.select("#chart2TemToolTipBTextA").remove();
  chart2svg.select("#chart2TemToolTipBTextB").remove();
  chart2svg.select("#chart2TemToolTipBTextC").remove();
  chart2svg.select("#chart2TemToolTipBTextD").remove();
}

function chart2ShowToolTipA() {
  chart2ShowToolTip({
    toolTipId: "chart2TemToolTipA",
    rectXCoor: chart2x(-67.5),
    rectYCoor: chart2y(42.8),
    width: 200,
    textColor: "black",
    dotted: false,
    outlineColor: colorBond,
    textValueLineA: "Narrower curve for",
    textValueLineB: "Global Bond Portfolio",
    textValueLineC: "means less volatility",
    textValueLineD: "in year-to-year",
    textValueLineE: "annual returns",
    maskClipId: "chart2MaskClip2"
  });
}

function chart2ShowTemToolTipB() {
  chart2ShowToolTipB({
    toolTipId: "chart2TemToolTipB",
    rectXCoor: chart2x(20),
    rectYCoor: chart2y(37),
    width: 200,
    textColor: "black",
    dotted: false,
    outlineColor: colorBond,
    textValueLineA: "Wider curve of",
    textValueLineB: "greater annual",
    textValueLineC: "volatility for",
    textValueLineD: "Temasek Portfolio",
    maskClipId: "chart2MaskClip3"
  });
}

function chart2ShowToolTip(params) {
  params.textValueLineE ?
    params.height = 50 + 20 * 2 :
    params.textValueLineD ?
      params.height = 50 + 20 :
      null;

  var aToolTip = chart2svg.append("g");

  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor + 50)
    .attr("y", params.rectYCoor - 4)
    .attr("height", 160)    // set the height
    .attr("width", 293)
    .attr("xlink:href", tgem2AssetPath + "chart2-callout1.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextA")
    .attr("x", params.rectXCoor + 90)
    .attr("y", params.rectYCoor + 20)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextB")
    .attr("x", params.rectXCoor + 90)
    .attr("y", params.rectYCoor + 40)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  params.textValueLineC ?
    aToolTip.append("text")
      .attr("id", params.toolTipId + "TextC")
      .attr("x", params.rectXCoor + 90)
      .attr("y", params.rectYCoor + 60)
      .text(params.textValueLineC)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
  params.textValueLineD ?
    aToolTip.append("text")
      .attr("id", params.toolTipId + "TextD")
      .attr("x", params.rectXCoor + 90)
      .attr("y", params.rectYCoor + 80)
      .text(params.textValueLineD)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
  params.textValueLineE ?
    aToolTip.append("text")
      .attr("id", params.toolTipId + "TextE")
      .attr("x", params.rectXCoor + 90)
      .attr("y", params.rectYCoor + 100)
      .text(params.textValueLineE)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
}

function chart2ShowToolTipB(params) {
  params.textValueLineD ?
    params.height = 50 + 20 * 2 :
    params.textValueLineC ?
      params.height = 50 + 20 :
      null;

  var aToolTip = chart2svg.append("g");

  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor + 28)
    .attr("y", params.rectYCoor + 2)
    .attr("height", 148)    // set the height
    .attr("width", 180)
    .attr("xlink:href", tgem2AssetPath + "chart2-callout2.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextA")
    .attr("x", params.rectXCoor + 52)
    .attr("y", params.rectYCoor + 26)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextB")
    .attr("x", params.rectXCoor + 52)
    .attr("y", params.rectYCoor + 46)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  params.textValueLineC ?
    aToolTip.append("text")
      .attr("id", params.toolTipId + "TextC")
      .attr("x", params.rectXCoor + 52)
      .attr("y", params.rectYCoor + 66)
      .text(params.textValueLineC)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
  params.textValueLineD ?
    aToolTip.append("text")
      .attr("id", params.toolTipId + "TextD")
      .attr("x", params.rectXCoor + 52)
      .attr("y", params.rectYCoor + 86)
      .text(params.textValueLineD)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
}



//function to give animation for each path
function transitionFunc(pathName, animationDelay) {
  var totalLength = pathName.node().getTotalLength();
  pathName
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .ease(d3.easeLinear)
    .duration(6000)
    .delay(animationDelay)
    .attr("stroke-dashoffset", 0);
}

function addTickMargin() {
  d3.select('.x.axis .tick text').attr('y', 8);
}

resize();
function resize() {
  var svg = d3.select("svg.ed-svg-content-responsive");
  var svgHeight = svg.style("height");
  d3.selectAll('.ed-svg-container').style('height', svgHeight)
}

// This jQuery snippet adds the Chart Notes for TGEMS Chart
$(document).ready(function () {
  $("<span class='tooltip' title='1. The Global Equity Portfolio uses the MSCI ACWI as a proxy.<br/>2. The Global Bond Portfolio uses government bonds within the Bloomberg Barclays Global Aggregate as a proxy.' data-title='1. The Global Equity Portfolio uses the MSCI ACWI as a proxy.<br/>2. The Global Bond Portfolio uses government bonds within the Bloomberg Barclays Global Aggregate as a proxy.'>Chart Notes</span>").insertAfter($("#chart_tgem2"));

  $(".tooltip").tooltipster({
    interactive: true,
    contentAsHTML: true,
    maxWidth: 300,
    contentCloning: true,
    trigger: "custom",
    triggerOpen: {
      mouseenter: true,
      tap: true,
      click: true
    },
    triggerClose: {
      click: true,
      mouseleave: true,
      scroll: true,
      tap: true
    }
  });
});
