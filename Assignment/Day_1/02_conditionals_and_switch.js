let score = 85;
if (score >= 50) {
    console.log("Passed the test!");
}

let age = 16;
if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

let hasAccount = true;
let balance = 1000;
let amount = 400;

if (hasAccount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawal successful! Remaining balance:", balance);
    } else {
        console.log("Insufficient balance.");
    }
} else {
    console.log("No account found.");
}

let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(`${number} is: ${result}`);

let day = 3;
switch (day) {
    case 1:
        console.log("Day: Monday");
        break;
    case 2:
        console.log("Day: Tuesday");
        break;
    case 3:
        console.log("Day: Wednesday");
        break;
    case 4:
        console.log("Day: Thursday");
        break;
    case 5:
        console.log("Day: Friday");
        break;
    case 6:
    case 7:
        console.log("Day: Weekend");
        break;
    default:
        console.log("Invalid day");
}

console.log("\n--- If-Else Assignments ---");

function checkNumber(n) {
    if (n > 0) return "Positive";
    if (n < 0) return "Negative";
    return "Zero";
}
console.log("Check 10:", checkNumber(10));
console.log("Check -5:", checkNumber(-5));
console.log("Check 0:", checkNumber(0));

function findLargest(a, b, c) {
    if (a >= b && a >= c) return a;
    if (b >= a && b >= c) return b;
    return c;
}
console.log("Largest of (15, 42, 27):", findLargest(15, 42, 27));

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year`;
    }
    return `${year} is NOT a Leap Year`;
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2025));
