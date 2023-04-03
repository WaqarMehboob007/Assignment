"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 35 
// ========================================================================================================
// Animals: Think of at least three different animals that have a common characteristic. 
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
const animals = ["Cow", "buffalo", "Camel"];
animals.forEach(element => {
    console.log(element, "-");
    switch (element) {
        case "Cow":
            console.log("Less adaptable to weather conditions");
            break;
        case "buffalo":
            console.log("Can tolerate extreme temperatures and harsh climates");
            break;
        case "Camel":
            console.log("Highly adaptable to extreme desert conditions");
            break;
        default:
            console.log("Invalid List");
    }
    ;
});
console.log("\n\nThese kind of herbivors are popular for Milk production around the globe");
