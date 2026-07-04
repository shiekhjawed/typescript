
// TypeScript Assignment
// =========================

// 1. String
let name: string = "Shiekh Amber Jawed";
console.log("Name:", name);

// 2. Number
let sellerPrice: number = 1000;
console.log("Seller Price:", sellerPrice);

// 3. Boolean
let isRaining: boolean = true;
console.log("Is Raining:", isRaining);

// 4. Object
let user: object = {
    name: "Shiekh Amber Jawed",
    city: "Karachi",
    education: "Bachelor of Engineering"
};
console.log("User:", user);

// 5. Array
let colors: string[] = ["Red", "Green", "Blue", "Yellow"];
console.log("Colors:", colors);

// 6. Any
let student: any = "Ahmed";
let age: any = 22;
let marks: any = 500;
let degreeHolding: any = "BS Computer Science";

console.log(student, age, marks, degreeHolding);

// 7. Null
let value: null = null;
console.log("Null Value:", value);

// 8. Union Type
let id: string | number;

id = 101;
console.log("ID:", id);

id = "TS101";
console.log("ID:", id);

// 9. Tuple
let employee: [number, string, string] = [1, "Ali", "Developer"];
console.log("Employee:", employee);

// =========================
// Typed Object
// =========================

let obj: {
    name: string;
    age: number;
    class: string;
} = {
    name: "John",
    age: 23,
    class: "A"
};

console.log("Object:", obj);

// =========================
// Interface with Optional Property
// =========================

interface User {
    name: string;
    age: number;
    class: string;
    intelligent?: string; // Optional Property
}

// Without optional property
const student1: User = {
    name: "Sana",
    age: 23,
    class: "A"
};

// With optional property
const student2: User = {
    name: "Sana",
    age: 23,
    class: "A",
    intelligent: "Yes"
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);

// =========================
// Function Using Interface
// =========================

function displayUser(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Class: ${user.class}`);

    if (user.intelligent) {
        console.log(`Intelligent: ${user.intelligent}`);
    }
}

displayUser(student1);
displayUser(student2);
// CLASS
// ==========================================

class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

let student1 = new Student("Ali", 20);
student1.displayInfo();


// ==========================================
// GENERIC FUNCTION
// ==========================================

function getData<T>(value: T): T {
    return value;
}

let studentName = getData<string>("Shiekh Amber Jawed");
console.log(studentName);



// ENUM
// ==========================================

enum UserRole {
    Admin,
    Teacher,
    Student
}

let currentUser = UserRole.Admin;

if (currentUser === UserRole.Admin) {
    console.log("Welcome Admin");
}
// ==========================================
// TOPIC 1: Type Aliases (Custom Types)
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
// TOPIC 2: Interfaces
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
// TOPIC 3: Union Types
// ==========================================
let studentId: number | string;

studentId = 101;
console.log(studentId);

studentId = "STD101";
console.log(studentId);


// ==========================================
// TOPIC 4: Intersection Types
// ==========================================
type Teacher = {
    subject: string;
};

type Programmer = {
    language: string;
};

type TeacherProgrammer = Teacher & Programmer;

let person: TeacherProgrammer = {
    subject: "Math",
    language: "TypeScript"
};

console.log(person);


// ==========================================
// TOPIC 5: Decorators
// Note: To run this, make sure "experimentalDecorators" 
// is enabled in your tsconfig.json file.
// ==========================================
function Logger(constructor: Function) {
    console.log("Class Created");
}

@Logger
class Student {
    name = "Fatima";
}

const s1 = new Student();
