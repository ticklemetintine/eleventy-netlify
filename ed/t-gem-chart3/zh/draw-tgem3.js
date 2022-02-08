var data = [
 {
    "returns"  : -32.50,
    "central"  : 0.00,
    "china"    : 0.00,
    "secular"   : 0.02,
    "severe"   : 0.00,
    "ccla"   : 0.00,
    "ccha"   : 0.00

  },
  {
    "returns"  : -27.50,
    "central"  : 0.00,
    "china"    : 0.00,
    "secular"   : 0.02,
    "severe"   : 0.00,
    "ccla"   : 0.00,
    "ccha"   : 0.00
  },
  {
    "returns"  : -22.50,
    "central"  : 0.00,
    "china"    : 0.02,
    "secular"   : 0.04,
    "severe"   : 0.04,
    "ccla"   : 0.00,
    "ccha"   : 0.00
  },
  {
    "returns"  : -17.50,
    "central"  : 0.00,
    "china"    : 0.06,
    "secular"   : 0.18,
    "severe"   : 0.06,
    "ccla"   : 0.00,
    "ccha"   : 0.00
  },
  {
    "returns"  : -12.50,
    "central"  : 0.16,
    "china"    : 0.38,
    "secular"   : 1.18,
    "severe"   : 0.50,
    "ccla"   : 0.20,
    "ccha"   : 0.12
  },
  {
    "returns"  : -7.50,
    "central"  : 1.54,
    "china"    : 3.92,
    "secular"   : 8.30,
    "severe"   : 4.88,
    "ccla"   : 2.60,
    "ccha"   : 1.32
  },
  {
    "returns"  : -2.50,
    "central"  : 12.02,
    "china"    : 18.64,
    "secular"   : 23.30,
    "severe"   : 19.90,
    "ccla"   : 16.08,
    "ccha"   : 10.60
  },
  {
    "returns"  : 2.50,
    "central"  : 32.36,
    "china"    : 34.82,
    "secular"   : 34.34,
    "severe"   : 35.52,
    "ccla"   : 34.28,
    "ccha"   : 30.66
  },
  {
    "returns"  : 7.50,
    "central"  : 33.24,
    "china"    : 28.68,
    "secular"   : 23.18,
    "severe"   : 26.80,
    "ccla"   : 31.04,
    "ccha"   : 34.04
  },
  {
    "returns"  : 12.50,
    "central"  : 15.82,
    "china"    : 10.58,
    "secular"   : 7.46,
    "severe"   : 9.82,
    "ccla"   : 12.42,
    "ccha"   : 17.60
  },
  {
    "returns"  : 17.50,
    "central"  : 4.14,
    "china"    : 2.40,
    "secular"   : 1.48,
    "severe"   : 2.00,
    "ccla"   : 2.74,
    "ccha"   : 4.72
  },
  {
    "returns"  : 22.50,
    "central"  : 0.48,
    "china"    : 0.34,
    "secular"   : 0.30,
    "severe"   : 0.34,
    "ccla"   : 0.46,
    "ccha"   : 0.68
  },
  {
    "returns"  : 27.50,
    "central"  : 0.18,
    "china"    : 0.14,
    "secular"   : 0.10,
    "severe"   : 0.12,
    "ccla"   : 0.16,
    "ccha"   : 0.20
  },
  {
    "returns"  : 32.50,
    "central"  : 0.04,
    "china"    : 0.00,
    "secular"   : 0.02,
    "severe"   : 0.00,
    "ccla"   : 0.00,
    "ccha"   : 0.04
  },
  {
    "returns"  : 37.50,
    "central"  : 0.00,
    "china"    : 0.02,
    "secular"   : 0.00,
    "severe"   : 0.02,
    "ccla"   : 0.02,
    "ccha"   : 0.00
  },
  {
    "returns"  : 42.50,
    "central"  : 0.02,
    "china"    : 0.00,
    "secular"   : 0.00,
    "severe"   : 0.00,
    "ccla"   : 0.00,
    "ccha"   : 0.02
  },
  {
    "returns"  : 47.50,
    "central"  : 0.0,
    "china"    : 0.00,
    "secular"   : 0.00,
    "severe"   : 0.00,
    "ccla"   : 0.00,
    "ccha"   : 0.00
  }
]

var tgem3AssetPath = "/ed/t-gem-chart3/zh/";
// var tgem3AssetPath = "./";

