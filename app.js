//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

let todoItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req, res){

	let today = new Date();
	
	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	let day = today.toLocaleDateString("en-US", options);


	res.render("list", {anyDay: day, newTodoItems: todoItems});
});

app.post("/", function(req,res){
	let item = req.body.newItem;
	todoItems.push(item);

	res.redirect("/");
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});