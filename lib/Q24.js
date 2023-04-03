"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// ========================================================================================================
// • Tests for equality and inequality with strings
let firstName = "Waqar";
let lastName = "Mehboob";
if (firstName == "Waqar") {
    console.log(`My Name is ${firstName}`);
}
if (lastName != "Mehboob") {
    console.log("Incorrect Last Name");
}
else {
    console.log(`My lastName is ${lastName}`);
}
// • Tests using the lower case function
let myname = "WAQAR";
if (myname == myname.toLowerCase()) {
    console.log("The name is in lower case");
}
else {
    if (myname == myname.toUpperCase()) {
        console.log("The name is in Upper Case");
    }
    else {
        console.log("Name is in Title case");
    }
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 5;
if (num1 > 10) {
    console.log("Number is greater than 10");
}
else {
    console.log("Number is less than or equal to 10");
    if (num1 <= num2) {
        console.log("Number is less than or equal to 5");
    }
    else {
        console.log("Number is greater than 5 and less than 10");
    }
}
// • Tests using "and" and "or" operators
if (num2 <= 10 && num1 > num2) {
    console.log("Number is greater than 5 and less than 10");
}
// • Test whether an item is in a array
let listofNumbers = [num1, num2, 100, 70, 55];
if (listofNumbers.includes(100)) {
    console.log("Number is in the list");
}
else {
    console.log("Number is not listed");
}
// • Test whether an item is not in a array
if (!listofNumbers.includes(150)) {
    console.log("The item is not in the list.");
}
