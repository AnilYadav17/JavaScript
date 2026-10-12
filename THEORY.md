# JavaScript (JS)

## 1. What Is JavaScript?

JavaScript (JS) is a **high-level, dynamically typed programming language** widely used to make webpages interactive and to develop modern applications.

It is commonly described as a scripting language because it is frequently used to automate actions and control application behavior. However, JavaScript is also a general-purpose programming language.

JavaScript can execute in web browsers, on servers, and in other runtime environments.

### In Simple Words

JavaScript makes webpages interactive and defines their behavior, logic, and functionality.

For example, when a webpage contains a form, button, input field, or selection list, JavaScript can be used to respond to user actions and perform specific tasks.

### Role of HTML, CSS, and JavaScript

Consider an e-commerce website.

| Technology | Responsibility             | Example                                          |
| ---------- | -------------------------- | ------------------------------------------------ |
| HTML       | Structure and content      | Product name, price, buttons                     |
| CSS        | Presentation and styling   | Colors, fonts, spacing                           |
| JavaScript | Behavior and interactivity | Add to cart, update quantities, calculate totals |

JavaScript can handle tasks such as:

* Adding products to a shopping cart.
* Updating product quantities.
* Validating forms.
* Calculating totals.
* Creating animations and sliders.
* Displaying popups and notifications.
* Responding to user interactions.

**Remember:**

* HTML defines the structure.
* CSS defines the appearance.
* JavaScript defines the behavior.

---

# 2. History of JavaScript

JavaScript has evolved significantly since its introduction.

### 1995 — Creation of JavaScript

* JavaScript was created by **Brendan Eich** at Netscape Communications.
* Its initial development took place in 1995.
* It was initially called **Mocha**, then **LiveScript**, and finally **JavaScript**.

### 1997 — ECMAScript Standardization

* JavaScript was standardized through Ecma International.
* The first edition of the ECMAScript specification was published in 1997.
* Standardization helped different JavaScript implementations maintain consistent language behavior.

### 2009 — Introduction of Node.js

* Node.js was introduced in 2009.
* It enabled JavaScript to execute outside web browsers using a dedicated runtime environment.
* Developers could use JavaScript for server-side development.

### 2015 — ECMAScript 2015 (ES6)

ECMAScript 2015 introduced several important language features, including:

* `let` and `const`
* Arrow functions
* Classes
* Modules
* Promises
* Template literals
* Destructuring
* Default parameters

These features made JavaScript development more expressive and convenient.

### Modern JavaScript

JavaScript continues to evolve through annual ECMAScript editions.

**ECMAScript 2026 (ES2026)** is the 2026 edition of the language specification.

---

# 3. ECMA International and ECMAScript

## What Is Ecma International?

Ecma International is an organization that develops and publishes technical standards for information and communication technology.

It was formerly known as the European Computer Manufacturers Association.

Its work includes standards for programming languages, data formats, and other technologies.

## What Is ECMAScript?

**ECMAScript (ES) is the standardized language specification that defines JavaScript's core syntax, features, and behavior.**

It specifies how language features should work so that JavaScript implementations can follow a common standard.

### Main Objective

The main objective of standardization is to provide consistent language behavior across different implementations.

### JavaScript vs ECMAScript

| JavaScript                                       | ECMAScript                                          |
| ------------------------------------------------ | --------------------------------------------------- |
| A programming language                           | A language specification                            |
| Implemented by browsers and runtime environments | Defines the core language rules                     |
| Used to build interactive and other applications | Specifies syntax, features, and language behavior   |
| Can use browser APIs and runtime-specific APIs   | Does not itself define every browser or runtime API |

**Example:**

JavaScript engines implement the ECMAScript language specification. Browsers also provide additional APIs, such as the DOM, for interacting with webpages.

---

# 4. Features of JavaScript

## 4.1 High-Level Programming Language

JavaScript is a high-level programming language.

High-level languages provide abstractions that allow developers to focus on application logic rather than directly managing low-level hardware operations.

**Example:**

```javascript
let name = "Anil";

console.log(name);
```

JavaScript allows developers to work with variables and strings without manually managing their underlying memory representation.

---

## 4.2 Interpreted Language and JIT Compilation

JavaScript is commonly described as an interpreted language. However, modern JavaScript engines use a combination of execution techniques, including interpretation and Just-In-Time (JIT) compilation.

### What Is Interpretation?

Interpretation involves executing program instructions through an interpreter.

### What Is JIT Compilation?

**Just-In-Time compilation** converts selected code into machine code during program execution.

Modern JavaScript engines may interpret code initially and compile frequently executed code to improve performance.

