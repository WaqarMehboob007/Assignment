// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

import { magicians, show_magicians } from "./Q41";
import { make_great } from "./Q42";

// Question # 43
// ========================================================================================================
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let newArr: string[]= make_great([...magicians]);
show_magicians(newArr);
show_magicians(magicians);