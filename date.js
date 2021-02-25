//jshint esversion:6

exports.getDate = getDate;

function getDate(){

	const today = new Date();
	
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	return today.toLocaleDateString("en-US", options);

}

exports.getDay = getDay;

function getDay(){

	const today = new Date();
	
	const options = {
		weekday: "long",
	};

	return today.toLocaleDateString("en-US", options);

}


	