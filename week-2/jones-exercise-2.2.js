/*
============================================
; Title:  Exercise 2.2 - Prototypes
; Author: Kevin Jones
; Date: 11 January 2021
; Description: Demonstrates how to build
; prototypes.
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 2.2"));

// Formatting
console.log(" ");

// Create an object literal Person with one function, getAge().
const Person = {
  getAge: function () {
    // The getAge() function should return the Person’s age.
    return this.age;
  },
};

// Create a new object literal.
const jimbo = Object.create(Person, {
  // From within the new object literal define age and fullname.
  age: {
    value: 107,
  },
  fullName: {
    value: "Jimbo Fisher",
  },
});

// Call the console.log() function and output the Persons fullname.
console.log("The person's full name is " + jimbo.fullName + ".");

// Call the console.log() function and output the age (use the getAge() function).
console.log("The person's age is " + jimbo.getAge() + ".");
