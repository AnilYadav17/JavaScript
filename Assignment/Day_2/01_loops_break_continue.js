// Day 2 - Part 1: Loops and Jump Statements (Break & Continue)

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

// 5. Break Keyword (exits the loop immediately)
console.log("\n--- Break Keyword Example ---");
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log("Loop stopped at i =", i);
        break;
    }
    console.log("i =", i);
}

// 6. Continue Keyword (skips current step, goes to next)
console.log("\n--- Continue Keyword Example ---");
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        continue; // skip even numbers
    }
    console.log("Odd number:", i);
}
