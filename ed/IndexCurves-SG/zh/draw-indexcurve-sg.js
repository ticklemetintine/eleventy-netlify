var data = [
  {
    "returns"  : 2021,
    "central"  : 0,
    "lacc"     : 0,
    "hacc"     : 0
  },
  {
    "returns"  : 2022,
    "central"  : 3.91,
    "lacc"     : 4.91,
    "hacc"     : 3.9
  },
  {
    "returns"  : 2023,
    "central"  : 8.024836,
    "lacc"     : 10.040099,
    "hacc"     : 8.40926
  },
  {
    "returns"  : 2024,
    "central"  : 12.39984186,
    "lacc"     : 15.42105984,
    "hacc"     : 13.14674466
  },
  {
    "returns"  : 2025,
    "central"  : 17.30047496,
    "lacc"     : 21.08823388,
    "hacc"     : 18.14783078
  },
  {
    "returns"  : 2026,
    "central"  : 22.89570762,
    "lacc"     : 27.43325733,
    "hacc"     : 23.80711187
  },
  {
    "returns"  : 2027,
    "central"  : 29.77786725,
    "lacc"     : 34.1999633,
    "hacc"     : 29.82413751
  },
  {
    "returns"  : 2028,
    "central"  : 38.00578403,
    "lacc"     : 41.63464127,
    "hacc"     : 36.74376404
  },
  {
    "returns"  : 2029,
    "central"  : 47.18316867,
    "lacc"     : 50.51513327,
    "hacc"     : 45.08513364
  },
  {
    "returns"  : 2030,
    "central"  : 57.35352562,
    "lacc"     : 61.24686228,
    "hacc"     : 54.63173544
  },
  {
    "returns"  : 2031,
    "central"  : 68.76165623,
    "lacc"     : 73.11463134,
    "hacc"     : 65.53327278
  },
  {
    "returns"  : 2032,
    "central"  : 81.1487618,
    "lacc"     : 83.12065703,
    "hacc"     : 79.40496104
  },
  {
    "returns"  : 2033,
    "central"  : 95.67689249,
    "lacc"     : 93.8698396,
    "hacc"     : 95.46170506
  },
  {
    "returns"  : 2034,
    "central"  : 111.44845,
    "lacc"     : 105.521417,
    "hacc"     : 113.2096279
  },
  {
    "returns"  : 2035,
    "central"  : 128.5757745,
    "lacc"     : 118.0582234,
    "hacc"     : 132.8249136
  },
  {
    "returns"  : 2036,
    "central"  : 147.1589849,
    "lacc"     : 131.4688041,
    "hacc"     : 154.5241956
  },
  {
    "returns"  : 2037,
    "central"  : 168.1922146,
    "lacc"     : 145.81987,
    "hacc"     : 179.8239006
  },
  {
    "returns"  : 2038,
    "central"  : 191.0421912,
    "lacc"     : 161.1590299,
    "hacc"     : 207.9462026
  },
  {
    "returns"  : 2039,
    "central"  : 215.8680902,
    "lacc"     : 177.533701,
    "hacc"     : 239.2027422
  },
  {
    "returns"  : 2040,
    "central"  : 242.8432251,
    "lacc"     : 195.0460776,
    "hacc"     : 273.937103
  },
  {
    "returns"  : 2041,
    "central"  : 272.1220365,
    "lacc"     : 213.7815035,
    "hacc"     : 312.5274121
  }

]

var icSGAssetPath = "/ed/IndexCurves-SG/zh/";
// var icSGAssetPath = "./";

var chartICSGColorLACC   = "rgb(250, 182, 0)";
var chartICSGColorHACC     = "rgb(149, 186, 41)";
var chartICSGColorCentral   = "#49176D";
// var chartICSGLowArea       = "#D50065";
// var chartICSGHighArea      = "#009ee4";

var width = 900, height = 350;

var chartICSGx = d3.scaleLinear().range([60, width]);
var chartICSGy = d3.scaleLinear().range([height, 0]);


var chartICSGXAxis = d3.axisBottom()
    .scale(chartICSGx)
    .tickFormat(function(d) {
        return d;
    })
    .tickValues([2021,2026,2031,2036,2041]);

var chartICSGYAxis = d3.axisLeft()
    .scale(chartICSGy)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chartICSGLineCentral = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICSGx(d.returns); })
    .y(function(d) { return chartICSGy(d.central); })
    .curve(d3.curveBasis);

var chartICSGLineLACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICSGx(d.returns); })
    .y(function(d) { return chartICSGy(d.lacc); })
    .curve(d3.curveBasis);

var chartICSGLineHACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICSGx(d.returns); })
    .y(function(d) { return chartICSGy(d.hacc); })
    .curve(d3.curveBasis);



// var chartICSGAreaCentralasek = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICSGx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICSGy(d.central); })
//     .curve(d3.curveBasis);

// var areaEquity = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICSGx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICSGy(d.lacc); })
//     .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chartICSGsvg = d3.select("#chart_indexcurve-sg")
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


  chartICSGx.domain([
    d3.min(data, function(d) { return 2021; }),
    d3.max(data, function(d) { return 2041; })
  ]);

  chartICSGy.domain([
    d3.min(data, function(d) { return 0; }),
    d3.max(data, function(d) { return 457; })
  ]);

  chartICSGsvg.datum(data);

// Custom added line for the Global Bond Line towards the end of the path, to make it straight drop
// chartICSGsvg.append("line")
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
  // chartICSGsvg.append("clipPath")
  //   .attr("id", "customBondLineEnd")
  //   .append("rect")
  //   .attr("x", width/2)
  //   .attr("y", height-65)
  //   .attr("width", 150)
  //   .attr("height", 80);


// chartICSGsvg.append("clipPath")
//     .attr("id", "chartICSGMaskClip3")
//     .append("rect")
//     .attr("width", 0)
//     .attr("height", height);

//this mask is to cut both the edges of line charts
chartICSGsvg.append("clipPath")
    .attr("id", "chartICSGMaskVisible")
    .append("rect")
    .attr("x", 0)
    .attr("width", 895)
    .attr("height", height);

  //this mask is to cut bond line
// chartICSGsvg.append("clipPath")
//     .attr("id", "chartICSGMaskVisible2")
//     .append("rect")
//     .attr("x", 180)
//     .attr("width", 335)
//     .attr("height", height);

