// DOM
// Dynamic

// Selectors
document;

// document.getElementById("id");
// document.getElementsByClassName("class");
// document.getElementsByTagName("tag");
// document.getElementsByName("name");

// document.querySelector();
// document.querySelectorAll();

const paragraph = document.querySelector("p");
const paragraphByClass = document.querySelector(".paragraph");
const paragraphById = document.querySelector("#p");

const innerredP = document.querySelector("body .paragraph");

console.log(paragraph);
console.log(paragraphByClass);
console.log(paragraphById);
console.log(innerredP);

const allParagraphs = document.querySelectorAll("p");
const allParagraphsByClass = document.querySelectorAll(".paragraph");

console.log(allParagraphs);
console.log(allParagraphsByClass);

//HTMLCollection vs Nodelist

// Array-like

const htmlCollectionOfP = document.getElementsByTagName("p");

console.log(htmlCollectionOfP.namedItem("name"));

for (const p of htmlCollectionOfP) {
  console.log(p);
}

// htmlCollectionOfP.namedItem; (id or name attributes)

const nodelistOfP = document.querySelectorAll("p");

nodelistOfP.forEach((p, i, list) => {
  console.log(p, i, list);
});
console.log(htmlCollectionOfP, nodelistOfP);

const obj = { name: "Karina" };

console.log(Object.keys(nodelistOfP));
console.log(Object.values(nodelistOfP));
console.log(Object.entries(nodelistOfP));

console.log(nodelistOfP.entries());
console.log(nodelistOfP.keys());
console.log(nodelistOfP.values());

console.log(nodelistOfP[0]);

// const myList = new NodeList();

// ONLY ITERABLE (Iterator must be defined)
Array.from([]);
[...[]];
new Array([]);

// Завдання:
const data = [1, 2, 3, 4, 5];
// 1. Створіть елемент div під кожен елемент масива data (+body)
// 2. За допомогою querySelectorAll виберіть ваші елементи за типом тегу
// 3. Видаліть зі сторінки всі div елменти з цифорою менше 3 (включно)

data
  .map((n) => {
    const element = document.createElement("div");
    element.textContent = n;
    document.body.appendChild(element);

    return element;
  })
  .filter((element) => +element.textContent <= 3)
  .forEach((element) => document.body.removeChild(element));

// Manipulators
document;

// NodeList;
// HTMLCollection;

// Possible types
// HTMLElement;
// Node;
// Element;

// create
const aside = document.createElement("aside");
document.body.appendChild(aside);

// update (content, attributes, styles)
aside.id = "aside";
aside.className = "aside";
// aside.classList

// data-attributes

const lastP = [...document.querySelectorAll("p")].at(-1);
console.log(lastP);

console.log(lastP.dataset);

aside.textContent = "Text to display";
aside.innerHTML = "Text";

aside.innerText = "Text2";
const colors = {
  r: 20,
  g: 30,
  b: Math.floor(Math.random() * 250),
};

aside.style.background = `rgb(${colors.r}, ${colors.g}, ${colors.b})`;

//delete
// aside.remove();
// document.body.removeChild(aside);

// replace

// Utils
document;

document.querySelectorAll("p").forEach((el) => (el.style.color = "red"));
document.querySelectorAll("h2").forEach((el) => (el.style.fontSize = "50px"));
document.querySelectorAll("div").forEach((div) => {
  div.remove();
});
