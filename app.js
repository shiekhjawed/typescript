"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. string
let name = "Shiekh Amber jawed";
// 2. number
let sellerPrice = 1000;
// 3. boolean (different example)
let isRaining = true;
// 4. object
let user = {
    name: "Shiekh Amber jawed",
    city: "Karachi",
    education: "Bachelor of Engineering"
};
// 5. array (colors example)
let colors = ["Red", "Green", "Blue", "Yellow"];
// 6. any
let student = "Ahmed";
let age = 22;
let marks = 500;
let degreeHolding = "BS Computer Science";
// 7. null
let value = null;
// Declaring an object with explicit inline types
let obj = {
    name: "john",
    age: 23,
    class: "a"
};
// Testing the output
console.log(obj);
// Student 1: Does not include the optional 'intelligent' property
const student1 = {
    name: "sana",
    age: 23,
    class: "A"
};
// Student 2: Includes the optional 'intelligent' property
const student2 = {
    name: "sana",
    age: 23,
    class: "A",
    intelligent: "yes"
};
// Testing the output
console.log(student1);
console.log(student2);
