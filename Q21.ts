// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 21: They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.
// ========================================================================================================
import { pakFoods } from "./Q20";
import { pakMountains } from "./Q20";
import { pakRivers } from "./Q20";
import { pakcities } from "./Q20";
import { paklanguages } from "./Q20";

const pakItems = {
foods: pakFoods,
mountains: pakMountains,
rivers: pakRivers,
cities: pakcities,
languages: paklanguages

};
console.log(pakItems);
