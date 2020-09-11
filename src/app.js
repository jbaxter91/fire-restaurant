const express = require("express");
const path = require("path");
const fs = require("fs");
const tableData = require("./static/tableData");
const waitingListData = require("./static/waitingListData");


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
    res.send(waitingListData);
});

app.get("/reserve",(req, res)=>{
    res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.get("/table",(req, res)=>{
    res.sendFile(path.join(__dirname, 'tables.html'))
});
// ==============================

// ======== POST Requests ==========
app.post("api/")
// =================================

app.listen(PORT, () => 
{
    console.log(`Listening on: http://localhost:${PORT}`);
})