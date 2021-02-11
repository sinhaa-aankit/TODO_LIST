//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){
 res.send("HEllo!");
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});