# Modern JavaScript Operators & Functions

A comprehensive reference for advanced operators introduced in modern
ECMAScript (ES2020+) along with core function fundamentals.

---

## 1. Ternary Operator (`?:`)

The ternary operator is the only JavaScript operator that takes three operands.
It is frequently used as a concise shortcut for an `if-else` statement.

```js
condition ? exprIfTrue : exprIfFalse
```

```js
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

let a = 10;
let b = 20;
let result1 = a > b ? "a is greater" : "b is greater";
console.log(result1); // b is greater
```

---

## 2. Nullish Coalescing Operator (`??`)

Introduced in **ES2020 (ES11)**, the nullish coalescing operator (`??`)
returns its right-hand operand when its left-hand operand is `null` or
`undefined`. Otherwise, it returns the left-hand operand.

```js
let name = "Anil";
let result = name ?? "Guest";
console.log(result); // Anil

console.log(null ?? "default value");      // default value
console.log(undefined ?? "default value"); // default value
console.log(0 ?? "default value");         // 0
console.log(false ?? "default value");     // false
console.log("" ?? "default value");        // ""
```

---

## 3. Optional Chaining Operator (`?.`)

Introduced in **ES2020**, the optional chaining operator (`?.`) allows
safely accessing properties, methods, and array elements. It short-circuits
and returns `undefined` if the reference is `null` or `undefined` instead
of throwing a `TypeError`.

```js
let student = {
    name: "Anil",
    age: 20,
    department: {
        dept_name: "CSE",
        dept_id: 101,
        location: {
            city: "HYDERABAD",
            state: "TELANGANA"
        }
    }
};

console.log(student.name);                          // Anil
console.log(student.department.location.city);      // HYDERABAD
console.log(student.address?.city);                 // undefined
console.log(student.department?.location?.city);    // HYDERABAD
```

```js
let user1 = {
    name: "deepika",
    hello: function () {
        console.log("hello");
    }
};
user1?.hello(); // hello
```

---

## 4. Optional Chaining with Nullish Coalescing

Combine `?.` and `??` to safely access nested values and provide a fallback:

```js
let user2 = {
    name: "Anil"
};
console.log(user2.address?.city ?? "City not available"); // City not available
```

---

## 5. Instanceof Operator

The `instanceof` operator tests whether the prototype property of a
constructor appears anywhere in the prototype chain of an object.

```js
object instanceof constructor
```

```js
let a = [10, 20, 30];
console.log(a instanceof Array);  // true
console.log(a instanceof String); // false
console.log(a instanceof Object); // true
```

---

## 6. In Operator

Checks if a specified property exists in an object or its prototype chain
(returns `true` even if the property's value is `undefined`).

```js
let student = {
    name: "Anil",
    age: 20,
    city: undefined
};

console.log("name" in student);    // true
console.log("city" in student);    // true
console.log("address" in student); // false
```

---

## 7. Functions in JavaScript

A function in JavaScript is a reusable block of code designed to perform
a particular task.

```js
function hello(name) {
    console.log("hello", name);
}

hello();        // hello undefined
hello("Anil");  // hello Anil

let r = hello("Anil");
console.log(r); // undefined (functions without a return statement return undefined)
```
