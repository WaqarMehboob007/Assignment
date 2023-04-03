"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// Question #23 :Conditional Tests: Write a series of conditional tests. 
// Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// ========================================================================================================
let car = ["Suzuki", "Toyota", "Honda", "KIA", "Hyundai", "United"];
let revCars = [...car].reverse();
let origCars = [...revCars].reverse();
let i = 0;
car.forEach(element => {
    let message = element == revCars[i] ? "I predict True." : "I predict False.";
    console.log(message);
    message = element == origCars[i] ? "I predict True." : "I predict False.";
    console.log("Now " + message);
    i += 1;
});
