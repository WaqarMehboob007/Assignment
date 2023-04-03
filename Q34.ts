// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 34 : 
// ========================================================================================================


// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

const favPizza: string[]=["Fajita", "Tikka", "BBQ"];

favPizza.forEach(element=>{

console.log(element ,`: I like ${element} Pizza.\n`);

});

console.log(`\nI absolutely love pizza! It's one of my favorite foods.\n
Pizza is the best! I could eat it every day and never get tired of it.\n
There's nothing better than a hot, cheesy pizza straight out of the oven.\n
I enjoy pizza, especially when it has lots of toppings.\n`);

console.log("I really love pizza!");
