"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// Question # 26 : 
// ========================================================================================================
//     Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let alienColor = "green";
if (alienColor == "green") {
    console.log("\nALien color is green and player just earned 5 points for shooting the alien");
}
else {
    console.log("\nplayer just earned 10 points");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("\nplayer just earned 5 points for shooting the alien");
}
else {
    console.log("\nNow the ALien color is not green and player just earned 10 points");
}
