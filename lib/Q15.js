"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = exports.msgArray = exports.message3 = exports.message2 = exports.message1 = void 0;
const Q14_1 = require("./Q14");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return Q14_1.guestList; } });
// Question # 15: 
// ========================================================================================================
console.log(Q14_1.guestList);
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${Q14_1.guestList[0]} can not join us for dinner`);
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
Q14_1.guestList[0] = "Ali";
// • Print a second set of invitation messages, one for each person who is still in your list.
exports.message1 = (`Hello ${Q14_1.guestList[0]}, I would like to invite you for dinner.`);
exports.message2 = (`Hello ${Q14_1.guestList[1]}, I would like to invite you for dinner.`);
exports.message3 = (`Hello ${Q14_1.guestList[2]}, I would like to invite you for dinner.`);
exports.msgArray = [exports.message1, exports.message2, exports.message3];
console.log(exports.msgArray[0]);
console.log(exports.msgArray[1]);
console.log(exports.msgArray[2]);
