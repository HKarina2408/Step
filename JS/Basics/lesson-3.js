const str = "I am a string";

const str2 = new String("String");
console.log(str2);

// str.[0]; I

// immutable
const I = str.slice(0, 1);
const am = str.slice(2, 4);
const a = str.slice(5, 6);
const string = str.slice(7);

console.log(I, am, a, string);
console.log(str);

const lastStrSymbol = str[str.length - 1];

console.log(lastStrSymbol.toUpperCase());

// // Завдання:

const str3 = "Karina";
// нарізати всі голосні літери вашого імені (slice)

const a1 = str3.slice(1, 2);
const i = str3.slice(3, 4);
const a2 = str3.slice(5, 6);

console.log(a1, i, a2);

console.log(str.indexOf("I"));
console.log(str.indexOf("a"));
console.log(str.indexOf(" "));

console.log(str.lastIndexOf("I"));
console.log(str.lastIndexOf("a"));
console.log(str.lastIndexOf(" "));

console.log(str.at(-1).toUpperCase(), str[str.length - 1]);

console.log(str.toLowerCase().includes("i"));

// Завдання
// const str = "I am a string";
const world = "Hello";

// перевірити чи є слово у строці (не враховуйте регістр)

console.log(str.toLowerCase().includes(world.toLowerCase()));

console.log(str.replace("I", "😎"));
console.log(str.replace(str, "New string"));
console.log(str.replaceAll("a", "-"));
console.log(
  str.length,
  str
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(":", "").length
);

// Завдання

const message =
  "I am a message. Here is my text, here is my symbols: @#$%^&*()";

// Порахуйте кількість корисної інформації у message (.,:@#$%^&*()" ")

console.log(
  message
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll(":", "")
    .replaceAll("@", "")
    .replaceAll("#", "")
    .replaceAll("$", "")
    .replaceAll("%", "")
    .replaceAll("^", "")
    .replaceAll("&", "")
    .replaceAll("*", "")
    .replaceAll("(", "")
    .replaceAll(")", "").length
);

const string1 = "";
const string2 = ":)";
const string3 = new String("");

const string4 = `${str.toLowerCase()} Hello, world! ${string2} ${10 * 10}`;

console.log(string4);
console.log(str + string2);
console.log(str.concat(string2));
console.log(`${str}${string2}`);


// Easter egg

const fn = (a) => {
    console.log(a)
};

fn`10`;