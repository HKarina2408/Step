// Threads

// Event Loop

// Call Stack

console.log(1);
console.log(11);

// Delayed tasks

// await

// Promise (resolved(fulfilled), rejected, processing(pending))

const promise = new Promise((resolve, reject) => {
  const message = "Hello from promise";
  console.log(message);

  setTimeout(() => {
    resolve(message);
  }, 3000);
});

console.log(111);

console.log(promise);

promise.then((data) => {
  console.log(data);
});

const promise1 = new Promise(function () {});

const data = {
  latitude: 123234351,
  longitude: 220342313,
};

// Завдання:
// Опишіть логіку створення Promise,
// що через секунду повертає дані координат (resolve)

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 1000);
});

console.log(promise3);

promise3.then((data) => {
  console.log(data);
});

// Promise.race;
// Promise.all;

const prom1 = new Promise((res) => {
  setTimeout(() => res("first"), 4000);
});

const prom2 = new Promise((res) => {
  setTimeout(() => res("second"), 5000);
});

const prom3 = new Promise((res) => {
  setTimeout(() => res("third"), 3000);
});

const prom4 = new Promise((resolve, reject) => {
  reject("The error text");
});

Promise.all([prom1, prom2, prom3]).then((results) => {
  console.log(results);
});

Promise.race([prom1, prom2, prom3]).then((order) => {
  console.log(order);
});

class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  race() {
    const result = Math.floor(Math.random() * (4000 - this.speed * 0.5));

    return new Promise((res) => {
      setTimeout(() => {
        res(
          `The car: ${this.name} has fineshed in: ${result} with speed: ${this.speed}`
        );
      }, result);
    });
  }
}

const cars = [
  new Car("Dodge Charger", "black", 250),
  new Car("Toyota GT", "blue", 210),
  new Car("Ford Mustang", "red", 260),
];

const racePromises = cars.map((car) => car.race());

Promise.race(racePromises).then((res) => {
  console.log(res);
});

// Завдання:
// Зібрати статистику перегонів за допомогою Promise.all
// Вивести інформацію не про перееможця, а про кожну машину, що приймала участь

Promise.all(racePromises).then((results) => {
  results.forEach((result) => console.log(result));
});

Promise.allSettled([prom1, prom2, prom3, prom4]).then((data) => {
  console.log(data);

  const fulfilledPromises = data.filter(
    (promise) => promise.status === "fulfilled"
  );

  console.log(fulfilledPromises);
});

const rejectPromise = new Promise((res, rej) => {
  const randValue = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randValue % 2 === 0) {
      res("P");
    } else {
      rej("N");
    }
  }, 2000);
});

// resolve - then
// reject - catch

rejectPromise
  .then((something) => console.log(something))
  .catch((err) => console.log(err));

const user = {
  name: "Oleg",
  age: 26,
  position: "Middle web Developer",
};

// - Створити Promise, що повератє дані корстувача через 3 секунди
// - Отримавши данні цього Promise описати логіку збереження даних у LS
// - Описати 1 Promise з відмовою (rej) - відловити відмову методом catch

const promiseUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(user);
  }, 3000);
}).then((userData) => localStorage.setItem("user", JSON.stringify(userData)));

new Promise((res, rej) => rej("Negative")).catch((err) => console.log(err));
