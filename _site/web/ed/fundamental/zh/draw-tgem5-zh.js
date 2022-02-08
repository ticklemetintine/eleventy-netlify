//line1 - straight line
//line2 - curve line
var data = [
  {
    "year": 0,
    "line1": 49.36,
    "line2": 49.36,
    "line3": 49.36
  },
  {
    "year": 0.32,
    "line1": 49.44,
    "line2": 48.77,
    "line3": 48.77
  },
  {
    "year": 1.38,
    "line1": 49.71,
    "line2": 47.18,
    "line3": 47.18
  },
  {
    "year": 2.49,
    "line1": 49.99,
    "line2": 45.67,
    "line3": 45.67
  },
  {
    "year": 3.73,
    "line1": 50.31,
    "line2": 44.21,
    "line3": 44.21
  },
  {
    "year": 5.02,
    "line1": 50.63,
    "line2": 42.93,
    "line3": 42.93
  },
  {
    "year": 6.31,
    "line1": 50.96,
    "line2": 41.69,
    "line3": 41.69
  },
  {
    "year": 7.6,
    "line1": 51.28,
    "line2": 40.65,
    "line3": 40.65
  },
  {
    "year": 8.89,
    "line1": 51.61,
    "line2": 39.75,
    "line3": 39.75
  },
  {
    "year": 10.18,
    "line1": 51.94,
    "line2": 38.96,
    "line3": 38.96
  },
  {
    "year": 11.47,
    "line1": 52.26,
    "line2": 38.24,
    "line3": 38.24
  },
  {
    "year": 12.77,
    "line1": 52.59,
    "line2": 37.62,
    "line3": 37.62
  },
  {
    "year": 14.06,
    "line1": 52.92,
    "line2": 37.11,
    "line3": 37.11
  },
  {
    "year": 15.35,
    "line1": 53.24,
    "line2": 36.66,
    "line3": 36.66
  },
  {
    "year": 16.64,
    "line1": 53.57,
    "line2": 36.3,
    "line3": 36.3
  },
  {
    "year": 17.93,
    "line1": 53.9,
    "line2": 35.99,
    "line3": 35.99
  },
  {
    "year": 19.22,
    "line1": 54.22,
    "line2": 35.76,
    "line3": 35.76
  },
  {
    "year": 20.51,
    "line1": 54.55,
    "line2": 35.6,
    "line3": 35.6
  },
  {
    "year": 21.81,
    "line1": 54.88,
    "line2": 35.51,
    "line3": 35.51
  },
  {
    "year": 23.1,
    "line1": 55.2,
    "line2": 35.41,
    "line3": 35.41
  },
  {
    "year": 24.39,
    "line1": 55.53,
    "line2": 35.41,
    "line3": 35.41
  },
  {
    "year": 25.68,
    "line1": 55.85,
    "line2": 35.51,
    "line3": 35.51
  },
  {
    "year": 26.97,
    "line1": 56.18,
    "line2": 35.59,
    "line3": 35.59
  },
  {
    "year": 28.26,
    "line1": 56.51,
    "line2": 35.74,
    "line3": 35.74
  },
  {
    "year": 29.55,
    "line1": 56.83,
    "line2": 35.97,
    "line3": 35.97
  },
  {
    "year": 30.85,
    "line1": 57.16,
    "line2": 36.26,
    "line3": 36.26
  },
  {
    "year": 32.14,
    "line1": 57.49,
    "line2": 36.66,
    "line3": 36.66
  },
  {
    "year": 33.43,
    "line1": 57.81,
    "line2": 37.15,
    "line3": 37.15
  },
  {
    "year": 34.72,
    "line1": 58.14,
    "line2": 37.76,
    "line3": 37.76
  },
  {
    "year": 36.01,
    "line1": 58.47,
    "line2": 38.48,
    "line3": 38.48
  },
  {
    "year": 37.3,
    "line1": 58.79,
    "line2": 39.29,
    "line3": 39.29
  },
  {
    "year": 38.59,
    "line1": 59.12,
    "line2": 40.19,
    "line3": 40.19
  },
  {
    "year": 39.89,
    "line1": 59.45,
    "line2": 41.11,
    "line3": 41.11
  },
  {
    "year": 41.18,
    "line1": 59.77,
    "line2": 42.05,
    "line3": 42.05
  },
  {
    "year": 42.47,
    "line1": 60.1,
    "line2": 42.99,
    "line3": 42.99
  },
  {
    "year": 43.76,
    "line1": 60.42,
    "line2": 43.9,
    "line3": 43.9
  },
  {
    "year": 45.05,
    "line1": 60.75,
    "line2": 44.78,
    "line3": 44.78
  },
  {
    "year": 46.34,
    "line1": 61.08,
    "line2": 45.63,
    "line3": 45.63
  },
  {
    "year": 47.63,
    "line1": 61.4,
    "line2": 46.45,
    "line3": 46.45
  },
  {
    "year": 48.93,
    "line1": 61.73,
    "line2": 47.22,
    "line3": 47.22
  },
  {
    "year": 50.22,
    "line1": 62.06,
    "line2": 47.97,
    "line3": 47.97
  },
  {
    "year": 51.51,
    "line1": 62.38,
    "line2": 48.67,
    "line3": 48.67
  },
  {
    "year": 52.8,
    "line1": 62.71,
    "line2": 49.34,
    "line3": 49.34
  },
  {
    "year": 54.09,
    "line1": 63.04,
    "line2": 49.98,
    "line3": 49.98
  },
  {
    "year": 55.38,
    "line1": 63.36,
    "line2": 50.59,
    "line3": 50.59
  },
  {
    "year": 56.67,
    "line1": 63.69,
    "line2": 51.15,
    "line3": 51.15
  },
  {
    "year": 57.97,
    "line1": 64.02,
    "line2": 51.67,
    "line3": 51.67
  },
  {
    "year": 59.26,
    "line1": 64.34,
    "line2": 52.16,
    "line3": 52.16
  },
  {
    "year": 60.55,
    "line1": 64.67,
    "line2": 52.62,
    "line3": 52.62
  },
  {
    "year": 61.84,
    "line1": 64.99,
    "line2": 53.05,
    "line3": 53.05
  },
  {
    "year": 63.13,
    "line1": 65.32,
    "line2": 53.44,
    "line3": 53.44
  },
  {
    "year": 64.42,
    "line1": 65.65,
    "line2": 53.8,
    "line3": 53.8
  },
  {
    "year": 65.71,
    "line1": 65.97,
    "line2": 54.13,
    "line3": 54.13
  },
  {
    "year": 67.01,
    "line1": 66.3,
    "line2": 54.43,
    "line3": 54.43
  },
  {
    "year": 68.3,
    "line1": 66.63,
    "line2": 54.72,
    "line3": 54.72
  },
  {
    "year": 69.59,
    "line1": 66.95,
    "line2": 55.05,
    "line3": 55.05
  },
  {
    "year": 70.88,
    "line1": 67.28,
    "line2": 55.35,
    "line3": 55.35
  },
  {
    "year": 72.17,
    "line1": 67.61,
    "line2": 55.66,
    "line3": 55.66
  },
  {
    "year": 73.46,
    "line1": 67.93,
    "line2": 55.96,
    "line3": 55.96
  },
  {
    "year": 74.75,
    "line1": 68.26,
    "line2": 56.28,
    "line3": 56.28
  },
  {
    "year": 76.05,
    "line1": 68.59,
    "line2": 56.6,
    "line3": 56.6
  },
  {
    "year": 77.34,
    "line1": 68.91,
    "line2": 56.91,
    "line3": 56.91
  },
  {
    "year": 78.63,
    "line1": 69.24,
    "line2": 57.21,
    "line3": 57.21
  },
  {
    "year": 79.92,
    "line1": 69.56,
    "line2": 57.53,
    "line3": 57.53
  },
  {
    "year": 81.21,
    "line1": 69.89,
    "line2": 57.85,
    "line3": 57.85
  },
  {
    "year": 82.5,
    "line1": 70.22,
    "line2": 58.15,
    "line3": 58.15
  },
  {
    "year": 83.79,
    "line1": 70.54,
    "line2": 58.46,
    "line3": 58.46
  },
  {
    "year": 85.09,
    "line1": 70.87,
    "line2": 58.8,
    "line3": 58.8
  },
  {
    "year": 86.38,
    "line1": 71.2,
    "line2": 59.1,
    "line3": 59.1
  },
  {
    "year": 87.67,
    "line1": 71.52,
    "line2": 59.41,
    "line3": 59.41
  },
  {
    "year": 88.96,
    "line1": 71.85,
    "line2": 59.73,
    "line3": 59.73
  },
  {
    "year": 90.25,
    "line1": 72.18,
    "line2": 60.05,
    "line3": 60.05
  },
  {
    "year": 91.54,
    "line1": 72.5,
    "line2": 60.36,
    "line3": 60.36
  },
  {
    "year": 92.83,
    "line1": 72.83,
    "line2": 60.67,
    "line3": 60.67
  },
  {
    "year": 94.13,
    "line1": 73.16,
    "line2": 60.99,
    "line3": 60.99
  },
  {
    "year": 95.42,
    "line1": 73.48,
    "line2": 61.3,
    "line3": 61.3
  },
  {
    "year": 96.12,
    "line1": 73.66,
    "line2": 61.4,
    "line3": 61.4
  }
]

