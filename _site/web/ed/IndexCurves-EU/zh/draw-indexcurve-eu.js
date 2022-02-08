var data = [
  {
    "returns"  : 2021,
    "central"  : 0,
    "lacc"     : 0,
    "hacc"     : 0
  },
  {
    "returns"  : 2022,
    "central"  : 2.99,
    "lacc"     : 4.34,
    "hacc"     : 4.62
  },
  {
    "returns"  : 2023,
    "central"  : 5.904617,
    "lacc"     : 7.793654,
    "hacc"     : 8.522326
  },
  {
    "returns"  : 2024,
    "central"  : 9.272383821,
    "lacc"     : 11.71734301,
    "hacc"     : 12.57020876
  },
  {
    "returns"  : 2025,
    "central"  : 12.84559077,
    "lacc"     : 15.96260204,
    "hacc"     : 15.81223077
  },
  {
    "returns"  : 2026,
    "central"  : 16.80647101,
    "lacc"     : 20.10246693,
    "hacc"     : 18.89283611
  },
  {
    "returns"  : 2027,
    "central"  : 20.98814267,
    "lacc"     : 24.46218648,
    "hacc"     : 22.17427839
  },
  {
    "returns"  : 2028,
    "central"  : 25.50100039,
    "lacc"     : 29.05484116,
    "hacc"     : 25.64402789
  },
  {
    "returns"  : 2029,
    "central"  : 30.25748831,
    "lacc"     : 33.90730319,
    "hacc"     : 29.32539791
  },
  {
    "returns"  : 2030,
    "central"  : 35.40265909,
    "lacc"     : 39.02256217,
    "hacc"     : 33.23102493
  },
  {
    "returns"  : 2031,
    "central"  : 40.81876546,
    "lacc"     : 44.41663759,
    "hacc"     : 37.38783291
  },
  {
    "returns"  : 2032,
    "central"  : 46.66274422,
    "lacc"     : 50.23662808,
    "hacc"     : 43.19933824
  },
  {
    "returns"  : 2033,
    "central"  : 53.17457007,
    "lacc"     : 56.72685041,
    "hacc"     : 51.10394171
  },
  {
    "returns"  : 2034,
    "central"  : 60.74139383,
    "lacc"     : 63.93628553,
    "hacc"     : 60.35150294
  },
  {
    "returns"  : 2035,
    "central"  : 69.18031701,
    "lacc"     : 72.00195078,
    "hacc"     : 70.82245608
  },
  {
    "returns"  : 2036,
    "central"  : 78.21454593,
    "lacc"     : 80.61924851,
    "hacc"     : 82.31880738
  },
  {
    "returns"  : 2037,
    "central"  : 93.00635325,
    "lacc"     : 90.26431639,
    "hacc"     : 100.3683693
  },
  {
    "returns"  : 2038,
    "central"  : 109.0644818,
    "lacc"     : 100.5385895,
    "hacc"     : 120.5254273
  },
  {
    "returns"  : 2039,
    "central"  : 126.4795532,
    "lacc"     : 111.4879965,
    "hacc"     : 143.0190208
  },
  {
    "returns"  : 2040,
    "central"  : 145.3679479,
    "lacc"     : 123.1621339,
    "hacc"     : 168.1228857
  },
  {
    "returns"  : 2041,
    "central"  : 165.8807084,
    "lacc"     : 135.5922647,
    "hacc"     : 196.1953518
  }

]

var icEUAssetPath = "/ed/IndexCurves-EU/zh/";
// var icEUAssetPath = "./";

var chartICEUColorLACC   = "rgb(250, 182, 0)";
var chartICEUColorHACC     = "rgb(149, 186, 41)";
var chartICEUColorCentral   = "#49176D";
// var chartICEULowArea       = "#D50065";
// var chartICEUHighArea      = "#009ee4";

var width = 900, height = 350;

var chartICEUx = d3.scaleLinear().range([60, width]);
var chartICEUy = d3.scaleLinear().range([height, 0]);


var chartICEUXAxis = d3.axisBottom()
    .scale(chartICEUx)
    .tickFormat(function(d) {
        return d;
    })
    .tickValues([2021,2026,2031,2036,2041]);

