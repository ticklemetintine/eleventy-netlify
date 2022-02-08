/*
Temasek Review 2019 - Total Shareholder Return by Market Value
by Edge Digital. Made with d3.js.
*/

var trsmvAssetPath = "/ed/tsrmv-chart/zh/";
// var trsmvAssetPath = "./";

var barHeight = 0;
var visibleBar = ['trsm'];
var formatDecimal = d3.format(".2f"),
      formatRound = d3.format(".0f");
var isFormatToDecimal = false;

let tr = {
    "trsm" : {
        "data" : [
            {label:"1", text:"25", value:24.53},
            {label:"3", text:"7",value:7.29},
            {label:"10", text:"7",value:6.69},
            {label:"20", text:"8",value:7.85},
            {label:"30", text:"13",value:12.63},
            {label:"40", text:"13",value:13.16},
            {label:"自1974年以来", text:"14",value:14.50}
        ],
        "title" : "按市值以新元计算的股东总回报率",
        "description" : "按市值计算的股东总回报率考虑投资组合市值的变化、派发的股息，并扣除任何注入淡马锡的新资本。"
    },
    "rac" : {
        "data" : [
            {label:"1", text:"6", value:6.10},
            {label:"3",text:"7", value:6.75},
            {label:"10",text:"7", value:7.42},
            {label:"20",text:"8", value:8.25},
            {label:"30", text:"9",value:8.56},
            {label:"40",text:"9", value:8.78},
            {label:"自1974年以来", text:"9", value:9.06}
        ],
        "title" : "经风险调整后的资金成本",
        "description" : "经风险调整后的资金成本反映了我们的投资所面对的各种风险，并根据资本资产定价模型计算，自下而上建立，覆盖我们所有的投资。"
    },
    "tsr" : {
        "data" : [
        {label:"1", text:"5",value:5.45},
        {label:"3", text:"6",value:6.30},
        {label:"10", text:"7",value:6.91},
        {label:"20", text:"8",value:8.44},
        {label:"30", text:"11",value:11},
        {label:"40", text:"12",value:11.77},
            {label:"自1974年以来", text:"13",value:13.49}
        ],
        "title" : "按股东权益以新元计算的股东总回报率",
        "description" : "按股东权益计算的股东总回报率考虑我们投资组合公司的基本盈利能力、投资活动的实际回报、派发的股息，并扣除任何注入淡马锡的新资本。"
    },
    "msci" : {
        "title" : "MSCI指数"
    },
    "mcis" : {
        "data" : [
            {label:"1", text:"32",value:32.40},
            {label:"3", text:"2",value:1.53},
            {label:"10",text:"4", value:3.67},
            {label:"20", text:"6",value:6.27},
            {label:"30", text:"6",value:6.05},
            {label:"40",text:"6", value:5.62},
            {label:"自1974年以来", text:"7", value:7.22}
        ],
        "title" : "MSCI新加坡指数",
        "description" : "MSCI新加坡指数衡量新加坡股市大中型企业的业绩表现。"

    },
    "mcia" : {
        "data" : [
            {label:"1",text:"48", value:48.45},
            {label:"3",text:"10", value:9.82},
            {label:"10",text:"7", value:7.34},
            {label:"20",text:"8", value:8.50},
            {label:"30", text:"NA",value:0},
            {label:"40",text:"NA", value:0},
            {label:"自1974年以来", text:"NA", value:0}
        ],
        "title" : "MSCI亚洲 (日本除外)指数",
        "description" : "MSCI亚洲 (日本除外) 指数衡量除了日本以外亚洲大中型企业的业绩表现。"
    },
    "mciw" : {
        "data" : [
            {label:"1",text:"45", value:45.35},
            {label:"3",text:"14", value:13.75},
            {label:"10",text:"11", value:10.58},
            {label:"20",text:"5", value:5.44},
            {label:"30",text:"7", value:7.14},
            {label:"40",text:"8", value:8.30},
            {label:"自1974年以来", text:"8",value:8.34}
        ],
        "title" : "MSCI全球指数",
        "description" : "MSCI全球指数衡量全球23个发达市场大中型企业的业绩表现。"
    }
}

