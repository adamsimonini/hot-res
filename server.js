// get the express package, and get path for later
const express = require("express");
const path = require("path");

// set app to be equal to the express package
const app = express();
// assign a port, and be sure to check for a process.env.PORT first (for foreign hosting of this app)
const PORT = process.env.PORT || 3000;

global.maxTables = 5;

// ensure my upcoming post routes can handle requests using url encoding and json to pass in data to my app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// ===========================================================
let tables = [
  {
    customerName: "Ahmed",
    customerEmail: "afhaque89@gmail.com",
    customerID: "afhaque89",
    phoneNumber: "979-587-0887",
  },
  {
    customerName: "Adam",
    customerEmail: "ajsim@gmail.com",
    customerID: "ajsim99",
    phoneNumber: "416-499-1165",
  },
  {
    customerName: "Ahmed",
    customerEmail: "afhaque89@gmail.com",
    customerID: "afhaque89",
    phoneNumber: "979-587-0887",
  },
  {
    customerName: "Adam",
    customerEmail: "ajsim@gmail.com",
    customerID: "ajsim99",
    phoneNumber: "416-499-1165",
  },
];

let waitlist = [];

// Routes
// ===========================================================
// perform an initial get request at the root directory to ensure everything is working
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/tables", (req, res) => {
  res.send(tables);
});

app.get("/api/waitlist", (req, res) => {
  res.send(waitlist);
});

// Create table - takes in JSON input
app.post("/api/table", function (req, res) {
  // This works because of our body parsing middleware
  var table = req.body;
  console.log(table);
  // check if we have enough tables, and if not waitlist the incoming request
  if (tables.length < global.maxTables) {
    tables.push(table);
        // We then display the JSON to the users (res.json(ends the response))
    res.json(table);
  } else {
    console.log("Waitlisting....");
    console.log(table);
    waitlist.push(table);
    // We then display the JSON to the users (res.json(ends the response))
    res.json(table);
  }
});

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});