var fcAssetPath = "/ed/fundamental/zh/";
// var fcAssetPath = "./";
var colorBlue   = "#006ba6";
var colorRed     = "#D50065";
var transitionCtr = 1;

var width = 820, height = 525;

var chart5x = d3.scaleLinear().range([0, width]);
var chart5y = d3.scaleLinear().range([height, 0]);

var chart2XAxis = d3.axisBottom()
    .scale(chart5x)
    .tickFormat(function(d) {
      if (d == 0) {
        return "";
    }
    })
    .tickSize(0)


var chart2YAxis = d3.axisLeft()
    .scale(chart5y)
    .tickFormat(function(d) {
      return "";
    })
    .tickSize(0);

var chart5Line1Area = d3.area()
    //.interpolate("basis")
    .x(function(d) { return chart5x(d.year); })
    .y(function(d) { return chart5y(d.line1); })
    .curve(d3.curveBasis);

var chart5Line2Area = d3.area()
    //.interpolate("basis")
    .x(function(d) { return chart5x(d.year); })
    .y(function(d) { return chart5y(d.line2); })
    .curve(d3.curveBasis);

var chart5Line3Area = d3.area()
    //.interpolate("basis")
    .x(function(d) { return chart5x(d.year); })
    .y(function(d) { return chart5y(d.line2); })
    .curve(d3.curveBasis);

var chart5svg = d3.select("#chart_tgem5")
              .append("div")
              .classed("ed-container", true) //container class to make it responsive
              .append("div")
              .classed("ed-svg-container", true) //container class to make it responsive
              .append("svg")
              .attr("preserveAspectRatio", "xMinYMin meet")
              .attr("viewBox", "0 0 " + (width+100) + " "  + (height+100))
              .classed("ed-svg-content-responsive", true)
              .append("g")
              .attr("transform", "translate(" + 50 + "," + 40 + ")");


data.forEach(function(d) {
  d.year = +d.year;
  d.line2 = +d.line2;
  d.line1 = +d.line1;
  d.line3 = +d.line3;
});

chart5x.domain([
  d3.min(data, function(d) { return d.year; }),
  d3.max(data, function(d) { return d.year; })
]);

var maxY = d3.max(data, function(d) { return Math.max(d.line2, d.line1); });

chart5y.domain([0,maxY]);

chart5svg.datum(data);

// through impact image mask
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip1")
  .append("rect")
  .attr("width", 0)
  .attr("height", height)
  .attr('opacity', 0);

