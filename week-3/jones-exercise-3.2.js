/*
============================================
; Title:  Exercise 3.2 - The Factory Pattern
; Author: Kevin Jones
; Date: 18 January 2021
; Description: This exercise demonstrates the
; Factory Pattern
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 3.2"));

// Formatting
console.log(" ");

// Create two (2) new Database classes, Oracle and Informix with one argument (properties).
function Oracle(properties) {
  // The Oracle class should have four (4) properties, username, password, server, and version
  this.username = properties.username || "admin";
  this.password = properties.password || "P@$$werd";
  this.server = properties.server || "localhost:3000";
  this.version = properties.version || 1.1;
}

function Informix(properties) {
  // The Informix class should have three (3) properties, username, password, and server
  this.username = properties.username || "admin1";
  this.password = properties.password || "P@$$werd1";
  this.server = properties.server || "localhost:8000";
}

// Define DatabaseFactory() {}
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Oracle;
DatabaseFactory.prototype.createDatabase = function (properties) {
  // Update the createDatabase functions if…else block to handle the two newly created classes
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  } else {
    this.databaseClass = Oracle;
  }
  return new this.databaseClass(properties);
};

// Create a new oracleFactory and call the createDatabase prototype function (supply your own default values)
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "P@$$werd",
});

// Create a new informixFactory and call the createDatabase prototype function (supply your own default values)
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin1",
  password: "P@$$werd1",
});

// Output expected results
console.log(oracle);
console.log(" ");
console.log(informix);
