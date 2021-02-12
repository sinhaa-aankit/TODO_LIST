//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.use("view engine", "ejs");

app.get("/", function(req, res){
	var today = new Date();

	if(today.getDay() === 6 || today.getDay() === 0){
		res.send("<h1>Enjoy! It's the weekend</h1>");
	}else{
		res.send("<h1>Boo! I have to work</h1>");
	}
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});