// fundamental impact image mask
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip7")
  .append("rect")
  .attr("width", 0)
  .attr("height", height)
  .attr('opacity', 0);

// end of stress image mask
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip9")
  .append("rect")
  .attr("width", 0)
  .attr("height", height)
  .attr('opacity', 0);

// tooltip 1
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip2")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

// tooltip 2
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip3")
  .append("rect")
  .attr("width", 0)
  .attr("height", height + 100);

// tooltip 3
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip4")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

// tooltip 4
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip5")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

// tooltip 5
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip6")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

//mask for graph 1
chart5svg.append("clipPath")
  .attr("id", "chart5MaskVisible")
  .append("rect")
  .attr("x", 0)
  .attr("width", width)
  .attr("height", height);

// tooltip 6
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip8")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

//mask for graph 2
chart5svg.append("clipPath")
  .attr("id", "chart5MaskVisible2")
  .append("rect")
  .attr("x", 0)
  .attr("width", 570)
  .attr("height", height);

//mask for graph 3
chart5svg.append("clipPath")
  .attr("id", "chart5MaskVisible3")
  .append("rect")
  .attr("x", 570)
  .attr("width", 350)
  .attr("height", height);

//mask for graph 3
chart5svg.append("clipPath")
  .attr("id", "chart5MaskVisible4")
  .append("rect")
  .attr("x",0)
  .attr("width", 580)
  .attr("height", height)

// label A - Trough Impact
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip10")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

// label B - End of Stress event
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip11")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

// label C - Fundamental Earnings Impact
chart5svg.append("clipPath")
  .attr("id", "chart5MaskClip12")
  .append("rect")
  .attr("width", 0)
  .attr("height", height);

/* Curve graph path */
var YLine1=chart5svg.append("path")
  .attr("id", "chart5GraphLine1")
  .attr("class", "line")
  .style("stroke", colorBlue)
  .attr("stroke-width", 3)
  .attr("d", chart5Line1Area)
  .attr("clip-path", "url(#chart5MaskVisible)");


/* X and Y axis*/
chart5svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(chart2XAxis)

chart5svg.append("g")
    .attr("class", "y axis")
    .call(chart2YAxis)

d3.select(window).on("resize", resize);

displayYAxisLabel();
dynamicChartHeight();
/* Ordered display of elements */
transitionFunc(YLine1,1000,0);
// transitionFunc(YLine2,2000,17000)
// transitionFunc(YLine3,2000,37500);

chart5ShowLabelA();
chart5ShowLabelB();
chart5ShowLabelC();

chart5ShowThroughImpact();
// chart5ShowToolTipA();
// chart5ShowToolTipB();
// chart5ShowToolTipC();
// chart5ShowToolTipD();
chart5ShowEndofStressLine();
// chart5ShowToolTipE();
chart5ShowFundamentalImpact();
// chart5ShowToolTipF();
transitionCounter1()

function transitionCounter1() {
  isTooltipARemove = false;
  chart5svg.select("#chart5ToolTipA").remove();
  chart5svg.selectAll(".chart5ToolTipA").remove()
  chart5ShowToolTipA();

  //tooltip 1
  setTimeout(function() {
    d3.select("#chart5MaskClip2 rect")
    .transition()
    .duration(1000)
    .attr("width", width);

    showNextBtn('tooltipA')


  }, 500);
}

function transitionCounter2() {
    isTooltipBRemove = false;
    removeNextBtn()
    chart5RemoveToolTipA()
    isTooltipARemove = true;

    //Tooltip 2
    chart5svg.select("#chart5ToolTipB").remove();
    chart5svg.selectAll(".chart5ToolTipB").remove()
    chart5ShowToolTipB();

	// graph line 2
	if(!isBackTransition){
		var YLine2=chart5svg.append("path")
		  .attr("id", "chart5GraphLine2")
		  .attr("class", "line")
		  .style("stroke", colorRed)
		  .attr("stroke-width", 3)
		  .attr("d", chart5Line2Area)
		  .attr("clip-path", "url(#chart5MaskVisible2)");

		  // graph line 2 with transition
		  transitionFunc(YLine2,2000,2300)
    }

    d3.select("#chart5MaskClip3 rect")
    .transition()
    .duration(1000)
    .attr("width", width);

    d3.selectAll('text.chart5ToolTipB')
      .transition()
      .delay(2000)
      .duration(500)
      .style('opacity','1')

    setTimeout(function() {
        showNextBtn('tooltipB')
    },1800)

}

function transitionCounter3() {
    isTooltipCRemove = false;
    removeNextBtn()

    chart5RemoveToolTipB()
    isTooltipBRemove = true;

    chart5svg.select("#chart5ToolTipC").remove();
    chart5svg.selectAll(".chart5ToolTipC").remove()
    chart5ShowToolTipC();
    //Tooltip 3
    d3.select("#chart5MaskClip4 rect")
    .transition()
    .delay(2000)
    .duration(2000)
    .attr("width", width + 60);

    d3.selectAll('text.chart5ToolTipC')
      .transition()
      .delay(4000)
      .duration(500)
      .style('opacity','1')

    setTimeout(function() {
      showNextBtn('tooltipC')
    },3100)

    // trough impact image
    d3.select("#throughImpactImg")
          .transition()
          .delay(1000)
          .duration(500)
          .attr("r", 70);

    //trough impact text label
    setTimeout(function() {
      d3.select("#chart5MaskClip10 rect")
          .transition()
          .delay(300)
          .duration(1000)
          .attr("width", width);
    }, 1200)

    isBackTransition = false;

}

function transitionCounter4() {
    isTooltipDRemove = false;
    removeNextBtn()

    chart5RemoveToolTipC()
    isTooltipCRemove = true;

    //Tooltip 4
    chart5svg.select("#chart5ToolTipD").remove();
    chart5svg.selectAll(".chart5ToolTipD").remove()
    chart5ShowToolTipD();

    d3.select("#chart5MaskClip5 rect")
    .transition()
    .duration(1000)
    .attr("width", width + 60);

    showNextBtn('tooltipD')
}

