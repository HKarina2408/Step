// Number

const n = 100;
const m = 0.675;
const o = 13.566778;

const a = new Number(50);

console.log(a);

// 100
const stringFromNumber = n.toString();
console.log(n, stringFromNumber);

const stringFromNumber2 = n.toLocaleString();
console.log(n, stringFromNumber2);

const fixedValue = o.toFixed(3);
console.log(o, fixedValue);

const precisionValue = o.toPrecision(4);
console.log(o, precisionValue);

// Завдання:

const n1 = 10.1234567;
const n2 = 3;

// Округліть та виведіть число n1 (2 знаки після коми)
// Переведіть n2 у строку
// "Додайте" дві строки, що у вас вийшли +

const fixedValue2 = n1.toFixed(2);
console.log(fixedValue2);

const stringFromNumber3 = n2.toString();
console.log(stringFromNumber3);

const sum = fixedValue2 + stringFromNumber3;
console.log(sum);

// Strings

const name1 = "Karina";
const message2 = "Hello world!";
const smile = "😎";

String;

const oldString = new String("Old string");
console.log(smile);

console.log(oldString);

console.log(name1 + " " + message2);

console.log(name1[0], name1[1], name1[2], name1[3], name1[4], name1[5]);

// K
const firstLetter = name1[0];

console.log(name1.length);
console.log(message2.length);
console.log(smile.length);

// Завдання:
 
const str1 = "Hello";
const str2 = "World";
const str3 = "! :)";
 
// порахуйте та виведіть загальну довжину строк

const sum1 = str1 + str2 + str3;
console.log(sum1);
console.log(sum1.length);

const srt1And2 = str1.concat(" ", str2, " ", str3, "I am  a programmer", "2000");
console.log(srt1And2);

const capitalizedStr1 = str1.toUpperCase();
console.log(capitalizedStr1);

const loweredLetter = str2.toLowerCase();
console.log(loweredLetter);

const firstNameLetter = name1[0].toLowerCase();

console.log(firstNameLetter.concat(smile));
console.log(o.toFixed(2).concat(" ", "$"));