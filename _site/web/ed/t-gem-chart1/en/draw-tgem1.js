var data = [
  {
    "returns"  : -32.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0
  },
  {
    "returns"  : -27.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0

  },
  {
    "returns"  : -22.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0
  },
  {
    "returns"  : -17.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0
  },
  {
    "returns"  : -12.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0.16
  },
  {
    "returns"  : -7.50,
    "equity"   : 1.10,
    "bond"     : 0,
    "temasek"  : 1.54
  },
  {
    "returns"  : -2.50,
    "equity"   : 13.46,
    "bond"     : 7.22,
    "temasek"  : 12.02
  },
  {
    "returns"  : 2.50,
    "equity"   : 40.52,
    "bond"     : 89.14,
    "temasek"  : 34.36
  },
  {
    "returns"  : 7.50,
    "equity"   : 31.98,
    "bond"     : 0,
    "temasek"  : 33.24
  },
  {
    "returns"  : 12.50,
    "equity"   : 10.88,
    "bond"     : 0,
    "temasek"  : 15.82
  },
  {
    "returns"  : 17.50,
    "equity"   : 1.80,
    "bond"     : 0,
    "temasek"  : 4.14
  },
  {
    "returns"  : 22.50,
    "equity"   : 0.26,
    "bond"     : 0,
    "temasek"  : 0.48
  },
  {
    "returns"  : 27.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0.18
  },
  {
    "returns"  : 32.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0.04
  },
  {
    "returns"  : 37.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0
  },
  {
    "returns"  : 42.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0.02
  },
  {
    "returns"  : 47.50,
    "equity"   : 0,
    "bond"     : 0,
    "temasek"  : 0.02
  },



]

var tgem1AssetPath = "/ed/t-gem-chart1/en/";
//var tgem1AssetPath = "./";

var chart1ColorEquity = "#EE7003";
var chart1ColorBond = "#33ABA6";
var chart1ColorTem = "#49176D";
var chart1LowArea = "#D50065";
var chart1HighArea = "#009ee4";

var width = 900, height = 250;

var chart1x = d3.scaleLinear().range([0, width]);
var chart1y = d3.scaleLinear().range([height, 0]);


var chart1XAxis = d3.axisBottom()
  .scale(chart1x)
  .tickFormat(function (d) {
    if (d == 0) {
      return d;
    }
  })
  .tickValues([-80, -60, -40, -20, 0, 20, 40, 60, 80]);

var chart1YAxis = d3.axisLeft()
  .scale(chart1y)
  .tickFormat(function (d) {
    return "";
  })
  .tickSize(0);

var chart1LineBond = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart1x(d.returns); })
  .y(function (d) { return chart1y(d.bond); })
  .curve(d3.curveBasis);

var chart1LineEquity = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart1x(d.returns); })
  .y(function (d) { return chart1y(d.equity); })
  .curve(d3.curveBasis);

var chart1LineTemasek = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart1x(d.returns); })
  .y(function (d) { return chart1y(d.temasek); })
  .curve(d3.curveBasis);


var chart1AreaTemasek = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart1x(d.returns); })
  .y0(height)
  .y1(function (d) { return chart1y(d.temasek); })
  .curve(d3.curveBasis);

var areaEquity = d3.area()
  //.interpolate("basis")
  .x(function (d) { return chart1x(d.returns); })
  .y0(height)
  .y1(function (d) { return chart1y(d.equity); })
  .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chart1svg = d3.select("#chart_tgem1")
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
  d.equity = +d.equity;
  d.bond = +d.bond;
  d.temasek = +d.temasek;
});


chart1x.domain([
  d3.min(data, function (d) { return -80; }),
  d3.max(data, function (d) { return 80; })
]);

var maxY = d3.max(data, function (d) { return Math.max(d.equity, d.bond, d.temasek); })
var maxTemasekY = d3.max(data, function (d) { return d.temasek; });

chart1y.domain([
  d3.min(data, function (d) {
    return Math.min(d.equity, d.bond, d.temasek);
  }),
  maxTemasekY / 0.58 + 10
]);

chart1svg.datum(data);

