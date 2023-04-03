// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------

import { features } from "process";

// Question # 45
// ========================================================================================================
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.


function car(manufacture:string, model:string, feature? :{})
{   
    if (!feature){
        let carInfo = {manufacturer:manufacture, model:  model }
        return carInfo;
    }else{
        let carInfo = {manufacturer:manufacture, model:  model, feature}
        return carInfo;
    }
    
}

let car1= car("Toyota","Altis",{Color:"white"});
let car2=car("Toyota","Altis");

console.log(car1);
console.log(car2);