//resize chart container
var labelfontSize = 15;
var maxAxis = 0;
var margin =
    {
        top: 30,
        right: 50,
        bottom: (parseInt(d3.select('.ed-chart').style('height'), 10)/20),
        left: 120
    },
    width = parseInt(d3.select('.ed-chart').style('width'), 10) - margin.left - margin.right;
    height = parseInt(d3.select('.ed-chart').style('height'), 10) - margin.top - margin.bottom;


var y = d3.scaleBand()
		.rangeRound([height, 5])
		.padding([.2, .5])

var x = d3.scaleLinear()
        .range([0, width]);

var xAxis = d3.axisBottom(x)
		.tickFormat(function(d){ return " ";});

var yAxis = d3.axisLeft(y)
		.tickFormat(function(d) { return d; })
		.tickSize(0);

var svg = d3.select(".ed-chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", width + margin.top + margin.bottom)
        .attr('class', 'ed-svg')
        .append("g")
        .attr("transform", "translate(" + margin.left +"," + margin.top + ")");

svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

resize();

//display toggled description
displayTitle();
//display custom label in y axis
displayYAxisLabel();
//set dynamic axis
change(tr['trsm']['data']);

//insert default
var defaultSet = [];
defaultSet['trsm'] = tr['trsm']['data'];
insertBar(0,'trsm',defaultSet);

d3.select(window).on("resize", resize);

d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
        this.parentNode.appendChild(this);
    });
};

labelLeftAlign();

function selectDataset(value) {
    var attr = (d3.select('li.' + value).classed("active")) ? true : false;

    if(attr) {
        if(value=="msci" || value.substring(0,3)=="mci"){
            svg.selectAll("rect.mcis,rect.mcia,rect.mciw").remove()
            svg.selectAll("text.label-mcis,text.label-mcia,text.label-mciw").remove()
            removebar(new Array('mcis','mcia','mciw'))
            visibleBar.push('mcis','mcia','mciw');
        } else {
            visibleBar.push(value);
        }
    } else {
        if(value=="msci") {
            removebar(new Array('mcis','mcia','mciw'))
            d3.selectAll('li.mcis,li.mcia,li.mciw').classed('hide',true)
        } else {
            removebar(new Array(value))
        }
    }

    switch(value){
        case 'rac':
            var rm = ['tsr', 'mcis', 'mcia', 'mciw'];
            removebar(rm);
            toggleBar('rac', tr['rac']['data'], attr);
            closeMcisSub();
            break;
        case 'tsr':
            var rm = ['rac', 'mcis', 'mcia', 'mciw'];
            removebar(rm);
            toggleBar('tsr', tr['tsr']['data'], attr);
            closeMcisSub();
            break;
        case 'msci':
        case 'mcis':
        case 'mcia':
        case 'mciw':
            var rm = ['rac', 'tsr'];
            removebar(rm);
            toggleBar('msci', tr['mcis']['data'], attr);
            break;
    }
}

function closeMcisSub() {
    d3.select('li.msci').classed('active', false)
    d3.selectAll('li.mcis,li.mcia,li.mciw').classed('hide',true)
}

function change(dataset) {

    y.domain(dataset.map(function(d) { return d.label; }));
    x.domain([0, d3.max(dataset, function(d) { return d.value; })]);

    if(d3.max(dataset, function(d) { return d.value; }) != maxAxis){

        maxAxis = d3.max(dataset, function(d) { return d.value; })

        barHeight = y.bandwidth();

        svg.select(".y.axis").remove();
        svg.select(".x.axis").remove();

        svg.append("g")
                .attr("class", "y axis")
                //.attr("transform", "translate(0," + height + ")")
                .call(yAxis)
                .attr("transform", "rotate(0)")
                .attr("dx", ".1em")
                .style("text-anchor", "end");

        d3.selectAll(".tick text")
            .call(wrap, barHeight)

        labelLeftAlign();
    }
}

