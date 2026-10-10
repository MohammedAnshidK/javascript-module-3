// 1. map()
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(num => num * 2);

console.log("Doubled:", doubled);

// 2. filter()
let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even numbers:", evenNumbers);

// 3. reduce()
let total = numbers.reduce((sum, num) => sum + num, 0);

console.log("Total:", total);

// 4. find()
let firstBigNumber = numbers.find(num => num > 2);

console.log("First number greater than 2:", firstBigNumber);

// 5. forEach()
numbers.forEach(num => {
    console.log("Number:", num);
});

// 6. String methods
let text = "  javascript  ";

console.log("Trimmed:", text.trim());
console.log("Uppercase:", text.toUpperCase());
console.log("Includes script:", text.includes("script"));

// 7. Number methods
let price = 99.567;

console.log("Formatted price:", price.toFixed(2));
console.log("Converted number:", Number("100"));
console.log("Is integer:", Number.isInteger(25));

// 8. Set
let uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);

console.log("Unique numbers:", uniqueNumbers);
console.log("Set size:", uniqueNumbers.size);

// 9. Map
let student = new Map();

student.set("name", "Anshid");
student.set("age", 18);

console.log("Student name:", student.get("name"));
console.log("Student age:", student.get("age"));

// 10. Data transformation
let prices = [100, 250, 50, 300];

let transformedPrices = prices
    .filter(price => price >= 100)
    .map(price => price * 2);

console.log("Transformed prices:", transformedPrices);
