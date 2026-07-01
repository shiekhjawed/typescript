// ==========================================
// 1. TYPE ALIASES (Basic Object Types) type ka use custom data types banane ke liye hota hai
// ==========================================
type student = {
    name: string;
    age: number;
    grade: string;
};

let student1: student = {
    name: "Ali",
    age: 20,
    grade: "A"
};



// ==========================================
// 2. INTERFACES  classes and object ke liye use hota hai
// ==========================================
interface Employee {
    name: string;
    salary: number;
    department: string;
}

let emp1: Employee = {
    name: "Fatima",
    salary: 50000,
    department: "IT"
};

console.log(emp1);


// ==========================================
// 3. UNION TYPES (Allowing multiple types using '|')  ya toh ya to number hoga ya string hoga
// ==========================================
let studentId: number | string;

studentId = 101;
console.log(studentId);

studentId = "STD101";
console.log(studentId);


// ==========================================
// 4. INTERSECTION TYPES (Combining types using '&') one person multiple roles
// ==========================================
type Teacher = {
    subject: string;
};

type Programmer = {
    language: string;
};

type Designer = {
    designTool: string;
};

type TeacherProgrammer = Teacher & Programmer & Designer;

let person: TeacherProgrammer = {
    subject: "Math",
    language: "TypeScript",
    designTool: "Figma"
};

console.log(person);


// ==========================================
// 5. DECORATORS  ak function hota hai jo class, method, property key behaviour ko modify karne ke liye use hota hai
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
