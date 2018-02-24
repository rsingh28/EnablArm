//window.onload = plot1();

// Testing nested function
// testCall();

function plot1() {

var dps = []; // dataPoints
var chart2 = new CanvasJS.Chart("chartContainer1", {
	title :{
		text: "Some other Arm Parameter Plot"
	},
	axisY: {
		includeZero: false
	},      
	data: [{
		type: "line",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 100; 
var updateInterval = 1000;
var dataLength = 10; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
		dps.push({
			x: xVal,
			y: yVal
		});
		xVal++;
	}

	if (dps.length > dataLength) {
		dps.shift();
	}

	chart2.render();
};

updateChart(dataLength);
//setInterval(function(){updateChart()}, updateInterval);

}