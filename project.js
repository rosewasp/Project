// using express module to create express application
var express = require("express");

var app = express();

// set main.handlebars as the default layout
var handlebars = require("express-handlebars").create({defaultLayout:"main"});

// handlebar.engine handles everything with .handlebars extension
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

// set the port number for the URL
app.set("port", 14988);

// sets the folder from which static files such as images and css code are used
app.use(express.static('public'));

// renders the sub1.handlebars file at the homepage
app.get("/",function(req,res){
    res.render("sub1");
});

// renders the sub2.handlebars file
app.get("/sub2",function(req,res){
    res.render("sub2");
});

// renders the sub1.handlebars file
app.get("/sub3",function(req,res){
    res.render("sub3");
});

// renders the sub1.handlebars file at the homepage
app.get("/sub4",function(req,res){
    res.render("sub4");
});

// displays error when desired page is not in server
app.use(function(req,res){
    res.status(404);
    res.render("404");
});

// handles syntax and technical errors
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type("plain/text");
    res.status(500);
    res.render("500");
});

// starts the web page and displays the port where it is available
app.listen(app.get("port"),function(){
    console.log("Express started on http://localhost:" + app.get("port") + ";press Ctrl-C to terminate.");
});