"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const Q41_1 = require("./Q41");
const Q42_1 = require("./Q42");
// Question # 43
// ========================================================================================================
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let newArr = (0, Q42_1.make_great)([...Q41_1.magicians]);
(0, Q41_1.show_magicians)(newArr);
(0, Q41_1.show_magicians)(Q41_1.magicians);
