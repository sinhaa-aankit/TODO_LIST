//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

var todoItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res){

	var today = new Date();
	
	var options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var day = today.toLocaleDateString("en-US", options);


	res.render("list", {anyDay: day, newTodoItems: todoItems});
});

app.post("/", function(req,res){
	var item = req.body.newItem;
	todoItems.push(item);

	res.redirect("/");
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});