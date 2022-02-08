var data = [
  {
    "returns"  : 2021,
    "central"  : 0,
    "lacc"     : 0,
    "hacc"     : 0
  },
  {
    "returns"  : 2022,
    "central"  : 6.65,
    "lacc"     : 7.06,
    "hacc"     : 4.92
  },
  {
    "returns"  : 2023,
    "central"  : 13.144985,
    "lacc"     : 14.23302,
    "hacc"     : 10.029604
  },
  {
    "returns"  : 2024,
    "central"  : 16.64116504,
    "lacc"     : 18.2083291,
    "hacc"     : 14.69485921
  },
  {
    "returns"  : 2025,
    "central"  : 20.91023168,
    "lacc"     : 23.20854142,
    "hacc"     : 19.40881792
  },
  {
    "returns"  : 2026,
    "central"  : 26.02473448,
    "lacc"     : 28.58043382,
    "hacc"     : 24.41204739
  },
  {
    "returns"  : 2027,
    "central"  : 31.48160548,
    "lacc"     : 34.30226313,
    "hacc"     : 29.74932423
  },
  {
    "returns"  : 2028,
    "central"  : 37.35883324,
    "lacc"     : 40.34586497,
    "hacc"     : 35.3804449
  },
  {
    "returns"  : 2029,
    "central"  : 44.25424667,
    "lacc"     : 47.44736574,
    "hacc"     : 41.21534207
  },
  {
    "returns"  : 2030,
    "central"  : 51.71219123,
    "lacc"     : 54.99667086,
    "hacc"     : 47.41469559
  },
  {
    "returns"  : 2031,
    "central"  : 59.60122517,
    "lacc"     : 62.97899941,
    "hacc"     : 55.02129388
  },
  {
    "returns"  : 2032,
    "central"  : 68.71445513,
    "lacc"     : 71.40501368,
    "hacc"     : 64.30706939
  },
  {
    "returns"  : 2033,
    "central"  : 79.7146376,
    "lacc"     : 80.96941344,
    "hacc"     : 77.05729797
  },
  {
    "returns"  : 2034,
    "central"  : 91.75551832,
    "lacc"     : 91.48373636,
    "hacc"     : 91.20417608
  },
  {
    "returns"  : 2035,
    "central"  : 104.6798403,
    "lacc"     : 102.6855349,
    "hacc"     : 106.7108348
  },
  {
    "returns"  : 2036,
    "central"  : 118.5776014,
    "lacc"     : 114.5831758,
    "hacc"     : 123.7438075
  },
  {
    "returns"  : 2037,
    "central"  : 136.0856673,
    "lacc"     : 127.2650415,
    "hacc"     : 144.865223
  },
  {
    "returns"  : 2038,
    "central"  : 155.0197378,
    "lacc"     : 140.764585,
    "hacc"     : 168.2498518
  },
  {
    "returns"  : 2039,
    "central"  : 175.4978227,
    "lacc"     : 155.1382307,
    "hacc"     : 194.1359625
  },
  {
    "returns"  : 2040,
    "central"  : 197.6478477,
    "lacc"     : 170.4465246,
    "hacc"     : 222.7848052
  },
  {
    "returns"  : 2041,
    "central"  : 221.5787346,
    "lacc"     : 186.75445,
    "hacc"     : 254.4822731
  }

]

var icUSAssetPath = "/ed/IndexCurves-US/zh/";
// var icUSAssetPath = "./";

var chartICUSColorLACC   = "rgb(250, 182, 0)";
var chartICUSColorHACC     = "rgb(149, 186, 41)";
var chartICUSColorCentral   = "#49176D";
// var chartICUSLowArea       = "#D50065";
// var chartICUSHighArea      = "#009ee4";

var width = 900, height = 350;

var chartICUSx = d3.scaleLinear().range([60, width]);
var chartICUSy = d3.scaleLinear().range([height, 0]);


var chartICUSXAxis = d3.axisBottom()
    .scale(chartICUSx)
    .tickFormat(function(d) {
        return d;
    })
    .tickValues([2021,2026,2031,2036,2041]);

var chartICUSYAxis = d3.axisLeft()
    .scale(chartICUSy)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chartICUSLineCentral = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICUSx(d.returns); })
    .y(function(d) { return chartICUSy(d.central); })
    .curve(d3.curveBasis);

var chartICUSLineLACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICUSx(d.returns); })
    .y(function(d) { return chartICUSy(d.lacc); })
    .curve(d3.curveBasis);

