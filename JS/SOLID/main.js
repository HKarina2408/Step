// SOLID

// S - Single Responsibility
// O - Open - Closed Principe
// L - Liskov Substition Principe
// I - Interface Segragation
// D - Dependency Inversion

// S

const calculateMetrics = (a, b, metric) => {
  if (metric === "s") {
    return a * b;
  }

  if (metric === "p") {
    return 2 * a + 2 * b;
  }

  if (metric === "r") {
    return;
  }
};

console.log(calculateMetrics(2, 4, "p"));
console.log(calculateMetrics(4, 2, "s"));

const calculateP = (a, b) => 2 * a + 2 * b;
const calculateS = (a, b) => a * b;
const calculateR = (p) => p;

// const calculateS = () => {};

class API {
  constructor(url, headers, options) {
    this.url = url;
    this.headers = headers;
    this.options = options;
  }

  // posts

  getAllPosts() {
    fetch(this.url, { ...this.options });
  }

  getPost() {
    fetch(this.url, { ...this.options });
  }

  createPost() {
    fetch(this.url, { ...this.options });
  }

  deletePost() {
    fetch(this.url, { ...this.options });
  }

  // users

  getUsers() {
    fetch(this.url, { ...this.options });
  }

  getUser() {
    fetch(this.url, { ...this.options });
  }

  createUser() {
    fetch(this.url, { ...this.options });
  }

  deleteUser() {
    fetch(this.url, { ...this.options });
  }

  // images...
}

const api = new API("https://jsonplaceholder.typicode.com", {}, {});

// Завдання: Використати підхід Single Responsibility

class UserAPI {
  constructor(url, headers, options) {}

  getAllUsers() {}

  // ...
}

class PostAPI {
  constructor(url, headers, options) {}

  getAllPosts() {}

  //   ...
}

const usersAPI = new UserAPI();
const postsAPI = new PostAPI();

// O

class BaseBank {
  constructor(abonents) {
    this.abonents = abonents;

    this.invoices = [];
    this.cards = [];

    // new functionality
    this.installments = [];
  }

  invoice(proceeder, reciever, amount) {
    this.cards.push({ proceeder, reciever, amount });
  }

  createCard(balance, abonent) {
    this.cards.push({
      balance,
      owner: abonent.id,
      number: Math.random() * 100000000,
    });
  }

  destoryCard(number) {
    // ...
  }
}

class InstallmentBank extends BaseBank {
  constructor(abonents, installments) {
    super(abonents);

    this.installments = installments;
  }

  createCard(balance, abonent, cardType) {
    this.cards.push({ balance, abonent, cardType });
  }

  destoryCard(number) {
    const card = this.cards.find((card) => card.number === number);

    if (card.cardType === "credit" && card.balance <= 0)
      throw new Error("You can`t close this credit card");

    this.cards = this.cards.filter((card) => card.number !== number);
  }

  // NEW METHODS...
}

// L

const usersData = {};

const userData = {
  name: "Karina",
  age: 24,
  email: "email@gmail.com",
  password: "password",
  location: {
    city: "Kyiv",
    country: "Ukraine",
  },
};

const userDataPropotype = {
  name: "Oleg",
  age: 30,
};

const setUserInfo = (user) => {
  usersData[user.name] = user;
};

setUserInfo(userData);
setUserInfo(userDataPropotype);
console.log(usersData);

const avgAge =
  Object.values(usersData).reduce((acc, user) => (acc += user.age), 0) /
  Object.values(usersData).length;

console.log(avgAge);

// I

class User {
  constructor(name, age, city, email, password, id) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.email = email;
    this.password = password;
    this.id = id;
  }
}

const userInstance = new User({
  id: 1,
  name: "Karina",
  age: 24,
  email: "email@gmail.com",
  password: "fkmmdkf",
  city: "Kyiv",
});

class LoginUserData {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

const loginData = new LoginUserData("email1@gmail.com", "111111");

const loginUser = (loginData) => {
  // login process
  // will need email and password
};

//wrong
loginUser(userInstance);

//right
loginUser(loginData);

const registerUser = (registerData) => {
  // register process
  // will need email, name and password
};

class RegisterUserData {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

const registerData = new RegisterUserData(
  "Karina",
  "email2@gmail.com",
  "password"
);

// wrong
registerUser(userInstance);

// right
registerUser(registerData);

// D

// In TS interfaces and types

const dataExample = {
  users: [{ name: "", password: "" }],
  posts: [{ title: "", text: "" }],
  admin: { name: "", password: "", isAdmin: true },
};

class Data {
  constructor(data = dataExample) {
    this.data = data;
  }

  isUserAdmin(user = dataExample.users[0]) {
    return user.isAdmin;
  }

  setAdmin(user = dataExample.admin) {
    this.data.admin.name === user.name;
  }
}

const data = new Data({
  users: [{ name: "Karina", password: "111111" }],
  posts: [{ title: "Hello", text: "text" }],
  admin: { name: "Admin", password: "password", isAdmin: true },
});

// Завдання: Використовуючи один з принципів SOLID навести приклад його використання (до та після),
// вкажіть коментарем, який принцип ви застосували

// After
class API {
  constructor(username, contactInfo, preferences) {
    this.username = username;
    this.contactInfo = contactInfo;
    this.preferences = preferences;
  }

  updatePreferences() {
    return fetch(this.username, { ...this.preferences });
  }

  createPreferences() {
    return fetch(this.username, { ...this.preferences });
  }

  deletePreferences() {
    return fetch(this.username, { ...this.preferences });
  }
}

// Before Single Responsibility

class PreferencesAPI extends API {
  constructor(username, contactInfo, preferences) {
    super(username, contactInfo, preferences);
  }

  updatePreferences() {}

  createPreferences() {}

  deletePreferences() {}
}

const preferencesAPI = new PreferencesAPI();
