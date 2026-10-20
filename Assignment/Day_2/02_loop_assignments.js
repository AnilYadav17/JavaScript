// Day 2 - Part 2: Loop Assignments (Using For & While Loops)

// 1. Print 1 to 10 using for loop
console.log("--- 1. Print 1 to 10 (For Loop) ---");
let oneToTen = [];
for (let i = 1; i <= 10; i++) {
    oneToTen.push(i);
}
console.log(oneToTen.join(", "));

// 2. Print 10 to 1 using while loop
console.log("\n--- 2. Print 10 to 1 (While Loop) ---");
let tenToOne = [];
let j = 10;
while (j >= 1) {
    tenToOne.push(j);
    j--;
}
console.log(tenToOne.join(", "));

// 3. Multiplication Table of a Number
console.log("\n--- 3. Multiplication Table of 5 ---");
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}

// 4. Sum of First N Numbers
console.log("\n--- 4. Sum of First 10 Numbers ---");
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum of first ${n} numbers:`, sum);
