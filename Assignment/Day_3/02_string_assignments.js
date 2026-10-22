console.log("--- 1. Count Vowels, Consonants & Spaces ---");
let text = "JavaScript is fun";
let vowels = 0;
let consonants = 0;
let spaces = 0;

for (let ch of text.toLowerCase()) {
    if (ch === " ") {
        spaces++;
    } else if ("aeiou".includes(ch)) {
        vowels++;
    } else if (ch >= "a" && ch <= "z") {
        consonants++;
    }
}
console.log("Text:", text);
console.log("Vowels:", vowels, "Consonants:", consonants, "Spaces:", spaces);

console.log("\n--- 2. Palindrome Checker ---");
let word = "racecar";
let revWord = word.split("").reverse().join("");
if (word === revWord) {
    console.log(word, "is Palindrome");
} else {
    console.log(word, "is Not Palindrome");
}

console.log("\n--- 3. Reverse a String ---");
let original = "Python";
let reversedStr = "";
for (let i = original.length - 1; i >= 0; i--) {
    reversedStr += original[i];
}
console.log("Original:", original);
console.log("Reversed:", reversedStr);

console.log("\n--- 4. Title Case ---");
let sentence = "learning javascript after python";
let words = sentence.split(" ");
let titleCaseArr = [];
for (let w of words) {
    titleCaseArr.push(w[0].toUpperCase() + w.slice(1));
}
console.log(titleCaseArr.join(" "));

console.log("\n--- 5. Mask Sensitive Info ---");
let card = "1234567890123456";
let masked = "*".repeat(card.length - 4) + card.slice(-4);
console.log("Original card:", card);
console.log("Masked card:", masked);

console.log("\n--- 6. Word Counter ---");
let essay = "JavaScript is easy to learn";
let count = essay.trim().split(" ").length;
console.log("Sentence:", essay);
console.log("Word count:", count);