var chartICUSLineHACC = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chartICUSx(d.returns); })
    .y(function(d) { return chartICUSy(d.hacc); })
    .curve(d3.curveBasis);



// var chartICUSAreaCentralasek = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICUSx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICUSy(d.central); })
//     .curve(d3.curveBasis);

// var areaEquity = d3.area()
//     //.interpolate("basis")
//     .x(function(d) { return chartICUSx(d.returns); })
//     .y0(height)
//     .y1(function(d) { return chartICUSy(d.lacc); })
//     .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chartICUSsvg = d3.select("#chart_indexcurve-us")
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


  chartICUSx.domain([
    d3.min(data, function(d) { return 2021; }),
    d3.max(data, function(d) { return 2041; })
  ]);

  chartICUSy.domain([
    d3.min(data, function(d) { return 0; }),
    d3.max(data, function(d) { return 457; })
  ]);

  chartICUSsvg.datum(data);

// Custom added line for the Global Bond Line towards the end of the path, to make it straight drop
// chartICUSsvg.append("line")
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
  // chartICUSsvg.append("clipPath")
  //   .attr("id", "customBondLineEnd")
  //   .append("rect")
  //   .attr("x", width/2)
  //   .attr("y", height-65)
  //   .attr("width", 150)
  //   .attr("height", 80);


// chartICUSsvg.append("clipPath")
//     .attr("id", "chartICUSMaskClip3")
//     .append("rect")
//     .attr("width", 0)
//     .attr("height", height);

//this mask is to cut both the edges of line charts
chartICUSsvg.append("clipPath")
    .attr("id", "chartICUSMaskVisible")
    .append("rect")
    .attr("x", 0)
    .attr("width", 895)
    .attr("height", height);

  //this mask is to cut bond line
// chartICUSsvg.append("clipPath")
//     .attr("id", "chartICUSMaskVisible2")
//     .append("rect")
//     .attr("x", 180)
//     .attr("width", 335)
//     .attr("height", height);

