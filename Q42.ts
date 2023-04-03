// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

import { magicians, show_magicians } from "./Q41";

// Question # 42
// ========================================================================================================

// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

function make_great (arr:string[]): string[] {

    // arr= arr.map(value => value = value + " the great");

    // return arr;
    for (let i =0; i<arr.length; i++){
        arr[i]= arr[i] + " the great";
    }

    return arr;
}
if(require.main === module){
show_magicians(make_great(magicians));
}
export{make_great}