var chartICEUYAxis = d3.axisLeft()
    .scale(chartICEUy)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chartICEULineCentral = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICEUx(d.returns); })
    .y(function(d) { return chartICEUy(d.central); })
    .curve(d3.curveBasis);

var chartICEULineLACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICEUx(d.returns); })
    .y(function(d) { return chartICEUy(d.lacc); })
    .curve(d3.curveBasis);

var chartICEULineHACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICEUx(d.returns); })
    .y(function(d) { return chartICEUy(d.hacc); })
    .curve(d3.curveBasis);



// var chartICEUAreaCentralasek = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICEUx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICEUy(d.central); })
//     .curve(d3.curveBasis);

// var areaEquity = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICEUx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICEUy(d.lacc); })
//     .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chartICEUsvg = d3.select("#chart_indexcurve-eu")
  .append("div")
  .classed("ed-container", true) //container class to make it responsive
  .append("div")
  .classed("ed-svg-container", true) //container class to make it responsive
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 " + (width+100) + " "  + (height+150))
  .classed("ed-svg-content-responsive", true)
  .append("g")
  .attr("transform", "translate(" + 30 + "," + 30 + ")");


  data.forEach(function(d) {
    d.returns = +d.returns;
    d.lacc = +d.lacc;
    d.hacc = +d.hacc;
    d.central = +d.central;
  });


  chartICEUx.domain([
    d3.min(data, function(d) { return 2021; }),
    d3.max(data, function(d) { return 2041; })
  ]);

  chartICEUy.domain([
    d3.min(data, function(d) { return 0; }),
    d3.max(data, function(d) { return 457; })
  ]);

  chartICEUsvg.datum(data);

// Custom added line for the Global Bond Line towards the end of the path, to make it straight drop
// chartICEUsvg.append("line")
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
  // chartICEUsvg.append("clipPath")
  //   .attr("id", "customBondLineEnd")
  //   .append("rect")
  //   .attr("x", width/2)
  //   .attr("y", height-65)
  //   .attr("width", 150)
  //   .attr("height", 80);


// chartICEUsvg.append("clipPath")
//     .attr("id", "chartICEUMaskClip3")
//     .append("rect")
//     .attr("width", 0)
//     .attr("height", height);

//this mask is to cut both the edges of line charts
chartICEUsvg.append("clipPath")
    .attr("id", "chartICEUMaskVisible")
    .append("rect")
    .attr("x", 0)
    .attr("width", 895)
    .attr("height", height);

  //this mask is to cut bond line
// chartICEUsvg.append("clipPath")
//     .attr("id", "chartICEUMaskVisible2")
//     .append("rect")
//     .attr("x", 180)
//     .attr("width", 335)
//     .attr("height", height);