function transitionCounter5() {
  isTooltipRemove = false;
  removeNextBtn()
  //graph line 3
  var YLine3=chart5svg.append("path")
    .attr("id", "chart5GraphLine3")
    .attr("class", "line")
    .style("stroke", colorRed)
    .attr("stroke-width", 3)
    .attr("d", chart5Line3Area)
    .attr("clip-path", "url(#chart5MaskVisible3)");

    //transition of graph line 3 with 2sec delay
    transitionFunc(YLine3,2000,1000);


    chart5RemoveToolTipD();
    isTooltipDRemove = true;
    chart5RemoveThroughImpact();

    //end of stress event text label
    d3.select("#chart5MaskClip11 rect")
        .transition()
        .delay(300)
        .duration(1000)
        .attr("width", width);

    //show end of stress event image
    d3.select("#endOfStressLineImg")
          .transition()
          .duration(500)
          .attr("r", 65);

    //Tooltip 5
    chart5svg.select("#chart5ToolTipE").remove();
    chart5svg.selectAll(".chart5ToolTipE").remove()
    chart5ShowToolTipE();
    setTimeout(function() {
      //show tooltip
      d3.select("#chart5MaskClip6 rect")
      .transition()
      .duration(1000)
      .attr("width", width);
    }, 1000);

    showNextBtn('tooltipE')

}

function transitionCounter6() {
  isTooltipFRemove = false;
  removeNextBtn()

  chart5RemoveToolTipE();
  isTooltipERemove = true;
  chart5RemoveEndofStress();

  //fundamnt earnings impact text label
  d3.select("#chart5MaskClip12 rect")
      .transition()
      .delay(300)
      .duration(1000)
      .attr("width", width);

  // show fundamental earnings image
  d3.select("#fundamentalImpactImg")
        .transition()
        .duration(500)
        .attr("r", 40);

  //Tooltip 6
  chart5svg.select("#chart5ToolTipF").remove();
  chart5svg.selectAll(".chart5ToolTipF").remove()
  chart5ShowToolTipF();
  setTimeout(function() {
    showSlantLine()
    d3.select("#chart5MaskClip8 rect")
    .transition()
    .duration(1000)
    .attr("width", width + 60);

    d3.selectAll('text.chart5ToolTipF')
      .transition()
      .delay(3000)
      .duration(1000)
      .style('opacity','1')

  }, 1000);

  setTimeout(function() {
    showNextBtn('tooltipF')
  }, 2400);

}
addTickMargin();

chart5svg.append("line")
  .attr("id", "chart2BaseLine")
  .style("stroke", colorBlue)
  .attr("stroke-width", 3)
  .attr("x1", 50)             // x position of the first end of the line
  .attr("y1", height + 40)    // y position of the first end of the line
  .attr("x2", 90)             // x position of the second end of the line
  .attr("y2", height + 40);

chart5svg.append("text")
  .text("基准情境")
  .attr("x", 95)
  .attr("y", height + 45)

chart5svg.append("line")
  .attr("id", "chart2StressLine")
  .style("stroke", colorRed)
  .attr("stroke-width", 3)
  .attr("x1", 290)              // x position of the first end of the line
  .attr("y1", height + 40)      // y position of the first end of the line
  .attr("x2", 245)              // x position of the second end of the line
  .attr("y2", height + 40);     // y position of the second end of the line

chart5svg.append("text")
  .text("压力情境")
  .attr("x", 300)
  .attr("y", height + 45)

var fchartYLabel = (window.innerWidth <= 768) ? 30 : 20;
//x axis 0 label
chart5svg.append("text")
    .attr("x", -12)
    .attr("y", height + fchartYLabel)
    .attr("class", "fchart-xaxis-label")
    .text("0")
    .style("text-anchor", "start");

//x axis year label
chart5svg.append("text")
    .attr("x", width + 10)
    .attr("y", height + 5)
    .attr("class", "fchart-xaxis-label-year")
    .text("年")
    .style("text-anchor", "start");

function createNextBtn(x,y){
  removeNextBtn()

  var nextBtnW = 30, nextBtnH = 30, nextBtnX = 55, nextBtnY = 20;
  if(window.innerWidth <= 768){
      nextBtnW = 40, nextBtnH = 40, nextBtnX = 70, nextBtnY = 27;
  }

  var nextBtn = chart5svg.append("g");

  nextBtn.append("svg:image")
    .attr("class", "fcNextBtn fcNextBtnImg")
    .attr("x", chart5x(x))
    .attr("y", chart5y(y))
    .attr("height", nextBtnH)    // set the height
    .attr("width", nextBtnW)
    .attr("xlink:href", fcAssetPath + 'fc_arrow_right.png')
    .style("opacity", "0")
    .on("click", nextTransition)

 nextBtn.append("text")
    .attr("class", "fcNextBtn fcNextBtnText")
    .attr("x", chart5x(x) - nextBtnX)
    .attr("y", chart5y(y) + nextBtnY)
    .text("下一页")
    .style("text-anchor", "left")
    .style("opacity", "0")
    .on("click", nextTransition)

  chart5svg.selectAll('.fcNextBtn').transition()
    .duration(500)
    .style('opacity','1')

}