function toggleBar(ind, dataset, toggleBarState) {

    var newbarHeight = barHeight/visibleBar.length;
    var maxVal = 0;
    var maxkey = "";

    //dynamic axes
    visibleBar.map(function(d,i){
        var newmax = d3.max(tr[d]['data'], function(d) { return d.value; });
        if( newmax > maxVal){
            maxVal = newmax;
            maxkey = d;
        }
    })

    //changing axes
    change(tr[maxkey]['data']);

    //dynamic changing height of existing bar
    visibleBar.map(function(d,i){

        // set variable for updating visualization
        var barsUpdate = svg.selectAll("rect." + d);

        barsUpdate.moveToFront();
        // change values of path to those of the new series
        barsUpdate.transition()
            .duration(500)
            .attr("y", function(d) { return y(d.label) + (newbarHeight*i); })
            .attr("height", newbarHeight)
            //.attr("x", function(d) { return 0.4; })
			.attr("x", function(d) { if (d.value >=0) { return x(Math.min(0, d.value)) + 1 ; } else { return x(Math.min(0, d.value)) }; })
            //.attr("width", function(d) { return x(d.value) });
			.attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })

        var m = labelfontSize - ((visibleBar.length > 3) ? 3 : visibleBar.length );

        var textUpdate = svg.selectAll("text.label-" + d);
		textUpdate.moveToFront(); // Show text on top of the bar for negative values

		// spaceBuffer is for the vertical alignment of bar text, for positive and negative values, as well as for responsive
		if(window.innerWidth > 425 && window.innerWidth <= 768){ spaceBuffer = 3; }
		else if(window.innerWidth <= 425){ spaceBuffer = 2; }
		else{ spaceBuffer = 4; }

        textUpdate.transition()
            .duration(500)
            .attr("height", newbarHeight)
            .attr("x", function(d) {  return x(d.value) +  5 })
            .attr("y", function(d) { return y(d.label) + (newbarHeight*(i)) + ((newbarHeight-m)/2) + (m/2) + spaceBuffer })
            .attr("font-size", m + "px")

        d3.select('li.' + d).attr('class', d + ' active')
    })

    //insert new bar
    if(toggleBarState){

        var newDataset = {};
        if(ind=="msci"){
            newDataset = {'mcis':tr['mcis']['data'],'mcia':tr['mcia']['data'],'mciw':tr['mciw']['data']};
        }else{
            newDataset[ind] = dataset;
        }

        var i = 1;
        for (var key in newDataset) {
            insertBar(i,key,newDataset);
            i++;
        }
    }
}

function insertBar(i,key,newDataset) {

    var newbarHeight = barHeight/visibleBar.length;

    var newBar = svg.selectAll("." + key)
                .data(newDataset[key], function(d) { return d.label; });

    // new data:
    newBar.enter().append("rect")
            .attr("class", function(d) { return key + " bar-" + (d.value < 0 ? "negative" : "positive"); })
			.attr("height", newbarHeight)
			.attr("y", function(d) { return y(d.label) + (newbarHeight*(i))  })
			.transition()
			.duration(800)
            //.attr("x", 0.4)
			.attr("x", function(d) { if (d.value >=0) { return x(Math.min(0, d.value)) + 1 ; } else { return x(Math.min(0, d.value)) } })
            //.attr("width", function(d) { return x(d.value) });
			.attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })

    //Add the SVG Text Element to the svgContainer
    var text = svg.selectAll(".sm.label-" + key)
            .data(newDataset[key]);

    var m = labelfontSize - ((visibleBar.length > 3) ? 3 : visibleBar.length );

	// spaceBuffer is for the alignment of bar text, for positive and negative values, as well as for responsive
	var spaceBuffer = 0;

	if(window.innerWidth > 425 && window.innerWidth <= 768){ spaceBuffer = 3; }
	else if(window.innerWidth <= 425){ spaceBuffer = 2; }
	else{ spaceBuffer = 4; }

    text.enter()
        .append("text")
        .attr("height", newbarHeight)
        .attr("x", function(d) {  return x(d.value) +  5; })
        .attr("y", function(d) { return y(d.label) + (newbarHeight*(i)) + ((newbarHeight-m)/2) + (m/2) + spaceBuffer })
        .attr("class",  function (d) { return "sm label-" + key})
        .attr("font-size", m + "px")
        .attr("fill", "black")
		.transition().delay(600)
        //.attr('opacity', 1)
        .text(function(d) { return d['text']; }) //set the custom text

}

