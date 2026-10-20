// Day 1 - Part 1: All JavaScript Operators

// 1. Arithmetic Operators
let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// 2. Relational (Comparison) Operators
console.log("\n--- Relational Operators ---");
let x = 5;
let y = "5";

console.log("Loose Equal (5 == '5'):", x == y);       // true (checks only value)
console.log("Strict Equal (5 === '5'):", x === y);    // false (checks value & type)
console.log("Loose Not Equal (5 != '5'):", x != y);   // false
console.log("Strict Not Equal (5 !== '5'):", x !== y);// true
console.log("Greater than (10 > 5):", 10 > 5);
console.log("Less than (10 < 5):", 10 < 5);
console.log("Greater than or equal (10 >= 10):", 10 >= 10);
console.log("Less than or equal (5 <= 4):", 5 <= 4);

// 3. Assignment Operators
console.log("\n--- Assignment Operators ---");
let num = 20;
num += 5; // num = num + 5
console.log("After += 5:", num);

num -= 3; // num = num - 3
console.log("After -= 3:", num);

num *= 2; // num = num * 2
console.log("After *= 2:", num);

num /= 4; // num = num / 4
console.log("After /= 4:", num);

num %= 3; // num = num % 3
console.log("After %= 3:", num);

// 4. Logical Operators (&&, ||, !)
console.log("\n--- Logical Operators ---");
let isAdult = true;
let hasID = false;

console.log("AND (isAdult && hasID):", isAdult && hasID); // true only if both are true
console.log("OR (isAdult || hasID):", isAdult || hasID);   // true if at least one is true
console.log("NOT (!isAdult):", !isAdult);                 // inverts true to false

// 5. Increment and Decrement Operators
console.log("\n--- Increment & Decrement Operators ---");
let count = 5;

// Post-increment: uses value first, then increments
console.log("Post-increment count++:", count++);
console.log("Value after count++:", count);

// Pre-increment: increments first, then uses value
console.log("Pre-increment ++count:", ++count);

// Post-decrement & Pre-decrement
console.log("Post-decrement count--:", count--);
console.log("Pre-decrement --count:", --count);

// 6. Bitwise Operators
console.log("\n--- Bitwise Operators ---");
let n1 = 5; // 0101 in binary
let n2 = 3; // 0011 in binary

console.log("Bitwise AND (5 & 3):", n1 & n2); // 1 (0001)
console.log("Bitwise OR (5 | 3):", n1 | n2);  // 7 (0111)
console.log("Bitwise XOR (5 ^ 3):", n1 ^ n2); // 6 (0110)
console.log("Bitwise NOT (~5):", ~n1);        // -6
console.log("Left Shift (5 << 1):", n1 << 1); // 10
console.log("Right Shift (5 >> 1):", n1 >> 1);// 2