function createBackBtn(x,y){

  var backBtnW = 30, backBtnH = 30, backBtnX = 40, backBtnY = 20;
  if(window.innerWidth <= 768){
      backBtnW = 40, backBtnH = 40, backBtnX = 50, backBtnY = 26;
  }

  var backBtn = chart5svg.append("g");

  backBtn.append("svg:image")
    .attr("class", "fcBackBtn fcBackBtnImg")
    .attr("x", chart5x(x))
    .attr("y", chart5y(y))
    .attr("height", backBtnH)    // set the height
    .attr("width", backBtnW)
    .attr("xlink:href", fcAssetPath + 'fc_arrow_left.png')
    .style("opacity", "0")
    .on("click", backTransition)

 backBtn.append("text")
    .attr("class", "fcBackBtn fcBackBtnText")
    .attr("x", chart5x(x) + backBtnX)
    .attr("y", chart5y(y) + backBtnY)
    .text("上一页")
    .style("text-anchor", "left")
    .style("opacity", "0")
    .on("click", backTransition)

  chart5svg.selectAll('.fcBackBtn').transition()
    .duration(500)
    .style('opacity','1')
}

function createReplayBtn(x,y){
  removeReplayBtn()

  var replayBtnW = 30, replayBtnH = 30, replayBtnX = 50, replayBtnY = 20;
  if(window.innerWidth <= 768){
      replayBtnW = 40, replayBtnH = 40, replayBtnX = 70, replayBtnY = 26;
  }

  var replayBtn = chart5svg.append("g");

      replayBtn.append("svg:image")
        .attr("class", "fcNextBtn fcNextBtnImg")
        .attr("x", chart5x(x))
        .attr("y", chart5y(y))
        .attr("height", replayBtnH)    // set the height
        .attr("width", replayBtnW)
        .attr("xlink:href", fcAssetPath + 'fc_arrow_right.png')
        .style("opacity", "0")
        .on("click", replayTransition)

     replayBtn.append("text")
        .attr("class", "fcNextBtn fcNextBtnText")
        .attr("x", chart5x(x) - replayBtnX)
        .attr("y", chart5y(y) + replayBtnY)
        .text("重复")
        .style("text-anchor", "left")
        .style("opacity", "0")
        .on("click", replayTransition)

      chart5svg.selectAll('.fcNextBtn').transition()
        .duration(500)
        .style('opacity','1')
}


function nextTransition() {
  transitionCtr++;
  if(transitionCtr<7){
      window['transitionCounter' + transitionCtr]()
  }
}

function backTransition() {
  transitionCtr--;
  if(transitionCtr>0){
      removeNextBtn();
      window['backTransitionCounter' + transitionCtr]()
      window['transitionCounter' + transitionCtr]()
  }
}

function backTransitionCounter1(){
  chart5RemoveToolTipB();
  isTooltipBRemove = false;
  chart5svg.selectAll("#chart5GraphLine2").remove();
}

function backTransitionCounter2(){
  chart5RemoveToolTipC();
  isTooltipCRemove = false;
  chart5RemoveThroughImpact();
  chart5svg.selectAll("#chart5GraphLine2").remove();
}

var isBackTransition = false;
function backTransitionCounter3(){
  isBackTransition = true;
  chart5RemoveThroughImpact()
  chart5RemoveToolTipD();
  isTooltipDRemove = false;
}

function backTransitionCounter4(){
  chart5RemoveToolTipE();
  isTooltipERemove = false;
  chart5RemoveEndofStress();
  chart5svg.select("#chart5GraphLine3").remove()

}

function backTransitionCounter5(){
  removeReplayBtn();
  chart5RemoveToolTipF();
  isTooltipFRemove = false;
  removeFundamentalImpact();
  removeSlantLine();
  chart5svg.select("#chart5GraphLine3").remove()
}

function replayTransition(){
  transitionCtr = 1;
  isTooltipARemove = false;isTooltipBRemove = false;isTooltipCRemove = false;
  isTooltipDRemove = false;isTooltipERemove = false;isTooltipFRemove = false;
  removeReplayBtn();
  chart5RemoveToolTipF();
  removeSlantLine();
  removeFundamentalImpact();
  chart5svg.selectAll("#chart5GraphLine1").remove()
  chart5svg.selectAll("#chart5GraphLine2").remove()
  chart5svg.selectAll("#chart5GraphLine3").remove()
  var YLine1=chart5svg.append("path")
        .attr("id", "chart5GraphLine1")
        .attr("class", "line")
        .style("stroke", colorBlue)
        .attr("stroke-width", 3)
        .attr("d", chart5Line1Area)
        .attr("clip-path", "url(#chart5MaskVisible)");
  transitionFunc(YLine1,1000,0);
  transitionCounter1();

}

function showNextBtn(tooltipT,fromResize){

  switch (tooltipT) {
    case 'tooltipA':
      var x1 = 89, y1 = 48, tout = 600;
      if(window.innerWidth <= 768){
        x1 = 88, y1 = 40, tout = 600;
      }
      break;
    case 'tooltipB':
    var x1 = 80.5, y1 = 17.5, tout = 200;
    var x2 = 57, y2 = 17.5, tout = 200;
      if(window.innerWidth <= 768){
        x1 = 85, y1 = 13, tout = 200;
        x2 = 53.5, y2 = 13, tout = 200;
      }
      break;
    case 'tooltipC':
      var x1 = 67, y1 = 16, tout = 900;
      var x2 = 42.5, y2 = 16, tout = 900;
      if(window.innerWidth <= 768){
        x1 = 87, y1 = 8.5, tout = 900;
        x2 = 51, y2 = 8.5, tout = 900;
      }
      break;
    case 'tooltipD':
      var x1 = 87, y1 = 31.5, tout = 500;
      var x2 = 63, y2 = 31.5, tout = 500;
      if(window.innerWidth <= 768){
        x1 = 85, y1 = 22, tout = 500;
        x2 = 51.3, y2 = 22, tout = 500;
      }
      break;
    case 'tooltipE':
      var x1 = 90, y1 = 31.5, tout = 1700;
      var x2 = 69.5, y2 = 31.5, tout = 1700;
      if(window.innerWidth <= 768){
        x1 = 86, y1 = 21, tout = 1700;
        x2 = 56.5, y2 = 21, tout = 1700;
      }
      break;
    case 'tooltipF':
      var x1 = 92, y1 = 19, tout = 1800;
      var x2 = 62, y2 = 19, tout = 1800;
      if(window.innerWidth <= 768){
        x1 = 89, y1 = 11, tout = 1800;
        x2 = 45.5, y2 = 11, tout = 1800;
      }
      break;
  }

  tout = (fromResize) ? 0 : tout;

  setTimeout(function() {
    if(tooltipT!='tooltipF') {
        createNextBtn(x1,y1)
        if(transitionCtr!=1){
            createBackBtn(x2,y2)
        }
    }else{
        createReplayBtn(x1,y1)
        createBackBtn(x2,y2)
      }
  },tout)
}

