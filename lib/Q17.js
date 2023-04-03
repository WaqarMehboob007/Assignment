"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const Q16_1 = require("./Q16");
// Question # 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// ========================================================================================================
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("\nOur new dinner table won’t arrive in time so we can invite only two people for dinner");
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
let removeGuest;
Q16_1.guestList.forEach(element => {
    while (Q16_1.guestList.length > 2) {
        removeGuest = Q16_1.guestList.at(Q16_1.guestList.length - 1);
        Q16_1.guestList.pop();
        console.log(`Sorry ${removeGuest}, we can’t invite you for dinner`);
    }
    // • Print a message to each of the two people still on your list, letting them know they’re still invited.  
    console.log(`\nHello ${element}, you are still invited for dinner`);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while (Q16_1.guestList.length > 0) {
    Q16_1.guestList.pop();
}
console.log("\n");
console.log(Q16_1.guestList);
