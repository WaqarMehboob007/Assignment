"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = exports.magicians = void 0;
// Question # 41
// ========================================================================================================
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["David", "Harry", "Jillette", "Teller", "Calvin"];
exports.magicians = magicians;
function show_magicians(arr) {
    arr.map(value => console.log(value));
    return arr;
}
exports.show_magicians = show_magicians;
if (require.main === module) {
    show_magicians(magicians);
}
