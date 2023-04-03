// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 41
// ========================================================================================================
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians: string[] = ["David", "Harry", "Jillette", "Teller", "Calvin"];

function show_magicians(arr: string[]){
    arr.map(value => console.log(value));
    return arr;
}

if (require.main===module){
    show_magicians(magicians);
}

export{magicians, show_magicians}