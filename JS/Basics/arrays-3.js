const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c"];

for (const element of numbers) {
  console.log(element);
}

// callback
numbers.forEach(function () {});
numbers.forEach((element) => console.log(element));

// Завдання:
// Опишіть forEach по масиву strings
strings.forEach((element) => console.log(element));
strings.forEach(console.log);

const fn = (a, b) => {
  return a + b;
};

function fn1(a, b) {
  return a + b;
}

console.log(fn(10, 20));
console.log(fn1(10, 90));

strings.forEach((str, i, array) => console.log(str, i, array));

const uppercasedStrings = strings.map((str) => {
  return str.toUpperCase();
});

const uppercasedStrings2 = strings
  .map((str) => str.toUpperCase())
  .forEach((str) => console.log(str));

console.log(uppercasedStrings, uppercasedStrings2);

//   Завдання:
const names = ["alex", "john", "bob"];
// трансформувати масив так, щоб кожен елемент починався з великої літери

const uppercasedNames = names.map((str) => str[0].toUpperCase() + str.slice(1));
console.log(uppercasedNames);

const arrayOfObjects = [{ a: 10 }, { a: 11 }, { a: 12 }];
arrayOfObjects.forEach((e) => {
  console.log(e.a);
});

const arrayOfObjectsAfter = arrayOfObjects.map((obj) => {
  obj.a = obj.a + 1;
  return obj;
});

console.log(arrayOfObjectsAfter);

// Завдання:
const coords = [
  { x: 2, y: 70, z: 80 },
  { x: 10, y: 20, z: 30 },
  { x: 20, y: 70, z: 60 },
  { x: 10, y: 8, z: 30 },
];

// Трансофрмуйте масив так,
// щоб у кожного елемнта був ключ sum зі значенням суми 3 його координат

let result = coords.map((obj) => {
  obj.sum = obj.x + obj.y + obj.z;
  return obj;
});

console.log(result);

// Поверніть з масива coords масив вигляду
// [{x: 2}, {x: 10}, {x: 20}, {x: 10}]

const result2 = coords.map((obj) => {
  return { x: obj.x };
});
console.log(result2);

// forEach, map

// filter
const tens = [10, 20, 30, 40, 50, 60, 1, 2, 3, 4];
const biggerThan30 = tens.filter((number) => number > 30);
console.log(biggerThan30);

const onlyWithZeros = tens
  .map((n) => {
    return n.toString();
  })
  .filter((str) => str.includes("0"))
  .forEach((e) => {
    console.log(+e);
  });

const users = [
  { name: "Igor", age: 24, city: "Kyiv" },
  { name: "Oleg", age: 34, city: "Kharkiv" },
  { name: "Alex", age: 12, city: "Kyiv" },
  { name: "Kate", age: 20, city: "Odessa" },
  { name: "Karina", age: 18, city: "Kyiv" },
];

const adultUser = users.filter((user) => {
  return user.age >= 18;
});
console.log(adultUser);

const adultUserFromKyiv = users.filter((user) => {
  return user.age >= 18 && user.city === "Kyiv";
});
console.log(adultUserFromKyiv);

// 1. Поверніть користувачів, яким 18+, або які з Києва
// 2. Поверніть користувачів ім`я яких містить літеру К

const adultKyiv = users.filter((user) => {
  return user.age >= 18 || user.city === "Kyiv";
});
console.log(adultKyiv);

const adultK = users.filter((user) => user.name.includes("K"));
console.log(adultK);

const obj = { a: 10 };
obj.a;
obj["a"];

const { a } = obj;

const nums = [1, 2, 3, 4, 5];
nums[0];
nums[1];

const [firstElem, secondElem] = nums;
console.log("nums", firstElem, secondElem);

const [l1, l2, l3, l4, l5] = "Hello";
console.log(l1, l2, l3, l4, l5);
