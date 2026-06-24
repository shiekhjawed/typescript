"use strict";
// ==========================================
// CLASS
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}
let student1 = new Student("Amber", 20);
student1.displayInfo();
// ==========================================
// GENERIC FUNCTION
// ==========================================
function getData(value) {
    return value;
}
let studentName = getData("Amber");
console.log(studentName);
// ==========================================
// ENUM
// ==========================================
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Teacher"] = 1] = "Teacher";
    UserRole[UserRole["Student"] = 2] = "Student";
})(UserRole || (UserRole = {}));
let currentUser = UserRole.Admin;
if (currentUser === UserRole.Admin) {
    console.log("Welcome Admin");
}
