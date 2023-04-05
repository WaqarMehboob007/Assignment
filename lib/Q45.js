"use strict";
// MUHAMMAD WAQAR MEHBOOB
// Roll No: PIAIC209125
// PIAIC-Q1-Batch 43
// 19 Mar 2023
// -----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function carNew(newCar, feature) {
    let vehicleInfo = {
        ...newCar,
        ...feature,
    };
    return vehicleInfo;
}
console.log(carNew({ manufacturer: "Honda", model: "2017", color: "blue" }, { engine: "1300CC", carType: "Sedan" }));