// Custom added line for the Global Bond Line towards the end of the path, to make it straight drop
// chart1svg.append("line")
// .style('display', 'none')
// .style("stroke", "#33ABA6")
// .style("stroke-width", 2.8)
// .attr("x1", 488.5).attr("x2", 465).attr("y1", 185)
// .transition()
// .duration(1700)
// .delay(2000)
// .style('display', 'block')
// .attr("x2", 496).attr("y2", 250)
// .attr("clip-path", "url(#customBondLineEnd)");
// chart1svg.append("clipPath")
//   .attr("id", "customBondLineEnd")
//   .append("rect")
//   .attr("x", width/2)
//   .attr("y", height-65)
//   .attr("width", 150)
//   .attr("height", 80);


chart1svg.append("clipPath")
  .attr("id", "chart1MaskClip3")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

//this mask is to cut both the edges of line charts
chart1svg.append("clipPath")
  .attr("id", "chart1MaskVisible")
  .append("rect")
  .attr("x", 180)
  .attr("width", 580)
  .attr("height", height);

//this mask is to cut bond line
chart1svg.append("clipPath")
  .attr("id", "chart1MaskVisible2")
  .append("rect")
  .attr("x", 180)
  .attr("width", 335)
  .attr("height", height);

chart1svg.append("line")
  .style("stroke", "black")
  .style("stroke-dasharray", ("3, 3"))
  .attr("x1", chart1x(0))     // x position of the first end of the line
  .attr("y1", chart1y(0))      // y position of the first end of the line
  .attr("x2", chart1x(0))     // x position of the second end of the line
  .attr("y2", 0);    // y position of the second end of the line


// ==============================

showTemasekHighArea(chart1HighArea);


var bondPath = chart1svg.append("path")
  .attr("id", "chart1BondGraphLine")
  .attr("stroke-width", 3)
  .attr("class", "line")
  .style("stroke", chart1ColorBond)
  .attr("d", chart1LineBond)
  .attr("clip-path", "url(#chart1MaskVisible2)");


var eqPath = chart1svg.append("path")
  .attr("id", "chart1EquGraphLine")
  .attr("stroke-width", 3)
  .attr("class", "line")
  .style("stroke", chart1ColorEquity)
  .attr("d", chart1LineEquity)
  .attr("clip-path", "url(#chart1MaskVisible)");

chart1svg.append("clipPath")       // define a clip path
  .attr("id", "chart1Clip1")
  .append("path")
  .attr("d", chart1AreaTemasek)
  .attr("clip-path", "url(#chart1MaskClip3)");

showTemasekLowArea(chart1LowArea);


var temPath = chart1svg.append("path")
  .attr("id", "chart1TemGraphLine")
  .attr("stroke-width", 5)
  .attr("class", "line")
  .style("stroke", chart1ColorTem)
  .attr("d", chart1LineTemasek)
  .attr("clip-path", "url(#chart1MaskVisible)");

transitionFunc(bondPath, 0);
transitionFunc(eqPath, 2000);
transitionFunc(temPath, 4000);

chart1ShowTemToolTipA();
chart1ShowTemToolTipB();
// showTem();

chart1svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(chart1XAxis)
chart1svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .append("text")
  .attr("y", 45)
  .attr("x", width / 2 - 10)
  // .attr("dy", ".71em")
  .style("text-anchor", "middle")
  .text("Geometric Returns (Compounded Annualised) at the End of 20-year Period (%)");

chart1svg.append("g")
  .attr("class", "y axis")
  .call(chart1YAxis);
chart1svg.append("g")
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -18)
  .attr("dy", ".71em")
  .attr("x", -height / 2 + 20)
  .style("text-anchor", "middle")
  .text("Relative Likelihood");

// =====================================


//animation of area fill and the callout image
setTimeout(function () {
  d3.select("#chart1MaskClip3 rect")
    .transition().duration(3000)
    .attr("width", width);
}, 3000);


addTickMargin();

chart1svg.append("text")
  .attr("x", 8)
  .attr("y", height + 20)
  .text("-ve")
  .style("text-anchor", "start");
chart1svg.append("text")
  .attr("x", width - 35)
  .attr("y", height + 20)
  .text("+ve")
  .style("text-anchor", "start");

