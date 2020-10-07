// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")) // On frontend, script src="/path_relative_to_public_folder"

// Data
const reservations = [
  {
    "customerName": "qwetyr",
    "phoneNumber": "235643",
    "customerEmail": "sdghf@sdfg.com",
    "customerID": "125364375"
  },
  {
    "customerName": "qwetyr",
    "phoneNumber": "235643",
    "customerEmail": "sdghf@sdfg.com",
    "customerID": "125364375"
  },
  {
    "customerName": "qwetyr",
    "phoneNumber": "235643",
    "customerEmail": "sdghf@sdfg.com",
    "customerID": "125364375"
  },
  {
    "customerName": "qwetyr",
    "phoneNumber": "235643",
    "customerEmail": "sdghf@sdfg.com",
    "customerID": "125364375"
  }
];

const waitlist = [
  {
    "customerName": "qwetyr",
    "phoneNumber": "235643",
    "customerEmail": "sdghf@sdfg.com",
    "customerID": "125364375"
  }
]

// Routes
// =============================================================

// Get requests to display pages
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});


// Get requests to return json objects
app.get("/api/reservations", function (req, res) {
  res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
  res.json(waitlist);
});



// Make a post request - takes in JSON input
app.post("/api/reservations", function(req, res){
  // Declare new variables
  var newReservation = req.body;

  const newTable = {
    customerName: newReservation.customerName,
    phoneNumber: newReservation.phoneNumber,
    customerEmail: newReservation.customerEmail,
    customerID: newReservation.customerID
  }

  // Push newTable to reservations if not full - return true, else push to waitlist - return false
  if (reservations.length < 5) {
    // Add newTable to the reservations
    reservations.push(newTable);
    // Tell client they got a table
    return res.send(true);
  } else {
    // add newTable to waitlist
    waitlist.push(newTable);
    // Tell client they are on the waitlist :(
    return res.send(false);
  }
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
