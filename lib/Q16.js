"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
const Q15_1 = require("./Q15");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return Q15_1.guestList; } });
// Question # 16: More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// ========================================================================================================
// • Add one new guest to the beginning of your array.
Q15_1.guestList.unshift("AbuBakar");
// • Add one new guest to the middle of your array. 
Q15_1.guestList.splice(Q15_1.guestList.length / 2, 0, "Zafar");
// Use append() to add one new guest to the end of your list.
Q15_1.guestList.push("Asif");
// Print a new set of invitation messages, one for each person in your list.
Q15_1.guestList.forEach(element => {
    console.log(`\n Hello "${element}", I would like to invite you for dinner.`);
});
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("\n We found a bigger dinner table");
