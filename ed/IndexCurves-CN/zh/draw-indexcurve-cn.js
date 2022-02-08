var data = [
  {
    "returns"  : 2021,
    "central"  : 0,
    "lacc"     : 0,
    "hacc"     : 0
  },
  {
    "returns"  : 2022,
    "central"  : 6.26,
    "lacc"     : 6.51,
    "hacc"     : 6.72
  },
  {
    "returns"  : 2023,
    "central"  : 13.358168,
    "lacc"     : 12.847345,
    "hacc"     : 14.489216
  },
  {
    "returns"  : 2024,
    "central"  : 21.31591139,
    "lacc"     : 19.74231778,
    "hacc"     : 22.72099063
  },
  {
    "returns"  : 2025,
    "central"  : 30.09918338,
    "lacc"     : 27.90874385,
    "hacc"     : 31.42190887
  },
  {
    "returns"  : 2026,
    "central"  : 40.02575107,
    "lacc"     : 38.03911637,
    "hacc"     : 40.83171754
  },
  {
    "returns"  : 2027,
    "central"  : 51.0877854,
    "lacc"     : 50.13134296,
    "hacc"     : 51.54901125
  },
  {
    "returns"  : 2028,
    "central"  : 63.08415557,
    "lacc"     : 63.94342651,
    "hacc"     : 63.15766551
  },
  {
    "returns"  : 2029,
    "central"  : 76.1145796,
    "lacc"     : 78.99343306,
    "hacc"     : 75.67185845
  },
  {
    "returns"  : 2030,
    "central"  : 90.397472,
    "lacc"     : 95.58612431,
    "hacc"     : 89.37426341
  },
  {
    "returns"  : 2031,
    "central"  : 105.8577467,
    "lacc"     : 113.6778408,
    "hacc"     : 105.168077
  },
  {
    "returns"  : 2032,
    "central"  : 122.6351531,
    "lacc"     : 127.0968092,
    "hacc"     : 123.4895863
  },
  {
    "returns"  : 2033,
    "central"  : 140.646337,
    "lacc"     : 141.1086823,
    "hacc"     : 143.2460657
  },
  {
    "returns"  : 2034,
    "central"  : 160.6199829,
    "lacc"     : 156.4431945,
    "hacc"     : 165.5517299
  },
  {
    "returns"  : 2035,
    "central"  : 182.8248055,
    "lacc"     : 173.4710227,
    "hacc"     : 190.6994787
  },
  {
    "returns"  : 2036,
    "central"  : 207.571976,
    "lacc"     : 192.3678703,
    "hacc"     : 219.2461675
  },
  {
    "returns"  : 2037,
    "central"  : 235.0381534,
    "lacc"     : 213.3598834,
    "hacc"     : 251.6815782
  },
  {
    "returns"  : 2038,
    "central"  : 265.4596177,
    "lacc"     : 236.6425227,
    "hacc"     : 288.4674712
  },
  {
    "returns"  : 2039,
    "central"  : 299.2280864,
    "lacc"     : 262.42934,
    "hacc"     : 330.1888776
  },
  {
    "returns"  : 2040,
    "central"  : 344.8598567,
    "lacc"     : 290.988772,
    "hacc"     : 387.8772061
  },
  {
    "returns"  : 2041,
    "central"  : 398.0650956,
    "lacc"     : 322.2678737,
    "hacc"     : 456.8630431
  }

]

var icCNAssetPath = "/ed/IndexCurves-CN/zh/";
// var icCNAssetPath = "./";

var chartICCNColorLACC   = "rgb(250, 182, 0)";
var chartICCNColorHACC     = "rgb(149, 186, 41)";
var chartICCNColorCentral   = "#49176D";
// var chartICCNLowArea       = "#D50065";
// var chartICCNHighArea      = "#009ee4";

var width = 900, height = 350;

var chartICCNx = d3.scaleLinear().range([60, width]);
var chartICCNy = d3.scaleLinear().range([height, 0]);


var chartICCNXAxis = d3.axisBottom()
    .scale(chartICCNx)
    .tickFormat(function(d) {
        return d;
    })
    .tickValues([2021,2026,2031,2036,2041]);

var chartICCNYAxis = d3.axisLeft()
    .scale(chartICCNy)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chartICCNLineCentral = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICCNx(d.returns); })
    .y(function(d) { return chartICCNy(d.central); })
    .curve(d3.curveBasis);

var chartICCNLineLACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICCNx(d.returns); })
    .y(function(d) { return chartICCNy(d.lacc); })
    .curve(d3.curveBasis);

var chartICCNLineHACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICCNx(d.returns); })
    .y(function(d) { return chartICCNy(d.hacc); })
    .curve(d3.curveBasis);



// var chartICCNAreaCentralasek = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICCNx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICCNy(d.central); })
//     .curve(d3.curveBasis);

// var areaEquity = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICCNx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICCNy(d.lacc); })
//     .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chartICCNsvg = d3.select("#chart_indexcurve-cn")
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


  chartICCNx.domain([
    d3.min(data, function(d) { return 2021; }),
    d3.max(data, function(d) { return 2041; })
  ]);

  chartICCNy.domain([
    d3.min(data, function(d) { return 0; }),
    d3.max(data, function(d) { return 457; })
  ]);

  chartICCNsvg.datum(data);

// Custom added line for the Global Bond Line towards the end of the path, to make it straight drop
// chartICCNsvg.append("line")
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
  // chartICCNsvg.append("clipPath")
  //   .attr("id", "customBondLineEnd")
  //   .append("rect")
  //   .attr("x", width/2)
  //   .attr("y", height-65)
  //   .attr("width", 150)
  //   .attr("height", 80);


// chartICCNsvg.append("clipPath")
//     .attr("id", "chartICCNMaskClip3")
//     .append("rect")
//     .attr("width", 0)
//     .attr("height", height);

//this mask is to cut both the edges of line charts
chartICCNsvg.append("clipPath")
    .attr("id", "chartICCNMaskVisible")
    .append("rect")
    .attr("x", 0)
    .attr("width", 895)
    .attr("height", height);

  //this mask is to cut bond line
// chartICCNsvg.append("clipPath")
//     .attr("id", "chartICCNMaskVisible2")
//     .append("rect")
//     .attr("x", 180)
//     .attr("width", 335)
//     .attr("height", height);

