const str = "       Hello World!         ";

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

const trimmed = str.trim();
console.log(trimmed, str);

console.log(str);

const str1 = "Hello ";

console.log(str1.repeat(5));

const repeatStr = str1.repeat(2);

console.log(repeatStr);

const inStartsWith = str1.startsWith("H");
console.log(inStartsWith);

const isEndsWithSpace = str1.endsWith(" ");
console.log(isEndsWithSpace);

const possibleNumber = "200";

// Conversions

const number1 = Number(possibleNumber);
console.log(number1);

const number2 = +possibleNumber;
console.log(number2);

// Empty string

// ""
// ''
// ``

const emptyString = "";
console.log(emptyString.length);

// 0, 1
