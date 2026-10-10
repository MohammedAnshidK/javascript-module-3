// 1. Higher-Order Function

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log("Higher-Order Function:");
console.log(calculate(10, 5, add));


// 2. Closure

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

let increase = counter();

console.log("Closure:");
increase();
increase();
increase();


// 3. Generator Function

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

let result = numbers();

console.log("Generator Function:");
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);


// 4. Reusable Function

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log("Reusable Function:");
console.log(calculateTotal(100, 2));
console.log(calculateTotal(50, 3));
