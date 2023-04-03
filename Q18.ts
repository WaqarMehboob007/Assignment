// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// ========================================================================================================

// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places:string[] = ["Madinah","Hunza", "GreatWall", "Niagra Falls","K2"]
// • Print your array in its original order.
console.log(places);

// • Print your array in alphabetical order without modifying the actual list.
console.log("\nalphabetical order");
console.log([...places].sort());

// • Show that your array is still in its original order by printing it.
console.log("\nOriginal Array");console.log(places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nreverse alphabetical order");
console.log([...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
// • Show that your array is still in its original order by printing it.
console.log("\nOriginal Array");console.log(places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse the order of Places Array");
console.log(places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nReverse the order of Places Array again");
console.log(places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nPlaces sorted in alphabetial order");
let sortedArray : string[]= [...places].sort();
console.log(sortedArray);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nPlaces sorted in reverse alphabetial order");
let revSortedArray: string[]=([...places].sort().reverse());
console.log(revSortedArray);