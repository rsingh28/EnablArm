Myo.connect();

// function testCall(){
// 	console.log("Function call works!");
// }

// Myo Connection Test

Myo.on('fist', function(){
    console.log('fist pose start');
});

function acc_reading(){

	//Myo.zeroOrientation(); // Sets the current location as the zero orientation
	Myo.on('accelerometer', function(data){
		console.log(data.z);
		//return data.z;

		//plot1();
})

}
