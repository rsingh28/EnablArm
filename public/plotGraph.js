window.onload = plot1(0);

// Testing nested function
// testCall();
Myo.connect();

Myo.on('accelerometer', function(data){
		console.log(data.z);

		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		async function demo() {
			//console.log('Taking a break...');
			await sleep(4000);
			//console.log('Four second later');
			var val = ( (data.x+data.y+data.z)/3 ) * 10;
			plot1(val);
		}

		demo();

});

function plot1(y_val) {

var dps = []; // dataPoints
var chart2 = new CanvasJS.Chart("chartContainer1", {
	theme: "light2",
	title :{
		text: "Accelerometer"
	},
	axisY: {
		includeZero: false
	},      
	data: [{
		type: "line",
		color: "#1d47e0",
		dataPoints: dps
	}]
});

var xVal = 0;
var yVal = 20; 
var updateInterval = 1000;
var dataLength = 5; // number of dataPoints visible at any point

var updateChart = function (count) {

	count = count || 1;

	for (var j = 0; j < count; j++) {
		yVal = y_val;
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