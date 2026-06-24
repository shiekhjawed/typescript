// ==========================================
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

let student1 = new Student("Amber", 20);
student1.displayInfo();


// ==========================================
// GENERIC FUNCTION
// ==========================================

function getData<T>(value: T): T {
    return value;
}

let studentName = getData<string>("Amber");
console.log(studentName);


// ==========================================
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