/*
============================================
; Title:  Exercise 1.4 - Duck Typing/ Interfaces
; Author: Kevin Jones
; Date:   4 January 2021
; Description: Create a cell phone object
; with various properties, instantiate a
; new object and print out the results.
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 1.4"));

// Formatting
console.log(" ");

// Create a function constructor Car class with one parameter (model)
function Car(model) {
  this.model = model;
}

// Add a prototype method to each class called “start”
Car.prototype.start = function () {
  // The prototype method should output “ added to the racetrack!”
  console.log("Car added to the racetrack!");
};

// Create a function constructor Truck class with two parameters (model, year)
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// Add a prototype method to each class called “start”
Truck.prototype.start = function () {
  // The prototype method should output “ added to the racetrack!”
  console.log("Truck added to the racetrack!");
};

// Create a function constructor Jeep class with three parameters (model, year, color)
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// Add a prototype method to each class called “start”
Jeep.prototype.start = function () {
  // The prototype method should output “ added to the racetrack!”
  console.log("Jeep added to the racetrack!" + "\n");
};

// Define an empty racetrack array
let racetrack = [];

// Create a driveIt function with one parameter (vehicle)
function driveIt(vehicle) {
  // From within the driveIt function call the “start” function on the vehicle...
  vehicle.start();
  // ...and push the vehicle to the racetrack array
  racetrack.push(vehicle);
}

// Create three (3) vehicle classes...
const car = new Car("BMW");
const truck = new Truck("Ford", 2011);
const jeep = new Jeep("Cherokee", "1945", "green");

// ... and pass them through the driveIt() function
driveIt(car);
driveIt(truck);
driveIt(jeep);

// Formatting
console.log("-- The following vehicles have been added to the racetrack --");

// Iterate over the racetrack array and output the results
for (let i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
