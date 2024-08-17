// ES - 5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Person.prototype.method = function () {};

const person = new Person("Karina", 24);

console.log(person);

// ES-6

class PersonClass {
  constructor(name, age, skills) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  removeSkill(skill) {
    this.skills = this.skills.filter((sk) => sk !== skill);
  }
}

const personClassInstance = new PersonClass("Alina", 25, ["JavaScript"]);
personClassInstance.addSkill("React");
personClassInstance.removeSkill("JavaScript");
console.log(personClassInstance);

// Завдання:
// створити клас ProgrammingLanguage (name, programmers, rating)
// створити 2-3 екземпляра

class ProgrammingLanguage {
  constructor(name, programmers, rating) {
    this.name = name;
    this.programmers = programmers;
    this.rating = rating;
  }
  // Додайте метод changeRating(newRating) він має змінювати рейтинг
  changeRating(newRating) {
    this.rating = newRating;
  }
}

const js = new ProgrammingLanguage("JS", 10, 5);
console.log(js);

js.changeRating(8);
console.log(js);

// Legacy

class Car {
  constructor(brand, price, distance) {
    this.brand = brand;
    this.price = price;
    this.distance = distance;
  }

  ride(distance) {
    this.distance = this.distance + distance;
  }
}

const car = new Car("Audi", 20000, 0);
car.ride(100);
console.log(car);

class SportCar extends Car {
  constructor(brand, price, distance, speed) {
    super(brand, price, distance);

    this.speed = speed;
  }

  // overriding
  ride(distance) {
    this.distance = this.distance + distance + (distance * this.speed) / 100;
  }

  stage(newSpeed) {
    this.speed = newSpeed;
  }
}

const sportCar = new SportCar("Audi TT", 30000, 0, 250);
sportCar.ride(150);
sportCar.stage(300);
sportCar.ride(400);

// Won't work
// car.stage(30)

console.log(sportCar);

// Завдання:
// Person1 (name, age)
// Programmer1 (name, age, skills, salary)

// Реалізувати механізм наслідування (extends) Programmer => Person

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // описати метод sayHello у Person ("Hello, I am ${this.name}")
  // переписати його для Programmer так щоб у тексті вітання була salary
  //  ("Hello, I am ${this.name} ${this.salary}")
  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const person1 = new Person1("Karina", 24);
person1.sayHello();
console.log(person1);

class Programmer1 extends Person1 {
  constructor(name, age, skills, salary) {
    super(name, age);

    this.skills = skills;
    this.salary = salary;
  }
  sayHello() {
    console.log(`Hello, I am ${this.name} ${this.salary}`);
  }
}

const programmer1 = new Programmer1("Alina", 25, ["JS"], 25000);
programmer1.sayHello();
console.log(programmer1);

class Calculator {
  static PI = 3.14;

  constructor() {
    this.operations = [];
    this.currentOperationIndex = 0;
  }

  registerOperation(value) {
    this.operations.push(value);
    this.currentOperationIndex += 1;

    return value;
  }

  prevOperations() {
    // має повернути результат попередньої операції, aбо null
    this.currentOperationIndex -= 1;
    return this.operations[this.currentOperationIndex] || null;
  }
  nextOperations() {
    // має повернути результат наступної операції, aбо null
    this.currentOperationIndex += 1;
    return this.operations[this.currentOperationIndex] || null;
  }

  add() {
    return this.registerOperation(
      Array.from(arguments).reduce((acc, n) => (acc += n), 0)
    );
  }

  diff() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc -= n), args[0])
    );
  }

  multiply() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc *= n), args[0])
    );
  }

  divide() {
    const args = Array.from(arguments);
    return this.registerOperation(
      args.slice(1).reduce((acc, n) => (acc /= n), args[0])
    );
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2, 7, 4));
console.log(calculator.diff(10, 4, 3));
console.log(calculator.multiply(10, 10, 10));
console.log(calculator.divide(100, 10, 5));

console.log(calculator.operations);
console.log(calculator.prevOperations());
console.log(calculator.nextOperations());

console.log(Calculator.PI);
console.log(calculator.add(10, Calculator.PI));