// =====================================

chart1svg.append("line")
  .attr("id", "chart1EquLine")
  .style("stroke", chart1ColorEquity)
  .attr("stroke-width", 3)
  .attr("x1", 340)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 380)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line
chart1svg.append("text")
  .text("Global Equity Portfolio")
  .attr("x", 385)
  .attr("y", height + 70)
  .on('click', chart1OnClickLegendEqu);

var chart1EquActive = true;
function chart1OnClickLegendEqu() {
  chart1EquActive = !chart1EquActive;

  if (chart1EquActive) {
    chart1svg.select("#chart1EquLine").style("stroke", chart1ColorEquity);
    chart1svg.append("path")
      .attr("id", "chart1EquGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chart1ColorEquity)
      .attr("d", chart1LineEquity)
      .attr("clip-path", "url(#chart1MaskVisible)");
    if (chart1TemasekActive) {
      hideTem();
      showTem();
    }
  } else {
    chart1svg.select("#chart1EquLine").style("stroke", "");
    chart1svg.select("#chart1EquGraphLine").remove();
  }
}

chart1svg.append("line")
  .attr("id", "chart1BondLine")
  .style("stroke", chart1ColorBond)
  .attr("stroke-width", 3)
  .attr("x1", 650)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 690)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line
chart1svg.append("text")
  .text("Global Bond Portfolio")
  // .style("stroke", "#40e0d0")
  .attr("x", 695)
  .attr("y", height + 70)
  .on('click', chart1OnClickLegendBond);

chart1svg.append("text")
  .attr("x", 545)
  .attr("y", 315)
  .style("font-size", "11px")
  .text("1");

var chart1BondActive = true;
function chart1OnClickLegendBond() {
  chart1BondActive = !chart1BondActive;
  if (chart1BondActive) {
    chart1svg.select("#chart1BondLine").style("stroke", chart1ColorBond);
    chart1svg.append("path")
      .attr("id", "chart1BondGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chart1ColorBond)
      .attr("d", chart1LineBond)
      .attr("clip-path", "url(#chart1MaskVisible)");
    if (chart1TemasekActive) {
      hideTem();
      showTem();
    }
  } else {
    chart1svg.select("#chart1BondLine").style("stroke", "");
    chart1svg.select("#chart1BondGraphLine").remove();
  }
}

chart1svg.append("line")
  .attr("id", "chart1TemLine")
  .style("stroke", chart1ColorTem)
  .attr("stroke-width", 5)
  .attr("x1", 50)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line
chart1svg.append("text")
  .text("Temasek Portfolio")
  .attr("x", 95)
  .attr("y", height + 70)
  .on('click', chart1OnClickLegendTem);

chart1svg.append("text")
  .attr("x", 851)
  .attr("y", 315)
  .style("font-size", "11px")
  .text("2");

var chart1TemasekActive = true;
function chart1OnClickLegendTem() {
  chart1TemasekActive = !chart1TemasekActive;

  if (chart1TemasekActive) {
    showTem();
  } else {
    hideTem();
  }
}
var animated_temasek = true;
function showTem() {
  chart1svg.select("#chart1TemLine").style("stroke", chart1ColorTem);

  showTemasekLowArea(chart1LowArea);
  showTemasekHighArea(chart1HighArea);

  var temPath = chart1svg.append("path")
    .attr("id", "chart1TemGraphLine")
    .attr("stroke-width", 5)
    .attr("class", "line")
    .style("stroke", chart1ColorTem)
    .attr("d", chart1LineTemasek)
    .attr("clip-path", "url(#chart1MaskVisible)");

  if (animated_temasek == false) //if already drawn the line with animation, do not need to animate again if they click on the legend
  {
    transitionFunc(temPath, 6000);
    animated_temasek = true;
  }

  chart1ShowTemToolTipA();
  chart1ShowTemToolTipB();

}

function hideTem() {
  chart1svg.select("#chart1TemLine").style("stroke", null);
  chart1svg.select("#chart1TemGraphLine").remove();
  chart1svg.select("#chart1TemToolTipA").remove();
  chart1svg.select("#chart1TemToolTipB").remove();
  chart1svg.select("#temasekLowArea").remove();
  chart1svg.select("#temasekHighArea").remove();
}

function chart1ShowToolTip(params) {
  var aToolTip = chart1svg.append("g");

  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor)
    .attr("y", params.rectYCoor)
    .attr("height", 159)    // set the height
    .attr("width", 230)
    .attr("xlink:href", tgem1AssetPath + "chart1-callout1.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("x", params.rectXCoor + 12)
    .attr("y", params.rectYCoor + 22)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("x", params.rectXCoor + 12)
    .attr("y", params.rectYCoor + 42)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  params.textValueLineC ?
    aToolTip.append("text")
      .attr("x", params.rectXCoor + 12)
      .attr("y", params.rectYCoor + 62)
      .text(params.textValueLineC)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
}

function chart1ShowToolTipB(params) {
  var aToolTip = chart1svg.append("g");
  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor)
    .attr("y", params.rectYCoor)
    .attr("height", 183)    // set the height
    .attr("width", 550)
    .attr("xlink:href", tgem1AssetPath + "chart1-callout2.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("x", params.rectXCoor + 225)
    .attr("y", params.rectYCoor + 22)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("x", params.rectXCoor + 225)
    .attr("y", params.rectYCoor + 42)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  params.textValueLineC ?
    aToolTip.append("text")
      .attr("x", params.rectXCoor + 225)
      .attr("y", params.rectYCoor + 62)
      .text(params.textValueLineC)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
  params.textValueLineD ?
    aToolTip.append("text")
      .attr("x", params.rectXCoor + 225)
      .attr("y", params.rectYCoor + 82)
      .text(params.textValueLineD)
      .style('fill', params.textColor)
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")") :
    null;
}


