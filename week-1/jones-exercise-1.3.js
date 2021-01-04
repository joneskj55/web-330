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

// Using functions, create a cell phone object with the following properties / methods.
function Cell(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  // The getPrice() function will return the cell phones price.
  this.getPrice = function () {
    return this.price;
  };

  // The getModel() function will return the cell phones model.
  this.getModel = function () {
    return this.model;
  };

  // The getDetails() function must call the getPrice() and getModel() functions and output the Manufacturer, Model, Color, and Price.
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

// Instantiate a new cell phone object (supply your own default values) and call the getDetails() function.
const cell = new Cell("Samsung", "Galaxy", "Black", 499.99);
console.log(cell.getDetails());
