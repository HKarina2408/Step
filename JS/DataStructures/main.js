// [], {}

// Indexing
// Key - value approach

const arr = [1, 2, 3, 4, 5, 6];
const obj = {
  a: 10,
};

// Linked list, Queue, Hash-map, Array, List, Literal, Object, Map, Set

const users = [
  { id: "bvdj-bvsjbv-jsb", name: "Karina" },
  { id: "jgjg-jgg-kgibvi", name: "Igor" },
  { id: "jhb-bjbvgv-nln", name: "Alina" },
];

const userById = users.find((user) => (user.id = "jgjg-jgg-kgibvi"));

// for (const user of users) {
//   if (user.id === "jgjg-jgg-kgibvi") {
//     return user;
//   }
// }

// Завдання:
// Написати логіку, що з масиву користувачів повертає {userId: userData}

const usersData1 = {};

users.forEach((user) => {
  usersData1[user.id] = user;
});
console.log(usersData1);

const optimizedUsers = {
  "jgjg-jgg-kgibvi": { id: "jgjg-jgg-kgibvi", name: "Igor" },
  "bvdj-bvsjbv-jsb": { id: "bvdj-bvsjbv-jsb", name: "Karina" },
  "jhb-bjbvgv-nln": { id: "jhb-bjbvgv-nln", name: "Alina" },
};

const userById2 = optimizedUsers["jgjg-jgg-kgibvi"];

const usersData = Object.values(optimizedUsers);
const usersId = Object.keys(optimizedUsers);

class UserBS {
  constructor(users) {
    this.users = users;
  }

  getUser(id) {
    return this.users[id];
  }

  updateUser(id, data) {
    this.users[id] = { ...this.users[id], ...data };
  }

  deleteUser(id) {
    delete this.users[id];
  }

  createUser(id, data) {
    this.users[id] = { ...data, id };
  }
}

const usersBs = new UserBS(optimizedUsers);

usersBs.updateUser("bvdj-bvsjbv-jsb", { name: "Boris" });
usersBs.deleteUser("bvdj-bvsjbv-jsb");
const userById3 = usersBs.getUser("jhb-bjbvgv-nln");

console.log(usersBs, "usersBs");
console.log(userById3);

// Orders
// Queue
// FIFO standart

const winners = [
  { place: "1st", car: "Toyota", license: 11 },
  { place: "2st", car: "Car2", license: 15 },
  { place: "3st", car: "Ford", license: 13 },
];

const awardsTo = (winners) => {
  const awardedWinners = [];

  [...winners].forEach(() => {
    const winner = winners.shift();
    winner.prize = "Prize";
    awardedWinners.push(winner);
  });

  return awardedWinners;
};

console.log(awardsTo(winners));

Map;
Set;
Object;
Array;

// Set
const set = new Set();

set.add("Karina");
set.add("Igor");
set.add("Alina");
set.add("Alina");

const setObj = { a: 10 };

set.add(setObj);
set.add({ a: 11 });
set.add(setObj);

set.delete("Karina");
set.delete(setObj);

console.log(set.size);

set.clear();

console.log(set.has(setObj));

console.log(set);

const generateCoords = () => {
  return {
    x: Math.floor(Math.random() * 10),
    y: Math.floor(Math.random() * 10),
    z: Math.floor(Math.random() * 10),
  };
};

const minimizedCoords = new Set();

for (let i = 0; i < 100; i++) {
  const generatedCoords = generateCoords();
  const { x, y, z } = generatedCoords;
  minimizedCoords.add(`${x}${y}${z}`);
}

console.log(minimizedCoords);

const coords = [];

minimizedCoords.forEach((value) => {
  const [x, y, z] = value;
  coords.push({ x, y, z });
});

console.log(coords);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 3, 5, 7, 8];
const uniqueNumbers = Array.from(new Set(numbers));

console.log(uniqueNumbers);

// Завдання:
const orders = [
  { item: "Socks", price: 30 },
  { item: "TShirt", price: 20 },
  { item: "Socks", price: 30 },
  { item: "Shorts", price: 70 },
];

// Відсіяти лише унікальні товари у orders

const itemsTitle = orders.map((order) => order.item);
console.log(itemsTitle, "itemstitle");

const uniqueOrders = new Set(itemsTitle);
const uniqueOrdersData = [];

console.log(uniqueOrders, "uniqueOrders");

uniqueOrders.forEach((value) => {
  const orderIndex = orders.findIndex((order) => order.item === value);

  const orderData = { price: orders[orderIndex].price, item: value };
  uniqueOrdersData.push(orderData);
});

// Прибрати дублікати шляхом переведення даних у структуру {item: {item, price}}
//   {"Socks": { item: "Socks", price: 30 }...}

const mappedOrders = orders.reduce((acc, order) => {
    acc[order.item] = order;
  
    return acc;
  }, {});
  
  console.log(mappedOrders);
  

const names = ["Igor", "Nastya", "Oleg", "Max", "Max"];
// Прибрати дублікати (Set)
const uniqueNames = Array.from(new Set(names));
console.log(uniqueNames);