### Examples of JavaScript Engines

| Engine         | Commonly Used In          |
| -------------- | ------------------------- |
| V8             | Google Chrome and Node.js |
| SpiderMonkey   | Mozilla Firefox           |
| JavaScriptCore | Apple Safari              |

**Important:** JavaScript execution is more sophisticated than simply reading and executing every line one by one. The exact process depends on the JavaScript engine.

---

## 4.3 Dynamically Typed Language

JavaScript is dynamically typed.

This means a variable can hold values of different types during program execution.

The type is associated with the value, and JavaScript determines the type of a value at runtime.

### Example

```javascript
let x = 10;

console.log(typeof x);
```

Output:

```text
number
```

Now assign a string to the same variable:

```javascript
x = "Hello";

console.log(typeof x);
```

Output:

```text
string
```

The same variable can hold a number and later hold a string.

**Remember:** Dynamically typed does not mean JavaScript has no types. JavaScript has types, but variables are not restricted to one declared type.

---

## 4.4 Prototype-Based Object Orientation

JavaScript supports object-oriented programming through objects and prototypes.

Objects can inherit properties and methods from other objects through the prototype chain.

This mechanism is called **prototype-based inheritance**.

### Example

```javascript
const employee = {
    name: "XYZ",

    display() {
        console.log(this.name);
    }
};

employee.display();
```

Output:

```text
XYZ
```

### Explanation

* `employee` is an object.
* `name` is a property.
* `display()` is a method.
* `this.name` accesses the `name` property of the object on which the method is called.

JavaScript also supports classes, which provide a class-based syntax built on its prototype-based object model.

---

## 4.5 Functional Programming

JavaScript supports functional programming techniques.

Functional programming emphasizes the use of functions to organize and transform data.

Important concepts include:

1. Higher-order functions
2. Callback functions
3. Closures
4. `map()`
5. `filter()`
6. `reduce()`

### Example: `map()`

```javascript
const numbers = [1, 2, 3, 4];

const squares = numbers.map(number => number * number);

console.log(squares);
```

Output:

```text
[1, 4, 9, 16]
```

The `map()` method creates a new array by applying a function to each element.

---

## 4.6 Event-Driven Programming

JavaScript supports event-driven programming.

In event-driven programming, a program responds to events rather than executing only a fixed sequence of instructions.

### Common Events

1. A button is clicked.
2. The mouse is moved.
3. A key is pressed.
4. A webpage finishes loading.
5. A form is submitted.
6. A timer reaches its scheduled execution time.

### Example: Button Click

```html
<button id="myButton">Click Me</button>

<script>
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        console.log("Button clicked!");
    });
</script>
```

Output after clicking the button:

```text
Button clicked!
```

### Explanation

* `getElementById()` selects the button.
* `addEventListener()` registers a function for the click event.
* The function executes when the button is clicked.

---

## 4.7 Asynchronous Programming

JavaScript supports asynchronous programming, allowing applications to handle operations such as network requests, timers, and certain file operations without unnecessarily blocking the main execution flow.

Asynchronous programming is particularly useful when an operation takes time to complete.

### Common Asynchronous Mechanisms

1. Callbacks
2. Promises
3. `async` and `await`

### Example: `setTimeout()`

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside timeout");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Inside timeout
```

### Explanation

1. `"Start"` is printed first.
2. The timer is scheduled.
3. `"End"` is printed without waiting for the timer to finish.
4. After approximately one second, `"Inside timeout"` is printed.

**Important:** Asynchronous programming does not mean JavaScript executes every operation simultaneously. JavaScript execution, runtime APIs, and the event loop work together to manage asynchronous operations.

---

## 4.8 Single-Threaded Execution Model

JavaScript commonly executes application code on a single main thread within a JavaScript execution environment.

This means the main thread executes one piece of JavaScript at a time.

However, the runtime can manage asynchronous operations and schedule callbacks for later execution.

### Important Concepts

* **Call stack:** Tracks the functions currently being executed.
* **Runtime APIs:** Provide capabilities such as timers and network requests.
* **Event loop:** Coordinates when eligible queued callbacks can execute.
* **Callback queue:** Holds callbacks waiting to be processed.

This model is especially important when understanding asynchronous JavaScript.

**Note:** JavaScript environments can also support workers, which allow JavaScript code to execute on separate threads.

---

## 4.9 Cross-Platform Compatibility

JavaScript can run on different operating systems and platforms.

Examples include:

* Windows
* macOS
* Linux
* Android
* iOS

Its availability depends on the runtime environment and the APIs supported by that environment.

For example, browser-based JavaScript runs in supported web browsers, while Node.js can run on supported desktop and server operating systems.

---

## 4.10 Server-Side Development

JavaScript is not limited to web browsers.

Developers can use JavaScript outside the browser through runtime environments such as Node.js.

### Node.js Can Be Used To Build

* REST APIs
* Backend services
* Database-driven applications
* Command-line tools
* Real-time applications
* Server-side applications

### Example

A web application might use:

```text
Frontend
   |
   | HTTP Request
   v
