//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

	var today = new Date();
	var currentDay = today.getDay();
	var day = "";

	if(currentDay === 6 || currentDay === 0){
		day = "weekend";
	}else{
		day = "workday";
	}
	res.render("list", {anyDay: day});
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});