function removeNextBtn() {
  chart5svg.selectAll(".fcNextBtn").remove()
  chart5svg.selectAll(".fcBackBtn").remove()
}

function removeReplayBtn() {
  chart5svg.selectAll(".fcNextBtn").remove()
  chart5svg.selectAll(".fcBackBtn").remove()
}

function displayYAxisLabel(){
  var ylabelx = -45, ylabely = -25;
  if(window.innerWidth <= 768) {
    ylabelx = -45, ylabely = -30;
  }
  chart5svg.append("text")
      .attr("y", ylabely)
      .attr("x", ylabelx)
      .attr("dy", "1em")
      .attr("class", "axis-label")
      .style("text-anchor", "left")
      .style("font-weight", "bold")
      .text("投资组合价值(新元)");
}

function showSlantLine() {
  //slant line
  var slantLine = chart5svg.append("line")
    .attr("id","slantLine")
    .style("stroke", colorRed)
    .style("stroke-dasharray", ("9, 4"))
    .attr("x1", chart5x(60))
    .attr("y1", chart5y(52.5))
    .attr("x2", chart5x(60))
    .attr("y2", chart5y(52.5));

  slantLine.transition()
    .duration(1000)
    .attr("x1", chart5x(0))
    .attr("y1", chart5y(37.3))
}

function removeSlantLine(){
  d3.select("#slantLine").remove()
}

function chart5RemoveToolTipA() {
  d3.select("#chart5MaskClip2 rect")
      .attr("width", 0);
}

function chart5RemoveToolTipB() {
  d3.select("#chart5MaskClip3 rect")
      .attr("width", 0);
}

function chart5RemoveToolTipC() {
  d3.select("#chart5MaskClip4 rect")
      .attr("width", 0);
}

function chart5RemoveToolTipD() {
  d3.select("#chart5MaskClip5 rect")
      .attr("width", 0);
}

function chart5RemoveToolTipE() {
  d3.select("#chart5MaskClip6 rect")
      .attr("width", 0);
}

function chart5RemoveToolTipF() {
  d3.select("#chart5MaskClip8 rect")
      .attr("width", 0);
}

function chart5RemoveThroughImpact() {

  //trough impact text label
  d3.select("#chart5MaskClip10 rect")
      .attr("width", 0);
  // trough impact image
  d3.select("#throughImpactImg")
      .attr("r", 0)
}

function chart5RemoveEndofStress() {

  //hide end of stress event text label
  d3.select("#chart5MaskClip11 rect")
      .attr("width", 0);
  //hide end of stress event image
  d3.select("#endOfStressLineImg")
      .attr("r", 0)
}

function chart5ShowEndofStressLine(){
  var defs = chart5svg.append('svg:defs');

  defs.append("svg:pattern")
          .attr("id", "endOfStressLineImgCont")
          .attr("width", 120)
          .attr("height", 120)
          .attr("patternUnits", "userSpaceOnUse")
          .append("svg:image")
          .attr("xlink:href", fcAssetPath + 'stress-line.png')
          .attr("width", 120)
          .attr("height", 120)
          .attr("x", 0)
          .attr("y", 0);

  var circle = chart5svg.append("circle")
          .attr("id","endOfStressLineImg")
          .attr("transform", "translate(510,35)")
          .attr("cx", 120 / 2)
          .attr("cy", 120 / 2)
          .attr("r", 0)
          .style("fill", "#fff")
          .style("fill", "url(#endOfStressLineImgCont)");
}

function chart5ShowThroughImpact(){
  var defs = chart5svg.append('svg:defs');

  defs.append("svg:pattern")
          .attr("id", "throughImpactImgCont")
          .attr("width", 140)
          .attr("height", 140)
          .attr("patternUnits", "userSpaceOnUse")
          .append("svg:image")
          .attr("xlink:href", fcAssetPath + 'ti-arrow.png')
          .attr("width", 140)
          .attr("height", 140)
          .attr("x", 0)
          .attr("y", 0);

  var circle = chart5svg.append("circle")
          .attr("id","throughImpactImg")
          .attr("transform", "translate(140,130)")
          .attr("cx", 140 / 2)
          .attr("cy", 140 / 2)
          .attr("r", 0)
          .style("fill", "#fff")
          .style("fill", "url(#throughImpactImgCont)");
}

function chart5ShowFundamentalImpact() {
  var defs = chart5svg.append('svg:defs');

  defs.append("svg:pattern")
          .attr("id", "fundamentalImpactImgCont")
          .attr("width", 80)
          .attr("height", 80)
          .attr("patternUnits", "userSpaceOnUse")
          .append("svg:image")
          .attr("xlink:href", fcAssetPath + 'fei-arrow.png')
          .attr("width", 80)
          .attr("height", 80)
          .attr("x", 0)
          .attr("y", 0);

  var circle = chart5svg.append("circle")
          .attr("id","fundamentalImpactImg")
          .attr("transform", "translate(517,57)")
          .attr("cx", 80 / 2)
          .attr("cy", 80 / 2)
          .attr("r", 0)
          .style("fill", "#fff")
          .style("fill", "url(#fundamentalImpactImgCont)");
}

function removeFundamentalImpact(){
  // hide fundamnt earnings impact text label
  d3.select("#chart5MaskClip12 rect")
      .attr("width", 0);
  // hide fundamental earnings image
  d3.select("#fundamentalImpactImg")
      .attr("r", 0)
}

