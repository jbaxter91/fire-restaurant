var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ============ GET Routes==========
app.get("/api/tables",(res, req)=>{
    res.sendFile("tableData.js")
});

app.get("/api/waitlist",(res, req)=>{
    
});

app.get("/reserve",(res, req)=>{
    
});

app.get("/table",(res, req)=>{
    
});
// ==============================

app.listen(PORT, () => 
{
    console.log(`Listening on: http://localhost:${PORT}`);
})