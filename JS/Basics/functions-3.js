// call, bind, apply
// this, arguments
// Function;

// BIND

const human = {
  name: "Karina",
  age: 24,
  show: function () {
    console.log(`${this.name}, ${this.age}`);
  },
};

human.show();

const car = {
  name: "Ford",
  age: 5,
};

car.show = human.show.bind(car);

car.show();

// Завдання:

const square = {
  a: 10,
  b: 10,
  calcP: function () {
    return this.a * 2 + this.b * 2;
  },
};

const rectangle = {
  a: 15,
  b: 20,
};

// перенести метод calcP для задоволення потреб rectangle

rectangle.calcP = square.calcP.bind(rectangle);
console.log(rectangle.calcP());

const data1 = {
  a: 10,
  add: function (b) {
    this.a = this.a + b;
    return this.a;
  },
};

console.log(data1.add(30));

const data2 = {
  a: 17,
};

data2.addTen = data1.add.bind(data2, 10);
data2.minusTen = data1.add.bind(data2, -10);
data2.addK = data1.add.bind(data2, 1000);
data2.add = data1.add.bind(data2);

console.log(data2.addTen());
console.log(data2.minusTen());
console.log(data2.addK());
console.log(data2.add(77));

// APPLY

const coords1 = {
  x: 10,
  y: 90,
  z: -20,
  calAvg: function () {
    return (this.x + this.y + this.z) / 3;
  },
  sum: function () {
    return this.x + this.y + this.z;
  },
  message: function (msg) {
    console.log(this.x, msg);
  },
};

console.log(coords1.calAvg());

const coords2 = {
  x: 40,
  y: 10,
  z: 10,
};

const oneTimeResult = coords1.calAvg.apply(coords2);
console.log(oneTimeResult);

// Завдання:
// Порахуйте суму значень coords2, використовуючи метод sum з coords1

const sumResult = coords1.sum.apply(coords2);
console.log(sumResult);

coords1.message.apply(coords2, ["Message"]);

const nums = [1, 5, 23, 1, 5, 23, 100];

const minValue = Math.min.apply(null, nums);
console.log(minValue);

// CALL

const car1 = {
  speed: 300,
  distance: 0,
  ride: function (distance) {
    this.distance = this.distance + distance;
    return this.distance;
  },
  slowDown: function (amount) {
    this.speed = this.speed - amount;
    return this.speed;
  },
};

const car2 = {
  speed: 200,
  distance: 100,
};

const distance = car1.ride.call(car2, 500);
console.log(distance);

// Завдання:
// використати метод slowDown car1 на користь car2

const amount = car1.slowDown.call(car2, 20);
console.log(amount);

// Examples

// .bind (this, a1, a2, a3)
// .apply (this, [a1, a2, a3])
// .call (this, a1, a2, a3)

// Prototype

function Programmer(name, age, salary, stack = []) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.stack = stack;

  //   this.learn = function (skill) {
  //     this.stack.push(skill);
  //     this.salary = this.salary + this.salary * 0.2;
  //   };
}

Programmer.prototype.learn = function (skill) {
  this.stack.push(skill);
  this.salary = this.salary + this.salary * 0.2;
};

const programmer1 = new Programmer("Karina", 24, 150000, ["JS", "HTML"]);
console.log(programmer1);

"Hello".slice();

programmer1.learn("Angular");

console.log(programmer1);

for (const key in programmer1) {
  console.log(key, programmer1[key]);
}

Array.prototype.f34 = function (msg) {
  this.push(msg + "F34");
  return this;
};
const arr = [1, 2, 3, 4, 5].f34("Hello");
console.log(arr);
