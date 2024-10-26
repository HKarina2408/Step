const isAdmin = true;

// || && !

if (isAdmin) {
  console.log("Admin");
} else {
  console.log("Not an Admin");
}

const level1 = "Level1";
const level2 = "Level2";
const level3 = "Level3";
const level4 = "Level4";
const level5 = "Level5";

let currentLevel = level1;

function checkLevel() {
  if (currentLevel === level1) {
    console.log("This is the 1 level");
    currentLevel = level2;
  } else if (currentLevel === level2) {
    console.log("This is the 2 level");
    currentLevel = level3;
  } else if (currentLevel === level3) {
    console.log("This is the 3 level");
    currentLevel = level4;
  } else if (currentLevel === level4) {
    console.log("This is the 4 level");
    currentLevel = level5;
  } else {
    console.log("This is the last level");
  }
}

checkLevel();

console.log(currentLevel);

// // Завдання:
// напишіть функцію, що вітається з користувачем

function greet() {
  //   const fullName = "Igor";
  //   const fullName = "Igor Sergienko";
  //   const fullName = "";

  // Залежно від данних виведіть:
  // 1. Лише Ім`я, якщо немає призв.
  // 2. Лише призв. якщо є Ім`я і призв.
  // 3. Who is there ? якщо немає нічого, або якщо строка перевищує 30 символів

  //   const fullName = "Karina";
  // const fullName = "Karina Hnatiuk";
  // const fullName = "";

  // 31 * "o"
  const fullName = new Array(31).fill("o").join("");
  console.log(fullName);

  if (!fullName || fullName.length >= 30) {
    console.log("Who is there?");
  } else if (fullName.includes(" ")) {
    const spaceIndex = fullName.indexOf(" ");
    const secondName = fullName.slice(spaceIndex + 1);
    console.log(`Hello, ${secondName}`);
  } else {
    console.log(`Hello, ${fullName}`);
  }
}
greet();

// || && !

const prevUserData = { name: "Oleg" };
const updateUserData = prevUserData || false || { name: "Karina" };
console.log(updateUserData);

let prevUserData2 = null;
let updateUserData2 = null;

if (prevUserData2) {
  updateUserData = prevUserData2;
} else if (true) {
  updateUserData2 = true;
} else {
  updateUserData2 = { name: "User2" };
}
console.log(updateUserData2);

const isAdmin2 = true;

function helloAdmin() {
  console.log("Hello, Admin!");
}

if (isAdmin2) {
  helloAdmin();
}

if (isAdmin2) helloAdmin();

isAdmin2 && helloAdmin();

// Завдання:

function sayHello() {
  const to = "Karina";
  //  const to = undefined;

  // змініть код так, щоб він враховував відсутність
  // змінної to (в такому випадку використовуйте ":-)")

  console.log(`Hello, ${to}`);

  const result = to || ":-)";
  console.log(`Hello, ${result}`);
}
sayHello();

console.log(1 === 1);
console.log(1 == 1);

console.log("Hi" === "Hi");
console.log("Hi" == "Hi");

console.log(true === true);
console.log(true == true);

console.log(undefined === undefined);
console.log(undefined == undefined);

console.log(null === null);
console.log(null == null);

const obj1 = { a: 10 };
const obj2 = { a: 10 };

console.log(obj1 === obj2);
console.log(obj1 == obj2);

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2);
console.log(arr1 == arr2);

function f1() {}
function f2() {}

console.log(f1 === f2);
console.log(f1 == f2);

console.log(typeof "Karina");
console.log(typeof 4);
console.log(typeof true);

console.log(typeof undefined);
console.log(typeof { a: 10 });
console.log(typeof [1, 2, 3, 4, 5]);
console.log(typeof function f1() {});
console.log(typeof null);

let data = "1000";

if (typeof data === "string") {
  data = Number(data);
}

console.groupEnd();
