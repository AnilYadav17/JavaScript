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
