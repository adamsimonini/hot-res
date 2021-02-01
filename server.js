// get the express package, and get path for later
const express = require("express");
const path = require("path");

// set app to be equal to the express package
const app = express();
// assign a port, and be sure to check for a process.env.PORT first (for foreign hosting of this app)
const PORT = process.env.PORT || 3000;

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
  ];
  

// Routes
// ===========================================================
// perform an initial get request at the root directory to ensure everything is working
app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/tables", (req, res) => {
    res.send(tables);
});

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`This server is running on port ${PORT}`);
});