// chartICEUsvg.append("line")
//     .style("stroke", "black")
//     .style("stroke-dasharray", ("3,3"))
//     .attr("x1", chartICEUx(0))     // x position of the first end of the line
//     .attr("y1", chartICEUy(0))      // y position of the first end of the line
//     .attr("x2", chartICEUx(0))     // x position of the second end of the line
//     .attr("y2", 0);    // y position of the second end of the line


  // ==============================

  // showCentralTemasekHighArea(chartICEUHighArea);

  var chartICEUhaccPath=chartICEUsvg.append("path")
      .attr("id", "chartICEUHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICEUColorHACC)
      .attr("d", chartICEULineHACC)
      .attr("clip-path", "url(#chartICEUMaskVisible)");


  var chartICEUlaccPath=chartICEUsvg.append("path")
      .attr("id", "chartICEULACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICEUColorLACC)
      .attr("d", chartICEULineLACC)
      .attr("clip-path", "url(#chartICEUMaskVisible)");


  var chartICEUcentralPath=chartICEUsvg.append("path")
        .attr("id", "chartICEUCentralGraphLine")
        .attr("stroke-width", 5)
        .attr("class", "line")
        .style("stroke", chartICEUColorCentral)
        .attr("d", chartICEULineCentral)
        .attr("clip-path", "url(#chartICEUMaskVisible)");

      // showCentralTemasekLowArea(chartICEULowArea);

    transitionFunc(chartICEUcentralPath,0);
    transitionDashFunc(chartICEUlaccPath,2000,4,4);
    transitionDashFunc(chartICEUhaccPath,4000,9,6);

    // chartICEUShowCentralToolTipA();
    // chartICEUShowCentralToolTipB();
  // showCentral();

  chartICEUsvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(chartICEUXAxis)
  // chartICEUsvg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  //   .append("text")
  //     .attr("y", 45)
  //     .attr("x", width/2 - 10)
  //     // .attr("dy", ".71em")
  //     .style("text-anchor", "middle")
  //     .text("Year");

  chartICEUsvg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(60,0)")
      .call(chartICEUYAxis);

  var Yaxis_label="市场指数值";
  //created a function to draw each letter vertically on Y axis
   var DrawYaxis=function(Yaxis_label){
      for(var i=0;i<Yaxis_label.length;i++){
        chartICEUsvg.append("g")
        .append("text")
        .attr("y", (height/2)+(i*17))
        .attr("dy", -15)
        .attr("x", 45)
        .style("text-anchor", "middle")
        .text(Yaxis_label[i]);
      }
  }

  //calling that function
  DrawYaxis(Yaxis_label);

  chartICEUsvg.append("g")
    .attr("class", "tick")
    .append("text")
      .attr("y", height+4)
      .attr("x", 61)
      .style("text-anchor", "end")
      .text("指数 = 100 -");



  // =====================================


//animation of area fill and the callout image
  setTimeout(function() {
    d3.select("#chartICEUMaskClip3 rect")
    .transition().duration(1000)
    .attr("width", width);
  }, 1000);


addTickMargin();

// chartICEUsvg.append("text")
//     .attr("x", 8)
//     .attr("y", height + 20)
//     .text("-ve")
//     .style("text-anchor", "start");
// chartICEUsvg.append("text")
//     .attr("x", width - 35)
//     .attr("y", height + 20)
//     .text("+ve")
//     .style("text-anchor", "start");

// =====================================

chartICEUsvg.append("line")
    .attr("id", "chartICEULACCLine")
    .style("stroke", chartICEUColorLACC)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", ("4, 4"))
    .attr("x1", 278)     // x position of the first end of the line
    .attr("y1", height + 50)      // y position of the first end of the line
    .attr("x2", 308)     // x position of the second end of the line
    .attr("y2", height + 50);    // y position of the second end of the line
chartICEUsvg.append("text")
    .text("缺乏决心应对气候变化 (欧元区)")
    .attr("x", 313)
    .attr("y", height + 55)
    .on('click', chartICEUOnClickLegendLACC);

var chartICEULACCActive = true;
function chartICEUOnClickLegendLACC() {
  chartICEULACCActive = !chartICEULACCActive;

  if (chartICEULACCActive) {
    chartICEUsvg.select("#chartICEULACCLine").style("stroke", chartICEUColorLACC);

    chartICEUsvg.append("path")
      .attr("id", "chartICEULACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICEUColorLACC)
      .attr("d", chartICEULineLACC)
        .style("stroke-dasharray", ("4,4"))
        .attr("clip-path", "url(#chartICEUMaskVisible)");

    if (chartICEUCentralActive) {
      hidechartICEUCentral();
      showchartICEUCentral();
    }
  } else {
    chartICEUsvg.select("#chartICEULACCLine").style("stroke", "");
    chartICEUsvg.select("#chartICEULACCGraphLine").remove();
  }
}

chartICEUsvg.append("line")
  .attr("id", "chartICEUHACCLine")
  .style("stroke", chartICEUColorHACC)
  .attr("stroke-width", 3)
  .attr("stroke-dasharray", ("9, 6"))
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 80)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 80);    // y position of the second end of the line
chartICEUsvg.append("text")
  .text("坚定决心应对气候变化 (欧元区)")
  // .style("stroke", "#40e0d0")
  .attr("x", 95)
  .attr("y", height + 85)
  .on('click', chartICEUOnClickLegendHACC);

// chartICEUsvg.append("text")
//   .attr("x", 545)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("1");

var chartICEUHACCActive = true;
function chartICEUOnClickLegendHACC() {
  chartICEUHACCActive = !chartICEUHACCActive;
  if (chartICEUHACCActive) {
    chartICEUsvg.select("#chartICEUHACCLine").style("stroke", chartICEUColorHACC);
    chartICEUsvg.append("path")
      .attr("id", "chartICEUHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICEUColorHACC)
      .style("stroke-dasharray", ("9, 6"))
      .attr("d", chartICEULineHACC)
      .attr("clip-path", "url(#chartICEUMaskVisible)");
      if (chartICEUCentralActive) {
        hidechartICEUCentral();
        showchartICEUCentral();
      }
  } else {
    chartICEUsvg.select("#chartICEUHACCLine").style("stroke", "");
    chartICEUsvg.select("#chartICEUHACCGraphLine").remove();
  }
}

chartICEUsvg.append("line")
  .attr("id", "chartICEUCentralLine")
  .style("stroke", chartICEUColorCentral)
  .attr("stroke-width", 3)
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 50)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 50);    // y position of the second end of the line
chartICEUsvg.append("text")
  .text("基准情境 (欧元区)")
  .attr("x", 95)
  .attr("y", height + 55)
  .on('click', chartICEUOnClickLegendCentral);

