Object;

const car = {
  name: "Ford",
  model: "Mustang",
  price: 40000,
  color: "black",
};

// car.vin = 75656567;

// not allowed

Object.defineProperty(car, "vin", {
  value: 68786565646,
  enumerable: true,
  writable: true,
  configurable: true,
});

console.log(Object.keys(car));
console.log(Object.values(car));

console.log(car.vin);
car.vin = 769677688;
console.log(car.vin);

delete car.vin;
console.log(car);

Object.defineProperty(car, "private", {
  value: "private",
});

console.log(car);

for (const key in car) {
  console.log(key, car[key]);
}

// Завдання:

const obj1 = { a: 10 };
// додайте значення b до obj1  так, щоб його ігнорували цикли

Object.defineProperty(obj1, "b", {
  value: 5768465486,
  enumerable: false,
});
console.log(obj1);

// Опишіть метод keys(obj) - він має повертати всі
// ключі obj через кому у вигляді строки

function keys(obj) {
  let objectKeys = "";

  for (const key in obj) {
    objectKeys = objectKeys.concat(`${key}, `);
  }
  console.log(objectKeys.slice(0, objectKeys.length - 2));
  return objectKeys;
}

keys(car);
// a, b, c, d, price, color

// Завдання
// Написати свій freeze (існуючі ключі НЕ можна міняти)

const obj2 = { a: 10 };
// Object.freeze(obj2);

Object.defineProperty(obj2, "a", {
  value: 10,
  writable: false,
});

obj2.a = 15;

console.log(obj2);

function freeze(obj) {
  for (const key in obj) {
    Object.defineProperty(obj, key, {
      value: obj[key],
      writable: false,
      enumerable: true,
      configurable: true,
    });
  }
}
freeze(obj2);

obj2.a = 10000;
obj2.b = 90;

console.log(obj2);

console.log(Object.entries(obj2));
console.log(Object.fromEntries([["a", 30]]));

console.log({ a: 10 }.hasOwnProperty("a"));
const obj3 = { b: 10 };
obj3.hasOwnProperty();

const user = {
  id: 0,
  name: "Admin",
  password: 6446565754,
};

const adminUser = {
  id: 1,
  name: "Admin",
  password: 6446565754,
  isAdmin: true,
};
console.log(user.isAdmin);
console.log(adminUser.isAdmin);

if (user.hasOwnProperty("id")) {
  console.log(user.id);
}

if ("id" in user) {
  console.log(user.id);
}

typeof user === "object";

function hasOwnProperty(object, keyToLookFor) {
  let keys = ``;

  for (const key in object) {
    keys = keys + `${key}|`;
  }

  //   console.log(keys);

  return keys.includes(keyToLookFor);
}
console.log(hasOwnProperty({ a: 10 }));

// Destruction of objects
const dataFromServer = {
  a: 10,
  b: 10,
  c: 10,
};

const { a, b, c } = dataFromServer;

console.log(a, b, c);
