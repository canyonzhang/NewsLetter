const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const etag = require('etag');
const app = express();

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});


app.get("/", function(req, res){
  res.send("HI");
});

app.use(express.static("public"));
