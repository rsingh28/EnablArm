var Myo = require('myo');
var SerialPort = require('serialport');

Myo.connect('', require('ws'));

var port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});
//console.log(port);

// Grab Can Gesture

Myo.on('fist', function(){
	console.log('Fist Event Triggered!');
	this.vibrate();
	port.write('1');
});

// Grab Key Gesture

Myo.on('fingers_spread', function(){
	console.log('Finger Spread Event Triggered!');
	this.vibrate();
	port.write('2');
});

// Open Fingers Gesture

Myo.on('fist_off', function(){
	console.log('Fist open Event Triggered!');
	this.vibrate();
	port.write('3');
});
