"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 31: 
// ========================================================================================================
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const Q30_1 = __importDefault(require("./Q30"));
if (Q30_1.default.length > 0) {
    console.log("List is not empty");
}
Q30_1.default.length = 0;
if (Q30_1.default.length > 0) {
    console.log("List is not empty");
}
else {
    console.log("We need to find some users!");
}
