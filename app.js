//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
	var today = new Date();

	if(today.getDay() === 6 || today.getDay() === 0){
		res.send("Enjoy! It's the weekend");
	}else{
		res.send("Boo! I have to work");
	}
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});