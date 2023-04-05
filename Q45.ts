// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

// Question # 45
// ========================================================================================================
// Cars: Write a function that stores information about a car in an Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

type carinformation = {
    manufacturer: string;
    model: string;
    color?:string;
}

function Car(newCar: carinformation, feature?:{}){
    
let vehicleInfo = {
    ...newCar,
    ...feature,
}
return vehicleInfo;

}

console.log(Car({manufacturer: "Honda", model: "2017", color: "blue"},{engine: "1300CC", carType: "Sedan"}));


