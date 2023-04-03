// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 30:
// ========================================================================================================

// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

//     No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

const users:string[]=["Waqar","Mehboob","Ali","Bilal"];

users.unshift("admin");
if (require.main == module){
    users.forEach(element => {
        if (element == "admin"){
            console.log("Hello admin, would you like to see a status report?");
            
        }else{
            console.log(`Hello ${element}, thank you for logging in again.`);
            
        }
    });
}
export default users;
