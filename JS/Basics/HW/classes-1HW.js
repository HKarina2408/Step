// Завдання: Створення класу для роботи з користувачами**

// Створіть клас **`Користувач`**, який має наступні властивості:

// - **`ім'я`** (рядок) - ім'я користувача
// - **`вік`** (число) - вік користувача
// - **`місто`** (рядок) - місто проживання користувача

// Наслідуйте користувача класом AdvancedUser, додайте поля `location`, `email`

// Cтворіть 2-3 методи для користувача та препепишіть один з них для AdvancedUser після наслідування

class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
  sayHello() {
    console.log(`Hello, I am ${this.name}`);
  }
  changeCity(city) {
    this.city = city;
  }
}

const user1 = new User("Karina", 24, "Kyiv");
console.log(user1);

user1.sayHello();

user1.changeCity("Kharkiv");
console.log(user1);

class AdvancedUser extends User {
  constructor(name, age, city, location, email) {
    super(name, age, city);

    this.location = location;
    this.email = email;
  }

  sayHello() {
    console.log(`Hello, I am ${this.name}. I am from ${this.location}`);
  }
}

const advancedUser = new AdvancedUser(
  "Alina",
  35,
  "Lviv",
  "Ukraine",
  "email1gmail.com"
);
console.log(advancedUser);
advancedUser.sayHello();