// chartICEUsvg.append("text")
//   .attr("x", 851)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("2");

var chartICEUCentralActive = true;
function chartICEUOnClickLegendCentral() {
  chartICEUCentralActive = !chartICEUCentralActive;

  if (chartICEUCentralActive) {
    showchartICEUCentral();
  } else {
    hidechartICEUCentral();
  }
}
var animated_central=true;
function showchartICEUCentral() {
  chartICEUsvg.select("#chartICEUCentralLine").style("stroke", chartICEUColorCentral);

  // showCentralTemasekLowArea(chartICEULowArea);
  // showCentralTemasekHighArea(chartICEUHighArea);

  var chartICEUcentralPath=chartICEUsvg.append("path")
    .attr("id", "chartICEUCentralGraphLine")
    .attr("stroke-width", 5)
    .attr("class", "line")
    .style("stroke", chartICEUColorCentral)
    .attr("d", chartICEULineCentral)
    .attr("clip-path", "url(#chartICEUMaskVisible)");

    // if(animated_central==false) //if already drawn the line with animation, do not need to animate again if they click on the legend
    // {
    // transitionFunc(chartICEUcentralPath,6000);
    // animated_central=true;
    // }

    // chartICEUShowCentralToolTipA();
    // chartICEUShowCentralToolTipB();

}

function hidechartICEUCentral() {
  chartICEUsvg.select("#chartICEUCentralLine").style("stroke", null);
  chartICEUsvg.select("#chartICEUCentralGraphLine").remove();
  chartICEUsvg.select("#chartICEUCentralToolTipA").remove();
  chartICEUsvg.select("#chartICEUCentralToolTipB").remove();
  chartICEUsvg.select("#centralLowArea").remove();
  chartICEUsvg.select("#centralHighArea").remove();
}