var chart3ColorChina      = "#D50065";
var chart3ColorSecular     = "#12A639";
var chart3ColorCentral    = "#49176D";
var chart3ColorSevere   = "rgb(0, 85, 164)";
var chart3ColorCCLA     = "rgb(250, 182, 0)"; //Climate Change Low Ambition
var chart3ColorCCHA     = "rgb(149, 186, 41)"; //Climate Change High Ambition
var chart3LowArea         = "#D50065";
var chart3HighArea        = "#009ee4";


var width = 900, height = 250;

var chart3x = d3.scaleLinear().range([0, width]);
var chart3y = d3.scaleLinear().range([height, 0]);

var chart3XAxis = d3.axisBottom()
    .scale(chart3x)
    .tickFormat(function(d) {
     if (d == 0) {
        return d;
    }
    })
    .tickValues([-80,-60,-40,-20,0,20,40,60,80]);

var chart3YAxis = d3.axisLeft()
    .scale(chart3y)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chart3LineCCHA = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.ccha); })
    .curve(d3.curveBasis);

var chart3LineCCLA = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.ccla); })
    .curve(d3.curveBasis);

var chart3LineSecular = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.secular); })
    .curve(d3.curveBasis);

var chart3LineCentral = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.central); })
    .curve(d3.curveBasis);

var chart3LineChina = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.china); })
    .curve(d3.curveBasis);

var chart3LineSevere = d3.line()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y(function(d) { return chart3y(d.severe); })
    .curve(d3.curveBasis);

var chart3Central = d3.area()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y0(height)
    .y1(function(d) { return chart3y(d.central); })
    .curve(d3.curveBasis);

var chart3CCLA = d3.area()
    //.interpolate("basis")
    .x(function(d) { return chart3x(d.returns); })
    .y0(height)
    .y1(function(d) { return chart3y(d.ccla); })
    .curve(d3.curveBasis);


d3.select(window).on("resize", resize);

