var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

console.log("Hello world");

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) =>{
  console.log(process.env.MESSAGE_STYLE, "<= MESSAGE STYLE");
  var response = {"message":"hello json"};
  
  if(process.env.MESSAGE_STYLE === "uppercase"){
    response.message = response.message.toUpperCase();
  }
  
  res.json(response);
  
});






























 module.exports = app;
