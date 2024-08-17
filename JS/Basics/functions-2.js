// this
// console.log(this)

function sum(a, b) {
  return a + b;
}

// Function - Constructor

function Car(brand, color, price) {
  // this = {}
  // this.a = "a"
  this.brand = brand;
  this.color = color;
  this.price = price;

  this.miles = 0;
  this.owners = [];

  // methods
  this.ride = function (miles) {
    this.miles = this.miles + miles;
  };

  // Завдання:
  // Опишіть метод changeColor(newColor)
  // він має змінити колір автомобіля

  this.changeColor = function (newColor) {
    this.color = newColor;
  };

  this.addOwner = function (owner) {
    // Завдання: дописати логіку додавання owner
    this.owners.push(owner);
  };

  this.removeOwner = function (owner) {
    // Завдання: дописати логіку видалення owner
    this.owners = this.owners.filter((o) => o.fullname !== owner.fullname);
  };

  return this;
}

function Owner(fullname, age, budget) {
  // Завдання: опишіть Owner, наповніть його інформацією
  // Створіть екземпляр
  this.fullname = fullname;
  this.age = age;
  this.budget = budget;

  // опишіть метод birthday, що збільшує вік на +1

  this.birthday = function () {
    this.age = this.age + 1;
  };

  this.buyCar = function (car) {
    if (this.budget >= car.price) {
      this.budget = this.budget - car.price;
      car.addOwner(this);
    } else {
      console.log(
        `Potential owner ${this.fullname} has not enough money to buy the car ${car.brand}`
      );
    }
    // something should be done
  };

  return this;
}

const Owner1 = new Owner("Karina Hnatiuk", 24, 100000);
console.log(Owner1);

Owner1.birthday();
console.log(Owner1);

const anotherPerson = new Owner("Somebody", 30, 120000);

const car1 = new Car("Ford", "blue", 10000);
console.log(car1);
car1.ride(10);
console.log(car1);

car1.changeColor("red");
console.log(car1);

Owner1.buyCar(car1);
car1.removeOwner(Owner1);
console.log(car1);
car1.addOwner(anotherPerson);
console.log(car1, Owner1);

const car2 = new Car("Opel", "black", 15000);
console.log(car2);
car2.ride(5);
console.log(car2);

function Star(color) {
  this.color = color;

  this.x = Math.floor(Math.random() * 4500);
  this.y = Math.floor(Math.random() * 3500);

  this.appear = function () {
    document.body.innerHTML += `<div class="star" style="top: ${this.y}px; left: ${this.x}px"></div>
    `;
  };
  this.dissappear = function () {};
}

const testStar = new Star("white");
console.log(testStar);
testStar.appear()

// Завдання
// Написати цикл for генерації 100 зірок

for (let i = 0; i < 2000; i = i + 1) {
    const star = new Star ("white")
    star.appear()
}