var chart3svg = d3.select("#chart_tgem3")
              .append("div")
              .classed("ed-container", true) //container class to make it responsive
              .append("div")
              .classed("ed-svg-container", true) //container class to make it responsive
              .append("svg")
              .attr("preserveAspectRatio", "xMinYMin meet")
              .attr("viewBox", "0 0 " + (width+100) + " "  + (height+200))
              .classed("ed-svg-content-responsive", true)
              .append("g")
    .attr("transform", "translate(" + 50 + "," + 20 + ")");

  data.forEach(function(d) {
    d.returns = +d.returns;
    d.central = +d.central;
    d.secular = +d.secular;
    d.china = +d.china;
    d.severe =+d.severe;
    d.ccla =+d.ccla;
    d.ccha =+d.ccha;
  });

  chart3x.domain([
    d3.min(data, function(d) { return -80; }),
    d3.max(data, function(d) { return 80; })
  ]);

  var maxY = d3.max(data, function(d) { return Math.max(d.central, d.secular, d.china,d.severe,d.ccha,d.ccla); })
  var maxTemasekY = d3.max(data, function(d) { return d.china; });

  chart3y.domain([
    d3.min(data, function(d) {
      return Math.min(d.central, d.secular, d.china,d.severe,d.ccla,d.ccha);
    }),
    maxTemasekY / 0.5
  ]);

  chart3svg.datum(data);

  chart3svg.append("clipPath")       // define a clip path
      .attr("id", "chart3Clip3")
      .append("path")
      .attr("d", chart3Central)
      .attr("clip-path", "url(#chart3MaskClip3)");

  chart3svg.append("clipPath")       // define a clip path
     .attr("id", "chart3Clip2")
     .append("path")
     .attr("d", chart3Central)
     .attr("clip-path", "url(#chart3MaskClip4)");

  chart3svg.append("clipPath")
     .attr("id", "chart3MaskClip3")
     .append("rect")
     .attr("width", 0)
     .attr("height", height);

  chart3svg.append("clipPath")
     .attr("id", "chart3MaskClip4")
     .append("rect")
     .attr("width", 0)
     .attr("height", height);

  chart3svg.append("clipPath")
     .attr("id", "chart3MaskVisible2")
     .append("rect")
     .attr("x", 180)
     .attr("width", 580)
     .attr("height", height);

  chart3svg.append("clipPath")
     .attr("id", "chart3MaskVisible")
     .append("rect")
     .attr("x",0)
     .attr("width", 800)
     .attr("height", height);

  chart3svg.append("line")
     .style("stroke", "black")
     .style("stroke-dasharray", ("3, 3"))
     .attr("x1", chart3x(0))     // x position of the first end of the line
     .attr("y1", chart3y(0))      // y position of the first end of the line
     .attr("x2", chart3x(0))     // x position of the second end of the line
     .attr("y2", 0);    // y position of the second end of the line

  // ==============================

  showCentralHighArea(chart3HighArea);
  showCentralLowArea(chart3LowArea);

  var cchaPath=chart3svg.append("path")
      .attr("id", "chart3CCHAGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCCHA)
      //.style("stroke-dasharray", ("10, 15"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineCCHA)
      .attr("clip-path","url(#chart3MaskVisible2)");

  var cclaPath=chart3svg.append("path")
      .attr("id", "chart3CCLAGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCCLA)
      //.style("stroke-dasharray", ("10, 15"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineCCLA)
      .attr("clip-path","url(#chart3MaskVisible2)");

  var secularPath=chart3svg.append("path")
      .attr("id", "chart3SecularGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorSecular)
      //.style("stroke-dasharray", ("10, 15"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineSecular)
      .attr("clip-path","url(#chart3MaskVisible2)");

  var severePath=chart3svg.append("path")
      .attr("id", "chart3SevereGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorSevere)
      //.style("stroke-dasharray", ("10, 15"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineSevere)
      .attr("clip-path","url(#chart3MaskVisible2)");


  var ChinaPath=chart3svg.append("path")
      .attr("id", "chart3ChinaGraphLine")
     .attr("class", "line")
      .style("stroke", chart3ColorChina)
      //.style("stroke-dasharray", ("2, 7"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineChina)
      .attr("clip-path","url(#chart3MaskVisible2)");

  var centralPath=chart3svg.append("path")
      .attr("id", "chart3CentralGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCentral)
      .attr("stroke-width", 5)
      .attr("d", chart3LineCentral)
      .attr("clip-path","url(#chart3MaskVisible2)");

      transitionFunc(centralPath,0);
      transitionDashFunc(ChinaPath,2000,4,4);
      transitionDashFunc(severePath,4000,9,6);
      transitionDashFunc(secularPath,6000,9,6);
      transitionDashFunc(cclaPath,8000,4,4);
      transitionDashFunc(cchaPath,10000,9,6);

      setTimeout(function() {
        d3.select("#chart3MaskClip3 rect")
        .transition().duration(2000)
        .attr("width", width);
      }, 11000);

      setTimeout(function() {
        d3.select("#chart3MaskClip4 rect")
        .transition().duration(2000)
        .attr("width", width);
      }, 11000);

  chart3svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(chart3XAxis);

  chart3svg.append("g")
  .attr("transform", "translate(0," + height + ")")
    .append("text")
      .attr("y", 45)
      .attr("x", width/2 - 10)
      .attr("class", "light")
      // .attr("dy", ".71em")
      .style("text-anchor", "middle")
      .text("20年期末的几何回报(复合年化)(%)");

  chart3svg.append("g")
      .attr("class", "y axis")
      .call(chart3YAxis)
  // chart3svg.append("g")
  //   .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", -18)
  //     .attr("dy", ".71em")
  //     .attr("x", -height/2 + 20)
  //     .style("text-anchor", "middle")
  //     .text("相对可能性");

  var Yaxis_label="相对几率";
  //created a function to draw each letter vertically on Y axis
   var DrawYaxis=function(Yaxis_label){
      for(var i=0;i<Yaxis_label.length;i++){
        chart3svg.append("g")
        .append("text")
        .attr("y", (height/2)+(i*15))
        .attr("dy", -15)
        .attr("x", -17)
        .style("text-anchor", "middle")
        .text(Yaxis_label[i]);
      }
  }

   //calling that function
   DrawYaxis(Yaxis_label);

  chart3ShowToolTipA();
  chart3ShowToolTipB();



  // setTimeout(function() {
  //   d3.select("#chart3MaskClip3 rect")
  //   .transition().duration(2500)
  //   .attr("width", width);
  // }, 0);


addTickMargin();

// Central
chart3svg.append("line")
  .attr("id", "chart3CentralLine")
  .style("stroke", chart3ColorCentral)
  .attr("stroke-width", 5)
  .attr("x1", 30)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 55)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line

chart3svg.append("text")
  .text("基准情境")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 65)
  .attr("y", height + 70)
  .on('click', chart3OnClickLegendCentral);


// China Hard Landing
chart3svg.append("line")
  .attr("id", "chart3ChinaLine")
  .style("stroke", chart3ColorChina)
  .attr("stroke-width", 3)
  .style("stroke-dasharray", ("4, 4"))
  .attr("x1", 245)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 275)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line

chart3svg.append("text")
  .text("中国经济硬着陆")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 278)
  .attr("y", height + 70)
  .on('click', chart3OnClickLegendChina);


// Severe Escalation in Trade and Tech Tensions
chart3svg.append("line")
  .attr("id", "chart3SevereLine")
  .style("stroke", chart3ColorSevere)
  .attr("stroke-width", 3)
  .style("stroke-dasharray", ("9, 6"))
  .attr("x1", 525)     // x position of the first end of the line
  .attr("y1", height + 65)      // y position of the first end of the line
  .attr("x2", 550)     // x position of the second end of the line
  .attr("y2", height + 65);    // y position of the second end of the line

chart3svg.append("text")
  .text("贸易和科技紧张局势严重升级")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 560)
  .attr("y", height + 70)
  .on('click', chart3OnClickLegendSevere);

