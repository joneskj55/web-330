/*
============================================
; Title:  Exercise 1.3 - Class Refresher
; Author: Kevin Jones
; Date: 4 January 2021
; Description: Create a cell phone object
; with various properties, instantiate a
; new object and print out the results.
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 1.3"));

// Formatting
console.log("\n" + "-- DISPLAYING CELL PHONE DETAILS --");

function Cell(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  this.getPrice = function () {
    return this.price;
  };
  this.getModel = function () {
    return this.model;
  };
  this.getDetails = function () {
    return (
      "Manufacturer: " +
      this.manufacturer +
      "\n" +
      "Model: " +
      this.getModel() +
      "\n" +
      "Color: " +
      this.color +
      "\n" +
      "Price: " +
      this.getPrice()
    );
  };
}

const cell = new Cell("Samsung", "Galaxy", "Black", 499.99);
console.log(cell.getDetails());
