// OOP

// legacy
// polimorphism
// incaplulation

//LEGACY

// extensional
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

// Admin => User - wrong
// User => Admin - right way

class Admin extends User {
  constructor(email, password, isAdmin) {
    super(email, password);
    this.isAdmin = isAdmin;
  }
}

// polimorphic

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  ride() {
    console.log(`The car is riding!`);
  }
}

const car = new Car("Ford", "blue");
car.ride();

class Bus extends Car {
  constructor(brand, color) {
    super(brand, color);
  }

  ride() {
    console.log(`Beep-beep. The bus is riding`);
  }
}

const bus = new Bus("Mersedes", "white");
bus.ride();

// Завдання:

// (id, biller, reciever)
class Invoice {
  constructor(id, biller, reciever) {
    this.id = id;
    this.biller = biller;
    this.reciever = reciever;
  }
}
// (id, biller, reciever, amount)
// 1. Написати наслідування на розширення
class DetailedInvoice extends Invoice {
  constructor(id, biller, reciever, amount) {
    super(id, biller, reciever);
    this.amount = amount;
  }
}

// name, age, email, credits
class Subject {
  // info - show info
  constructor(name, age, email, credits) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.credits = credits;
  }
  info() {
    console.table(this);
  }
}

// 2. Описати наслідування
// Subject => extensional => Reciever => polimorphic => Biller
// name, age, email, credits
class Reciever extends Subject {
  constructor(name, age, email, credits) {
    super(name, age, email, credits);
  }
  operate(detailedInvoice) {
    console.log("Detailed Invoice: ");
    console.table(detailedInvoice);
  }
}
// info - same
// operate(detailedInvoice) - shows detailed invoice

// name, age, email, credits
class Biller extends Reciever {
  constructor(name, age, email, credits) {
    super(name, age, email, credits);
  }
  operate(invoice) {
    console.log("Invoice ID: ", invoice.id);
  }
  // info - same
  // operate(invoice) - shows only invoice ID
}

const biller = new Biller("Biller1", 22, "biller-email@gmail.com", 14000);
const reciever = new Reciever(
  "Reciever",
  24,
  "reciever-email@gmail.com",
  20000
);

const invoice = new Invoice(1, biller, reciever);
const detailedInvoice = new DetailedInvoice(2, biller, reciever, 2000);

reciever.info();
reciever.operate(detailedInvoice);

biller.info();
biller.operate(invoice);

// Polimorphism

class Animal {
  constructor(name, animaltype) {
    this.name = name;
    this.animaltype = animaltype;
  }

  voice() {
    console.log(`Voice from ${this.animaltype} ${this.name}`);
  }
}

const cat = new Animal("Barsik", "cat");
cat.voice();

const dog = new Animal("Pluto", "dog");
dog.voice();

const fish = new Animal("Bruno", "fish");
fish.voice();

class Fish extends Animal {
  constructor(name, animaltype) {
    super(name, animaltype);
  }

  voice() {
    console.log(`I can't speak, I am fish`);
  }
}

const fish2 = new Fish("Fish2", fish);
fish2.voice();

// interface
// type
// private publoc readonly static
// legacy
// Generic<T, P>

// incapsulation

class Application {
  #accounts;

  constructor(accounts) {
    this.#accounts = accounts;
  }

  addAccount(account) {
    if (!account.id) throw new Error("This account has not id");
    this.#accounts.push(account);
  }

  removeAccount(account) {
    this.#accounts = this.#accounts.filter(({ id }) => id !== account.id);
  }

  getAccounts() {
    return this.#accounts;
  }
}

const application = new Application([]);
console.log(application.accounts);

application.addAccount({
  id: 1,
  email: "email1@gmail.com",
  password: "password",
});
console.log(application);
console.log(application.getAccounts());

const accounts = application.getAccounts();
accounts.push({ email: "wrong-account@gmail.com", password: "password" });
// const accountAfterFilter = accounts.filter((account) => account.id !== 1);

// console.log(accountAfterFilter, application);

console.log(application.getAccounts(), accounts);

// Завдання:

// name, email, private(budget)
// 1. Описати конструктор класу
// 2. Описати методи incerease(amount)/decrease(amount) budget
// 3. Описати метод getBudget
// 4. Описати метод getInfo (виводить всі дані в консоль)

class User1 {
  #budget;
  constructor(name, email, budget) {
    this.name = name;
    this.email = email;
    this.#budget = budget;
  }

  increase(amount) {
    this.#budget += amount;
  }
  decrease(amount) {
    this.#budget -= amount;
  }

  getBudget() {
    return this.#budget;
  }
  getInfo() {
    console.table(this);
  }
}

const user1 = new User1("Karina", "email1@gmail.com", 10000);
user1.increase(1000);
user1.getInfo();
console.log(user1);