var isTooltipARemove = false;
function chart5ShowToolTipA() {
  var tooltipW = 250,tooltipH = 160,tooltipPadT = 45,tooltipPadR = 20,tooltipX = 65,tooltipY = 65, nextBtnPadR = 140;
  if(window.innerWidth <= 768) {
      tooltipW = 340,tooltipH = 240,tooltipPadT = 75,tooltipPadR = 15,tooltipX = 55,tooltipY = 65, nextBtnPadR = 140;
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipA",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "我们的投资组合价值预计会随着|时间变化按预期的基准情境|回报率增长。",
    maskClipId: "chart5MaskClip2",
    calloutImg: 'fc-callout1.png',
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR,
    nextPaddingRight: nextBtnPadR
  });


}

var isTooltipBRemove = false;
function chart5ShowToolTipB() {
  var tooltipW = 458,tooltipH = 322,tooltipPadT = 5,tooltipPadR = 215,tooltipX = 32,tooltipY = 41;
  var fcCallout2Img = 'fc-callout2.png';

  if(window.innerWidth <= 768) {
      tooltipW = 518,tooltipH = 350,tooltipPadT = 10,tooltipPadR = 185,tooltipX = 31.5,tooltipY = 45;
	  fcCallout2Img = 'fc-callout2-mobile.png';
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipB",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "我们评估投资组合的潜在持续损失，|并根据不同的地理区域分布和事件|的压力情境测试投资组合的韧性。| |红色线体现我们的预测在|压力情境下所产生的变化。",
    maskClipId: "chart5MaskClip3",
    calloutImg: fcCallout2Img,
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR
  });
}

var isTooltipCRemove = false;
function chart5ShowToolTipC() {
  var tooltipW = 390,tooltipH = 270,tooltipPadT = 90,tooltipPadR = 140,tooltipX = 26,tooltipY = 47;
  if(window.innerWidth <= 768) {
      tooltipW = 580,tooltipH = 370,tooltipPadT = 120,tooltipPadR = 215,tooltipX = 26,tooltipY = 53;
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipC",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "在压力情境下，我们的投资组合价值|可能受到市场过度反应和短期风险|趋避提高的影响。| |波谷冲击影响完全显示了以上这一点。",
    maskClipId: "chart5MaskClip4",
    calloutImg: 'fc-callout3.png',
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR
  });
}

var isTooltipDRemove = false;
function chart5ShowToolTipD() {
  var tooltipW = 290,tooltipH = 186,tooltipPadT = 60,tooltipPadR = 30,tooltipX = 60, tooltipY = 52;
  if(window.innerWidth <= 768) {
      tooltipW = 350,tooltipH = 250,tooltipPadT = 80,tooltipPadR = 13,tooltipX = 50,tooltipY = 50;
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipD",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "但这只是短暂的。参照过去的情况，|市场一般会从波谷中恢复过来，|并在压力情境结束后趋向正常。",
    maskClipId: "chart5MaskClip5",
    calloutImg: 'fc-callout4.png',
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR
  });
}

var isTooltipERemove = false;
function chart5ShowToolTipE() {
  var tooltipW = 270,tooltipH = 230,tooltipPadT = 80,tooltipPadR = 33,tooltipX = 66,tooltipY = 58;
  if(window.innerWidth <= 768) {
      tooltipW = 400,tooltipH = 320,tooltipPadT = 110,tooltipPadR = 60,tooltipX = 50,tooltipY = 58;
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipE",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "我们预测投资组合价值会随着|时间变化恢复到之前的增长率，|但基于重大压力情境，会从较|低的起点开始。",
    maskClipId: "chart5MaskClip6",
    calloutImg: 'fc-callout5.png',
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR
  });
}

var isTooltipFRemove = false;
function chart5ShowToolTipF() {
  var tooltipW = 312,tooltipH = 279,tooltipPadT = 80,tooltipPadR = 12,tooltipX = 60.5,tooltipY = 52.5,calloutImg = 'fc-callout6.png';
  if(window.innerWidth <= 768) {
      tooltipW = 440,tooltipH = 380,tooltipPadT = 115,tooltipPadR = 15,tooltipX = 44,tooltipY = 54.5,calloutImg = 'fc-callout7.png';
  }
  chart5ShowToolTip({
    toolTipId: "chart5ToolTipF",
    rectXCoor: chart5x(tooltipX),
    rectYCoor: chart5y(tooltipY),
    width: tooltipW,
    height: tooltipH,
    dotted: false,
    outlineColor: colorRed,
    textValue: "这个差异显示了持续基本收益对投资组合的|影响，是淡马锡管理投资组合时所关注的。| |市场低靡是不可避免的，但了解各种|压力情境对淡马锡投资组合所带来的|潜在影响，有助于我们制定应对措施。",
    maskClipId: "chart5MaskClip8",
    calloutImg: calloutImg,
    textPaddingTop: tooltipPadT,
    textPaddingRight: tooltipPadR
  });

}

function chart5ShowToolTip(params) {
  var textArr = params.textValue.split("|");
  var textLength = textArr.length;
  var indexOfNewLine = textArr.indexOf(" ");
  var aToolTip = chart5svg.append("g");

  aToolTip.append("svg:image")
    .attr("id", params.toolTipId)
    .attr("x", params.rectXCoor)
    .attr("y", params.rectYCoor)
    .attr("height", params.height)    // set the height
    .attr("width", params.width)
    .attr("xlink:href", fcAssetPath + params.calloutImg)
    .attr("clip-path", "url(#" + params.maskClipId + ")")

  var textYM = (window.innerWidth <= 768) ? 31 : 23;
  var y = params.rectYCoor;
  for (var i=0; i<textLength; i++) {
    var isHide = ((indexOfNewLine > 1) && (i > indexOfNewLine)) ? 'opac' : '';

    y += (i==indexOfNewLine) ? 12 : textYM;

    aToolTip
        .append("text")
        .attr("x", params.rectXCoor + params.textPaddingRight)
        .attr("y", y + params.textPaddingTop)
        .text(textArr[i])
        .attr("class", params.toolTipId + " " + isHide)
        .style("text-anchor", "start")
        .attr("clip-path", "url(#" + params.maskClipId + ")")
  }

}


