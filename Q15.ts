// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

import { guestList } from "./Q14";

// Question # 15: 
// ========================================================================================================

console.log(guestList);


// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${guestList[0]} can not join us for dinner`);

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guestList[0]= "Ali";

// • Print a second set of invitation messages, one for each person who is still in your list.
export let message1 = (`Hello ${guestList[0]}, I would like to invite you for dinner.`);
export let message2 = (`Hello ${guestList[1]}, I would like to invite you for dinner.`);
export let message3 = (`Hello ${guestList[2]}, I would like to invite you for dinner.`);

export let msgArray: string[]=[message1,message2,message3];

console.log(msgArray[0]);
console.log(msgArray[1]);
console.log(msgArray[2]);

export{guestList};