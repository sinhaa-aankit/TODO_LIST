//jshint esversion: 6 

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

const date = require(__dirname + "/date.js");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


let todoItems = [];
let workItems = [];


app.get("/", function(req, res){
	let day = date.getDate();
	res.render("list", {listTitle: day, newTodoItems: todoItems});
});

app.post("/", function(req,res){


	let item = req.body.newItem;

	if(req.body.list === "Work"){
		workItems.push(item);
		res.redirect("/work");
	}else{
		todoItems.push(item);
		res.redirect("/");
	}

});

app.get("/work", function(req,res){
	res.render("list", {listTitle: "Work List", newTodoItems: workItems});
});

app.get("/about", function(req, res){
	res.render("about");
});


app.listen(3000, function(){
	console.log("Server running on port 3000");
});