// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 6 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// ========================================================================================================
let personName: string = "Waqar Mehboob";

let strippingNames: String = "\n \t" + personName + "\t";
console.log(strippingNames + " With White Spaces");

console.log(strippingNames.trim() +" - Without white spaces");