function removebar(indBar) {

    for (var i = indBar.length -1; i >= 0; i--){
        var barIndex = visibleBar.indexOf(indBar[i]);
        if(barIndex !== -1){
            visibleBar.splice(barIndex, 1);
            svg.selectAll("rect." + indBar[i])
                .transition()
                .duration(500)
                .attr("width", 0 )
                .attr("x", 1 )
                .remove();

            svg.selectAll("text.sm.label-" + indBar[i])
                .transition()
                .attr("opacity", 0 )  // Animation when removing the value of the bar beside it, instead of x, i use opacity as the attr
                .duration(500)
                .remove();

            if(d3.select('li.' + indBar[i]).classed("active")){
                d3.select('li.' + indBar[i]).classed('active',false)
                d3.select('li.' + indBar[i] + ' div').remove()
            }
        }
    }
}

function displayTitle() {
    var pairlist = d3.entries(tr);

    var ul = d3.select('.ed-desc')
                .append('ul')
                .attr('class', 'ed-list');

    ul.selectAll('li')
        .data(pairlist)
        .enter()
        .append('li')
        .html(function(d) {
           if (d.key != 'tsr'){
               return d.value.title
           }
           else {
             return "<span class=\"ed-tooltip\">" + d.value.title + "</span>"
          }
        })
        .attr("class", function(d) { return d.key + " " + ((d.key.substring(0,3)=="mci") ? "hide" : "") })
        .on("click", function (d) {
            if(d.key!='trsm'){

                toggleDesc(d.key)
                selectDataset(d.key)

                var scrollable = d3.select("li." + d.key).node().offsetTop;
                var scrollheight = scrollable;

                d3.select(".ed-desc")
                    .transition()
                    .delay(50)
                    .duration(750)
                    .tween("scroll", scrollTopTween( scrollheight));

            }
        });

    ul.selectAll('li.trsm')
        .append('div')
        .attr('disabled', true)
        .html(tr.trsm.description)

    ul.selectAll('li.tsr')
        .append('span')
        .attr('class', "tooltiptext")
        .html("根据股东权益计算，但未计算持股低于20%的投资的市值变动。")
}

function toggleDesc(k) {
    if(d3.select('li.' + k).classed("active")){
        d3.select('li.' + k).classed('active',false)
        d3.select('li.' + k + ' div').remove()
    }else{

        if(k=="msci"){
            d3.select('li.' + k)
                .attr('class', k + ' active')
        }

        k = (k.substring(0,3)=="mci"||k=="msci") ? 'mcis,mcia,mciw' : k

        k = k.split(",");
        for (var i=0; i < k.length; i++){
            d3.select('li.' + k[i])
            .attr('class', k[i] + ' active')
            .append('div')
            .html(tr[k[i]]['description'])
        }
    }
}

