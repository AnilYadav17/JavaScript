console.log("--- 1. Count Vowels, Consonants & Spaces ---");
function countChars(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0, cCount = 0, sCount = 0;

    for (let ch of str) {
        if (vowels.includes(ch)) {
            vCount++;
        } else if (ch === " ") {
            sCount++;
        } else if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
            cCount++;
        }
    }
    console.log(`Text: "${str}"`);
    console.log(`Vowels: ${vCount}, Consonants: ${cCount}, Spaces: ${sCount}`);
}
countChars("JavaScript is fun");

console.log("\n--- 2. Palindrome Checker ---");
function isPalindrome(str) {
    let cleaned = str.toLowerCase();
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log("Is 'racecar' Palindrome?:", isPalindrome("racecar"));
console.log("Is 'hello' Palindrome?:", isPalindrome("hello"));

console.log("\n--- 3. Reverse a String ---");
function reverseString(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}
console.log("Original: 'Python' -> Reversed:", reverseString("Python"));

console.log("\n--- 4. Title Case ---");
function titleCase(str) {
    let words = str.split(" ");
    let result = [];
    for (let w of words) {
        result.push(w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    }
    return result.join(" ");
}
console.log(titleCase("learning javascript after python"));

console.log("\n--- 5. Mask Sensitive Info ---");
function maskNumber(num) {
    let lastFour = num.slice(-4);
    return lastFour.padStart(num.length, "*");
}
console.log("Card: 1234567890123456 -> Masked:", maskNumber("1234567890123456"));
console.log("Phone: 9876543210 -> Masked:", maskNumber("9876543210"));

console.log("\n--- 6. Word Counter ---");
function countWords(str) {
    let trimmed = str.trim();
    if (trimmed === "") return 0;
    return trimmed.split(/\s+/).length;
}
console.log("Word count of 'JavaScript is easy to learn':", countWords("JavaScript is easy to learn"));
