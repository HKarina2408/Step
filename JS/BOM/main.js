// DOM - document
// BOM - window

//
// window.open("https://google.com");
// window.close();

// alert
// prompt
// confirm

// alert("Hello, I am alert");
// const age = prompt("Please enter your age");
// alert(`Your age is ${age}`);

// const result  = confirm("Are you sure you want to close this tab");
// console.log(result)

// Завдання
// Запитати у користувача про необхідність перезавантажити сторінку (confirm)
// Якщо відповідь позитивна - робити перезавантаження

// const isReload = confirm("Reload the page?");
// if(isReload) {
//     document.location.reload()
// }

// window.location.reload()

// localStorage;
// sessionStorage;
// fetch;

// window.JSON;
// window.Audio;
// window.Infinity;
// window.NaN;
// window.undefined;
// window.navigator

window.Infinity;
window.NaN;
window.undefined;

console.log(Infinity / Infinity);
console.log(typeof NaN);
console.log(isNaN(NaN));
console.log();
console.log(undefined + 15);

window.undefined;
console.log(null);

console.log(typeof null);
console.log(typeof undefined);

function a() {
  const c = 1 + 2;
}

const resultA = a();
console.log(resultA);

const user = {
  email: "email@gmail.com",
  password: "password",
};

const jsonUser = JSON.stringify(user);
console.log(jsonUser);

const jsUser = JSON.parse(jsonUser);
console.log(jsUser);

// Завдання:
// Використовуючи prompt отримайте від користувача дані про html елемент:
// Перший prompt - тип тегу (назва - div, span…)
// Другий prompt - контент тегу (текст)

// Створіть та виведіть елемент на сторінку

function createElement() {
  const tagType = prompt("Element type");
  const content = prompt("Content");

  const element = document.createElement(tagType);
  element.textContent = content;

  document.body.appendChild(element);
}

createElement();