function resize() {

    var isMobile = false;

	if(window.innerWidth > 425 && window.innerWidth <= 768) {
		isMobile = true;
        margin.left = 150;
	}
    else if(window.innerWidth <= 425) {
        isMobile = true;
        margin.left = 100;
    }
	else {
        margin.left = 130;
    }

    svg.attr("transform", "translate(" + margin.left +"," + margin.top + ")");

    width = parseInt(d3.select('.ed-chart').style('width'), 10) - margin.left - margin.right,
    height = parseInt(d3.select('.ed-chart').style('height'), 10) - margin.top - margin.bottom;

    if(isMobile){
        labelfontSize = 11;
        resizeChartSize();

    }else{
        labelfontSize = 15;
        resizeChartSize();
    }

	removePeriodYearsTooltip();

    // Update the range of the scale with new width/height
    x.range([0, width]);

    // Force D3 to recalculate and update the line, and fix bar width with negative values to return a positive value
    svg.selectAll("rect")
        .attr("width", function(d) { return x( Math.abs(d.value) ); });

    svg.selectAll("text.sm")
        .attr("width", function(d) { return x(d.value); })
        .attr("x", function(d) {  return x(d.value) +  10 })
        .attr("height", y.bandwidth());

	// Reposition all negative bar on center domain axis if resized
	svg.selectAll("rect.bar-negative")
        .attr("x", function(d) { if (d.value < 0) { return x(Math.min(0, d.value)) - 0; } });

}

function resizeChartSize() {

    y.rangeRound([height, 0])
		.padding(.2, 0.5);

    barHeight = y.bandwidth();

    svg.select(".y.axis").remove();

    var newbarHeight = barHeight/visibleBar.length;

    visibleBar.map(function(d,i){

        var barsUpdate = svg.selectAll("rect." + d);

        barsUpdate.attr("y", function(d) { return y(d.label) + (newbarHeight*i); })
            .attr("height", newbarHeight)
            // .attr("x", function(d) { return 0.4; })
            // .attr("width", function(d) { return x(d.value) });

			// Updated the formula for getting x and width so that negative values stay on the axis even when you resize
			.attr("x", function(d) { if (d.value >=0) { return x(Math.min(0, d.value)) + 1 ; } else { return x(Math.min(0, d.value)) } })
			.attr("width", function(d) { return Math.abs(x(d.value) - x(0)) ; })

        var m = labelfontSize - ((visibleBar.length > 3) ? 3 : visibleBar.length );

        var textUpdate = svg.selectAll("text.label-" + d);

		var spaceBuffer = 0;
		if(window.innerWidth > 425 && window.innerWidth <= 768){ spaceBuffer = 3; }
		else if(window.innerWidth <= 425){ spaceBuffer = 2; }
		else{ spaceBuffer = 4; }

        textUpdate.attr("height", newbarHeight)
            .attr("x", function(d) {  return x(d.value) +  5 })
            .attr("y", function(d) { return y(d.label) + (newbarHeight*(i)) + ((newbarHeight-m)/2) + (m/2) + spaceBuffer })
            .attr("font-size", m + "px")
    })

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(-100," + height + ")")
        .call(yAxis)
        .attr("transform", "rotate(0)")
        .attr("dx", ".1em")
        .style("text-anchor", "end");

    d3.selectAll(".tick text")
        .call(wrap, barHeight)

	svg.select('text.axis-label')
		.attr("dy",
			function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return 29.7 + 'em'; }
						  if(window.innerWidth <= 425){ return 29.5 + 'em'; }
						  else { return 32 + 'em'; } })

	// Updating the axis-label-line when window is resized (This is the line below Period (in years))
	svg.select('line.axis-label-line')
		.attr("x1", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return -142; }
						  else if(window.innerWidth <= 425){ return -100; }
						  else { return -125; }  })
		.attr("y1", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return 362; }
						  else if(window.innerWidth <= 425){ return 358; }
						  else { return 486; }  })
		//.attr("x2", -13)
		.attr("x2", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return -78; }
						  else if(window.innerWidth <= 425){ return -39; }
						  else { return -48; } })
		.attr("y2", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return 362; }
						  else if(window.innerWidth <= 425){ return 358; }
						  else { return 486; }  })


	var tsrmvTooltipX = -130; var trsmvTooltipY = 440;

	if(window.innerWidth > 425 && window.innerWidth <= 768) {
		tsrmvTooltipX = -145; trsmvTooltipY = 320;
	} else if(window.innerWidth <= 425){
		tsrmvTooltipX = -100; trsmvTooltipY = 314; }

	 svg.select('image.trsmv-priod-tooltip')
		.attr("x", tsrmvTooltipX)
		.attr("y", trsmvTooltipY)

	svg.select('text.trsmv-priod-tooltip')
		.attr("x", tsrmvTooltipX + 5)
		.attr("y", trsmvTooltipY + 17)

    labelLeftAlign();

}

