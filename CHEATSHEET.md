# JavaScript (ES6+) Quick Reference Cheatsheet

A concise syntax and pattern reference for modern JavaScript.

---

## 1. Variables & Scoping

| Keyword | Scope | Reassignable | Hoisting Behavior |
| :--- | :--- | :--- | :--- |
| `const` | Block `{}` | No | Temporal Dead Zone (TDZ) |
| `let` | Block `{}` | Yes | Temporal Dead Zone (TDZ) |
| `var` | Function | Yes | Hoisted with `undefined` (Avoid) |

```javascript
const PI = 3.14159;
let counter = 0;
counter += 1;
```

---

## 2. Functions & Arrow Syntax

```javascript
// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Arrow Function (concise return)
const add = (a, b) => a + b;

// Default Parameters
const welcome = (user = "Guest") => `Welcome, ${user}`;
```

---

## 3. Destructuring & Spread Operator

```javascript
// Object Destructuring
const user = { name: "Anil", role: "Developer", age: 21 };
const { name, role } = user;

// Array Destructuring
const coords = [10, 20];
const [x, y] = coords;

// Spread Operator (Copying & Merging)
const baseArray = [1, 2, 3];
const extendedArray = [...baseArray, 4, 5];

const updatedUser = { ...user, city: "Dewas" };
```

---

## 4. Key Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];

// Map (transform elements)
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// Filter (select elements)
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// Reduce (accumulate value)
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15

// Find (first match)
const firstEven = numbers.find(n => n % 2 === 0); // 2

// Some & Every
const hasNegative = numbers.some(n => n < 0); // false
const allPositive = numbers.every(n => n > 0); // true
```

---

## 5. Promises & Async / Await

```javascript
// Creating a Promise
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async/Await consumption with try-catch
async function runTask() {
    try {
        console.log("Starting task...");
        await wait(1000);
        console.log("Task completed!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
```

---

## 6. DOM Manipulation

```javascript
// Selecting elements
const heading = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn");

// Modifying content & styles
heading.textContent = "Updated Title";
heading.style.color = "#38bdf8";

// Event handling
document.getElementById("myBtn").addEventListener("click", (e) => {
    console.log("Target clicked:", e.target);
});
```
