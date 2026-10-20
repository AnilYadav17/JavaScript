let a = 10;
let b = 3;

console.log("--- Arithmetic Operators ---");
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

console.log("\n--- Relational Operators ---");
let x = 5;
let y = "5";

console.log("Loose Equal (5 == '5'):", x == y);
console.log("Strict Equal (5 === '5'):", x === y);
console.log("Loose Not Equal (5 != '5'):", x != y);
console.log("Strict Not Equal (5 !== '5'):", x !== y);
console.log("Greater than (10 > 5):", 10 > 5);
console.log("Less than (10 < 5):", 10 < 5);
console.log("Greater than or equal (10 >= 10):", 10 >= 10);
console.log("Less than or equal (5 <= 4):", 5 <= 4);

console.log("\n--- Assignment Operators ---");
let num = 20;
num += 5;
console.log("After += 5:", num);

num -= 3;
console.log("After -= 3:", num);

num *= 2;
console.log("After *= 2:", num);

num /= 4;
console.log("After /= 4:", num);

num %= 3;
console.log("After %= 3:", num);

console.log("\n--- Logical Operators ---");
let isAdult = true;
let hasID = false;

console.log("AND (isAdult && hasID):", isAdult && hasID);
console.log("OR (isAdult || hasID):", isAdult || hasID);
console.log("NOT (!isAdult):", !isAdult);

console.log("\n--- Increment & Decrement Operators ---");
let count = 5;

console.log("Post-increment count++:", count++);
console.log("Value after count++:", count);
console.log("Pre-increment ++count:", ++count);
console.log("Post-decrement count--:", count--);
console.log("Pre-decrement --count:", --count);

console.log("\n--- Bitwise Operators ---");
let n1 = 5;
let n2 = 3;

console.log("Bitwise AND (5 & 3):", n1 & n2);
console.log("Bitwise OR (5 | 3):", n1 | n2);
console.log("Bitwise XOR (5 ^ 3):", n1 ^ n2);
console.log("Bitwise NOT (~5):", ~n1);
console.log("Left Shift (5 << 1):", n1 << 1);
console.log("Right Shift (5 >> 1):", n1 >> 1);
