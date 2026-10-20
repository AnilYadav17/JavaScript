// Day 3 - Part 1: All JavaScript String Methods with Examples

let text = "JavaScript Programming";

// 1. Length property
console.log("Original text:", text);
console.log("Length:", text.length);

// 2. Character Access: charAt, at, bracket notation
console.log("\n--- Character Access ---");
console.log("charAt(0):", text.charAt(0));       // 'J'
console.log("at(-1):", text.at(-1));             // 'g' (supports negative index)
console.log("charCodeAt(0):", text.charCodeAt(0));// 74 (ASCII code)

// 3. Case Conversion
console.log("\n--- Case Conversion ---");
console.log("toUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());

// 4. Trimming Whitespace
console.log("\n--- Trimming ---");
let padded = "   Hello World   ";
console.log("trim():", `"${padded.trim()}"`);
console.log("trimStart():", `"${padded.trimStart()}"`);
console.log("trimEnd():", `"${padded.trimEnd()}"`);

// 5. Extracting Substrings: slice, substring
console.log("\n--- Slicing & Substring ---");
console.log("slice(0, 10):", text.slice(0, 10));       // 'JavaScript'
console.log("slice(-11):", text.slice(-11));           // 'Programming'
console.log("substring(0, 4):", text.substring(0, 4)); // 'Java'

// 6. Searching: indexOf, lastIndexOf, includes, startsWith, endsWith
console.log("\n--- Searching ---");
let sentence = "Learn JS, code JS, enjoy JS!";
console.log("indexOf('JS'):", sentence.indexOf("JS"));         // 6
console.log("lastIndexOf('JS'):", sentence.lastIndexOf("JS")); // 25
console.log("includes('code'):", sentence.includes("code"));   // true
console.log("startsWith('Learn'):", sentence.startsWith("Learn")); // true
console.log("endsWith('!'):", sentence.endsWith("!"));         // true

// 7. Replacing Content: replace, replaceAll
console.log("\n--- Replace ---");
console.log("replace('JS', 'JavaScript'):", sentence.replace("JS", "JavaScript"));
console.log("replaceAll('JS', 'JavaScript'):", sentence.replaceAll("JS", "JavaScript"));

// 8. Splitting String into Array: split
console.log("\n--- Split ---");
let csv = "Red,Green,Blue";
console.log("split(','):", csv.split(","));
console.log("split(''):", "Code".split(""));

// 9. Repeat & Padding
console.log("\n--- Repeat & Padding ---");
console.log("'Hi '.repeat(3):", "Hi ".repeat(3));
let id = "25";
console.log("padStart(5, '0'):", id.padStart(5, "0")); // "00025"
console.log("padEnd(5, '.'):", id.padEnd(5, "."));     // "25..."

// 10. Concatenation & Template Literals
console.log("\n--- Concatenation & Template Literals ---");
let firstName = "Anil";
let lastName = "Yadav";
console.log("concat():", firstName.concat(" ", lastName));
console.log("Template Literal:", `Welcome, ${firstName} ${lastName}!`);
