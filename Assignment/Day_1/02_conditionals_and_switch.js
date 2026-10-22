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
console.log(number, "is:", result);

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

console.log("\n--- If-Else Assignments ---");

let n = 10;
if (n > 0) {
    console.log(n, "is Positive");
} else if (n < 0) {
    console.log(n, "is Negative");
} else {
    console.log(n, "is Zero");
}

let num1 = 15;
let num2 = 42;
let num3 = 27;
let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}
console.log("Largest of", num1, num2, num3, "is:", largest);

let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a Leap Year");
} else {
    console.log(year, "is NOT a Leap Year");
}