function chart5ShowLabelA() {
  showMultiLineLabel({
    labelId: "chart5LabelA",
    rectXCoor: chart5x(11),
    rectYCoor: chart5y(45.5),
    width: 60,
    height: 50,
    dotted: false,
    outlineColor: colorRed,
    textValue: "波谷冲击影响",
    maskClipId: "chart5MaskClip10",
    textPaddingTop: 0,
    textPaddingRight1: 0,
    textPaddingRight2: 0,
    rotate1: 0,
    rotate2: 0
  });
}

function chart5ShowLabelB() {
  showMultiLineLabel({
    labelId: "chart5LabelB",
    rectXCoor: chart5x(48),
    rectYCoor: chart5y(58),
    width: 60,
    height: 50,
    dotted: false,
    outlineColor: colorRed,
    textValue: "压力情境结束",
    maskClipId: "chart5MaskClip11",
    textPaddingTop: 0,
    textPaddingRight1: 45,
    textPaddingRight2: 0,
    rotate1: 0,
    rotate2: 0
  });
}


function chart5ShowLabelC() {
  showMultiLineLabel({
    labelId: "chart5LabelC",
    rectXCoor: chart5x(65),
    rectYCoor: chart5y(44.5),
    width: 60,
    height: 50,
    dotted: false,
    outlineColor: colorRed,
    textValue: "基本收益影响",
    maskClipId: "chart5MaskClip12",
    textPaddingTop: 0,
    textPaddingRight1: 0,
    textPaddingRight2: 0,
    rotate1: -11,
    rotate2: -11
  });
}

function showMultiLineLabel(params) {

  var textArr = params.textValue.split("|");
  var textLength = textArr.length;
  var aLabelText = chart5svg.append("g");

  var textYM = 20;
  var y = params.rectYCoor;

  aLabelText
      .append("text")
      .attr("x", params.rectXCoor + params.textPaddingRight1)
      .attr("y", y + params.textPaddingTop)
      .text(textArr[0])
      .attr("class", params.labelId + " chartLabel" )
      .style("text-anchor", "start")
      .attr("clip-path", "url(#" + params.maskClipId + ")")
      .attr("transform", "rotate("+ params.rotate1 +")");
}

//function to give animation for each path
function transitionFunc(pathName,animationDuration,animationDelay) {
      var totalLength = pathName.node().getTotalLength();
      pathName
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .ease(d3.easeLinear)
      .duration(animationDuration)
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

        var dashCount = Math.ceil( totalLength / dashLength );
  var newDashes = new Array(dashCount).join( dashing + " " );
  var dashArray = newDashes + " 0, " + totalLength;

  pathName.attr("stroke-dashoffset", totalLength)
        .attr("stroke-dasharray", dashArray)
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .delay(animationDelay)
        .attr("stroke-dashoffset", 0);
}

function addTickMargin() {
  d3.select('.x.axis .tick text').attr('y', 8);
}

var isResizing;
function resize() {
  removeNextBtn()
  dynamicChartHeight();

  //check if resize is done
  //if done call resizedw
  clearTimeout(isResizing);
  isResizing = setTimeout(resizedw,100);
}

function resizedw(){
  //redraw new tooltip
  if(!isTooltipARemove) {
    chart5svg.select("#chart5ToolTipA").remove();
    chart5svg.selectAll(".chart5ToolTipA").remove()
    chart5ShowToolTipA();
  }

  if(!isTooltipBRemove) {
    chart5svg.select("#chart5ToolTipB").remove();
    chart5svg.selectAll(".chart5ToolTipB").remove()
    chart5ShowToolTipB();
    d3.selectAll('text.chart5ToolTipB')
      .style('opacity','1');
  }
  if(!isTooltipCRemove) {
    chart5svg.select("#chart5ToolTipC").remove();
    chart5svg.selectAll(".chart5ToolTipC").remove()
    chart5ShowToolTipC();
    d3.selectAll('text.chart5ToolTipC')
      .style('opacity','1');
  }
  if(!isTooltipDRemove) {
    chart5svg.select("#chart5ToolTipD").remove();
    chart5svg.selectAll(".chart5ToolTipD").remove()
    chart5ShowToolTipD();
  }
  if(!isTooltipERemove) {
    chart5svg.select("#chart5ToolTipE").remove();
    chart5svg.selectAll(".chart5ToolTipE").remove()
    chart5ShowToolTipE();
  }
  if(!isTooltipFRemove) {
    chart5svg.select("#chart5ToolTipF").remove();
    chart5svg.selectAll(".chart5ToolTipF").remove()
    chart5ShowToolTipF();
    d3.selectAll('text.chart5ToolTipF')
      .style('opacity','1');
  }

  if(window.innerWidth <= 768) {
    chart5svg.selectAll(".fchart-xaxis-label").attr("y", height + 30)
  }else{
    chart5svg.selectAll(".fchart-xaxis-label").attr("y", height + 20)
  }

  if(transitionCtr==1) showNextBtn('tooltipA', 'r')
  if(transitionCtr==2) showNextBtn('tooltipB', 'r')
  if(transitionCtr==3) showNextBtn('tooltipC', 'r')
  if(transitionCtr==4) showNextBtn('tooltipD', 'r')
  if(transitionCtr==5) showNextBtn('tooltipE', 'r')
  if(transitionCtr==6) showNextBtn('tooltipF', 'r')

}


function dynamicChartHeight(){
  var svg = d3.select("svg.ed-svg-content-responsive");
  var svgHeight = svg.style("height");
  d3.selectAll('.ed-svg-container').style('height',svgHeight)
}