function chart1ShowTemToolTipA() {
  chart1ShowToolTip({
    toolTipId: "chart1TemToolTipA",
    rectXCoor: chart1x(-45),
    rectYCoor: chart1y(50),
    isTypeA: true,
    width: 170,
    height: 70,
    fillColor: "#C04C7A",
    textColor: "white",
    textValueLineA: "Lower likelihood of",
    textValueLineB: "negative returns for",
    textValueLineC: "Temasek Portfolio",
    maskClipId: "chart1MaskClip3"
  });
}

function chart1ShowTemToolTipB() {
  chart1ShowToolTipB({
    toolTipId: "chart1TemToolTipB",
    rectXCoor: chart1x(-11),
    rectYCoor: chart1y(57),
    isTypeA: false,
    width: 170,
    height: 70,
    fillColor: "#14B1E7",
    textColor: "white",
    textValueLineA: "Higher likelihood",
    textValueLineB: "of higher positive",
    textValueLineC: "returns for",
    textValueLineD: "Temasek Portfolio",
    maskClipId: "chart1MaskClip3"
  });
}

function showTemasekHighArea(fillColor) {
  chart1svg.append("path")
    .attr("id", "temasekHighArea")
    .attr("z-index", "-1")
    .attr("d", areaEquity.y0(0))
    .attr("clip-path", "url(#chart1Clip1)")
    .style("fill", fillColor);
}

function showTemasekLowArea(fillColor) {
  chart1svg.append("rect")
    .attr("id", "temasekLowArea")
    .attr("z-index", "-1")
    .attr("x", 0)
    .attr("y", 10)
    .attr("clip-path", "url(#chart1Clip1)")
    .style("fill", fillColor)
    .attr("height", height)    // set the height
    .attr("width", chart1x(0));
}

//function to give animation for each path
function transitionFunc(pathName, animationDelay) {
  var totalLength = pathName.node().getTotalLength();
  pathName
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .ease(d3.easeLinear)
    .duration(2000)
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
  $("<span class='tooltip' title='1. The Global Equity Portfolio uses the MSCI ACWI as a proxy.<br/>2. The Global Bond Portfolio uses government bonds within the Bloomberg Barclays Global Aggregate as a proxy.' data-title='1. The Global Equity Portfolio uses the MSCI ACWI as a proxy.<br/>2. The Global Bond Portfolio uses government bonds within the Bloomberg Barclays Global Aggregate as a proxy.'>Chart Notes</span>").insertAfter($("#chart_tgem1"));

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
