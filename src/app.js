var express = require("express");
var path = require("path");
var fs = require("fs");


var app = express();
var PORT = 9000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () => 
{
    console.log(`Listening on port ${PORT}`);
})