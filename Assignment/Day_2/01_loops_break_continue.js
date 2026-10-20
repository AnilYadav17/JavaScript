// Day 2 - Part 1: Loops in JavaScript

// 1. For Loop (print 1 to 5)
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

// 2. While Loop (print 5 down to 1)
console.log("\n--- While Loop ---");
let count = 5;
while (count >= 1) {
    console.log("Countdown:", count);
    count--;
}

// 3. Do-While Loop (runs at least once)
console.log("\n--- Do-While Loop ---");
let num = 10;
do {
    console.log("Executed once with num =", num);
    num++;
} while (num < 5);

// 4. For...of Loop (iterating arrays or strings)
console.log("\n--- For...of Loop ---");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}
