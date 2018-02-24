window.onload = plot2();

function plot2() {

var dps = []; // dataPoints
var chart2 = new CanvasJS.Chart("chartContainer2", {
	theme: "light2",
	title :{
		text: "Gyrometer"
	},
	axisY: {
		includeZero: false
	},      
	data: [{
		type: "line",
		color: "#b55fb3",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 100; 
var updateInterval = 500;
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
setInterval(function(){updateChart()}, updateInterval);

}