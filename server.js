var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());








































//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

 app.get("/", function(req, res){
     //route for the homepage
 })

 app.get("/reserve", function(req, res) {
     //route for the reservation form
 })

 app.get("/tables", function(req, res) {
     //a route to render the HTML tables page
     //blah blah integrate AJAX to get both the tables and the waitlist
     //API data (JSON) and render that data to the page
 })

 app.get("/api/tables", function(req, res) {
     //this route outputs JSON data for all booked tables, will be used on the /tables page
     //make an AJAX call to GET the JSON from this route, then loop through and render each reserved table to the page
 })
 
 app.get("api/waitlist", function(req,res){
     //this route outputs JSON data for all of the waitlist
      //make an AJAX call to GET the JSON from this route, then loop through and render each waitlisted to the page
 })