// 1. string
let name: string = "Shiekh Amber jawed";
// 2. number
let sellerPrice: number = 1000;
// 3. boolean (different example)
let isRaining: boolean = true;

// 4. object
let user: object = {
  name: "Shiekh Amber jawed",
  city: "Karachi",
  education: "Bachelor of Engineering"
};

// 5. array (colors example)
let colors: string[] = ["Red", "Green", "Blue", "Yellow"];

// 6. any
let student: any = "Ahmed";
let age: any = 22;
let marks: any = 500;
let degreeHolding: any = "BS Computer Science";



// 7. null
let value: null = null;
// Declaring an object with explicit inline types
let obj: {
    name: string;
    age: number;
    class: string;
} = {
    name: "john",
    age: 23,
    class: "a"
};

// Testing the output
console.log(obj);
// Define the interface
interface User {
    name: string;
    age: number;
    class: string;
    intelligent?: string; // The '?' makes this property optional
}

// Student 1: Does not include the optional 'intelligent' property
const student1: User = {
    name: "sana",
    age: 23,
    class: "A"
};

// Student 2: Includes the optional 'intelligent' property
const student2: User = {
    name: "sana",
    age: 23,
    class: "A",
    intelligent: "yes"
};

// Testing the output
console.log(student1);
console.log(student2);
