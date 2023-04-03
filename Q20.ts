// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 20: Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
// ========================================================================================================
export const pakMountains: string[]= ["MountEverst", "K2","Karakoram","Nanga Parbat"];
export const pakRivers: string[]=["Indus","Chanab","Jehlum","Ravi","Satluj"];
export const pakcities: string[]=["Lahore","Karachi","Multan","Islamabad","Gujrat"];
export const paklanguages: string[]=["Urdu","Sindhi","Punjabi","Pushto","Siraiki"];
export const pakFoods: string[]=["Paya","Sindhi Biryani","DaalMash","Paratha","MurghChanny"];

if (require.main === module){
const pakItems: string[][]= [pakcities,pakMountains,pakFoods,pakRivers,paklanguages];
console.log(pakItems);
}
