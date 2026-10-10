// 1. DOM element selection
let heading = document.getElementById("title");

console.log(heading.textContent);

// 2. DOM manipulation
heading.textContent = "Welcome to JavaScript";
heading.style.color = "blue";

// 3. Event handling
let button = document.getElementById("myButton");
let message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked!";
});

// 4. BOM basics
console.log("Window width:", window.innerWidth);
console.log("Current URL:", location.href);
console.log("Browser language:", navigator.language);