// Secular Stagnation
chart3svg.append("line")
  .attr("id", "chart3SecularLine")
  .style("stroke", chart3ColorSecular)
  .attr("stroke-width", 3)
  .style("stroke-dasharray", ("9, 6"))
  .attr("x1", 30)     // x position of the first end of the line
  .attr("y1", height + 85)      // y position of the first end of the line
  .attr("x2", 55)     // x position of the second end of the line
  .attr("y2", height + 85);    // y position of the second end of the line

chart3svg.append("text")
  .text("长期滞胀")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 65)
  .attr("y", height + 90)
  .on('click', chart3OnClickLegendSecular);

// CCLA Stagnation
chart3svg.append("line")
  .attr("id", "chart3CCLALine")
  .style("stroke", chart3ColorCCLA)
  .attr("stroke-width", 3)
  .style("stroke-dasharray", ("4, 4"))
  .attr("x1", 245)     // x position of the first end of the line
  .attr("y1", height + 85)      // y position of the first end of the line
  .attr("x2", 275)     // x position of the second end of the line
  .attr("y2", height + 85);    // y position of the second end of the line
chart3svg.append("text")
  .text("缺乏决心应对气候变化")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 278)
  .attr("y", height + 90)
  .on('click', chart3OnClickLegendCCLA);

// CCHA Stagnation
chart3svg.append("line")
  .attr("id", "chart3CCHALine")
  .style("stroke", chart3ColorCCHA)
  .attr("stroke-width", 3)
  .style("stroke-dasharray", ("9, 6"))
  .attr("x1", 525)     // x position of the first end of the line
  .attr("y1", height + 85)      // y position of the first end of the line
  .attr("x2", 555)     // x position of the second end of the line
  .attr("y2", height + 85);    // y position of the second end of the line
chart3svg.append("text")
  .text("坚定决心应对气候变化")
  // .style("stroke", chart3ColorCentral)
  .attr("x", 559)
  .attr("y", height + 90)
  .on('click', chart3OnClickLegendCCHA);

