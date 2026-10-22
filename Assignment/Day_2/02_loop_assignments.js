console.log("--- 1. Print 1 to 10 (For Loop) ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n--- 2. Print 10 to 1 (While Loop) ---");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

console.log("\n--- 3. Multiplication Table of 5 ---");
let tableNum = 5;
for (let i = 1; i <= 10; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}

console.log("\n--- 4. Sum of First 10 Numbers ---");
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum:", sum);

console.log("\n--- 5. Factorial of 5 ---");
let factNum = 5;
let fact = 1;
for (let i = 1; i <= factNum; i++) {
    fact *= i;
}
console.log("Factorial:", fact);

console.log("\n--- 6. Reverse a Number ---");
let num = 12345;
let reversed = 0;
while (num > 0) {
    let digit = num % 10;
    reversed = (reversed * 10) + digit;
    num = Math.floor(num / 10);
}
console.log("Reversed:", reversed);

console.log("\n--- 7. Prime Number Check ---");
let checkNum = 7;
let isPrime = true;
for (let i = 2; i < checkNum; i++) {
    if (checkNum % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime && checkNum > 1) {
    console.log(checkNum, "is Prime");
} else {
    console.log(checkNum, "is Not Prime");
}

console.log("\n--- 8. Star Pattern ---");
for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let k = 1; k <= i; k++) {
        line += "* ";
    }
    console.log(line);
}
