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

// 5. Factorial of a Number (5! = 120)
console.log("\n--- 5. Factorial of 5 ---");
let factNum = 5;
let fact = 1;
for (let i = 1; i <= factNum; i++) {
    fact *= i;
}
console.log(`${factNum}! =`, fact);

// 6. Reverse a Number using While Loop (12345 -> 54321)
console.log("\n--- 6. Reverse a Number ---");
let originalNum = 12345;
let temp = originalNum;
let reversedNum = 0;

while (temp > 0) {
    let lastDigit = temp % 10;
    reversedNum = (reversedNum * 10) + lastDigit;
    temp = Math.floor(temp / 10);
}
console.log(`Original: ${originalNum} -> Reversed: ${reversedNum}`);

// 7. Prime Number Check
console.log("\n--- 7. Prime Number Check ---");
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log("Is 7 Prime?:", isPrime(7));
console.log("Is 12 Prime?:", isPrime(12));

// 8. Simple Right Triangle Star Pattern
console.log("\n--- 8. Star Pattern ---");
for (let i = 1; i <= 4; i++) {
    console.log("* ".repeat(i));
}
