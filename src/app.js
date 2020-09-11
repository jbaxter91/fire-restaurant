const express = require("express");
const path = require("path");
const fs = require("fs");
const tableData = require("./static/tableData");

tableData.push({
    "customerName": "Karen",
    "phoneNumber": "8675309",
    "customerEmail": "sds@555",
    "customerID": "9654"
})


const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ============ GET Routes==========
app.get("/api/tables",(req, res)=>{
    res.send(tableData);
});

app.get("/api/waitlist",(req, res)=>{
    
});

app.get("/reserve",(req, res)=>{
    
});

app.get("/table",(req, res)=>{
    
});
// ==============================

app.listen(PORT, () => 
{
    console.log(`Listening on: http://localhost:${PORT}`);
})