JavaScript Backend (Node.js)
   |
   v
Database
```

The frontend communicates with the backend, and the backend can interact with a database to retrieve or store information.

---

# 5. Homework

## 5.1 Programming Language vs Scripting Language vs Markup Language

Study and explain:

* What is a programming language?
* What is a scripting language?
* What is a markup language?
* What are the differences between them?
* Where does JavaScript fit into these categories?
* Python Vs JavaScript ?

## 5.2 JavaScript vs ECMAScript

Study and explain:

* What is JavaScript?
* What is ECMAScript?
* Why was ECMAScript introduced?
* How are JavaScript engines related to ECMAScript?
* What is the difference between ECMAScript features and browser APIs?

## 5.3 Is Python Synchronous or Asynchronous?

Study and explain in depth:

* What is synchronous programming?
* What is asynchronous programming?
* How does synchronous execution work in Python?
* How does asynchronous execution work in Python?
* What are `async` and `await`?
* What is the difference between concurrency and parallelism?
* Can Python support both synchronous and asynchronous programming?

---

# 6. Quick Revision Summary

## JavaScript Fundamentals

| Topic                     | Key Point                                                                 |
| ------------------------- | ------------------------------------------------------------------------- |
| JavaScript                | High-level, dynamically typed programming language                        |
| Primary Web Role          | Adds behavior and interactivity                                           |
| HTML                      | Defines structure and content                                             |
| CSS                       | Controls presentation and styling                                         |
| ECMAScript                | Standard specification for the core language                              |
| Ecma International        | Organization that publishes technical standards                           |
| Node.js                   | Runtime for executing JavaScript outside browsers                         |
| Dynamic Typing            | Variables can hold values of different types                              |
| Prototypes                | Mechanism supporting object inheritance                                   |
| Functional Programming    | Uses functions to organize and transform data                             |
| Event-Driven Programming  | Responds to events                                                        |
| Asynchronous Programming  | Coordinates operations that do not need to block the main execution flow  |
| Single-Threaded Execution | Main JavaScript execution typically processes one piece of code at a time |
| JIT Compilation           | Compiles selected code during execution to improve performance            |

## Important Terms

```text
JS       → JavaScript
ES       → ECMAScript
JIT      → Just-In-Time Compilation
DOM      → Document Object Model
API      → Application Programming Interface
V8       → JavaScript engine used by Chrome and Node.js
Node.js  → JavaScript runtime environment
```

## Remember

1. JavaScript is both a scripting language and a programming language.
2. ECMAScript defines the core language specification.
3. HTML, CSS, and JavaScript serve different purposes.
4. Modern JavaScript engines use different execution and optimization techniques.
5. JavaScript supports both synchronous and asynchronous programming.
6. JavaScript can execute in browsers and server-side runtime environments.
7. Node.js enables server-side JavaScript development.
8. JavaScript uses prototypes for inheritance, and classes provide an additional syntax for object-oriented programming.



### Advanced Features 

1. Automatic Memory Management : JS engines manage memory automatically through garbage collection, reducing the risk of memory leaks.

2. Light Weight : JS can be used for small scripts as well as complex applications.

3. Case Sensitive : JS is a case-sensitive language.

4. Multiple Programming Paradigms : JS supports multiple programming paradigms such as procedural, object-oriented, and functional programming.

5. Supports Modules : JS supports modules which helps in code organization and reusability.

### Popular Frameworks and Libraries

#### 1. Frontend Frameworks & Libraries
* **React**: A component-based declarative library for building interactive user interfaces.
* **Vue.js**: An approachable, performant, and versatile progressive framework for building web UIs.
* **Angular**: A comprehensive, enterprise-ready TypeScript-based web framework.
* **Next.js**: A full-stack React framework featuring server-side rendering (SSR) and static site generation (SSG).

#### 2. Backend & Runtime Frameworks
* **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
* **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
* **Fastify**: High-performance, low overhead web framework for Node.js.

#### 3. Testing Frameworks
* **Jest**: A delightful JavaScript testing framework with a focus on simplicity.
* **Vitest**: A blazing fast next-generation unit test framework powered by Vite.
* **Playwright / Cypress**: Modern end-to-end (E2E) testing frameworks for browser automation.
