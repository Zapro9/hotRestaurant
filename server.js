var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
var availableTables = 10;
//Data
//================================================================================================

// need reservation array
const tables = [
    {
      routeName: "",
      name: "",
      phone: "",
      email: "",
      id: ""
    }
];
// need wait list 
const waitlist = [
    {
      routeName: "",
      name: "",
      phone: "",
      email: "",
      id: ""
    }
];



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

 app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
 })

 app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
 })

 app.get("/tables", function(req, res) {
     //a route to render the HTML tables page
     //blah blah integrate AJAX to get both the tables and the waitlist
     //API data (JSON) and render that data to the page
     res.sendFile(path.join(__dirname, "tables.html"));
 })

 app.get("/api/tables", function(req, res) {
     //this route outputs JSON data for all booked tables, will be used on the /tables page
     //make an AJAX call to GET the JSON from this route, then loop through and render each reserved table to the page
     return res.json(tables);
 })
 
 app.get("/api/waitlist", function(req,res){
     //this route outputs JSON data for all of the waitlist
      //make an AJAX call to GET the JSON from this route, then loop through and render each waitlisted to the page
     return res.json(waitlist);

 })
 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ifff's~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

  //fill tables function
  //fill waitlist function
  //if the tables is full, call waitlist
  
  var personObject = { ////~~~~~~~~this will be changed to a dynamic element that changes with user inputs
    routeName: "wqqq",
    name: "ddd",
    phone: "fff",
    email: "eee",
    id: "333"
  }
  
  
  availChecker(personObject);
  

  function availChecker (personObject){
    if (tables.length<availableTables){
        tableFill(personObject);
      } else {
          waitFill(personObject);
      }
  }

  function tableFill (personObject) {
      tables.push(personObject);
  }

  function waitFill (personObject){
      waitlist.push(personObject);
  }


//   console.log(tables);
//   console.log(waitlist);


