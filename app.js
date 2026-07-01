"use strict";
// 5. DECORATORS  ak function hota hai jo class, method, property key behaviour ko modify karne ke liye use hota hai
// ==========================================
// Note: To run this section without errors, make sure 
// "experimentalDecorators": true is enabled in your tsconfig.json file.
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(constructor) {
    console.log("Class Created");
}
@Logger
class Student {
    name = "Fatima";
}
const s1 = new Student();
