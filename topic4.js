// 1. try and catch
try {
    console.log("Program started");
    console.log(unknownVariable);
} catch (error) {
    console.log("Error:", error.message);
}

// 2. finally
try {
    console.log("Inside try block");
} catch (error) {
    console.log("An error occurred");
} finally {
    console.log("Finally block executed");
}

// 3. throw
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or older");
    }

    return "Eligible";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log(error.message);
}

// 4. Handling runtime errors
try {
    let student = null;
    console.log(student.name);
} catch (error) {
    console.log("Unable to access student details");
}

// 5. Debugging
let a = 10;
let b = 20;

console.log("Value of a:", a);
console.log("Value of b:", b);
console.log("Sum:", a + b);
