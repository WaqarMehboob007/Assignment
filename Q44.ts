// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 44
// ========================================================================================================

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.


function sandwich(...item:string[]){
    console.log(`\nYou ordered a sandwich with following ${item.length} Topping items:`);    
    item.map(value => console.log("-" + value));
}
sandwich('tomato', 'cheese');
sandwich('tomato', 'cheese', 'Chicken');
sandwich('tomato', 'cheese', 'Chicken', 'mayonnaise', 'Egg');

