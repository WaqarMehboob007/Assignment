// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
import * as nodeModule from 'module';

import { guestList } from "./Q14";

// Question # 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
// ========================================================================================================
if(require.main === module){
console.log(`We have invited ${guestList.length} persons on dinner`);
}