function scrollTopTween(scrollTop) {
    return function() {
      var i = d3.interpolateNumber(this.scrollTop, scrollTop);
      return function(t) { this.scrollTop = i(t); };
   };
}

function wrap(text, width) {

    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(",").reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy"));

		if(window.innerWidth > 425 && window.innerWidth <= 768){
            tspan = text.text(null).append("tspan").attr("x", -60).attr("y", y).attr("dy", dy + "em")
		}
		else if(window.innerWidth <= 425){
            tspan = text.text(null).append("tspan").attr("x", -15).attr("y", y).attr("dy", dy + "em")
		}
		else{
			tspan = text.text(null).append("tspan").attr("x", -25).attr("y", y).attr("dy", dy + "em")
		}

        while (word = words.pop()) {
            line.push(word)
            tspan.text(line.join(" "))
            if (tspan.node().getComputedTextLength() > width) {
            line.pop()
            tspan.text(line.join(" "))
            line = [word]
            xposition = (lineNumber>0) ? -70 : -50
            if(window.innerWidth <= 768){
                xposition = (lineNumber>0) ? -65 : -17
            }
			else if(window.innerWidth <= 776){
                xposition = (lineNumber>0) ? -70 : -45
            }

              tspan = text.append("tspan").attr("x", xposition).attr("y", -13).attr("dy", (++lineNumber * lineHeight + dy) + 'em').text(word)
            }
        }
    })

    //y axis label
    if(window.innerWidth > 425 && window.innerWidth <= 768){
		svg.select("text.axis-label").attr("x", (0 - margin.left) + 8);
    }
	else if(window.innerWidth <= 425){
		svg.select("text.axis-label").attr("x", (0 - margin.left));
    }else{
		svg.select("text.axis-label").attr("x", (0 - margin.left) + 5);
    }

}

function labelLeftAlign() {
    var transform,labelLength;
    d3.selectAll('.tick').attr('transform', function(){
        labelLength = d3.select(this).text();
        //transform = d3.transform(d3.select(this).attr("transform"));

        var translatex = (labelLength.length == 1) ? -92 : ((labelLength.length == 2) ? -85 : -5 );

		if ( labelLength.length > 2 ){
			translatex = 13;
		}

        if(window.innerWidth > 425 && window.innerWidth <= 768){
            translatex = (labelLength.length == 1) ? -77 : ((labelLength.length == 2) ? -71 : -71);

			if ( labelLength.length > 2 ){ translatex = -50; }
        }
		if(window.innerWidth <= 425){
            translatex = (labelLength.length == 1) ? -77 : ((labelLength.length == 2) ? -71 : -23);

			if ( labelLength.length > 2 ){ translatex = -5; }
        }
        //return "translate("+translatex+","+ transform.translate[1] +")";
        return "translate("+translatex+","+ getTranslation(d3.select(this).attr("transform"))[1] +")";
    });
}

