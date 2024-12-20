const arr = [100, 900, 200, 800];
const arrOfObjects = [{ x: 100 }, { x: 900 }, { x: 200 }, { x: 800 }];

arr.length;

arr.indexOf;
console.log(arr.indexOf(900));
arr.findIndex;

arr.includes;
console.log(arrOfObjects.includes({ x: 900 }));
arr.find;

const joinedArrayStr = arr.join(", ");
console.log(joinedArrayStr);

const names = ["igor", "oleg", "alex"];
console.log(names.join(", ").toUpperCase());
// Join [] -> string

const namesStr = "igor, oleg, alex";
const arrayNames = namesStr.split(", ");
console.log(arrayNames);

for (const element of arrayNames) {
  console.log(`${element[0].toUpperCase()}${element.slice(1)}`);
}

// Завдання:

const members = "member-1.member-2.member-3";
// Отримайте масив memberArray та виведіть лише цифру кожного member

// 1, 2, 3

const arrayMembers = members.split(".");

for (const element of arrayMembers) {
  console.log(`${element.slice(-1)}`);
}

const arr2 = [1, 2, 3, 4, 5];
// [5, 4, 3, 2, 1]

const reverseArray2 = arr2.reverse();
console.log(reverseArray2);

// Possible on inrerview
function reverseString(str) {
  // const arr = str.split("");
  // console.log(arr);

  // const reverseArray = arr.reverse();
  // console.log(reverseArray);

  // const jojned = reverseArray.join("");
  // console.log(jojned);

  return str.split("").reverse().join("");
}

const reversedString = reverseString("hello");
console.log(reversedString); // -> olleh

const arr3 = [];
const arr4 = new Array(1000);

arr4.fill(":-)", 0, 100);
arr4.fill("-", 101, 200);

// for (let i = 0; i < 1000; i = i + 1) {
//   arr4[i] = 0;
// }

console.log(arr4);

console.log(arr3.fill("*"));

// push, pop, shift, unshift

// push - adds an element at the end of array
// pop - removes an element from the end of array
// unshift - adds an element at the start of array
// shift - removes an element from the star of array

const arr5 = [1, 2, 3, 4, 5];
arr5[arr5.length] = 6;
const newLength = arr5.push(7);

console.log(arr5, newLength);

const lastElement = arr5.pop();
arr5.pop();
arr5.pop();
console.log(arr5, lastElement);

arr5.unshift(0);
arr5.unshift(-1);
arr5.unshift(-2);
console.log(arr5);

const removeElementShift = arr5.shift();
console.log(arr5, removeElementShift);

const arr6 = ["E", "A", "B", "C"];
// Відновіть алфавітний порядок
// врахуйте, що літери D немає у масиві, але вона потрібна

const removedE = arr6.shift();
const pushedD = arr6.push("D");
const pushedE = arr6.push("E");

console.log(arr6);

const arr7 = [300, 400, 100, 200, 500];
// Порахувати суму перших 3 числел

const sum = arr7.shift() + arr7.shift() + arr7.shift();

console.log(sum);

const arrayOfObjects = [{ x: 10 }, { x: 7 }, { x: 2 }];

// console.log(arrOfObjects[0]["y"].a);
arrOfObjects[1].x;
arrOfObjects[2].x;

for (const object of arrayOfObjects) {
  console.log(object.x);
  delete object.x;
}

arrayOfObjects.push({ x: 8 });
arrayOfObjects.unshift({ x: 10 });

console.log(arrayOfObjects);

const obj = {
  a: 10,
  b: 90,
  c: 50,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

const keys = Object.keys(obj);
const values = Object.values(obj);

for (const element of keys) {
  console.log(element);
}

for (let i = 0; i < keys.length; i = i + 1) {
  console.log("key:", keys[i]);
  console.log("values:", values[i]);
}

for (const key in obj) {
}

// Завдання:

const users = [
  { name: "Igor", age: 24 },
  { name: "Oleg", age: 29 },
  { name: "Alex", age: 30 },
  { name: "Joe", age: 14 },
];

// порахуйте суму всіх age користувачів

let ageSum = 0;

for (const user of users) {
  ageSum += user.age;
}

console.log(ageSum);
