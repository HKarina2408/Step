// Розрахувати суму довжин всіх імен користувачів

const users = [
  { name: "Igor", age: 24 },
  { name: "Oleg", age: 29 },
  { name: "Alex", age: 30 },
  { name: "Joe", age: 14 },
];

let totalSum = 0;

for (const user of users) {
  totalSum = totalSum + user.name.length;
}

console.log(totalSum);
