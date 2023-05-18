var express = require("express");
var app = express();

var path = require("path")

require("dotenv").config();

//If you want to run it on any port you want simply type in terminal
//PORT=3000 node server.js
var HTTP_PORT = process.env.PORT || 8080;

// // call this function after the http server starts listening for requests
// function onHttpStart() {
//   console.log("Express http server listening on: " + HTTP_PORT);
// }

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req, res)
{
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "./views/about.html"));

});

// setup another route to listen on /contact
app.get("/contact", function(req,res){
    res.sendFile(path.join(__dirname, "./views/contact.html"));

});

// setup another route to listen on /portfolio
app.get("/portfolio", function(req,res){
    res.sendFile(path.join(__dirname, "./views/portfolio.html"));

});

// setup http server to listen on HTTP_PORT
//We used a function expression here
app.listen(HTTP_PORT, () => {
    console.log("Express http server listening on: " + HTTP_PORT);
});