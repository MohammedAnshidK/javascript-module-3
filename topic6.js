// 1. Callback function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

greet("Anshid", message);

// 2. Promise
let myPromise = new Promise((resolve, reject) => {
    resolve("Task completed successfully");
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

// 3. Async and await
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function displayData() {
    let result = await getData();
    console.log(result);
}

displayData();

// 4. Error handling with async/await
async function getMessage() {
    try {
        let result = await Promise.reject(
            new Error("Something went wrong")
        );

        console.log(result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

getMessage();
