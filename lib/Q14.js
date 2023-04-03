"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Question # 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
// ========================================================================================================
let guestList = ["Waqar", "Wajahat", "Mehboob"];
exports.guestList = guestList;
if (require.main === module) {
    let message1 = (`Hello ${guestList[0]}, I would like to invite you for dinner.`);
    let message2 = (`Hello ${guestList[1]}, I would like to invite you for dinner.`);
    let message3 = (`Hello ${guestList[2]}, I would like to invite you for dinner.`);
    let msgArray = [message1, message2, message3];
    console.log(msgArray[0]);
    console.log(msgArray[1]);
    console.log(msgArray[2]);
}
