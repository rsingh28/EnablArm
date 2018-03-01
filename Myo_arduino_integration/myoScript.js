var Myo = require('myo');
var SerialPort = require('serialport');

Myo.connect('', require('ws'));

var port = new SerialPort('/dev/cu.usbserial-A703OQYQ', {
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

Myo.on('wave_out', function(){
	console.log('Wave Out Event Triggered!');
	this.vibrate();
	port.write('2');
});

// Open Fingers Gesture

Myo.on('fist_off', function(){
	console.log('Fist open Event Triggered!');
	this.vibrate();
	port.write('3');
});
