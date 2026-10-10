// 1. Destructuring
let fruits = ["Apple", "Mango", "Orange"];
let [first, second] = fruits;

console.log("First fruit:", first);
console.log("Second fruit:", second);

// 2. Spread operator
let numbers = [10, 20, 30];
let newNumbers = [...numbers, 40, 50];

console.log("New numbers:", newNumbers);

// 3. Rest operator
function add(...values) {
    return values.reduce((total, num) => total + num, 0);
}

console.log("Sum:", add(10, 20, 30));

// 4. Optional chaining
let student = {
    name: "Anshid"
};

console.log("City:", student.address?.city);

// 5. Short-circuiting
let username = "";
console.log("Username:", username || "Guest");

let age = 18;
console.log("Eligibility:", age >= 18 && "Eligible");

let name = null;
console.log("Name:", name ?? "Guest");

// 6. Enhanced object literals
let studentName = "Anshid";
let studentAge = 18;

let studentDetails = {
    studentName,
    studentAge
};

console.log("Student details:", studentDetails);
