// const, let
// heap

// memory
// - Global
// - Closed (Scope - related)

// const b = 90;

// function a() {
//   const b = 10;
//   console.log(b);
// }

// console.log(b);

// a();

window.localStorage;
window.sessionStorage;

// document.cookie

localStorage.setItem("message", "Hello");
localStorage.setItem("email", "email@gmail.com");
localStorage.setItem("lastTab", "about");

// JSON -JavaScript Object Notation

const setting = {
  background: "red",
  count: 10,
};

const settingInJson = JSON.stringify(setting);
localStorage.setItem("settings", settingInJson);

const data = {
  x: 1,
  y: 9,
  z: 7,
};

// Завдання:
// Записати у LS дані data

const dataInJson = JSON.stringify(data);
localStorage.setItem("data", dataInJson);

// localStorage.setItem();

const jsonDataFromLs = localStorage.getItem("data");
const dataFromLs = JSON.parse(jsonDataFromLs);

console.log(dataFromLs);

// localStorage.setItem("setting", {
//   background: "red",
// });

localStorage.setItem("array", JSON.stringify([1, 2, 3, 4]));
localStorage.setItem("users", JSON.stringify([{ email: "email@gmail.com" }]));

const users = JSON.parse(localStorage.getItem("users"));
console.log(users);

// localStorage.setItem("array", [1, 2, 3, 4, 5]);
// console.log([1, 2, 3, 4, 5].toString());
// console.log([{ a: 1 }, { b: 2 }].toString());

const email = localStorage.getItem("email");
console.log(email);

// Завдання:
// Записати дані корстувача у localStorage (окремо): name, age, email, city
// Отримати доступ до даних: name, city

localStorage.setItem("name", "Karina");
localStorage.setItem("age", "24");
localStorage.setItem("email", "email1@gmail.com");
localStorage.setItem("city", "Kyiv");

const name = localStorage.getItem("name");
console.log(name);

const city = localStorage.getItem("city");
console.log(city);

localStorage.removeItem("name");

const emailInput = document.querySelector("#email-input");
emailInput.value = localStorage.getItem("email");

emailInput.addEventListener("input", (event) => {
  console.log("input event", event.target.value);
  localStorage.setItem("email", event.target.value);
});

console.log(localStorage.length);

console.log(localStorage.key(0));

for (let i = 0; i < localStorage.length; i++) {
  console.log(i, localStorage.key(i));
}

// Clears all the values!
// localStorage.clear()

// Session storage

// sessionStorage.setItem("sessionItem", "item");

const item = sessionStorage.getItem("sessionItem");
console.log(item);

sessionStorage.setItem("user", JSON.stringify({ name: "Karina" }));

// Завдання:

const tokens = [
  { type: "access", token: "1dad233rmfmwkmmr3rnm3m" },
  { type: "access", token: "4420djqejqe2e10" },
  { type: "refresh", token: "1sasqsqqdfwwfwfwfwf" },
  { type: "access", token: "aadndjn1k1k1dnsjfj" },
];

// 1. Записати всі токени (масив) у LS [tokens]
localStorage.setItem("tokes", JSON.stringify(tokens));

// 2. Записати останній з access токенів у SS [access]
// 3. Записати останній з refresh токенів у LS [refresh]
tokens.forEach((t) => {
  if (t.type === "access") {
    sessionStorage.setItem("access", t.token);
  }

  if (t.type === "refresh") {
    localStorage.setItem("refresh", t.token);
  }
});

// sessionStorage.clear()
// sessionStorage.removeItem("access")

const information = {
  usersQ: 12,
  admins: 2,
  posts: [{ title: "Title1" }, { title: "Title2" }],
};

// Завдання:
// - Використати LS для зберігання даних:  posts
// - Використати SS для зберігання даних: usersQ, admins
// - Написати функцію, що створює новий пост, оновлюючи
// дані у LS відповідно (новий пост додається до масиву)

localStorage.setItem("posts", JSON.stringify(information.posts));
sessionStorage.setItem("usersQ", information.usersQ);
sessionStorage.setItem("admins", information.admins);

function addNewPost(post) {
  const newPost = JSON.parse(localStorage.getItem("posts"));
  newPost.push(post);
  localStorage.setItem("posts", JSON.stringify(newPost));
}
addNewPost({ title: "Title3" });
