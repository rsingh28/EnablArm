Myo.connect();

// Myo Connection Test

Myo.on('fist', function(){
    console.log('fist pose start');
});


function acc_reading(){
Myo.on('accelerometer', function(data){
		//console.log(data.z);
		//return data.z;

		function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		async function demo() {
			//console.log('Taking a break...');
			await sleep(4000);
			//console.log('Four second later');
			plot1();
		}

		demo();
	})
}

//acc_reading();