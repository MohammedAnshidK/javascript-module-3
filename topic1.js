// 1. Arrays
let fruits = ["Apple", "Mango", "Orange"];
console.log("First fruit:", fruits[0]);

// 2. Objects
let student = {
    name: "Anshid",
    age: 18
};
console.log("Student name:", student.name);

// 3. Functions
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(10, 20));

// 4. Value behavior
let a = 10;
let b = a;
b = 20;

console.log("a:", a);
console.log("b:", b);

// 5. Reference behavior
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2[0] = 100;

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// 6. Scope
let message = "Hello JavaScript";

function displayMessage() {
    console.log(message);
}

displayMessage();

// 7. Hoisting
console.log("Hoisting example:", number);
var number = 50;

// 8. Closure
function outer() {
    let text = "This is a closure";

    function inner() {
        console.log(text);
    }

    return inner;
}

let result = outer();
result();