var chart3CentralActive = true;
function chart3OnClickLegendCentral() {
  chart3CentralActive = !chart3CentralActive;

  if (chart3CentralActive) {
	showCentralHighArea(chart3HighArea);
    showCentralLowArea(chart3LowArea);
    chart3svg.select("#chart3CentralLine").style("stroke", chart3ColorCentral);
    chart3svg.append("path")
      .attr("id", "chart3CentralGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCentral)
      .attr("stroke-width", 5)
      .attr("d", chart3LineCentral)
      .attr("clip-path","url(#chart3MaskVisible2)");;
    chart3ShowToolTipA();
    chart3ShowToolTipB();
  } else {
    chart3svg.select("#chart3CentralLine").style("stroke", "");
    chart3svg.select("#chart3CentralGraphLine").remove();
    removeToolTip();
  }
}

var chart3ChinaActive = true;
function chart3OnClickLegendChina() {
  chart3ChinaActive = !chart3ChinaActive;

  if (chart3ChinaActive) {
    chart3svg.select("#chart3ChinaLine").style("stroke", chart3ColorChina);
    chart3svg.append("path")
      .attr("id", "chart3ChinaGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorChina)
      .style("stroke-dasharray", ("4, 4"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineChina)
      .attr("clip-path","url(#chart3MaskVisible2)");;
  } else {
    chart3svg.select("#chart3ChinaLine").style("stroke", "");
    chart3svg.select("#chart3ChinaGraphLine").remove();
  }
}

var chart3SecularActive = true;
function chart3OnClickLegendSecular() {
  chart3SecularActive = !chart3SecularActive;

  if (chart3SecularActive) {
    chart3svg.select("#chart3SecularLine").style("stroke", chart3ColorSecular);
    chart3svg.append("path")
      .attr("id", "chart3SecularGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorSecular)
      .style("stroke-dasharray", ("9, 6"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineSecular)
      .attr("clip-path","url(#chart3MaskVisible2)");;
  } else {
    chart3svg.select("#chart3SecularLine").style("stroke", "");
    chart3svg.select("#chart3SecularGraphLine").remove();
  }
}

var chart3SevereActive = true;
function chart3OnClickLegendSevere() {
  chart3SevereActive = !chart3SevereActive;

  if (chart3SevereActive) {
    chart3svg.select("#chart3SevereLine").style("stroke", chart3ColorSevere);
    chart3svg.append("path")
      .attr("id", "chart3SevereGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorSevere)
      .style("stroke-dasharray", ("9, 6"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineSevere)
      .attr("clip-path","url(#chart3MaskVisible2)");;
  } else {
    chart3svg.select("#chart3SevereLine").style("stroke", "");
    chart3svg.select("#chart3SevereGraphLine").remove();
  }
}

var chart3CCLAActive = true;
function chart3OnClickLegendCCLA() {
  chart3CCLAActive = !chart3CCLAActive;

  if (chart3CCLAActive) {
    chart3svg.select("#chart3CCLALine").style("stroke", chart3ColorCCLA);
    chart3svg.append("path")
      .attr("id", "chart3CCLAGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCCLA)
      .style("stroke-dasharray", ("4, 4"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineCCLA)
      .attr("clip-path","url(#chart3MaskVisible2)");;
  } else {
    chart3svg.select("#chart3CCLALine").style("stroke", "");
    chart3svg.select("#chart3CCLAGraphLine").remove();
  }
}

var chart3CCHAActive = true;
function chart3OnClickLegendCCHA() {
  chart3CCHAActive = !chart3CCHAActive;

  if (chart3CCHAActive) {
    chart3svg.select("#chart3CCHALine").style("stroke", chart3ColorCCHA);
    chart3svg.append("path")
      .attr("id", "chart3CCHAGraphLine")
      .attr("class", "line")
      .style("stroke", chart3ColorCCHA)
      .style("stroke-dasharray", ("9, 6"))
      .attr("stroke-width", 3)
      .attr("d", chart3LineCCHA)
      .attr("clip-path","url(#chart3MaskVisible2)");;
  } else {
    chart3svg.select("#chart3CCHALine").style("stroke", "");
    chart3svg.select("#chart3CCHAGraphLine").remove();
  }
}

chart3svg.append("text")
    .attr("x", 8)
    .attr("y", height + 20)
    .text("负数")
    .style("text-anchor", "start");
chart3svg.append("text")
    .attr("x", width - 35)
    .attr("y", height + 20)
    .text("正数")
    .style("text-anchor", "start");


// Filling the area for Central Low Area with dark pink
function showCentralLowArea(fillColor) {
  chart3svg.append("rect")
    .attr("id", "centralLowArea")
    .attr("x", 0)
    .attr("y", 0)
    .attr("clip-path", "url(#chart3Clip2)")
    .style("fill", fillColor)
    .attr("height", height)    // set the height
    .attr("width", chart3x(0));
}

// Filling the area for Central High Area with blue
function showCentralHighArea(fillColor) {
  chart3svg.append("path")
    .attr("id", "centralHighArea")
    .attr("d", chart3CCLA.y0(0))
    .attr("clip-path", "url(#chart3Clip3)")
    .style("fill", fillColor);
}

function removeToolTip() {
  chart3svg.select("#centralLowArea").remove();
  chart3svg.select("#centralHighArea").remove();
  chart3svg.select("#chart3TemToolTipA").remove();
  chart3svg.select("#chart3CenToolTipB").remove();
  chart3svg.select("#chart3TemToolTipATextB").remove();
  chart3svg.select("#chart3TemToolTipATextA").remove();
  chart3svg.select("#chart3TemToolTipATextC").remove();
  chart3svg.select("#chart3TemToolTipATextD").remove();
  chart3svg.select("#chart3CenToolTipATextE").remove();
  chart3svg.select("#chart3CenToolTipBTextA").remove();
  chart3svg.select("#chart3CenToolTipBTextB").remove();
  chart3svg.select("#chart3CenToolTipBTextC").remove();
  chart3svg.select("#chart3CenToolTipBTextD").remove();
  chart3svg.select("#chart3CenToolTipBTextE").remove();
}

function chart3ShowToolTipA() {
  chart3ShowToolTip({
    toolTipId: "chart3TemToolTipA",
    rectXCoor: chart3x(23),
    rectYCoor: chart3y(57),
    width: 190,
    fillColor: "white",
    textColor: "white",
    dotted: false,
    outlineColor: chart3ColorCentral,
    textValueLineA: "除对比坚定决心应对",
    textValueLineB: "气候变化情境之外，",
    textValueLineC: "基准情境下获得更高",
    textValueLineD: "回报的几率较高",
    maskClipId: "chart3MaskClip3"
  });
}

function chart3ShowToolTipB() {
  chart3ShowCenToolTipB({
    toolTipId: "chart3CenToolTipB",
    rectXCoor: chart3x(-40),
    rectYCoor: chart3y(57),
    isTypeA: false,
    width: 170,
    height: 70,
    fillColor: "#14B1E7",
    textColor: "white",
    textValueLineA: "除对比坚定决心应对",
    textValueLineB: "气候变化情境之外，",
    textValueLineC: "基准情境下获得",
    textValueLineD: "负回报的几率较低",
    maskClipId: "chart3MaskClip4"
  });
}

function chart3ShowToolTip(params) {
  params.textValueLineD ?
    params.height = 50 + 20*2 :
    params.textValueLineC ?
      params.height = 50 + 20 :
      null;

  var aToolTip = chart3svg.append("g");
  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor-48)
    .attr("y", params.rectYCoor)
    .attr("height", 168)    // set the height
    .attr("width", 198)
    .attr("xlink:href", tgem3AssetPath + "chart3-callout2-zh.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextA")
    .attr("x", params.rectXCoor - 15)
    .attr("y", params.rectYCoor + 25)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextB")
    .attr("x", params.rectXCoor - 15)
    .attr("y", params.rectYCoor + 45)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextC")
    .attr("x", params.rectXCoor - 15)
    .attr("y", params.rectYCoor + 65)
    .text(params.textValueLineC)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextD")
    .attr("x", params.rectXCoor - 15)
    .attr("y", params.rectYCoor + 85)
    .text(params.textValueLineD)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
}


function chart3ShowCenToolTipB(params) {
  var aToolTip = chart3svg.append("g");
  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor)
    .attr("y", params.rectYCoor)
    .attr("height", 166)    // set the height
    .attr("width", 208)
    .attr("xlink:href", tgem3AssetPath + "chart3-callout1-zh.png")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextA")
    .attr("x", params.rectXCoor + 11)
    .attr("y", params.rectYCoor + 24)
    .text(params.textValueLineA)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextB")
    .attr("x", params.rectXCoor + 11)
    .attr("y", params.rectYCoor + 44)
    .text(params.textValueLineB)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextC")
    .attr("x", params.rectXCoor + 11)
    .attr("y", params.rectYCoor + 64)
    .text(params.textValueLineC)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
  aToolTip
    .append("text")
    .attr("id", params.toolTipId + "TextD")
    .attr("x", params.rectXCoor + 11)
    .attr("y", params.rectYCoor + 84)
    .text(params.textValueLineD)
    .style('fill', params.textColor)
    .style("text-anchor", "start")
    .attr("clip-path", "url(#" + params.maskClipId + ")");
}

//function to give animation for each path
function transitionFunc(pathName,animationDelay) {
      var totalLength = pathName.node().getTotalLength();
      pathName
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .ease(d3.easeLinear)
      .duration(1500)
      .delay(animationDelay)
      .attr("stroke-dashoffset", 0);
}
function transitionDashFunc(pathName,animationDelay,dashA,dashB) {
      var totalLength = pathName.node().getTotalLength()+30;

      var dashing = (dashA + "," + dashB)

      var dashLength = dashing
                  		.split(/[\s,]/)
                  		.map(function (a) { return parseFloat(a) || 0 })
                  		.reduce(function (a, b) { return a + b });

      if(dashing=="15,10"){
          dashing = (15 + "," + 10 + "," + 5 + "," + 10 + "," + 15)
          dashLength = 50;
      }

      var dashCount = Math.ceil( totalLength / dashLength )-1;
      var newDashes = new Array(dashCount).join( dashing + " " );
      var dashArray = newDashes + " 0, " + totalLength;

            pathName
            .attr("stroke-dashoffset", totalLength)
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
