"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student1 = {
    name: "Ali",
    age: 20,
    grade: "A"
};
let emp1 = {
    name: "Fatima",
    salary: 50000,
    department: "IT"
};
console.log(emp1);
// ==========================================
// 3. UNION TYPES (Allowing multiple types using '|') 
// ==========================================
let studentId;
studentId = 101;
console.log(studentId);
studentId = "STD101";
console.log(studentId);
let person = {
    subject: "Math",
    language: "TypeScript",
    designTool: "Figma"
};
console.log(person);
// ==========================================
// 5. DECORATORS 
// ==========================================
// Note: To run this section without errors, make sure 
// "experimentalDecorators": true is enabled in your tsconfig.json file.
// function Logger(constructor: Function) {
//     console.log("Class Created");
// }
// @Logger
// class Student {
//     name = "Fatima";
// }
// const s1 = new Student();
