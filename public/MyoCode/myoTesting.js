Myo.connect();

// Myo Connection Test

Myo.on('fist', function(){
    console.log('fist pose start');
});

Myo.on('orientation', function(data){ 

	//hub.run(1000/2);
	//console.log(data);

 })