// chartICSGsvg.append("line")
//     .style("stroke", "black")
//     .style("stroke-dasharray", ("3,3"))
//     .attr("x1", chartICSGx(0))     // x position of the first end of the line
//     .attr("y1", chartICSGy(0))      // y position of the first end of the line
//     .attr("x2", chartICSGx(0))     // x position of the second end of the line
//     .attr("y2", 0);    // y position of the second end of the line


  // ==============================

  // showCentralTemasekHighArea(chartICSGHighArea);

  var chartICSGhaccPath=chartICSGsvg.append("path")
      .attr("id", "chartICSGHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICSGColorHACC)
      .attr("d", chartICSGLineHACC)
      .attr("clip-path", "url(#chartICSGMaskVisible)");


  var chartICSGlaccPath=chartICSGsvg.append("path")
      .attr("id", "chartICSGLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICSGColorLACC)
      .attr("d", chartICSGLineLACC)
      .attr("clip-path", "url(#chartICSGMaskVisible)");


  var chartICSGcentralPath=chartICSGsvg.append("path")
        .attr("id", "chartICSGCentralGraphLine")
        .attr("stroke-width", 5)
        .attr("class", "line")
        .style("stroke", chartICSGColorCentral)
        .attr("d", chartICSGLineCentral)
        .attr("clip-path", "url(#chartICSGMaskVisible)");

      // showCentralTemasekLowArea(chartICSGLowArea);

    transitionFunc(chartICSGcentralPath,0);
    transitionDashFunc(chartICSGlaccPath,2000,4,4);
    transitionDashFunc(chartICSGhaccPath,4000,9,6);

    // chartICSGShowCentralToolTipA();
    // chartICSGShowCentralToolTipB();
  // showCentral();

  chartICSGsvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(chartICSGXAxis)
  // chartICSGsvg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  //   .append("text")
  //     .attr("y", 45)
  //     .attr("x", width/2 - 10)
  //     // .attr("dy", ".71em")
  //     .style("text-anchor", "middle")
  //     .text("Year");

  chartICSGsvg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(60,0)")
      .call(chartICSGYAxis);

  var Yaxis_label="市场指数值";
  //created a function to draw each letter vertically on Y axis
   var DrawYaxis=function(Yaxis_label){
      for(var i=0;i<Yaxis_label.length;i++){
        chartICSGsvg.append("g")
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

  chartICSGsvg.append("g")
    .attr("class", "tick")
    .append("text")
      .attr("y", height+4)
      .attr("x", 61)
      .style("text-anchor", "end")
      .text("指数 = 100 -");



  // =====================================


//animation of area fill and the callout image
  setTimeout(function() {
    d3.select("#chartICSGMaskClip3 rect")
    .transition().duration(1000)
    .attr("width", width);
  }, 1000);


addTickMargin();

// chartICSGsvg.append("text")
//     .attr("x", 8)
//     .attr("y", height + 20)
//     .text("-ve")
//     .style("text-anchor", "start");
// chartICSGsvg.append("text")
//     .attr("x", width - 35)
//     .attr("y", height + 20)
//     .text("+ve")
//     .style("text-anchor", "start");

// =====================================

chartICSGsvg.append("line")
    .attr("id", "chartICSGLACCLine")
    .style("stroke", chartICSGColorLACC)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", ("4, 4"))
    .attr("x1", 278)     // x position of the first end of the line
    .attr("y1", height + 50)      // y position of the first end of the line
    .attr("x2", 308)     // x position of the second end of the line
    .attr("y2", height + 50);    // y position of the second end of the line
chartICSGsvg.append("text")
    .text("缺乏决心应对气候变化 (新加坡)")
    .attr("x", 313)
    .attr("y", height + 55)
    .on('click', chartICSGOnClickLegendLACC);

var chartICSGLACCActive = true;
function chartICSGOnClickLegendLACC() {
  chartICSGLACCActive = !chartICSGLACCActive;

  if (chartICSGLACCActive) {
    chartICSGsvg.select("#chartICSGLACCLine").style("stroke", chartICSGColorLACC);

    chartICSGsvg.append("path")
      .attr("id", "chartICSGLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICSGColorLACC)
      .attr("d", chartICSGLineLACC)
        .style("stroke-dasharray", ("4,4"))
        .attr("clip-path", "url(#chartICSGMaskVisible)");

    if (chartICSGCentralActive) {
      hidechartICSGCentral();
      showchartICSGCentral();
    }
  } else {
    chartICSGsvg.select("#chartICSGLACCLine").style("stroke", "");
    chartICSGsvg.select("#chartICSGLACCGraphLine").remove();
  }
}

chartICSGsvg.append("line")
  .attr("id", "chartICSGHACCLine")
  .style("stroke", chartICSGColorHACC)
  .attr("stroke-width", 3)
  .attr("stroke-dasharray", ("9, 6"))
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 80)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 80);    // y position of the second end of the line
chartICSGsvg.append("text")
  .text("坚定决心应对气候变化 (新加坡)")
  // .style("stroke", "#40e0d0")
  .attr("x", 95)
  .attr("y", height + 85)
  .on('click', chartICSGOnClickLegendHACC);

// chartICSGsvg.append("text")
//   .attr("x", 545)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("1");

var chartICSGHACCActive = true;
function chartICSGOnClickLegendHACC() {
  chartICSGHACCActive = !chartICSGHACCActive;
  if (chartICSGHACCActive) {
    chartICSGsvg.select("#chartICSGHACCLine").style("stroke", chartICSGColorHACC);
    chartICSGsvg.append("path")
      .attr("id", "chartICSGHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICSGColorHACC)
      .style("stroke-dasharray", ("9, 6"))
      .attr("d", chartICSGLineHACC)
      .attr("clip-path", "url(#chartICSGMaskVisible)");
      if (chartICSGCentralActive) {
        hidechartICSGCentral();
        showchartICSGCentral();
      }
  } else {
    chartICSGsvg.select("#chartICSGHACCLine").style("stroke", "");
    chartICSGsvg.select("#chartICSGHACCGraphLine").remove();
  }
}

chartICSGsvg.append("line")
  .attr("id", "chartICSGCentralLine")
  .style("stroke", chartICSGColorCentral)
  .attr("stroke-width", 3)
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 50)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 50);    // y position of the second end of the line
chartICSGsvg.append("text")
  .text("基准情境 (新加坡)")
  .attr("x", 95)
  .attr("y", height + 55)
  .on('click', chartICSGOnClickLegendCentral);

// chartICSGsvg.append("text")
//   .attr("x", 851)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("2");

var chartICSGCentralActive = true;
function chartICSGOnClickLegendCentral() {
  chartICSGCentralActive = !chartICSGCentralActive;

  if (chartICSGCentralActive) {
    showchartICSGCentral();
  } else {
    hidechartICSGCentral();
  }
}
var animated_central=true;
function showchartICSGCentral() {
  chartICSGsvg.select("#chartICSGCentralLine").style("stroke", chartICSGColorCentral);

  // showCentralTemasekLowArea(chartICSGLowArea);
  // showCentralTemasekHighArea(chartICSGHighArea);

  var chartICSGcentralPath=chartICSGsvg.append("path")
    .attr("id", "chartICSGCentralGraphLine")
    .attr("stroke-width", 5)
    .attr("class", "line")
    .style("stroke", chartICSGColorCentral)
    .attr("d", chartICSGLineCentral)
    .attr("clip-path", "url(#chartICSGMaskVisible)");

    // if(animated_central==false) //if already drawn the line with animation, do not need to animate again if they click on the legend
    // {
    // transitionFunc(chartICSGcentralPath,6000);
    // animated_central=true;
    // }

    // chartICSGShowCentralToolTipA();
    // chartICSGShowCentralToolTipB();

}

function hidechartICSGCentral() {
  chartICSGsvg.select("#chartICSGCentralLine").style("stroke", null);
  chartICSGsvg.select("#chartICSGCentralGraphLine").remove();
  chartICSGsvg.select("#chartICSGCentralToolTipA").remove();
  chartICSGsvg.select("#chartICSGCentralToolTipB").remove();
  chartICSGsvg.select("#centralLowArea").remove();
  chartICSGsvg.select("#centralHighArea").remove();
}

// function chartICSGShowToolTip(params) {
//   var aToolTip = chartICSGsvg.append("g");
//
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 159)    // set the height
//     .attr("width", 230)
//     .attr("xlink:href", icSGAssetPath  + "chartICSG-callout1.png")
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
// function chartICSGShowToolTipB(params) {
//   var aToolTip = chartICSGsvg.append("g");
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 183)    // set the height
//     .attr("width", 550)
//     .attr("xlink:href",icSGAssetPath + "chartICSG-callout2.png")
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
// function chartICSGShowCentralToolTipA() {
//   chartICSGShowToolTip({
//     toolTipId: "chartICSGCentralToolTipA",
//     rectXCoor: chartICSGx(-45),
//     rectYCoor: chartICSGy(50),
//     isTypeA: true,
//     width: 170,
//     height: 70,
//     fillColor: "#C04C7A",
//     textColor: "white",
//     textValueLineA: "Lower likelihood of",
//     textValueLineB: "negative returns for",
//     textValueLineC: "Centralasek Portfolio",
//     maskClipId: "chartICSGMaskClip3"
//   });
// }
//
// function chartICSGShowCentralToolTipB() {
//   chartICSGShowToolTipB({
//     toolTipId: "chartICSGCentralToolTipB",
//     rectXCoor: chartICSGx(-11),
//     rectYCoor: chartICSGy(57),
//     isTypeA: false,
//     width: 170,
//     height: 70,
//     fillColor: "#14B1E7",
//     textColor: "white",
//     textValueLineA: "Higher likelihood",
//     textValueLineB: "of higher positive",
//     textValueLineC: "returns for",
//     textValueLineD: "Centralasek Portfolio",
//     maskClipId: "chartICSGMaskClip3"
//   });
// }
//
// function showCentralHighArea(fillColor) {
//   chartICSGsvg.append("path")
//     .attr("id", "CentralTemasekHighArea")
//     .attr("z-index", "-1")
//     .attr("d", areaLACC.y0(0))
//     .attr("clip-path", "url(#chartICSGClip1)")
//     .style("fill", fillColor);
// }
//
// function showCentralLowArea(fillColor) {
//   chartICSGsvg.append("rect")
//     .attr("id", "CentralTemasekLowArea")
//     .attr("z-index", "-1")
//     .attr("x", 0)
//     .attr("y", 10)
//     .attr("clip-path", "url(#chartICSGClip1)")
//     .style("fill", fillColor)
//     .attr("height", height)    // set the height
//     .attr("width", chartICSGx(0));
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