// function chartICEUShowToolTip(params) {
//   var aToolTip = chartICEUsvg.append("g");
//
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 159)    // set the height
//     .attr("width", 230)
//     .attr("xlink:href", icEUAssetPath  + "chartICEU-callout1.png")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   aToolTip
//     .append("text")
//     .attr("x", params.rectXCoor + 12)
//     .attr("y", params.rectYCoor + 22)
//     .text(params.textValueLineA)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   aToolTip
//     .append("text")
//     .attr("x", params.rectXCoor + 12)
//     .attr("y", params.rectYCoor + 42)
//     .text(params.textValueLineB)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   params.textValueLineC ?
//     aToolTip.append("text")
//     .attr("x", params.rectXCoor + 12)
//     .attr("y", params.rectYCoor + 62)
//     .text(params.textValueLineC)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")") :
//     null;
// }
//
// function chartICEUShowToolTipB(params) {
//   var aToolTip = chartICEUsvg.append("g");
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 183)    // set the height
//     .attr("width", 550)
//     .attr("xlink:href",icEUAssetPath + "chartICEU-callout2.png")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   aToolTip
//     .append("text")
//     .attr("x", params.rectXCoor + 225)
//     .attr("y", params.rectYCoor + 22)
//     .text(params.textValueLineA)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   aToolTip
//     .append("text")
//     .attr("x", params.rectXCoor + 225)
//     .attr("y", params.rectYCoor + 42)
//     .text(params.textValueLineB)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")");
//   params.textValueLineC ?
//     aToolTip.append("text")
//     .attr("x", params.rectXCoor + 225)
//     .attr("y", params.rectYCoor + 62)
//     .text(params.textValueLineC)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")") :
//     null;
//   params.textValueLineD ?
//     aToolTip.append("text")
//     .attr("x", params.rectXCoor + 225)
//     .attr("y", params.rectYCoor + 82)
//     .text(params.textValueLineD)
//     .style('fill', params.textColor)
//     .style("text-anchor", "start")
//     .attr("clip-path", "url(#" + params.maskClipId + ")") :
//     null;
// }
//
//
// function chartICEUShowCentralToolTipA() {
//   chartICEUShowToolTip({
//     toolTipId: "chartICEUCentralToolTipA",
//     rectXCoor: chartICEUx(-45),
//     rectYCoor: chartICEUy(50),
//     isTypeA: true,
//     width: 170,
//     height: 70,
//     fillColor: "#C04C7A",
//     textColor: "white",
//     textValueLineA: "Lower likelihood of",
//     textValueLineB: "negative returns for",
//     textValueLineC: "Centralasek Portfolio",
//     maskClipId: "chartICEUMaskClip3"
//   });
// }
//
// function chartICEUShowCentralToolTipB() {
//   chartICEUShowToolTipB({
//     toolTipId: "chartICEUCentralToolTipB",
//     rectXCoor: chartICEUx(-11),
//     rectYCoor: chartICEUy(57),
//     isTypeA: false,
//     width: 170,
//     height: 70,
//     fillColor: "#14B1E7",
//     textColor: "white",
//     textValueLineA: "Higher likelihood",
//     textValueLineB: "of higher positive",
//     textValueLineC: "returns for",
//     textValueLineD: "Centralasek Portfolio",
//     maskClipId: "chartICEUMaskClip3"
//   });
// }
//
// function showCentralHighArea(fillColor) {
//   chartICEUsvg.append("path")
//     .attr("id", "CentralTemasekHighArea")
//     .attr("z-index", "-1")
//     .attr("d", areaLACC.y0(0))
//     .attr("clip-path", "url(#chartICEUClip1)")
//     .style("fill", fillColor);
// }
//
// function showCentralLowArea(fillColor) {
//   chartICEUsvg.append("rect")
//     .attr("id", "CentralTemasekLowArea")
//     .attr("z-index", "-1")
//     .attr("x", 0)
//     .attr("y", 10)
//     .attr("clip-path", "url(#chartICEUClip1)")
//     .style("fill", fillColor)
//     .attr("height", height)    // set the height
//     .attr("width", chartICEUx(0));
// }

//function to give animation for each path
function transitionFunc(pathName,animationDelay) {
      var totalLength = pathName.node().getTotalLength();
      pathName
      // .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dasharray", totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .ease(d3.easeLinear)
      .duration(2000)
      .delay(animationDelay)
      .attr("stroke-dashoffset", 0);
}

function transitionDashFunc(pathName,animationDelay,dashA,dashB) {
      var totalLength = pathName.node().getTotalLength();

      var dashing = (dashA + "," + dashB)

      var dashLength = dashing
                  		.split(/[\s,]/)
                  		.map(function (a) { return parseFloat(a) || 0 })
                  		.reduce(function (a, b) { return a + b });

      var dashCount = Math.ceil( totalLength / dashLength);
      var newDashes = new Array(dashCount).join( dashing + " " );
      var dashArray = newDashes + " 0, " + totalLength;

            pathName
            .attr("stroke-dashoffset", totalLength-15)
            .attr("stroke-dasharray", dashArray)
            .transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .delay(animationDelay)
            .attr("stroke-dashoffset", 0);
}


function addTickMargin(){
  d3.select('.x.axis .tick text').attr('y', 8);
}

resize();
function resize(){
  var svg = d3.select("svg.ed-svg-content-responsive");
  var svgHeight = svg.style("height");
  d3.selectAll('.ed-svg-container').style('height',svgHeight)
}
