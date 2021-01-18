/*
============================================
; Title:  Exercise 3.3 - The Singleton Pattern
; Author: Professor Krasso
; Date: 18 January 2021
; Modified by: Kevin Jones
; Description: This exercise demonstrates the
; Singleton Pattern
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 3.3"));

// Formatting
console.log(" ");

// Create DatabaseSingleton class
const DatabaseSingleton = (function () {
  let instance;

  function createInstance() {
    let postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    // Check if instance is active...
    getInstance: function () {
      // If not, create a new one...
      if (!instance) {
        instance = createInstance();
      }
      // If so, return current instance of the createInstance() object
      return instance;
    },
  };
})();

// Create a new function and name it databaseSingletonTest()
function databaseSingletonTest() {
  // Create two new database instances
  let oracle = DatabaseSingleton.getInstance();
  let postgres = DatabaseSingleton.getInstance();
  // Call the console.log() function and output whether the two instances match
  console.log("Same databse instance?", oracle === postgres);
}

// Call the databaseSingletonTest() function
databaseSingletonTest();
