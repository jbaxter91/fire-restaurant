const express = require("express");
const path = require("path");
const fs = require("fs");
let tableData = require("./data/tableData");
let waitingListData = require("./data/waitingListData");
const { table } = require("console");
const { filter } = require("./data/waitingListData");

const MAX_TABLES = 5;
const MAX_WAITLIST = 20;

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============ GET Routes==========
app.get("/api/tables", (req, res) => {
  res.send(tableData);
});

app.get("/api/waitlist", (req, res) => {
  res.send(waitingListData);
});

app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// ==============================

// ======== POST Requests ==========
app.post("/", function (req, res) {
  var message = req.body;
  tableData.length <= MAX_TABLES ? addTable(message) : addWaitingList(message);
  res.send("All good");
});
// =================================

// ========= DELETE Requests ========
app.delete("/tables", function (req, res) {
  var customerID = req.body.customerID;
  console.log("Trying to delete", customerID);
  var removedList = tableData.filter((patron) => {
    console.log("PatronID: ", patron.customerID);
    if (patron.customerID != customerID && patron.customerID) {
      console.log("Returning");
      return patron;
    }
  });

  console.log(removedList);
  tableData = removedList;
  if (tableData.length < MAX_TABLES) {
    var transfer = waitingListData.shift();
    addTable(transfer);
    console.log("======");
    console.log("Table:", tableData);
    console.log("Waitlist: ", waitingListData);
  }
  res.send("All good");
});
//

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});

function addTable(data) {
  console.log("Adding Table", data);
  tableData.push(data);
  console.log(tableData);
}

function addWaitingList(data) {
  console.log("Adding to Waitlist");
  if (waitingListData.length <= MAX_WAITLIST) {
    waitingListData.push(data);
  } else console.log("Can not add any more to waitlist, you hit your max!");
}
