let text = "JavaScript Programming";

console.log("Original text:", text);
console.log("Length:", text.length);

console.log("\n--- Character Access ---");
console.log("charAt(0):", text.charAt(0));
console.log("at(-1):", text.at(-1));
console.log("charCodeAt(0):", text.charCodeAt(0));

console.log("\n--- Case Conversion ---");
console.log("toUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());

console.log("\n--- Trimming ---");
let padded = "   Hello World   ";
console.log("trim():", `"${padded.trim()}"`);
console.log("trimStart():", `"${padded.trimStart()}"`);
console.log("trimEnd():", `"${padded.trimEnd()}"`);

console.log("\n--- Slicing & Substring ---");
console.log("slice(0, 10):", text.slice(0, 10));
console.log("slice(-11):", text.slice(-11));
console.log("substring(0, 4):", text.substring(0, 4));

console.log("\n--- Searching ---");
let sentence = "Learn JS, code JS, enjoy JS!";
console.log("indexOf('JS'):", sentence.indexOf("JS"));
console.log("lastIndexOf('JS'):", sentence.lastIndexOf("JS"));
console.log("includes('code'):", sentence.includes("code"));
console.log("startsWith('Learn'):", sentence.startsWith("Learn"));
console.log("endsWith('!'):", sentence.endsWith("!"));

console.log("\n--- Replace ---");
console.log("replace('JS', 'JavaScript'):", sentence.replace("JS", "JavaScript"));
console.log("replaceAll('JS', 'JavaScript'):", sentence.replaceAll("JS", "JavaScript"));

console.log("\n--- Split ---");
let csv = "Red,Green,Blue";
console.log("split(','):", csv.split(","));
console.log("split(''):", "Code".split(""));

console.log("\n--- Repeat & Padding ---");
console.log("'Hi '.repeat(3):", "Hi ".repeat(3));
let id = "25";
console.log("padStart(5, '0'):", id.padStart(5, "0"));
console.log("padEnd(5, '.'):", id.padEnd(5, "."));

console.log("\n--- Concatenation & Template Literals ---");
let firstName = "Anil";
let lastName = "Yadav";
console.log("concat():", firstName.concat(" ", lastName));
console.log("Template Literal:", `Welcome, ${firstName} ${lastName}!`);
