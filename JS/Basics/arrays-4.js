const arr = ["a", "b", "c"];

arr.forEach((e, i, arr) => {
  console.log(e, i, arr);
});

// callback
// forEach
function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i = i + 1) {
    callback(arr[i], i, arr);
  }
}

customForEach(arr, (e, i, arr) => console.log(e, i, arr));

function customMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    const newElement = callback(arr[i], i, arr);
    result.push(newElement);
  }

  return result;
}

[].map((e, i, arr) => {
  return e;
});
[].forEach((e, i, arr) => {});
[].filter((e, i, arr) => {});

const resultFromCustomMap = customMap([1, 2, 3, 4, 5], (e) => {
  return e * 10;
});
console.log(resultFromCustomMap);

const regularMapResult = [1, 2, 3, 4, 5].map((e) => e * 10);
console.log(regularMapResult);

function customFilter(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + 1) {
    const isRelevant = callback(arr[i], i, arr);

    if (isRelevant) {
      result.push(arr[i]);
    }
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filteredNumbers = numbers.filter((e) => {
  return e > 3;
});

console.log(filteredNumbers);

const filteredCustomNumbers = customFilter(numbers, (e) => {
  return e > 3;
});

console.log(filteredCustomNumbers);

// Завдання:
const elements = [{ x: 10 }, { x: 12 }, { x: 8 }];
// порахувати середнє арифметичне elements (x)

let sum = 0;

elements.forEach((obj) => {
  sum = sum + obj.x;
});

console.log(sum / elements.length);

// every
// some

const letters = ["a", "b", "c", "d"];

const areAllTheElementsStrings = letters.every(
  (e, i, arr) => typeof e === "string"
);

console.log(areAllTheElementsStrings);

// Завдання:
const numbers2 = [10, 20, 30, 40, 50];
// перевірте, чи ВСІ значення numbers2 є меншими за 100

const smallNumbers = numbers2.every((e) => e < 100);
console.log(smallNumbers);

const users = [
  { email: "email@gmail.com", age: 20 },
  { email: "email6@gmail.com", age: 18 },
  { email: "email12@gmail.com", age: 30 },
  { email: "email2@gmail.com", age: 10 },
];

const areAllUsersAdult = users.every((user) => user.age > 18);
console.log(areAllUsersAdult);

// some

const transactions = [
  { code: 121213, isValid: true, customer: { name: "Oleg" } },
  { code: 121213, isValid: false, customer: { name: "Igor" } },
  { code: 121213, isValid: false, customer: { name: "Alex" } },
  { code: 121213, isValid: true, customer: { name: "Katerina" } },
];

const isAnyTransactionInvalid = transactions.some((transactions) => {
  return !transactions.isValid;
});
console.log(isAnyTransactionInvalid);

// Завдання:
// 1. Перевірити, що ВСІ code кожної transaction дорівнюють 121213

const sameCode = transactions.every(
  (transaction) => transactions.code === 121213
);
console.log(sameCode);

function customSome(arr, callback) {
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    const criteria = callback(arr[i], i, arr);

    if (criteria) {
      return criteria;
    }
  }
  return result;
}

const defaultSome = [10, 90].some((e) => e > 10);
console.log(defaultSome);

const customSomeResult = customSome([10, 10], (e) => e > 10);
console.log(customSomeResult);

// 2. Перевірити, що є хоча б один customer тразакції, з name Katerina

const result = transactions.some(
  (transaction) => transaction.customer.name === "Katerina"
);
console.log(result);

// 3. Поверніть новий масив транзакцій, де будуть тільки данні: code, customer

const transactionMap = transactions.map((transactions) => {
  return {
    code: transactions.code,
    customer: transactions.customer,
  };
});
console.log(transactionMap);

// find

const primitives = [1, 2, 4, "Hello", true];

const numberOne = primitives.find((e, i, arr) => {
  return e > 1;
});

console.log(numberOne);

// Завдання:

const values = [12.5, 20.4, 1.2, 8.9];
// Знайдіть та поверніть числа:
// 1. 12.5
// 2. 1.2

const numberFind = values.find((e, i, arr) => e === 12.5);
const numberFind2 = values.find((e, i, arr) => e === 1.2);

console.log(numberFind, numberFind2);

const objects = [
  { a: 10, b: 12 },
  { a: 12, b: 11 },
  { a: 30, b: 12 },
  { a: 10, b: 19 },
];

const obj1 = objects.find((obj) => {
  return obj.a === 12 && obj.b === 11;
});

const obj2 = objects.find((obj) => {
  return obj.a === 10 || obj.b === 19;
});

console.log(obj1);
console.log(obj2);

const objectsWith10 = objects.filter((obj) => obj.a === 10);
console.log(objectsWith10);

// Завдання:
const objects2 = [
  { a: 10, b: 12 },
  { a: 12, b: 11 },
  { a: 30, b: 12 },
  { a: 10, b: 19 },
];

// Знайдіть об`єкт сума значень якого дорівнює 23

const result2 = objects2.find(({ a, b }) => a + b === 23);
console.log(result2);