// chartICUSsvg.append("line")
//     .style("stroke", "black")
//     .style("stroke-dasharray", ("3,3"))
//     .attr("x1", chartICUSx(0))     // x position of the first end of the line
//     .attr("y1", chartICUSy(0))      // y position of the first end of the line
//     .attr("x2", chartICUSx(0))     // x position of the second end of the line
//     .attr("y2", 0);    // y position of the second end of the line


  // ==============================

  // showCentralTemasekHighArea(chartICUSHighArea);

  var chartICUShaccPath=chartICUSsvg.append("path")
      .attr("id", "chartICUSHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICUSColorHACC)
      .attr("d", chartICUSLineHACC)
      .attr("clip-path", "url(#chartICUSMaskVisible)");


  var chartICUSlaccPath=chartICUSsvg.append("path")
      .attr("id", "chartICUSLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICUSColorLACC)
      .attr("d", chartICUSLineLACC)
      .attr("clip-path", "url(#chartICUSMaskVisible)");


  var chartICUScentralPath=chartICUSsvg.append("path")
        .attr("id", "chartICUSCentralGraphLine")
        .attr("stroke-width", 5)
        .attr("class", "line")
        .style("stroke", chartICUSColorCentral)
        .attr("d", chartICUSLineCentral)
        .attr("clip-path", "url(#chartICUSMaskVisible)");

      // showCentralTemasekLowArea(chartICUSLowArea);

    transitionFunc(chartICUScentralPath,0);
    transitionDashFunc(chartICUSlaccPath,2000,4,4);
    transitionDashFunc(chartICUShaccPath,4000,9,6);

    // chartICUSShowCentralToolTipA();
    // chartICUSShowCentralToolTipB();
  // showCentral();

  chartICUSsvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(chartICUSXAxis)
  // chartICUSsvg.append("g")
  // .attr("transform", "translate(0," + height + ")")
  //   .append("text")
  //     .attr("y", 45)
  //     .attr("x", width/2 - 10)
  //     // .attr("dy", ".71em")
  //     .style("text-anchor", "middle")
  //     .text("Year");

  chartICUSsvg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(60,0)")
      .call(chartICUSYAxis);

  var Yaxis_label="市场指数值";
  //created a function to draw each letter vertically on Y axis
   var DrawYaxis=function(Yaxis_label){
      for(var i=0;i<Yaxis_label.length;i++){
        chartICUSsvg.append("g")
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

  chartICUSsvg.append("g")
    .attr("class", "tick")
    .append("text")
      .attr("y", height+4)
      .attr("x", 61)
      .style("text-anchor", "end")
      .text("指数 = 100 -");



  // =====================================


//animation of area fill and the callout image
  setTimeout(function() {
    d3.select("#chartICUSMaskClip3 rect")
    .transition().duration(1000)
    .attr("width", width);
  }, 1000);


addTickMargin();

// chartICUSsvg.append("text")
//     .attr("x", 8)
//     .attr("y", height + 20)
//     .text("-ve")
//     .style("text-anchor", "start");
// chartICUSsvg.append("text")
//     .attr("x", width - 35)
//     .attr("y", height + 20)
//     .text("+ve")
//     .style("text-anchor", "start");

// =====================================

chartICUSsvg.append("line")
    .attr("id", "chartICUSLACCLine")
    .style("stroke", chartICUSColorLACC)
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", ("4, 4"))
    .attr("x1", 258)     // x position of the first end of the line
    .attr("y1", height + 50)      // y position of the first end of the line
    .attr("x2", 288)     // x position of the second end of the line
    .attr("y2", height + 50);    // y position of the second end of the line
chartICUSsvg.append("text")
    .text("缺乏决心应对气候变化 (美国)")
    .attr("x", 293)
    .attr("y", height + 55)
    .on('click', chartICUSOnClickLegendLACC);

var chartICUSLACCActive = true;
function chartICUSOnClickLegendLACC() {
  chartICUSLACCActive = !chartICUSLACCActive;

  if (chartICUSLACCActive) {
    chartICUSsvg.select("#chartICUSLACCLine").style("stroke", chartICUSColorLACC);

    chartICUSsvg.append("path")
      .attr("id", "chartICUSLACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICUSColorLACC)
      .attr("d", chartICUSLineLACC)
        .style("stroke-dasharray", ("4,4"))
        .attr("clip-path", "url(#chartICUSMaskVisible)");

    if (chartICUSCentralActive) {
      hidechartICUSCentral();
      showchartICUSCentral();
    }
  } else {
    chartICUSsvg.select("#chartICUSLACCLine").style("stroke", "");
    chartICUSsvg.select("#chartICUSLACCGraphLine").remove();
  }
}

chartICUSsvg.append("line")
  .attr("id", "chartICUSHACCLine")
  .style("stroke", chartICUSColorHACC)
  .attr("stroke-width", 3)
  .attr("stroke-dasharray", ("9, 6"))
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 80)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 80);    // y position of the second end of the line
chartICUSsvg.append("text")
  .text("坚定决心应对气候变化 (美国)")
  // .style("stroke", "#40e0d0")
  .attr("x", 95)
  .attr("y", height + 85)
  .on('click', chartICUSOnClickLegendHACC);

// chartICUSsvg.append("text")
//   .attr("x", 545)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("1");

var chartICUSHACCActive = true;
function chartICUSOnClickLegendHACC() {
  chartICUSHACCActive = !chartICUSHACCActive;
  if (chartICUSHACCActive) {
    chartICUSsvg.select("#chartICUSHACCLine").style("stroke", chartICUSColorHACC);
    chartICUSsvg.append("path")
      .attr("id", "chartICUSHACCGraphLine")
      .attr("stroke-width", 3)
      .attr("class", "line")
      .style("stroke", chartICUSColorHACC)
      .style("stroke-dasharray", ("9, 6"))
      .attr("d", chartICUSLineHACC)
      .attr("clip-path", "url(#chartICUSMaskVisible)");
      if (chartICUSCentralActive) {
        hidechartICUSCentral();
        showchartICUSCentral();
      }
  } else {
    chartICUSsvg.select("#chartICUSHACCLine").style("stroke", "");
    chartICUSsvg.select("#chartICUSHACCGraphLine").remove();
  }
}

chartICUSsvg.append("line")
  .attr("id", "chartICUSCentralLine")
  .style("stroke", chartICUSColorCentral)
  .attr("stroke-width", 3)
  .attr("x1", 60)     // x position of the first end of the line
  .attr("y1", height + 50)      // y position of the first end of the line
  .attr("x2", 90)     // x position of the second end of the line
  .attr("y2", height + 50);    // y position of the second end of the line
chartICUSsvg.append("text")
  .text("基准情境 (美国)")
  .attr("x", 95)
  .attr("y", height + 55)
  .on('click', chartICUSOnClickLegendCentral);

// chartICUSsvg.append("text")
//   .attr("x", 851)
//   .attr("y", 315)
//   .style("font-size", "11px")
//   .text("2");

var chartICUSCentralActive = true;
function chartICUSOnClickLegendCentral() {
  chartICUSCentralActive = !chartICUSCentralActive;

  if (chartICUSCentralActive) {
    showchartICUSCentral();
  } else {
    hidechartICUSCentral();
  }
}
var animated_central=true;
function showchartICUSCentral() {
  chartICUSsvg.select("#chartICUSCentralLine").style("stroke", chartICUSColorCentral);

  // showCentralTemasekLowArea(chartICUSLowArea);
  // showCentralTemasekHighArea(chartICUSHighArea);

  var chartICUScentralPath=chartICUSsvg.append("path")
    .attr("id", "chartICUSCentralGraphLine")
    .attr("stroke-width", 5)
    .attr("class", "line")
    .style("stroke", chartICUSColorCentral)
    .attr("d", chartICUSLineCentral)
    .attr("clip-path", "url(#chartICUSMaskVisible)");

    // if(animated_central==false) //if already drawn the line with animation, do not need to animate again if they click on the legend
    // {
    // transitionFunc(chartICUScentralPath,6000);
    // animated_central=true;
    // }

    // chartICUSShowCentralToolTipA();
    // chartICUSShowCentralToolTipB();

}

function hidechartICUSCentral() {
  chartICUSsvg.select("#chartICUSCentralLine").style("stroke", null);
  chartICUSsvg.select("#chartICUSCentralGraphLine").remove();
  chartICUSsvg.select("#chartICUSCentralToolTipA").remove();
  chartICUSsvg.select("#chartICUSCentralToolTipB").remove();
  chartICUSsvg.select("#centralLowArea").remove();
  chartICUSsvg.select("#centralHighArea").remove();
}

// function chartICUSShowToolTip(params) {
//   var aToolTip = chartICUSsvg.append("g");
//
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 159)    // set the height
//     .attr("width", 230)
//     .attr("xlink:href", icUSAssetPath  + "chartICUS-callout1.png")
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
// function chartICUSShowToolTipB(params) {
//   var aToolTip = chartICUSsvg.append("g");
//   aToolTip.append("svg:image")
//     .attr("id", params.toolTipId)
//     .attr("x", params.rectXCoor)
//     .attr("y", params.rectYCoor)
//     .attr("height", 183)    // set the height
//     .attr("width", 550)
//     .attr("xlink:href",icUSAssetPath + "chartICUS-callout2.png")
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
// function chartICUSShowCentralToolTipA() {
//   chartICUSShowToolTip({
//     toolTipId: "chartICUSCentralToolTipA",
//     rectXCoor: chartICUSx(-45),
//     rectYCoor: chartICUSy(50),
//     isTypeA: true,
//     width: 170,
//     height: 70,
//     fillColor: "#C04C7A",
//     textColor: "white",
//     textValueLineA: "Lower likelihood of",
//     textValueLineB: "negative returns for",
//     textValueLineC: "Centralasek Portfolio",
//     maskClipId: "chartICUSMaskClip3"
//   });
// }
//
// function chartICUSShowCentralToolTipB() {
//   chartICUSShowToolTipB({
//     toolTipId: "chartICUSCentralToolTipB",
//     rectXCoor: chartICUSx(-11),
//     rectYCoor: chartICUSy(57),
//     isTypeA: false,
//     width: 170,
//     height: 70,
//     fillColor: "#14B1E7",
//     textColor: "white",
//     textValueLineA: "Higher likelihood",
//     textValueLineB: "of higher positive",
//     textValueLineC: "returns for",
//     textValueLineD: "Centralasek Portfolio",
//     maskClipId: "chartICUSMaskClip3"
//   });
// }
//
// function showCentralHighArea(fillColor) {
//   chartICUSsvg.append("path")
//     .attr("id", "CentralTemasekHighArea")
//     .attr("z-index", "-1")
//     .attr("d", areaLACC.y0(0))
//     .attr("clip-path", "url(#chartICUSClip1)")
//     .style("fill", fillColor);
// }
//
// function showCentralLowArea(fillColor) {
//   chartICUSsvg.append("rect")
//     .attr("id", "CentralTemasekLowArea")
//     .attr("z-index", "-1")
//     .attr("x", 0)
//     .attr("y", 10)
//     .attr("clip-path", "url(#chartICUSClip1)")
//     .style("fill", fillColor)
//     .attr("height", height)    // set the height
//     .attr("width", chartICUSx(0));
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