function displayYAxisLabel(){

if(window.innerWidth > 425 && window.innerWidth <= 768){ yAxisLabeldy = 29.7; }
else if(window.innerWidth <= 425){ yAxisLabeldy = 29.5; }
else{ yAxisLabeldy = 32; }

	svg.append("text")
		.attr("y", 0)
		.attr("x", (30 - margin.left))
		.attr("dy", yAxisLabeldy + "em")
		.attr("class", "axis-label")
		.style("text-anchor", "left")
		.text("呈报期 (年)")
		.on("mouseover", showPeriodYearsTooltip)
		.on("click", showPeriodYearsTooltip)
		.on("mouseout", removePeriodYearsTooltip)

	svg.append("line")
		.attr("x1", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return -142; }
						  else if(window.innerWidth <= 425){ return -100; }
						  else { return -125; }  })
		.attr("y1", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return 362; }
						  else if(window.innerWidth <= 425){ return 358; }
						  else { return 486; }  })
		//.attr("x2", -13)
		.attr("x2", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return -78; }
						  else if(window.innerWidth <= 425){ return -39; }
						  else { return -48; } })
		.attr("y2", function(d) { if(window.innerWidth > 425 && window.innerWidth <= 768){ return 362; }
						  else if(window.innerWidth <= 425){ return 358; }
						  else { return 486; }  })
		.attr("class", "axis-label-line")
		.attr("stroke-width", 1)
		.attr("stroke", "#49176d")
		.attr("stroke-dashoffset", 0)
		.attr("stroke-dasharray", 1, 1)
}

createPeriodTooltip();
function createPeriodTooltip() {

var tsrmvTooltipX = -130;
var trsmvTooltipY = 435;

if(window.innerWidth > 425 && window.innerWidth <= 768) {
  tsrmvTooltipX = -145;
  trsmvTooltipY = 315;
} else if(window.innerWidth <= 425){
  tsrmvTooltipX = -100;
  trsmvTooltipY = 310;
}

  var periodYearTooltip = svg.append("g").attr("class", "tooltip-main-wrapper");

  periodYearTooltip.append("svg:image")
    .attr("class", "trsmv-priod-tooltip ed-period-tooltipImg")
    .attr("x", tsrmvTooltipX)
    .attr("y", trsmvTooltipY)
    .attr("height", 30)    // set the height
    .attr("width", 125)
    .attr("xlink:href", trsmvAssetPath + 'tsrmv-tooltip-zh.png')
    .style("opacity", "0")

  periodYearTooltip.append("text")
    .attr("class", "trsmv-priod-tooltip ed-period-tooltiptext")
    .attr("x", tsrmvTooltipX + 5)
    .attr("y", trsmvTooltipY + 17)
    .text("截至2021年3月31日。")
    .style("text-anchor", "left")
    .style("opacity", "0")
}

function showPeriodYearsTooltip() {
  if(d3.select('.trsmv-priod-tooltip').style("opacity")!= 0){
	d3.selectAll('.trsmv-priod-tooltip').style('opacity','0');
	d3.select('.tooltip-main-wrapper').moveToFront();
  }else{
    d3.selectAll('.trsmv-priod-tooltip').transition()
      .style('opacity','1')
	d3.select('.tooltip-main-wrapper').moveToFront();
  }
}

function removePeriodYearsTooltip() {
  d3.selectAll('.trsmv-priod-tooltip').style('opacity','0');
}

function resizePeriodYearsTooltip(){
  var tsrmvTooltipX = -120;
  if(window.innerWidth <= 768) {
      tsrmvTooltipX = -100;
  }
  d3.select('.ed-period-tooltipImg')
      .attr("x", tsrmvTooltipX)

  d3.select('.ed-period-tooltiptext')
      .attr("x", tsrmvTooltipX + 5)
}

function getTranslation(transform) {
  // Create a dummy g for calculation purposes only. This will never
  // be appended to the DOM and will be discarded once this function
  // returns.
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // Set the transform attribute to the provided string value.
  g.setAttributeNS(null, "transform", transform);

  // consolidate the SVGTransformList containing all transformations
  // to a single SVGTransform of type SVG_TRANSFORM_MATRIX and get
  // its SVGMatrix.
  var matrix = g.transform.baseVal.consolidate().matrix;

  // As per definition values e and f are the ones for the translation.
  return [matrix.e, matrix.f];
}

function addIDonLabel(){
	d3.select('li.trsm')
		.attr('id','trsm');
}

// This function checks the d.value if negative, and if YES, it will remove the negative sign and wrap it with parentheses
function checkNegative(num){
	if (num < 0){
		return '(' + Math.abs(num) + ')';
	}
	return num;
}
