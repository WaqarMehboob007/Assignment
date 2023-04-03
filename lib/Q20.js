"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.pakFoods = exports.paklanguages = exports.pakcities = exports.pakRivers = exports.pakMountains = void 0;
// Question # 20: Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
// ========================================================================================================
exports.pakMountains = ["MountEverst", "K2", "Karakoram", "Nanga Parbat"];
exports.pakRivers = ["Indus", "Chanab", "Jehlum", "Ravi", "Satluj"];
exports.pakcities = ["Lahore", "Karachi", "Multan", "Islamabad", "Gujrat"];
exports.paklanguages = ["Urdu", "Sindhi", "Punjabi", "Pushto", "Siraiki"];
exports.pakFoods = ["Paya", "Sindhi Biryani", "DaalMash", "Paratha", "MurghChanny"];
if (require.main === module) {
    const pakItems = [exports.pakcities, exports.pakMountains, exports.pakFoods, exports.pakRivers, exports.paklanguages];
    console.log(pakItems);
}
