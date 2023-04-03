// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 31: 
// ========================================================================================================

// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

import users from "./Q30";

if (users.length>0){
    console.log("List is not empty");
    
}
users.length=0;

if (users.length>0){
    console.log("List is not empty");
}else {
    console.log("We need to find some users!");
}