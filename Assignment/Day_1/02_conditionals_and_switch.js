// Day 1 - Part 2: Conditionals (If-Else & Switch Case)

// 1. Simple If
let score = 85;
if (score >= 50) {
    console.log("Passed the test!");
}

// 2. If - Else
let age = 16;
if (age >= 18) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

// 3. If - Else If - Else Ladder
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

// 4. Nested If - Else
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

// 5. Ternary Operator (condition ? true_value : false_value)
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(`${number} is: ${result}`);

// 6. Switch Case Statement
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
