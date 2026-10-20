console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}

console.log("\n--- While Loop ---");
let count = 5;
while (count >= 1) {
    console.log("Countdown:", count);
    count--;
}

console.log("\n--- Do-While Loop ---");
let num = 10;
do {
    console.log("Executed once with num =", num);
    num++;
} while (num < 5);

console.log("\n--- For...of Loop ---");
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

console.log("\n--- Break Keyword Example ---");
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        console.log("Loop stopped at i =", i);
        break;
    }
    console.log("i =", i);
}

console.log("\n--- Continue Keyword Example ---");
for (let i = 1; i <= 6; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Odd number:", i);
}
