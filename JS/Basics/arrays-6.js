// reduce
const numbers = [1, 2, 3, 4, 5];
const reducedSum = numbers.reduce((acc, n) => (acc += n), 0);
// (callback, initialAcc)

console.log(reducedSum, "reducedSum");

function customReduce(arr, callback, initialAcc) {
  let acc = initialAcc;

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}

const customReducedSum = customReduce(
  numbers,
  (acc, n) => {
    return (acc = acc + n);
  },
  0
);
console.log(customReducedSum, "customReducedSum");

// sort

const items = [4, 1, 9, 2, 3, 5];
console.log(items.sort((e1, e2) => e1 - e2));

const words = ["b", "x", "r", "u", "p"];
console.log(words.sort((l1, l2) => l1.localeCompare(l2)));

console.log("a".localeCompare("b"));

// Завдання:
const fruits = ["banana", "apple", "pineapple", "melon"];
// відсортувати fruits за алфавітом

console.log(fruits.sort((l1, l2) => l1.localeCompare(l2)));

const numbers2 = [60, 39, 34, 20, 80, 10, 22, 87];
// відсортувати числа  у порядку зростання

console.log(numbers2.sort((e1, e2) => e1 - e2));

const values = [{ a: 10 }, { a: 40 }, { a: 10 }, { a: 50 }, { a: 10 }];

const sortedValues = values.sort((obj1, obj2) => {
  return obj1.a - obj2.a;
});
console.log(sortedValues);

const objectsStrings = [
  { name: "Igor" },
  { name: "Oleg" },
  { name: "Alex" },
  { name: "Nastya" },
];

const sortedUsersWithNames = objectsStrings.sort((obj1, obj2) =>
  obj1.name.localeCompare(obj2.name)
);

console.log(sortedUsersWithNames);

// Розташуйте елементи у зворотньому до алфавітного порядку

const sortedUsersWithName2 = objectsStrings.sort((obj1, obj2) =>
  obj2.name.localeCompare(obj1.name)
);
console.log(sortedUsersWithName2);

const user2 = [
  { name: "Igor", age: 24 },
  { name: "Oleg", age: 20 },
  { name: "Alex", age: 30 },
  { name: "Nastya", age: 24 },
];

const sortedUsers2 = user2.sort((user1, user2) => {
  return user1.age - user2.age || user1.name.localeCompare(user2.name);
});
console.log(sortedUsers2);

const cities = [
  {
    name: "New York City",
    population: 8398748,
    rating: 4.5,
  },
  {
    name: "Los Angeles",
    population: 3990456,
    rating: 4.3,
  },
  {
    name: "Chicago",
    population: 2705994,
    rating: 4.2,
  },
  {
    name: "Houston",
    population: 2320268,
    rating: 4.1,
  },
  {
    name: "Phoenix",
    population: 1680992,
    rating: 4.0,
  },
  {
    name: "Philadelphia",
    population: 1584064,
    rating: 4.4,
  },
  {
    name: "San Antonio",
    population: 1547253,
    rating: 4.0,
  },
  {
    name: "San Diego",
    population: 1425976,
    rating: 4.6,
  },
  {
    name: "Dallas",
    population: 1343573,
    rating: 4.2,
  },
  {
    name: "San Jose",
    population: 1030119,
    rating: 4.7,
  },
];

// Завдання:
// відсортувати масив міст за критеріями:
// 1. rating
// 2. population
// 3. name - алфавітно

const result = cities.sort((city1, city2) => {
  return (
    city1.rating - city2.rating ||
    city1.population - city2.population ||
    city1.name.localeCompare(city2.name)
  );
});
console.log(result);

// splice
const elements = ["first", "second", "fourth"];

// splice(startIndex, quatityOfElementsToDelete, items...)
elements.splice(2, 0, "third");

console.log(elements);

elements.splice(0, 1, "1");
console.log(elements);