// chartICCNsvg.append("line")
//     .style("stroke", "black")
//     .style("stroke-dasharray", ("3,3"))
//     .attr("x1", chartICCNx(0))     // x position of the first end of the line
//     .attr("y1", chartICCNy(0))      // y position of the first end of the line
//     .attr("x2", chartICCNx(0))     // x position of the second end of the line
//     .attr("y2", 0);    // y position of the second end of the line


  // ==============================

  // showCentralTemasekHighArea(chartICCNHighArea);

  var chartICCNhaccPath=chartICCNsvg.append("path")
      .attr("id", "chartICCNHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICCNColorHACC)
      .attr("d", chartICCNLineHACC)
      .attr("clip-path", "url(#chartICCNMaskVisible)");


  var chartICCNlaccPath=chartICCNsvg.append("path")
      .attr("id", "chartICCNLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICCNColorLACC)
      .attr("d", chartICCNLineLACC)
      .attr("clip-path", "url(#chartICCNMaskVisible)");


  var chartICCNcentralPath=chartICCNsvg.append("path")
        .attr("id", "chartICCNCentralGraphLine")
        .attr("stroke-width", 5)
        .attr("class", "line")
        .style("stroke", chartICCNColorCentral)
        .attr("d", chartICCNLineCentral)
        .attr("clip-path", "url(#chartICCNMaskVisible)");

      // showCentralTemasekLowArea(chartICCNLowArea);

    transitionFunc(chartICCNcentralPath,0);
    transitionDashFunc(chartICCNlaccPath,2000,4,4);
    transitionDashFunc(chartICCNhaccPath,4000,9,6);

    // chartICCNShowCentralToolTipA();
    // chartICCNShowCentralToolTipB();
  // showCentral();

  chartICCNsvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(chartICCNXAxis)
  // chartICCNsvg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  //   .append("text")
  //     .attr("y", 45)
  //     .attr("x", width/2 - 10)
  //     // .attr("dy", ".71em")
  //     .style("text-anchor", "middle")
  //     .text("Year");

  chartICCNsvg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(60,0)")
      .call(chartICCNYAxis);

  var Yaxis_label="市场指数值";
  //created a function to draw each letter vertically on Y axis
   var DrawYaxis=function(Yaxis_label){
      for(var i=0;i<Yaxis_label.length;i++){
        chartICCNsvg.append("g")
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

  chartICCNsvg.append("g")
    .attr("class", "tick")
    .append("text")
      .attr("y", height+4)
      .attr("x", 61)
      .style("text-anchor", "end")
      .text("指数 = 100 -");



  // =====================================


//animation of area fill and the callout image
  setTimeout(function() {
    d3.select("#chartICCNMaskClip3 rect")
    .transition().duration(1000)
    .attr("width", width);
  }, 1000);


addTickMargin();

// chartICCNsvg.append("text")
//     .attr("x", 8)
//     .attr("y", height + 20)
//     .text("-ve")
//     .style("text-anchor", "start");
// chartICCNsvg.append("text")
//     .attr("x", width - 35)
//     .attr("y", height + 20)
//     .text("+ve")
//     .style("text-anchor", "start");

// =====================================

chartICCNsvg.append("line")
    .attr("id", "chartICCNLACCLine")
    .style("stroke", chartICCNColorLACC)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", ("4, 4"))
    .attr("x1", 258)     // x position of the first end of the line
    .attr("y1", height + 50)      // y position of the first end of the line
    .attr("x2", 288)     // x position of the second end of the line
    .attr("y2", height + 50);    // y position of the second end of the line
chartICCNsvg.append("text")
    .text("缺乏决心应对气候变化 (中国)")
    .attr("x", 293)
    .attr("y", height + 55)
    .on('click', chartICCNOnClickLegendLACC);

var chartICCNLACCActive = true;

function chartICCNOnClickLegendLACC() {
  chartICCNLACCActive = !chartICCNLACCActive;

  if (chartICCNLACCActive) {
    chartICCNsvg.select("#chartICCNLACCLine").style("stroke", chartICCNColorLACC);

    chartICCNsvg.append("path")
      .attr("id", "chartICCNLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICCNColorLACC)
      .attr("d", chartICCNLineLACC)
        .style("stroke-dasharray", ("4,4"))
        .attr("clip-path", "url(#chartICCNMaskVisible)");

    if (chartICCNCentralActive) {
      hidechartICCNCentral();
      showchartICCNCentral();
    }
  } else {
    chartICCNsvg.select("#chartICCNLACCLine").style("stroke", "");
    chartICCNsvg.select("#chartICCNLACCGraphLine").remove();
  }
}

chartICCNsvg.append("line")
  .attr("id", "chartICCNHACCLine")
  .style("stroke", chartICCNColorHACC)
  .attr("stroke-width", 3)
  .attr("stroke-dasharray", ("9, 6"))
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 80)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 80);    // y position of the second end of the line
chartICCNsvg.append("text")
  .text("坚定决心应对气候变化 (中国)")
  // .style("stroke", "#40e0d0")
  .attr("x", 95)
  .attr("y", height + 85)
  .on('click', chartICCNOnClickLegendHACC);

// chartICCNsvg.append("text")
//   .attr("x", 545)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("1");

var chartICCNHACCActive = true;

function chartICCNOnClickLegendHACC() {
  chartICCNHACCActive = !chartICCNHACCActive;
  if (chartICCNHACCActive) {
    chartICCNsvg.select("#chartICCNHACCLine").style("stroke", chartICCNColorHACC);
    chartICCNsvg.append("path")
      .attr("id", "chartICCNHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICCNColorHACC)
      .style("stroke-dasharray", ("9, 6"))
      .attr("d", chartICCNLineHACC)
      .attr("clip-path", "url(#chartICCNMaskVisible)");
      if (chartICCNCentralActive) {
        hidechartICCNCentral();
        showchartICCNCentral();
      }
  } else {
    chartICCNsvg.select("#chartICCNHACCLine").style("stroke", "");
    chartICCNsvg.select("#chartICCNHACCGraphLine").remove();
  }
}

chartICCNsvg.append("line")
  .attr("id", "chartICCNCentralLine")
  .style("stroke", chartICCNColorCentral)
  .attr("stroke-width", 3)
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 50)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 50);    // y position of the second end of the line
chartICCNsvg.append("text")
  .text("基准情境 (中国)")
  .attr("x", 95)
  .attr("y", height + 55)
  .on('click', chartICCNOnClickLegendCentral);

// chartICCNsvg.append("text")
//   .attr("x", 851)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("2");

var chartICCNCentralActive = true;

function chartICCNOnClickLegendCentral() {
  chartICCNCentralActive = !chartICCNCentralActive;

  if (chartICCNCentralActive) {
    showchartICCNCentral();
  } else {
    hidechartICCNCentral();
  }
}
var animated_central=true;
function showchartICCNCentral() {
  chartICCNsvg.select("#chartICCNCentralLine").style("stroke", chartICCNColorCentral);

  // showCentralTemasekLowArea(chartICCNLowArea);
  // showCentralTemasekHighArea(chartICCNHighArea);

  var chartICCNcentralPath=chartICCNsvg.append("path")
    .attr("id", "chartICCNCentralGraphLine")
    .attr("stroke-width", 5)
    .attr("class", "line")
    .style("stroke", chartICCNColorCentral)
    .attr("d", chartICCNLineCentral)
    .attr("clip-path", "url(#chartICCNMaskVisible)");

    // if(animated_central==false) //if already drawn the line with animation, do not need to animate again if they click on the legend
    // {
    // transitionFunc(chartICCNcentralPath,6000);
    // animated_central=true;
    // }

    // chartICCNShowCentralToolTipA();
    // chartICCNShowCentralToolTipB();

}

function hidechartICCNCentral() {
  chartICCNsvg.select("#chartICCNCentralLine").style("stroke", null);
  chartICCNsvg.select("#chartICCNCentralGraphLine").remove();
  chartICCNsvg.select("#chartICCNCentralToolTipA").remove();
  chartICCNsvg.select("#chartICCNCentralToolTipB").remove();
  chartICCNsvg.select("#centralLowArea").remove();
  chartICCNsvg.select("#centralHighArea").remove();
}

// function chartICCNShowToolTip(params) {
//   var aToolTip = chartICCNsvg.append("g");
//
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 159)    // set the height
//     .attr("width", 230)
//     .attr("xlink:href", icCNAssetPath  + "chartICCN-callout1.png")
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
// function chartICCNShowToolTipB(params) {
//   var aToolTip = chartICCNsvg.append("g");
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 183)    // set the height
//     .attr("width", 550)
//     .attr("xlink:href",icCNAssetPath + "chartICCN-callout2.png")
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
// function chartICCNShowCentralToolTipA() {
//   chartICCNShowToolTip({
//     toolTipId: "chartICCNCentralToolTipA",
//     rectXCoor: chartICCNx(-45),
//     rectYCoor: chartICCNy(50),
//     isTypeA: true,
//     width: 170,
//     height: 70,
//     fillColor: "#C04C7A",
//     textColor: "white",
//     textValueLineA: "Lower likelihood of",
//     textValueLineB: "negative returns for",
//     textValueLineC: "Centralasek Portfolio",
//     maskClipId: "chartICCNMaskClip3"
//   });
// }
//
// function chartICCNShowCentralToolTipB() {
//   chartICCNShowToolTipB({
//     toolTipId: "chartICCNCentralToolTipB",
//     rectXCoor: chartICCNx(-11),
//     rectYCoor: chartICCNy(57),
//     isTypeA: false,
//     width: 170,
//     height: 70,
//     fillColor: "#14B1E7",
//     textColor: "white",
//     textValueLineA: "Higher likelihood",
//     textValueLineB: "of higher positive",
//     textValueLineC: "returns for",
//     textValueLineD: "Centralasek Portfolio",
//     maskClipId: "chartICCNMaskClip3"
//   });
// }
//
// function showCentralHighArea(fillColor) {
//   chartICCNsvg.append("path")
//     .attr("id", "CentralTemasekHighArea")
//     .attr("z-index", "-1")
//     .attr("d", areaLACC.y0(0))
//     .attr("clip-path", "url(#chartICCNClip1)")
//     .style("fill", fillColor);
// }
//
// function showCentralLowArea(fillColor) {
//   chartICCNsvg.append("rect")
//     .attr("id", "CentralTemasekLowArea")
//     .attr("z-index", "-1")
//     .attr("x", 0)
//     .attr("y", 10)
//     .attr("clip-path", "url(#chartICCNClip1)")
//     .style("fill", fillColor)
//     .attr("height", height)    // set the height
//     .attr("width", chartICCNx(0));
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
